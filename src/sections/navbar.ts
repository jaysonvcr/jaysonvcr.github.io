const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

function themeToggleButton(extraClass = ''): string {
  return `
    <button
      type="button"
      data-theme-toggle
      class="rounded-full border border-[var(--border)] p-2 text-[var(--text-soft)] transition hover:border-[var(--border-strong)] hover:text-emerald-600 dark:hover:text-emerald-400 ${extraClass}"
      aria-label="Toggle color theme"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 dark:hidden">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hidden h-4 w-4 dark:block">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
    </button>
  `
}

export function navbarHtml(): string {
  return `
    <header class="fixed top-0 inset-x-0 z-40 border-b border-[var(--border)] bg-[var(--panel-translucent)] backdrop-blur-md">
      <nav class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" class="font-mono text-sm font-semibold text-emerald-600 dark:text-emerald-400" aria-label="Go to home page">
          &gt;_ your-name
        </a>

        <ul class="hidden items-center gap-8 font-mono text-sm text-[var(--text-soft)] sm:flex">
          ${links
            .map(
              (l) =>
                `<li><a href="${l.href}" class="transition hover:text-emerald-600 dark:hover:text-emerald-400">${l.label}</a></li>`
            )
            .join('')}
          <li>${themeToggleButton()}</li>
        </ul>

        <button
          id="mobile-menu-toggle"
          type="button"
          class="font-mono text-sm text-[var(--text-soft)] sm:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded="false"
        >
          [ menu ]
        </button>
      </nav>

      <ul id="mobile-menu" class="hidden flex-col gap-1 border-t border-[var(--border)] px-6 py-4 font-mono text-sm text-[var(--text-soft)] sm:hidden">
        ${links
          .map(
            (l) => `<li><a href="${l.href}" class="block py-2 transition hover:text-emerald-600 dark:hover:text-emerald-400">${l.label}</a></li>`
          )
          .join('')}
        <li class="pt-2">${themeToggleButton()}</li>
      </ul>
    </header>
  `
}

export function initNavbar() {
  const toggle = document.querySelector<HTMLButtonElement>('#mobile-menu-toggle')
  const menu = document.querySelector<HTMLUListElement>('#mobile-menu')
  if (!toggle || !menu) return

  const setOpen = (open: boolean) => {
    menu.classList.toggle('hidden', !open)
    menu.classList.toggle('flex', open)
    toggle.setAttribute('aria-expanded', String(open))
    toggle.textContent = open ? '[ close ]' : '[ menu ]'
  }

  toggle.addEventListener('click', () => {
    setOpen(menu.classList.contains('hidden'))
  })

  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)))
}
