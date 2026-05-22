import { useState, useEffect, useRef } from 'react'
import './StatsBar.css'

const stats = [
  { end: 100,  suffix: '+', label: 'Doctors Produced' },
  { end: 600,  suffix: '+', label: 'Alumni' },
  { end: 6000, suffix: '+', label: 'Happy Parents' },
  { end: 60,   suffix: '+', label: 'Subject Experts' },
  { end: 70,   suffix: '+', label: 'Well Trained Staff' },
]

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let current = 0
          const step = Math.ceil(end / 60)
          const timer = setInterval(() => {
            current += step
            if (current >= end) { setCount(end); clearInterval(timer) }
            else setCount(current)
          }, 25)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="container stats-inner">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <span className="stat-num"><Counter end={s.end} suffix={s.suffix} /></span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
