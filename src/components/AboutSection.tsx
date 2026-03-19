import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-border section-padding section-x">
      <div className="container-max grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-3">
          <p className="mono-label sticky top-24">ABOUT</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="col-span-12 md:col-span-8"
        >
          <p className="text-foreground text-xl md:text-2xl leading-relaxed font-semibold">
            I’m a Computer Science student at the University of the Philippines, building practical software and developing strong data engineering fundamentals.
          </p>
          <div className="mt-6 grid gap-4 text-muted-foreground leading-relaxed">
            <p>
              I’m currently a DataCamp Scholar under the Data Engineering Pilipinas program (SQL + Python tracks), and I collaborate as a Web Developer at UPV Komsai.Org where we build and ship in an Agile workflow.
            </p>
            <p>
              I enjoy projects that balance clean UI with structured systems thinking—data modeling, reproducible workflows, and code that’s easy to maintain.
            </p>
          </div>

          <div className="mt-12">
            <p className="mono-label mb-4">EDUCATION</p>
            <div className="rounded-xl border border-border/80 bg-background/35 p-5 backdrop-blur supports-[backdrop-filter]:bg-background/25">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-foreground font-semibold">University of the Philippines</p>
                  <p className="text-muted-foreground text-sm mt-1">B.S. in Computer Science</p>
                  <p className="text-muted-foreground text-sm">Miagao, Iloilo</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground tabular-nums">2028</span>
              </div>
              <p className="text-muted-foreground text-sm mt-2">GWA: 1.77 / 1.0</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
