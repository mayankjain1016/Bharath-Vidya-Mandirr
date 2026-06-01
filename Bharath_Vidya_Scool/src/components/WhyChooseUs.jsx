import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Heart, Monitor, Users, Utensils } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Qualified & Experienced Faculty',
      description: 'Our dedicated teachers bring years of expertise and passion to nurture every student\'s potential.'
    },
    {
      icon: GraduationCap,
      title: 'Strong Academic Support',
      description: 'Comprehensive remedial, revision, and practice sessions to ensure every student excels.'
    },
    {
      icon: Heart,
      title: 'Holistic Development Focus',
      description: 'Beyond academics, we foster character, creativity, and critical thinking in every child.'
    },
    {
      icon: Monitor,
      title: 'Digital Classrooms & Smart Boards',
      description: 'State-of-the-art technology integration for an engaging and modern learning experience.'
    },
    {
      icon: Users,
      title: 'Strong Parent-School Communication',
      description: 'Regular meetings and progress updates to keep parents actively involved in their child\'s journey.'
    },
    {
      icon: Utensils,
      title: 'Bharath Bhojanstav',
      description: 'Nutritious mid-noon meals ensuring students are well-nourished and energized for learning.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="why-choose-us dot-pattern" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title font-playfair">Why Choose Bharath Vidya Mandir?</h2>
          <p className="section-subtitle">
            Discover what makes us Tenkasi's most trusted institution for comprehensive education and character building.
          </p>
        </div>

        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index} 
                className="feature-card"
                variants={cardVariants}
              >
                <div className="icon-wrapper">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style jsx>{`
        .why-choose-us {
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

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-card {
          background: var(--white);
          padding: 40px 32px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
          cursor: pointer;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
          border-left-color: var(--gold);
        }

        .icon-wrapper {
          width: 64px;
          height: 64px;
          background: rgba(26, 140, 140, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--teal);
          margin-bottom: 24px;
        }

        .feature-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 12px;
        }

        .feature-description {
          font-size: 15px;
          color: var(--gray-600);
          line-height: 1.7;
        }

        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .section-title {
            font-size: 40px;
          }
        }

        @media (max-width: 768px) {
          .why-choose-us {
            padding: 60px 20px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .section-title {
            font-size: 32px;
          }

          .section-subtitle {
            font-size: 16px;
          }

          .feature-card {
            padding: 32px 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
