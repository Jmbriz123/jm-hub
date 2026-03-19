import { motion } from "framer-motion";

const charVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.03,
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  }),
};

const AnimatedText = ({ text }: { text: string }) => (
  <span className="inline-block">
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={charVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

const HeroSection = () => {
  return (
    <section className="min-h-screen section-x pt-28 md:pt-32 pb-[10vh] flex items-center">
      <div className="container-max w-full">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-7">
            <p className="mono-label mb-4">HI, I'M</p>
            <h1 className="text-foreground text-[clamp(2.75rem,9vw,7.25rem)] leading-[0.92] tracking-[-0.05em] font-extrabold">
              <AnimatedText text="JEMARCO" />
              <br />
              <AnimatedText text="BRIZ." />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
              className="mt-7 max-w-[62ch] text-muted-foreground text-base md:text-lg leading-relaxed"
            >
              Computer Science student focused learning programming, software engineering, and data engineering fundamentals
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <button
                type="button"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="rounded-lg bg-primary px-4 py-3 font-mono text-[11px] tracking-[0.18em] text-primary-foreground hover:opacity-90 transition-opacity"
              >
                VIEW PROJECTS →
              </button>
              <a
                href="mailto:jemarcobriz123@gmail.com"
                className="rounded-lg border border-border/80 bg-secondary/60 px-4 py-3 font-mono text-[11px] tracking-[0.18em] text-foreground hover:border-foreground/30 hover:bg-secondary transition-colors"
              >
                EMAIL →
              </a>
              <a
                href="https://github.com/Jmbriz123"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border/80 bg-secondary/40 px-4 py-3 font-mono text-[11px] tracking-[0.18em] text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-secondary/60 transition-colors"
              >
                GITHUB →
              </a>
              <a
                href="https://www.linkedin.com/in/jemarco-briz-52419a327/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border/80 bg-secondary/40 px-4 py-3 font-mono text-[11px] tracking-[0.18em] text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-secondary/60 transition-colors"
              >
                LINKEDIN →
              </a>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="col-span-12 md:col-span-5 flex justify-center md:justify-end mt-10 md:mt-0"
          >
            <div className="flex flex-col items-center md:items-end gap-5">
              <div className="relative h-44 w-44 md:h-64 md:w-64 overflow-hidden rounded-full border border-border/80 bg-secondary/50 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
                <img
                  src="images/pfp.jpg"
                  alt="Portrait of Jemarco Briz"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="rounded-xl border border-border/80 bg-background/40 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/30 w-full max-w-xs">
                <p className="mono-label">CURRENT</p>
                <p className="mt-2 text-foreground font-semibold leading-snug">
                  University of the Philippines
                </p>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  DataCamp Scholar (Data Engineering Pilipinas) · Web Dev @ UPV Komsai.Org
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Python", "SQL", "Java", "C"].map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.65, duration: 0.8 }}
          className="mt-16 flex items-center justify-between"
        >
          <span className="mono-label">SCROLL</span>
          <button
            type="button"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="mono-label link-underline text-foreground"
          >
            ABOUT ↓
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
