import { SectionLabel } from '@/components/ui/SectionLabel'
import { Chip } from '@/components/ui/Chip'
import { TrafficLight } from '@/components/graphics/TrafficLight'

const projects = [
  {
    tag: 'PLC SIMULATOR',
    title: 'Traffic Light PLC Simulator',
    desc: 'Browser-based PLC simulator demonstrating ladder logic concepts — timers, counters, contacts, and coils.',
    chips: ['React', 'TypeScript', 'Ladder Logic'],
  },
  {
    tag: 'SCADA DASHBOARD',
    title: 'Ignition Dashboard Clone',
    desc: 'Industrial SCADA dashboard with alarm management, historical trends, and live tag simulation.',
    chips: ['Ignition', 'Python', 'OPC-UA'],
  },
  {
    tag: 'NETWORK LAB',
    title: 'Industrial Ethernet Testbed',
    desc: 'Home-lab VLAN and Modbus TCP setup for practicing industrial network segmentation and troubleshooting.',
    chips: ['CCNA', 'VLANs', 'Modbus TCP'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="pb-28 scroll-mt-24">
      <SectionLabel n="01" label="Projects" />
      <h2 className="font-mono text-3xl font-bold text-white mt-5 mb-2">All Projects</h2>
      <p className="text-slate-600 font-mono text-sm mb-14">Placeholder content — full write-ups coming soon.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <div key={p.title} className="border border-[#38BDF8]/12 bg-[#1A1F26]/50 p-6 hover:border-[#38BDF8]/30 hover:bg-[#1A1F26]/75 transition-all group flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="font-mono text-[9px] text-[#38BDF8]/40 tracking-widest mb-1.5">// {p.tag}</div>
                <h3 className="font-mono text-[17px] font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-snug">
                  {p.title}
                </h3>
              </div>
              {p.title === 'Traffic Light PLC Simulator' && <TrafficLight phase={0} />}
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.chips.map(c => <Chip key={c} label={c} color="blue" />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
