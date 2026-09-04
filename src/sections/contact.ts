export function contactHtml(): string {
  return `
    <section id="contact" class="relative overflow-hidden px-6 py-24 text-center">
      <div class="pointer-events-none absolute inset-0 overflow-hidden opacity-60 dark:opacity-100">
        <div class="blob absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10"></div>
      </div>

      <div class="reveal relative z-10 mx-auto max-w-xl">
        <h2 class="font-mono text-sm uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Get In Touch</h2>
        <p class="mt-2 text-2xl font-semibold text-[var(--text)]">Let's build something</p>
        <p class="mt-4 text-[var(--text-soft)]">
          Open to backend and platform roles. The fastest way to reach me is email &mdash; or just
          ping me on LinkedIn.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@example.com"
            class="rounded-md border border-emerald-500/50 bg-emerald-500/10 px-6 py-3 font-mono text-sm text-emerald-700 transition hover:bg-emerald-500/20 dark:border-emerald-400/50 dark:bg-emerald-400/10 dark:text-emerald-300 dark:hover:bg-emerald-400/20"
          >
            Email me
          </a>
          <a
            href="https://github.com/jaysonvcr"
            target="_blank"
            rel="noopener"
            class="rounded-md border border-[var(--border)] px-6 py-3 font-mono text-sm text-[var(--text-soft)] transition hover:border-[var(--border-strong)]"
            aria-label="See my github profile"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jaysonvacaro/"
            target="_blank"
            rel="noopener"
            class="rounded-md border border-[var(--border)] px-6 py-3 font-mono text-sm text-[var(--text-soft)] transition hover:border-[var(--border-strong)]"
            aria-label="Connect me over LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>

    <footer class="border-t border-[var(--border)] px-6 py-8 text-center font-mono text-xs text-[var(--text-mute)]">
      <p>&copy; ${new Date().getFullYear()} Jayson Vacaro. Built with Vite + TypeScript.</p>
    </footer>
  `
}
