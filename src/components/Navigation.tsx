import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type NavItem = { id: string; label: string };

const navItems: NavItem[] = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: [0.05, 0.1, 0.2] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

const Navigation = () => {
  const sectionIds = useMemo(() => navItems.map((i) => i.id), []);
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="fixed top-0 z-50 w-full"
      aria-label="Primary"
    >
      <div className="section-x">
        <div className="container-max">
          <div className="mt-4 flex items-center justify-between rounded-xl border border-border/80 bg-background/55 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/40">
            <button
              type="button"
              onClick={() => scrollToId("top")}
              className="group flex flex-col gap-0.5 text-left"
              aria-label="Scroll to top"
            >
              <span className="font-mono text-[11px] tracking-[0.18em] text-foreground/90 group-hover:text-foreground transition-colors">
                JEMARCO BRIZ
              </span>
              <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                CS STUDENT
              </span>
            </button>

            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className={cn(
                    "rounded-lg px-3 py-2 font-mono text-[11px] tracking-[0.18em] transition-colors",
                    active === item.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                  aria-current={active === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="mailto:jemarcobriz123@gmail.com"
                className="ml-2 rounded-lg border border-border/80 bg-secondary/60 px-3 py-2 font-mono text-[11px] tracking-[0.18em] text-foreground hover:border-foreground/30 hover:bg-secondary transition-colors"
              >
                EMAIL →
              </a>
            </div>

            <button
              type="button"
              className="md:hidden rounded-lg border border-border/80 bg-secondary/60 px-3 py-2 font-mono text-[11px] tracking-[0.18em] text-foreground hover:border-foreground/30 hover:bg-secondary transition-colors"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "CLOSE" : "MENU"}
            </button>
          </div>

          <div
            id="mobile-nav"
            className={cn(
              "md:hidden mt-3 overflow-hidden rounded-xl border border-border/80 bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/55",
              open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent",
            )}
          >
            <div className="flex flex-col p-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    scrollToId(item.id);
                  }}
                  className={cn(
                    "rounded-lg px-3 py-3 font-mono text-[11px] tracking-[0.18em] transition-colors",
                    active === item.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="mailto:jemarcobriz123@gmail.com"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-lg border border-border/80 bg-secondary/60 px-3 py-3 font-mono text-[11px] tracking-[0.18em] text-foreground hover:border-foreground/30 hover:bg-secondary transition-colors"
              >
                EMAIL →
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
