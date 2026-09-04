import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <span class="brand">Your Name</span>
    <nav>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <h1>Hi, I'm Your Name.</h1>
      <p>I build things for the web. This is my portfolio.</p>
      <a class="cta" href="#projects">See my work</a>
    </section>

    <section id="projects" class="projects">
      <h2>Projects</h2>
      <p class="placeholder">Project cards go here.</p>
    </section>

    <section id="about" class="about">
      <h2>About</h2>
      <p class="placeholder">A short bio goes here.</p>
    </section>

    <section id="contact" class="contact">
      <h2>Contact</h2>
      <p class="placeholder">Links to email, GitHub, LinkedIn, etc.</p>
    </section>
  </main>

  <footer class="site-footer">
    <p>&copy; ${new Date().getFullYear()} Your Name</p>
  </footer>
`
