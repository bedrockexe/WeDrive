export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center px-12 lg:px-20">
      <h1 className="text-7xl font-bold text-gray-900 mb-4">WeDrive</h1>
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Car Rentals</h2>

      <p className="text-2xl text-gray-800 mb-12 max-w-xl leading-relaxed">
        "Drive freedom, not just miles — rent the car you need, when you need it."
      </p>

      <div className="flex gap-6">
        <button className="bg-[#4A9FB5] text-white px-10 py-4 rounded-lg text-xl font-medium hover:bg-[#3A8FA5] transition-colors shadow-md">
          Rent now!
        </button>
        <button className="bg-[#C8C89A] text-gray-800 px-10 py-4 rounded-lg text-xl font-medium hover:bg-[#B8B88A] transition-colors shadow-md">
          Browse Cars
        </button>
      </div>
    </div>
  )
}
