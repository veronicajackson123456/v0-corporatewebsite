"use client"

import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function MysterySlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      logo: "EXCLUSIVE\nPRODUCTION",
      title: "Uncover the artistry behind cinematic masterpieces",
      description:
        "Dive deep into the creative process that transforms bold visions into unforgettable visual experiences. Featuring behind-the-scenes insights and industry expertise.",
      image: "/10.jpg",
    },
    {
      id: 2,
      logo: "PREMIUM\nSTORYTELLING",
      title: "Narratives that captivate and inspire audiences worldwide",
      description:
        "Explore stories crafted by visionary filmmakers. From intimate character studies to epic productions, experience narratives that push creative boundaries.",
      image: "/11.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative w-full min-h-screen bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-900/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-900/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Slider Content */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="container mx-auto px-6 md:px-12 lg:px-16 h-screen flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
                {/* Left Content */}
                <motion.div
                  className="space-y-6 lg:space-y-8"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {/* Logo */}
                  <div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl cinematic-text leading-tight tracking-tighter whitespace-pre-line">
                      {slide.logo}
                    </h1>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed font-light">
                    {slide.title}
                  </h2>

                  {/* Description */}
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-xl">
                    {slide.description}
                  </p>

                  {/* Button */}
                  <motion.button
                    className="group relative bg-primary hover:bg-red-700 text-foreground font-bold text-sm md:text-base px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-widest rounded-lg cinematic-glow overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore
                  </motion.button>
                </motion.div>

                {/* Right Image */}
                <motion.div
                  className="relative hidden lg:block"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="relative group">
                    {/* Main Image Container */}
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      <img
                        src={slide.image}
                        alt={slide.logo}
                        className="w-full h-[550px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Logo Overlay on Image */}
                      <div className="absolute bottom-8 right-8 glass px-6 py-4 transform group-hover:scale-105 transition-transform duration-300 border border-secondary/20">
                        <h3 className="text-2xl font-bold text-secondary whitespace-pre-line leading-tight">
                          {slide.logo}
                        </h3>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-3xl -z-10 transform rotate-12 group-hover:rotate-6 transition-transform duration-500"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-3xl -z-10 transform -rotate-12 group-hover:-rotate-6 transition-transform duration-500"></div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl shadow-[0_0_80px_rgba(139,0,0,0.2)] group-hover:shadow-[0_0_100px_rgba(139,0,0,0.4)] transition-shadow duration-500 -z-10"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Next Button */}
      <motion.button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 glass hover:bg-white/20 p-4 md:p-5 rounded-full transition-all duration-300 hover:scale-110 border border-secondary/20 group z-20"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7 md:w-9 md:h-9 text-foreground group-hover:translate-x-1 transition-transform duration-300" />
      </motion.button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full border-2 ${
              index === currentSlide
                ? "w-12 md:w-14 h-3 bg-primary border-primary"
                : "w-3 h-3 bg-transparent border-secondary/50 hover:border-secondary hover:bg-secondary/20"
            }`}
            whileHover={{ scale: 1.1 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
