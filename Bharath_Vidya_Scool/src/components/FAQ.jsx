import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How can I apply for admission?',
      answer: 'You can apply for admission by visiting our school office during working hours or by filling out the online application form on our website. Our admission team will guide you through the process and provide all necessary information about required documents and fee structure.'
    },
    {
      question: 'Which curriculum does the school follow?',
      answer: 'Bharath Vidya Mandir follows the State Board curriculum with an enhanced learning approach. We integrate modern teaching methodologies with traditional values to provide comprehensive education that prepares students for both board examinations and competitive entrance exams.'
    },
    {
      question: 'What is the medium of instruction?',
      answer: 'The primary medium of instruction is English, with Tamil as a second language. We ensure students develop strong communication skills in both languages, preparing them for a globalized world while staying connected to their cultural roots.'
    },
    {
      question: 'Are digital classrooms or smart learning tools used?',
      answer: 'Yes, all our classrooms are equipped with smart boards and digital learning tools. We use interactive teaching methods, educational software, and multimedia resources to make learning engaging and effective for students of all age groups.'
    },
    {
      question: 'Are meals or refreshments provided in the school?',
      answer: 'Yes, we provide nutritious mid-noon meals through our Bharath Bhojanstav program. The meals are carefully planned to ensure balanced nutrition and are prepared in hygienic conditions. We also accommodate special dietary requirements when needed.'
    },
    {
      question: 'How can I get details about the fee structure?',
      answer: 'Detailed fee structure information is available at our school office. You can also contact our admission counsellor via phone or email to receive a comprehensive breakdown of fees, payment schedules, and available scholarship programs.'
    },
    {
      question: 'What is integrated NEET & JEE coaching?',
      answer: 'Our integrated coaching program, in partnership with Seekers Institute Trichy, provides comprehensive preparation for NEET, JEE, and CUET within the school curriculum. This eliminates the need for external coaching centers and gives students more time for holistic development.'
    },
    {
      question: 'From which class does integrated coaching begin?',
      answer: 'Integrated coaching begins from Class VI with our Extended Learning program (Stage I) that builds strong foundations in Science and Mathematics. Intensive entrance exam preparation (Stage II) starts from Class XI for NEET, JEE, and CUET aspirants.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title font-playfair">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="icon-wrapper"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-answer-wrapper"
                  >
                    <p className="faq-answer">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq {
          background: var(--white);
          padding: 100px 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 48px;
          color: var(--navy);
          font-weight: 700;
        }

        .faq-list {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-item {
          border-bottom: 2px solid #f0f0f0;
          margin-bottom: 8px;
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          font-size: 18px;
          font-weight: 700;
          color: var(--navy);
          transition: color 0.3s ease;
        }

        .faq-question:hover {
          color: var(--teal);
        }

        .icon-wrapper {
          color: var(--teal);
          display: flex;
          align-items: center;
          flex-shrink: 0;
          margin-left: 16px;
        }

        .faq-answer-wrapper {
          overflow: hidden;
        }

        .faq-answer {
          padding: 0 0 24px 0;
          font-size: 16px;
          line-height: 1.8;
          color: var(--gray-600);
        }

        @media (max-width: 1024px) {
          .section-title {
            font-size: 40px;
          }

          .faq-question {
            font-size: 17px;
          }
        }

        @media (max-width: 768px) {
          .faq {
            padding: 60px 20px;
          }

          .section-title {
            font-size: 32px;
          }

          .faq-question {
            font-size: 16px;
            padding: 20px 0;
          }

          .faq-answer {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
