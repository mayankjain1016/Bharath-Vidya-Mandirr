import { motion } from 'framer-motion'
import { useState } from 'react'
import { BookOpen, GraduationCap, Heart, Monitor, Users, Utensils } from 'lucide-react'
import './WhyChooseUs.css'

const cards = [
  {
    Icon: BookOpen,
    title: 'Qualified & Experienced Faculty',
    desc: 'Our educators bring decades of combined expertise with ongoing professional development, ensuring every student receives world-class instruction.',
  },
  {
    Icon: GraduationCap,
    title: 'Strong Academic Support',
    desc: 'Comprehensive remedial classes, structured revision sessions, and personalised practice to ensure every student masters the curriculum.',
  },
  {
    Icon: Heart,
    title: 'Holistic Development Focus',
    desc: 'Beyond academics, we nurture character, leadership, creativity, and emotional intelligence through diverse co-curricular programmes.',
  },
  {
    Icon: Monitor,
    title: 'Digital Classrooms & Smart Boards',
    desc: 'State-of-the-art smart classrooms with interactive digital boards and multimedia content for immersive 21st-century learning.',
  },
  {
    Icon: Users,
    title: 'Strong Parent-School Communication',
    desc: 'Regular parent meetings, transparent progress updates, and collaborative partnerships to support each child\'s growth journey.',
  },
  {
    Icon: Utensils,
    title: 'Bharath Bhojanastav',
    desc: 'Nutritious mid-noon meals prepared hygienically with balanced nutrition, ensuring students are energised and ready to learn.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function WhyChooseUs() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="wcu">
      <div className="container">
        <motion.div
          className="wcu-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Our Strengths</span>
          <h2>Why Choose Bharath Vidya Mandir?</h2>
          <p className="wcu-sub">
            A school that goes beyond textbooks — building confident, compassionate, and capable individuals
            ready to thrive in a rapidly changing world.
          </p>
        </motion.div>

        <motion.div
          className="wcu-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {cards.map(({ Icon, title, desc }, i) => (
            <motion.div 
              key={i} 
              className="wcu-card glow-target" 
              variants={item}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="wcu-icon">
                <Icon 
                  size={28} 
                  color={hoveredCard === i ? 'var(--white)' : 'var(--teal)'} 
                  strokeWidth={1.8} 
                />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
