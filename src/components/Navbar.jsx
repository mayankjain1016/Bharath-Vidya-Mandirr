import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/BVM logo/BVMLogo.jpeg'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Blog', path: '/blog' },
]

export default function Navbar({ onEnquireClick }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Sticky White Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 h-20 flex items-center justify-between">
          
          {/* Brand */}
          <NavLink to="/" className="flex items-center gap-4 group">
            <img 
              src={logo} 
              alt="BVM Logo" 
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-extrabold text-slate-900 text-lg leading-tight tracking-tight">
                Bharath Vidya Mandir
              </span>
              <span className="text-[0.65rem] font-bold text-teal-600 uppercase tracking-widest">
                Tenkasi, Tamil Nadu
              </span>
            </div>
          </NavLink>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => 
                    `text-xs font-bold uppercase tracking-widest transition-colors duration-300 hover:text-teal-600 ${
                      isActive ? 'text-teal-600' : 'text-slate-600'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button 
              onClick={onEnquireClick} 
              className="hidden md:block bg-teal-600 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-[0.1em] transition-colors hover:bg-teal-700"
            >
              Enquire Now
            </button>
            <button
              className="lg:hidden text-slate-900 p-2"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-20 left-0 right-0 z-[90] bg-white border-b border-slate-100 shadow-xl p-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-4 mb-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    className="block text-lg font-bold text-slate-900 hover:text-teal-600 transition-colors py-2 border-b border-slate-50"
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
              className="w-full bg-teal-600 text-white px-6 py-4 text-sm font-bold uppercase tracking-[0.1em] text-center"
            >
              Enquire Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}