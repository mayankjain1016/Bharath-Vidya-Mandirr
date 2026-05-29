import { motion } from 'framer-motion'
import { useState } from 'react'
import { Target, Eye, Award, Users, TrendingUp, Heart, BookOpen, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'
import CountUp from './CountUp'
import './AboutUs.css'

const missionCards = [
  { Icon: BookOpen, title: 'Academic Excellence', desc: 'Delivering world-class education with innovative teaching methodologies' },
  { Icon: Heart, title: 'Character Building', desc: 'Nurturing values, ethics, and emotional intelligence in every student' },
  { Icon: Users, title: 'Inclusive Learning', desc: 'Creating an environment where every child feels valued and supported' },
]

const timeline = [
  { year: '2010', title: 'Foundation', desc: 'Bharath Vidya Mandir was established with a vision to transform education' },
  { year: '2015', title: 'Expansion', desc: 'Introduced integrated coaching and smart classroom infrastructure' },
  { year: '2018', title: 'Recognition', desc: 'Awarded Best School in Academic Excellence by Tamil Nadu Education Board' },
  { year: '2023', title: 'Innovation', desc: 'Launched digital learning platforms and AI-powered personalized education' },
]

const team = [
  { name: 'Dr. Rajesh Kumar', role: 'Principal & Academic Director', exp: '25+ Years', img: null },
  { name: 'Mrs. Priya Sharma', role: 'Vice Principal', exp: '18+ Years', img: null },
  { name: 'Mr. Arun Patel', role: 'Head of Integrated Coaching', exp: '15+ Years', img: null },
  { name: 'Ms. Lakshmi Iyer', role: 'Student Counselor', exp: '12+ Years', img: null },
]

const stats = [
  { end: 98, suffix: '%', label: 'Board Exam Success Rate' },
  { end: 500, suffix: '+', label: 'Students Enrolled' },
  { end: 50, suffix: '+', label: 'Expert Faculty Members' },
  { end: 15, suffix: '+', label: 'Years of Excellence' },
]

const whyChoose = [
  { Icon: Award, title: 'Proven Track Record', desc: 'Consistent top results in board exams and competitive entrance tests' },
  { Icon: Users, title: 'Expert Faculty', desc: 'Highly qualified teachers with passion for student success' },
  { Icon: TrendingUp, title: 'Holistic Growth', desc: 'Focus on academics, sports, arts, and personality development' },
  { Icon: Sparkles, title: 'Modern Infrastructure', desc: 'Smart classrooms, labs, library, and sports facilities' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function AboutUs({ onEnquireClick }) {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Excellence in Education, Excellence in Life</h1>
            <p>
              Inspiring students to learn, grow, and achieve their full potential in a supportive environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-section about-who">
        <div className="container">
          <motion.div
            className="about-content-split"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-text-block">
              <span className="section-tag">Who We Are</span>
              <h2>A Legacy of Educational Excellence</h2>
              <p>
                Bharath Vidya Mandir is a premier educational institution located in Tenkasi, Tamil Nadu.
                We are committed to providing quality education that combines traditional values with modern
                teaching methodologies.
              </p>
              <p>
                Our school is more than just a place of learning—it's a community where students, teachers,
                and parents work together to create an environment that fosters curiosity, creativity, and
                critical thinking.
              </p>
              <div className="about-highlights">
                <div className="about-highlight-item">
                  <CheckCircle2 size={20} color="var(--teal)" />
                  <span>CBSE Affiliated Institution</span>
                </div>
                <div className="about-highlight-item">
                  <CheckCircle2 size={20} color="var(--teal)" />
                  <span>State-of-the-Art Infrastructure</span>
                </div>
                <div className="about-highlight-item">
                  <CheckCircle2 size={20} color="var(--teal)" />
                  <span>Integrated Coaching Programs</span>
                </div>
              </div>
            </div>
            <div className="about-image-block">
              <div className="about-image-placeholder">
                <BookOpen size={80} color="var(--teal)" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-section about-mission">
        <div className="container">
          <motion.div
            className="about-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Target size={40} color="var(--gold)" strokeWidth={1.8} />
            <span className="section-tag">Our Mission</span>
            <h2>Empowering Students to Excel</h2>
            <p className="about-sub">
              Our mission is to provide holistic education that develops intellectual, emotional, and social
              competencies, preparing students to become responsible global citizens.
            </p>
          </motion.div>

          <motion.div
            className="about-cards-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {missionCards.map(({ Icon, title, desc }, i) => (
              <motion.div key={i} className="about-card" variants={item}>
                <div className="about-card-icon">
                  <Icon size={32} color="var(--teal)" strokeWidth={1.8} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="about-section about-vision">
        <div className="container">
          <motion.div
            className="about-vision-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-vision-icon">
              <Eye size={50} color="var(--white)" strokeWidth={1.8} />
            </div>
            <span className="section-tag" style={{ color: 'var(--gold)' }}>Our Vision</span>
            <h2 style={{ color: 'var(--white)' }}>Building Tomorrow's Leaders Today</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              To be recognized as a leading educational institution that inspires excellence, innovation,
              and integrity. We envision a future where our students become compassionate leaders who
              contribute positively to society and drive meaningful change in the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="about-section about-team">
        <div className="container">
          <motion.div
            className="about-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Our Team</span>
            <h2>Meet Our Expert Educators</h2>
            <p className="about-sub">
              Passionate professionals dedicated to nurturing young minds and inspiring lifelong learning.
            </p>
          </motion.div>

          <motion.div
            className="about-team-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="about-team-card"
                variants={item}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="about-team-img">
                  <Users size={60} color="var(--teal)" strokeWidth={1.5} />
                </div>
                <div className="about-team-info">
                  <h3>{member.name}</h3>
                  <p className="about-team-role">{member.role}</p>
                  <p className="about-team-exp">{member.exp} Experience</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-section about-stats">
        <div className="container">
          <motion.div
            className="about-stats-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="about-stat-item">
                <div className="about-stat-number">
                  <CountUp end={stat.end} duration={2.5} />
                  <span>{stat.suffix}</span>
                </div>
                <p>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section about-why">
        <div className="container">
          <motion.div
            className="about-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Why Choose Us</span>
            <h2>What Sets Us Apart</h2>
            <p className="about-sub">
              Discover the unique advantages that make Bharath Vidya Mandir the preferred choice for parents and students.
            </p>
          </motion.div>

          <motion.div
            className="about-cards-grid about-why-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {whyChoose.map(({ Icon, title, desc }, i) => (
              <motion.div key={i} className="about-why-card" variants={item}>
                <div className="about-why-icon">
                  <Icon size={28} color="var(--teal)" strokeWidth={1.8} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
