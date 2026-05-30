import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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

// Smooth, elegant animation for the text entering the screen
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

export default function Hero({ onEnquireClick }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-[85vh] lg:h-[90vh] overflow-hidden bg-slate-950">
      
      {/* Background Images with Cinematic Zoom & Tailwind Gradients */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 z-10 w-full h-full"
          initial={{ opacity: 0, scale: 1.08 }} 
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <img 
            src={slides[currentSlide].image} 
            alt="Campus Highlights" 
            className="w-full h-full object-cover object-center"
          />
          {/* Double-layered gradient for a rich, luxurious vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/20 z-10" />
        </motion.div>
      </AnimatePresence>

      {/* Fixed Content - Staggered entrance animation */}
      <div className="relative z-20 h-full flex items-center px-6 md:px-16 lg:px-24">
        <motion.div 
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2, delayChildren: 0.4 }
            }
          }}
        >
          <motion.h1 
            variants={fadeUpVariants} 
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tighter drop-shadow-2xl mb-6"
          >
            Shaping Tomorrow's Leaders Today
          </motion.h1>
          
          <motion.p 
            variants={fadeUpVariants} 
            className="text-base md:text-xl text-white/85 tracking-wide leading-relaxed drop-shadow-md mb-10 max-w-2xl"
          >
            Where academic excellence meets holistic development — preparing students for NEET, JEE & beyond since decades.
          </motion.p>
          
          <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onEnquireClick} 
              className="group inline-flex items-center justify-center gap-3 bg-teal-600 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(13,148,136,0.4)]"
            >
              Campus Tour 
              <ArrowRight size={18} strokeWidth={2} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <a 
              href="#about" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-white border border-white/40 rounded-sm backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Sleek Slide Indicators (Dynamic Width) */}
      <div className="absolute z-30 bottom-8 left-6 md:left-16 lg:left-24 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 md:h-1 rounded-full transition-all duration-500 ease-in-out ${
              index === currentSlide 
                ? 'w-12 md:w-16 bg-amber-400' 
                : 'w-6 md:w-8 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}