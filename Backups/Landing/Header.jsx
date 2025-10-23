import React, { useEffect, useState } from 'react';
import { CarIcon, MenuIcon, X } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-2xl font-bold">
          <CarIcon className={`h-8 w-8 ${isScrolled ? 'text-[#1AB759]' : 'text-white'}`} />
          <span className={isScrolled ? 'text-gray-800' : 'text-white'}>
            WeDrive
          </span>
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {['Home', 'Cars', 'About', 'Contact'].map(item => <li key={item}>
                <a href="#" className={`font-medium hover:text-[#1AB759] transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                  {item}
                </a>
              </li>)}
          </ul>
          <div className="flex items-center gap-4">
            <Link to="/login" className={`px-4 py-2 rounded-full font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#1AB759]' : 'text-white hover:text-[#1AB759]'}`}>
              Login
            </Link>
            <Link to="/register" className="px-6 py-2 bg-[#1AB759] text-white rounded-full font-medium hover:bg-[#159a4b] transition-colors">
              Register
            </Link>
          </div>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} /> : <MenuIcon className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col p-4">
            {['Home', 'Cars', 'About', 'Contact'].map(item => <li key={item}>
                <a href="#" className="block py-2 text-gray-700 hover:text-[#1AB759]" onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </a>
              </li>)}
            <li className="mt-4 flex flex-col gap-2">
              <Link
                to="/login"
                className="w-full block text-center py-2 text-gray-700 hover:text-[#1AB759]"
              >
                Login
              </Link>

                <Link
                  to="/register"
                  className="w-full block text-center py-2 bg-[#1AB759] text-white rounded-md hover:bg-[#159a4b]"
                >
                  Register
                </Link>

            </li>
          </ul>
        </div>}
    </header>;
}