import { motion } from 'framer-motion'
import { ArrowRight, FlaskConical, Atom, Dna, Calculator, Award } from 'lucide-react'
import './IntegratedCoaching.css'

const subjects = [
  { Icon: FlaskConical, label: 'Chemistry' },
  { Icon: Atom,         label: 'Physics' },
  { Icon: Dna,          label: 'Biology' },
  { Icon: Calculator,   label: 'Mathematics' },
]

export default function IntegratedCoaching() {
  return (
    <section className="coaching">
      <div className="container coaching-inner">

        {/* ── Left: Text ── */}
        <motion.div
          className="coaching-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">In Partnership with Seekers Institute, Trichy</span>
          <h2 className="coaching-heading">Integrated NEET &amp; JEE Coaching</h2>
          <p className="coaching-desc">
            Our integrated coaching programme is a one-stop solution that eliminates the need for
            external coaching centres. Students gain more time for non-academic pursuits, reduce
            travel stress, and benefit from a seamlessly coordinated curriculum — all under one roof.
          </p>

          <div className="coaching-stages">
            <div className="stage-card glow-target">
              <div className="stage-badge">Stage I</div>
              <div>
                <h4>Extended Learning — Classes VI to X</h4>
                <p>Building strong conceptual foundations in Science and Mathematics with subject experts, ensuring students are well-prepared for competitive exam thinking from an early age.</p>
              </div>
            </div>
            <div className="stage-card glow-target">
              <div className="stage-badge stage-badge--gold">Stage II</div>
              <div>
                <h4>Entrance Exam Prep — Classes XI &amp; XII</h4>
                <p>Intensive NEET, JEE &amp; CUET preparation with advanced problem-solving, regular mock tests, performance analytics, and personalised mentoring.</p>
              </div>
            </div>
          </div>

          <a href="#contact" className="btn btn-teal coaching-cta">
            Know More About Coaching <ArrowRight size={17} />
          </a>
        </motion.div>

        {/* ── Right: Visual ── */}
        <motion.div
          className="coaching-visual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="coaching-card glow-target">
            <p className="coaching-card-label">Curriculum Breakdown</p>
            <div className="subject-grid">
              {subjects.map(({ Icon, label }) => (
                <div key={label} className="subject-chip">
                  <Icon size={20} color="var(--gold)" strokeWidth={1.8} />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="timeline">
              <div className="tl-stage tl-stage--navy">
                <span className="tl-classes">Class 6 → 10</span>
                <span className="tl-name">Stage I · Foundation</span>
              </div>
              <div className="tl-arrow">→</div>
              <div className="tl-stage tl-stage--gold">
                <span className="tl-classes">Class 11 → 12</span>
                <span className="tl-name">Stage II · Entrance Prep</span>
              </div>
            </div>

            <div className="coaching-badge">
              <Award size={16} style={{ display: 'inline', marginRight: 6 }} />
              4 Years of Stellar Results
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
