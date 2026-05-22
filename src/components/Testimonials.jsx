import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    quote: 'Bharath Vidya Mandir transformed my daughter\'s academic journey. The personalised attention from faculty and the structured revision sessions made all the difference. Her confidence has grown tremendously.',
    name: 'Meera Shankar',
    child: 'Parent of Class X Student',
  },
  {
    quote: 'The integrated NEET coaching is exceptional. The seamless collaboration with Seekers Institute prepared my son brilliantly — he cleared NEET 2024 with a fantastic score. We are forever grateful.',
    name: 'Rajesh Kumar',
    child: 'Parent of Class XII Student',
  },
  {
    quote: 'What impressed me most is the holistic approach. Beyond academics, the school nurtures character and life skills. My son has grown into a responsible, empathetic young adult ready for the world.',
    name: 'Priya Venkatesh',
    child: 'Parent of Class IX Student',
  },
]

const Stars = () => (
  <div className="stars" aria-label="5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className="star">★</span>
    ))}
  </div>
)

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive(a => (a + 1) % testimonials.length)

  return (
    <section className="testi">
      <div className="container">
        <motion.div
          className="testi-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Parent Voices</span>
          <h2>What Parents Say About Us</h2>
        </motion.div>

        {/* Desktop: 3 cards */}
        <motion.div
          className="testi-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="testi-card">
              <span className="testi-quote-mark">"</span>
              <Stars />
              <p className="testi-text">{t.quote}</p>
              <div className="testi-footer">
                <p className="testi-name">{t.name}</p>
                <p className="testi-child">{t.child}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile: carousel */}
        <div className="testi-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="testi-card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
            >
              <span className="testi-quote-mark">"</span>
              <Stars />
              <p className="testi-text">{testimonials[active].quote}</p>
              <div className="testi-footer">
                <p className="testi-name">{testimonials[active].name}</p>
                <p className="testi-child">{testimonials[active].child}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prev} aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot${i === active ? ' dot--active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className="carousel-btn" onClick={next} aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
