import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/BVM logo/BVMLogo.jpeg'
import './Navbar.css'

const navLinks = [
  { label: 'Home',                href: '#home', onClick: null },
  { label: 'About Us',            href: '#about', onClick: null },
  { label: 'Achievements',        href: '#achievements', onClick: null },
  { label: 'Integrated Coaching', href: '#coaching', onClick: null },
  { label: 'Admissions',          href: '#admissions', onClick: null },
  { label: 'Blog',                href: '#blog', onClick: 'blog' },
  { label: 'Contact Us',          href: '#contact', onClick: null },
]

export default function Navbar({ onEnquireClick, onBlogClick }) {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight * 0.85
      setScrolled(window.scrollY > heroHeight)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container nav-inner">
          {/* Logo */}
          <a href="#home" className="nav-brand">
            <img src={logo} alt="BVM Logo" className="nav-logo-img" />
            <div className="nav-brand-text">
              <span className="nav-school-name">Bharath Vidya Mandir</span>
              <span className="nav-school-sub">Tenkasi, Tamil Nadu</span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="nav-links">
            {navLinks.map(l => (
              <li key={l.href}>
                {l.onClick === 'blog' ? (
                  <button onClick={onBlogClick} className="nav-link nav-link-btn">
                    {l.label}
                  </button>
                ) : (
                  <a href={l.href} className="nav-link">{l.label}</a>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button onClick={onEnquireClick} className="btn btn-teal nav-cta">Enquire Now</button>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-links">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {l.onClick === 'blog' ? (
                    <button onClick={() => { onBlogClick(); setOpen(false); }} className="mobile-link mobile-link-btn">
                      {l.label}
                    </button>
                  ) : (
                    <a href={l.href} className="mobile-link" onClick={() => setOpen(false)}>
                      {l.label}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
            <button onClick={() => { onEnquireClick(); setOpen(false); }} className="btn btn-teal mobile-cta">
              Enquire Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
