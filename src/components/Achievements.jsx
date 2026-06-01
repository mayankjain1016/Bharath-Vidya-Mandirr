import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Trophy, Award, Star, Medal, Crown, ChevronRight
} from 'lucide-react'
import CountUp from './CountUp'

// Award ceremony images
import awardImg1 from '../assets/Awards/014989c1-64cf-49cf-bed2-6a1bb29c5206.jfif'
import awardImg2 from '../assets/Awards/acd335da-9c9f-42e3-b6c7-feb1b98c1986.jfif'
import awardImg3 from '../assets/Awards/cd975466-5b29-4b34-83b1-9dab46e56f01.jfif'
import awardImg4 from '../assets/Awards/ebf1c553-2164-48c8-a6ac-3cab6e35edf0.jfif'
import awardImg5 from '../assets/Awards/ef7ca3b5-436d-4b40-a836-de03549bad24.jfif'
import awardImg6 from '../assets/Awards/f3f0febc-3a34-4888-b6b3-9062d9f5ae77.jfif'

/* ────────────────────────────── DATA ────────────────────────────── */

const galleryImages = [awardImg1, awardImg2, awardImg3, awardImg4, awardImg5, awardImg6]

const awards = [
  { year: '2023', title: 'Best School in Academic Excellence', org: 'Tamil Nadu Education Board', desc: 'Recognized for outstanding board exam performance and academic achievements.' },
  { year: '2022', title: 'Excellence in Integrated Coaching', org: 'National Education Awards', desc: 'Awarded for innovative teaching and exceptional competitive exam results.' },
  { year: '2021', title: 'Best Infrastructure & Facilities', org: 'South India School Awards', desc: 'Honored for state-of-the-art infrastructure and modern learning facilities.' },
  { year: '2020', title: 'Outstanding Contribution to Education', org: 'District Education Department', desc: 'Recognized for significant contribution to quality education in the region.' },
]

const milestones = [
  { year: '2010', title: 'Foundation Year', desc: 'Established with 50 students and a vision for excellence' },
  { year: '2013', title: 'First Board Toppers', desc: 'Produced first batch of state-level board exam toppers' },
  { year: '2016', title: 'Infrastructure Expansion', desc: 'Inaugurated smart classrooms and modern laboratories' },
  { year: '2019', title: '500+ Students', desc: 'Crossed 500 enrolled students with 95%+ success rate' },
  { year: '2021', title: 'Digital Learning', desc: 'Introduced AI-powered personalized learning platforms' },
  { year: '2023', title: 'National Recognition', desc: 'Featured among top 100 schools by Education Today' },
]



/* ──────────────────────────── ANIMATIONS ──────────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

/* ───────────────────────────── COMPONENT ───────────────────────────── */

export default function Achievements({ onEnquireClick }) {
  const [activeTab, setActiveTab] = useState('awards')

  return (
    <div className="w-full font-sans bg-white text-slate-600 overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 — HERO: SPLIT LAYOUT WITH STATS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="pt-32 pb-0 md:pt-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">

            {/* Left — Text */}
            <motion.div
              className="pb-16 lg:pb-24"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-teal-600" />
                <span className="text-teal-600 text-sm font-bold uppercase tracking-[0.2em]">Achievements</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
                Results that <br />
                <span className="text-teal-600">speak volumes.</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed max-w-md mb-10">
                A track record of academic excellence, award-winning programmes, and students who go on to attend the country's finest institutions.
              </p>

              {/* Inline stat pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  { num: '98%', label: 'Pass Rate' },
                  { num: '25+', label: 'State Toppers' },
                  { num: '150+', label: 'Awards' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 border border-slate-100 px-5 py-3">
                    <span className="text-xl font-extrabold text-slate-900 tracking-tight">{s.num}</span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Hero Image Mosaic */}
            <motion.div
              className="relative w-full"
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="aspect-[4/5] bg-slate-100 overflow-hidden">
                    <img src={awardImg1} alt="Award ceremony" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img src={awardImg3} alt="Award ceremony" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-3 pt-8">
                  <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img src={awardImg2} alt="Award ceremony" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[4/5] bg-slate-100 overflow-hidden">
                    <img src={awardImg4} alt="Award ceremony" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — BIG NUMBERS STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8"
            variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            {[
              { end: 2500, suffix: '+', label: 'Students Trained' },
              { end: 15, suffix: '+', label: 'Years of Excellence' },
              { end: 150, suffix: '+', label: 'Competitions Won' },
              { end: 500, suffix: '+', label: 'Students Excelled' },
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-none mb-3 tracking-tighter">
                  <CountUp end={stat.end} duration={2.5} />
                  <span className="text-teal-400">{stat.suffix}</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 — TABBED CONTENT: AWARDS / MILESTONES
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-16">

          {/* Section header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-teal-600" />
              <span className="text-teal-600 text-sm font-bold uppercase tracking-[0.2em]">Recognition</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-8">
              Honours & Milestones
            </h2>

            {/* Tab Buttons */}
            <div className="flex gap-1 border-b border-slate-200">
              {['awards', 'milestones'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-bold uppercase tracking-widest transition-colors relative ${
                    activeTab === tab
                      ? 'text-teal-600'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {tab === 'awards' ? 'Awards' : 'Timeline'}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="tabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal-600"
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content — Awards */}
          {activeTab === 'awards' && (
            <motion.div
              className="flex flex-col"
              variants={containerVariants} initial="hidden" animate="show"
              key="awards"
            >
              {awards.map((award, i) => (
                <motion.div
                  key={i} variants={itemVariants}
                  className="group py-10 flex flex-col md:flex-row gap-6 md:gap-12 border-b border-slate-100 last:border-b-0"
                >
                  <div className="md:w-24 flex-shrink-0">
                    <span className="text-3xl font-extrabold text-slate-200 group-hover:text-teal-600 transition-colors duration-300">{award.year}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors duration-300">{award.title}</h3>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-3">{award.org}</span>
                    <p className="text-slate-500 leading-relaxed">{award.desc}</p>
                  </div>
                  <div className="hidden md:flex items-center">
                    <ChevronRight size={20} className="text-slate-200 group-hover:text-teal-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Tab Content — Milestones */}
          {activeTab === 'milestones' && (
            <motion.div
              className="relative"
              variants={containerVariants} initial="hidden" animate="show"
              key="milestones"
            >
              {/* Clean vertical line */}
              <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-slate-100" />

              {milestones.map((item, i) => (
                <motion.div
                  key={i} variants={itemVariants}
                  className="relative flex items-start w-full mb-12 last:mb-0"
                >
                  {/* Dot */}
                  <div className="absolute left-0 w-4 h-4 bg-teal-600 rounded-full mt-1.5 ring-4 ring-white z-10" />
                  
                  <div className="ml-10">
                    <span className="text-sm font-bold text-teal-600 uppercase tracking-widest">{item.year}</span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — PHOTO GALLERY STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-0 bg-white">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="aspect-square bg-slate-100 overflow-hidden"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <img
                src={img} alt={`Award ceremony ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>


    </div>
  )
}