"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-secondary/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-widest">CNBC</h1>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links - Center */}
          <div className="hidden lg:flex items-center justify-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {[
              { label: "HOME", href: "/home" },
              { label: "PRODUCTIONS", href: "/portfolio" },
              { label: "ABOUT", href: "/sponsors" },
              { label: "CONTACT", href: "/contact" },
            ].map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                className="relative text-foreground text-xs font-bold tracking-[0.15em] hover:text-secondary transition-colors duration-300 uppercase group"
                whileHover={{ y: -2 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Right Side CTA */}
          <div className="hidden lg:flex flex-shrink-0">
            <button onClick={() => window.location.href = '/contact'} className="px-6 py-2 bg-primary hover:bg-red-700 text-foreground font-bold text-xs tracking-widest uppercase transition-all duration-300 rounded-lg cinematic-glow">
              Inquire
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-foreground p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: isMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2 border-t border-secondary/20">
            {[
              { label: "HOME", href: "/home" },
              { label: "PRODUCTIONS", href: "/portfolio" },
              { label: "ABOUT", href: "/sponsors" },
              { label: "CONTACT", href: "/contact" },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="block text-foreground text-sm font-bold tracking-wide hover:text-secondary hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button onClick={() => window.location.href = '/contact'} className="w-full mx-4 px-4 py-3 bg-primary hover:bg-red-700 text-foreground font-bold text-xs tracking-widest uppercase transition-all duration-300 rounded-lg">
              Inquire
            </button>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}
