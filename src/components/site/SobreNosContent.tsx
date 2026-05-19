import industrialImg from "@/assets/newimg3.jpeg";

const GESTOES = [
  "Gestão Multidisciplinar em Campo",
  "Gestão da Garantia Predial",
  "Governança Técnica do Ativo Construído",
] as const;

export function SobreNosContent() {
  return (
    <>
      <section className="relative border-b border-border bg-background">
        <div className="absolute inset-0 grid-bg-light opacity-40 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-electric mb-4">
            Sobre nós
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-foreground text-balance">
            Quem é a <span className="text-gradient">CCA</span>
          </h1>

          <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              A CCA é uma empresa especializada na estruturação técnica da informação produzida ao
              longo do ciclo de vida do ativo construído. Há 8 anos no mercado, atua na inspeção e
              reabilitação de sistemas e subsistemas construtivos em empreendimentos prediais e
              industriais, com foco no desempenho técnico, na rastreabilidade das condições
              construtivas e na verificação de responsabilidades ao longo do tempo.
            </p>
            <p>
              Sua atuação é orientada pelos princípios da Engenharia Diagnóstica, que integra
              ciência, pesquisa e metodologia aplicada para a análise do comportamento dos sistemas
              construtivos, por meio de diagnóstico, prognóstico e enquadramento técnico das
              condições verificadas em campo. Complementarmente, a Engenharia de Materiais
              fundamenta a prescrição técnica dos insumos e soluções aplicáveis, tanto na execução
              quanto na reabilitação de anomalias, considerando as condições de exposição e as
              particularidades regionais do ambiente de implantação do ativo, especialmente em zonas
              litorâneas e ambientes industriais sujeitos a agentes de degradação físico-química.
            </p>
            <p>
              Essa abordagem permite transformar registros técnicos em informação qualificada para
              análise, apoio à tomada de decisão e gestão de riscos associados ao desempenho do ativo
              ao longo do tempo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary/30 relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg-light opacity-35 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">
            A atuação da CCA está organizada em três gestões independentes e complementares: Gestão
            Multidisciplinar em Campo, Gestão da Garantia Predial e Governança Técnica do Ativo
            Construído, aplicadas conforme as fases de produção, verificação de desempenho em
            garantia e operação do empreendimento. Cada uma de suas gestões pode ser contratada de
            forma autônoma, de acordo com o estágio do ativo e a necessidade do contratante.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {GESTOES.map((gestao) => (
              <article
                key={gestao}
                className="rounded-2xl border border-border bg-card/80 p-6 lg:p-8 hover:border-cyan-electric/30 transition-colors"
              >
                <h2 className="font-display text-xl text-foreground leading-snug">{gestao}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-foreground text-balance">
              Onde a CCA <span className="text-gradient">Atua</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Atuação aplicada às fases de produção, garantia e operação do ativo — desde a obra até
              indústria em operação.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-6 bg-cyan-electric/10 rounded-3xl blur-2xl pointer-events-none" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-xl">
              <img
                src={industrialImg}
                alt="Inspeção técnica em ambiente industrial"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
