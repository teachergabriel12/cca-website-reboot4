import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import nodemailer from "nodemailer";
import type { ContactSubmission } from "@/lib/contact";

const FLOW_LABEL: Record<ContactSubmission["flow"], string> = {
  construtora: "Construtora / Incorporadora — Pós-obra",
  industria: "Indústria — Inspeção e Reabilitação",
};

function env(name: string): string | undefined {
  return process.env[name]?.trim() || undefined;
}

function formatDetails(details: ContactSubmission["details"]): string {
  return Object.entries(details)
    .map(([key, value]) => {
      const label = key.replace(/_/g, " ");
      if (Array.isArray(value)) {
        return `${label}:\n${value.map((v) => `  • ${v}`).join("\n")}`;
      }
      return `${label}: ${value}`;
    })
    .join("\n\n");
}

function buildLeadRecord(payload: ContactSubmission) {
  const leadId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  const createdAt = new Date().toISOString();

  return {
    id: leadId,
    createdAt,
    status: "novo" as const,
    source: "portal-contato-web",
    flow: payload.flow,
    flowLabel: FLOW_LABEL[payload.flow],
    contact: {
      nome: payload.nome,
      empresa: payload.empresa,
      cargo: payload.cargo,
      whatsapp: payload.whatsapp,
      email: payload.email,
    },
    qualification: payload.details,
  };
}

async function persistLead(record: ReturnType<typeof buildLeadRecord>) {
  const storagePath = env("LEADS_STORAGE_PATH");
  if (storagePath) {
    const filePath = path.resolve(storagePath);
    await mkdir(path.dirname(filePath), { recursive: true });
    await appendFile(filePath, `${JSON.stringify(record)}\n`, "utf8");
  }

  const webhookUrl = env("CRM_WEBHOOK_URL");
  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    });
    if (!response.ok) {
      throw new Error(`CRM webhook respondeu com status ${response.status}`);
    }
  }
}

async function sendLeadEmail(
  record: ReturnType<typeof buildLeadRecord>,
  payload: ContactSubmission,
) {
  const host = env("SMTP_HOST");
  const port = Number(env("SMTP_PORT") ?? "587");
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");
  const from = env("SMTP_FROM") ?? user;
  const to = env("LEADS_TO_EMAIL") ?? "contato@cca-engenharia.com.br";

  if (!host || !user || !pass || !from) {
    throw new Error(
      "SMTP não configurado. Defina SMTP_HOST, SMTP_USER, SMTP_PASS e SMTP_FROM no ambiente.",
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const subject = `[Portal CCA] Novo lead — ${FLOW_LABEL[payload.flow]} — ${payload.empresa}`;
  const text = [
    `ID do lead: ${record.id}`,
    `Data: ${record.createdAt}`,
    `Fluxo: ${record.flowLabel}`,
    "",
    "Dados de contato",
    `Nome: ${payload.nome}`,
    `Empresa: ${payload.empresa}`,
    `Cargo: ${payload.cargo}`,
    `WhatsApp: ${payload.whatsapp}`,
    `E-mail: ${payload.email}`,
    "",
    "Qualificação",
    formatDetails(payload.details),
  ].join("\n");

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject,
    text,
  });
}

export async function handleContactSubmission(payload: ContactSubmission) {
  if (!payload.nome?.trim() || !payload.email?.trim() || !payload.empresa?.trim()) {
    return Response.json(
      { ok: false, message: "Nome, empresa e e-mail são obrigatórios." },
      { status: 400 },
    );
  }

  const record = buildLeadRecord(payload);

  try {
    await persistLead(record);
    await sendLeadEmail(record, payload);

    return Response.json({
      ok: true,
      leadId: record.id,
      message: "Solicitação enviada com sucesso. Nossa equipe entrará em contato em breve.",
    });
  } catch (error) {
    console.error("[contact]", error);
    return Response.json(
      {
        ok: false,
        message:
          "Não foi possível enviar sua solicitação no momento. Tente novamente ou escreva para contato@cca-engenharia.com.br.",
      },
      { status: 500 },
    );
  }
}
