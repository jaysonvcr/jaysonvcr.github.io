export function contactHtml(): string {
  return `
    <section id="contact" class="relative overflow-hidden px-6 py-24 text-center">
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="blob absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10"></div>
      </div>

      <div class="reveal relative z-10 mx-auto max-w-xl">
        <h2 class="font-mono text-sm uppercase tracking-widest text-emerald-400">Get In Touch</h2>
        <p class="mt-2 text-2xl font-semibold text-neutral-100">Let's build something</p>
        <p class="mt-4 text-neutral-400">
          Open to backend and platform roles. The fastest way to reach me is email &mdash; or just
          ping me on LinkedIn.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@example.com"
            class="rounded-md border border-emerald-400/50 bg-emerald-400/10 px-6 py-3 font-mono text-sm text-emerald-300 transition hover:bg-emerald-400/20"
          >
            Email me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener"
            class="rounded-md border border-white/10 px-6 py-3 font-mono text-sm text-neutral-300 transition hover:border-white/30"
            aria-label="See my github profile"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener"
            class="rounded-md border border-white/10 px-6 py-3 font-mono text-sm text-neutral-300 transition hover:border-white/30"
            aria-label="Connect me over LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>

    <footer class="border-t border-white/10 px-6 py-8 text-center font-mono text-xs text-neutral-600">
      <p>&copy; ${new Date().getFullYear()} Your Name. Built with Vite + TypeScript.</p>
    </footer>
  `
}
