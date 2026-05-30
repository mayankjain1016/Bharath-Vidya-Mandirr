import { motion } from 'framer-motion'
import { BookOpen, Users, Target, ClipboardCheck, MessageCircle, TrendingUp } from 'lucide-react'
import integratedImg from '../assets/Integrated_img.JPG'

const features = [
  { Icon: BookOpen, title: 'NEET Preparation', desc: 'Comprehensive coaching for medical entrance exams mapped to the board syllabus.' },
  { Icon: Target, title: 'JEE Preparation', desc: 'Complete preparation for engineering entrance tests with advanced problem-solving.' },
  { Icon: Users, title: 'Expert Faculty', desc: 'Learn from experienced educators with decades of proven track records.' },
  { Icon: ClipboardCheck, title: 'Regular Mock Tests', desc: 'Weekly assessments, all-India ranking predictions, and performance analysis.' },
  { Icon: TrendingUp, title: 'Career Guidance', desc: 'Personalized 1-on-1 counseling for future planning and college selection.' },
  { Icon: MessageCircle, title: 'Doubt-Solving', desc: 'Dedicated daily time slots exclusively for clearing all conceptual queries.' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeOut' } 
  }
}

export default function IntegratedCoaching() {
  return (
    <section className="py-12 lg:py-16 bg-slate-100 overflow-hidden font-sans">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-12">
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          {/* ── BENTO BLOCK 1: Title & Intro (Span 1) ── */}
          <motion.div variants={itemVariants} className="bg-teal-900 rounded-[2.5rem] p-10 md:p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-teal-800/80 text-teal-200 border border-teal-700 text-xs font-bold uppercase tracking-widest mb-6">
                Integrated Coaching
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tighter mb-6">
                NEET & JEE <br/> Preparation.
              </h2>
              <p className="text-teal-100/80 text-lg leading-relaxed">
                Combine your school curriculum with elite competitive exam preparation. Excel in boards and entrance tests all under one roof.
              </p>
            </div>
          </motion.div>

          {/* ── BENTO BLOCK 2: Large Image & Stats (Span 2) ── */}
          <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-2 relative rounded-[2.5rem] overflow-hidden group min-h-[400px]">
            <img 
              src={integratedImg} 
              alt="Students focused in classroom" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Gradient to make text readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
            
            {/* Glass Stats Bar placed inside the image */}
            <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 lg:p-6 flex flex-wrap gap-4 lg:gap-8 justify-between items-center">
              {[
                { label: 'Students Enrolled', value: '500+' },
                { label: 'Success Rate', value: '95%' },
                { label: 'Selections', value: '150+' }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-0.5">
                  <span className="text-2xl lg:text-3xl font-extrabold text-white tracking-tighter">{stat.value}</span>
                  <span className="text-[10px] lg:text-xs font-bold text-teal-300 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── BENTO BLOCKS 3-8: Feature Cards ── */}
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-200 transition-colors duration-300 hover:border-teal-400 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center mb-6">
                  <feature.Icon size={20} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{feature.title}</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  )
}