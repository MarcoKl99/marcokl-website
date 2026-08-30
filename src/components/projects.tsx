import { ProjectCard } from "./project-card";
import { Reveal } from "./reveal";

const PROJECTS = [
  {
    title: "C++ Deep Learning Core",
    description:
      "A deep learning framework built from scratch in pure C++ — tensor engine, reverse-mode autograd, and convolutional networks, with no external AI frameworks.",
    highlights: [
      "System design in a low-level language",
      "Memory management for a dynamic computational graph",
      "Benchmarking and profiling for performance",
    ],
    tags: ["C++", "Catch2", "xctrace"],
    href: "https://github.com/MarcoKl99/neural-core-cpp",
  },
  {
    title: "Diffusion Models for Image Generation",
    description:
      "A from-scratch implementation of time- and class-conditioned diffusion models for image generation, built on a custom U-Net backbone.",
    highlights: [
      "Trained and evaluated diffusion models end-to-end",
      "Experiment tracking across architectures",
      "Comparison of different noise schedules",
    ],
    tags: ["Python", "PyTorch"],
    href: "https://github.com/MarcoKl99/DiffusionLab",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-32">
      <Reveal>
        <h2 className="font-mono text-sm text-accent">Personal Projects</h2>
        <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          What I build in private — AI, from the ground up.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.1} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
