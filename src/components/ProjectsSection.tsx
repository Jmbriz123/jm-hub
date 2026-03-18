import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Brainventory",
    description:
      "Java desktop application for tracking study sessions using a Pomodoro-based workflow, capturing structured data like timestamps, duration, subject, and productivity levels.",
    tags: ["JAVA", "SWING", "GSON", "JSON"],
    link: "https://github.com/JemarcoBriz",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-border section-padding px-6 md:px-10">
      <div className="grid grid-cols-12 gap-4 md:gap-8 mb-12">
        <div className="col-span-12 md:col-span-3">
          <p className="mono-label sticky top-24">PROJECTS</p>
        </div>
      </div>

      <div className="space-y-0">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            whileTap={{ scale: 0.99 }}
            className="group block section-border pt-8 pb-10 grid grid-cols-12 gap-4 cursor-pointer"
          >
            <div className="col-span-12 md:col-span-5">
              <span className="mono-label">
                {project.number} / {project.title}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed max-w-[35ch]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
              <span className="mono-label mt-6 inline-block group-hover:text-primary transition-colors duration-200">
                VIEW ON GITHUB →
              </span>
            </div>
            <div className="col-span-12 md:col-span-7 overflow-hidden bg-secondary aspect-[16/10]">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="w-full h-full bg-secondary flex items-center justify-center"
              >
                <span className="mono-label">PROJECT PREVIEW</span>
              </motion.div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
