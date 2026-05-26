import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'
import './Gallery.css'

// Import images from Gallery folder
import img1 from '../assets/Gallery/IMG_2034.JPG'
import img2 from '../assets/Gallery/IMG_2041.JPG'
import img3 from '../assets/Gallery/IMG_2046.JPG'
import img4 from '../assets/Gallery/IMG_2050.JPG'
import img5 from '../assets/Gallery/IMG_2052.JPG'

const galleryImages = [
  { id: 1, src: img1, title: 'Campus Life' },
  { id: 2, src: img2, title: 'Learning Environment' },
  { id: 3, src: img3, title: 'Student Activities' },
  { id: 4, src: img4, title: 'Modern Facilities' },
  { id: 5, src: img5, title: 'Academic Excellence' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
}

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <Camera size={14} style={{ display: 'inline', marginRight: 6 }} />
            Campus Gallery
          </span>
          <h2>Glimpses of Our Campus</h2>
          <p className="gallery-sub">
            Experience the vibrant life at Bharath Vidya Mandir through our campus moments
          </p>
        </motion.div>

        <motion.div
          className="gallery-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="gallery-item"
              variants={item}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="gallery-image-wrapper">
                <img src={image.src} alt={image.title} className="gallery-image" />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <Camera size={32} />
                    <p className="gallery-title">{image.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
