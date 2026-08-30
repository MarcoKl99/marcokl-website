"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import type { PointerEvent } from "react";

type Project = {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  href: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 20 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowBackground = useMotionTemplate`radial-gradient(300px circle at ${glowX}% ${glowY}%, rgba(124, 92, 255, 0.15), transparent 70%)`;

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    rotateY.set((x - 0.5) * 8);
    rotateX.set((0.5 - y) * 8);
    glowX.set(x * 100);
    glowY.set(y * 100);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative block h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glowBackground }}
      />
      <div className="relative">
        <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
        <p className="mt-2 text-sm text-muted">{project.description}</p>

        <ul className="mt-4 space-y-1.5 text-sm text-muted">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="text-accent">→</span>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-xs text-accent-2"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="mt-5 inline-block font-mono text-xs text-muted transition-colors group-hover:text-foreground">
          View on GitHub →
        </span>
      </div>
    </motion.a>
  );
}
