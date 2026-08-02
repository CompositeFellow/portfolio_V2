import { Link } from 'react-router-dom'
import { LadderBackground } from '@/components/graphics/LadderBackground'

export function Hero() {
  const stats = [
    { label: 'PLC PROGRAMS', value: '12', unit: 'rungs' },
    { label: 'PROJECTS', value: '3', unit: 'active' },
    { label: 'WEEK', value: '12', unit: 'of 16' },
    { label: 'STATUS', value: 'OPEN', unit: 'to roles' },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
      <LadderBackground />

      <div className="relative z-10 max-w-3xl mt-14 animate-fade-up">
        <div className="font-mono text-[10px] text-[#38BDF8]/45 tracking-[0.35em] uppercase mb-8">
          Portfolio v2.4.1 // Industrial Automation
        </div>

        <h1 className="font-mono text-6xl md:text-7xl font-bold text-white mb-5 tracking-tight leading-none">
          Trevor Danahy
        </h1>

        <p className="font-mono text-lg md:text-xl text-[#38BDF8] mb-3 tracking-wide">
          Software Engineer → Controls &amp; Automation
        </p>
        <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto mb-10">
          I build software, learn industrial control systems,<br className="hidden sm:inline" />
          and solve problems where code meets hardware.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <Link to="/projects" className="group font-mono text-sm px-7 py-3 bg-[#38BDF8] text-[#0C1016] font-semibold hover:bg-[#7DD3FC] transition-colors flex items-center gap-2">
            View Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <a href="#contact" className="font-mono text-sm px-7 py-3 border border-[#38BDF8]/35 text-[#38BDF8] hover:bg-[#38BDF8]/10 transition-colors">
            Resume PDF
          </a>
          <a href="#contact" className="font-mono text-sm px-7 py-3 border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200 transition-colors">
            LinkedIn
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {stats.map(s => (
            <div key={s.label} className="border border-[#38BDF8]/15 bg-[#1A1F26]/65 backdrop-blur-sm px-5 py-3.5 text-left hover:border-[#38BDF8]/30 transition-colors">
              <div className="font-mono text-[9px] text-[#38BDF8]/45 tracking-widest mb-1">{s.label}</div>
              <div className="font-mono text-xl font-bold text-white">{s.value}</div>
              <div className="font-mono text-[9px] text-slate-600 mt-0.5">{s.unit}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[9px] text-slate-700 tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-700 to-transparent" />
      </div>
    </section>
  )
}
