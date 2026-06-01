import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/BVM Logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Integrated Coaching', href: '#coaching' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <img src={logo} alt="BVM Logo" className="logo-image" />
              <span className="logo-text font-playfair">Bharath Vidya Mandir</span>
            </div>
            <p className="footer-tagline">Inspire. Ignite. Transform.</p>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>info@bvmtenkasi.edu.in</span>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span>Bharath Vidya Mandir<br />Tenkasi, Tamil Nadu - 627811</span>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Campus Map</h3>
            <div className="map-placeholder">
              <MapPin size={40} />
              <span>View on Google Maps</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bharath Vidya Mandir. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--navy);
          color: var(--white);
          padding: 80px 20px 0;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .logo-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }

        .logo-text {
          font-size: 20px;
          font-weight: 700;
          color: var(--white);
        }

        .footer-tagline {
          color: var(--gray-300);
          font-size: 16px;
          font-style: italic;
          margin-bottom: 24px;
        }

        .social-icons {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(26, 140, 140, 0.2);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-icon:hover {
          background: var(--teal);
          color: var(--white);
          transform: translateY(-3px);
        }

        .footer-heading {
          font-size: 18px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 24px;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          color: var(--gray-300);
          text-decoration: none;
          font-size: 15px;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          color: var(--gold);
          padding-left: 8px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          gap: 12px;
          color: var(--gray-300);
          font-size: 15px;
          line-height: 1.6;
        }

        .contact-item svg {
          color: var(--teal);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .map-placeholder {
          background: rgba(255, 255, 255, 0.05);
          border: 2px dashed var(--gray-300);
          border-radius: 12px;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: var(--gray-300);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .map-placeholder:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--teal);
          color: var(--teal);
        }

        .map-placeholder span {
          font-size: 14px;
          font-weight: 600;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 32px 0;
          text-align: center;
        }

        .footer-bottom p {
          color: var(--gray-500);
          font-size: 14px;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 60px 20px 0;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-col {
            text-align: center;
            align-items: center;
          }

          .footer-logo {
            justify-content: center;
          }

          .footer-links {
            align-items: center;
          }

          .contact-info {
            align-items: center;
          }

          .contact-item {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
