import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import AchievementsBanner from './components/AchievementsBanner'
import SchoolIntroduction from './components/SchoolIntroduction'
import WhyChooseUs from './components/WhyChooseUs'
import IntegratedCoaching from './components/IntegratedCoaching'
import AwardsRecognition from './components/AwardsRecognition'
import BoardToppers from './components/BoardToppers'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CallToActionBanner from './components/CallToActionBanner'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import EnquiryForm from './components/EnquiryForm'
import Blog from './components/Blog'
import AboutUs from './components/AboutUs'
import Achievements from './components/Achievements'
import Admissions from './components/Admissions'
// Custom cursor effects removed - using default system cursor
function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)
  const [isBlogOpen, setIsBlogOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false)
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false)

  if (isBlogOpen) {
    return (
      <>
        <Navbar 
          onEnquireClick={() => setIsEnquiryOpen(true)}
          onBlogClick={() => setIsBlogOpen(false)}
          onAboutClick={() => { setIsBlogOpen(false); setIsAboutOpen(true); }}
          onAchievementsClick={() => { setIsBlogOpen(false); setIsAchievementsOpen(true); }}
          onAdmissionsClick={() => { setIsBlogOpen(false); setIsAdmissionsOpen(true); }}
        />
        <Blog onClose={() => setIsBlogOpen(false)} />
        <Footer />
        <EnquiryForm isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
      </>
    )
  }

  if (isAboutOpen) {
    return (
      <>
        <Navbar 
          onEnquireClick={() => setIsEnquiryOpen(true)}
          onBlogClick={() => setIsBlogOpen(true)}
          onAboutClick={() => setIsAboutOpen(false)}
          onAchievementsClick={() => { setIsAboutOpen(false); setIsAchievementsOpen(true); }}
          onAdmissionsClick={() => { setIsAboutOpen(false); setIsAdmissionsOpen(true); }}
        />
        <AboutUs onEnquireClick={() => setIsEnquiryOpen(true)} />
        <Footer />
        <EnquiryForm isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
      </>
    )
  }

  if (isAchievementsOpen) {
    return (
      <>
        <Navbar 
          onEnquireClick={() => setIsEnquiryOpen(true)}
          onBlogClick={() => setIsBlogOpen(true)}
          onAboutClick={() => { setIsAchievementsOpen(false); setIsAboutOpen(true); }}
          onAchievementsClick={() => setIsAchievementsOpen(false)}
          onAdmissionsClick={() => { setIsAchievementsOpen(false); setIsAdmissionsOpen(true); }}
        />
        <Achievements onEnquireClick={() => setIsEnquiryOpen(true)} />
        <Footer />
        <EnquiryForm isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
      </>
    )
  }

  if (isAdmissionsOpen) {
    return (
      <>
        <Navbar 
          onEnquireClick={() => setIsEnquiryOpen(true)}
          onBlogClick={() => setIsBlogOpen(true)}
          onAboutClick={() => { setIsAdmissionsOpen(false); setIsAboutOpen(true); }}
          onAchievementsClick={() => { setIsAdmissionsOpen(false); setIsAchievementsOpen(true); }}
          onAdmissionsClick={() => setIsAdmissionsOpen(false)}
        />
        <Admissions onEnquireClick={() => setIsEnquiryOpen(true)} />
        <Footer />
        <EnquiryForm isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
      </>
    )
  }

  return (
    <>
      <Navbar 
        onEnquireClick={() => setIsEnquiryOpen(true)}
        onBlogClick={() => setIsBlogOpen(true)}
        onAboutClick={() => setIsAboutOpen(true)}
        onAchievementsClick={() => setIsAchievementsOpen(true)}
        onAdmissionsClick={() => setIsAdmissionsOpen(true)}
      />
      <main>
        <section id="home"><Hero onEnquireClick={() => setIsEnquiryOpen(true)} /></section>
        <section id="achievements"><AchievementsBanner /></section>
        <section id="school-intro"><SchoolIntroduction /></section>
        <section id="about"><WhyChooseUs /></section>
        <section id="coaching"><IntegratedCoaching /></section>
        <section id="awards"><AwardsRecognition /></section>
        <StatsBar />
        <section id="toppers"><BoardToppers /></section>
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
