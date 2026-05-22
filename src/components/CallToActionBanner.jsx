import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import './CallToActionBanner.css'

export default function CallToActionBanner() {
  return (
    <section className="cta">
      <motion.div
        className="container cta-inner"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="cta-heading">Ready to Give Your Child the Best Start?</h2>
        <p className="cta-sub">
          Join thousands of families who trust Bharath Vidya Mandir for their child's future.
        </p>
        <div className="cta-btns">
          <a href="#contact" className="btn btn-white-teal">
            Book a Campus Tour <ArrowRight size={17} />
          </a>
          <a href="#contact" className="btn btn-outline-white-teal">
            <Phone size={17} /> Speak with Admission Counsellor
          </a>
        </div>
      </motion.div>
    </section>
  )
}
