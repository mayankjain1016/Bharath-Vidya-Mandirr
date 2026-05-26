import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import AchievementsBanner from './components/AchievementsBanner'
import WhyChooseUs from './components/WhyChooseUs'
import IntegratedCoaching from './components/IntegratedCoaching'
import AwardsRecognition from './components/AwardsRecognition'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CallToActionBanner from './components/CallToActionBanner'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import EnquiryForm from './components/EnquiryForm'
import Blog from './components/Blog'

function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)
  const [isBlogOpen, setIsBlogOpen] = useState(false)

  if (isBlogOpen) {
    return <Blog onClose={() => setIsBlogOpen(false)} />
  }

  return (
    <>
      <Navbar 
        onEnquireClick={() => setIsEnquiryOpen(true)}
        onBlogClick={() => setIsBlogOpen(true)}
      />
      <main>
        <section id="home"><Hero onEnquireClick={() => setIsEnquiryOpen(true)} /></section>
        <section id="achievements"><AchievementsBanner /></section>
        <section id="about"><WhyChooseUs /></section>
        <section id="coaching"><IntegratedCoaching /></section>
        <section id="awards"><AwardsRecognition /></section>
        <StatsBar />
        <section id="gallery"><Gallery /></section>
        <section id="testimonials"><Testimonials /></section>
        <CallToActionBanner onEnquireClick={() => setIsEnquiryOpen(true)} />
        <section id="faq"><FAQ /></section>
      </main>
      <footer id="contact"><Footer /></footer>
      <EnquiryForm isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  )
}

export default App
