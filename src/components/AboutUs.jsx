import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  Target, Eye, Award, Users, TrendingUp, Heart, BookOpen,
  Sparkles, CheckCircle2, Quote, GraduationCap, Shield,
  ArrowRight, Star, Zap, Globe, ChevronDown
} from 'lucide-react'
import CountUp from './CountUp'
import heroBg from '../assets/HomePageImg.jpeg'
import campusImg from '../assets/Hero_img/02890490-a26e-4e4a-98f5-aa1503d3bb04.jfif'
import imgDrRajesh from '../assets/Team/dr_rajesh_kumar_1780130712908.png'
import imgMrsPriya from '../assets/Team/mrs_priya_sharma_1780130752010.png'
import imgMrArun from '../assets/Team/mr_arun_patel_1780130769091.png'
import imgMsLakshmi from '../assets/Team/ms_lakshmi_iyer_1780130793136.png'
import './AboutUs.css'

/* ────────────────────────────── DATA ────────────────────────────── */

const missionCards = [
  { Icon: BookOpen, title: 'Academic Excellence', desc: 'Delivering world-class education with innovative teaching methodologies that inspire curiosity and mastery.' },
  { Icon: Heart, title: 'Character Building', desc: 'Nurturing values, ethics, and emotional intelligence in every student to create compassionate leaders.' },
  { Icon: Users, title: 'Inclusive Learning', desc: 'Creating an environment where every child feels valued, supported, and empowered to succeed.' },
]

const timeline = [
  { year: '2010', title: 'Foundation', desc: 'Bharath Vidya Mandir was established with a bold vision to transform education in Tenkasi and beyond.' },
  { year: '2015', title: 'Expansion', desc: 'Introduced integrated coaching programmes and state-of-the-art smart classroom infrastructure.' },
  { year: '2018', title: 'Recognition', desc: 'Awarded Best School in Academic Excellence by Tamil Nadu Education Board for outstanding results.' },
  { year: '2023', title: 'Innovation', desc: 'Launched digital learning platforms and AI-powered personalised education for every student.' },
]

const team = [
  { name: 'Dr. Rajesh Kumar', role: 'Principal & Academic Director', exp: '25+ Years', img: imgDrRajesh },
  { name: 'Mrs. Priya Sharma', role: 'Vice Principal', exp: '18+ Years', img: imgMrsPriya },
  { name: 'Mr. Arun Patel', role: 'Head of Integrated Coaching', exp: '15+ Years', img: imgMrArun },
  { name: 'Ms. Lakshmi Iyer', role: 'Student Counselor', exp: '12+ Years', img: imgMsLakshmi },
]

const stats = [
  { end: 98, suffix: '%', label: 'Board Exam Pass Rate' },
  { end: 500, suffix: '+', label: 'Students Enrolled' },
  { end: 50, suffix: '+', label: 'Expert Faculty' },
  { end: 15, suffix: '+', label: 'Years of Excellence' },
]

const whyChoose = [
  { Icon: Award, title: 'Proven Track Record', desc: 'Consistent top results in board exams and competitive entrance tests year after year.' },
  { Icon: Users, title: 'Expert Faculty', desc: 'Highly qualified teachers with deep passion and commitment to every student\'s success.' },
  { Icon: TrendingUp, title: 'Holistic Growth', desc: 'Equal emphasis on academics, sports, arts, and personality development for well-rounded students.' },
  { Icon: Sparkles, title: 'Modern Infrastructure', desc: 'Smart classrooms, advanced labs, extensive library, and world-class sports facilities.' },
  { Icon: Shield, title: 'Safe & Nurturing', desc: 'A secure campus environment where students feel protected, valued, and inspired every day.' },
  { Icon: Globe, title: 'Future-Ready Skills', desc: 'Preparing students with 21st-century skills including digital literacy, critical thinking, and collaboration.' },
]

/* ──────────────────────────── ANIMATIONS ──────────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

/* ───────────────────────────── COMPONENT ───────────────────────────── */

export default function AboutUs({ onEnquireClick }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="w-full font-sans bg-white text-slate-600 overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 — HERO (EDITORIAL)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-teal-600" />
                <span className="text-teal-600 text-sm font-bold uppercase tracking-[0.2em]">Established 2010</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
                Excellence in <br />
                <span className="text-teal-600">Education & Life.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-lg">
                Inspiring students to learn, grow, and achieve their full potential in a supportive, future-ready environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={onEnquireClick}
                  className="bg-teal-600 text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] transition-colors hover:bg-teal-700 w-full sm:w-auto text-center"
                >
                  Enquire Now
                </button>
                <a
                  href="#who-we-are"
                  className="text-slate-900 hover:text-teal-600 text-sm font-bold uppercase tracking-[0.1em] transition-colors flex items-center justify-center gap-2"
                >
                  Discover More
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 w-full"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={heroBg}
                  alt="Bharath Vidya Mandir Campus"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — WHO WE ARE (CLEAN)
      ═══════════════════════════════════════════════════════════════ */}
      <section id="who-we-are" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-teal-600" />
                <span className="text-teal-600 text-sm font-bold uppercase tracking-[0.2em]">Who We Are</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-8">
                A Legacy of Educational Excellence.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Bharath Vidya Mandir is a premier educational institution located in Tenkasi, Tamil Nadu. We are committed to providing quality education that seamlessly combines traditional values with modern teaching methodologies.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Our school is more than just a place of learning — it's a thriving community where students, teachers, and parents work together to create an environment that fosters curiosity, creativity, and critical thinking.
              </p>
              <div className="flex flex-col gap-4">
                {['CBSE Affiliated Institution', 'State-of-the-Art Infrastructure', 'Integrated Coaching Programs'].map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 size={20} className="text-teal-600" />
                    <span className="font-semibold text-slate-900 text-base">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="w-full aspect-[4/5] overflow-hidden bg-slate-100">
                <img src={campusImg} alt="Campus" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 — STATS STRIP (CLEAN)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
            variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center">
                <div className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-none mb-4 tracking-tighter">
                  <CountUp end={stat.end} duration={2.5} />
                  <span className="text-teal-600">{stat.suffix}</span>
                </div>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — DIRECTOR'S MESSAGE (CLEAN)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="text-teal-600 text-sm font-bold uppercase tracking-[0.2em]">Director's Message</span>
            </div>

            <blockquote className="text-2xl md:text-4xl font-semibold text-slate-900 leading-tight md:leading-snug mb-12 italic">
              "Education is not the filling of a pail, but the lighting of a fire. At Bharath Vidya Mandir, our goal is to ignite that spark within every student."
            </blockquote>

            <div className="flex flex-col items-center justify-center gap-4">
              <img src={imgDrRajesh} alt="Dr. Rajesh Kumar" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h4 className="font-extrabold text-slate-900 text-lg">Dr. Rajesh Kumar</h4>
                <span className="text-sm text-slate-500">Academic Director</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5 — VISION & MISSION (CLEAN)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Vision Side */}
            <motion.div
              className="lg:col-span-5 flex flex-col justify-center sticky top-24"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={itemVariants}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-teal-600" />
                <span className="text-teal-600 text-sm font-bold uppercase tracking-[0.2em]">Our Vision</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-8">
                Building Tomorrow's Leaders Today.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be recognized as a leading educational institution that inspires excellence, innovation, and integrity. We envision a future where our students become compassionate leaders who contribute positively to society and drive meaningful change.
              </p>
            </motion.div>

            {/* Mission Side */}
            <motion.div
              className="lg:col-span-7 flex flex-col justify-center lg:pl-16"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
            >
              <div className="flex items-center gap-4 mb-8 lg:mb-12">
                <div className="w-12 h-[1px] bg-teal-600 hidden lg:block opacity-0" />
                <div className="w-12 h-[1px] bg-teal-600 lg:hidden" />
                <span className="text-teal-600 text-sm font-bold uppercase tracking-[0.2em]">Our Mission</span>
              </div>

              <div className="flex flex-col gap-12">
                {missionCards.map(({ Icon, title, desc }, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 flex items-center justify-center text-teal-600">
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
                      <p className="text-slate-600 leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6 — JOURNEY TIMELINE (CLEAN)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <span className="inline-flex text-teal-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Journey</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Milestones of Growth</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 md:-translate-x-1/2" />

            <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className={`relative flex items-start md:justify-between w-full mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  variants={itemVariants}
                >
                  <div className="hidden md:block w-[44%]" />
                  <div className="absolute left-[8px] md:left-1/2 w-4 h-4 bg-teal-600 rounded-full md:-translate-x-1/2 mt-1.5 ring-4 ring-slate-50" />

                  <div className="w-[calc(100%-40px)] md:w-[44%] ml-10 md:ml-0">
                    <span className="block text-xl font-bold text-teal-600 mb-2">{item.year}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7 — EXPERT TEAM (PREMIUM EDITORIAL)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-teal-600" />
                <span className="text-teal-600 text-sm font-bold uppercase tracking-[0.2em]">Leadership</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Meet the minds <br className="hidden md:block" /> behind the mission.
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-md">
              <p className="text-slate-600 leading-relaxed text-lg">
                Our educators are seasoned professionals dedicated to shaping the next generation of thinkers, innovators, and leaders.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
            variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            {team.map((member, i) => (
              <motion.div key={i} variants={itemVariants} className="group relative">
                <div className="w-full aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden mb-6 relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay to make image feel rich */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating info box effect without heavy shadows */}
                <div className="relative z-10 -mt-16 mx-4 bg-white p-5 rounded-xl border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-10px_rgba(13,148,136,0.1)] group-hover:border-teal-100">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-1 tracking-tight">{member.name}</h3>
                  <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-3">{member.role}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <span className="w-4 h-[1px] bg-slate-300"></span>
                    {member.exp} Experience
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 8 — WHAT SETS US APART (CLEAN)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <span className="inline-flex text-teal-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">Why BVM</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">What Sets Us Apart</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            {whyChoose.map(({ Icon, title, desc }, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants} 
                className="flex flex-col p-8 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-teal-900/5 border border-transparent hover:border-slate-100 hover:-translate-y-1 cursor-pointer"
              >
                <Icon size={32} strokeWidth={1.5} className="text-teal-600 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 9 — CTA BANNER (CLEAN)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-teal-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Ready to Give Your Child the Best Education?
            </h2>
            <p className="text-base md:text-lg text-teal-100/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Join the Bharath Vidya Mandir family and set your child on the path to excellence. Admissions are now open.
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={onEnquireClick}
                className="bg-white text-teal-900 px-8 py-3 text-sm font-bold uppercase tracking-[0.1em] transition-colors hover:bg-teal-50"
              >
                Enquire Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}