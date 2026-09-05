import Link from "next/link";
import { FaArrowRight, FaLaptopCode } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-[120px]" />

        <div className="absolute right-1/4 top-1/4 h-72 w-72 rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <Container className="relative flex min-h-screen items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <p className="animate-fade-up mb-5 font-mono text-xs uppercase tracking-[0.3em] text-[var(--primary)]">
              Frontend Developer
            </p>

            {/* Heading */}
            <h1 className="animate-fade-up delay-100 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Hi, I&apos;m{" "}

              <span className="animate-shimmer block bg-gradient-to-r from-[var(--primary)] via-[var(--primary-light)] to-[var(--primary)] bg-[length:200%_auto] bg-clip-text text-transparent">
                Humaira Ahmadi
              </span>
            </h1>

            {/* Description */}
            <p className="animate-fade-up delay-200 mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
              I build responsive, interactive, and user-centered web
              experiences using modern frontend technologies.
            </p>

            {/* Buttons */}
            <div className="animate-fade-up delay-300 mt-9 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(245,102,146,0.25)]"
              >
                View My Work

                <FaArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[var(--primary)]/50 hover:bg-white/5"
              >
                Contact Me
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="animate-fade-up delay-300 mt-16 hidden items-center gap-3 text-white/30 sm:flex">
              <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">
                <div className="h-1.5 w-1 animate-bounce rounded-full bg-white/50" />
              </div>

              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                Scroll to explore
              </span>
            </div>
          </div>

          {/* RIGHT — 3D WORKSPACE PLACEHOLDER */}
          <div className="relative flex min-h-[360px] items-center justify-center sm:min-h-[450px] lg:min-h-[550px]">

            {/* Outer circle */}
            <div className="absolute h-[280px] w-[280px] rounded-full border border-[var(--primary)]/10 sm:h-[380px] sm:w-[380px] lg:h-[420px] lg:w-[420px]" />

            {/* Inner circle */}
            <div className="absolute h-[220px] w-[220px] rounded-full border border-white/5 sm:h-[300px] sm:w-[300px] lg:h-[340px] lg:w-[340px]" />

            {/* Glass workspace */}
            <div className="relative flex h-[360px] w-full max-w-xl items-center justify-center rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm sm:h-[420px]">
              <div className="text-center">

                <FaLaptopCode
                  size={52}
                  className="mx-auto mb-5 text-[var(--primary)]/60"
                />

                <p className="animate-pulse font-display text-lg text-white/60">
                  Interactive Workspace
                </p>

                <p className="mt-2 font-mono text-xs text-white/30">
                  3D SCENE LOADING AREA
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}