import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Award, ChevronLeft, ChevronRight } from 'lucide-react'

// Import topper images
import topper10th_1 from '../assets/BoardTopper/Topper10th_1.jfif'
import topper10th_2 from '../assets/BoardTopper/Topper10th_2.jpeg'
import topper10th_3 from '../assets/BoardTopper/Topper10th_3.jfif'
import topper12th_1 from '../assets/BoardTopper/Topper12th_1.jpeg'
import topper12th_2 from '../assets/BoardTopper/Topper12th_2.jpeg'
import topper12th_3 from '../assets/BoardTopper/Topper12th_3.jpeg'

const toppers = [
  { id: 1, image: topper12th_1, name: 'Divya Krishnan', percentage: '99.2%', class: 'Class 12' },
  { id: 2, image: topper12th_2, name: 'Karthik Raj', percentage: '98.6%', class: 'Class 12' },
  { id: 3, image: topper12th_3, name: 'Sneha Reddy', percentage: '97.4%', class: 'Class 12' },
  { id: 4, image: topper10th_1, name: 'Aravind Kumar', percentage: '98.5%', class: 'Class 10' },
  { id: 5, image: topper10th_2, name: 'Priya Sharma', percentage: '97.8%', class: 'Class 10' },
  { id: 6, image: topper10th_3, name: 'Rahul Menon', percentage: '96.2%', class: 'Class 10' },
]

export default function BoardToppers() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef(null)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const scrollLeft = scrollRef.current.scrollLeft
    const cardWidth = scrollRef.current.children[0].offsetWidth + 16 // 16px gap
    const index = Math.round(scrollLeft / cardWidth)
    setActiveIndex(index)
  }

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.children[0].offsetWidth + 16
    scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
  }

  const nextSlide = () => scrollToIndex(Math.min(toppers.length - 1, activeIndex + 1))
  const prevSlide = () => scrollToIndex(Math.max(0, activeIndex - 1))

  return (
    <section className="relative py-12 bg-slate-100 overflow-hidden font-sans">
      
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* ── Header Area ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tighter leading-tight">
              Board Toppers 2026
            </h2>
          </motion.div>

          {/* Top Right Navigation (Desktop only) */}
          <motion.div 
            className="hidden md:flex gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-all hover:bg-teal-600 hover:text-white hover:border-teal-600 hover:scale-110 active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-all hover:bg-teal-600 hover:text-white hover:border-teal-600 hover:scale-110 active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </div>

        {/* ── Carousel Track (Horizontal Scroll) ── */}
        <div className="relative -mx-6 px-6 md:-mx-16 md:px-16 lg:-mx-24 lg:px-24">
          <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 lg:gap-6 pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {toppers.map((topper) => (
              <motion.div 
                key={topper.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="snap-start shrink-0 relative w-[42vw] sm:w-[30vw] md:w-[26vw] lg:w-[280px] aspect-[4/5] rounded-[1.2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(13,148,136,0.15)] hover:-translate-y-2 group"
              >
                
                {/* Image */}
                <img 
                  src={topper.image} 
                  alt={topper.name} 
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Cinematic Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Glassmorphism Class Badge */}
                <div className="absolute top-3 right-3 backdrop-blur-md bg-white/10 border border-white/20 text-white px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xl">
                  <Award size={11} className="text-amber-400" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-yellow-400">{topper.class}</span>
                </div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end">
                  <span className="text-2xl lg:text-3xl font-black text-amber-400 tracking-tighter mb-0.5 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:scale-105 origin-left transition-transform duration-500">
                    {topper.percentage}
                  </span>
                  <h3 className="text-base font-bold text-white mb-0.5">{topper.name}</h3>
                  <p className="text-slate-300 text-[11px] font-medium tracking-wide uppercase hidden sm:block">Board Examination</p>
                  <p className="text-slate-300 text-[10px] font-medium tracking-wide uppercase sm:hidden">Board Exam</p>
                </div>
              </motion.div>
            ))}
            {/* Right padding spacer so the last item isn't cut off */}
            <div className="shrink-0 w-2 md:w-8" />
          </div>
        </div>

        {/* ── Mobile Controls & Dots ── */}
        <div className="flex items-center justify-between md:justify-center mt-2">
          
          {/* Mobile Prev Button */}
          <button onClick={prevSlide} className="md:hidden w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 active:bg-teal-600 active:text-white">
            <ChevronLeft size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2">
            {toppers.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === activeIndex 
                    ? 'w-8 bg-amber-400' 
                    : 'w-2 bg-slate-300 hover:bg-teal-400'
                }`}
              />
            ))}
          </div>

          {/* Mobile Next Button */}
          <button onClick={nextSlide} className="md:hidden w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 active:bg-teal-600 active:text-white">
            <ChevronRight size={20} />
          </button>
          
        </div>

      </div>
    </section>
  )
}
