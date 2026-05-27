import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import './CallToActionBanner.css'

export default function CallToActionBanner({ onEnquireClick }) {
  return (
    <section className="cta">
      <div className="container">
        <motion.div
          className="cta-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cta-heading">Ready to Give Your Child the Best Start?</h2>
          <p className="cta-sub">
            Join thousands of families who trust Bharath Vidya Mandir for their child's future.
          </p>
          <div className="cta-btns">
            <button onClick={onEnquireClick} className="btn btn-teal">
              Book a Campus Tour <ArrowRight size={17} />
            </button>
            <button onClick={onEnquireClick} className="btn btn-outline-teal">
              <Phone size={17} /> Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
