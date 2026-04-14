import { Link } from 'react-router-dom'

const projects = [
  {
    number: '01',
    name: 'Style Magnet',
    category: 'AI Product',
    tag: 'Product',
    description:
      'An AI-powered personal styling experience that bridges fashion discovery and authentic self-expression.',
    path: '/style-magnet',
  },
  {
    number: '02',
    name: 'Dreamy Tales Storyteller',
    category: 'Solo · Vibe-Coding',
    tag: 'Side Project',
    description:
      'A generative bedtime story app built at the intersection of AI and imaginative play.',
    path: '/dreamy-time',
  },
]

export default function Home() {
  return (
    <div className="animate-page-in">
      {/* ── Hero ────────────────────────────────────── */}
      <section className="pt-20 pb-10 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-6 animate-fade-up hero-name opacity-0-start">
          <span className="block w-6 h-px bg-gold" />
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#6B6560]">
            Portfolio · 2026
          </span>
        </div>

        {/* Name — editorial display */}
        <div className="mb-2 animate-fade-up hero-name opacity-0-start">
          <h1
            className="font-display font-bold text-charcoal leading-[0.88] tracking-tight"
            style={{ fontSize: 'clamp(52px, 11vw, 148px)' }}
          >
            Davica
          </h1>
        </div>
        <div className="mb-6 animate-fade-up hero-name opacity-0-start" style={{ animationDelay: '0.08s' }}>
          <h1
            className="font-display font-light italic text-charcoal leading-[0.88] tracking-tight"
            style={{ fontSize: 'clamp(52px, 11vw, 148px)' }}
          >
            Persaud
          </h1>
        </div>

        {/* Rule with gold accent */}
        <div className="relative w-full h-px bg-warm-gray mb-6 overflow-hidden animate-fade-up hero-rule opacity-0-start">
          <span className="absolute left-0 top-0 h-full bg-gold animate-line-grow" style={{ width: '28%' }} />
        </div>

        {/* Title + statement */}
        <div className="animate-fade-up hero-sub opacity-0-start flex flex-col gap-2">
          <p className="font-mono text-sm tracking-[0.2em] uppercase" style={{ color: '#8B6914' }}>
            AI Product Manager
          </p>
          <p className="font-mono text-sm tracking-[0.2em] uppercase" style={{ color: '#8B6914' }}>
            AI Product Builder
          </p>
          <p className="font-mono text-sm tracking-[0.2em] uppercase" style={{ color: '#8B6914' }}>
            Mentor
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center gap-8">
            <img
              src="/linkedinPic.jpeg"
              alt="Davica Persaud"
              className="md:flex-shrink-0"
              style={{ maxWidth: '340px', width: '100%' }}
            />
            <p className="font-display text-xl md:text-[1.6rem] italic font-bold text-charcoal/65 leading-snug">
              "Not just designing AI — building it. Products that last, capabilities that excite, potential that meets real life."
            </p>
          </div>
        </div>

      </section>

      {/* ── About ───────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="border-t border-warm-gray pt-16 grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Section label */}
          <div className="md:col-span-3">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#6B6560]">
              About
            </span>
          </div>

          {/* Content */}
          <div className="md:col-span-9">
            <h2
              className="font-display font-semibold text-charcoal mb-10 leading-tight"
              style={{ fontSize: 'clamp(30px, 4.5vw, 52px)' }}
            >
              At the crossroads of AI
              <br />
              <span className="font-light italic">and human experience.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <p className="text-charcoal/60 text-lg leading-relaxed">
                I could tell you that my background is in computer engineering and programming, in application support and quality assurance testing, in IT implementations and solutions design — but instead, let me tell you what I actually do.
              </p>
              <p className="text-charcoal/60 text-lg leading-relaxed">
                I started in customer-facing roles, where I learned early that the most valuable thing a PM can carry is genuine empathy for the person on the other side of the screen. That instinct never left. What changed is the lens — from support, to QA, to business analysis, to solutions design, to product — each layer adding a different way of seeing the same problem.
              </p>
              <p className="text-charcoal/60 text-lg leading-relaxed">
                Today I work at the intersection of AI and product — as an AI Product Manager and a mentor. I don't just spec AI features; I understand the architecture behind them, the user behaviour underneath them, and the business case that has to justify them.
              </p>
              <p className="text-charcoal/60 text-lg leading-relaxed">
                I also build. I taught myself to vibe-code and shipped Dreamy Tales Storyteller, a generative bedtime story app — because I believe the best PMs stay close to the craft. This portfolio you're reading right now? Built by me, in Claude Code.
              </p>
              <p className="text-charcoal/60 text-lg leading-relaxed">
                I'm not here to just manage a backlog. I build AI products from 0 to 1 that people are genuinely excited to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="border-t border-warm-gray pt-16">
          {/* Section header */}
          <div className="flex justify-between items-baseline mb-14">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#6B6560]">
              Selected Work
            </span>
            <span className="font-display italic text-charcoal/30 text-lg">2025–Present</span>
          </div>

          {/* Cards grid — gap-px creates 1px ruled dividers from the bg */}
          <div className="grid md:grid-cols-2 gap-px bg-warm-gray">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ project }) {
  const isDisabled = !project.path

  const inner = (
    <div
      className={`group bg-cream p-8 md:p-10 flex flex-col gap-6 min-h-[320px] transition-colors duration-300 ${
        isDisabled ? 'cursor-default' : 'hover:bg-[#F0EDE8] cursor-pointer'
      }`}
    >
      {/* Number + tag */}
      <div className="flex justify-between items-start">
        <span className="font-mono text-2xl text-mid-gray/60">{project.number}</span>
        <span
          className={`font-mono text-[9px] tracking-widest uppercase border px-2 py-1 transition-all duration-300 ${
            isDisabled
              ? 'border-warm-gray text-warm-gray'
              : 'border-gold/0 text-gold opacity-0 group-hover:opacity-100 group-hover:border-gold/40'
          }`}
        >
          {project.tag}
        </span>
      </div>

      {/* Rule */}
      <div
        className={`h-px transition-colors duration-500 ${
          isDisabled ? 'bg-warm-gray' : 'bg-warm-gray group-hover:bg-gold'
        }`}
      />

      {/* Text */}
      <div className="flex-1 flex flex-col gap-3">
        <h3
          className="font-display font-semibold text-charcoal leading-tight"
          style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}
        >
          {project.name}
        </h3>
        <p className="font-mono text-[9px] tracking-widest uppercase text-[#8B6914]">
          {project.category}
        </p>
        <p className="text-charcoal/55 text-sm leading-relaxed mt-1">{project.description}</p>
      </div>

      {/* CTA */}
      {!isDisabled && (
        <div className="flex items-center gap-2 text-charcoal/50 group-hover:text-[#8B6914] transition-colors duration-300">
          <span className="font-mono text-[10px] tracking-widest uppercase">View</span>
          <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">→</span>
        </div>
      )}
    </div>
  )

  if (isDisabled) return inner
  return <Link to={project.path}>{inner}</Link>
}
