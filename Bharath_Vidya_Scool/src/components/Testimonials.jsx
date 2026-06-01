import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Bharath Vidya Mandir has been instrumental in shaping my daughter's future. The integrated coaching program eliminated the need for external tuition, and she secured admission in a top medical college. The faculty's dedication is truly commendable.",
      parent: "Mrs. Lakshmi Sundaram",
      class: "Parent of Class XII Student"
    },
    {
      quote: "The holistic approach to education here is remarkable. My son not only excels academically but has also developed strong values and leadership skills. The school's emphasis on character building sets it apart from others.",
      parent: "Mr. Rajesh Kumar",
      class: "Parent of Class X Student"
    },
    {
      quote: "We moved to Tenkasi specifically for this school. The quality of education, infrastructure, and the caring environment have exceeded our expectations. Our child looks forward to going to school every day!",
      parent: "Dr. Priya Venkatesh",
      class: "Parent of Class VIII Student"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials dot-pattern">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title font-playfair">What Parents Say About Us</h2>
        </div>

        <div className="testimonials-wrapper">
          <button 
            className="nav-btn prev" 
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : 100,
                  display: index === activeIndex ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="quote-mark">"</div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="var(--gold)" color="var(--gold)" />
                  ))}
                </div>
                <h4 className="parent-name">{testimonial.parent}</h4>
                <p className="parent-class">{testimonial.class}</p>
              </motion.div>
            ))}
          </div>

          <button 
            className="nav-btn next" 
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials {
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

        .testimonials-wrapper {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 32px;
          position: relative;
        }

        .testimonials-container {
          flex: 1;
          min-height: 400px;
          position: relative;
        }

        .testimonial-card {
          background: var(--white);
          padding: 48px;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
        }

        .testimonial-card.active {
          position: relative;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .quote-mark {
          font-size: 80px;
          color: var(--gold);
          font-family: 'Playfair Display', serif;
          line-height: 1;
          margin-bottom: 16px;
        }

        .testimonial-quote {
          font-size: 18px;
          line-height: 1.8;
          color: var(--text-dark);
          font-style: italic;
          margin-bottom: 24px;
        }

        .stars {
          display: flex;
          gap: 4px;
          margin-bottom: 24px;
        }

        .parent-name {
          font-size: 20px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 4px;
        }

        .parent-class {
          font-size: 14px;
          color: var(--gray-600);
        }

        .nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--white);
          border: 2px solid var(--teal);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .nav-btn:hover {
          background: var(--teal);
          color: var(--white);
          transform: scale(1.1);
        }

        .dots {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 40px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--gray-300);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: var(--teal);
          width: 32px;
          border-radius: 6px;
        }

        @media (max-width: 1024px) {
          .section-title {
            font-size: 40px;
          }

          .testimonial-card {
            padding: 40px;
          }

          .testimonial-quote {
            font-size: 17px;
          }
        }

        @media (max-width: 768px) {
          .testimonials {
            padding: 60px 20px;
          }

          .section-title {
            font-size: 32px;
          }

          .testimonials-wrapper {
            gap: 16px;
          }

          .nav-btn {
            width: 40px;
            height: 40px;
          }

          .nav-btn.prev,
          .nav-btn.next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
          }

          .nav-btn.prev {
            left: -10px;
          }

          .nav-btn.next {
            right: -10px;
          }

          .testimonials-container {
            min-height: 500px;
          }

          .testimonial-card {
            padding: 32px 24px;
          }

          .testimonial-quote {
            font-size: 16px;
          }

          .quote-mark {
            font-size: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
