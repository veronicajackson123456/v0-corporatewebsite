"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="bg-white px-4 py-1.5 rounded-md shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h1 className="text-xl md:text-2xl font-bold text-orange-600 tracking-tight">CNBC</h1>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links - Center */}
          <div className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a
              href="/home"
              className="relative text-white text-sm font-semibold tracking-wide hover:text-orange-100 transition-colors duration-300 uppercase group"
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/portfolio"
              className="relative text-white text-sm font-semibold tracking-wide hover:text-orange-100 transition-colors duration-300 uppercase group"
            >
              Film Production
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>

            <a
              href="/contact"
              className="relative text-white text-sm font-semibold tracking-wide hover:text-orange-100 transition-colors duration-300 uppercase group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <div className="hidden lg:flex flex-shrink-0">
            <a
              href="https://ionplustv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 group"
            >
              <div className="bg-white px-4 py-1.5 rounded-md shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h1 className="text-xl md:text-2xl font-bold text-blue-600 tracking-tight">ION</h1>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors duration-300"
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
          <div className="py-4 space-y-2 border-t border-white/20">
            <a
              href="/home"
              className="block text-white text-sm font-semibold tracking-wide hover:text-orange-100 hover:bg-white/10 px-4 py-2.5 rounded-md transition-all duration-300 uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </a>
            <a
              href="/portfolio"
              className="block text-white text-sm font-semibold tracking-wide hover:text-orange-100 hover:bg-white/10 px-4 py-2.5 rounded-md transition-all duration-300 uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Film Production
            </a>
            <a
              href="/contact"
              className="block text-white text-sm font-semibold tracking-wide hover:text-orange-100 hover:bg-white/10 px-4 py-2.5 rounded-md transition-all duration-300 uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="https://ionplustv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white text-sm font-semibold tracking-wide hover:text-blue-200 hover:bg-white/10 px-4 py-2.5 rounded-md transition-all duration-300 uppercase"
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
