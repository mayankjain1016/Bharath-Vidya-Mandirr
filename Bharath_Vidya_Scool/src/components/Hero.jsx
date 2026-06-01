import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="hero-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            TENKASI'S PREMIER SCHOOL
          </motion.span>
          
          <motion.h1 
            className="hero-title font-playfair"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Shaping Tomorrow's Leaders Today
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Where academic excellence meets holistic development — preparing students for NEET, JEE & beyond since decades.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <button className="btn-primary">Book a Campus Tour</button>
            <button className="btn-secondary">Learn More</button>
          </motion.div>
          
          <motion.p 
            className="hero-partnership"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Integrated Coaching in partnership with Seekers Institute, Trichy
          </motion.p>
        </motion.div>

        <div className="hero-image-wrapper">
          <img 
            src="https://placehold.co/600x700/1A3A5C/FFFFFF?text=Student+Excellence" 
            alt="Student studying" 
            className="hero-image animate-float"
          />
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          background: radial-gradient(circle at 50% 50%, #0f2847 0%, var(--navy) 100%);
          display: flex;
          align-items: center;
          padding-top: 90px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 50%, rgba(26, 140, 140, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          max-width: 600px;
        }

        .hero-tag {
          display: inline-block;
          color: var(--gold);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: 64px;
          line-height: 1.1;
          color: var(--white);
          margin-bottom: 24px;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .hero-subtitle {
          font-size: 18px;
          line-height: 1.7;
          color: var(--gray-300);
          margin-bottom: 36px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: var(--teal);
          color: var(--white);
          border: none;
          padding: 16px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: #156d6d;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(26, 140, 140, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: var(--white);
          border: 2px solid var(--white);
          padding: 16px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .hero-partnership {
          font-size: 14px;
          color: var(--gray-300);
          font-style: italic;
        }

        .hero-image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image {
          width: 100%;
          max-width: 550px;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 60px;
            padding: 40px 20px;
          }

          .hero-title {
            font-size: 48px;
          }

          .hero-image {
            max-width: 450px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            min-height: auto;
            padding-top: 80px;
          }

          .hero-title {
            font-size: 36px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
          }

          .hero-image {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
