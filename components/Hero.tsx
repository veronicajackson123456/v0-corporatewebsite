"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroWithNavbar() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const slides = [
    {
      id: 1,
      type: "single",
      title: "A Beautiful Night for A Beautiful Kill",
      subtitle: "Cinematic Elegance Meets Storytelling Excellence",
      image: "aa.jpg",
    },
    {
      id: 2,
      type: "single",
      title: "Marbella Takes Center Stage",
      subtitle: "The team that is taking over Marbella this Summer with entertainment excellence",
      image: "hh.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden pt-20">
      {/* Ambient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -left-96 w-96 h-96 bg-red-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-96 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img src={currentSlideData.image} alt={currentSlideData.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-20">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-2 mb-6"
              >
                <p className="text-secondary text-sm md:text-base tracking-[0.2em] uppercase font-bold">
                  Featured Production
                </p>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl md:text-7xl lg:text-8xl cinematic-text leading-tight mb-6 text-balance"
              >
                {currentSlideData.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-10 max-w-2xl"
              >
                {currentSlideData.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button onClick={() => alert('Video player opening...')} className="px-8 py-4 bg-primary hover:bg-red-700 text-foreground font-bold text-sm tracking-widest uppercase transition-all duration-300 rounded-lg cinematic-glow">
                  Watch Now
                </button>
                <button onClick={() => window.location.href = '/portfolio'} className="px-8 py-4 border-2 border-secondary text-secondary hover:bg-secondary/10 font-bold text-sm tracking-widest uppercase transition-all duration-300 rounded-lg">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 glass hover:bg-white/20 p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 z-30 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-foreground group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 glass hover:bg-white/20 p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 z-30 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-foreground group-hover:scale-110 transition-transform" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-10 md:w-12 h-2.5 md:h-3 bg-primary"
                : "w-2.5 md:w-3 h-2.5 md:h-3 bg-secondary/40 hover:bg-secondary/70"
            }`}
            whileHover={{ scale: 1.1 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
