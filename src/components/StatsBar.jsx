import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Stethoscope, GraduationCap, Users, BookOpen, UserCheck, Trophy } from 'lucide-react'

const stats = [
  { end: 100,  suffix: '+', label: 'Doctors Produced', Icon: Stethoscope },
  { end: 600,  suffix: '+', label: 'Alumni', Icon: GraduationCap },
  { end: 6000, suffix: '+', label: 'Happy Parents', Icon: Users },
  { end: 60,   suffix: '+', label: 'Subject Experts', Icon: BookOpen },
  { end: 70,   suffix: '+', label: 'Well Trained Staff', Icon: UserCheck },
  { end: 250,  suffix: '+', label: 'State & National Achievers', Icon: Trophy },
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
    <section className="relative bg-teal-800 py-10 font-sans shadow-inner">
      {/* Subtle texture overlay so it's not a flat solid color, but organic */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4">
          {stats.map((s, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-2xl md:text-3xl font-black text-amber-400 mb-1 drop-shadow-md">
                <Counter end={s.end} suffix={s.suffix} />
              </h3>
              <p className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest leading-snug">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
