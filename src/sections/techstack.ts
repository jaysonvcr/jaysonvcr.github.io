interface Skill {
  name: string
  proficiency: number
}

const skills: Skill[] = [
  { name: 'TypeScript', proficiency: 90 },
  { name: 'Node.js', proficiency: 85 },
  { name: 'PostgreSQL', proficiency: 80 },
  { name: 'Docker', proficiency: 75 },
  { name: 'REST APIs', proficiency: 90 },
  { name: 'Redis', proficiency: 70 },
  { name: 'Kubernetes', proficiency: 60 },
  { name: 'React', proficiency: 75 },
]

export function techStackHtml(): string {
  return `
    <section id="stack" class="mx-auto max-w-3xl px-6 py-24">
      <h2 class="reveal font-mono text-sm uppercase tracking-widest text-cyan-400">Tech Stack</h2>
      <p class="reveal mt-2 text-2xl font-semibold text-neutral-100">Tools I reach for</p>
      <p class="reveal mt-1 text-sm text-neutral-500">Hover to see proficiency</p>

      <div class="reveal mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
        ${skills
          .map(
            (s) => `
          <div
            class="stack-chip group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-neutral-300 transition hover:border-cyan-400/40"
            style="--proficiency: ${s.proficiency}%"
            tabindex="0"
          >
            <span class="relative z-10">${s.name}</span>
            <span class="proficiency-fill pointer-events-none absolute inset-y-0 left-0 bg-cyan-400/15"></span>
          </div>
        `
          )
          .join('')}
      </div>
    </section>
  `
}
