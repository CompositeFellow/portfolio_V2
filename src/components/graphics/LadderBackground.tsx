import { type ReactElement } from 'react'

export function LadderBackground() {
  const railX1 = 110, railX2 = 1090
  const railColor = '#38BDF8'
  const sw = 1.3
  const ys = [85, 185, 285, 385, 485, 585, 685, 785, 860]

  type Rung = {
    y: number
    elements: Array<{ type: 'no' | 'nc' | 'coil' | 'timer'; x: number; coilColor?: string; label: string }>
    dotColor: string
    dur: number
    begin: number
  }

  const rungs: Rung[] = [
    {
      y: 85,
      elements: [
        { type: 'no', x: 210, label: 'START_PB' },
        { type: 'no', x: 380, label: 'ESTOP' },
        { type: 'coil', x: 940, coilColor: '#F59E0B', label: 'MOTOR_RUN' },
      ],
      dotColor: '#38BDF8', dur: 3.5, begin: 0,
    },
    {
      y: 185,
      elements: [
        { type: 'nc', x: 210, label: 'MOTOR_RUN' },
        { type: 'no', x: 400, label: 'OVLD_TRIP' },
        { type: 'coil', x: 940, coilColor: '#38BDF8', label: 'ALARM_OUT' },
      ],
      dotColor: '#F59E0B', dur: 4.2, begin: 1.1,
    },
    {
      y: 285,
      elements: [
        { type: 'no', x: 210, label: 'SENSOR_A' },
        { type: 'no', x: 390, label: 'SENSOR_B' },
        { type: 'no', x: 570, label: 'LIMIT_SW' },
        { type: 'coil', x: 940, coilColor: '#38BDF8', label: 'CONVEYOR' },
      ],
      dotColor: '#22C55E', dur: 3.1, begin: 0.5,
    },
    {
      y: 385,
      elements: [
        { type: 'no', x: 210, label: 'START_BTN' },
        { type: 'timer', x: 790, label: 'TON T#10s' },
        { type: 'coil', x: 940, coilColor: '#F59E0B', label: '' },
      ],
      dotColor: '#F59E0B', dur: 5, begin: 2,
    },
    {
      y: 485,
      elements: [
        { type: 'no', x: 210, label: 'TIMER_1.Q' },
        { type: 'coil', x: 940, coilColor: '#22C55E', label: 'VALVE_OPEN' },
      ],
      dotColor: '#22C55E', dur: 3.8, begin: 0.3,
    },
    {
      y: 585,
      elements: [
        { type: 'nc', x: 210, label: 'PRESS_HI' },
        { type: 'no', x: 400, label: 'FLOW_OK' },
        { type: 'coil', x: 940, coilColor: '#EF4444', label: 'SHUTDOWN' },
      ],
      dotColor: '#EF4444', dur: 2.9, begin: 1.8,
    },
    {
      y: 685,
      elements: [
        { type: 'no', x: 210, label: 'AUTO_MODE' },
        { type: 'no', x: 400, label: 'CYCLE_RUN' },
        { type: 'coil', x: 940, coilColor: '#38BDF8', label: 'PUMP_START' },
      ],
      dotColor: '#38BDF8', dur: 4.5, begin: 0.7,
    },
    {
      y: 785,
      elements: [
        { type: 'no', x: 210, label: 'HMI_ACK' },
        { type: 'coil', x: 940, coilColor: '#38BDF8', label: 'ALARM_RST' },
      ],
      dotColor: '#38BDF8', dur: 3.3, begin: 1.4,
    },
  ]

  function drawContact(x: number, y: number, nc: boolean) {
    const h = 20
    return (
      <g key={`c-${x}-${y}`}>
        <line x1={x - 10} y1={y - h} x2={x - 10} y2={y + h} stroke={railColor} strokeWidth={1.9} />
        <line x1={x + 10} y1={y - h} x2={x + 10} y2={y + h} stroke={railColor} strokeWidth={1.9} />
        {nc && <line x1={x - 8} y1={y - h} x2={x + 6} y2={y + h * 0.6} stroke={railColor} strokeWidth={1.4} />}
      </g>
    )
  }

  function drawCoil(cx: number, y: number, color: string) {
    return (
      <g key={`coil-${cx}-${y}`}>
        <circle cx={cx} cy={y} r={20} fill="none" stroke={color} strokeWidth={1.9} />
      </g>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.065) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.065) 1px, transparent 1px),
            linear-gradient(rgba(56,189,248,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.022) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px, 120px 120px, 24px 24px, 24px 24px',
        }}
      />

      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 900"
        style={{ opacity: 0.23 }}
      >
        <defs>
          <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="scanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
            <stop offset="15%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="85%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Power rails */}
        <line x1={railX1} y1={10} x2={railX1} y2={890} stroke={railColor} strokeWidth={2.5} />
        <line x1={railX2} y1={10} x2={railX2} y2={890} stroke={railColor} strokeWidth={2.5} />
        <line x1={railX1 - 16} y1={10} x2={railX1 + 16} y2={10} stroke={railColor} strokeWidth={2} />
        <line x1={railX2 - 16} y1={10} x2={railX2 + 16} y2={10} stroke={railColor} strokeWidth={2} />
        <line x1={railX1 - 16} y1={890} x2={railX1 + 16} y2={890} stroke={railColor} strokeWidth={2} />
        <line x1={railX2 - 16} y1={890} x2={railX2 + 16} y2={890} stroke={railColor} strokeWidth={2} />
        <text x={railX1} y={6} textAnchor="middle" fill={railColor} fontSize="9" fontFamily="JetBrains Mono" dy="-2">L1</text>
        <text x={railX2} y={6} textAnchor="middle" fill={railColor} fontSize="9" fontFamily="JetBrains Mono" dy="-2">L2</text>

        {/* Rung numbers */}
        {ys.map((y, i) => (
          <text key={i} x={60} y={y + 4} textAnchor="middle" fill={railColor} fontSize="9" fontFamily="JetBrains Mono" opacity="0.45">
            {String(i + 1).padStart(4, '0')}
          </text>
        ))}

        {/* END rung */}
        <line x1={railX1} y1={860} x2={railX2} y2={860} stroke={railColor} strokeWidth={1.1} opacity="0.35" />
        <text x={600} y={864} textAnchor="middle" fill={railColor} fontSize="8" fontFamily="JetBrains Mono" opacity="0.25">END</text>

        {/* Render rungs */}
        {rungs.map((rung) => {
          const { y, elements, dotColor, dur, begin } = rung
          const contacts = elements.filter(e => e.type === 'no' || e.type === 'nc')
          const coilEl = elements.find(e => e.type === 'coil')
          const timerEl = elements.find(e => e.type === 'timer')

          let prevX = railX1
          const wires: ReactElement[] = []
          const symbols: ReactElement[] = []
          const labels: ReactElement[] = []

          for (const el of contacts) {
            wires.push(<line key={`w-${el.x}-${y}-a`} x1={prevX} y1={y} x2={el.x - 10} y2={y} stroke={railColor} strokeWidth={sw} />)
            symbols.push(drawContact(el.x, y, el.type === 'nc'))
            labels.push(<text key={`lbl-${el.x}-${y}`} x={el.x} y={y - 24} textAnchor="middle" fill={railColor} fontSize="8" fontFamily="JetBrains Mono" opacity="0.5">{el.label}</text>)
            prevX = el.x + 10
          }

          if (timerEl) {
            wires.push(<line key={`w-timer-a-${y}`} x1={prevX} y1={y} x2={timerEl.x - 115} y2={y} stroke={railColor} strokeWidth={sw} />)
            symbols.push(
              <g key={`timer-${y}`}>
                <rect x={timerEl.x - 115} y={y - 28} width={230} height={56} fill="none" stroke="#F59E0B" strokeWidth={1.5} rx="1" />
                <text x={timerEl.x} y={y - 8} textAnchor="middle" fill="#F59E0B" fontSize="12" fontFamily="JetBrains Mono" fontWeight="600">TON</text>
                <text x={timerEl.x} y={y + 10} textAnchor="middle" fill="#F59E0B" fontSize="8" fontFamily="JetBrains Mono">PT := T#10s</text>
              </g>
            )
            prevX = timerEl.x + 115
          }

          if (coilEl) {
            wires.push(<line key={`w-coil-a-${y}`} x1={prevX} y1={y} x2={coilEl.x - 20} y2={y} stroke={railColor} strokeWidth={sw} />)
            wires.push(<line key={`w-coil-b-${y}`} x1={coilEl.x + 20} y1={y} x2={railX2} y2={y} stroke={railColor} strokeWidth={sw} />)
            symbols.push(drawCoil(coilEl.x, y, coilEl.coilColor ?? railColor))
            if (coilEl.label) labels.push(<text key={`lbl-coil-${y}`} x={coilEl.x} y={y - 26} textAnchor="middle" fill={coilEl.coilColor ?? railColor} fontSize="8" fontFamily="JetBrains Mono" opacity="0.65">{coilEl.label}</text>)
          } else {
            wires.push(<line key={`w-end-${y}`} x1={prevX} y1={y} x2={railX2} y2={y} stroke={railColor} strokeWidth={sw} />)
          }

          const pathD = `M${railX1},${y} H${railX2}`

          return (
            <g key={`rung-${y}`}>
              {wires}
              {symbols}
              {labels}
              <circle r="3.5" fill={dotColor} opacity="0.92" filter="url(#glow)">
                <animateMotion dur={`${dur}s`} repeatCount="indefinite" begin={`${begin}s`} path={pathD} />
              </circle>
            </g>
          )
        })}

        {/* Scan bar */}
        <rect x={railX1} y={0} width={railX2 - railX1} height={2.5} fill="url(#scanGrad)" opacity="0.9">
          <animateTransform attributeName="transform" type="translate" values={`0,0; 0,900`} dur="4s" repeatCount="indefinite" />
        </rect>
      </svg>

      {/* Vignettes */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 75% 65% at 50% 50%, transparent 25%, #111418 88%)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111418] via-transparent to-[#111418]" style={{ opacity: 0.7 }} />
    </div>
  )
}
