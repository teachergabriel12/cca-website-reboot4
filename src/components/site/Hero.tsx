import heroBg from "@/assets/hero-building.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="hero-slide relative site-slide site-slide-auto-height overflow-hidden grain text-cream bg-deep isolate"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Torres corporativas em vidro, vista em ângulo baixo com reflexos e linhas geométricas"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
      </div>

      {/* Layered overlays — deep navy + cyan glow + technical grid */}
      <div className="absolute inset-0 z-[1] bg-deep/76" />
      <div className="absolute inset-0 z-[1] gradient-hero pointer-events-none" />
      <div className="absolute inset-0 z-[1] gradient-aurora opacity-92 pointer-events-none" />
      <div
        className="absolute inset-0 z-[1] grid-bg-dark opacity-44 pointer-events-none"
        style={{ animation: "grid-pan 24s linear infinite" }}
      />
      {/* Section divider */}
      <div className="absolute inset-x-0 bottom-0 z-[1] h-px bg-gradient-to-r from-transparent via-cyan-electric/30 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-10 bg-gradient-to-b from-cyan-electric/10 to-transparent pointer-events-none" />

      <div className="hero-stage relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full flex-1 flex items-center min-h-0">
        <div className="hero-grid grid lg:grid-cols-12 items-center w-full">
          {/* Left — copy */}
          <div className="lg:col-span-6 min-w-0">
            <h1 className="hero-title font-display font-medium leading-[1.05] tracking-tight text-balance">
              Gestão técnica que transforma a{" "}
              <span className="text-gradient">garantia predial</span> num processo estruturado de ponta a ponta.
            </h1>

            <p className="hero-copy text-cream/80 max-w-xl leading-relaxed">
              Estruturamos a pós-obra com critérios técnicos, padronização e rastreabilidade —
              do chamado ao fechamento, com evidências e histórico auditável.
            </p>

            <div className="hero-actions flex flex-col sm:flex-row gap-3">
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-md bg-cyan-electric text-deep font-medium glow-accent hover:-translate-y-0.5 transition-all"
              >
                Agendar conversa
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-md glass text-cream hover:bg-cream/10 transition-colors"
              >
                Solicitar demonstração
              </a>
            </div>
          </div>

          {/* Right — video / dashboard mockup */}
          <div className="hero-media lg:col-span-6 relative max-w-xl lg:max-w-none mx-auto w-full min-w-0">
            {/* Glow halos */}
            <div className="absolute -inset-6 sm:-inset-8 bg-cyan-electric/20 rounded-3xl blur-3xl -z-10 animate-pulse" />
            <div className="absolute top-1/2 -right-10 w-28 h-28 bg-blue-soft/30 rounded-full blur-3xl -z-10 hidden sm:block" />

            <div className="relative rounded-2xl overflow-hidden border border-cream/10 bg-deep/30 backdrop-blur-sm shadow-2xl shadow-deep/60">
              <div className="hero-video relative bg-ink">
                <div className="absolute inset-0 grid-bg-dark opacity-30 pointer-events-none" />
                <div className="absolute inset-0 gradient-aurora opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-deep/40 via-transparent to-transparent pointer-events-none" />

                <video
                  className="relative z-[1] w-full h-full object-cover"
                  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                  poster={heroBg}
                  controls
                  playsInline
                  muted
                  loop
                  autoPlay
                  preload="metadata"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
