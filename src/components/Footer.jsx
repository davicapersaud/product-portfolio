export default function Footer() {
  return (
    <footer className="border-t border-warm-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Left: identity */}
        <div>
          <p className="font-display text-lg font-semibold text-charcoal">Davica Persaud</p>
          <p className="font-mono text-[11px] tracking-widest uppercase text-[#6B6560] mt-1">
            AI Product Manager | Mentor
          </p>
        </div>

        {/* Right: links + year */}
        <div className="flex items-center gap-8">
          <a
            href="https://www.linkedin.com/in/davica-persaud"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-widest uppercase text-[#6B6560] hover:text-gold transition-colors duration-200 group flex items-center gap-1.5"
          >
            LinkedIn
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 inline-block">
              ↗
            </span>
          </a>
          <span className="text-warm-gray">·</span>
          <a
            href="https://github.com/davicapersaud"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-widest uppercase text-[#6B6560] hover:text-gold transition-colors duration-200 group flex items-center gap-1.5"
          >
            GitHub
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 inline-block">
              ↗
            </span>
          </a>
          <span className="text-warm-gray">·</span>
          <span className="font-mono text-[11px] text-[#6B6560]">© 2026</span>
        </div>
      </div>
    </footer>
  )
}
