import { Facebook, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2C5F5F] text-[#B8D4D4] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-3xl font-bold text-white">WeDrive Car Rentals</h2>

          <div className="flex gap-6">
            <a
              href="#"
              className="w-16 h-16 rounded-full bg-[#B8D4D4] flex items-center justify-center hover:bg-[#9BC4C4] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-8 h-8 text-[#2C5F5F]" />
            </a>
            <a
              href="#"
              className="w-16 h-16 rounded-full bg-[#B8D4D4] flex items-center justify-center hover:bg-[#9BC4C4] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-8 h-8 text-[#2C5F5F]" />
            </a>
          </div>

          <div className="w-full border-t border-[#3D7070] pt-6">
            <p className="text-center text-white text-lg">Copyright 2025. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
