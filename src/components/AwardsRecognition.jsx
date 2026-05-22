import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import './AwardsRecognition.css'

const awards = [
  { title: 'Best School — Tenkasi District',    year: '2023', desc: 'Recognised for outstanding academic performance and holistic student development.' },
  { title: 'Excellence in Sports',              year: '2022', desc: 'State-level champions in athletics, kabaddi, and chess tournaments.' },
  { title: 'Green School Award',                year: '2023', desc: 'Awarded for eco-friendly campus initiatives and environmental education.' },
  { title: 'Innovation in Education',           year: '2023', desc: 'Honoured for integrating smart technology and modern pedagogy in classrooms.' },
  { title: 'Community Service Recognition',     year: '2022', desc: 'Acknowledged for impactful outreach programmes benefiting the Tenkasi community.' },
  { title: 'Academic Excellence — CBSE Region', year: '2024', desc: 'Top-performing school in the CBSE Southern Region for board examination results.' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function AwardsRecognition() {
  return (
    <section className="awards">
      <div className="container">
        <motion.div
          className="awards-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Accolades</span>
          <h2>Awards &amp; Recognition</h2>
          <p className="awards-sub">
            Consistently recognised for excellence in academics, sports, and holistic education
            by leading educational bodies across Tamil Nadu.
          </p>
        </motion.div>

        <motion.div
          className="awards-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {awards.map((a, i) => (
            <motion.div key={i} className="award-card" variants={item} whileHover={{ scale: 1.03 }}>
              <div className="award-icon">
                <Trophy size={32} color="var(--gold)" strokeWidth={1.5} />
              </div>
              <h3 className="award-title">{a.title}</h3>
              <span className="award-year">{a.year}</span>
              <p className="award-desc">{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
