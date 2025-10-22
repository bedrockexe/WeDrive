import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Explore from "./components/Explore"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

function App() {
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

export default App
