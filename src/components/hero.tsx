"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { PointerEvent } from "react";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(124, 92, 255, 0.15), transparent 70%)`;

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - bounds.left);
    mouseY.set(event.clientY - bounds.top);
  }

  return (
    <section
      id="home"
      onPointerMove={handlePointerMove}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background }} />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-accent-2/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 py-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-sm text-accent"
        >
          Software & Data Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-5xl font-semibold tracking-tight text-foreground sm:text-7xl"
        >
          Marco Kleimaier
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-lg text-muted"
        >
          I build fast, thoughtful software — from idea to production. Clean
          architecture, sharp interfaces, code that still makes sense in two
          years.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#experience"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-white/30"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
