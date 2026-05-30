import { motion } from 'framer-motion'
import { Medal, Sparkles } from 'lucide-react'
import './AwardsRecognition.css'

// Import your award images
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

// Silky smooth stagger animations
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function AwardsRecognition() {
  // Advanced feature: Maps mouse coordinates to CSS variables for hover glow effects
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="ar-section">
      {/* Decorative ambient background */}
      <div className="ar-ambient-glow"></div>

      <div className="ar-container">

        {/* ── HEADER ── */}
        <motion.div
          className="ar-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2>Awards & Recognition</h2>
          <p className="ar-sub">
            Consistently recognised for excellence in academics, sports, and holistic education by leading educational bodies across Tamil Nadu.
          </p>
        </motion.div>

        {/* ── AWARDS GRID ── */}
        <motion.div
          className="ar-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {awards.map((award, i) => (
            <motion.div
              key={i}
              className="ar-card ar-glow-effect"
              variants={itemVariants}
              onMouseMove={handleMouseMove}
            >
              {/* Image Area */}
              <div className="ar-image-wrapper">
                <img src={award.image} alt={award.title} className="ar-image" loading="lazy" />
                <div className="ar-image-overlay"></div>

                {/* Floating Glassmorphism Badge */}
                <div className="ar-badge">
                  <Medal size={20} strokeWidth={2} />
                </div>
              </div>

              {/* Text Content */}
              <div className="ar-content">
                <h3 className="ar-title">{award.title}</h3>
                <p className="ar-desc">{award.desc}</p>

                {/* Subtle decorative line */}
                <div className="ar-card-line"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}