import { SectionLabel } from '@/components/ui/SectionLabel'

export function Contact() {
  return (
    <section id="contact" className="pb-36 text-center scroll-mt-24">
      <SectionLabel n="09" label="Contact" />
      <h2 className="font-mono text-4xl md:text-5xl font-bold text-white mt-10 mb-5 leading-tight">
        Let's Build<br />
        <span className="text-[#38BDF8]">Reliable Systems</span>
      </h2>
      <p className="text-slate-500 font-mono text-sm max-w-sm mx-auto mb-14 leading-relaxed">
        Looking for controls, automation, or industrial software roles.
        Available for full-time positions and contract commissioning work.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {[
          { label: 'Email', href: 'mailto:alex@example.com', primary: true },
          { label: 'LinkedIn', href: '#', primary: false },
          { label: 'GitHub', href: '#', primary: false },
          { label: 'Resume PDF', href: '#', primary: false },
        ].map(link => (
          <a key={link.label} href={link.href}
            className={`font-mono text-sm px-7 py-3 transition-colors ${link.primary ? 'bg-[#38BDF8] text-[#0C1016] font-semibold hover:bg-[#7DD3FC]' : 'border border-[#38BDF8]/30 text-[#38BDF8] hover:bg-[#38BDF8]/10'}`}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="border-t border-[#38BDF8]/8 pt-10">
        <div className="font-mono text-[10px] text-slate-700 tracking-widest">
          Trevor Danahy // SOFTWARE ENGINEER → SCADA, CONTROLS &amp; AUTOMATION // 2025
        </div>
        <div className="font-mono text-[9px] text-slate-800 mt-2">
          React + TypeScript // Designed for industrial recruiters
        </div>
      </div>
    </section>
  )
}
