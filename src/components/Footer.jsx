import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import logo from '../assets/BVM logo/BVMLogo.jpeg'
import './Footer.css'

const quickLinks = [
  { label: 'Home',                href: '#home' },
  { label: 'About Us',            href: '#about' },
  { label: 'Achievements',        href: '#achievements' },
  { label: 'Integrated Coaching', href: '#coaching' },
  { label: 'Admissions',          href: '#admissions' },
  { label: 'Blog',                href: '#blog' },
  { label: 'Contact Us',          href: '#contact' },
]

const socials = [
  { Icon: FaFacebookF,  href: '#', label: 'Facebook' },
  { Icon: FaInstagram,  href: '#', label: 'Instagram' },
  { Icon: FaYoutube,    href: '#', label: 'YouTube' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Col 1: Brand */}
        <motion.div className="footer-col" {...fadeUp(0)}>
          <div className="footer-brand">
            <img src={logo} alt="BVM Logo" className="footer-logo" />
            <div>
              <p className="footer-school-name">Bharath Vidya Mandir</p>
              <p className="footer-tagline">Inspire. Ignite. Transform.</p>
            </div>
          </div>
          <p className="footer-desc">
            Providing quality education and holistic development for over two decades with an
            unwavering commitment to academic excellence and character building.
          </p>
          <div className="footer-socials">
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} className="social-btn" aria-label={label} title={label}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Col 2: Quick Links */}
        <motion.div className="footer-col" {...fadeUp(0.1)}>
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="footer-link">{l.label}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Col 3: Contact */}
        <motion.div className="footer-col" {...fadeUp(0.2)}>
          <h4 className="footer-col-title">Contact Info</h4>
          <div className="footer-contact">
            <div className="contact-row">
              <MapPin size={16} className="contact-icon" />
              <span>Bharath Vidya Mandir, Tenkasi, Tamil Nadu — 627 811</span>
            </div>
            <div className="contact-row">
              <Phone size={16} className="contact-icon" />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
            <div className="contact-row">
              <Mail size={16} className="contact-icon" />
              <a href="mailto:info@bvmtenkasi.edu.in">info@bvmtenkasi.edu.in</a>
            </div>
          </div>
        </motion.div>

        {/* Col 4: Map */}
        <motion.div className="footer-col" {...fadeUp(0.3)}>
          <h4 className="footer-col-title">Find Us</h4>
          <div className="footer-map">
            <MapPin size={32} color="var(--gold)" />
            <p>Campus Map</p>
            <span>Tenkasi, Tamil Nadu</span>
          </div>
        </motion.div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Bharath Vidya Mandir, Tenkasi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
