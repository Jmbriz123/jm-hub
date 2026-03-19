import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "PROGRAMMING",
    skills: ["Python", "SQL", "C", "Java", "HTML", "CSS", "JavaScript"],
  },
  {
    label: "TOOLS",
    skills: ["Git", "GitHub"],
  },
  {
    label: "LEARNING",
    skills: ["Data Engineering", "Data Modeling", "ETL Workflows", "Agile"],
  },
];

const SkillsSection = () => {
  return (
    <section className="section-border section-padding section-x">
      <div className="container-max grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-3">
          <p className="mono-label sticky top-24">TECH STACK</p>
        </div>
        <div className="col-span-12 md:col-span-9 space-y-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: gi * 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="rounded-xl border border-border/80 bg-background/35 p-5 backdrop-blur supports-[backdrop-filter]:bg-background/25">
                <p className="mono-label mb-4">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tech-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
