import { motion } from 'framer-motion'
import { Trophy, Award, Medal, Star, Target, Sparkles } from 'lucide-react'
import './AchievementsBanner.css'

const items = [
  { Icon: Trophy,   title: 'NEET 2024',              sub: '95 Selections' },
  { Icon: Medal,    title: 'JEE 2024',               sub: '42 Qualifiers' },
  { Icon: Award,    title: 'Board Results',          sub: '100% Pass Rate' },
  { Icon: Target,   title: 'State Sports Champions', sub: '2023' },
  { Icon: Star,     title: 'Best School Award',      sub: 'Tenkasi District' },
  { Icon: Sparkles, title: 'Science Olympiad',       sub: 'National Winners' },
  { Icon: Trophy,   title: 'CUET 2024',              sub: '156 Admissions' },
  { Icon: Award,    title: 'Green School Award',     sub: '2023' },
  { Icon: Medal,    title: 'Excellence in Sports',   sub: '2022' },
  { Icon: Star,     title: 'Innovation in Education', sub: '2023' },
]

export default function AchievementsBanner() {
  const handleCardClick = (title) => {
    console.log(`Clicked: ${title}`)
    // Add your click handler logic here
    // For example: navigate to details page, open modal, etc.
  }

  return (
    <motion.div 
      className="ach-banner"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="ach-marquee">
        <div className="ach-track">
          {[...items, ...items].map((item, i) => {
            const IconComponent = item.Icon
            return (
              <div 
                key={i} 
                className="ach-card"
                onClick={() => handleCardClick(item.title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleCardClick(item.title)
                  }
                }}
              >
                <span className="ach-icon">
                  <IconComponent size={24} color="var(--gold)" strokeWidth={2} />
                </span>
                <div>
                  <p className="ach-title">{item.title}</p>
                  <p className="ach-sub">{item.sub}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
