import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
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
import AchievementsBanner from './components/AchievementsBanner'

function Home({ onEnquireClick }) {
  return (
    <main>
      <section id="home">
        <Hero onEnquireClick={onEnquireClick} />
      </section>

      <AchievementsBanner />

      <section id="school-intro">
        <SchoolIntroduction />
      </section>

      <section id="about">
        <WhyChooseUs />
      </section>

      <section id="coaching">
        <IntegratedCoaching />
      </section>

      <section id="awards">
        <AwardsRecognition />
      </section>

      <StatsBar />

      <section id="toppers">
        <BoardToppers />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <CallToActionBanner onEnquireClick={onEnquireClick} />

      <section id="faq">
        <FAQ />
      </section>
    </main>
  )
}

function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)

  return (
    <>
      <Navbar
        onEnquireClick={() => setIsEnquiryOpen(true)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              onEnquireClick={() => setIsEnquiryOpen(true)}
            />
          }
        />

        <Route
          path="/about"
          element={
            <AboutUs
              onEnquireClick={() => setIsEnquiryOpen(true)}
            />
          }
        />

        <Route
          path="/achievements"
          element={
            <Achievements
              onEnquireClick={() => setIsEnquiryOpen(true)}
            />
          }
        />

        <Route
          path="/admissions"
          element={
            <Admissions
              onEnquireClick={() => setIsEnquiryOpen(true)}
            />
          }
        />

        <Route
          path="/blog"
          element={<Blog />}
        />
      </Routes>

      <Footer />

      <EnquiryForm
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </>
  )
}

export default App