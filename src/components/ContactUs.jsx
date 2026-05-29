import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Phone, Mail, MapPin, Clock, Send, User, MessageSquare,
  MessageCircle, ChevronDown,
  Navigation, ArrowRight, Sparkles, CheckCircle2
} from 'lucide-react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import './ContactUs.css'

const contactInfo = [
  {
    Icon: Phone,
    title: 'Phone Number',
    info: '+91 98765 43210',
    subInfo: '+91 98765 43211',
    color: 'var(--teal)',
  },
  {
    Icon: Mail,
    title: 'Email Address',
    info: 'info@bharathvidyamandir.edu',
    subInfo: 'admissions@bharathvidyamandir.edu',
    color: 'var(--gold)',
  },
  {
    Icon: MapPin,
    title: 'Office Address',
    info: 'Bharath Vidya Mandir',
    subInfo: 'Tenkasi, Tamil Nadu - 627811',
    color: 'var(--teal)',
  },
  {
    Icon: Clock,
    title: 'Working Hours',
    info: 'Mon - Fri: 8:00 AM - 5:00 PM',
    subInfo: 'Sat: 8:00 AM - 1:00 PM',
    color: 'var(--gold)',
  },
]

const socialMedia = [
  { Icon: FaFacebookF, name: 'Facebook', link: '#', color: '#1877F2' },
  { Icon: FaInstagram, name: 'Instagram', link: '#', color: '#E4405F' },
  { Icon: FaYoutube, name: 'YouTube', link: '#', color: '#FF0000' },
  { Icon: MessageCircle, name: 'WhatsApp', link: '#', color: '#25D366' },
]

const faqs = [
  {
    q: 'What are your office hours?',
    a: 'Our office is open Monday to Friday from 8:00 AM to 5:00 PM, and Saturday from 8:00 AM to 1:00 PM. We are closed on Sundays and public holidays.',
  },
  {
    q: 'How can I schedule a campus visit?',
    a: 'You can schedule a campus visit by calling us, sending an email, or filling out the contact form. Our admissions team will get back to you within 24 hours.',
  },
  {
    q: 'Do you offer virtual consultations?',
    a: 'Yes, we offer virtual consultations via video call for parents who cannot visit in person. Please contact us to schedule an appointment.',
  },
  {
    q: 'How quickly will I receive a response?',
    a: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.',
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

export default function ContactUs({ onEnquireClick }) {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="contact-hero-icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              <MessageSquare size={60} color="var(--white)" strokeWidth={1.5} />
            </motion.div>
            <h1>Contact Us</h1>
            <p>
              We're here to help! Reach out to us for any questions, inquiries, or assistance.
              Our team is ready to support you on your educational journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="contact-section contact-intro">
        <div className="container">
          <motion.div
            className="contact-intro-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">Get In Touch</span>
            <h2>We'd Love to Hear From You</h2>
            <p>
              Whether you have questions about admissions, our programs, or just want to learn more 
              about Bharath Vidya Mandir, we're here to help. Feel free to reach out through any of 
              the channels below, and our dedicated team will respond promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-section contact-info-section">
        <div className="container">
          <motion.div
            className="contact-info-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {contactInfo.map(({ Icon, title, info, subInfo, color }, i) => (
              <motion.div key={i} className="contact-info-card" variants={item}>
                <div className="contact-info-icon" style={{ background: `${color}15` }}>
                  <Icon size={32} color={color} strokeWidth={1.8} />
                </div>
                <h3>{title}</h3>
                <p className="contact-info-main">{info}</p>
                <p className="contact-info-sub">{subInfo}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-section contact-form-section">
        <div className="container">
          <div className="contact-form-wrapper">
            {/* Contact Form */}
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="contact-form-header">
                <span className="section-tag">Send Us a Message</span>
                <h2>Contact Form</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              {formSubmitted ? (
                <motion.div
                  className="contact-form-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle2 size={60} color="var(--teal)" strokeWidth={1.5} />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting us. We'll respond within 24 hours.</p>
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-group">
                    <label><User size={18} /> Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label><Mail size={18} /> Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="contact-form-group">
                      <label><Phone size={18} /> Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label><MessageSquare size={18} /> Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label><MessageSquare size={18} /> Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message here..."
                      rows="5"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-teal contact-form-submit">
                    Send Message <Send size={18} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map */}
            <motion.div
              className="contact-map-container"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="contact-map-header">
                <span className="section-tag">Find Us</span>
                <h2>Our Location</h2>
              </div>

              <div className="contact-map">
                <div className="contact-map-placeholder">
                  <MapPin size={60} color="var(--teal)" strokeWidth={1.5} />
                  <p>Map Location</p>
                </div>
                {/* Replace with actual Google Maps embed */}
                {/* <iframe 
                  src="https://www.google.com/maps/embed?pb=..."
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                /> */}
              </div>

              <div className="contact-map-details">
                <h3>Bharath Vidya Mandir</h3>
                <p>
                  <MapPin size={18} />
                  Tenkasi, Tamil Nadu - 627811, India
                </p>
                <button className="btn btn-outline-teal">
                  <Navigation size={18} />
                  Get Directions
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="contact-section contact-social">
        <div className="container">
          <motion.div
            className="contact-social-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles size={40} color="var(--gold)" strokeWidth={1.8} />
            <span className="section-tag">Connect With Us</span>
            <h2>Follow Us on Social Media</h2>
            <p>Stay updated with our latest news, events, and achievements.</p>

            <div className="contact-social-icons">
              {socialMedia.map(({ Icon, name, link, color }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  className="contact-social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ '--social-color': color }}
                >
                  <Icon size={28} strokeWidth={1.8} />
                  <span>{name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="contact-section contact-faqs">
        <div className="container">
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
            <p className="contact-sub">
              Quick answers to questions you may have about contacting us.
            </p>
          </motion.div>

          <motion.div
            className="contact-faqs-list"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {faqs.map((faq, i) => (
              <div key={i} className="contact-faq-item">
                <button
                  className={`contact-faq-question ${openFaq === i ? 'active' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={20} />
                </button>
                {openFaq === i && (
                  <motion.div
                    className="contact-faq-answer"
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
      <section className="contact-cta">
        <div className="container">
          <motion.div
            className="contact-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Ready to Get Started?</h2>
            <p>
              Take the first step towards excellence. Contact us today and discover how 
              Bharath Vidya Mandir can help your child achieve their full potential.
            </p>
            <div className="contact-cta-buttons">
              <button className="btn btn-white-teal" onClick={onEnquireClick}>
                Contact Us Today <ArrowRight size={18} />
              </button>
              <button className="btn btn-outline-white-teal">
                <Phone size={18} />
                Call Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
