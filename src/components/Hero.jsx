import { motion } from 'framer-motion'
import { ArrowRight, MapPin, GraduationCap } from 'lucide-react'
import './Hero.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section className="hero">
      {/* Radial gradient overlay */}
      <div className="hero-bg" />

      <div className="container hero-inner">
        {/* ── Left: Text ── */}
        <div className="hero-text">
          <motion.span className="section-tag hero-tag" {...fadeUp(0.1)}>
            <MapPin size={13} style={{ display: 'inline', marginRight: 4 }} />
            Tenkasi's Premier School
          </motion.span>

          <motion.h1 className="hero-heading" {...fadeUp(0.25)}>
            Shaping Tomorrow's<br />Leaders Today
          </motion.h1>

          <motion.p className="hero-sub" {...fadeUp(0.45)}>
            Where academic excellence meets holistic development — preparing students
            for NEET, JEE &amp; beyond since decades.
          </motion.p>

          <motion.div className="hero-btns" {...fadeUp(0.6)}>
            <a href="#contact" className="btn btn-teal">
              Book a Campus Tour <ArrowRight size={17} />
            </a>
            <a href="#about" className="btn btn-outline-white">Learn More</a>
          </motion.div>

          <motion.p className="hero-partner" {...fadeUp(0.75)}>
            <GraduationCap size={16} style={{ display: 'inline', marginRight: 6 }} />
            Integrated Coaching in partnership with <strong>Seekers Institute, Trichy</strong>
          </motion.p>
        </div>

        {/* ── Right: Image ── */}
        <motion.div
          className="hero-img-wrap"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="https://placehold.co/600x700/1A3A5C/FFFFFF?text=Student+Image"
            alt="Student studying at Bharath Vidya Mandir"
            className="hero-img floating"
          />
          <div className="hero-img-badge">
            <span className="badge-num">4+</span>
            <span className="badge-label">Years of Stellar Results</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
