import { Reveal } from "./reveal";

const STATS = [
  {
    label: "Focus",
    value:
      "Testing open-weight models against prompt injection attacks in untrusted environments.",
  },
  {
    label: "Outcome",
    value: "Which LLM backbones are actually suitable for secure agentic applications.",
  },
  {
    label: "Why it matters",
    value:
      "Companies are racing to ship agentic workflows while security gets little attention. Early results show LLM agents are highly exploitable on untrusted data — across model families, sizes, and attack vectors.",
  },
];

const TAGS = ["Python", "AgentDojo (ETH Zurich)", "LLM Inference Providers"];

export function CurrentProject() {
  return (
    <section id="current-project" className="mx-auto max-w-5xl px-6 py-32">
      <Reveal>
        <h2 className="font-mono text-sm text-accent">Right Now</h2>
        <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          What I&apos;m building today.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />

          <div className="relative">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
              </span>
              <span className="font-mono text-xs text-accent-2">In Progress</span>
            </div>

            <h3 className="mt-4 text-xl font-medium text-foreground sm:text-2xl">
              AI Agent Security — Attacking Agents with Prompt Injection
            </h3>

            <p className="mt-4 max-w-3xl text-sm text-muted sm:text-base">
              I&apos;m evaluating open-weight LLMs on their resistance to
              prompt injection attacks by integrating them into ETH
              Zurich&apos;s AgentDojo framework, running benchmarks across
              untrusted environments, and producing structured security
              reports.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-xs text-accent">{stat.label}</p>
                  <p className="mt-2 text-sm text-muted">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
