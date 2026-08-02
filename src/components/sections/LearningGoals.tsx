import { useMemo, useState } from 'react'
import { GoalCard } from '@/components/lab/GoalCard'
import { GoalDetailPanel } from '@/components/lab/GoalDetailPanel'
import { ARTIFACTS } from '@/data/learningArtifacts'
import { LEARNING_GOALS } from '@/data/learningGoals'

export function LearningGoals() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const activeGoals = useMemo(() => LEARNING_GOALS.filter((g) => !g.archived), [])
  const archivedGoals = useMemo(() => LEARNING_GOALS.filter((g) => g.archived), [])

  const selectedGoal =
    selectedId && selectedId !== 'archive' ? LEARNING_GOALS.find((g) => g.id === selectedId) : undefined

  const handleSelect = (id: string) => {
    setSelectedId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="mb-14 pb-10 border-b border-[#38BDF8]/10">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-mono text-xl font-bold text-white">Active Learning Goals</h3>
        <span className="font-mono text-[9px] text-slate-700 tracking-widest">CLICK A GOAL</span>
      </div>
      <p className="text-slate-600 font-mono text-sm mb-8">
        What's currently in progress, and what's already been put to bed.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {activeGoals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} selected={selectedId === goal.id} onSelect={() => handleSelect(goal.id)} />
        ))}
        <button
          type="button"
          onClick={() => handleSelect('archive')}
          aria-pressed={selectedId === 'archive'}
          className={`text-left border border-dashed p-4 flex flex-col justify-between gap-3 transition-all ${
            selectedId === 'archive'
              ? 'border-slate-500 bg-[#1A1F26]/70'
              : 'border-slate-700 bg-[#1A1F26]/20 hover:border-slate-500'
          }`}
        >
          <span className="font-mono text-[10px] text-slate-500 tracking-widest">ARCHIVE</span>
          <span className="font-mono text-sm text-slate-400">{archivedGoals.length} completed</span>
        </button>
      </div>

      <GoalDetailPanel
        goal={selectedGoal}
        showArchive={selectedId === 'archive'}
        archivedGoals={archivedGoals}
        artifacts={ARTIFACTS}
      />
    </div>
  )
}
