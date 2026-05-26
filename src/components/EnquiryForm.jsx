import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Send, User, Mail, Phone, MessageSquare, GraduationCap } from 'lucide-react'
import './EnquiryForm.css'

export default function EnquiryForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentClass: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
    alert('Thank you for your enquiry! We will contact you soon.')
    onClose()
    setFormData({ name: '', email: '', phone: '', studentClass: '', message: '' })
  }

  if (!isOpen) return null

  return (
    <motion.div
      className="enquiry-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="enquiry-modal"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="enquiry-close" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>

        <div className="enquiry-header">
          <h2>Enquire Now</h2>
          <p>Fill out the form below and we'll get back to you shortly</p>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              <User size={18} />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <Mail size={18} />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              <Phone size={18} />
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="studentClass">
              <GraduationCap size={18} />
              Student's Current Class
            </label>
            <select
              id="studentClass"
              name="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
            >
              <option value="">Select class</option>
              <option value="Class 6">Class 6</option>
              <option value="Class 7">Class 7</option>
              <option value="Class 8">Class 8</option>
              <option value="Class 9">Class 9</option>
              <option value="Class 10">Class 10</option>
              <option value="Class 11">Class 11</option>
              <option value="Class 12">Class 12</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">
              <MessageSquare size={18} />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your enquiry..."
              rows="4"
            />
          </div>

          <button type="submit" className="btn btn-submit">
            <Send size={18} />
            Submit Enquiry
          </button>
        </form>
      </motion.div>
    </motion.div>
  )
}
