const AchievementsBanner = () => {
  const achievements = [
    '🏆 NEET 2024 — 95 Selections',
    '🥇 JEE 2024 — 42 Qualifiers',
    '📚 100% Board Pass Rate',
    '🎖️ State Sports Champions 2023',
    '⭐ Best School Award — Tenkasi District',
    '🏅 National Science Olympiad Winners',
    '🎯 Excellence in Co-curricular Activities',
    '💡 Innovation Award 2023',
    '🌟 Outstanding Academic Performance',
    '🎓 Top Rankers in State Board'
  ];

  return (
    <section className="achievements-banner">
      <div className="marquee-container">
        <div className="marquee-content animate-marquee">
          {[...achievements, ...achievements].map((achievement, index) => (
            <div key={index} className="achievement-card">
              {achievement}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .achievements-banner {
          background: linear-gradient(135deg, var(--gold) 0%, var(--teal) 100%);
          padding: 24px 0;
          overflow: hidden;
        }

        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-content {
          display: inline-flex;
          gap: 20px;
          padding: 0 10px;
        }

        .achievement-card {
          display: inline-block;
          background: var(--white);
          padding: 16px 32px;
          border-radius: 12px;
          border-left: 4px solid var(--gold);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          font-weight: 600;
          font-size: 15px;
          color: var(--navy);
          white-space: nowrap;
          transition: transform 0.3s ease;
        }

        .achievement-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .achievements-banner {
            padding: 20px 0;
          }

          .achievement-card {
            padding: 14px 24px;
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default AchievementsBanner;
