import type { ChipColor } from '@/components/ui/Chip'

export type ArtifactType = 'code' | 'notes' | 'flashcards' | 'lab'
export type CategoryId = 'programming' | 'it' | 'ot' | 'ai'

export interface Category {
  id: CategoryId
  label: string
  chipColor: ChipColor
  /** heatmap cell background classes, level 0 (empty) through 4 (max) */
  levels: [string, string, string, string, string]
}

export interface LearningArtifact {
  id: string
  date: string // 'YYYY-MM-DD'
  category: CategoryId
  type: ArtifactType
  title: string
  tag?: string
  url?: string
  summary?: string
}

export const CATEGORIES: Category[] = [
  {
    id: 'programming',
    label: 'Programming',
    chipColor: 'blue',
    levels: ['bg-[#1A1F26]', 'bg-blue-950', 'bg-blue-800', 'bg-blue-600', 'bg-blue-400'],
  },
  {
    id: 'it',
    label: 'IT',
    chipColor: 'cyan',
    levels: ['bg-[#1A1F26]', 'bg-cyan-950', 'bg-cyan-800', 'bg-cyan-600', 'bg-cyan-400'],
  },
  {
    id: 'ot',
    label: 'OT',
    chipColor: 'amber',
    levels: ['bg-[#1A1F26]', 'bg-amber-950', 'bg-amber-800', 'bg-amber-600', 'bg-amber-400'],
  },
  {
    id: 'ai',
    label: 'AI',
    chipColor: 'purple',
    levels: ['bg-[#1A1F26]', 'bg-purple-950', 'bg-purple-800', 'bg-purple-600', 'bg-purple-400'],
  },
]

// Used when the "All" filter is active — the site's own cyan accent scale
export const ALL_LEVELS: [string, string, string, string, string] = [
  'bg-[#1A1F26]',
  'bg-[#38BDF8]/20',
  'bg-[#38BDF8]/40',
  'bg-[#38BDF8]/65',
  'bg-[#38BDF8]',
]

// Placeholder seed data — content not yet valid, per AGENTS.md. Spread across
// the last ~12 months, weighted toward OT (PLCs/SCADA/Networking/Instrumentation)
// to match the site owner's actual learning track.
//
// FUTURE: 'code' artifacts are manually curated for MVP rather than fetched
// live from the GitHub API — unauthenticated rate limits (60/hr) are fragile
// with no backend/caching layer, and commits still need manual category
// classification either way. See plan doc for details.
export const ARTIFACTS: LearningArtifact[] = [
  { id: 'ot-1', date: '2025-08-04', category: 'ot', type: 'notes', tag: 'PLCs', title: 'PLC scan cycle deep dive' },
  { id: 'ot-2', date: '2025-08-04', category: 'ot', type: 'flashcards', tag: 'PLCs', title: 'Ladder logic instruction set review' },
  {
    id: 'it-1',
    date: '2025-08-06',
    category: 'it',
    type: 'lab',
    tag: 'CCNA',
    title: 'VLAN trunking lab',
    summary: 'Configured 802.1Q trunks between two switches in Packet Tracer.',
  },
  {
    id: 'prog-1',
    date: '2025-08-09',
    category: 'programming',
    type: 'code',
    title: 'Portfolio site scaffold',
    url: 'https://github.com/example/portfolio/commit/abc1234',
  },
  { id: 'ot-3', date: '2025-08-12', category: 'ot', type: 'notes', tag: 'SCADA', title: 'My First Ignition Project notes' },
  { id: 'ai-1', date: '2025-08-14', category: 'ai', type: 'notes', title: 'Transformer attention mechanism basics' },
  {
    id: 'ot-4',
    date: '2025-08-18',
    category: 'ot',
    type: 'lab',
    tag: 'Instrumentation',
    title: 'Loop calibration bench exercise',
    summary: '4-20mA loop calibration on a pressure transmitter.',
  },
  { id: 'it-2', date: '2025-08-21', category: 'it', type: 'flashcards', tag: 'CCNA', title: 'Subnetting drill set' },
  { id: 'ot-5', date: '2025-08-25', category: 'ot', type: 'notes', tag: 'Networking', title: 'Modbus RTU vs TCP: what actually differs' },
  {
    id: 'prog-2',
    date: '2025-08-27',
    category: 'programming',
    type: 'code',
    title: 'Add heatmap prototype',
    url: 'https://github.com/example/portfolio/commit/def5678',
  },
  { id: 'ot-6', date: '2025-09-01', category: 'ot', type: 'notes', tag: 'PLCs', title: 'PLC timers: TON, TOF, RTO explained' },
  { id: 'ot-7', date: '2025-09-01', category: 'ot', type: 'flashcards', tag: 'PLCs', title: 'Timer instruction recall set' },
  {
    id: 'ai-2',
    date: '2025-09-05',
    category: 'ai',
    type: 'lab',
    title: 'Fine-tune a small classifier',
    summary: 'Trained a text classifier on a labeled dataset end to end.',
  },
  { id: 'it-3', date: '2025-09-09', category: 'it', type: 'notes', tag: 'Networking', title: 'How EtherNet/IP actually works' },
  { id: 'ot-8', date: '2025-09-12', category: 'ot', type: 'lab', tag: 'SCADA', title: 'Ignition tag historian setup' },
  { id: 'prog-3', date: '2025-09-15', category: 'programming', type: 'notes', title: 'React 19 server actions overview' },
  { id: 'ot-9', date: '2025-09-18', category: 'ot', type: 'notes', tag: 'Instrumentation', title: 'Reading a P&ID for the first time' },
  { id: 'ai-3', date: '2025-09-22', category: 'ai', type: 'flashcards', title: 'ML vocabulary recall set' },
  {
    id: 'ot-10',
    date: '2025-09-26',
    category: 'ot',
    type: 'code',
    tag: 'PLCs',
    title: 'Structured text motor control block',
    url: 'https://github.com/example/plc-lab/commit/ghi9012',
  },
  {
    id: 'it-4',
    date: '2025-09-29',
    category: 'it',
    type: 'lab',
    tag: 'CCNA',
    title: 'OSPF multi-area lab',
    summary: 'Built a 3-router OSPF topology and verified route summarization.',
  },
  { id: 'ot-11', date: '2025-10-03', category: 'ot', type: 'notes', tag: 'SCADA', title: 'Alarm rationalization principles' },
  {
    id: 'prog-4',
    date: '2025-10-06',
    category: 'programming',
    type: 'code',
    title: 'Refactor nav component',
    url: 'https://github.com/example/portfolio/commit/jkl3456',
  },
  { id: 'ot-12', date: '2025-10-06', category: 'ot', type: 'flashcards', tag: 'Instrumentation', title: 'Sensor type recall set' },
  { id: 'ai-4', date: '2025-10-10', category: 'ai', type: 'notes', title: 'Prompt caching and context windows' },
  { id: 'ot-13', date: '2025-10-14', category: 'ot', type: 'lab', tag: 'PLCs', title: 'AOI development for conveyor sequencing' },
  { id: 'it-5', date: '2025-10-17', category: 'it', type: 'notes', tag: 'Networking', title: 'Spanning tree protocol failure modes' },
  { id: 'ot-14', date: '2025-10-21', category: 'ot', type: 'notes', tag: 'SCADA', title: 'HMI navigation design patterns' },
  {
    id: 'ot-15',
    date: '2025-10-21',
    category: 'ot',
    type: 'code',
    tag: 'SCADA',
    title: 'Ignition perspective view component',
    url: 'https://github.com/example/plc-lab/commit/mno7890',
  },
  { id: 'ai-5', date: '2025-10-25', category: 'ai', type: 'lab', title: 'RAG pipeline over local docs' },
  { id: 'prog-5', date: '2025-10-29', category: 'programming', type: 'flashcards', title: 'TypeScript generics recall set' },
  { id: 'ot-16', date: '2025-11-02', category: 'ot', type: 'notes', tag: 'Networking', title: 'Industrial network segmentation basics' },
  { id: 'it-6', date: '2025-11-05', category: 'it', type: 'lab', tag: 'CCNA', title: 'ACL troubleshooting lab' },
  { id: 'ot-17', date: '2025-11-09', category: 'ot', type: 'notes', tag: 'PLCs', title: 'Fault vs alarm handling strategies' },
  { id: 'ot-18', date: '2025-11-12', category: 'ot', type: 'flashcards', tag: 'PLCs', title: 'Data type recall set' },
  { id: 'ai-6', date: '2025-11-16', category: 'ai', type: 'notes', title: 'Evaluation harnesses for LLM apps' },
  {
    id: 'ot-19',
    date: '2025-11-19',
    category: 'ot',
    type: 'lab',
    tag: 'Instrumentation',
    title: 'Differential pressure flow meter sizing',
  },
  {
    id: 'prog-6',
    date: '2025-11-23',
    category: 'programming',
    type: 'code',
    title: 'Add category filter bar',
    url: 'https://github.com/example/portfolio/commit/pqr1234',
  },
  { id: 'ot-20', date: '2025-11-26', category: 'ot', type: 'notes', tag: 'SCADA', title: 'Redundant SCADA architecture notes' },
  { id: 'it-7', date: '2025-11-30', category: 'it', type: 'notes', tag: 'Networking', title: 'VPN tunneling protocols compared' },
  { id: 'ot-21', date: '2025-12-04', category: 'ot', type: 'lab', tag: 'PLCs', title: 'PID loop tuning on a bench process' },
  { id: 'ai-7', date: '2025-12-08', category: 'ai', type: 'flashcards', title: 'Model architecture recall set' },
  { id: 'ot-22', date: '2025-12-11', category: 'ot', type: 'notes', tag: 'Instrumentation', title: 'Thermocouple vs RTD accuracy notes' },
  {
    id: 'ot-23',
    date: '2025-12-11',
    category: 'ot',
    type: 'code',
    tag: 'PLCs',
    title: 'Batch sequencing state machine',
    url: 'https://github.com/example/plc-lab/commit/stu5678',
  },
  { id: 'it-8', date: '2025-12-15', category: 'it', type: 'lab', tag: 'CCNA', title: 'Wireless controller lab' },
  { id: 'prog-7', date: '2025-12-19', category: 'programming', type: 'notes', title: 'useMemo vs useCallback tradeoffs' },
  { id: 'ot-24', date: '2025-01-05', category: 'ot', type: 'notes', tag: 'SCADA', title: 'Historian compression strategies' },
  { id: 'ai-8', date: '2025-01-09', category: 'ai', type: 'notes', title: 'Vector database indexing tradeoffs' },
  { id: 'ot-25', date: '2025-01-13', category: 'ot', type: 'flashcards', tag: 'Networking', title: 'Industrial protocol port recall set' },
  { id: 'it-9', date: '2025-01-17', category: 'it', type: 'notes', tag: 'Networking', title: 'BGP path selection order' },
  { id: 'ot-26', date: '2025-01-21', category: 'ot', type: 'lab', tag: 'PLCs', title: 'Safety relay wiring exercise' },
  {
    id: 'prog-8',
    date: '2025-01-25',
    category: 'programming',
    type: 'code',
    title: 'Day-detail modal component',
    url: 'https://github.com/example/portfolio/commit/vwx9012',
  },
  { id: 'ot-27', date: '2025-01-29', category: 'ot', type: 'notes', tag: 'Instrumentation', title: 'Control valve characteristics' },
  { id: 'ai-9', date: '2025-02-02', category: 'ai', type: 'lab', title: 'Agentic tool-use eval harness' },
  {
    id: 'ot-28',
    date: '2025-02-06',
    category: 'ot',
    type: 'notes',
    tag: 'SCADA',
    title: 'Cybersecurity zones and conduits (ISA/IEC 62443)',
  },
  { id: 'it-10', date: '2025-02-10', category: 'it', type: 'flashcards', tag: 'CCNA', title: 'Routing protocol comparison recall set' },
  {
    id: 'ot-29',
    date: '2025-02-14',
    category: 'ot',
    type: 'code',
    tag: 'PLCs',
    title: 'Recipe management UDT',
    url: 'https://github.com/example/plc-lab/commit/yza3456',
  },
  { id: 'prog-9', date: '2025-02-18', category: 'programming', type: 'notes', title: 'React Router 7 data loading patterns' },
  { id: 'ot-30', date: '2025-02-22', category: 'ot', type: 'lab', tag: 'Networking', title: 'Managed switch VLAN segmentation for a cell' },
  { id: 'ai-10', date: '2025-02-26', category: 'ai', type: 'notes', title: 'Context window management strategies' },
  { id: 'ot-31', date: '2025-03-02', category: 'ot', type: 'notes', tag: 'PLCs', title: 'Interlocking logic design patterns' },
  { id: 'it-11', date: '2025-03-06', category: 'it', type: 'lab', tag: 'CCNA', title: 'NAT/PAT configuration lab' },
  { id: 'ot-32', date: '2025-03-10', category: 'ot', type: 'flashcards', tag: 'SCADA', title: 'Ignition scripting recall set' },
  {
    id: 'prog-10',
    date: '2025-03-14',
    category: 'programming',
    type: 'code',
    title: 'Category-aware heatmap intensity',
    url: 'https://github.com/example/portfolio/commit/bcd7890',
  },
  {
    id: 'ot-33',
    date: '2025-03-18',
    category: 'ot',
    type: 'notes',
    tag: 'Instrumentation',
    title: 'Level measurement technology comparison',
  },
  { id: 'ai-11', date: '2025-03-22', category: 'ai', type: 'flashcards', title: 'Embedding model recall set' },
  { id: 'ot-34', date: '2025-03-26', category: 'ot', type: 'lab', tag: 'PLCs', title: 'Motor starter and VFD control panel build' },
  { id: 'it-12', date: '2025-03-30', category: 'it', type: 'notes', tag: 'Networking', title: 'STP root bridge election notes' },
  { id: 'ot-35', date: '2025-04-03', category: 'ot', type: 'notes', tag: 'SCADA', title: 'MQTT/Sparkplug B for industrial IoT' },
  {
    id: 'ot-36',
    date: '2025-04-03',
    category: 'ot',
    type: 'code',
    tag: 'SCADA',
    title: 'Sparkplug B tag publisher script',
    url: 'https://github.com/example/plc-lab/commit/efg1234',
  },
  { id: 'ai-12', date: '2025-04-07', category: 'ai', type: 'lab', title: 'Local LLM inference benchmark' },
  { id: 'ot-37', date: '2025-04-11', category: 'ot', type: 'notes', tag: 'PLCs', title: 'Sequential function chart fundamentals' },
  { id: 'it-13', date: '2025-04-15', category: 'it', type: 'lab', tag: 'CCNA', title: 'EtherChannel and link aggregation lab' },
  {
    id: 'ot-38',
    date: '2025-04-19',
    category: 'ot',
    type: 'flashcards',
    tag: 'Instrumentation',
    title: 'Calibration terminology recall set',
  },
  { id: 'prog-11', date: '2025-04-23', category: 'programming', type: 'notes', title: 'Portal-based modal patterns in React' },
  { id: 'ot-39', date: '2025-04-27', category: 'ot', type: 'notes', tag: 'Networking', title: 'Ring topology and RSTP in plant networks' },
  { id: 'ai-13', date: '2025-05-01', category: 'ai', type: 'notes', title: 'Structured output and schema validation' },
  { id: 'ot-40', date: '2025-05-05', category: 'ot', type: 'lab', tag: 'PLCs', title: 'Palletizer sequencing simulation' },
  { id: 'it-14', date: '2025-05-09', category: 'it', type: 'notes', tag: 'Networking', title: 'DHCP relay across VLANs' },
  { id: 'ot-41', date: '2025-05-13', category: 'ot', type: 'notes', tag: 'SCADA', title: 'Alarm shelving and suppression rules' },
  { id: 'ot-42', date: '2025-05-13', category: 'ot', type: 'flashcards', tag: 'SCADA', title: 'Alarm state recall set' },
  {
    id: 'prog-12',
    date: '2025-05-17',
    category: 'programming',
    type: 'code',
    title: 'Learning Lab data model',
    url: 'https://github.com/example/portfolio/commit/hij5678',
  },
  { id: 'ot-43', date: '2025-05-21', category: 'ot', type: 'notes', tag: 'Instrumentation', title: 'Smart transmitter HART communication' },
  { id: 'ai-14', date: '2025-05-25', category: 'ai', type: 'lab', title: 'Multi-agent workflow orchestration test' },
  {
    id: 'ot-44',
    date: '2025-05-29',
    category: 'ot',
    type: 'code',
    tag: 'PLCs',
    title: 'Changeover recipe download routine',
    url: 'https://github.com/example/plc-lab/commit/klm9012',
  },
  { id: 'it-15', date: '2025-06-02', category: 'it', type: 'flashcards', tag: 'CCNA', title: 'Layer 2 vs Layer 3 recall set' },
  { id: 'ot-45', date: '2025-06-06', category: 'ot', type: 'notes', tag: 'Networking', title: 'Deep packet inspection for OT firewalls' },
  { id: 'ot-46', date: '2025-06-10', category: 'ot', type: 'lab', tag: 'SCADA', title: 'Ignition perspective alarm pipeline build' },
  { id: 'prog-13', date: '2025-06-14', category: 'programming', type: 'notes', title: 'Vite build config deep dive' },
  { id: 'ot-47', date: '2025-06-18', category: 'ot', type: 'notes', tag: 'PLCs', title: 'Redundant PLC hot-standby architectures' },
  { id: 'ai-15', date: '2025-06-22', category: 'ai', type: 'notes', title: 'Tool-calling reliability patterns' },
  {
    id: 'ot-48',
    date: '2025-06-26',
    category: 'ot',
    type: 'flashcards',
    tag: 'Instrumentation',
    title: 'Instrument loop diagram symbol recall set',
  },
  { id: 'it-16', date: '2025-06-30', category: 'it', type: 'lab', tag: 'CCNA', title: 'IPv6 addressing and SLAAC lab' },
  { id: 'ot-49', date: '2025-07-04', category: 'ot', type: 'notes', tag: 'SCADA', title: 'Historian-to-cloud data pipeline notes' },
  {
    id: 'ot-50',
    date: '2025-07-08',
    category: 'ot',
    type: 'code',
    tag: 'PLCs',
    title: 'Downtime tracking UDT and faceplate',
    url: 'https://github.com/example/plc-lab/commit/nop3456',
  },
  { id: 'ai-16', date: '2025-07-12', category: 'ai', type: 'lab', title: 'Guardrails for user-facing chat agent' },
  { id: 'ot-51', date: '2025-07-16', category: 'ot', type: 'notes', tag: 'Networking', title: 'Time synchronization (PTP) in OT networks' },
  {
    id: 'prog-14',
    date: '2025-07-20',
    category: 'programming',
    type: 'code',
    title: 'Wire up /lab route',
    url: 'https://github.com/example/portfolio/commit/qrs7890',
  },
  {
    id: 'ot-52',
    date: '2025-07-24',
    category: 'ot',
    type: 'notes',
    tag: 'Instrumentation',
    title: 'Pressure transmitter range and turndown',
  },
  { id: 'it-17', date: '2025-07-28', category: 'it', type: 'flashcards', tag: 'Networking', title: 'Subnet mask cheat sheet recall set' },
  {
    id: 'ot-53',
    date: '2025-08-01',
    category: 'ot',
    type: 'lab',
    tag: 'PLCs',
    title: 'End-to-end line simulation walkthrough',
    summary: 'Wired a full simulated line: sensors, PLC, HMI, and historian tags.',
  },
]

// Years with tracked learning data, derived from ARTIFACTS so it updates automatically, newest first.
export const LAB_YEARS: number[] = [...new Set(ARTIFACTS.map((a) => Number(a.date.slice(0, 4))))].sort((a, b) => b - a)
