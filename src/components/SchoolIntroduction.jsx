import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Users, Trophy, Target, Quote } from 'lucide-react'
import schoolImage from '../assets/HomePageImg.jpeg'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
}

export default function SchoolIntroduction() {
  return (
    <section className="relative py-16 lg:py-24 bg-white font-sans" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* ── Left: Artistic Image Display ── */}
          <motion.div
            className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg mx-auto lg:mx-0 lg:w-5/12 aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden group shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <img 
              src={schoolImage} 
              alt="Bharath Vidya Mandir Campus" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-slate-900/20 to-transparent transition-opacity duration-700 group-hover:opacity-80" />
            
            {/* Subtle Inner Museum Frame */}
            <div className="absolute inset-4 md:inset-6 border border-white/30 rounded-xl z-20 transition-transform duration-700 group-hover:scale-[0.97]" />
          </motion.div>

          {/* ── Right: Editorial Content ── */}
          <motion.div 
            className="w-full lg:w-7/12 flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-[2px] bg-amber-500"></span>
                <span className="text-teal-700 text-xs font-bold uppercase tracking-widest">
                  About Our Institution
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6 font-serif">
                Where Excellence <br /> <span className="text-teal-700">Meets Innovation.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                Bharath Vidya Mandir is a premier educational institution dedicated to nurturing brilliant minds and developing well-rounded individuals.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-10 space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                With over two decades of educational excellence, we've established ourselves as a beacon of quality learning in the region. Our comprehensive curriculum integrates classical wisdom with modern pedagogical approaches.
              </p>
              <p>
                From cutting-edge laboratories to world-class sports facilities, we provide an enriched ecosystem that empowers students to excel in academics, arts, and athletics.
              </p>
            </motion.div>

            {/* Refined Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 md:gap-6 mb-10 border-t border-slate-200 pt-8">
              {[
                { icon: BookOpen, value: "20+", label: "Years Experience" },
                { icon: Users, value: "5000+", label: "Alumni Worldwide" },
                { icon: Trophy, value: "100%", label: "Board Results" },
                { icon: Target, value: "50+", label: "Expert Faculty" },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0">
                    <stat.icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-slate-900 leading-none mb-1">{stat.value}</span>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">{stat.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <a 
                href="#coaching" 
                className="group inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-none transition-all hover:bg-teal-700"
              >
                Explore Our Programs 
                <ArrowRight size={18} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}