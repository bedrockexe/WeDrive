import { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="header-info">
            <span className="info-item">📍 Tanza, Cavite</span>
            <span className="info-item">🕐 Sun - Fri (6am - 9pm)</span>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              WeDrive
            </Link>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              ☰
            </button>

            <nav className={`nav ${mobileMenuOpen ? "open" : ""}`}>
              <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/faq" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
            </nav>

            <div className="user-profile">
              <span className="user-icon">👤</span>
              <span className="user-name">Kenn Jarangue</span>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
