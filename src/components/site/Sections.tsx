import { useReveal, useCountUp } from "@/hooks/use-reveal";
import industrialImg from "@/assets/newimg2.jpeg";
import sistemaMockImg from "@/assets/VS PC VS MOBILE MOCK SITE 1.png";
import fieldImg from "@/assets/newimg1.jpeg";
import logoCCA from "@/assets/ChatGPT Image 11 de mai. de 2026, 15_25_03 (1).png";

/* Helper — small section eyebrow */
function Eyebrow({ n, label }: { n: string; label: string }) {
  return null;
}

/* TELA 2 — DOR DO CLIENTE */
export function Problema() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    {
      n: "01",
      t: "Atendimento pode ser mais ágil",
      d: "Chamados técnicos podem ser analisados com mais rapidez quando há critérios e fluxo definidos.",
    },
    {
      n: "02",
      t: "Oportunidade de reduzir retrabalho",
      d: "A padronização técnica evita ciclos repetitivos e melhora a eficiência da equipe.",
    },
    {
      n: "03",
      t: "Padronização em desenvolvimento",
      d: "Processos claros permitem uniformidade na análise e na tomada de decisão.",
    },
    {
      n: "04",
      t: "Decisões técnicas mais consistentes",
      d: "Laudos estruturados trazem mais segurança e alinhamento entre áreas.",
    },
    {
      n: "05",
      t: "Melhor controle de custos",
      d: "Com gestão técnica adequada, é possível reduzir desperdícios e evitar custos invisíveis.",
    },
  ];
  return (
    <section
      id="problema"
      ref={ref}
      className="reveal site-slide py-28 lg:py-36 relative bg-background overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg-light opacity-60 pointer-events-none" />
      {/* Section divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-electric/25 to-transparent opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-cyan-electric/8 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <Eyebrow n="02" label="O problema" />
            <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-foreground text-balance">
              Transforme sua pós-obra em um{" "}
              <span className="text-gradient">processo estruturado</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Após a entrega, é comum que os chamados sejam direcionados ao SAC
              sem um fluxo técnico bem definido. Com uma abordagem estruturada,
              é possível ganhar previsibilidade, reduzir retrabalho e tomar
              decisões com mais segurança.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3">
              {items.map((it, idx) => (
                <div
                  key={it.n}
                  className={`relative overflow-hidden p-7 rounded-xl bg-deep text-cream border border-cream/10 hover:bg-ink hover:border-cyan-electric/30 hover:-translate-y-1 transition-all group ${
                    idx === items.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="absolute inset-0 grid-bg-dark opacity-30 pointer-events-none" />
                  <div className="absolute inset-0 gradient-aurora opacity-70 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-br from-deep/40 via-transparent to-transparent pointer-events-none" />

                  <div className="flex items-start justify-between mb-3">
                    <div className="relative font-display text-xl lg:text-2xl text-cream leading-tight">
                      {it.t}
                    </div>
                    <span className="relative font-mono text-[10px] text-cream/60">{it.n}</span>
                  </div>
                  <p className="relative text-sm text-cream/70 leading-relaxed">{it.d}</p>
                  <div className="relative mt-5 h-0.5 bg-cream/15 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-electric w-0 group-hover:w-full transition-all duration-700" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* TELA 3 — VIRADA (reposicionamento) */
export function Solucao() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="pilares"
      ref={ref}
      className="reveal site-slide py-28 lg:py-40 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg-light opacity-55 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-cyan-electric/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-blue-soft/15 rounded-full blur-3xl" />
      {/* Section divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-electric/25 to-transparent opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-cyan-electric/8 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <Eyebrow n="05" label="Pilares da metodologia" />
          <h2 className="font-display text-5xl lg:text-7xl xl:text-8xl font-medium leading-[0.98] tracking-tight text-balance text-foreground">
            Gestão técnica transforma a garantia predial em um{" "}
            <span className="text-gradient">processo controlado</span>
          </h2>
          <p className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Com critérios técnicos, padronização e acompanhamento estruturado, a pós-obra deixa
            de ser reativa e passa a operar com previsibilidade e controle.
          </p>
        </div>
        <div className="lg:col-span-5 grid grid-cols-2 gap-3">
          {[
            { k: "Pilar 01", v: "Controlado", d: "Controle dos chamados e das decisões técnicas" },
            { k: "Pilar 02", v: "Padronizado", d: "Critérios técnicos definidos para cada situação" },
            { k: "Pilar 03", v: "Rastreável", d: "Histórico completo das ações e atendimentos" },
            { k: "Pilar 04", v: "Orientado por dados", d: "Decisões baseadas em indicadores reais" },
          ].map((it) => (
            <div
              key={it.k}
              className="relative overflow-hidden p-6 lg:p-8 rounded-xl bg-deep text-cream border border-cream/10 hover:bg-ink hover:border-cyan-electric/30 transition-colors group min-h-[110px] lg:min-h-[140px]"
            >
              <div className="absolute inset-0 grid-bg-dark opacity-30 pointer-events-none" />
              <div className="absolute inset-0 gradient-aurora opacity-70 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-deep/40 via-transparent to-transparent pointer-events-none" />

              <div className="relative font-mono text-[10px] lg:text-[11px] uppercase tracking-[0.25em] text-cyan-electric mb-2">
                {it.k}
              </div>
              <div className="relative font-display text-xl lg:text-3xl text-cream leading-[1.05] tracking-tight">
                {it.v}
              </div>
              <p className="relative mt-3 text-sm lg:text-[15px] text-cream/75 leading-relaxed">
                {it.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* TELA 4 — SOLUÇÃO (Gestão Técnica da Garantia Predial) */
export function Plataforma() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    { t: "Controle total das ocorrências", d: "Cada caso registrado, classificado e acompanhado do início ao fim." },
    { t: "Padronização dos processos", d: "Metodologia única aplicada a toda a operação." },
    { t: "Diagnósticos assertivos", d: "Análise técnica baseada em evidências e histórico." },
    { t: "Decisões com base sólida", d: "Cada decisão sustentada por dados rastreáveis." },
    { t: "Visão completa do ativo", d: "Painel integrado com a saúde técnica do empreendimento." },
  ];
  return (
    <section
      id="solucao"
      ref={ref}
      className="reveal site-slide py-28 lg:py-36 bg-deep text-cream relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg-dark opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-electric/10 rounded-full blur-3xl" />
      {/* Section divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-cream/6 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Eyebrow n="04" label="A solução" />
          <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance">
            Gestão Técnica da{" "}
            <span className="text-gradient">Garantia Predial</span>.
          </h2>
          <p className="mt-6 text-lg text-cream/75 leading-relaxed">
            Estruturamos todo o pós-obra com metodologia técnica e uma plataforma
            digital integrada que organiza cada etapa da operação.
          </p>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
          {items.map((it, i) => (
            <div
              key={it.t}
              className={`p-7 rounded-xl glass border border-cream/10 hover:bg-cream/10 hover:-translate-y-1 transition-all group ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="font-display text-xl lg:text-2xl text-cream leading-tight">{it.t}</div>
                <span className="font-mono text-[10px] text-cream/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-sm text-cream/70 leading-relaxed">{it.d}</p>
              <div className="mt-5 h-0.5 bg-cream/15 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-electric w-0 group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* TELA 4.5 — NOSSO SISTEMA */
export function Sistema() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="sistema"
      ref={ref}
      className="reveal site-slide py-28 lg:py-36 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg-light opacity-45 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-[520px] h-[520px] bg-cyan-electric/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] bg-blue-soft/10 rounded-full blur-3xl" />

      {/* Section divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-electric/25 to-transparent opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-cyan-electric/8 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <Eyebrow n="10" label="Nosso sistema" />
          <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground">
            Um sistema técnico{" "}
            <span className="text-gradient">centralizado</span> para decisões seguras
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Centralizamos as etapas do pós-obra na plaforma: Demanda, Registro,
            Triagem, Planejamento, Inspeção, Diagnóstico, Prescrição técnica, Laudo e Fechamento. Assim, você ganha previsibilidade,
            reduz retrabalho e mantém evidências auditáveis.
          </p>
        </div>

        <div className="lg:col-span-7 relative">
          <div className="relative">
            <img
              src={sistemaMockImg}
              alt="Plataforma CCA — mockups desktop e mobile"
              className="w-full h-auto object-contain"
              loading="lazy"
              width={2400}
              height={1350}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* TELA 5 — COMO FUNCIONA (fluxo) */
export function Fluxo() {
  const ref = useReveal<HTMLDivElement>();
  const steps = [
    "Demanda", "Registro", "Triagem", "Planejamento", "Inspeção",
    "Diagnóstico", "Prescrição técnica", "Laudo", "Fechamento",
  ];
  return (
    <section
      id="fluxo"
      ref={ref}
      className="reveal site-slide py-28 lg:py-36 bg-deep text-cream relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg-dark opacity-30 pointer-events-none" />
      <div className="absolute inset-0 gradient-aurora opacity-70 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 lg:items-center">
          <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0 mb-12 lg:mb-0">
            <div className="inline-flex">
              <Eyebrow n="04" label="Fluxo operacional" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.02] tracking-tight text-balance">
              Gestão técnica estruturada em{" "}
              <span className="text-gradient">todas as etapas</span> da pós-obra
            </h2>
            <p className="mt-6 text-cream/75 text-lg leading-relaxed">
              Cada etapa é conduzida com critérios técnicos, garantindo rastreabilidade,
              padronização e segurança na tomada de decisão.
            </p>
          </div>

          <div className="relative min-w-0">
          {/* Mobile — timeline cards (like the reference) */}
          <ol className="sm:hidden relative">
            {/* dashed spine */}
            <div className="pointer-events-none absolute left-3 top-2 bottom-2 border-l border-dashed border-border/70" />

            {steps.map((s, i) => {
              const flip = i % 2 === 1;
              const n = String(i + 1).padStart(2, "0");
              return (
                <li key={s} className="relative py-2">
                  {/* node dot on the spine */}
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-electric shadow-[0_0_0_4px_oklch(0.78_0.15_220/0.10)]" />

                  {/* card */}
                  <div className="relative px-9">
                    <div
                      className={`relative overflow-hidden rounded-2xl bg-deep border border-cream/10 shadow-[0_1px_2px_oklch(0.16_0.04_250/0.10),0_18px_36px_oklch(0.16_0.04_250/0.18)] h-16 flex items-center ${
                        flip ? "flex-row-reverse text-right" : "flex-row text-left"
                      }`}
                    >
                      {/* card background style: grid + aurora + fade */}
                      <div className="absolute inset-0 grid-bg-dark opacity-35 pointer-events-none" />
                      <div className="absolute inset-0 gradient-aurora opacity-80 pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-r from-deep/60 via-deep/80 to-ink/60 pointer-events-none" />

                      <div className="min-w-0 flex-1">
                        <div
                          className={`relative font-display text-[1.02rem] text-cream font-semibold leading-tight truncate ${
                            flip ? "pr-12 pl-5" : "pl-12 pr-5"
                          }`}
                        >
                          {s}
                        </div>
                      </div>
                    </div>

                    {/* number bubble (alternates side) — overlaps card */}
                    <div
                      className={`pointer-events-none absolute top-1/2 -translate-y-1/2 z-20 ${
                        flip ? "-right-2" : "-left-2"
                      }`}
                    >
                      <div className="relative w-14 h-14 rounded-full bg-deep/90 backdrop-blur border-[3px] border-cyan-electric/55 shadow-[0_0_0_1px_oklch(0.78_0.15_220/0.22),0_18px_38px_oklch(0.16_0.04_250/0.18)] grid place-items-center">
                        <div className="absolute -inset-2 rounded-full bg-cyan-electric/15 blur-md" />
                        <span className="relative font-display text-[15px] tracking-tight text-cyan-electric drop-shadow-[0_1px_0_oklch(0.98_0.005_240/0.7)]">
                          {n}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Tablet — grid */}
          <div className="hidden sm:grid lg:hidden grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div
                key={s}
                className="group flex flex-col items-start gap-4 relative"
              >
                <div className="relative z-10 w-16 h-16 rounded-full bg-card border border-border group-hover:border-cyan-electric group-hover:bg-cyan-electric group-hover:shadow-[0_0_30px_oklch(0.78_0.15_220/0.5)] transition-all duration-300 flex items-center justify-center font-mono text-sm text-foreground group-hover:text-deep shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0">
                  <div className="font-display text-lg lg:text-xl text-foreground leading-tight">
                    {s}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop — timeline intercalada (coluna direita) */}
          <ol className="hidden lg:flex lg:flex-col lg:justify-between lg:h-[min(58dvh,560px)] relative w-full">
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-2 bottom-2 border-l border-dashed border-border/70" />

            {steps.map((s, i) => {
              const flip = i % 2 === 1;
              const n = String(i + 1).padStart(2, "0");
              return (
                <li key={s} className="relative shrink-0">
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-electric shadow-[0_0_0_4px_oklch(0.78_0.15_220/0.10)]" />

                  <div className="grid grid-cols-2 gap-x-4 items-center">
                    <div className={`${flip ? "col-start-2 flex justify-start" : "col-start-1 flex justify-end"}`}>
                      <div className="relative w-full max-w-[300px]">
                        <div className="relative overflow-hidden rounded-xl bg-deep border border-cream/10 shadow-[0_1px_2px_oklch(0.16_0.04_250/0.10),0_12px_24px_oklch(0.16_0.04_250/0.16)] h-12 flex items-center">
                          <div className="absolute inset-0 grid-bg-dark opacity-35 pointer-events-none" />
                          <div className="absolute inset-0 gradient-aurora opacity-80 pointer-events-none" />
                          <div className="absolute inset-0 bg-gradient-to-r from-deep/60 via-deep/80 to-ink/60 pointer-events-none" />

                          <div className="min-w-0 flex-1">
                            <div
                              className={`relative font-display text-[0.9375rem] text-cream font-semibold leading-tight truncate ${
                                flip ? "pl-12 pr-4" : "pr-12 pl-4"
                              } ${flip ? "text-left" : "text-right"}`}
                            >
                              {s}
                            </div>
                          </div>
                        </div>

                        <div
                          className={`pointer-events-none absolute top-1/2 -translate-y-1/2 z-20 ${
                            flip ? "-left-1.5" : "-right-1.5"
                          }`}
                        >
                          <div className="relative w-11 h-11 rounded-full bg-deep/85 backdrop-blur border-2 border-cyan-electric/55 shadow-[0_0_0_1px_oklch(0.78_0.15_220/0.22),0_12px_24px_oklch(0.16_0.04_250/0.16)] grid place-items-center">
                            <div className="absolute -inset-1.5 rounded-full bg-cyan-electric/15 blur-md" />
                            <span className="relative font-display text-[13px] tracking-tight text-cyan-electric drop-shadow-[0_1px_0_oklch(0.98_0.005_240/0.7)]">
                              {n}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${flip ? "col-start-1" : "col-start-2"}`} />
                  </div>
                </li>
              );
            })}
          </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* TELA 6 — DIFERENCIAL TECNOLÓGICO (substitui Resultados original) */
export function Resultados() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    { t: "Dashboard com indicadores", n: "01" },
    { t: "Kanban de chamados", n: "02" },
    { t: "Chat integrado", n: "03" },
    { t: "Upload de imagens e arquivos", n: "04" },
    { t: "Tags e classificação de risco", n: "05" },
    { t: "Notificações automáticas", n: "06" },
    { t: "Histórico completo do ativo", n: "07" },
    { t: "Links para ordens de serviço", n: "08" },
  ];
  return (
    <section
      id="plataforma"
      ref={ref}
      className="reveal site-slide py-28 lg:py-36 bg-deep text-cream relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg-dark opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-electric/8 rounded-full blur-3xl" />
      {/* Section divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-cream/6 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 max-w-3xl">
          <Eyebrow n="06" label="Funcionalidades" />
          <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance">
            Plataforma digital{" "}
            <span className="text-gradient">integrada</span>.
          </h2>
          <p className="mt-6 text-lg text-cream/75 max-w-xl leading-relaxed">
            Tudo o que sua operação precisa para registrar, analisar e resolver
            ocorrências em um só lugar — com evidências e histórico auditável.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 rounded-2xl overflow-hidden border border-cream/10">
          {items.map((it) => (
            <div
              key={it.n}
              className="bg-deep p-8 lg:p-10 hover:bg-ink transition-colors group relative"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-electric mb-6">
                {it.n}
              </div>
              <div className="font-display text-xl lg:text-2xl text-cream leading-tight">
                {it.t}
              </div>
              <div className="absolute top-0 left-0 h-px w-0 bg-cyan-electric group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* TELA 7 — BENEFÍCIOS */
export function Campo() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    "Redução de custos operacionais",
    "Menos retrabalho",
    "Decisões baseadas em dados",
    "Mais segurança jurídica",
    "Padronização técnica",
    "Comunicação clara com o cliente",
  ];
  return (
    <section
      id="beneficios"
      ref={ref}
      className="reveal site-slide py-28 lg:py-36 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg-light opacity-45 pointer-events-none" />
      {/* Section divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-electric/25 to-transparent opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-cyan-electric/8 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-6 bg-cyan-electric/10 rounded-3xl blur-2xl" />
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-2xl">
            <img
              src={fieldImg}
              alt="Equipe técnica em campo realizando inspeção"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1280}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent" />
          </div>
        </div>

        <div className="lg:col-span-6">
          <Eyebrow n="06" label="Benefícios e resultados" />
          <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground">
            Mais controle e previsibilidade na sua{" "}
            <span className="text-gradient">pós-obra</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Resultados visíveis no balanço, no tempo de resposta e na confiança
            do cliente final.
          </p>

          <ul className="mt-10 space-y-1">
            {items.map((it, i) => (
              <li
                key={it}
                className="flex items-center gap-4 py-4 border-b border-border group hover:border-cyan-electric transition-colors cursor-default"
              >
                <span className="font-mono text-xs text-muted-foreground w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg lg:text-xl flex-1 text-foreground">
                  {it}
                </span>
                <span className="text-cyan-electric opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* TELA 8 — AUTORIDADE */
export function Industrial() {
  const ref = useReveal<HTMLDivElement>();
  const map = [
    { k: "Problema", v: "Desafios comuns na gestão da pós-obra" },
    { k: "Solução", v: "Gestão técnica estruturada para a pós-obra" },
    { k: "Como Funciona", v: "Gestão técnica estruturada em todas as etapas da pós-obra" },
    { k: "Pilares", v: "Os pilares da gestão técnica da pós-obra" },
    { k: "Resultados", v: "Mais controle e previsibilidade na sua pós-obra" },
  ];
  return (
    <section
      id="engenharia"
      ref={ref}
      className="reveal site-slide py-28 lg:py-36 bg-secondary/40 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg-light opacity-35 pointer-events-none" />
      {/* Section divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-electric/25 to-transparent opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-cyan-electric/8 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <Eyebrow n="07" label="Engenharia diagnóstica" />
          <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground">
            Mais controle e previsibilidade na sua{" "}
            <span className="text-gradient">pós-obra</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Um resumo da apresentação em etapas — do contexto ao impacto na operação.
          </p>

          <div className="mt-10 space-y-3">
            {map.map((it) => (
              <div
                key={it.k}
                className="relative overflow-hidden rounded-xl border border-border bg-background/70 backdrop-blur p-5 hover:border-cyan-electric/35 transition-colors"
              >
                <div className="absolute inset-0 grid-bg-light opacity-30 pointer-events-none" />
                <div className="relative font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {it.k}
                </div>
                <div className="relative mt-2 font-display text-lg lg:text-xl text-foreground leading-tight">
                  {it.v}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <div className="absolute -inset-6 bg-blue-soft/15 rounded-3xl blur-2xl" />
          <div className="relative aspect-[5/4] rounded-2xl overflow-hidden border border-border shadow-2xl">
            <img
              src={industrialImg}
              alt="Inspeção técnica em ambiente industrial"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1280}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-deep/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* TELA 9 — RESULTADO FINAL */
export function Experiencia() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="resultado"
      ref={ref}
      className="reveal py-28 lg:py-36 bg-background overflow-hidden relative"
    >
      <div className="absolute inset-0 grid-bg-light opacity-55 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <Eyebrow n="09" label="Resultado" />
          <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground">
            De operação reativa para{" "}
            <span className="text-gradient">gestão estratégica</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A garantia predial deixa de ser um risco e passa a ser um processo
            controlado, inteligente e confiável.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          {["Controlado", "Inteligente", "Confiável"].map((w) => (
            <span
              key={w}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-deep text-cream font-mono text-[11px] uppercase tracking-[0.25em]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric" />
              {w}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* TELA 10 — DIFERENCIAL (frase de fechamento de marca) */
export function Diferencial() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="confidencialidade"
      ref={ref}
      className="reveal site-slide py-28 lg:py-36 bg-deep text-cream relative overflow-hidden"
    >
      <div className="absolute inset-0 gradient-mesh opacity-60" />
      <div className="absolute inset-0 grid-bg-dark opacity-25" />
      {/* Section divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-cream/6 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6">
          <Eyebrow n="08" label="Confidencialidade e experiência" />
          <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance">
            <span className="block">Atuação técnica com</span>
            <span className="block">
              <span className="text-gradient">confidencialidade</span>
            </span>
          </h2>
          <p className="mt-6 text-lg text-cream/75 leading-relaxed max-w-xl">
            Atuamos em operações de pós-obra e garantia predial com total
            confidencialidade, respeitando a integridade das informações e dos
            empreendimentos atendidos.
          </p>
          <p className="mt-4 text-lg text-cream/75 leading-relaxed max-w-xl">
            Por esse motivo, não divulgamos dados sensíveis ou identificação dos
            clientes, mantendo o foco na estruturação técnica da operação.
          </p>
        </div>

        <div className="lg:col-span-6 grid sm:grid-cols-2 gap-3">
          {[
            {
              t: "Confidencialidade por padrão",
              d: "Não expomos clientes, dados e ocorrências. Protocolos e documentação sob controle.",
            },
            {
              t: "Experiência de campo",
              d: "Inspeções, análise de evidências e condução técnica com método replicável.",
            },
            {
              t: "Rastreabilidade e auditoria",
              d: "Histórico completo das decisões e ações — pronto para validação técnica e jurídica.",
            },
            {
              t: "Consistência operacional",
              d: "Critérios claros, padronização e indicadores para previsibilidade do pós-obra.",
            },
          ].map((it) => (
            <div key={it.t} className="p-7 rounded-xl glass hover:bg-cream/10 transition-colors">
              <div className="font-display text-xl lg:text-2xl text-cream leading-tight">{it.t}</div>
              <p className="mt-3 text-sm text-cream/70 leading-relaxed">{it.d}</p>
              <div className="mt-6 h-px bg-cream/10" />
              <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-electric">
                padrão CCA
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* TELA 11 — CTA FINAL */
export function Cta() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="contato"
      ref={ref}
      className="reveal site-slide py-28 lg:py-36 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg-light opacity-55 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-electric/10 rounded-full blur-3xl" />
      {/* Section divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-electric/25 to-transparent opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-cyan-electric/8 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <Eyebrow n="11" label="Vale a conversa" />
        <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground">
          Centralize seus chamados e tenha{" "}
          <span className="text-gradient">controle completo</span> da sua operação.
        </h2>
        <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Acompanhe as análises técnicas em um plataforma integrada para ganhar previsibilidade e reduzir retrabalho.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/5585985097622"
            target="_blank"
            rel="noopener"
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-cyan-electric text-deep font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all glow-accent inline-flex items-center justify-center gap-2"
          >
            Falar com especialista <span aria-hidden>→</span>
          </a>
        </div>

        <ul className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          {["Operação estruturada", "Redução de retrabalho", "Decisões técnicas mais assertivas"].map((t) => (
            <li
              key={t}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric" />
              <span className="font-display text-sm lg:text-[15px]">{t}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-muted-foreground text-sm">
          <a
            href="https://wa.me/5585985097622"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 hover:text-cyan-electric transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric" />
            WhatsApp (85) 98509-7622
          </a>
          <a
            href="mailto:contato@cca-engenharia.com.br"
            className="flex items-center gap-2 hover:text-cyan-electric transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric" />
            contato@cca-engenharia.com.br
          </a>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric" />
            Francisco Costa
          </span>
        </div>
      </div>
    </section>
  );
}

/* ÁREA DO CLIENTE — acesso à plataforma */
export function AreaCliente() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="cliente"
      ref={ref}
      className="reveal py-24 bg-secondary/40 border-t border-border relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <Eyebrow n="·" label="Área do cliente" />
          <h2 className="font-display text-3xl lg:text-5xl font-medium leading-[1.05] tracking-tight text-foreground text-balance">
            Acesse ou cadastre{" "}
            <span className="text-gradient">sua operação</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Gerencie demandas técnicas, acompanhe as análises e auditorias em um
            único painel.
          </p>
        </div>
        <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3">
          <a
            href="#"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-deep text-cream font-medium hover:opacity-90 transition-opacity"
          >
            Acessar plataforma →
          </a>
          <a
            href="#"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md border border-border text-foreground hover:bg-card transition-colors"
          >
            Cadastrar operação
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-14 bg-deep text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoCCA} alt="CCA" className="h-12 w-auto" />
          </div>
          <p className="mt-4 text-sm text-cream/65 max-w-xs">
            Gestão técnica de pós-obra com controle, rastreabilidade e
            decisões seguras.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/55 mb-3">
            Contato
          </div>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>Francisco Costa</li>
            <li>
              <a href="https://wa.me/5585985097622" className="hover:text-cyan-electric transition-colors">
                WhatsApp (85) 98509-7622
              </a>
            </li>
            <li>
              <a href="mailto:contato@cca-engenharia.com.br" className="hover:text-cyan-electric transition-colors">
                contato@cca-engenharia.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-cream/50">
        <span>© {new Date().getFullYear()} CCA Governança Técnica. Todos os direitos reservados.</span>
        <span className="font-mono uppercase tracking-[0.2em]">Governança técnica aplicada · BR</span>
      </div>
    </footer>
  );
}
