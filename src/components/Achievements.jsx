import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Trophy, Award, Star, TrendingUp, Users, BookOpen, Target, 
  Medal, Crown, Sparkles, GraduationCap, Calendar, MapPin,
  CheckCircle2, ArrowRight, Zap, Heart, Globe
} from 'lucide-react'
import CountUp from './CountUp'
import './Achievements.css'

const highlights = [
  { Icon: Trophy, number: '98%', label: 'Board Exam Success Rate', color: 'var(--gold)' },
  { Icon: Medal, number: '150+', label: 'Awards & Recognitions', color: 'var(--teal)' },
  { Icon: Star, number: '500+', label: 'Students Excelled', color: 'var(--gold)' },
  { Icon: Crown, number: '25+', label: 'State Level Toppers', color: 'var(--teal)' },
]

const awards = [
  {
    year: '2023',
    title: 'Best School in Academic Excellence',
    org: 'Tamil Nadu Education Board',
    desc: 'Recognized for outstanding performance in board examinations and overall academic achievements.',
  },
  {
    year: '2022',
    title: 'Excellence in Integrated Coaching',
    org: 'National Education Awards',
    desc: 'Awarded for innovative teaching methodologies and exceptional results in competitive exams.',
  },
  {
    year: '2021',
    title: 'Best Infrastructure & Facilities',
    org: 'South India School Awards',
    desc: 'Honored for state-of-the-art infrastructure and modern learning facilities.',
  },
  {
    year: '2020',
    title: 'Outstanding Contribution to Education',
    org: 'District Education Department',
    desc: 'Recognized for significant contribution to quality education in the region.',
  },
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
  {
    name: 'Priya Sharma',
    achievement: 'State Rank 3 - NEET 2023',
    score: '720/720',
    college: 'AIIMS Delhi',
    quote: 'The integrated coaching at BVM transformed my preparation journey.',
  },
  {
    name: 'Arjun Kumar',
    achievement: 'JEE Advanced AIR 156',
    score: '342/360',
    college: 'IIT Bombay',
    quote: 'Expert faculty and personalized attention helped me achieve my dream.',
  },
  {
    name: 'Lakshmi Iyer',
    achievement: 'CBSE Board Topper',
    score: '99.8%',
    college: 'St. Stephen\'s College',
    quote: 'BVM provided the perfect environment for holistic development.',
  },
  {
    name: 'Rahul Patel',
    achievement: 'State Rank 12 - JEE Mains',
    score: '99.9 Percentile',
    college: 'NIT Trichy',
    quote: 'The systematic approach and regular assessments were game-changers.',
  },
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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Achievements({ onEnquireClick }) {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="achievements-page">
      {/* Hero Section */}
      <section className="ach-hero">
        <div className="ach-hero-overlay" />
        <div className="container">
          <motion.div
            className="ach-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="ach-hero-icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              <Trophy size={60} color="var(--gold)" strokeWidth={1.5} />
            </motion.div>
            <span className="section-tag">Excellence & Success</span>
            <h1>Our Achievements</h1>
            <p>
              A legacy of excellence, dedication, and success. Celebrating milestones that inspire
              and achievements that define our commitment to quality education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievement Highlights */}
      <section className="ach-section ach-highlights">
        <div className="container">
          <motion.div
            className="ach-highlights-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {highlights.map(({ Icon, number, label, color }, i) => (
              <motion.div key={i} className="ach-highlight-card" variants={item}>
                <div className="ach-highlight-icon" style={{ background: `${color}15` }}>
                  <Icon size={40} color={color} strokeWidth={1.8} />
                </div>
                <div className="ach-highlight-number" style={{ color }}>
                  {number}
                </div>
                <p>{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="ach-section ach-awards">
        <div className="container">
          <motion.div
            className="ach-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Award size={40} color="var(--gold)" strokeWidth={1.8} />
            <span className="section-tag">Honors & Recognition</span>
            <h2>Awards & Accolades</h2>
            <p className="ach-sub">
              Recognized by leading educational bodies for our commitment to excellence and innovation.
            </p>
          </motion.div>

          <div className="ach-awards-grid">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                className="ach-award-card"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="ach-award-year">{award.year}</div>
                <div className="ach-award-content">
                  <div className="ach-award-icon">
                    <Medal size={28} color="var(--gold)" strokeWidth={1.8} />
                  </div>
                  <h3>{award.title}</h3>
                  <p className="ach-award-org">{award.org}</p>
                  <p className="ach-award-desc">{award.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="ach-section ach-milestones">
        <div className="container">
          <motion.div
            className="ach-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Our Journey</span>
            <h2>Milestones & Growth</h2>
            <p className="ach-sub">
              A journey of continuous growth, innovation, and unwavering commitment to educational excellence.
            </p>
          </motion.div>

          <div className="ach-timeline">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                className="ach-timeline-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="ach-timeline-marker">
                  <div className="ach-timeline-dot" />
                </div>
                <div className="ach-timeline-content">
                  <div className="ach-timeline-year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="ach-section ach-success">
        <div className="container">
          <motion.div
            className="ach-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Star size={40} color="var(--gold)" strokeWidth={1.8} />
            <span className="section-tag">Student Excellence</span>
            <h2>Success Stories</h2>
            <p className="ach-sub">
              Our students' achievements are our greatest pride. Meet some of our star performers.
            </p>
          </motion.div>

          <motion.div
            className="ach-success-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {successStories.map((story, i) => (
              <motion.div key={i} className="ach-success-card" variants={item}>
                <div className="ach-success-header">
                  <div className="ach-success-avatar">
                    <GraduationCap size={40} color="var(--teal)" strokeWidth={1.5} />
                  </div>
                  <div className="ach-success-badge">
                    <Star size={16} color="var(--gold)" fill="var(--gold)" />
                  </div>
                </div>
                <h3>{story.name}</h3>
                <p className="ach-success-achievement">{story.achievement}</p>
                <div className="ach-success-score">{story.score}</div>
                <p className="ach-success-college">
                  <MapPin size={14} /> {story.college}
                </p>
                <blockquote className="ach-success-quote">"{story.quote}"</blockquote>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="ach-section ach-stats">
        <div className="ach-stats-overlay" />
        <div className="container">
          <motion.div
            className="ach-stats-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Our Impact in Numbers</h2>
            <div className="ach-stats-grid">
              {stats.map((stat, i) => (
                <div key={i} className="ach-stat-item">
                  <div className="ach-stat-icon">
                    <stat.Icon size={32} color="var(--gold)" strokeWidth={1.8} />
                  </div>
                  <div className="ach-stat-number">
                    <CountUp end={stat.end} duration={2.5} />
                    <span>{stat.suffix}</span>
                  </div>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="ach-section ach-gallery">
        <div className="container">
          <motion.div
            className="ach-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Moments of Glory</span>
            <h2>Achievement Gallery</h2>
            <p className="ach-sub">
              Capturing the moments that define our journey of excellence and success.
            </p>
          </motion.div>

          <motion.div
            className="ach-gallery-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <motion.div key={i} className="ach-gallery-item" variants={item}>
                <div className="ach-gallery-placeholder">
                  <Trophy size={50} color="var(--teal)" strokeWidth={1.5} />
                </div>
                <div className="ach-gallery-overlay">
                  <Sparkles size={24} color="var(--white)" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recognition from Institutions */}
      <section className="ach-section ach-recognition">
        <div className="container">
          <motion.div
            className="ach-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Certifications & Affiliations</span>
            <h2>Institutional Recognition</h2>
            <p className="ach-sub">
              Accredited and recognized by leading educational and quality assurance bodies.
            </p>
          </motion.div>

          <motion.div
            className="ach-recognition-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {recognitions.map((rec, i) => (
              <motion.div key={i} className="ach-recognition-card" variants={item}>
                <div className="ach-recognition-icon">
                  <CheckCircle2 size={32} color="var(--teal)" strokeWidth={1.8} />
                </div>
                <h3>{rec.name}</h3>
                <p>{rec.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="ach-section ach-future">
        <div className="container">
          <motion.div
            className="ach-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={40} color="var(--gold)" strokeWidth={1.8} />
            <span className="section-tag">Looking Ahead</span>
            <h2>Future Goals & Vision</h2>
            <p className="ach-sub">
              Our commitment to excellence continues as we set ambitious goals for the future.
            </p>
          </motion.div>

          <motion.div
            className="ach-future-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {futureGoals.map(({ Icon, title, desc }, i) => (
              <motion.div key={i} className="ach-future-card" variants={item}>
                <div className="ach-future-icon">
                  <Icon size={32} color="var(--teal)" strokeWidth={1.8} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="ach-cta">
        <div className="container">
          <motion.div
            className="ach-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Be Part of Our Success Story</h2>
            <p>
              Join Bharath Vidya Mandir and become part of a legacy of excellence. 
              Let's achieve greatness together.
            </p>
            <div className="ach-cta-buttons">
              <button className="btn btn-white-teal" onClick={onEnquireClick}>
                Enroll Now <ArrowRight size={18} />
              </button>
              <button className="btn btn-outline-white-teal" onClick={onEnquireClick}>
                Schedule a Visit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
