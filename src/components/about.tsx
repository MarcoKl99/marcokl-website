import { Reveal } from "./reveal";

const STACK = [
  "Python",
  "TypeScript",
  "Go",
  "React",
  "Django",
  "FastAPI",
  "PostgreSQL",
  "Kubernetes",
  "Airflow",
  "Azure",
  "Java",
  "Jenkins",
  "LLM APIs",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-32">
      <Reveal>
        <h2 className="font-mono text-sm text-accent">About</h2>
        <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          I&apos;m a software and data engineer who has spent the last several
          years moving between web interfaces, secure APIs, and large-scale
          data platforms. I&apos;ve built machine-testing APIs in Sweden,
          hardened an industrial codebase against vulnerabilities, shipped an
          AI chatbot for compliance teams, and engineered Kubernetes-based
          data platforms across Germany and Switzerland. I like problems
          where security, scale, and clean architecture all have to hold at
          once.
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
