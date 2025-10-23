import { Facebook, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary-green text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8">WeDrive Car Rentals</h3>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mb-8">
          <a href="#" className="hover:opacity-80 transition">
            <Facebook size={32} />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <Mail size={32} />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">Copyright 2025. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
