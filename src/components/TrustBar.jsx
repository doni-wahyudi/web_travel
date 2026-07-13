import { useCountUp } from '../hooks/useReveal.js'
import './TrustBar.css'

const STATS = [
  { value: 5.0, suffix: '', label: 'Rating Google', icon: '★', isDecimal: true },
  { value: 500, suffix: '+', label: 'Jamaah Berangkat', icon: '👥' },
  { value: 10, suffix: ' Th', label: 'Pengalaman', icon: '🏆' },
  { value: 100, suffix: '%', label: 'Transparan', icon: '✓' },
]

function StatItem({ value, suffix, label, icon, isDecimal }) {
  const [ref, count] = useCountUp(isDecimal ? 50 : value, 2000)

  return (
    <div className="trust-stat" ref={ref}>
      <span className="trust-stat__icon">{icon}</span>
      <div>
        <span className="trust-stat__value">
          {isDecimal ? (count / 10).toFixed(1) : count}{suffix}
        </span>
        <span className="trust-stat__label">{label}</span>
      </div>
    </div>
  )
}

export default function TrustBar() {
  return (
    <div className="trust-strip">
      <div className="container trust-strip__inner">
        {STATS.map((stat, i) => (
          <StatItem key={i} {...stat} />
        ))}
      </div>
    </div>
  )
}
