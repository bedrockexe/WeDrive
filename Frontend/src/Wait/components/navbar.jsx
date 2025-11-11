import { useState, useEffect } from "react"

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`${
        isSticky ? "fixed top-0 left-0 right-0 shadow-lg" : ""
      } bg-[#E8E5C8] z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-[#2D5F3F]">WeDrive</div>

        <div className="flex items-center gap-12">
          <a href="#" className="text-gray-800 font-medium border-b-2 border-gray-800 pb-1">
            Home
          </a>
          <a href="#" className="text-gray-800 font-medium hover:text-gray-600">
            About
          </a>
          <a href="#" className="text-gray-800 font-medium hover:text-gray-600">
            FAQ
          </a>
        </div>

        <button className="bg-[#4A9FB5] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#3A8FA5] transition-colors">
          Sign Up
        </button>
      </div>
    </nav>
  )
}
