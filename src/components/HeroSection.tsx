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
    <section className="min-h-screen flex flex-col justify-end px-6 md:px-10 pb-[10vh]">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <h1 className="font-display font-900 text-foreground text-[clamp(2.5rem,10vw,8rem)] leading-[0.95] tracking-[-0.04em]">
            <AnimatedText text="JEMARCO" />
            <br />
            <AnimatedText text="BRIZ." />
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="col-span-12 md:col-span-5 md:col-start-8 mt-8 md:mt-12"
        >
          <p className="mono-label mb-3">ROLE</p>
          <p className="font-display text-lg md:text-xl text-foreground leading-tight">
            Computer Science Student at University of the Philippines
          </p>
          <p className="text-muted-foreground text-sm mt-4 leading-relaxed max-w-[40ch]">
            Aspiring data engineer & web developer. Building things with Python, Java, SQL, and modern web technologies.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="mt-16 flex gap-6 items-center"
      >
        <a
          href="mailto:jemarcobriz123@gmail.com"
          className="tech-tag hover:border-primary hover:text-primary"
        >
          SEND EMAIL →
        </a>
        <a
          href="https://github.com/JemarcoBriz"
          target="_blank"
          rel="noopener noreferrer"
          className="tech-tag hover:border-primary hover:text-primary"
        >
          GITHUB →
        </a>
        <a
          href="https://linkedin.com/in/jemarcobriz"
          target="_blank"
          rel="noopener noreferrer"
          className="tech-tag hover:border-primary hover:text-primary"
        >
          LINKEDIN →
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
