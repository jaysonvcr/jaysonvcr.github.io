interface Job {
  role: string
  company: string
  period: string
  dotColor: string
  highlights: string[]
  stack: string[]
}

const jobs: Job[] = [
  {
    role: 'Senior Software Developer',
    company: 'Round Earth Philippines',
    period: 'Jul 2024 - Mar 2026',
    dotColor: 'bg-emerald-500 dark:bg-emerald-400',
    highlights: [
      'Implemented the Membership Payments solution with Stripe to handle subscriptions, renewals, and refunds, enabling seamless self-service payments and reducing manual billing work.',
      'Coded RESTful APIs using Node.js and TypeScript, applying TDD with unit and integration testing.',
      'Improved database design and query performance with indexing and caching strategies, strengthening data integrity while reducing resource costs by 30%.',
      'Converted Figma mockups into reusable React components, collaborating closely with UI/UX designers and ensuring responsiveness from web to mobile.',
    ],
    stack: ['Node.js', 'TypeScript', 'Next.js', 'Laravel', 'Stripe API', 'MySQL', 'Redis', 'Jest', 'Figma', 'Postman', 'Swagger'],
  },
  {
    role: 'API Developer',
    company: 'Collabera Digital',
    period: 'Apr 2022 - Feb 2024',
    dotColor: 'bg-cyan-500 dark:bg-cyan-400',
    highlights: [
      "Coded serverless authentication and UAC service for UnionDigital's banking app, scaling for 100K+ users while reducing infrastructure costs by 30%.",
      'Applied TDD, unit, and integration testing using Jest across the authentication service, achieving 90% test coverage and keeping production defects near zero.',
      "Integrated Affinidi's verifiable credentials framework into the KYC/identity verification flow, reinforcing identity assurance for UnionDigital's banking app.",
    ],
    stack: ['Node.js', 'TypeScript', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'Jest', 'OAuth2', 'JWT', 'Affinidi SDK'],
  },
  {
    role: 'Application Development Team Lead',
    company: 'Accenture',
    period: 'May 2021 - Apr 2022',
    dotColor: 'bg-purple-500 dark:bg-purple-400',
    highlights: [
      'Led and mentored a cross-functional team of 8 developers, introducing Agile (Scrum) ceremonies and structured code-review practices that improved on-time sprint delivery from 70% to 95%.',
      'Built a reusable component library of shared UI components, utility functions, and configuration modules, reducing code duplication by 40% and accelerating feature delivery by 30% across 5+ projects.',
      'Led development of the backend API authentication using OAuth2, JWT, session tokens, and API keys, securing 50+ endpoints and reducing authentication-related vulnerabilities by 90%.',
      "Led the standardization of the team's workflow - TDD, unit testing, integration testing, code reviews, and a Git branching strategy - raising test coverage from 45% to 85% and cutting production defects by 90%.",
    ],
    stack: ['JavaScript', 'React.js', 'AWS', 'Meta', 'OAuth2', 'JWT', 'Jest', 'Git', 'Jira', 'Confluence'],
  },
  {
    role: 'Senior Full Stack Developer',
    company: 'RingCentral',
    period: 'Jun 2018 - May 2021',
    dotColor: 'bg-orange-500 dark:bg-orange-400',
    highlights: [
      'Led the migration from a monolithic architecture to microservices, decomposing the application into 5 independently deployable services and reducing deployment time by 80%. Improved system scalability to support thousands of requests per day while maintaining high availability.',
      'Built automated GitLab CI/CD pipelines for multi-region AWS deployments, enabling zero-downtime releases and high availability. Reduced deployment and rollback time from 30 to 5 minutes while maintaining uninterrupted service.',
      'Standardized the development environment using Docker for 6+ developers, enabling 100% consistency and reducing onboarding time by 80%.',
      'Automated 10 E2E cases using Selenium, reducing manual regression testing time from 3 hours to 30 minutes and improving test coverage across critical application workflows.',
      'Developed an AI-powered Jira chatbot used by 40+ engineers to create, retrieve, update, and manage and automate tickets, replacing 5+ manual UI interactions with a conversational workflow.',
    ],
    stack: ['Node.js', 'Vue.js', 'Laravel', 'Docker', 'AWS', 'GitLab CI/CD', 'Selenium', 'TensorFlow', 'Jira API', 'ELK'],
  },
]

export function experienceHtml(): string {
  return `
    <section id="experience" class="mx-auto max-w-3xl px-6 py-24">
      <h2 class="reveal font-mono text-sm uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Experience</h2>
      <p class="reveal mt-2 text-2xl font-semibold text-[var(--text)]">Where I've worked</p>

      <ol class="mt-12 space-y-12 border-l border-[var(--border)] pl-8">
        ${jobs
          .map(
            (job) => `
          <li class="reveal relative">
            <span class="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full ${job.dotColor}"></span>
            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 class="text-lg font-medium text-[var(--text)]">${job.role} &middot; ${job.company}</h3>
              <span class="font-mono text-xs text-[var(--text-mute)]">${job.period}</span>
            </div>
            <ul class="mt-3 space-y-1.5 text-sm text-[var(--text-soft)]">
              ${job.highlights.map((h) => `<li class="flex gap-2"><span class="text-emerald-600 dark:text-emerald-400">-</span><span>${h}</span></li>`).join('')}
            </ul>
            <p class="mt-3 font-mono text-xs text-[var(--text-mute)]">
              <span class="text-[var(--text-soft)]">Tech Stack:</span> ${job.stack.join(', ')}
            </p>
          </li>
        `
          )
          .join('')}
      </ol>
    </section>
  `
}
