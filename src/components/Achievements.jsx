import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Trophy, Award, Star, TrendingUp, Users, BookOpen, Target, 
  Medal, Crown, Sparkles, GraduationCap, Calendar, MapPin,
  CheckCircle2, ArrowRight, Zap, Heart, Globe, Quote
} from 'lucide-react'
import CountUp from './CountUp'

// Keep your exact data arrays
const highlights = [
  { Icon: Trophy, number: '98%', label: 'Board Exam Success Rate', color: '#d4af37' }, // Adjusted to hex for safety
  { Icon: Medal, number: '150+', label: 'Awards & Recognitions', color: '#0d9488' },
  { Icon: Star, number: '500+', label: 'Students Excelled', color: '#d4af37' },
  { Icon: Crown, number: '25+', label: 'State Level Toppers', color: '#0d9488' },
]

const awards = [
  { year: '2023', title: 'Best School in Academic Excellence', org: 'Tamil Nadu Education Board', desc: 'Recognized for outstanding performance in board examinations and overall academic achievements.' },
  { year: '2022', title: 'Excellence in Integrated Coaching', org: 'National Education Awards', desc: 'Awarded for innovative teaching methodologies and exceptional results in competitive exams.' },
  { year: '2021', title: 'Best Infrastructure & Facilities', org: 'South India School Awards', desc: 'Honored for state-of-the-art infrastructure and modern learning facilities.' },
  { year: '2020', title: 'Outstanding Contribution to Education', org: 'District Education Department', desc: 'Recognized for significant contribution to quality education in the region.' },
]

const milestones = [
  { year: '2010', title: 'Foundation Year', desc: 'Established with 50 students and a vision for excellence' },
  { year: '2013', title: 'First Board Toppers', desc: 'Produced first batch of state-level board examination toppers' },
  { year: '2016', title: 'Infrastructure Expansion', desc: 'Inaugurated smart classrooms and modern laboratories' },
  { year: '2019', title: '500+ Students Milestone', desc: 'Crossed 500 enrolled students with 95%+ success rate' },
  { year: '2021', title: 'Digital Learning Launch', desc: 'Introduced AI-powered personalized learning platforms' },
  { year: '2023', title: 'National Recognition', desc: 'Featured among top 100 schools in India by Education Today' },
]

const successStories = [
  { name: 'Priya Sharma', achievement: 'State Rank 3 - NEET 2023', score: '720/720', college: 'AIIMS Delhi', quote: 'The integrated coaching at BVM transformed my preparation journey.' },
  { name: 'Arjun Kumar', achievement: 'JEE Advanced AIR 156', score: '342/360', college: 'IIT Bombay', quote: 'Expert faculty and personalized attention helped me achieve my dream.' },
  { name: 'Lakshmi Iyer', achievement: 'CBSE Board Topper', score: '99.8%', college: "St. Stephen's College", quote: 'BVM provided the perfect environment for holistic development.' },
  { name: 'Rahul Patel', achievement: 'State Rank 12 - JEE Mains', score: '99.9 Percentile', college: 'NIT Trichy', quote: 'The systematic approach and regular assessments were game-changers.' },
]

const stats = [
  { end: 2500, suffix: '+', label: 'Students Trained', Icon: Users },
  { end: 15, suffix: '+', label: 'Years of Excellence', Icon: Calendar },
  { end: 150, suffix: '+', label: 'Competitions Won', Icon: Trophy },
  { end: 50, suffix: '+', label: 'Partner Schools', Icon: Globe },
]

const recognitions = [
  { name: 'CBSE Affiliation', desc: 'Affiliated with Central Board of Secondary Education' },
  { name: 'ISO 9001:2015 Certified', desc: 'Quality management system certification' },
  { name: 'NABET Accredited', desc: 'National Accreditation Board for Education and Training' },
  { name: 'Green School Certification', desc: 'Recognized for environmental sustainability initiatives' },
]

const futureGoals = [
  { Icon: Target, title: 'Expand to 1000+ Students', desc: 'Scale our impact by 2025' },
  { Icon: Globe, title: 'International Collaborations', desc: 'Partner with global institutions' },
  { Icon: Zap, title: 'AI-Powered Learning', desc: 'Advanced personalized education tech' },
  { Icon: Heart, title: 'Scholarship Programs', desc: 'Support 100+ underprivileged students' },
]

// Animations
const staggerContainer = {
  hidden: { opacity: 0 },
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function Achievements({ onEnquireClick }) {
  return (
    <div className="w-full font-sans bg-slate-50 overflow-hidden">
      
      {/* ── Custom CSS for Infinite Marquee ── */}
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker { animation: ticker 20s linear infinite; }
        .animate-ticker:hover { animation-play-state: paused; }
      `}</style>

      {/* ── 1. Hero Section (The Trophy Room) ── */}
      <section className="relative py-24 md:py-32 bg-slate-950 flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]" />
        </div>
        
        <motion.div
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
          initial="hidden" animate="show" variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/5 flex items-center justify-center mb-8 border border-amber-500/20 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
            <Trophy size={48} className="text-amber-400" strokeWidth={1.5} />
          </motion.div>
          <motion.span variants={fadeUp} className="text-amber-400 text-sm font-bold uppercase tracking-[0.3em] mb-4">
            Excellence & Success
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter mb-6 leading-tight">
            Our Achievements
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            A legacy of excellence, dedication, and success. Celebrating milestones that inspire and achievements that define our commitment to quality education.
          </motion.p>
        </motion.div>
      </section>

      {/* ── 2. Infinite Achievement Ticker ── */}
      <div className="w-full bg-teal-900 border-y border-teal-800 py-3 overflow-hidden flex whitespace-nowrap relative z-20">
        <div className="animate-ticker flex gap-8 w-max px-4">
          {/* Double the content to ensure smooth seamless looping */}
          {[...highlights, ...highlights, ...highlights, ...highlights].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <Star size={14} className="text-amber-400" fill="currentColor" />
              <span className="text-teal-50 font-bold tracking-widest text-sm uppercase">
                {item.number} {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. Highlights Bento Grid ── */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-24">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {highlights.map(({ Icon, number, label, color }, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${color}15`, color: color }}>
                <Icon size={28} strokeWidth={2} />
              </div>
              <div className="text-4xl font-extrabold mb-2 tracking-tighter" style={{ color: color }}>{number}</div>
              <p className="text-slate-600 font-medium">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── 4. Awards & Accolades (Premium Editorial) ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-[2px] bg-amber-500"></span>
                <span className="text-teal-700 text-xs font-bold uppercase tracking-widest">
                  Honors & Recognition
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-serif tracking-tight">
                Awards & Accolades
              </h2>
            </div>
            <p className="text-slate-600 max-w-sm text-sm md:text-base leading-relaxed">
              Celebrating our commitment to excellence through recognition by prestigious educational boards and national organizations.
            </p>
          </div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {awards.map((award, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                className="group relative bg-white rounded-none border border-slate-200 p-8 md:p-10 transition-all duration-500 hover:border-teal-400 hover:shadow-[0_20px_40px_rgba(13,148,136,0.12)] hover:-translate-y-2 flex flex-col overflow-hidden"
              >
                {/* Decorative Top Accent (Slides in on hover) */}
                <div className="absolute top-0 left-0 h-1 bg-teal-600 transition-all duration-500 w-0 group-hover:w-full" />

                {/* Subtle Background Watermark (Moves slightly on hover) */}
                <div className="absolute right-6 top-6 text-6xl md:text-8xl font-black text-slate-50 transition-all duration-700 ease-out group-hover:text-teal-50/50 group-hover:-translate-x-4 group-hover:scale-110 pointer-events-none select-none z-0">
                  {award.year}
                </div>
                
                <div className="relative z-10 flex-grow">
                  {/* Icon rotates and scales slightly */}
                  <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-teal-600 group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 shadow-sm">
                    <Award size={24} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 transition-colors duration-300 group-hover:text-teal-900">
                    {award.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-block px-2.5 py-1 rounded bg-amber-100 text-amber-800 text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 group-hover:bg-amber-200">
                      {award.year}
                    </span>
                    <span className="text-teal-600 font-bold text-xs uppercase tracking-wider">
                      {award.org}
                    </span>
                  </div>
                  
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed transition-colors duration-300 group-hover:text-slate-700">
                    {award.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. Milestones (Vertical Glowing Timeline) ── */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tighter">Our Journey</h2>
          </div>

          <div className="relative border-l-2 border-teal-200 md:border-none">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-200 via-teal-400 to-teal-200 -translate-x-1/2 rounded-full" />

            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-12">
              {milestones.map((milestone, i) => (
                <motion.div key={i} variants={fadeUp} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} pl-8 md:pl-0`}>
                  
                  {/* Glowing Node */}
                  <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.5)] z-10" />

                  {/* Card */}
                  <div className={`w-full md:w-[45%] bg-white p-8 rounded-3xl shadow-lg border border-slate-100 transition-transform hover:-translate-y-1`}>
                    <span className="text-4xl font-black text-teal-100 mb-2 block">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                    <p className="text-slate-600">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. Success Stories (Testimonials) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tighter">Student Excellence</h2>
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {successStories.map((story, i) => (
              <motion.div key={i} variants={fadeUp} className="relative bg-slate-50 rounded-[2.5rem] p-8 md:p-10 border border-slate-100 overflow-hidden">
                <Quote className="absolute -top-4 -right-4 w-32 h-32 text-teal-500/5 rotate-12 pointer-events-none" />
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center text-white flex-shrink-0">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{story.name}</h3>
                    <p className="text-teal-600 font-bold">{story.achievement}</p>
                    <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                      <MapPin size={14} /> {story.college}
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-700 text-lg italic relative z-10">"{story.quote}"</p>
                
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Score / Percentile</span>
                  <div className="text-2xl font-black text-slate-900">{story.score}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. Global Statistics ── */}
      <section className="py-20 bg-teal-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center">
                <stat.Icon size={36} className="text-amber-400 mb-4" />
                <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2 flex items-center">
                  <CountUp end={stat.end} duration={2.5} />
                  <span className="text-amber-400">{stat.suffix}</span>
                </div>
                <p className="text-teal-200 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 8. Call To Action ── */}
      <section className="py-24 bg-white text-center px-6">
        <motion.div 
          className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-teal-950 rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
          <h2 className="relative z-10 text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-6">
            Be Part of Our Success Story
          </h2>
          <p className="relative z-10 text-lg text-teal-100/80 mb-10 max-w-2xl mx-auto">
            Join Bharath Vidya Mandir and become part of a legacy of excellence. Let's achieve greatness together.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={onEnquireClick} className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-teal-500/30">
              Enroll Now <ArrowRight size={18} />
            </button>
            <button onClick={onEnquireClick} className="bg-transparent border-2 border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all">
              Schedule a Visit
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  )
}