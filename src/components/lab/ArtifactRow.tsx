import { Chip } from '@/components/ui/Chip'
import { CATEGORIES, type LearningArtifact } from '@/data/learningArtifacts'

const TYPE_DOT: Record<LearningArtifact['type'], string> = {
  code: 'bg-blue-400',
  notes: 'bg-slate-400',
  flashcards: 'bg-amber-400',
  lab: 'bg-green-400',
}

const TYPE_LABEL: Record<LearningArtifact['type'], string> = {
  code: 'Code',
  notes: 'Notes',
  flashcards: 'Flashcards',
  lab: 'Lab',
}

export function ArtifactRow({ artifact }: { artifact: LearningArtifact }) {
  const category = CATEGORIES.find((c) => c.id === artifact.category)

  const card = (
    <div className="group border border-[#38BDF8]/10 bg-[#1A1F26]/40 p-4 hover:border-[#38BDF8]/28 hover:bg-[#1A1F26]/65 transition-all">
      <div className="flex items-center flex-wrap gap-2 mb-2.5">
        <span className={`inline-block w-2 h-2 rounded-full shrink-0 ${TYPE_DOT[artifact.type]}`} />
        <span className="font-mono text-[9px] tracking-widest uppercase text-slate-600">{TYPE_LABEL[artifact.type]}</span>
        {category && <Chip label={category.label} color={category.chipColor} />}
        {artifact.tag && <Chip label={artifact.tag} color="cyan" />}
      </div>
      <h3 className="font-mono text-sm text-slate-300 group-hover:text-white transition-colors leading-snug">{artifact.title}</h3>
      {artifact.summary && <p className="font-mono text-xs text-slate-600 mt-2 leading-relaxed">{artifact.summary}</p>}
      {artifact.url && (
        <div className="font-mono text-[10px] text-[#38BDF8]/35 mt-3 group-hover:text-[#38BDF8]/65 transition-colors">View →</div>
      )}
    </div>
  )

  if (artifact.url) {
    return (
      <a href={artifact.url} target="_blank" rel="noreferrer" className="block">
        {card}
      </a>
    )
  }
  return card
}
