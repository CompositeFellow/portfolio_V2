import { SectionLabel } from '@/components/ui/SectionLabel'

export function About() {
  const timeline = [
    { year: '2019–22', role: 'Junior Developer', place: 'Web Agency', note: 'React, TypeScript, REST APIs', icon: '{ }', dim: false, future: false, highlight: false },
    { year: '2022–24', role: 'Software Engineer', place: 'SaaS Startup', note: 'Go microservices, Docker, PostgreSQL', icon: '▸', dim: false, future: false, highlight: false },
    { year: '2024', role: 'Pivot Begins', place: 'Self-directed', note: 'CCNA, PLC fundamentals, Ignition SCADA', icon: '⇣', highlight: true, dim: false, future: false },
    { year: '2025', role: 'Target Role', place: 'Controls Engineer', note: 'Industrial software, site commissioning', icon: '◎', dim: true, future: true, highlight: false },
    { year: '2026+', role: 'Long-range Goal', place: 'Global Commissioning', note: 'Mining, Oil & Gas, Manufacturing', icon: '★', dim: true, future: true, highlight: false },
  ]

  const studying = ['PLC Programming', 'Ignition SCADA', 'Industrial Networking', 'Ethernet/IP', 'Modbus TCP/RTU', 'Python Automation', 'Studio 5000', 'HMI Design']

  return (
    <section id="about" className="pb-28 scroll-mt-24">
      <SectionLabel n="01" label="About" />

      <div className="grid md:grid-cols-2 gap-16 mt-14">
        <div>
          <h2 className="font-mono text-3xl font-bold text-white mb-7 leading-tight">
            Software engineer.<br />
            <span className="text-[#38BDF8]">Future controls engineer.</span>
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed text-[15px]">
            <p>
              Five years building production systems — APIs, infrastructure, distributed services.
              I write clean code that ships reliably and stays maintainable.
            </p>
            <p>
              In 2024 I started a deliberate transition into industrial automation and controls.
              I'm learning PLCs, SCADA platforms, industrial networking, and field instrumentation —
              not as a hobby, but as a career direction.
            </p>
            <p>
              My goal is to combine software depth with controls knowledge to work on the systems
              that run mines, refineries, and manufacturing floors.
            </p>
          </div>

          <div className="mt-9 border border-[#38BDF8]/15 bg-[#1A1F26]/40 p-6">
            <div className="font-mono text-[10px] text-[#38BDF8]/45 tracking-widest mb-5">// CURRENTLY STUDYING</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {studying.map(item => (
                <div key={item} className="flex items-center gap-2.5 font-mono text-sm text-slate-300">
                  <span className="text-green-400 text-xs">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="font-mono text-[10px] text-[#38BDF8]/45 tracking-widest mb-8">// CAREER TRAJECTORY</div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#38BDF8]/30 via-[#38BDF8]/20 to-transparent" />
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className={`relative pl-14 pb-9 transition-opacity ${item.dim ? 'opacity-45' : ''}`}>
                  <div className={`absolute left-0 top-0 w-10 h-10 flex items-center justify-center border font-mono text-xs ${item.highlight
                    ? 'border-[#38BDF8] text-[#38BDF8] bg-[#38BDF8]/10'
                    : item.future
                      ? 'border-slate-700 text-slate-600'
                      : 'border-slate-700 text-slate-400'
                    }`}>
                    {item.icon}
                  </div>
                  <div className="font-mono text-[10px] text-[#38BDF8]/40 tracking-widest mb-1">{item.year}</div>
                  <div className={`font-mono text-base font-semibold mb-0.5 ${item.highlight ? 'text-[#38BDF8]' : item.future ? 'text-slate-500' : 'text-white'}`}>
                    {item.role}
                  </div>
                  <div className="font-mono text-[11px] text-slate-600 mb-1">{item.place}</div>
                  <div className="text-sm text-slate-500">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
