import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Brainventory",
    description:
      "Java desktop application for tracking study sessions using a Pomodoro-based workflow, capturing structured data like timestamps, duration, subject, and productivity levels.",
    tags: ["JAVA", "SWING", "GSON", "JSON"],
    link: "https://github.com/Jmbriz123/Brainventory",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-border section-padding section-x">
      <div className="container-max grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-3">
          <p className="mono-label sticky top-24">PROJECTS</p>
        </div>
        <div className="col-span-12 md:col-span-9">
          <div className="grid gap-4 md:gap-6">
            {projects.map((project, i) => (
              <motion.a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                whileTap={{ scale: 0.995 }}
                className="group rounded-xl border border-border/80 bg-background/35 p-5 backdrop-blur supports-[backdrop-filter]:bg-background/25 hover:border-foreground/20 transition-colors"
              >
                <div className="grid grid-cols-12 gap-4 items-start">
                  <div className="col-span-12 md:col-span-7">
                    <div className="flex items-center justify-between gap-4">
                      <span className="mono-label">
                        {project.number} / {project.title}
                      </span>
                      <span className="mono-label group-hover:text-foreground transition-colors">OPEN ↗</span>
                    </div>
                    <h3 className="mt-3 text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mt-3 text-sm leading-relaxed max-w-[70ch]">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <div className="overflow-hidden rounded-lg border border-border/80 bg-secondary/40 aspect-[16/10]">
                      <motion.img
                        src="images/brainventoryss.png"
                        alt="Screenshot of Brainventory project"
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                      />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
