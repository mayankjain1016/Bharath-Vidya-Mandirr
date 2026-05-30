import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Target, Eye, Award, Users, TrendingUp, Heart, BookOpen, 
  Sparkles, CheckCircle2, Quote 
} from 'lucide-react'
import CountUp from './CountUp'
import heroBg from '../assets/HomePageImg.jpeg'
import imgDrRajesh from '../assets/Team/dr_rajesh_kumar_1780130712908.png'
import imgMrsPriya from '../assets/Team/mrs_priya_sharma_1780130752010.png'
import imgMrArun from '../assets/Team/mr_arun_patel_1780130769091.png'
import imgMsLakshmi from '../assets/Team/ms_lakshmi_iyer_1780130793136.png'
import './AboutUs.css'

const missionCards = [
  { Icon: BookOpen, title: 'Academic Excellence', desc: 'Delivering world-class education with innovative teaching methodologies.' },
  { Icon: Heart, title: 'Character Building', desc: 'Nurturing values, ethics, and emotional intelligence in every student.' },
  { Icon: Users, title: 'Inclusive Learning', desc: 'Creating an environment where every child feels valued and supported.' },
]

const timeline = [
  { year: '2010', title: 'Foundation', desc: 'Bharath Vidya Mandir was established with a vision to transform education.' },
  { year: '2015', title: 'Expansion', desc: 'Introduced integrated coaching and smart classroom infrastructure.' },
  { year: '2018', title: 'Recognition', desc: 'Awarded Best School in Academic Excellence by Tamil Nadu Education Board.' },
  { year: '2023', title: 'Innovation', desc: 'Launched digital learning platforms and AI-powered personalized education.' },
]

const team = [
  { name: 'Dr. Rajesh Kumar', role: 'Principal & Academic Director', exp: '25+ Years', img: imgDrRajesh },
  { name: 'Mrs. Priya Sharma', role: 'Vice Principal', exp: '18+ Years', img: imgMrsPriya },
  { name: 'Mr. Arun Patel', role: 'Head of Integrated Coaching', exp: '15+ Years', img: imgMrArun },
  { name: 'Ms. Lakshmi Iyer', role: 'Student Counselor', exp: '12+ Years', img: imgMsLakshmi },
]

const stats = [
  { end: 98, suffix: '%', label: 'Board Exam Success Rate' },
  { end: 500, suffix: '+', label: 'Students Enrolled' },
  { end: 50, suffix: '+', label: 'Expert Faculty Members' },
  { end: 15, suffix: '+', label: 'Years of Excellence' },
]

const whyChoose = [
  { Icon: Award, title: 'Proven Track Record', desc: 'Consistent top results in board exams and competitive entrance tests.' },
  { Icon: Users, title: 'Expert Faculty', desc: 'Highly qualified teachers with a deep passion for student success.' },
  { Icon: TrendingUp, title: 'Holistic Growth', desc: 'Equal focus on academics, sports, arts, and personality development.' },
  { Icon: Sparkles, title: 'Modern Infrastructure', desc: 'Smart classrooms, advanced labs, extensive library, and sports facilities.' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function AboutUs({ onEnquireClick }) {
  return (
    <div className="w-full font-sans bg-slate-50 text-slate-600 overflow-hidden">
      
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Bharath Vidya Mandir Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/80" /> {/* Dark overlay for text readability */}
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-[-20%] right-[10%] w-[600px] h-[600px] bg-teal-800/40 blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px] opacity-30 pointer-events-none z-0" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block bg-white/5 border border-white/10 text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] mb-8 backdrop-blur-sm">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Excellence in Education,<br/> Excellence in Life.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Inspiring students to learn, grow, and achieve their full potential in a supportive, future-ready environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHO WE ARE (EDITORIAL OVERLAP) ── */}
      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block text-teal-600 text-xs font-bold uppercase tracking-widest mb-4">Who We Are</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
                A Legacy of Educational Excellence.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Bharath Vidya Mandir is a premier educational institution located in Tenkasi, Tamil Nadu. We are committed to providing quality education that combines traditional values with modern teaching methodologies.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our school is more than just a place of learning—it's a community where students, teachers, and parents work together to create an environment that fosters curiosity, creativity, and critical thinking.
              </p>
              
              <div className="flex flex-col gap-4">
                {['CBSE Affiliated Institution', 'State-of-the-Art Infrastructure', 'Integrated Coaching Programs'].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 font-semibold text-slate-900">
                    <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="relative pl-0 md:pl-8 lg:pl-16" variants={itemVariants}>
              <div className="relative w-full aspect-[4/5] bg-slate-100 border border-slate-200 rounded-[2.5rem] flex items-center justify-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.05)]">
                <BookOpen size={80} className="text-slate-200" strokeWidth={1} />
                
                {/* Floating Stat Badge */}
                <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl flex items-center gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100">
                  <Award size={32} className="text-amber-500" />
                  <div>
                    <strong className="block text-3xl font-black text-slate-900 leading-none">15+</strong>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-1 block">Years of Trust</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── DIRECTOR's NOTE ── */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <motion.div 
            className="relative bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_40px_-10px_rgba(13,148,136,0.1)] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Quote className="absolute -top-4 -right-4 md:right-8 w-40 h-40 text-teal-50 -rotate-12 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">A Message from the Director</h3>
              <p className="text-lg md:text-xl italic text-slate-600 leading-relaxed mb-8">
                "Education is not the filling of a pail, but the lighting of a fire. At Bharath Vidya Mandir, our goal is to ignite that spark within every student, equipping them not just with knowledge, but with the wisdom and character to navigate the world."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  RK
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 m-0">Dr. Rajesh Kumar</h4>
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-600">Academic Director</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION & VISION (BENTO BOX) ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Vision Box */}
            <motion.div className="col-span-1 md:col-span-3 bg-teal-900 rounded-[2rem] p-8 md:p-16 text-center text-white relative overflow-hidden group" variants={itemVariants}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.2),transparent_50%)] pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
              <Eye size={48} className="text-amber-400 mx-auto mb-6" />
              <span className="inline-block text-teal-200 text-xs font-bold uppercase tracking-widest mb-4">Our Vision</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Building Tomorrow's Leaders Today</h2>
              <p className="text-teal-50 text-lg leading-relaxed max-w-3xl mx-auto">
                To be recognized as a leading educational institution that inspires excellence, innovation, and integrity. We envision a future where our students become compassionate leaders who contribute positively to society.
              </p>
            </motion.div>

            {/* Mission Header */}
            <motion.div className="col-span-1 md:col-span-3 text-center mt-12 mb-4" variants={itemVariants}>
              <Target size={40} className="text-amber-500 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Our Mission</h2>
            </motion.div>

            {/* Mission Cards */}
            {missionCards.map(({ Icon, title, desc }, i) => (
              <motion.div 
                key={i} 
                className="bg-white border border-slate-200 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-teal-200 hover:shadow-[0_20px_40px_-10px_rgba(13,148,136,0.1)] group" 
                variants={itemVariants}
              >
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-500 mb-6 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600">
                  <Icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="py-20 bg-amber-500 relative">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={itemVariants}>
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-none mb-3">
                  <CountUp end={stat.end} duration={2.5} />
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-slate-900/70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <span className="inline-block text-teal-600 text-xs font-bold uppercase tracking-widest mb-4">Our Journey</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Milestones of Growth</h2>
          </div>

          <div className="relative py-8">
            {/* Center Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-50 via-teal-200 to-teal-50 md:-translate-x-1/2 rounded-full" />
            
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {timeline.map((item, i) => (
                <motion.div key={i} className={`relative flex items-center justify-start md:justify-between w-full mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`} variants={itemVariants}>
                  
                  {/* Empty space for opposite side on desktop */}
                  <div className="hidden md:block w-[45%]" />
                  
                  {/* Node */}
                  <div className="absolute left-[12px] md:left-1/2 w-5 h-5 bg-white border-4 border-teal-500 rounded-full shadow-[0_0_0_4px_rgba(20,184,166,0.1)] -translate-x-1/2 z-10 transition-transform duration-300 hover:scale-150 hover:shadow-[0_0_15px_rgba(20,184,166,0.5)]" />
                  
                  {/* Content Card */}
                  <div className="w-[calc(100%-40px)] md:w-[45%] ml-10 md:ml-0 bg-slate-50 border border-slate-100 p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:border-teal-100 hover:shadow-[0_20px_40px_-10px_rgba(13,148,136,0.1)] hover:-translate-y-1">
                    <span className="block text-3xl font-black text-teal-600 leading-none mb-3">{item.year}</span>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EXPERT TEAM ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <span className="inline-block text-teal-600 text-xs font-bold uppercase tracking-widest mb-4">Our Team</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Meet Our Educators</h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {team.map((member, i) => (
              <motion.div key={i} className="group relative bg-slate-100 rounded-2xl overflow-hidden aspect-[3/4] border border-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(13,148,136,0.15)] cursor-pointer" variants={itemVariants}>
                <div className="absolute inset-0">
                  {member.img ? (
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-slate-200 text-teal-200 transition-transform duration-700 group-hover:scale-105">
                      <Users size={64} strokeWidth={1.5} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                  <span className="inline-block bg-teal-500/20 border border-teal-500/30 text-teal-100 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-3">
                    {member.exp}
                  </span>
                  <h3 className="text-xl font-extrabold mb-1">{member.name}</h3>
                  <p className="text-sm text-slate-300">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">What Sets Us Apart</h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {whyChoose.map(({ Icon, title, desc }, i) => (
              <motion.div key={i} className="flex flex-col sm:flex-row gap-6 bg-slate-50 border border-slate-200 p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:border-teal-200 hover:shadow-[0_20px_40px_-10px_rgba(13,148,136,0.1)] hover:-translate-y-1 group" variants={itemVariants}>
                <div className="flex-shrink-0 w-16 h-16 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-teal-600 transition-transform duration-300 group-hover:bg-teal-600 group-hover:text-white group-hover:scale-110">
                  <Icon size={32} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  )
}