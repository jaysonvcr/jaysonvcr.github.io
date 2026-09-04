interface Job {
  role: string
  company: string
  period: string
  badge: string
  badgeColor: string
  highlights: string[]
}

const jobs: Job[] = [
  {
    role: 'Software Engineer I',
    company: 'Company Name',
    period: 'Aug 2025 - Present',
    badge: 'WORKED IN PLATFORM',
    badgeColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
    highlights: [
      'Owned a service handling real-time request processing at scale',
      'Cut p99 latency by tightening the hot path and caching strategy',
      'Set up CI checks that caught regressions before they shipped',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Previous Company',
    period: 'May 2024 - Aug 2024',
    badge: 'WORKED IN MICROSERVICES',
    badgeColor: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
    highlights: [
      'Built an internal tool used by three engineering teams',
      'Migrated a legacy job runner to a queue-backed architecture',
    ],
  },
]

export function experienceHtml(): string {
  return `
    <section id="experience" class="mx-auto max-w-3xl px-6 py-24">
      <h2 class="reveal font-mono text-sm uppercase tracking-widest text-emerald-400">Experience</h2>
      <p class="reveal mt-2 text-2xl font-semibold text-neutral-100">Where I've worked</p>

      <ol class="mt-12 space-y-8 border-l border-white/10 pl-8">
        ${jobs
          .map(
            (job) => `
          <li class="reveal relative">
            <span class="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 class="text-lg font-medium text-neutral-100">${job.role} &middot; ${job.company}</h3>
              <span class="font-mono text-xs text-neutral-500">${job.period}</span>
            </div>
            <span class="mt-2 inline-block rounded-full border px-3 py-1 font-mono text-xs ${job.badgeColor}">
              ${job.badge}
            </span>
            <ul class="mt-3 space-y-1.5 text-sm text-neutral-400">
              ${job.highlights.map((h) => `<li class="flex gap-2"><span class="text-emerald-400">-</span><span>${h}</span></li>`).join('')}
            </ul>
          </li>
        `
          )
          .join('')}
      </ol>
    </section>
  `
}
