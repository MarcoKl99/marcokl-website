import { Reveal } from "./reveal";

const SOCIALS = [
  { label: "Email", href: "mailto:hello@marcokl.ch" },
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-32 text-center">
      <Reveal>
        <h2 className="font-mono text-sm text-accent">Contact</h2>
        <p className="mx-auto mt-4 max-w-xl text-3xl font-medium leading-snug text-foreground sm:text-4xl">
          Let&apos;s build something worth shipping.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-white/30"
            >
              {social.label}
            </a>
          ))}
        </div>
      </Reveal>

      <p className="mt-24 text-xs text-muted">
        © {new Date().getFullYear()} Marco Kleimaier
      </p>
    </section>
  );
}
