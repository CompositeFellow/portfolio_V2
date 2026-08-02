import { ArtifactRow } from '@/components/lab/ArtifactRow'
import type { LearningArtifact } from '@/data/learningArtifacts'
import { formatLong } from '@/lib/heatmap'

interface SelectedDayArtifactsProps {
  date: string | null
  artifacts: LearningArtifact[]
}

export function SelectedDayArtifacts({ date, artifacts }: SelectedDayArtifactsProps) {
  return (
    <div className="mt-10 pt-8 border-t border-[#38BDF8]/10">
      {date === null ? (
        <p className="font-mono text-sm text-slate-600">Select a day on the heatmap to see what was logged.</p>
      ) : (
        <>
          <h3 className="font-mono text-sm text-white mb-4">{formatLong(date)}</h3>
          {artifacts.length === 0 ? (
            <p className="font-mono text-sm text-slate-600">No learning activity logged this day.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {artifacts.map((a) => (
                <ArtifactRow key={a.id} artifact={a} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
