import { Users, Fuel, Star, ArrowRight } from "lucide-react"

export default function CarCard({ car }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
      <div className="relative h-56 bg-gray-100">
        <img src={car.image || "/placeholder.svg"} alt={car.name} className="object-cover w-full h-full" />
      </div>

      <div className="bg-[#4A8B8B] px-6 py-4">
        <h3 className="text-xl font-bold text-white mb-4">{car.name}</h3>

        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <div className="text-sm">
              <div className="font-bold">{car.seater}</div>
              <div className="text-xs opacity-90">Seater</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Fuel className="w-5 h-5" />
            <div className="text-sm">
              <div className="font-bold">{car.fuel}</div>
              <div className="text-xs opacity-90">Km</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
            <div className="text-sm">
              <div className="font-bold">{car.rating}</div>
              <div className="text-xs opacity-90">Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-6 py-4">
        <button className="w-full flex items-center justify-between text-lg font-semibold text-gray-900 hover:text-[#2C5F5F] transition-colors group">
          <span>Details</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}
