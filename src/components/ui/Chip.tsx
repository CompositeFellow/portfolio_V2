export type ChipColor = 'blue' | 'amber' | 'green' | 'purple' | 'cyan' | 'red'

const chipStyles: Record<ChipColor, string> = {
  blue: 'bg-blue-950/70 text-blue-300 border-blue-700/40',
  amber: 'bg-amber-950/70 text-amber-300 border-amber-700/40',
  green: 'bg-green-950/70 text-green-300 border-green-700/40',
  purple: 'bg-purple-950/70 text-purple-300 border-purple-700/40',
  cyan: 'bg-cyan-950/70 text-cyan-300 border-cyan-700/40',
  red: 'bg-red-950/70 text-red-300 border-red-700/40',
}

export function Chip({ label, color = 'blue' }: { label: string; color?: ChipColor }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 border font-mono text-[10px] tracking-wide ${chipStyles[color]}`}>
      {label}
    </span>
  )
}
