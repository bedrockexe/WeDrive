import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import CarCard from "../../components/CarCard"

export default function CarCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const cars = [
    {
      name: "Ford Fiesta - 2014",
      image: "/blue-ford-fiesta-2014.jpg",
      seater: "2-4",
      fuel: "240",
      rating: "4.5",
    },
    {
      name: "Range Rover Evoque - 2020",
      image: "/blue-ford-fiesta-2014.jpg",
      seater: "2-4",
      fuel: "240",
      rating: "4.5",
    },
    {
      name: "Ford Fiesta - 2014",
      image: "/blue-ford-fiesta-2014.jpg",
      seater: "2-4",
      fuel: "240",
      rating: "4.5",
    },
    {
      name: "Ford Fiesta - 2014",
      image: "/blue-ford-fiesta-2014.jpg",
      seater: "2-4",
      fuel: "240",
      rating: "4.5",
    },
    {
      name: "Ford Fiesta - 2014",
      image: "/blue-ford-fiesta-2014.jpg",
      seater: "2-4",
      fuel: "240",
      rating: "4.5",
    },
    {
      name: "Ford Fiesta - 2014",
      image: "/blue-ford-fiesta-2014.jpg",
      seater: "2-4",
      fuel: "240",
      rating: "4.5",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cars.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const getVisibleCards = () => {
    const visible = []
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + cars.length) % cars.length
      visible.push({ car: cars[index], offset: i, index })
    }
    return visible
  }

  return (
    <section className="bg-[#B8D4A8] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-7xl font-bold text-white mb-2">Explore</h2>
          <p className="text-xl text-white/90">Cars showcase to you by WeDrive Rentals</p>
        </div>

        <div className="relative mb-16">
          <div className="flex items-center justify-center gap-4 min-h-[500px]">
            {getVisibleCards().map(({ car, offset, index }) => (
              <div
                key={`${index}-${offset}`}
                onClick={() => offset !== 0 && goToSlide(index)}
                className={`transition-all duration-500 ${
                  offset === 0 ? "scale-100 opacity-100 z-10" : "scale-75 opacity-30 hover:opacity-50 cursor-pointer"
                }`}
                style={{
                  flex: offset === 0 ? "0 0 400px" : "0 0 300px",
                }}
              >
                <CarCard car={car} isCenter={offset === 0} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="Previous car"
          >
            <ChevronLeft className="w-6 h-6 text-[#2C5F5F]" />
          </button>

          <div className="flex justify-center gap-2">
            {cars.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#2C5F5F] scale-125" : "bg-[#4A8B8B]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="Next car"
          >
            <ChevronRight className="w-6 h-6 text-[#2C5F5F]" />
          </button>
        </div>
      </div>
    </section>
  )
}
