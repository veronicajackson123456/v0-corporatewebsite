"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2 group">
              <div className={`px-4 py-1.5 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 ${
                scrolled ? "bg-orange-600" : "bg-white"
              }`}>
                <h1 className={`text-xl md:text-2xl font-bold tracking-tight ${
                  scrolled ? "text-white" : "text-orange-600"
                }`}>CNBC</h1>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links - Center */}
          <div className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a
              href="/home"
              className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 uppercase group ${
                scrolled ? "text-gray-800 hover:text-orange-600" : "text-white hover:text-orange-100"
              }`}
            >
              HOME
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                scrolled ? "bg-orange-600" : "bg-white"
              }`}></span>
            </a>
            <a
              href="/portfolio"
              className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 uppercase group ${
                scrolled ? "text-gray-800 hover:text-orange-600" : "text-white hover:text-orange-100"
              }`}
            >
              Film Production
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                scrolled ? "bg-orange-600" : "bg-white"
              }`}></span>
            </a>
            <a
              href="/sponsors"
              className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 uppercase group ${
                scrolled ? "text-gray-800 hover:text-orange-600" : "text-white hover:text-orange-100"
              }`}
            >
              Sponsors
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                scrolled ? "bg-orange-600" : "bg-white"
              }`}></span>
            </a>
            <a
              href="/contact"
              className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 uppercase group ${
                scrolled ? "text-gray-800 hover:text-orange-600" : "text-white hover:text-orange-100"
              }`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                scrolled ? "bg-orange-600" : "bg-white"
              }`}></span>
            </a>
          </div>

          {/* ION Link - Right Side */}
          <div className="hidden lg:flex flex-shrink-0">
            <a
              href="https://ionplustv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 group"
            >
              <div className={`px-4 py-1.5 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 ${
                scrolled ? "bg-blue-600" : "bg-white"
              }`}>
                <h1 className={`text-xl md:text-2xl font-bold tracking-tight ${
                  scrolled ? "text-white" : "text-blue-600"
                }`}>ION</h1>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled 
                ? "text-gray-800 hover:bg-gray-100" 
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`py-4 space-y-2 border-t ${
            scrolled ? "border-gray-200 bg-white" : "border-white/20"
          }`}>
            <a
              href="/home"
              className={`block text-sm font-semibold tracking-wide px-4 py-3 rounded-lg transition-all duration-300 uppercase ${
                scrolled 
                  ? "text-gray-800 hover:bg-orange-50 hover:text-orange-600" 
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </a>
            <a
              href="/portfolio"
              className={`block text-sm font-semibold tracking-wide px-4 py-3 rounded-lg transition-all duration-300 uppercase ${
                scrolled 
                  ? "text-gray-800 hover:bg-orange-50 hover:text-orange-600" 
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Film Production
            </a>
            <a
              href="/sponsors"
              className={`block text-sm font-semibold tracking-wide px-4 py-3 rounded-lg transition-all duration-300 uppercase ${
                scrolled 
                  ? "text-gray-800 hover:bg-orange-50 hover:text-orange-600" 
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sponsors
            </a>
            <a
              href="/contact"
              className={`block text-sm font-semibold tracking-wide px-4 py-3 rounded-lg transition-all duration-300 uppercase ${
                scrolled 
                  ? "text-gray-800 hover:bg-orange-50 hover:text-orange-600" 
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="https://ionplustv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`block text-sm font-semibold tracking-wide px-4 py-3 rounded-lg transition-all duration-300 uppercase ${
                scrolled 
                  ? "text-blue-600 hover:bg-blue-50" 
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              ION Plus
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
