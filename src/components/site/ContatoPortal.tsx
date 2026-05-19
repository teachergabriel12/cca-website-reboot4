"use client";

import { useCallback, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import fieldImg from "@/assets/newimg1.jpeg";
import industrialImg from "@/assets/newimg2.jpeg";
import logoCCA from "@/assets/ChatGPT Image 11 de mai. de 2026, 15_25_03 (1).png";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Flow = null | "construtora" | "industria";
type StepNum = 1 | 2 | 3 | 4;

const MAIL = "contato@cca-engenharia.com.br";

const CONSTRUTORA_TEMAS = [
  "Garantia predial",
  "Assistência técnica",
  "Inspeção predial",
  "Diagnóstico técnico",
  "Laudos técnicos",
  "Organização operacional do pós-obra",
  "Controle técnico das ocorrências",
  "Fluxo de atendimento técnico",
] as const;

const CONSTRUTORA_TIPOS = [
  "Edifícios Verticais / Horizontais",
  "Condomínios",
  "Loteamentos",
  "Corporativos",
  "Galpões",
  "Obras públicas",
  "Outros",
] as const;

const INDUSTRIA_CONDICOES = [
  "Degradação de sistemas construtivos",
  "Corrosão estrutural",
  "Falhas em revestimentos",
  "Umidade / infiltração",
  "Integridade funcional",
  "Reabilitação em operação",
  "Continuidade operacional",
  "Inspeção técnica",
] as const;

const INDUSTRIA_SETORES = [
  "Alimentos",
  "Logística",
  "Energia",
  "Química",
  "Industrial leve",
  "Industrial pesada",
  "Outros",
] as const;

function toggleSetItem(set: Set<string>, key: string, checked: boolean) {
  const next = new Set(set);
  if (checked) next.add(key);
  else next.delete(key);
  return next;
}

export function ContatoPortal() {
  const [flow, setFlow] = useState<Flow>(null);
  const [step, setStep] = useState<StepNum>(1);

  const startConstrutora = useCallback(() => {
    setFlow("construtora");
    setStep(1);
  }, []);
  const startIndustria = useCallback(() => {
    setFlow("industria");
    setStep(1);
  }, []);
  const exitForm = useCallback(() => {
    setFlow(null);
    setStep(1);
  }, []);

  if (flow === "construtora") {
    return (
      <ConstrutoraFormWizard step={step} setStep={setStep} onCancel={exitForm} />
    );
  }
  if (flow === "industria") {
    return <IndustriaFormWizard step={step} setStep={setStep} onCancel={exitForm} />;
  }

  return (
    <>
      <section className="py-16 lg:py-24 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-35 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl lg:text-5xl font-medium text-center text-foreground text-balance max-w-3xl mx-auto">
            Selecione o contexto da sua operação
          </h2>

          <div className="mt-14 grid lg:grid-cols-2 gap-8">
            <article className="relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-lg">
              <div className="relative aspect-[16/10] shrink-0">
                <img src={fieldImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-electric">
                    Construtora / Incorporadora
                  </span>
                  <h3 className="font-display text-2xl text-cream mt-1">Pós-obra</h3>
                </div>
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Soluções técnicas aplicadas à garantia predial, assistência técnica, inspeção e
                  organização operacional de edificações.
                </p>
                <h4 className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-electric">
                  Áreas de atuação
                </h4>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground list-disc pl-5 flex-1">
                  <li>Garantia predial</li>
                  <li>Assistência técnica</li>
                  <li>Inspeção predial</li>
                  <li>Diagnóstico técnico</li>
                  <li>Prognóstico</li>
                  <li>Prescrição técnica</li>
                  <li>Laudos técnicos</li>
                  <li>Direcionamento técnico de reabilitação</li>
                  <li>Organização operacional do pós-obra</li>
                  <li>Controle técnico das ocorrências</li>
                </ul>
                <Button className="mt-8 w-full bg-cyan-electric text-deep hover:opacity-90" size="lg" onClick={startConstrutora}>
                  Solicitar Atendimento Técnico
                </Button>
              </div>
            </article>

            <article className="relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-lg">
              <div className="relative aspect-[16/10] shrink-0">
                <img src={industrialImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-electric">
                    Indústria
                  </span>
                  <h3 className="font-display text-2xl text-cream mt-1">Inspeção e Reabilitação</h3>
                </div>
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Soluções técnicas aplicadas à inspeção, diagnóstico e reabilitação de sistemas
                  construtivos em ambiente operacional industrial.
                </p>
                <h4 className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-electric">
                  Áreas de atuação
                </h4>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground list-disc pl-5 flex-1">
                  <li>Inspeção técnica</li>
                  <li>Diagnóstico técnico</li>
                  <li>Prognóstico de degradação</li>
                  <li>Avaliação de criticidade</li>
                  <li>Reabilitação de sistemas construtivos</li>
                  <li>Integridade operacional</li>
                  <li>Continuidade operacional</li>
                </ul>
                <Button className="mt-8 w-full bg-cyan-electric text-deep hover:opacity-90" size="lg" onClick={startIndustria}>
                  Solicitar Atendimento Técnico
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

function FormShell({
  title,
  badge,
  children,
  onBack,
}: {
  title: string;
  badge: string;
  children: React.ReactNode;
  onBack: () => void;
}) {
  return (
    <div className="min-h-dvh bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            ← Início
          </Link>
          <Link to="/contato" className="flex items-center gap-2" aria-label="CCA">
            <img src={logoCCA} alt="CCA" className="h-9 w-auto" />
          </Link>
          <button type="button" onClick={onBack} className="text-sm text-muted-foreground hover:text-foreground">
            Cancelar
          </button>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-10 lg:py-14">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-electric">{badge}</p>
        <h1 className="mt-2 font-display text-2xl sm:text-3xl font-medium text-foreground">{title}</h1>
        <div className="mt-8">{children}</div>
      </main>
    </div>
  );
}

function ConstrutoraFormWizard({
  step,
  setStep,
  onCancel,
}: {
  step: StepNum;
  setStep: (s: StepNum) => void;
  onCancel: () => void;
}) {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [cargo, setCargo] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [temas, setTemas] = useState<Set<string>>(() => new Set());
  const [tipos, setTipos] = useState<Set<string>>(() => new Set());
  const [numEmp, setNumEmp] = useState("");
  const [volume, setVolume] = useState("");

  const mailto = useMemo(() => {
    const lines = [
      "=== Atendimento Técnico Pós-obra (Construtora/Incorporadora) ===",
      `Nome: ${nome}`,
      `Empresa: ${empresa}`,
      `Cargo: ${cargo}`,
      `WhatsApp: ${whatsapp}`,
      `E-mail: ${email}`,
      "",
      "Temas da operação:",
      ...[...temas].map((t) => `• ${t}`),
      "",
      "Tipos de empreendimento:",
      ...[...tipos].map((t) => `• ${t}`),
      "",
      `Número de empreendimentos: ${numEmp}`,
      `Volume aproximado de atendimentos: ${volume}`,
    ];
    const body = lines.join("\n");
    return `mailto:${MAIL}?subject=${encodeURIComponent("Portal CCA — Construtora/Incorporadora")}&body=${encodeURIComponent(body)}`;
  }, [nome, empresa, cargo, whatsapp, email, temas, tipos, numEmp, volume]);

  const step1Valid = nome.trim() && empresa.trim() && cargo.trim() && whatsapp.trim() && email.trim();
  const step2Valid = temas.size > 0;
  const step3Valid = tipos.size > 0 && numEmp.trim() && volume.trim();

  if (step === 1) {
    return (
      <FormShell
        badge="Construtora / Incorporadora"
        title="Atendimento Técnico Pós-obra"
        onBack={onCancel}
      >
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
        Preencha as informações abaixo para que nossa equipe compreenda o cenário operacional da sua construtora/incorporadora e avalie como a gestão técnica do pós-obra pode trazer mais controle, padronização e eficiência para sua operação.
        </p>
        <div className="space-y-5">
          <div>
            <Label htmlFor="c-nome">Nome</Label>
            <Input id="c-nome" className="mt-1.5" value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="c-empresa">Empresa</Label>
            <Input id="c-empresa" className="mt-1.5" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="c-cargo">Cargo</Label>
            <Input id="c-cargo" className="mt-1.5" value={cargo} onChange={(e) => setCargo(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="c-wa">WhatsApp</Label>
            <Input id="c-wa" className="mt-1.5" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="c-email">E-mail</Label>
            <Input id="c-email" type="email" className="mt-1.5" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="mt-10 flex justify-end">
          <Button disabled={!step1Valid} onClick={() => setStep(2)} className="bg-cyan-electric text-deep">
            Próximo
          </Button>
        </div>
      </FormShell>
    );
  }

  if (step === 2) {
    return (
      <FormShell badge="Construtora / Incorporadora" title="Contexto Operacional" onBack={() => setStep(1)}>
        <p className="text-foreground font-medium mb-6">Quais temas fazem parte da sua operação?</p>
        <div className="space-y-4">
          {CONSTRUTORA_TEMAS.map((label) => (
            <label key={label} className="flex items-start gap-3 cursor-pointer">
              <Checkbox
                checked={temas.has(label)}
                onCheckedChange={(v) => setTemas((s) => toggleSetItem(s, label, v === true))}
                className="mt-0.5"
              />
              <span className="text-sm leading-snug">{label}</span>
            </label>
          ))}
        </div>
        <div className="mt-10 flex justify-between gap-3">
          <Button variant="outline" onClick={() => setStep(1)}>
            Voltar
          </Button>
          <Button disabled={!step2Valid} onClick={() => setStep(3)} className="bg-cyan-electric text-deep">
            Próximo
          </Button>
        </div>
      </FormShell>
    );
  }

  if (step === 3) {
    return (
      <FormShell badge="Construtora / Incorporadora" title="Características do Empreendimento" onBack={() => setStep(2)}>
        <div className="space-y-4 mb-8">
          {CONSTRUTORA_TIPOS.map((label) => (
            <label key={label} className="flex items-start gap-3 cursor-pointer">
              <Checkbox
                checked={tipos.has(label)}
                onCheckedChange={(v) => setTipos((s) => toggleSetItem(s, label, v === true))}
                className="mt-0.5"
              />
              <span className="text-sm leading-snug">{label}</span>
            </label>
          ))}
        </div>
        <div className="space-y-5">
          <div>
            <Label htmlFor="c-num">Número de empreendimentos</Label>
            <Input id="c-num" className="mt-1.5" value={numEmp} onChange={(e) => setNumEmp(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="c-vol">Volume aproximado de atendimentos técnicos</Label>
            <Input id="c-vol" className="mt-1.5" value={volume} onChange={(e) => setVolume(e.target.value)} />
          </div>
        </div>
        <div className="mt-10 flex justify-between gap-3">
          <Button variant="outline" onClick={() => setStep(2)}>
            Voltar
          </Button>
          <Button disabled={!step3Valid} onClick={() => setStep(4)} className="bg-cyan-electric text-deep">
            Próximo
          </Button>
        </div>
      </FormShell>
    );
  }

  return (
    <FormShell badge="Construtora / Incorporadora" title="Informações registradas com sucesso." onBack={onCancel}>
      <p className="text-muted-foreground leading-relaxed">
        As informações serão avaliadas pela equipe técnica da CCA para entendimento inicial das necessidades
        operacionais relacionadas ao pós-obra.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-between">
        <Button variant="outline" onClick={() => setStep(3)}>
          Voltar
        </Button>
        <Button asChild className="bg-cyan-electric text-deep">
          <a href={mailto}>Enviar Informações</a>
        </Button>
      </div>
    </FormShell>
  );
}

function IndustriaFormWizard({
  step,
  setStep,
  onCancel,
}: {
  step: StepNum;
  setStep: (s: StepNum) => void;
  onCancel: () => void;
}) {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [cargo, setCargo] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [condicoes, setCondicoes] = useState<Set<string>>(() => new Set());
  const [setores, setSetores] = useState<Set<string>>(() => new Set());
  const [areaOp, setAreaOp] = useState("");
  const [regime, setRegime] = useState("");
  const [intervencoes, setIntervencoes] = useState("");

  const mailto = useMemo(() => {
    const lines = [
      "=== Atendimento Técnico Industrial ===",
      `Nome: ${nome}`,
      `Empresa: ${empresa}`,
      `Cargo: ${cargo}`,
      `WhatsApp: ${whatsapp}`,
      `E-mail: ${email}`,
      "",
      "Condições da operação:",
      ...[...condicoes].map((t) => `• ${t}`),
      "",
      "Setores / tipos:",
      ...[...setores].map((t) => `• ${t}`),
      "",
      `Área operacional aproximada: ${areaOp}`,
      `Regime operacional: ${regime}`,
      `Intervenções recorrentes: ${intervencoes}`,
    ];
    return `mailto:${MAIL}?subject=${encodeURIComponent("Portal CCA — Indústria")}&body=${encodeURIComponent(lines.join("\n"))}`;
  }, [nome, empresa, cargo, whatsapp, email, condicoes, setores, areaOp, regime, intervencoes]);

  const step1Valid = nome.trim() && empresa.trim() && cargo.trim() && whatsapp.trim() && email.trim();
  const step2Valid = condicoes.size > 0;
  const step3Valid = setores.size > 0 && areaOp.trim() && regime.trim() && intervencoes.trim();

  if (step === 1) {
    return (
      <FormShell badge="Indústria" title="Atendimento Técnico Industrial" onBack={onCancel}>
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
          Preencha as informações abaixo para que nossa equipe compreenda as condições operacionais do ativo
          e identifique possíveis necessidades técnicas.
        </p>
        <div className="space-y-5">
          <div>
            <Label htmlFor="i-nome">Nome</Label>
            <Input id="i-nome" className="mt-1.5" value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="i-empresa">Empresa</Label>
            <Input id="i-empresa" className="mt-1.5" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="i-cargo">Cargo</Label>
            <Input id="i-cargo" className="mt-1.5" value={cargo} onChange={(e) => setCargo(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="i-wa">WhatsApp</Label>
            <Input id="i-wa" className="mt-1.5" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="i-email">E-mail</Label>
            <Input id="i-email" type="email" className="mt-1.5" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="mt-10 flex justify-end">
          <Button disabled={!step1Valid} onClick={() => setStep(2)} className="bg-cyan-electric text-deep">
            Próximo
          </Button>
        </div>
      </FormShell>
    );
  }

  if (step === 2) {
    return (
      <FormShell badge="Indústria" title="Contexto Operacional do Ativo" onBack={() => setStep(1)}>
        <p className="text-foreground font-medium mb-6">Quais condições fazem parte da operação do ativo?</p>
        <div className="space-y-4">
          {INDUSTRIA_CONDICOES.map((label) => (
            <label key={label} className="flex items-start gap-3 cursor-pointer">
              <Checkbox
                checked={condicoes.has(label)}
                onCheckedChange={(v) => setCondicoes((s) => toggleSetItem(s, label, v === true))}
                className="mt-0.5"
              />
              <span className="text-sm leading-snug">{label}</span>
            </label>
          ))}
        </div>
        <div className="mt-10 flex justify-between gap-3">
          <Button variant="outline" onClick={() => setStep(1)}>
            Voltar
          </Button>
          <Button disabled={!step2Valid} onClick={() => setStep(3)} className="bg-cyan-electric text-deep">
            Próximo
          </Button>
        </div>
      </FormShell>
    );
  }

  if (step === 3) {
    return (
      <FormShell badge="Indústria" title="Características Operacionais" onBack={() => setStep(2)}>
        <div className="space-y-4 mb-8">
          {INDUSTRIA_SETORES.map((label) => (
            <label key={label} className="flex items-start gap-3 cursor-pointer">
              <Checkbox
                checked={setores.has(label)}
                onCheckedChange={(v) => setSetores((s) => toggleSetItem(s, label, v === true))}
                className="mt-0.5"
              />
              <span className="text-sm leading-snug">{label}</span>
            </label>
          ))}
        </div>
        <div className="space-y-5">
          <div>
            <Label htmlFor="i-area">Área operacional aproximada</Label>
            <Input id="i-area" className="mt-1.5" value={areaOp} onChange={(e) => setAreaOp(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="i-regime">Regime operacional</Label>
            <Input id="i-regime" className="mt-1.5" value={regime} onChange={(e) => setRegime(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="i-int">Intervenções recorrentes</Label>
            <Input id="i-int" className="mt-1.5" value={intervencoes} onChange={(e) => setIntervencoes(e.target.value)} />
          </div>
        </div>
        <div className="mt-10 flex justify-between gap-3">
          <Button variant="outline" onClick={() => setStep(2)}>
            Voltar
          </Button>
          <Button disabled={!step3Valid} onClick={() => setStep(4)} className="bg-cyan-electric text-deep">
            Próximo
          </Button>
        </div>
      </FormShell>
    );
  }

  return (
    <FormShell badge="Indústria" title="Informações registradas com sucesso." onBack={onCancel}>
      <p className="text-muted-foreground leading-relaxed">
        As informações serão avaliadas pela equipe técnica da CCA para entendimento inicial das necessidades
        relacionadas às condições operacionais do ativo industrial.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-between">
        <Button variant="outline" onClick={() => setStep(3)}>
          Voltar
        </Button>
        <Button asChild className="bg-cyan-electric text-deep">
          <a href={mailto}>Enviar Informações</a>
        </Button>
      </div>
    </FormShell>
  );
}
