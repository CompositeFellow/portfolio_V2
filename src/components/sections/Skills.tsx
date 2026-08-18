import { SectionLabel } from '@/components/ui/SectionLabel'
import { Chip, type ChipColor } from '@/components/ui/Chip'

export function Skills() {
  const cats = [
    {
      label: 'Programming', accent: 'text-blue-400',
      skills: [
        { n: 'Python', c: 'blue' }, { n: 'TypeScript', c: 'blue' }, { n: 'Go', c: 'cyan' },
        { n: 'C#', c: 'purple' }, { n: 'Structured Text', c: 'amber' }, { n: 'Ladder Logic', c: 'amber' },
        { n: 'SQL', c: 'blue' }, { n: 'Bash', c: 'green' },
      ] as { n: string; c: ChipColor }[],
    },
    {
      label: 'Industrial', accent: 'text-amber-400',
      skills: [
        { n: 'Allen-Bradley', c: 'amber' }, { n: 'Siemens S7', c: 'amber' }, { n: 'Micro850', c: 'amber' },
        { n: 'Ignition SCADA', c: 'amber' }, { n: 'HMI Design', c: 'amber' }, { n: 'Modbus', c: 'amber' },
        { n: 'Ethernet/IP', c: 'amber' }, { n: 'P&ID Reading', c: 'amber' },
      ] as { n: string; c: ChipColor }[],
    },
    {
      label: 'Networking', accent: 'text-green-400',
      skills: [
        { n: 'CCNA', c: 'green' }, { n: 'VLANs', c: 'green' }, { n: 'Industrial Ethernet', c: 'green' },
        { n: 'Firewalls', c: 'green' }, { n: 'TCP/IP', c: 'green' }, { n: 'OPC-UA', c: 'green' },
      ] as { n: string; c: ChipColor }[],
    },
    {
      label: 'Tools', accent: 'text-purple-400',
      skills: [
        { n: 'Git', c: 'purple' }, { n: 'Linux', c: 'purple' }, { n: 'Docker', c: 'purple' },
        { n: 'Studio 5000', c: 'amber' }, { n: 'TIA Portal', c: 'amber' }, { n: 'VS Code', c: 'purple' },
        { n: 'Wireshark', c: 'green' },
      ] as { n: string; c: ChipColor }[],
    },
  ]

  return (
    <section id="skills" className="pb-28 bg-[#0F1318] scroll-mt-24">
      <SectionLabel n="02" label="Skills" />
      <h2 className="font-mono text-3xl font-bold text-white mt-5 mb-14">Technical Stack</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cats.map(cat => (
          <div key={cat.label} className="border border-[#38BDF8]/10 bg-[#1A1F26]/50 p-6 hover:border-[#38BDF8]/22 transition-colors">
            <div className={`font-mono text-[10px] tracking-widest uppercase mb-5 ${cat.accent}`}>{cat.label}</div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(s => <Chip key={s.n} label={s.n} color={s.c} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
