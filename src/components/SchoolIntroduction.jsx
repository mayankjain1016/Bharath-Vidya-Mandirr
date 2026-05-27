import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './SchoolIntroduction.css'
import schoolImage from '../assets/HomePageImg.jpeg'

export default function SchoolIntroduction() {
  return (
    <section className="school-intro">
      <div className="container school-intro-inner">
        {/* ── Left: Image ── */}
        <motion.div
          className="intro-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="intro-image-container">
            <img 
              src={schoolImage} 
              alt="Bharath Vidya Mandir School" 
              className="intro-image"
            />
            <div className="image-overlay"></div>
          </div>
        </motion.div>

        {/* ── Right: Content ── */}
        <div className="intro-content">
          {/* Header */}
          <div className="intro-header">
            <motion.span 
              className="intro-tag"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Our Institution
            </motion.span>
            
            <motion.h2 
              className="intro-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Where Excellence Meets Innovation
            </motion.h2>
            
            <motion.p 
              className="intro-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Bharath Vidya Mandir is a premier educational institution dedicated to nurturing
              brilliant minds and developing well-rounded individuals. We combine academic rigor with
              holistic development, ensuring every student discovers their true potential.
            </motion.p>
          </div>

          {/* Main Description */}
          <div className="intro-description">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              With over two decades of educational excellence, we've established ourselves as a
              beacon of quality learning in the region. Our comprehensive curriculum integrates
              classical wisdom with modern pedagogical approaches, creating an environment where
              curiosity thrives and excellence becomes the standard.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              From cutting-edge laboratories to world-class sports facilities, we provide an
              enriched ecosystem that empowers students to excel in academics, arts, and athletics.
              Our distinguished faculty brings passion and expertise to every classroom, transforming
              learning into an inspiring journey of discovery.
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.a 
            href="#about" 
            className="btn btn-teal intro-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Explore Our Vision <ArrowRight size={17} />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
