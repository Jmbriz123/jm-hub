const FooterSection = () => {
  return (
    <footer id="contact" className="section-border px-6 md:px-10 py-16">
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-6">
          <p className="mono-label mb-4">GET IN TOUCH</p>
          <a
            href="mailto:jemarcobriz123@gmail.com"
            className="font-display text-2xl md:text-4xl font-bold text-foreground hover:text-primary transition-colors duration-200"
          >
            jemarcobriz123
            <br />
            @gmail.com
          </a>
        </div>
        <div className="col-span-12 md:col-span-3 md:col-start-10 flex flex-col gap-3 mt-8 md:mt-0">
          <p className="mono-label mb-2">LINKS</p>
          <a href="https://github.com/JemarcoBriz" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200 tracking-widest">
            GITHUB →
          </a>
          <a href="https://linkedin.com/in/jemarcobriz" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200 tracking-widest">
            LINKEDIN →
          </a>
        </div>
      </div>
      <div className="mt-16 section-border pt-6 flex justify-between items-center">
        <span className="font-mono text-[10px] text-muted-foreground tracking-widest">© 2026 JEMARCO BRIZ</span>
        <span className="font-mono text-[10px] text-muted-foreground tracking-widest">MIAGAO, ILOILO</span>
      </div>
    </footer>
  );
};

export default FooterSection;
