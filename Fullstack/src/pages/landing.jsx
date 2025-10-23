import Navbar from "./components/Landing/Navbar"
import Hero from "./components/Landing/Hero"
import Services from "./components/Landing/Services"
import Explore from "./components/Landing/Explore"
import FAQ from "./components/Landing/FAQ"
import Footer from "./components/Landing/Footer"

function Landing() {
  return (
    <div className="w-full">
      <Navbar />
        <Hero />
        <Services />
        <Explore />
        <FAQ />
      <Footer />
    </div>
  )
}

export default Landing
