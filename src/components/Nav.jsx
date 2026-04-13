import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Work', path: '/' },
  { label: 'Style Magnet', path: '/style-magnet' },
  { label: 'Dreamy Tales', path: '/dreamy-time' },
]

export default function Nav() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/85 backdrop-blur-md border-b border-warm-gray'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-[64px] flex items-center justify-between">
        {/* Logo / Name */}
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold tracking-wide text-charcoal">
            Davica Persaud
          </span>
          <span className="w-1 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-0.5" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
          {links.map((link) => {
            const active =
              link.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path)
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                  active ? 'text-charcoal' : 'text-charcoal hover:text-[#8B6914]'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-[#8B6914]" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-[5px] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-px bg-charcoal transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-charcoal transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-charcoal transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen ? 'max-h-64 border-b border-warm-gray' : 'max-h-0'
        } bg-cream`}
      >
        <nav className="px-6 pt-4 pb-8 flex flex-col gap-6">
          {links.map((link) => {
            const active =
              link.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path)
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-mono text-sm tracking-widest uppercase ${
                  active ? 'text-gold' : 'text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
