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
          I&apos;m a data engineer with six years of software development experience.
          I started in traditional software engineering and now apply those
          principles to data infrastructure — disciplined code, solid
          architecture, comprehensive testing. I build data platforms
          professionally and focus on machine learning in my own time.
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
