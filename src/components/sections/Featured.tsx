import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Chip } from '@/components/ui/Chip'
import { TrafficLight } from '@/components/graphics/TrafficLight'

export function Featured() {
  const [phase, setPhase] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setPhase(p => (p + 1) % 3), 1600)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="featured" className="pb-28 scroll-mt-24">
      <SectionLabel n="03" label="Featured" />
      <div className="flex items-end justify-between gap-4 mt-5 mb-14">
        <h2 className="font-mono text-3xl font-bold text-white">Featured Work</h2>
        <Link
          to="/projects"
          className="font-mono text-[11px] text-[#38BDF8] border border-[#38BDF8]/30 px-4 py-2 hover:bg-[#38BDF8]/10 transition-colors whitespace-nowrap"
        >
          View All Projects →
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-[#38BDF8]/12 bg-[#1A1F26]/50 p-6 hover:border-[#38BDF8]/30 hover:bg-[#1A1F26]/75 transition-all group flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="font-mono text-[9px] text-[#38BDF8]/40 tracking-widest mb-1.5">// PLC SIMULATOR</div>
              <h3 className="font-mono text-[17px] font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-snug">
                Traffic Light PLC Simulator
              </h3>
            </div>
            <TrafficLight phase={phase} />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
            Browser-based PLC simulator demonstrating ladder logic concepts — timers, counters, contacts, and coils.
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            <Chip label="React" color="blue" /><Chip label="TypeScript" color="blue" /><Chip label="Ladder Logic" color="amber" />
          </div>
          <Link to="/projects" className="font-mono text-[11px] text-[#38BDF8] mt-auto">View Project →</Link>
        </div>

        <div className="border border-[#38BDF8]/12 bg-[#1A1F26]/50 p-6 hover:border-[#38BDF8]/30 hover:bg-[#1A1F26]/75 transition-all group flex flex-col">
          <div className="mb-4">
            <div className="font-mono text-[9px] text-[#38BDF8]/40 tracking-widest mb-1.5">// SCADA DASHBOARD</div>
            <h3 className="font-mono text-[17px] font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-snug">
              Ignition Dashboard Clone
            </h3>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
            Industrial SCADA dashboard with alarm management, historical trends, and live tag simulation.
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            <Chip label="Ignition" color="amber" /><Chip label="Python" color="blue" /><Chip label="OPC-UA" color="green" />
          </div>
          <Link to="/projects" className="font-mono text-[11px] text-[#38BDF8] mt-auto">View Project →</Link>
        </div>
      </div>
    </section>
  )
}
