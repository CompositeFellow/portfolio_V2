import { Chip, type ChipColor } from '@/components/ui/Chip'
import { CATEGORIES } from '@/data/learningArtifacts'
import type { LearningGoal } from '@/data/learningGoals'

const ACCENT_FILL: Record<ChipColor, string> = {
  blue: 'bg-blue-400',
  cyan: 'bg-cyan-400',
  amber: 'bg-amber-400',
  purple: 'bg-purple-400',
  green: 'bg-green-400',
  red: 'bg-red-400',
}

const ACCENT_BORDER: Record<ChipColor, string> = {
  blue: 'border-blue-500/50',
  cyan: 'border-cyan-500/50',
  amber: 'border-amber-500/50',
  purple: 'border-purple-500/50',
  green: 'border-green-500/50',
  red: 'border-red-500/50',
}

interface GoalCardProps {
  goal: LearningGoal
  selected: boolean
  onSelect: () => void
}

export function GoalCard({ goal, selected, onSelect }: GoalCardProps) {
  const category = CATEGORIES.find((c) => c.id === goal.category)
  const accent = category?.chipColor ?? 'blue'
  const done = goal.milestones.filter((m) => m.done).length

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`text-left border p-4 flex flex-col gap-3 transition-all ${
        selected
          ? `${ACCENT_BORDER[accent]} bg-[#1A1F26]/70`
          : 'border-[#38BDF8]/10 bg-[#1A1F26]/40 hover:border-[#38BDF8]/28'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        {category && <Chip label={category.label} color={category.chipColor} />}
        <span className="font-mono text-[10px] text-slate-600">{goal.progress}%</span>
      </div>
      <h4 className="font-mono text-sm text-white leading-snug">{goal.title}</h4>
      <div className="h-1 bg-[#0F1318] overflow-hidden">
        <div className={`h-full ${ACCENT_FILL[accent]}`} style={{ width: `${goal.progress}%` }} />
      </div>
      <span className="font-mono text-[10px] text-slate-600">
        {done}/{goal.milestones.length} milestones
      </span>
    </button>
  )
}
