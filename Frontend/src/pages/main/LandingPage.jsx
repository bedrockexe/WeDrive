import Navbar from "../../components/navbar"
import HeroSection from "../../components/hero-section"
import Carousel from "../../components/carousel"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Info Bar */}
      <div className="bg-[#5BA5B8] text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-8">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Tanza, Cavite</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Sun - Fri ( 6am - 9pm )</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-120px)]">
        {/* Left Side - Hero Content */}
        <HeroSection />

        {/* Right Side - Carousel */}
        <Carousel />
      </div>
    </div>
  )
}
