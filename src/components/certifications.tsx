import Image from "next/image";
import { Reveal } from "./reveal";

type Certification = {
  title: string;
  issuer: string;
  tag: string;
  badge: string;
};

const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    tag: "Foundational",
    badge: "/badges/aws-cloud-practitioner.png",
  },
  {
    title: "AWS Certified Machine Learning Engineer – Associate",
    issuer: "Amazon Web Services",
    tag: "Associate",
    badge: "/badges/aws-ml-engineer-associate.png",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-5xl px-6 py-32">
      <Reveal>
        <h2 className="font-mono text-sm text-accent">Certifications</h2>
        <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          Credentials I&apos;ve earned along the way.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert, index) => (
          <Reveal key={cert.title} delay={index * 0.1} className="h-full">
            <div className="group flex h-full items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/30">
              <Image
                src={cert.badge}
                alt={cert.title}
                width={72}
                height={72}
                className="shrink-0"
              />
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent-2">{cert.issuer}</span>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-xs text-muted">
                    {cert.tag}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-medium text-foreground">{cert.title}</h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
