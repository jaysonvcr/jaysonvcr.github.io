import './style.css'
import { navbarHtml, initNavbar } from './sections/navbar.ts'
import { heroHtml, initHero } from './sections/hero.ts'
import { experienceHtml } from './sections/experience.ts'
import { techStackHtml } from './sections/techstack.ts'
import { contactHtml } from './sections/contact.ts'
import { terminalHtml, initTerminal } from './terminal.ts'
import { initScrollReveal } from './scrollReveal.ts'
import { initTheme } from './theme.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${navbarHtml()}
  <main>
    ${heroHtml()}
    ${experienceHtml()}
    ${techStackHtml()}
    ${contactHtml()}
  </main>
  ${terminalHtml()}
`

initTheme()
initNavbar()
initHero()
initTerminal()
initScrollReveal()
