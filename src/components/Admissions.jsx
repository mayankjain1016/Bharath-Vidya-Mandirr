import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  GraduationCap, BookOpen, Users, Award, Target, CheckCircle2,
  FileText, Upload, Calendar, Mail, Phone, MapPin, User,
  ChevronDown, Star, ArrowRight, Sparkles, Heart, TrendingUp
} from 'lucide-react'
import './Admissions.css'

const benefits = [
  { Icon: Award, title: 'Expert Faculty', desc: 'Learn from highly qualified and experienced educators' },
  { Icon: BookOpen, title: 'Comprehensive Curriculum', desc: 'CBSE-aligned syllabus with integrated coaching' },
  { Icon: Users, title: 'Small Class Sizes', desc: 'Personalized attention for every student' },
  { Icon: Target, title: 'Proven Results', desc: '98% success rate in board examinations' },
]

const programs = [
  {
    title: 'Academic Excellence',
    desc: 'Strong academic foundation designed to help students achieve their highest potential.',
    features: ['Experienced Faculty', 'Personalized Attention', 'Smart Learning Methods'],
  },
  {
    title: 'Holistic Development',
    desc: 'We focus on academics, personality development, leadership, and life skills.',
    features: ['Sports & Activities', 'Leadership Programs', 'Communication Skills'],
  },
  {
    title: 'Modern Learning Environment',
    desc: 'A technology-enabled campus that makes learning engaging and effective.',
    features: ['Smart Classrooms', 'Digital Learning Tools', 'Interactive Teaching'],
  },
  {
    title: 'Future-Ready Education',
    desc: 'Preparing students for higher education, competitive exams, and successful careers.',
    features: ['Career Guidance', 'Skill Development', 'Competitive Exam Support'],
  },
]

const admissionSteps = [
  { step: '01', title: 'Fill Application Form', desc: 'Complete the online admission form with accurate details' },
  { step: '02', title: 'Submit Documents', desc: 'Upload required documents for verification' },
  { step: '03', title: 'Verification Process', desc: 'Our team will verify your documents and credentials' },
  { step: '04', title: 'Enrollment Confirmation', desc: 'Receive confirmation and complete fee payment' },
  { step: '05', title: 'Start Learning', desc: 'Begin your journey towards academic excellence' },
]

const requirements = [
  { Icon: FileText, title: 'Previous Year Marksheet', desc: 'Latest academic records' },
  { Icon: User, title: 'Birth Certificate', desc: 'Proof of date of birth' },
  { Icon: FileText, title: 'Transfer Certificate', desc: 'From previous school (if applicable)' },
  { Icon: Upload, title: 'Passport Size Photo', desc: 'Recent photograph' },
]

const faqs = [
  {
    q: 'What is the admission process?',
    a: 'Fill out the online application form, submit required documents, complete verification, and pay the admission fee to confirm enrollment.',
  },
  {
    q: 'What documents are required for admission?',
    a: 'Previous year marksheet, birth certificate, transfer certificate (if applicable), Aadhaar card, and passport size photographs.',
  },
  {
    q: 'Is there an entrance test?',
    a: 'For classes 11-12 with integrated coaching, a basic aptitude test may be conducted to assess the student\'s readiness.',
  },
  {
    q: 'What is the fee structure?',
    a: 'Fee structure varies by class and program. Please contact our admissions office for detailed information.',
  },
  {
    q: 'Are scholarships available?',
    a: 'Yes, we offer merit-based scholarships and financial assistance for deserving students. Contact us for more details.',
  },
]

const testimonials = [
  {
    name: 'Mrs. Priya Sharma',
    role: 'Parent',
    text: 'The admission process was smooth and transparent. The staff was very helpful and guided us through every step.',
  },
  {
    name: 'Mr. Rajesh Kumar',
    role: 'Parent',
    text: 'Best decision we made for our child\'s education. The integrated coaching program is exceptional.',
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

export default function Admissions({ onEnquireClick }) {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    school: '',
    class: '',
    fatherName: '',
    fatherMobile: '',
    motherName: '',
    motherMobile: '',
    address: '',
    email: '',
    photo: null,
    aadhaar: null,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    setFormData(prev => ({ ...prev, [name]: files[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Application submitted successfully! Our team will contact you soon.')
  }

  return (
    <div className="admissions-page">

      {/* Admission Form & Programs Section */}
      <section className="adm-section adm-form-programs-section">
        <div className="container">
          <motion.div
            className="adm-section-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Join Our Institution</h2>
            <p className="adm-sub">
              Fill out the form to begin your admission process. Our team will contact you shortly.
            </p>
          </motion.div>

          <div className="adm-form-programs-wrapper">
            {/* Admission Form - Full Width */}
            <motion.div
              className="adm-form-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="adm-form-header">
              </div>

              <form
                className="adm-form"
                onSubmit={handleSubmit}
              >
                <div className="adm-form-grid">
                  <div className="adm-form-group">
                    <label><User size={18} /> Student Name *</label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      placeholder="Enter student's full name"
                      required
                    />
                  </div>

                  <div className="adm-form-group">
                    <label><Calendar size={18} /> Date of Birth *</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="adm-form-group">
                    <label><BookOpen size={18} /> Previous School</label>
                    <input
                      type="text"
                      name="school"
                      value={formData.school}
                      onChange={handleInputChange}
                      placeholder="Enter previous school name"
                    />
                  </div>

                  <div className="adm-form-group">
                    <label><GraduationCap size={18} /> Class Applying For *</label>
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Class</option>
                      <option value="6">Class 6</option>
                      <option value="7">Class 7</option>
                      <option value="8">Class 8</option>
                      <option value="9">Class 9</option>
                      <option value="10">Class 10</option>
                      <option value="11-science">Class 11 (Science)</option>
                      <option value="11-commerce">Class 11 (Commerce)</option>
                      <option value="12-science">Class 12 (Science)</option>
                      <option value="12-commerce">Class 12 (Commerce)</option>
                    </select>
                  </div>

                  <div className="adm-form-group">
                    <label><User size={18} /> Father's Name *</label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleInputChange}
                      placeholder="Enter father's name"
                      required
                    />
                  </div>

                  <div className="adm-form-group">
                    <label><Phone size={18} /> Father's Mobile *</label>
                    <input
                      type="tel"
                      name="fatherMobile"
                      value={formData.fatherMobile}
                      onChange={handleInputChange}
                      placeholder="Enter mobile number"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>

                  <div className="adm-form-group">
                    <label><User size={18} /> Mother's Name *</label>
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleInputChange}
                      placeholder="Enter mother's name"
                      required
                    />
                  </div>

                  <div className="adm-form-group">
                    <label><Phone size={18} /> Mother's Mobile *</label>
                    <input
                      type="tel"
                      name="motherMobile"
                      value={formData.motherMobile}
                      onChange={handleInputChange}
                      placeholder="Enter mobile number"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>

                  <div className="adm-form-group adm-form-full">
                    <label><MapPin size={18} /> Address *</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter complete address"
                      rows="3"
                      required
                    />
                  </div>

                  <div className="adm-form-group adm-form-full">
                    <label><Mail size={18} /> Email ID *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email address"
                      required
                    />
                  </div>

                  <div className="adm-form-group">
                    <label><Upload size={18} /> Passport Size Photo *</label>
                    <input
                      type="file"
                      name="photo"
                      onChange={handleFileChange}
                      accept="image/*"
                      required
                    />
                  </div>

                  <div className="adm-form-group">
                    <label><Upload size={18} /> Aadhaar Card (Optional)</label>
                    <input
                      type="file"
                      name="aadhaar"
                      onChange={handleFileChange}
                      accept="image/*,application/pdf"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-teal adm-form-submit">
                  Submit Application <ArrowRight size={18} />
                </button>
              </form>
            </motion.div>

            {/* Our Programs - Below Form */}
            <motion.div
              className="adm-programs-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="adm-programs-header">
                <h3>Our Programs</h3>
              </div>

              <motion.div
                className="adm-programs-grid"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {programs.map((program, i) => (
                  <motion.div key={i} className="adm-program-card" variants={item}>
                    <div className="adm-program-header">
                      <BookOpen size={28} color="var(--teal)" strokeWidth={1.8} />
                      <h4>{program.title}</h4>
                    </div>
                    <p className="adm-program-desc">{program.desc}</p>
                    <ul className="adm-program-features">
                      {program.features.map((feature, j) => (
                        <li key={j}>
                          <CheckCircle2 size={16} color="var(--teal)" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
