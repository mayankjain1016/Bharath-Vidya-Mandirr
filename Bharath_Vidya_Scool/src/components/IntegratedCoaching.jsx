import { motion } from 'framer-motion';
import { Atom, FlaskConical, Dna, Calculator } from 'lucide-react';

const IntegratedCoaching = () => {
  return (
    <section className="integrated-coaching" id="coaching">
      <div className="coaching-container">
        <motion.div 
          className="coaching-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="coaching-tag">In Partnership with Seekers Institute, Trichy</span>
          <h2 className="coaching-title font-playfair">Integrated NEET & JEE Coaching</h2>
          <p className="coaching-description">
            Our integrated coaching program is a comprehensive one-stop solution that eliminates the need for external coaching centers. Students gain more time for sports, arts, and personal development while receiving world-class entrance exam preparation within the school itself.
          </p>

          <div className="stages">
            <div className="stage-card">
              <div className="stage-header">
                <span className="stage-badge">Stage I</span>
                <h3 className="stage-title">Extended Learning — Classes VI to X</h3>
              </div>
              <p className="stage-description">
                Foundation building with enhanced curriculum focusing on conceptual clarity in Science and Mathematics, preparing students for advanced competitive exams.
              </p>
            </div>

            <div className="stage-card">
              <div className="stage-header">
                <span className="stage-badge">Stage II</span>
                <h3 className="stage-title">Entrance Exam Prep — Classes XI & XII</h3>
              </div>
              <p className="stage-description">
                Intensive preparation for NEET, JEE, and CUET with expert faculty, regular mock tests, and personalized mentoring for competitive excellence.
              </p>
            </div>
          </div>

          <button className="btn-coaching">Know More About Coaching</button>
        </motion.div>

        <motion.div 
          className="coaching-visual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="visual-card">
            <div className="subjects-grid">
              <div className="subject-item">
                <Atom size={40} strokeWidth={1.5} />
                <span>Physics</span>
              </div>
              <div className="subject-item">
                <FlaskConical size={40} strokeWidth={1.5} />
                <span>Chemistry</span>
              </div>
              <div className="subject-item">
                <Dna size={40} strokeWidth={1.5} />
                <span>Biology</span>
              </div>
              <div className="subject-item">
                <Calculator size={40} strokeWidth={1.5} />
                <span>Mathematics</span>
              </div>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-label">Stage I</span>
                  <span className="timeline-range">Class 6 → 10</span>
                </div>
              </div>
              <div className="timeline-line"></div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-label">Stage II</span>
                  <span className="timeline-range">Class 11 → 12</span>
                </div>
              </div>
            </div>

            <div className="results-badge">
              <span className="badge-icon">🏆</span>
              <span className="badge-text">4 Years of Stellar Results</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .integrated-coaching {
          background: var(--navy);
          padding: 100px 20px;
        }

        .coaching-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .coaching-tag {
          display: inline-block;
          color: var(--gold);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .coaching-title {
          font-size: 48px;
          color: var(--white);
          margin-bottom: 24px;
          font-weight: 700;
          line-height: 1.2;
        }

        .coaching-description {
          font-size: 17px;
          color: var(--gray-300);
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .stages {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 40px;
        }

        .stage-card {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid var(--gold);
          border-radius: 12px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .stage-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(8px);
        }

        .stage-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .stage-badge {
          background: var(--gold);
          color: var(--navy);
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
        }

        .stage-title {
          font-size: 18px;
          color: var(--white);
          font-weight: 600;
        }

        .stage-description {
          font-size: 15px;
          color: var(--gray-300);
          line-height: 1.7;
        }

        .btn-coaching {
          background: var(--teal);
          color: var(--white);
          border: none;
          padding: 16px 36px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-coaching:hover {
          background: #156d6d;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(26, 140, 140, 0.4);
        }

        .visual-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 48px;
          backdrop-filter: blur(10px);
        }

        .subjects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .subject-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          color: var(--teal);
          transition: all 0.3s ease;
        }

        .subject-item:hover {
          background: rgba(26, 140, 140, 0.2);
          transform: scale(1.05);
        }

        .subject-item span {
          color: var(--white);
          font-weight: 600;
          font-size: 15px;
        }

        .timeline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
          position: relative;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 20px;
          width: 100px;
          height: 2px;
          background: var(--gold);
          transform: translateX(-50%);
        }

        .timeline-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          z-index: 1;
        }

        .timeline-dot {
          width: 40px;
          height: 40px;
          background: var(--gold);
          border-radius: 50%;
          border: 4px solid var(--navy);
        }

        .timeline-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .timeline-label {
          color: var(--gold);
          font-weight: 700;
          font-size: 14px;
        }

        .timeline-range {
          color: var(--gray-300);
          font-size: 13px;
        }

        .results-badge {
          background: linear-gradient(135deg, var(--gold) 0%, #d4a84a 100%);
          padding: 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .badge-icon {
          font-size: 32px;
        }

        .badge-text {
          color: var(--navy);
          font-weight: 700;
          font-size: 18px;
        }

        @media (max-width: 1024px) {
          .coaching-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .coaching-title {
            font-size: 40px;
          }

          .visual-card {
            padding: 36px;
          }
        }

        @media (max-width: 768px) {
          .integrated-coaching {
            padding: 60px 20px;
          }

          .coaching-title {
            font-size: 32px;
          }

          .coaching-description {
            font-size: 16px;
          }

          .subjects-grid {
            grid-template-columns: 1fr;
          }

          .visual-card {
            padding: 24px;
          }

          .stage-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default IntegratedCoaching;
