import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
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
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  
  const isHomePage = location.pathname === '/'
  const isTransparentOnHome = isHomePage && !isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Sticky Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_2px_20px_rgba(0,0,0,0.02)] py-0' 
          : 'bg-transparent border-transparent py-2'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-24 flex items-center justify-between">
          
          {/* Brand */}
          <NavLink to="/" className="flex items-center gap-4 group">
            <img 
              src={logo} 
              alt="BVM Logo" 
              className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="hidden sm:flex flex-col">
              <span className={`font-extrabold text-[1.1rem] leading-tight tracking-tight transition-colors duration-300 ${isTransparentOnHome ? 'text-white' : (isScrolled ? 'text-slate-900' : 'text-teal-600')}`}>
                Bharath Vidya Mandir
              </span>
              <span className={`text-[0.65rem] font-bold uppercase tracking-widest mt-0.5 transition-colors duration-300 ${isTransparentOnHome ? 'text-teal-100' : 'text-teal-600'}`}>
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
                    `relative text-xs font-bold uppercase tracking-widest transition-colors duration-300 pb-1 ${isTransparentOnHome ? 'text-white' : 'text-teal-600'}
                    after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-teal-600 after:transition-transform after:duration-300 after:origin-left
                    ${isActive 
                      ? 'after:scale-x-100' 
                      : 'after:scale-x-0 hover:after:scale-x-100'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-5">
            <button 
              onClick={onEnquireClick} 
              className="hidden md:block bg-teal-600 text-white px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.1em] shadow-md shadow-teal-600/20 transition-all hover:bg-teal-700 hover:shadow-lg hover:-translate-y-0.5"
            >
              Enquire Now
            </button>
            <button
              className={`lg:hidden p-2 rounded-full transition-colors ${isScrolled ? 'text-slate-900 hover:bg-slate-100' : (isTransparentOnHome ? 'text-white hover:bg-white/10' : 'text-teal-600 hover:bg-slate-100')}`}
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
            className="fixed top-20 left-0 right-0 z-[90] bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-2xl p-6"
            initial={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-2 mb-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    className="block text-base font-bold uppercase tracking-widest text-slate-600 hover:text-teal-600 transition-colors py-3 px-4 rounded-xl hover:bg-teal-50"
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
              className="w-full bg-teal-600 text-white px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-[0.1em] text-center shadow-lg shadow-teal-600/20"
            >
              Enquire Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}