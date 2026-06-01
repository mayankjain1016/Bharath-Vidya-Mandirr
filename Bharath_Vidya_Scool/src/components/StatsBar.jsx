import { useState, useEffect, useRef } from 'react';

const StatsBar = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { target: 100, label: 'Doctors Produced', suffix: '+' },
    { target: 600, label: 'Alumni', suffix: '+' },
    { target: 6000, label: 'Happy Parents', suffix: '+' },
    { target: 60, label: 'Subject Experts', suffix: '+' },
    { target: 70, label: 'Well Trained Staff', suffix: '+' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.target / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, 30);
    });
  };

  return (
    <section className="stats-bar" ref={statsRef}>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">
              {counts[index].toLocaleString()}{stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .stats-bar {
          background: var(--navy);
          padding: 60px 20px;
        }

        .stats-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 40px;
        }

        .stat-item {
          text-align: center;
          position: relative;
        }

        .stat-item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
        }

        .stat-number {
          font-size: 48px;
          font-weight: 700;
          color: var(--gold);
          margin-bottom: 8px;
          font-family: 'DM Sans', sans-serif;
        }

        .stat-label {
          font-size: 14px;
          color: var(--white);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 1024px) {
          .stats-container {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }

          .stat-item:nth-child(3)::after {
            display: none;
          }

          .stat-number {
            font-size: 40px;
          }

          .stat-label {
            font-size: 13px;
          }
        }

        @media (max-width: 768px) {
          .stats-bar {
            padding: 40px 20px;
          }

          .stats-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }

          .stat-item::after {
            display: none;
          }

          .stat-number {
            font-size: 36px;
          }

          .stat-label {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default StatsBar;
