const FooterSection = () => {
  return (
    <footer id="contact" className="section-border section-x py-16">
      <div className="container-max">
        <div className="rounded-2xl border border-border/80 bg-background/35 p-6 md:p-8 backdrop-blur supports-[backdrop-filter]:bg-background/25">
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
            <div className="col-span-12 md:col-span-7">
              <p className="mono-label mb-4">GET IN TOUCH</p>
              <h2 className="text-foreground text-2xl md:text-4xl font-bold tracking-[-0.04em]">
                Let’s build something reliable.
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed max-w-[60ch]">
                If you want to collaborate, discuss a project, or just say hi—email me and I’ll reply as soon as I can.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:jemarcobriz123@gmail.com"
                  className="rounded-lg bg-primary px-4 py-3 font-mono text-[11px] tracking-[0.18em] text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  EMAIL ME →
                </a>
                <a
                  href="https://www.linkedin.com/in/jemarco-briz-52419a327/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border/80 bg-secondary/60 px-4 py-3 font-mono text-[11px] tracking-[0.18em] text-foreground hover:border-foreground/30 hover:bg-secondary transition-colors"
                >
                  LINKEDIN →
                </a>
                <a
                  href="https://github.com/Jmbriz123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border/80 bg-secondary/40 px-4 py-3 font-mono text-[11px] tracking-[0.18em] text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-secondary/60 transition-colors"
                >
                  GITHUB →
                </a>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 md:justify-self-end">
              <p className="mono-label mb-3">EMAIL</p>
              <a href="mailto:jemarcobriz123@gmail.com" className="link-underline text-foreground font-mono text-sm tracking-wide">
                jemarcobriz123@gmail.com
              </a>
              <div className="mt-6">
                <p className="mono-label mb-3">LOCATION</p>
                <p className="text-muted-foreground font-mono text-sm tracking-wide">Miagao, Iloilo</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-border/70 pt-5 flex justify-between items-center">
            <span className="font-mono text-[10px] text-muted-foreground tracking-widest">© 2026 JEMARCO BRIZ</span>
            <button
              type="button"
              onClick={() => document.getElementById("top")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="font-mono text-[10px] text-muted-foreground tracking-widest hover:text-foreground transition-colors"
            >
              BACK TO TOP ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
