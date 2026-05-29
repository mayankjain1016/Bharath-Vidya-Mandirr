import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  GraduationCap, BookOpen, Users, Award, Target, Clock,
  TrendingUp, CheckCircle2, ArrowRight, Zap, Heart, Brain,
  Monitor, FileText, BarChart, MessageCircle, Calendar,
  ChevronDown, Star, Trophy, Sparkles, User
} from 'lucide-react'
import CountUp from './CountUp'
import './IntegratedCoachingPage.css'

const benefits = [
  { Icon: Clock, title: 'Time Efficiency', desc: 'Save time by combining school and competitive exam preparation' },
  { Icon: BookOpen, title: 'Structured Learning', desc: 'Well-organized curriculum aligned with both boards and entrance exams' },
  { Icon: Users, title: 'Expert Faculty', desc: 'Learn from experienced teachers specialized in competitive exams' },
  { Icon: BarChart, title: 'Regular Assessments', desc: 'Continuous evaluation through tests and mock exams' },
  { Icon: Heart, title: 'Personalized Mentorship', desc: 'Individual attention and customized study plans' },
  { Icon: MessageCircle, title: 'Doubt-Clearing Sessions', desc: 'Dedicated sessions to resolve all your queries' },
]

const programs = [
  {
    Icon: Trophy,
    title: 'NEET Integrated Program',
    desc: 'Comprehensive preparation for NEET along with Class 11-12 CBSE curriculum',
    duration: '2 Years',
    color: 'var(--teal)',
  },
  {
    Icon: Award,
    title: 'JEE Integrated Program',
    desc: 'Complete JEE Main & Advanced coaching integrated with school studies',
    duration: '2 Years',
    color: 'var(--gold)',
  },
  {
    Icon: BookOpen,
    title: 'Foundation Courses',
    desc: 'Build strong fundamentals for Classes 8-10 students',
    duration: '1-3 Years',
    color: 'var(--teal)',
  },
  {
    Icon: Star,
    title: 'Olympiad Preparation',
    desc: 'Specialized training for national and international Olympiads',
    duration: 'Flexible',
    color: 'var(--gold)',
  },
]

const academicModel = [
  { step: '1', title: 'School Curriculum', desc: 'Complete CBSE syllabus coverage' },
  { step: '2', title: 'Competitive Topics', desc: 'Advanced concepts for entrance exams' },
  { step: '3', title: 'Practice & Tests', desc: 'Regular assessments and mock tests' },
  { step: '4', title: 'Performance Analysis', desc: 'Detailed feedback and improvement plans' },
  { step: '5', title: 'Success', desc: 'Excel in both boards and entrance exams' },
]

const faculty = [
  { name: 'Dr. Rajesh Kumar', subject: 'Physics', exp: '15+ Years', qualification: 'Ph.D. in Physics' },
  { name: 'Mrs. Priya Sharma', subject: 'Chemistry', exp: '12+ Years', qualification: 'M.Sc. Chemistry' },
  { name: 'Mr. Arun Patel', subject: 'Mathematics', exp: '14+ Years', qualification: 'M.Sc. Mathematics' },
  { name: 'Dr. Lakshmi Iyer', subject: 'Biology', exp: '10+ Years', qualification: 'Ph.D. in Biology' },
]

const successStories = [
  { name: 'Priya Sharma', achievement: 'NEET AIR 156', score: '720/720', college: 'AIIMS Delhi' },
  { name: 'Arjun Kumar', achievement: 'JEE Advanced AIR 342', score: '342/360', college: 'IIT Bombay' },
  { name: 'Lakshmi Iyer', achievement: 'NEET State Rank 3', score: '715/720', college: 'CMC Vellore' },
]

const stats = [
  { end: 500, suffix: '+', label: 'Students Enrolled', Icon: Users },
  { end: 150, suffix: '+', label: 'NEET Selections', Icon: Trophy },
  { end: 120, suffix: '+', label: 'JEE Selections', Icon: Award },
  { end: 95, suffix: '%', label: 'Success Rate', Icon: TrendingUp },
]

const facilities = [
  { Icon: Monitor, title: 'Smart Classrooms', desc: 'Interactive digital boards and multimedia content' },
  { Icon: FileText, title: 'Study Material', desc: 'Comprehensive notes and practice materials' },
  { Icon: BarChart, title: 'Test Series', desc: 'Regular mock tests and assessments' },
  { Icon: BookOpen, title: 'Digital Learning', desc: 'Online resources and recorded lectures' },
  { Icon: BookOpen, title: 'Library Access', desc: 'Extensive collection of reference books' },
  { Icon: MessageCircle, title: 'Counseling Sessions', desc: 'Career guidance and mentorship' },
]

const admissionSteps = [
  { step: '01', title: 'Registration', desc: 'Fill the online application form' },
  { step: '02', title: 'Counseling', desc: 'Meet with our academic counselors' },
  { step: '03', title: 'Assessment', desc: 'Take the entrance assessment test' },
  { step: '04', title: 'Enrollment', desc: 'Complete admission formalities' },
  { step: '05', title: 'Start Learning', desc: 'Begin your success journey' },
]

const faqs = [
  {
    q: 'What is Integrated Coaching?',
    a: 'Integrated coaching combines regular school curriculum with competitive exam preparation, allowing students to prepare for both simultaneously without compromising on either.',
  },
  {
    q: 'Who can apply for integrated coaching?',
    a: 'Students from Classes 8-12 who want to prepare for competitive exams like NEET, JEE, or Olympiads while continuing their regular school education.',
  },
  {
    q: 'Is coaching provided during school hours?',
    a: 'No, integrated coaching is scheduled after school hours and on weekends to ensure it doesn\'t interfere with regular school attendance.',
  },
  {
    q: 'How are assessments conducted?',
    a: 'We conduct regular chapter tests, monthly assessments, and full-length mock tests that simulate actual exam patterns.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function IntegratedCoachingPage({ onEnquireClick }) {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="coaching-page">
      {/* Hero Section */}
      <section className="coaching-hero">
        <div className="coaching-hero-overlay" />
        <div className="container">
          <motion.div
            className="coaching-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="coaching-hero-icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              <GraduationCap size={70} color="var(--white)" strokeWidth={1.5} />
            </motion.div>
            <h1>Integrated Coaching Program</h1>
            <p className="coaching-hero-subtitle">
              Academic Excellence Combined with Competitive Exam Preparation
            </p>
            <div className="coaching-hero-buttons">
              <button className="btn btn-white-teal" onClick={onEnquireClick}>
                Enroll Now <ArrowRight size={18} />
              </button>
              <button className="btn btn-outline-white-teal">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Integrated Coaching */}
      <section className="coaching-section coaching-about">
        <div className="container">
          <motion.div
            className="coaching-about-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="coaching-about-text">
              <span className="section-tag">What is Integrated Coaching?</span>
              <h2>The Perfect Blend of School & Competitive Exam Preparation</h2>
              <p>
                Our Integrated Coaching Program is a revolutionary approach that seamlessly combines 
                regular school curriculum with competitive exam preparation. Students can pursue their 
                CBSE board studies while simultaneously preparing for NEET, JEE, or other entrance exams.
              </p>
              <p>
                This unique methodology ensures that students don't have to choose between school 
                education and competitive exam coaching. Our expert faculty designs a comprehensive 
                curriculum that covers both aspects efficiently, saving time and maximizing results.
              </p>
              <div className="coaching-about-highlights">
                <div className="coaching-highlight-item">
                  <CheckCircle2 size={20} color="var(--teal)" />
                  <span>Synchronized Curriculum</span>
                </div>
                <div className="coaching-highlight-item">
                  <CheckCircle2 size={20} color="var(--teal)" />
                  <span>Expert Faculty Guidance</span>
                </div>
                <div className="coaching-highlight-item">
                  <CheckCircle2 size={20} color="var(--teal)" />
                  <span>Proven Success Track Record</span>
                </div>
              </div>
            </div>
            <div className="coaching-about-image">
              <div className="coaching-about-placeholder">
                <BookOpen size={100} color="var(--teal)" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="coaching-section coaching-benefits">
        <div className="container">
          <motion.div
            className="coaching-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Our Advantages</span>
            <h2>Why Choose Integrated Coaching?</h2>
            <p className="coaching-sub">
              Discover the benefits that make our integrated approach the smart choice for ambitious students.
            </p>
          </motion.div>

          <motion.div
            className="coaching-benefits-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {benefits.map(({ Icon, title, desc }, i) => (
              <motion.div key={i} className="coaching-benefit-card" variants={item}>
                <div className="coaching-benefit-icon">
                  <Icon size={32} color="var(--teal)" strokeWidth={1.8} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="coaching-section coaching-programs">
        <div className="container">
          <motion.div
            className="coaching-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Our Programs</span>
            <h2>Programs Offered</h2>
            <p className="coaching-sub">
              Choose the program that aligns with your career goals and aspirations.
            </p>
          </motion.div>

          <motion.div
            className="coaching-programs-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {programs.map(({ Icon, title, desc, duration, color }, i) => (
              <motion.div key={i} className="coaching-program-card" variants={item}>
                <div className="coaching-program-icon" style={{ background: `${color}15` }}>
                  <Icon size={40} color={color} strokeWidth={1.8} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="coaching-program-duration">
                  <Clock size={16} />
                  <span>{duration}</span>
                </div>
                <button className="coaching-program-btn">
                  Learn More <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Academic Model */}
      <section className="coaching-section coaching-model">
        <div className="container">
          <motion.div
            className="coaching-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Zap size={40} color="var(--gold)" strokeWidth={1.8} />
            <span className="section-tag">Our Methodology</span>
            <h2>Academic + Competitive Preparation Model</h2>
            <p className="coaching-sub">
              A systematic approach that ensures success in both school and entrance exams.
            </p>
          </motion.div>

          <div className="coaching-model-timeline">
            {academicModel.map((step, i) => (
              <motion.div
                key={i}
                className="coaching-model-step"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="coaching-model-number">{step.step}</div>
                <div className="coaching-model-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="coaching-section coaching-faculty">
        <div className="container">
          <motion.div
            className="coaching-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Expert Guidance</span>
            <h2>Faculty & Mentorship</h2>
            <p className="coaching-sub">
              Learn from experienced educators who are passionate about your success.
            </p>
          </motion.div>

          <motion.div
            className="coaching-faculty-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {faculty.map((member, i) => (
              <motion.div key={i} className="coaching-faculty-card" variants={item}>
                <div className="coaching-faculty-img">
                  <User size={60} color="var(--teal)" strokeWidth={1.5} />
                </div>
                <h3>{member.name}</h3>
                <p className="coaching-faculty-subject">{member.subject}</p>
                <p className="coaching-faculty-qual">{member.qualification}</p>
                <p className="coaching-faculty-exp">{member.exp} Experience</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="coaching-section coaching-success">
        <div className="container">
          <motion.div
            className="coaching-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Star size={40} color="var(--gold)" strokeWidth={1.8} />
            <span className="section-tag">Our Pride</span>
            <h2>Student Success Stories</h2>
            <p className="coaching-sub">
              Celebrating the achievements of our brilliant students who made their dreams come true.
            </p>
          </motion.div>

          <motion.div
            className="coaching-success-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {successStories.map((student, i) => (
              <motion.div key={i} className="coaching-success-card" variants={item}>
                <div className="coaching-success-badge">
                  <Trophy size={24} color="var(--gold)" fill="var(--gold)" />
                </div>
                <div className="coaching-success-img">
                  <GraduationCap size={50} color="var(--teal)" strokeWidth={1.5} />
                </div>
                <h3>{student.name}</h3>
                <p className="coaching-success-achievement">{student.achievement}</p>
                <div className="coaching-success-score">{student.score}</div>
                <p className="coaching-success-college">{student.college}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="coaching-section coaching-stats">
        <div className="coaching-stats-overlay" />
        <div className="container">
          <motion.div
            className="coaching-stats-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Performance Statistics</h2>
            <p>Numbers that speak for our excellence and commitment</p>
            <div className="coaching-stats-grid">
              {stats.map((stat, i) => (
                <div key={i} className="coaching-stat-item">
                  <div className="coaching-stat-icon">
                    <stat.Icon size={32} color="var(--gold)" strokeWidth={1.8} />
                  </div>
                  <div className="coaching-stat-number">
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

      {/* Facilities */}
      <section className="coaching-section coaching-facilities">
        <div className="container">
          <motion.div
            className="coaching-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">World-Class Infrastructure</span>
            <h2>Facilities & Learning Environment</h2>
            <p className="coaching-sub">
              State-of-the-art facilities designed to enhance your learning experience.
            </p>
          </motion.div>

          <motion.div
            className="coaching-facilities-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {facilities.map(({ Icon, title, desc }, i) => (
              <motion.div key={i} className="coaching-facility-card" variants={item}>
                <div className="coaching-facility-icon">
                  <Icon size={28} color="var(--teal)" strokeWidth={1.8} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="coaching-section coaching-admission">
        <div className="container">
          <motion.div
            className="coaching-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Join Us</span>
            <h2>Admission Process</h2>
            <p className="coaching-sub">
              Simple and transparent admission process to get you started quickly.
            </p>
          </motion.div>

          <div className="coaching-admission-steps">
            {admissionSteps.map((step, i) => (
              <motion.div
                key={i}
                className="coaching-admission-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="coaching-admission-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="coaching-section coaching-faqs">
        <div className="container">
          <motion.div
            className="coaching-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Got Questions?</span>
            <h2>Frequently Asked Questions</h2>
            <p className="coaching-sub">
              Find answers to common questions about our integrated coaching program.
            </p>
          </motion.div>

          <motion.div
            className="coaching-faqs-list"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {faqs.map((faq, i) => (
              <div key={i} className="coaching-faq-item">
                <button
                  className={`coaching-faq-question ${openFaq === i ? 'active' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={20} />
                </button>
                {openFaq === i && (
                  <motion.div
                    className="coaching-faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="coaching-cta">
        <div className="container">
          <motion.div
            className="coaching-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles size={50} color="var(--gold)" strokeWidth={1.5} />
            <h2>Start Your Success Journey Today</h2>
            <p>
              Join thousands of successful students who chose integrated coaching and achieved 
              their dreams. Your success story begins here.
            </p>
            <div className="coaching-cta-buttons">
              <button className="btn btn-white-teal" onClick={onEnquireClick}>
                Apply Now <ArrowRight size={18} />
              </button>
              <button className="btn btn-outline-white-teal" onClick={onEnquireClick}>
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
