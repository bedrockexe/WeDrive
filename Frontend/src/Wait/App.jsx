import './App.css'
import HeroSection from './pages/main/HeroSection'
import LandingPage from './pages/main/LandingPage'
import CarCarousel from './pages/main/CarCarousel'
import FAQsection from './pages/main/FAQsection'
import Footer from './pages/main/footer'

function App() {
  return (
    <>
      <LandingPage />
      <HeroSection />
      <CarCarousel />
      <FAQsection />
      <Footer />
    </>
  )
}

export default App
