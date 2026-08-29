import { Reveal } from "./reveal";

const STACK = [
  "Python",
  "React",
  "Django",
  "FastAPI",
  "PostgreSQL",
  "Kubernetes",
  "Airflow",
  "Azure",
  "Java",
  "Machine Learning",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-32">
      <Reveal>
        <h2 className="font-mono text-sm text-accent">About</h2>
        <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          I am a data engineer with six years of experience in software
          development. I started out in classic software engineering, and
          today I bring that same discipline — clean code, solid
          architecture, tests that hold up — into building reliable data
          platforms and pipelines. Outside of work, I am deepening my
          focus on machine learning.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-16 overflow-hidden">
        <div className="animate-marquee flex w-max gap-3">
          {[...STACK, ...STACK].map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="whitespace-nowrap rounded-full border border-white/10 px-4 py-2 text-sm text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
