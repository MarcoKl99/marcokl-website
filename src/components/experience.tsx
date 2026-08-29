import { Reveal } from "./reveal";

type Role = {
  title: string;
  points: string[];
  tags: string[];
  scope: string;
  location: string;
};

const ROLES: Role[] = [
  {
    title: "Customer Interface for Data Management",
    points: [
      "Web interface for data management, built for clients of a small data-driven company",
      "JavaScript and native HTML/CSS frontend",
      "Python (Django) backend",
    ],
    tags: ["PostgreSQL", "JavaScript", "HTML/CSS", "Django"],
    scope: "Working Student · 3 years",
    location: "Würzburg, Germany",
  },
  {
    title: "API Development for Testing of a Production Line",
    points: [
      "API for testing machine responses to different scenarios",
      "Backend built in Go",
      "Frontend built with TypeScript and React",
    ],
    tags: ["Go", "TypeScript", "React"],
    scope: "Internship Program · 2 months",
    location: "Stockholm, Sweden",
  },
  {
    title: "Vulnerability Scanning Integration for Industrial Manufacturing",
    points: [
      "Pipeline for scanning vulnerabilities in an existing Java codebase",
      "Client in industrial manufacturing for security systems",
      "Integrated vulnerability databases and existing CI/CD pipelines",
      "Integrated a ticketing API for vulnerability management",
    ],
    tags: ["Java (Maven)", "Python", "Jenkins CI/CD"],
    scope: "Junior Consultant / Developer · 1 year",
    location: "Frankfurt, Germany",
  },
  {
    title: "AI Chatbot Solution for Compliant Knowledge Management",
    points: [
      "Company-internal chatbot solution for compliance use cases",
      "Backend skill modules built in Python",
      "Integrated into an existing TypeScript frontend",
    ],
    tags: ["Python", "TypeScript", "LLM APIs"],
    scope: "Professional Consultant / Developer · 6 months",
    location: "Frankfurt, Germany",
  },
  {
    title: "Data Engineering for a B2B Start-Up",
    points: [
      "Built data sourcing pipelines",
      "Designed efficient data storage and retrieval",
      "Built testing pipelines for robust processes",
      "Built data cleaning processes",
    ],
    tags: ["Python", "Azure"],
    scope: "Professional Data Engineer · 1 year",
    location: "St. Gallen, Switzerland",
  },
  {
    title: "API Developer for the Public Sector",
    points: [
      "API solution for public-sector data retrieval",
      "Retrieval of public data from PostgreSQL",
      "Implemented access policies as a security layer",
    ],
    tags: ["Python (FastAPI)", "PostgreSQL", "Kubernetes"],
    scope: "Professional Data Engineer / Software Developer · 1 year",
    location: "Zurich, Switzerland",
  },
  {
    title: "Data Engineer for a Swiss Insurance Company",
    points: [
      "Data platform development for a Swiss insurance company",
      "Data ingestion and transformation solutions",
      "Performance benchmarking and optimization",
      "Orchestration across multiple data products",
      "Deployed and operated within a Kubernetes cluster",
    ],
    tags: ["Kubernetes", "Airflow", "Python"],
    scope: "Professional Data Engineer · 1 year",
    location: "Zurich, Switzerland",
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-32">
      <Reveal>
        <h2 className="font-mono text-sm text-accent">Experience</h2>
        <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          A path through data, security, and software.
        </p>
      </Reveal>

      <div className="relative mt-16 space-y-12">
        <div className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-accent via-white/10 to-transparent" />

        {ROLES.map((role, index) => (
          <Reveal key={role.title} delay={Math.min(index * 0.05, 0.3)}>
            <div className="relative pl-8">
              <span className="absolute top-1.5 left-0 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-medium text-foreground">{role.title}</h3>
                <span className="font-mono text-xs text-muted">{role.scope}</span>
              </div>
              <p className="mt-1 font-mono text-xs text-accent-2">{role.location}</p>

              <ul className="mt-3 space-y-1 text-sm text-muted">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
