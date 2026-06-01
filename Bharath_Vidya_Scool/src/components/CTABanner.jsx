import { motion } from 'framer-motion';

const CTABanner = () => {
  return (
    <section className="cta-banner diagonal-stripe" id="admissions">
      <motion.div 
        className="cta-container"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="cta-title font-playfair">
          Ready to Give Your Child the Best Start?
        </h2>
        <p className="cta-subtitle">
          Join thousands of families who trust Bharath Vidya Mandir for their child's future.
        </p>
        <div className="cta-buttons">
          <button className="btn-cta-primary">Book a Campus Tour</button>
          <button className="btn-cta-secondary">Speak with Admission Counsellor</button>
        </div>
      </motion.div>

      <style jsx>{`
        .cta-banner {
          padding: 100px 20px;
        }

        .cta-container {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-title {
          font-size: 52px;
          color: var(--white);
          margin-bottom: 20px;
          font-weight: 700;
          line-height: 1.2;
        }

        .cta-subtitle {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-cta-primary {
          background: var(--white);
          color: var(--teal);
          border: none;
          padding: 18px 40px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(255, 255, 255, 0.3);
        }

        .btn-cta-secondary {
          background: transparent;
          color: var(--white);
          border: 2px solid var(--white);
          padding: 18px 40px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-cta-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-3px);
        }

        @media (max-width: 1024px) {
          .cta-title {
            font-size: 44px;
          }

          .cta-subtitle {
            font-size: 18px;
          }
        }

        @media (max-width: 768px) {
          .cta-banner {
            padding: 60px 20px;
          }

          .cta-title {
            font-size: 32px;
          }

          .cta-subtitle {
            font-size: 16px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .btn-cta-primary,
          .btn-cta-secondary {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default CTABanner;
