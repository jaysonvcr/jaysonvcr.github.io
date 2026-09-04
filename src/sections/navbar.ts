const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export function navbarHtml(): string {
  return `
    <header class="fixed top-0 inset-x-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur-md">
      <nav class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" class="font-mono text-sm font-semibold text-emerald-400" aria-label="Go to home page">
          &gt;_ your-name
        </a>

        <ul class="hidden gap-8 font-mono text-sm text-neutral-300 sm:flex">
          ${links
            .map(
              (l) =>
                `<li><a href="${l.href}" class="transition hover:text-emerald-400">${l.label}</a></li>`
            )
            .join('')}
        </ul>

        <button
          id="mobile-menu-toggle"
          type="button"
          class="font-mono text-sm text-neutral-300 sm:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded="false"
        >
          [ menu ]
        </button>
      </nav>

      <ul id="mobile-menu" class="hidden flex-col gap-1 border-t border-white/10 px-6 py-4 font-mono text-sm text-neutral-300 sm:hidden">
        ${links
          .map(
            (l) => `<li><a href="${l.href}" class="block py-2 transition hover:text-emerald-400">${l.label}</a></li>`
          )
          .join('')}
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
