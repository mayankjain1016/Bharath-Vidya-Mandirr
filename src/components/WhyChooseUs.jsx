import { motion } from 'framer-motion'
import { Award, BookMarked, Sparkles, Laptop, MessageSquare, Apple } from 'lucide-react'

const cards = [
  {
    Icon: Award,
    title: 'Qualified & Experienced Faculty',
    desc: 'Our educators bring decades of combined expertise with ongoing professional development, ensuring every student receives world-class instruction.',
  },
  {
    Icon: BookMarked,
    title: 'Strong Academic Support',
    desc: 'Comprehensive remedial classes, structured revision sessions, and personalised practice to ensure every student masters the curriculum.',
  },
  {
    Icon: Sparkles,
    title: 'Holistic Development Focus',
    desc: 'Beyond academics, we nurture character, leadership, creativity, and emotional intelligence through diverse co-curricular programmes.',
  },
  {
    Icon: Laptop,
    title: 'Digital Classrooms & Smart Boards',
    desc: 'State-of-the-art smart classrooms with interactive digital boards and multimedia content for immersive 21st-century learning.',
  },
  {
    Icon: MessageSquare,
    title: 'Strong Parent-School Communication',
    desc: "Regular parent meetings, transparent progress updates, and collaborative partnerships to support each child's growth journey.",
  },
  {
    Icon: Apple,
    title: 'Bharath Bhojanastav',
    desc: 'Nutritious mid-noon meals prepared hygienically with balanced nutrition, ensuring students are energised and ready to learn.',
  },
]

// Silky smooth stagger animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  },
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-12 lg:py-16 bg-slate-50 overflow-hidden font-sans">
      
      {/* Subtle Architectural Dot Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', 
          backgroundSize: '32px 32px' 
        }} 
      />

      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* ── Section Header ── */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tighter mb-6">
            Why Choose <br className="hidden sm:block" /> Bharath Vidya Mandir?
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            A school that goes beyond textbooks — building confident, compassionate, and capable individuals ready to thrive in a rapidly changing world.
          </p>
        </motion.div>

        {/* ── Features Grid ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cards.map(({ Icon, title, desc }, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="group bg-white rounded-2xl p-5 lg:p-6 border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-colors duration-300 hover:border-teal-400 flex flex-col"
            >
              {/* Static Icon Container */}
              <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5">
                <Icon size={20} strokeWidth={1.8} />
              </div>
              
              {/* Content */}
              <h3 className="text-base font-bold text-slate-900 mb-2.5 tracking-tight transition-colors duration-300 group-hover:text-teal-900">
                {title}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed transition-colors duration-300 group-hover:text-slate-600">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}