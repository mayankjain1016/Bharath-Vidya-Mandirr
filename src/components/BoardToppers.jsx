import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ChevronLeft, ChevronRight } from 'lucide-react'
import './BoardToppers.css'

// Import topper images
import topper10th_1 from '../assets/BoardTopper/Topper10th_1.jpeg'
import topper10th_2 from '../assets/BoardTopper/Topper10th_2.jpeg'
import topper10th_3 from '../assets/BoardTopper/Topper10th_3.jpeg'
import topper12th_1 from '../assets/BoardTopper/Topper12th_1.jpeg'
import topper12th_2 from '../assets/BoardTopper/Topper12th_2.jpeg'
import topper12th_3 from '../assets/BoardTopper/Topper12th_3.jpeg'

const toppers = [
  { id: 1, image: topper10th_1, name: 'Aravind Kumar', percentage: '98.5%', class: 'Class 10' },
  { id: 2, image: topper10th_2, name: 'Priya Sharma', percentage: '97.8%', class: 'Class 10' },
  { id: 3, image: topper10th_3, name: 'Rahul Menon', percentage: '96.2%', class: 'Class 10' },
  { id: 4, image: topper12th_1, name: 'Divya Krishnan', percentage: '99.2%', class: 'Class 12' },
  { id: 5, image: topper12th_2, name: 'Karthik Raj', percentage: '98.6%', class: 'Class 12' },
  { id: 6, image: topper12th_3, name: 'Sneha Reddy', percentage: '97.4%', class: 'Class 12' },
]

export default function BoardToppers() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= toppers.length ? 0 : prev + itemsPerView
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, toppers.length - itemsPerView) : Math.max(0, prev - itemsPerView)
    )
  }

  const visibleToppers = toppers.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <section className="board-toppers">
      <div className="container">
        <motion.div
          className="toppers-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <Award size={14} style={{ display: 'inline', marginRight: 6 }} />
            Academic Excellence
          </span>
          <h2>Board Exam Toppers</h2>
        </motion.div>

        <div className="toppers-carousel">
          <button 
            className="carousel-nav carousel-nav-prev" 
            onClick={prevSlide}
            aria-label="Previous toppers"
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="toppers-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="toppers-track"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                {visibleToppers.map((topper) => (
                  <div key={topper.id} className="topper-card glow-target">
                    <div className="topper-image-wrapper">
                      <img src={topper.image} alt={topper.name} className="topper-image" />
                      <div className="topper-badge">
                        <Award size={16} />
                        <span>{topper.class}</span>
                      </div>
                    </div>
                    <div className="topper-info">
                      <h3 className="topper-name">{topper.name}</h3>
                      <p className="topper-percentage">{topper.percentage}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            className="carousel-nav carousel-nav-next" 
            onClick={nextSlide}
            aria-label="Next toppers"
            disabled={currentIndex + itemsPerView >= toppers.length}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="carousel-dots">
          {Array.from({ length: Math.ceil(toppers.length / itemsPerView) }).map((_, i) => (
            <button
              key={i}
              className={`dot${i === Math.floor(currentIndex / itemsPerView) ? ' dot--active' : ''}`}
              onClick={() => setCurrentIndex(i * itemsPerView)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
