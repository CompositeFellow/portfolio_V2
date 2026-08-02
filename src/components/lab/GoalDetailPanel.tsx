import { Chip } from '@/components/ui/Chip'
import { CATEGORIES, type LearningArtifact } from '@/data/learningArtifacts'
import type { LearningGoal } from '@/data/learningGoals'
import { formatLong } from '@/lib/heatmap'

interface GoalDetailPanelProps {
  goal?: LearningGoal
  showArchive: boolean
  archivedGoals: LearningGoal[]
  artifacts: LearningArtifact[]
}

export function GoalDetailPanel({ goal, showArchive, archivedGoals, artifacts }: GoalDetailPanelProps) {
  if (!goal && !showArchive) {
    return (
      <p className="font-mono text-sm text-slate-600 mt-8 pt-8 border-t border-[#38BDF8]/10">
        Select a goal to see progress, milestones, and related log entries.
      </p>
    )
  }

  if (showArchive) {
    return (
      <div className="mt-8 pt-8 border-t border-[#38BDF8]/10">
        <h4 className="font-mono text-sm text-white mb-4">Archive — {archivedGoals.length} completed</h4>
        {archivedGoals.length === 0 ? (
          <p className="font-mono text-sm text-slate-600">Nothing archived yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {archivedGoals.map((g) => {
              const category = CATEGORIES.find((c) => c.id === g.category)
              return (
                <div key={g.id} className="border border-[#38BDF8]/10 bg-[#1A1F26]/40 p-4">
                  <div className="flex items-center gap-2 mb-2.5">
                    {category && <Chip label={category.label} color={category.chipColor} />}
                    <span className="font-mono text-[9px] tracking-widest uppercase text-slate-600">Completed</span>
                  </div>
                  <h5 className="font-mono text-sm text-slate-300 mb-2">{g.title}</h5>
                  <p className="font-mono text-xs text-slate-600 leading-relaxed">{g.archivedNote ?? g.summary}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  const activeGoal = goal as LearningGoal
  const category = CATEGORIES.find((c) => c.id === activeGoal.category)
  const related = activeGoal.tag ? artifacts.filter((a) => a.tag === activeGoal.tag) : []
  const done = activeGoal.milestones.filter((m) => m.done).length

  return (
    <div className="mt-8 pt-8 border-t border-[#38BDF8]/10">
      <div className="flex items-center gap-2 mb-3">
        {category && <Chip label={category.label} color={category.chipColor} />}
        {activeGoal.tag && <Chip label={activeGoal.tag} color="cyan" />}
      </div>
      <h4 className="font-mono text-lg text-white mb-2">{activeGoal.title}</h4>
      <p className="font-mono text-sm text-slate-400 leading-relaxed mb-6 max-w-2xl">{activeGoal.summary}</p>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <div className="font-mono text-[10px] text-slate-600 tracking-widest mb-3">
            // MILESTONES ({done}/{activeGoal.milestones.length})
          </div>
          <div className="space-y-2">
            {activeGoal.milestones.map((m, i) => (
              <div key={i} className="flex items-center gap-3 font-mono text-sm">
                <span className={m.done ? 'text-green-400' : 'text-slate-700'}>{m.done ? '✓' : '○'}</span>
                <span className={m.done ? 'text-slate-300' : 'text-slate-600'}>{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="font-mono text-[10px] text-slate-600 tracking-widest mb-3">// DETAILS</div>
          <div className="space-y-2 font-mono text-sm text-slate-400">
            <div>Started {formatLong(activeGoal.startDate)}</div>
            {activeGoal.targetDate && <div>Target {formatLong(activeGoal.targetDate)}</div>}
            <div>
              {related.length} related log {related.length === 1 ? 'entry' : 'entries'}
            </div>
          </div>
          {related.length > 0 && (
            <div className="mt-4 space-y-1.5">
              {related.slice(0, 4).map((a) => (
                <div key={a.id} className="font-mono text-xs text-slate-600 truncate">
                  — {a.title}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
