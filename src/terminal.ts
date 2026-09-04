const ACCESS_DENIED_LINES = [
  'Access denied. Security protocols engaged.',
  'Permission denied. Nice try though.',
]

type CommandFn = (args: string[]) => string[]

const commands: Record<string, CommandFn> = {
  help: () => [
    'Available commands:',
    '  help        show this list',
    '  whoami      who am I, really',
    '  about       a short bio',
    '  experience  jump to the experience section',
    '  skills      jump to the tech stack section',
    '  contact     jump to the contact section',
    '  github      open my GitHub profile',
    '  linkedin    open my LinkedIn profile',
    '  resume      open my resume',
    '  sudo        try it and see',
    '  clear       clear the terminal',
  ],
  whoami: () => ['jayson-vacaro', 'Senior Software Developer'],
  about: () => [
    'I like building things that hold up under real traffic.',
    'APIs, pipelines, and the unglamorous plumbing in between.',
  ],
  ls: () => ['about.txt', 'experience/', 'skills/', 'contact.txt', 'resume.pdf'],
  contact: (_args) => {
    scrollToSection('#contact')
    return ['Scrolling to contact...']
  },
  experience: () => {
    scrollToSection('#experience')
    return ['Scrolling to experience...']
  },
  skills: () => {
    scrollToSection('#stack')
    return ['Scrolling to tech stack...']
  },
  github: () => {
    window.open('https://github.com/jaysonvcr', '_blank', 'noopener')
    return ['Opening GitHub...']
  },
  linkedin: () => {
    window.open('https://www.linkedin.com/in/jaysonvacaro/', '_blank', 'noopener')
    return ['Opening LinkedIn...']
  },
  resume: () => {
    window.open('/resume.pdf', '_blank', 'noopener')
    return ['Opening resume...']
  },
  sudo: () => [ACCESS_DENIED_LINES[Math.floor(Math.random() * ACCESS_DENIED_LINES.length)]],
}

function scrollToSection(selector: string) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}

export function terminalHtml(): string {
  return `
    <button
      id="terminal-launch"
      type="button"
      class="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-emerald-500/40 bg-[var(--panel-translucent-strong)] px-4 py-3 font-mono text-sm text-emerald-600 shadow-lg backdrop-blur transition hover:bg-emerald-500/10 dark:border-emerald-400/40 dark:text-emerald-400 dark:hover:bg-emerald-400/10"
      aria-label="Launch Terminal"
      title="Launch Terminal"
    >
      &gt;_
    </button>

    <div
      id="terminal-overlay"
      class="fixed inset-0 z-50 hidden items-center justify-center bg-[var(--backdrop)] p-4 backdrop-blur-sm"
    >
      <div class="flex h-[70vh] w-full max-w-2xl flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel)] shadow-2xl">
        <div class="flex items-center justify-between border-b border-[var(--border)] bg-[var(--bg-soft)] px-4 py-2">
          <div class="flex gap-1.5">
            <span class="h-3 w-3 rounded-full bg-red-500/70"></span>
            <span class="h-3 w-3 rounded-full bg-yellow-500/70"></span>
            <span class="h-3 w-3 rounded-full bg-green-500/70"></span>
          </div>
          <span class="font-mono text-xs text-[var(--text-mute)]">guest@jaysonvcr.dev</span>
          <button id="terminal-close" type="button" aria-label="Close terminal" class="text-[var(--text-mute)] hover:text-[var(--text)]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>

        <div id="terminal-output" class="flex-1 space-y-1 overflow-y-auto px-4 py-3 font-mono text-sm text-[var(--text-soft)]">
          <p class="text-emerald-600 dark:text-emerald-400">Welcome. Type 'help' to see what's available.</p>
        </div>

        <form id="terminal-form" class="flex items-center gap-2 border-t border-[var(--border)] px-4 py-3 font-mono text-sm">
          <span class="text-emerald-600 dark:text-emerald-400">$</span>
          <input
            id="terminal-input"
            type="text"
            autocomplete="off"
            spellcheck="false"
            class="flex-1 bg-transparent text-[var(--text)] outline-none"
            aria-label="Terminal command input"
          />
          <span class="terminal-caret text-emerald-600 dark:text-emerald-400">_</span>
        </form>
      </div>
    </div>
  `
}

export function initTerminal() {
  const launch = document.querySelector<HTMLButtonElement>('#terminal-launch')
  const overlay = document.querySelector<HTMLDivElement>('#terminal-overlay')
  const closeBtn = document.querySelector<HTMLButtonElement>('#terminal-close')
  const output = document.querySelector<HTMLDivElement>('#terminal-output')
  const form = document.querySelector<HTMLFormElement>('#terminal-form')
  const input = document.querySelector<HTMLInputElement>('#terminal-input')
  if (!launch || !overlay || !closeBtn || !output || !form || !input) return

  const history: string[] = []
  let historyIndex = -1

  const isOpen = () => !overlay.classList.contains('hidden')
  const open = () => {
    overlay.classList.remove('hidden')
    overlay.classList.add('flex')
    input.focus()
  }
  const close = () => {
    overlay.classList.add('hidden')
    overlay.classList.remove('flex')
  }

  launch.addEventListener('click', open)
  closeBtn.addEventListener('click', close)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close()
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) close()
  })

  const printLine = (text: string, isCommand = false) => {
    const line = document.createElement('p')
    line.textContent = isCommand ? `$ ${text}` : text
    line.className = `whitespace-pre-wrap ${isCommand ? 'text-[var(--text-mute)]' : ''}`
    output.appendChild(line)
    output.scrollTop = output.scrollHeight
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const raw = input.value.trim()
    input.value = ''
    if (!raw) return

    history.push(raw)
    historyIndex = history.length

    printLine(raw, true)

    if (raw === 'clear') {
      output.innerHTML = ''
      return
    }

    const [name, ...args] = raw.split(/\s+/)
    const fn = commands[name.toLowerCase()]
    const lines = fn ? fn(args) : [`command not found: ${name}`, `try 'help' to see what's available`]
    lines.forEach((l) => printLine(l))
  })

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex > 0) {
        historyIndex -= 1
        input.value = history[historyIndex] ?? ''
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex < history.length - 1) {
        historyIndex += 1
        input.value = history[historyIndex] ?? ''
      } else {
        historyIndex = history.length
        input.value = ''
      }
    }
  })
}
