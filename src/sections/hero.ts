export function heroHtml(): string {
  return `
    <section id="top" class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div class="pointer-events-none absolute inset-0 overflow-hidden opacity-60 dark:opacity-100">
        <div class="blob absolute -left-20 top-20 h-72 w-72 rounded-full bg-emerald-500/20"></div>
        <div class="blob absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/20" style="animation-delay: 2s"></div>
        <div class="blob absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-purple-500/10" style="animation-delay: 4s"></div>
      </div>

      <div class="reveal relative z-10 flex flex-col items-center">
        <p class="mb-4 font-mono text-sm text-emerald-600 dark:text-emerald-400">Hi, my name is</p>

        <h1 class="flex items-center gap-3 text-4xl font-bold tracking-tight sm:text-6xl">
          <span class="gradient-text">Jayson Vacaro</span>
          <button
            id="pronounce-name"
            type="button"
            class="rounded-full border border-[var(--border)] p-2 text-[var(--text-mute)] transition hover:border-emerald-400/50 hover:text-emerald-600 dark:hover:text-emerald-400"
            aria-label="Listen to name pronunciation"
            title="Listen to name pronunciation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
              <path d="M11 5 6 9H2v6h4l5 4z"></path>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            </svg>
          </button>
        </h1>

        <h2 class="mt-3 text-xl font-medium text-[var(--text-soft)] sm:text-2xl">Senior Software Developer</h2>

        <p class="mt-6 max-w-xl text-[var(--text-soft)]">
          I like building things that hold up under real traffic &mdash; APIs, pipelines, and the
          unglamorous plumbing in between. Currently open to backend and platform roles.
        </p>

        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#experience"
            class="rounded-md border border-emerald-500/50 bg-emerald-500/10 px-6 py-3 font-mono text-sm text-emerald-700 transition hover:bg-emerald-500/20 dark:border-emerald-400/50 dark:bg-emerald-400/10 dark:text-emerald-300 dark:hover:bg-emerald-400/20"
          >
            See my work
          </a>
          <a
            href="#contact"
            class="rounded-md border border-[var(--border)] px-6 py-3 font-mono text-sm text-[var(--text-soft)] transition hover:border-[var(--border-strong)]"
          >
            Get in touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
            class="rounded-md border border-[var(--border)] px-6 py-3 font-mono text-sm text-[var(--text-soft)] transition hover:border-[var(--border-strong)]"
          >
            View my resume
          </a>
        </div>
      </div>

      <button
        id="scroll-down"
        type="button"
        aria-label="Scroll down"
        class="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[var(--text-mute)] transition hover:text-emerald-600 dark:hover:text-emerald-400"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 animate-bounce">
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </button>
    </section>
  `
}

export function initHero() {
  const btn = document.querySelector<HTMLButtonElement>('#pronounce-name')
  btn?.addEventListener('click', () => {
    if (!('speechSynthesis' in window)) return
    const utterance = new SpeechSynthesisUtterance('Jayson Vacaro')
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
  })

  document.querySelector<HTMLButtonElement>('#scroll-down')?.addEventListener('click', () => {
    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })
  })
}
