import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import AchievementsBanner from './components/AchievementsBanner'
import WhyChooseUs from './components/WhyChooseUs'
import IntegratedCoaching from './components/IntegratedCoaching'
import AwardsRecognition from './components/AwardsRecognition'
import Testimonials from './components/Testimonials'
import CallToActionBanner from './components/CallToActionBanner'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <StatsBar />
        <section id="achievements"><AchievementsBanner /></section>
        <section id="about"><WhyChooseUs /></section>
        <section id="coaching"><IntegratedCoaching /></section>
        <section id="awards"><AwardsRecognition /></section>
        <section id="testimonials"><Testimonials /></section>
        <CallToActionBanner />
        <section id="faq"><FAQ /></section>
      </main>
      <footer id="contact"><Footer /></footer>
    </>
  )
}

export default App
