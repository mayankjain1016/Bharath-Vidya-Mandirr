import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const Awards = () => {
  const awards = [
    { title: 'Best School Award', subtitle: 'Tenkasi District', year: '2023' },
    { title: 'Excellence in Sports', subtitle: 'State Level Recognition', year: '2022' },
    { title: 'Green School Award', subtitle: 'Environmental Initiative', year: '2023' },
    { title: 'Academic Excellence', subtitle: 'Board Results', year: '2024' },
    { title: 'Innovation in Education', subtitle: 'Digital Learning', year: '2023' },
    { title: 'Community Service Award', subtitle: 'Social Impact', year: '2022' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="awards" id="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title font-playfair">Awards & Recognition</h2>
          <p className="section-subtitle">
            Consistently recognized for excellence in academics, sports and holistic education
          </p>
        </div>

        <motion.div 
          className="awards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {awards.map((award, index) => (
            <motion.div 
              key={index} 
              className="award-card"
              variants={cardVariants}
            >
              <div className="trophy-icon">
                <Trophy size={40} strokeWidth={1.5} />
              </div>
              <h3 className="award-title">{award.title}</h3>
              <p className="award-subtitle">{award.subtitle}</p>
              <span className="award-year">{award.year}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .awards {
          background: var(--white);
          padding: 100px 20px;
        }

        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
        }

        .section-title {
          font-size: 48px;
          color: var(--navy);
          margin-bottom: 16px;
          font-weight: 700;
        }

        .section-subtitle {
          font-size: 18px;
          color: var(--gray-600);
          line-height: 1.7;
        }

        .awards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .award-card {
          background: var(--bg-light);
          padding: 40px 32px;
          border-radius: 16px;
          border-top: 4px solid var(--gold);
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .award-card:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
        }

        .trophy-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--gold) 0%, #d4a84a 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          margin: 0 auto 24px;
        }

        .award-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 8px;
        }

        .award-subtitle {
          font-size: 15px;
          color: var(--gray-600);
          margin-bottom: 12px;
        }

        .award-year {
          display: inline-block;
          background: var(--navy);
          color: var(--gold);
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .awards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .section-title {
            font-size: 40px;
          }
        }

        @media (max-width: 768px) {
          .awards {
            padding: 60px 20px;
          }

          .awards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .section-title {
            font-size: 32px;
          }

          .section-subtitle {
            font-size: 16px;
          }

          .award-card {
            padding: 32px 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default Awards;
