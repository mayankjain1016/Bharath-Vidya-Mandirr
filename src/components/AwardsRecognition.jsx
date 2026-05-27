import { motion } from 'framer-motion'
import './AwardsRecognition.css'

import award1 from '../assets/Awards/014989c1-64cf-49cf-bed2-6a1bb29c5206.jfif'
import award2 from '../assets/Awards/acd335da-9c9f-42e3-b6c7-feb1b98c1986.jfif'
import award3 from '../assets/Awards/cd975466-5b29-4b34-83b1-9dab46e56f01.jfif'
import award4 from '../assets/Awards/ebf1c553-2164-48c8-a6ac-3cab6e35edf0.jfif'
import award5 from '../assets/Awards/ef7ca3b5-436d-4b40-a836-de03549bad24.jfif'
import award6 from '../assets/Awards/f3f0febc-3a34-4888-b6b3-9062d9f5ae77.jfif'

const awards = [
  { title: 'Vikatan Educational Legacy Award', image: award1, desc: 'Recognised for outstanding contribution to education and maintaining high academic standards.' },
  { title: 'Best Environment School Award', image: award2, desc: 'Awarded for exceptional eco-friendly initiatives and environmental consciousness in campus management.' },
  { title: 'Best Go Green School Award', image: award3, desc: 'Honoured for promoting sustainability and green practices among students and staff.' },
  { title: 'Dinamalar Best CBSE School in Tenkasi', image: award4, desc: 'Recognised as the top CBSE school in Tenkasi district for academic excellence and overall development.' },
  { title: 'State Award for Essay Writing', image: award5, desc: 'State-level recognition for excellence in literary skills and creative writing competitions.' },
  { title: 'Academic Excellence Award', image: award6, desc: 'Celebrated for consistent outstanding performance in board examinations and competitive exams.' },
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
              <div className="award-image">
                <img src={a.image} alt={a.title} />
              </div>
              <h3 className="award-title">{a.title}</h3>
              <p className="award-desc">{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
