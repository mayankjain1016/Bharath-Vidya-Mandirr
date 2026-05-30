import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Bharath Vidya Mandir transformed my daughter\'s academic journey. The personalised attention from faculty and the structured revision sessions made all the difference. Her confidence has grown tremendously.',
    name: 'Meera Shankar',
    child: 'Parent of Class X Student',
    initial: 'M'
  },
  {
    quote: 'The integrated NEET coaching is exceptional. The seamless collaboration with Seekers Institute prepared my son brilliantly — he cleared NEET 2024 with a fantastic score. We are forever grateful.',
    name: 'Rajesh Kumar',
    child: 'Parent of Class XII Student',
    initial: 'R'
  },
  {
    quote: 'What impressed me most is the holistic approach. Beyond academics, the school nurtures character and life skills. My son has grown into a responsible, empathetic young adult ready for the world.',
    name: 'Priya Venkatesh',
    child: 'Parent of Class IX Student',
    initial: 'P'
  },
  {
    quote: 'The school\'s emphasis on sports and extracurricular activities is truly commendable. My daughter won a state-level science competition and also excels in athletics — a perfect balance of mind and body.',
    name: 'Suresh Balakrishnan',
    child: 'Parent of Class VIII Student',
    initial: 'S'
  },
  {
    quote: 'As a working parent, the safe and nurturing environment at BVM gives me complete peace of mind. The teachers genuinely care about each child\'s well-being and go above and beyond their duties.',
    name: 'Kavitha Rajan',
    child: 'Parent of Class VI Student',
    initial: 'K'
  },
  {
    quote: 'The Bharath Bhojanastav programme is wonderful — knowing my children get nutritious meals at school is a huge relief. The infrastructure and smart classrooms have also made learning so much more engaging.',
    name: 'Anand Murthy',
    child: 'Parent of Class VII Student',
    initial: 'A'
  },
]

const Stars = () => (
  <div className="flex gap-1 mb-3">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={16} fill="#FABB05" color="#FABB05" />
    ))}
  </div>
)

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1)
      else if (window.innerWidth < 1024) setItemsPerView(2)
      else setItemsPerView(3)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= testimonials.length ? 0 : prev + itemsPerView
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - itemsPerView) : Math.max(0, prev - itemsPerView)
    )
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView)
  const totalPages = Math.ceil(testimonials.length / itemsPerView)
  const currentPage = Math.floor(currentIndex / itemsPerView)

  // Avatar colors for that authentic Google vibe
  const colors = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500']

  return (
    <section className="py-12 lg:py-16 bg-slate-50 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Testimonials
            </h2>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-3">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 bg-white hover:bg-slate-50 hover:border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 bg-white hover:bg-slate-50 hover:border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* ── Carousel Track ── */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {visibleTestimonials.map((t, i) => (
                <div 
                  key={currentIndex + i} 
                  className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-[0_2px_15px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-col h-full"
                >
                  {/* Google-style Profile Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold ${colors[(currentIndex + i) % colors.length]}`}>
                      {t.initial}
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-bold text-base leading-tight">{t.name}</h3>
                      <p className="text-slate-500 text-xs mt-0.5">{t.child}</p>
                    </div>
                  </div>

                  {/* Stars & Review */}
                  <Stars />
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed flex-grow">
                    "{t.quote}"
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Mobile Controls ── */}
        <div className="flex items-center justify-between md:hidden mt-8">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 bg-white"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * itemsPerView)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentPage ? 'bg-teal-600' : 'bg-slate-300'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 bg-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  )
}
