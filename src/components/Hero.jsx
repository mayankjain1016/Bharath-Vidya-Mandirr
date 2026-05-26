import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import './Hero.css'

// Import images from Hero_img folder
import img1 from '../assets/Hero_img/02890490-a26e-4e4a-98f5-aa1503d3bb04.jfif'
import img2 from '../assets/Hero_img/547db796-7c2f-44ee-a01c-e99ce0215f8e.jfif'
import img3 from '../assets/Hero_img/69230d24-c1c8-47de-b362-b775c59084fa.jfif'
import img4 from '../assets/Hero_img/71ba738a-7814-4518-8b00-ebe4c11ce8c0.jfif'
import img5 from '../assets/Hero_img/768e614b-c51d-4f95-a26d-c5787018fcdf.jfif'
import img6 from '../assets/Hero_img/a96d7212-b262-4310-b895-36a87a0d6336.jfif'
import img7 from '../assets/Hero_img/f0502d82-92f8-485f-ba16-15f19cfaf921.jfif'

const slides = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
  { id: 7, image: img7 },
]

export default function Hero({ onEnquireClick }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="hero-slider">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="hero-slide"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <div className="hero-slide-bg">
            <img src={slides[currentSlide].image} alt="Bharath Vidya Mandir" />
            <div className="hero-overlay" />
          </div>

          <div className="container hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Shaping Tomorrow's Leaders Today</h1>
              <p className="hero-subtitle">Where academic excellence meets holistic development — preparing students for NEET, JEE & beyond since decades.</p>
              
              <div className="hero-buttons">
                <button onClick={onEnquireClick} className="btn btn-teal">
                  Campus Tour <ArrowRight size={17} />
                </button>
                <a href="#about" className="btn btn-outline-white">Learn More</a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button className="hero-nav hero-nav-prev" onClick={prevSlide} aria-label="Previous slide">
        <ChevronLeft size={28} />
      </button>
      <button className="hero-nav hero-nav-next" onClick={nextSlide} aria-label="Next slide">
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator${index === currentSlide ? ' active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
