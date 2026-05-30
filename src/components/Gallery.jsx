import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'
import './Gallery.css'

// Import images from Gallery folder
import img1 from '../assets/Gallery/222f3552-0488-4c3c-985f-2dc0a2ecdff9.jfif'
import img2 from '../assets/Gallery/50ecdf4c-c3f9-4fce-a235-fbbae8475f01.jfif'
import img3 from '../assets/Gallery/556293ea-3c6b-404a-ad84-426647ab7110.jfif'
import img4 from '../assets/Gallery/67b6f4f6-6442-460e-8680-32748a807250.jfif'
import img5 from '../assets/Gallery/6a1b745f-8bad-45eb-931e-dc50fda23f20.jfif'

const galleryImages = [
  { id: 1, src: img1, title: 'Campus Life' },
  { id: 2, src: img2, title: 'Learning Environment' },
  { id: 3, src: img3, title: 'Student Activities' },
  { id: 4, src: img4, title: 'Modern Facilities' },
  { id: 5, src: img5, title: 'Academic Excellence' },
]

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

          <h2>Glimpses of Our Campus</h2>
          <p className="gallery-sub">
            Experience the vibrant life at Bharath Vidya Mandir through our campus moments.
          </p>
        </motion.div>

        <motion.div
          className="gallery-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="gallery-item"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="gallery-image-wrapper">
                <img src={image.src} alt={image.title} className="gallery-image" />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <Camera size={28} />
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