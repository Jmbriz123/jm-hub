import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 w-full z-50 mix-blend-difference px-6 md:px-10 py-6 md:py-8 flex justify-between items-start font-mono text-xs"
    >
      <div className="flex flex-col gap-0.5">
        <span className="text-foreground font-medium tracking-widest">JEMARCO BRIZ</span>
        <span className="text-muted-foreground tracking-widest">CS STUDENT</span>
      </div>
      <div className="flex flex-col items-end gap-2">
        <a href="#about" className="text-foreground hover:text-primary transition-colors duration-200 tracking-widest">ABOUT</a>
        <a href="#experience" className="text-foreground hover:text-primary transition-colors duration-200 tracking-widest">EXPERIENCE</a>
        <a href="#projects" className="text-foreground hover:text-primary transition-colors duration-200 tracking-widest">PROJECTS</a>
        <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-200 tracking-widest">CONTACT</a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
