import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const pages = [
  { to: '/', label: 'Home' },
  { to: '/lab', label: 'Learning Lab' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#111418]/96 border-b border-[#38BDF8]/10 backdrop-blur-md' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <NavLink to="/" className="font-mono text-sm text-[#38BDF8] flex items-center">
          <span className="opacity-40">~/</span>
          <span className="font-semibold">trevordanahy.info </span>
          <span className="animate-blink ml-0.5">_</span>
        </NavLink>
        <div className="hidden md:flex items-center gap-8">
          {pages.map((p) => (
            <NavLink
              key={p.to}
              to={p.to}
              end={p.to === '/'}
              className={({ isActive }) =>
                `font-mono text-[11px] tracking-widest uppercase transition-colors ${
                  isActive ? 'text-[#38BDF8]' : 'text-slate-500 hover:text-[#38BDF8]'
                }`
              }
            >
              {p.label}
            </NavLink>
          ))}
          <a
            href="#"
            className="font-mono text-[11px] px-4 py-1.5 border border-[#38BDF8]/35 text-[#38BDF8] hover:bg-[#38BDF8]/10 transition-colors tracking-wider"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
