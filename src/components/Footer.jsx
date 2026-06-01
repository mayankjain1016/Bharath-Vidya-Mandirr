import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
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
  { Icon: FaTwitter,    href: '#', label: 'Twitter' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-6 border-t border-slate-900 overflow-hidden font-sans">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-teal-900/20 blur-[100px] rounded-[100%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Footer Top Section (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Brand Info - Spans 4 cols on large screens */}
          <motion.div className="lg:col-span-4" {...fadeUp(0)}>
            <div className="flex items-center gap-5 mb-8">
              <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center">
                <img src={logo} alt="BVM Logo" className="max-w-full max-h-full object-contain rounded-xl" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white leading-tight">Bharath Vidya <br/>Mandir</h3>
                <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mt-1.5">Inspire. Ignite. Transform.</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 pr-4">
              Providing quality education and holistic development for over two decades with an
              unwavering commitment to academic excellence and character building.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-300 hover:bg-teal-600 hover:text-white hover:border-teal-600 hover:-translate-y-1" aria-label={label} title={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Spans 3 cols */}
          <motion.div className="lg:col-span-3 lg:pl-8" {...fadeUp(0.1)}>
            <h4 className="text-white text-sm font-extrabold uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="group flex items-center text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors">
                    <ArrowRight size={14} className="opacity-0 -ml-4 mr-2 transition-all group-hover:opacity-100 group-hover:ml-0 text-teal-400" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - Spans 3 cols */}
          <motion.div className="lg:col-span-3" {...fadeUp(0.2)}>
            <h4 className="text-white text-sm font-extrabold uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">Contact Info</h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 flex-shrink-0 mt-1">
                  <MapPin size={14} />
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Bharath Vidya Mandir, <br/>Tenkasi, Tamil Nadu — 627 811
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 flex-shrink-0">
                  <Phone size={14} />
                </div>
                <a href="tel:+919876543210" className="text-sm text-slate-400 hover:text-white transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 flex-shrink-0">
                  <Mail size={14} />
                </div>
                <a href="mailto:info@bvmtenkasi.edu.in" className="text-sm text-slate-400 hover:text-white transition-colors">info@bvmtenkasi.edu.in</a>
              </div>
            </div>
          </motion.div>

          {/* Map CTA - Spans 2 cols */}
          <motion.div className="lg:col-span-2" {...fadeUp(0.3)}>
            <h4 className="text-white text-sm font-extrabold uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">Find Us</h4>
            <div className="w-full h-32 bg-slate-900 border border-slate-800 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:bg-slate-800 hover:border-slate-700 group">
              <MapPin size={28} className="text-teal-500 transition-transform duration-300 group-hover:-translate-y-1" />
              <div className="text-center">
                <p className="text-sm font-bold text-slate-300 mb-0.5">Campus Map</p>
                <span className="text-[10px] uppercase tracking-wider text-slate-500">Tenkasi, Tamil Nadu</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Footer Bottom (Copyright) */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Bharath Vidya Mandir, Tenkasi. All rights reserved.</p>
          <div className="flex gap-4 items-center">
            <span className="text-slate-600">Developed by <a href="https://www.affobe.com/" target="_blank" rel="noopener noreferrer" className="text-teal-500 font-bold tracking-wider hover:text-teal-400 transition-colors">AFFOBE</a></span>
            <span className="w-1 h-1 bg-slate-700 rounded-full mx-1"></span>
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  )
}
