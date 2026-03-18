import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-border section-padding px-6 md:px-10">
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-3">
          <p className="mono-label sticky top-24">ABOUT</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="col-span-12 md:col-span-7"
        >
          <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed">
            I'm a Computer Science student at the University of the Philippines, focused on building practical software and developing data engineering skills.
          </p>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Currently a DataCamp Scholar under the Data Engineering Pilipinas program, pursuing tracks in SQL and Python. I'm also collaborating as a Web Developer at UPV Komsai.Org, building the organization's website using modern web technologies in an Agile environment.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            My work spans from Java desktop applications to web development, with a growing focus on data engineering, data modeling, and structured workflows.
          </p>

          <div className="mt-12">
            <p className="mono-label mb-4">EDUCATION</p>
            <div className="section-border pt-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-display text-foreground font-semibold">University of the Philippines</p>
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
