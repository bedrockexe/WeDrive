import FeatureCard from "../../components/FeatureCard"
import { Fuel, Users, SprayCan as Spray, CreditCard, Wrench } from "lucide-react"

export default function HeroSection() {
  const features = [
    {
      icon: Fuel,
      title: "Unli Mileage",
    },
    {
      icon: Users,
      title: "Self Drive/ w Driver",
    },
    {
      icon: Spray,
      title: "Clean and Sanitized",
    },
    {
      icon: CreditCard,
      title: "RFID - Ready",
    },
    {
      icon: Wrench,
      title: "Well Maintained",
    },
  ]

  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(public/HeroSectionBackground.png)",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-12 md:px-12 lg:px-20">
        {/* Hero Content */}
        <div className="flex flex-col gap-8 pt-12 md:pt-20 lg:flex-row lg:items-start lg:justify-between">
          {/* Left Side - Main Heading */}
          <div className="max-w-2xl">
            <p className="mb-4 text-lg font-medium text-white md:text-xl">"You say, we drive"</p>
            <h1 className="text-balance text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              WeDrive Car Rental Services
            </h1>
          </div>

          {/* Right Side - Description */}
          <div className="max-w-md lg:pt-8">
            <p className="text-pretty text-lg leading-relaxed text-white md:text-xl">
              Lorem ipsum dolor sit amet consectetur. At turpis at sed ornare fusce cursus sed orci elementum. asdasdasd
              jashdj ureo
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="pb-12">
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
