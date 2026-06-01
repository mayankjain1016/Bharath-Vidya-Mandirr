import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/BVM logo/BVMLogo.jpeg'
import './Navbar.css'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Integrated Coaching', path: '/#coaching' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Blog', path: '/blog' },
]

export default function Navbar({ onEnquireClick }) {
  const [open, setOpen] = useState(false)
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
          <NavLink to="/" className="nav-brand">
            <img src={logo} alt="BVM Logo" className="nav-logo-img" />

            <div className="nav-brand-text">
              <span className="nav-school-name block">
                Bharath Vidya Mandir
              </span>
              <span className="nav-school-sub block">
                Tenkasi, Tamil Nadu
              </span>
            </div>
          </NavLink>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} className="nav-link">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button onClick={onEnquireClick} className="btn btn-teal nav-cta">
            Enquire Now
          </button>

          <button
            className="nav-hamburger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

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
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <NavLink
                    to={link.path}
                    className="mobile-link"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <button
              onClick={() => {
                onEnquireClick()
                setOpen(false)
              }}
              className="btn btn-teal mobile-cta"
            >
              Enquire Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}