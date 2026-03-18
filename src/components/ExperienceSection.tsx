import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026",
    role: "Data Engineering Scholar",
    company: "Data Engineering Pilipinas × DataCamp",
    description:
      "Selected scholar pursuing Associate Data Engineer tracks in SQL and Python. Building hands-on skills in data transformation, data modeling, and building data workflows.",
    period: "Feb 2026 – Present",
  },
  {
    year: "2026",
    role: "Web Developer",
    company: "UPV Komsai.Org",
    description:
      "Collaborating in an Agile team to design and build the organization's website. Managing version control workflows with Git and GitHub, participating in sprint planning and code reviews.",
    period: "Feb 2026 – Present",
  },
  {
    year: "2024",
    role: "Multi-Department Intern",
    company: "San Pablo City Water District",
    description:
      "Rotated across Purchasing, Operations, Customer Service, and HR. Managed employee records, handled customer inquiries, and observed water meter testing procedures.",
    period: "Apr 2024",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-border section-padding px-6 md:px-10">
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-3">
          <p className="mono-label sticky top-24">EXPERIENCE</p>
        </div>
        <div className="col-span-12 md:col-span-9">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              className={`grid grid-cols-12 gap-4 py-8 ${i > 0 ? "section-border" : ""}`}
            >
              <div className="col-span-12 md:col-span-2">
                <span className="font-mono text-sm text-muted-foreground tabular-nums">{exp.year}</span>
              </div>
              <div className="col-span-12 md:col-span-10">
                <h3 className="font-display text-lg font-semibold text-foreground">{exp.role}</h3>
                <p className="text-muted-foreground text-sm mt-1">{exp.company}</p>
                <p className="font-mono text-xs text-muted-foreground mt-1">{exp.period}</p>
                <p className="text-muted-foreground mt-4 leading-relaxed text-sm max-w-[55ch]">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
