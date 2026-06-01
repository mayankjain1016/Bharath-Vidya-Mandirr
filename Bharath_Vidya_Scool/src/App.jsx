import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import AchievementsBanner from './components/AchievementsBanner';
import WhyChooseUs from './components/WhyChooseUs';
import IntegratedCoaching from './components/IntegratedCoaching';
import Awards from './components/Awards';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <StatsBar />
      <AchievementsBanner />
      <WhyChooseUs />
      <IntegratedCoaching />
      <Awards />
      <Testimonials />
      <CTABanner />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
