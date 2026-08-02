import type { CategoryId } from './learningArtifacts'

export interface GoalMilestone {
  label: string
  done: boolean
}

export interface LearningGoal {
  id: string
  category: CategoryId
  title: string
  tag?: string
  summary: string
  progress: number // 0-100
  startDate: string // 'YYYY-MM-DD'
  targetDate?: string
  milestones: GoalMilestone[]
  archived?: boolean
  archivedNote?: string
}

// Placeholder seed data — content not yet valid, per AGENTS.md.
export const LEARNING_GOALS: LearningGoal[] = [
  {
    id: 'goal-ccna',
    category: 'it',
    title: 'CCNA Certification',
    tag: 'CCNA',
    summary: 'Build a working knowledge of enterprise routing, switching, and network security to pass the CCNA exam.',
    progress: 65,
    startDate: '2025-08-01',
    targetDate: '2025-12-15',
    milestones: [
      { label: 'Subnetting fluency', done: true },
      { label: 'VLANs & trunking', done: true },
      { label: 'OSPF multi-area routing', done: true },
      { label: 'ACLs & NAT', done: false },
      { label: 'Wireless & security fundamentals', done: false },
    ],
  },
  {
    id: 'goal-ignition',
    category: 'ot',
    title: 'Ignition SCADA Proficiency',
    tag: 'SCADA',
    summary: 'Get comfortable building and deploying SCADA/HMI systems in Ignition end to end, from tags to alarms to historian.',
    progress: 45,
    startDate: '2025-08-01',
    milestones: [
      { label: 'Tag & UDT structure', done: true },
      { label: 'Perspective view building', done: true },
      { label: 'Alarm pipeline configuration', done: false },
      { label: 'Historian & reporting', done: false },
    ],
  },
  {
    id: 'goal-ai-agents',
    category: 'ai',
    title: 'Applied LLM Agents',
    summary: 'Understand agentic patterns well enough to design and evaluate tool-using AI systems for industrial use cases.',
    progress: 30,
    startDate: '2025-09-01',
    milestones: [
      { label: 'Tool-calling fundamentals', done: true },
      { label: 'RAG pipeline basics', done: true },
      { label: 'Multi-agent orchestration', done: false },
      { label: 'Evaluation harnesses', done: false },
    ],
  },
  {
    id: 'goal-structured-text',
    category: 'programming',
    title: 'Structured Text Fluency',
    tag: 'PLCs',
    summary: 'Move from ladder-first thinking to writing clean, reusable structured text for complex sequencing logic.',
    progress: 55,
    startDate: '2025-08-15',
    milestones: [
      { label: 'Core ST syntax', done: true },
      { label: 'AOI / function block design', done: true },
      { label: 'State machine patterns', done: false },
      { label: 'Reusable library development', done: false },
    ],
  },
  {
    id: 'goal-plc-basics',
    category: 'ot',
    title: 'PLC Fundamentals',
    tag: 'PLCs',
    summary: 'Learned the scan cycle, ladder logic instruction set, and timer/counter fundamentals from the ground up.',
    progress: 100,
    startDate: '2025-08-01',
    targetDate: '2025-09-01',
    archived: true,
    archivedNote: 'Completed 2025-09-01 — moved on to structured text and sequencing.',
    milestones: [
      { label: 'Scan cycle mechanics', done: true },
      { label: 'Ladder instruction set', done: true },
      { label: 'Timers & counters', done: true },
    ],
  },
  {
    id: 'goal-subnetting',
    category: 'it',
    title: 'Subnetting Mastery',
    tag: 'CCNA',
    summary: 'Drilled subnetting and VLSM until it was fast and reliable without a calculator.',
    progress: 100,
    startDate: '2025-08-01',
    targetDate: '2025-08-21',
    archived: true,
    archivedNote: 'Completed 2025-08-21 — rolled into the broader CCNA goal.',
    milestones: [
      { label: 'VLSM by hand', done: true },
      { label: 'Fast binary conversion', done: true },
    ],
  },
]
