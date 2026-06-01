import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/BVM Logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Integrated Coaching', href: '#coaching' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="BVM Logo" className="logo-image" />
          <span className="logo-text font-playfair">Bharath Vidya Mandir</span>
        </div>

        <div className="navbar-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <button className="btn-enquire">Enquire Now</button>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="btn-enquire mobile">Enquire Now</button>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(10px);
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }

        .logo-text {
          font-size: 22px;
          font-weight: 700;
          color: var(--navy);
          letter-spacing: -0.5px;
        }

        .navbar-desktop {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          color: var(--navy);
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .nav-link:hover {
          color: var(--teal);
        }

        .btn-enquire {
          background: var(--teal);
          color: var(--white);
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-enquire:hover {
          background: #156d6d;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(26, 140, 140, 0.3);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--navy);
          cursor: pointer;
          padding: 8px;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          background: var(--white);
          padding: 20px;
          overflow: hidden;
        }

        .mobile-nav-link {
          padding: 16px 20px;
          color: var(--navy);
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          border-bottom: 1px solid #f0f0f0;
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover {
          color: var(--teal);
          padding-left: 28px;
        }

        .btn-enquire.mobile {
          margin-top: 20px;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .navbar-desktop {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-menu {
            display: flex;
          }

          .navbar-container {
            padding: 16px 20px;
          }

          .logo-text {
            font-size: 18px;
          }

          .logo-image {
            width: 42px;
            height: 42px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
