"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

export default function MysterySlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      logo: "CNBC\nINVESTIGATES",
      title: "Uncover the truth behind financial crimes and corporate scandals",
      description:
        "In-depth investigations into business fraud, market manipulation, and economic mysteries every week on CNBC Investigates.",
      image: "/10.jpg",
    },
    {
      id: 2,
      logo: "CNBC\nBUSINESS",
      title: "Navigate the complexities of global markets and emerging economies",
      description:
        "Expert analysis and real-time insights into stock movements, economic trends, and investment opportunities on CNBC Business.",
      image: "/11.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative w-full min-h-screen gradient-orange overflow-hidden py-16 md:py-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 md:w-64 md:h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Slider Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="container mx-auto px-4 md:px-8 lg:px-16 h-full min-h-screen flex items-center py-16 md:py-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
                {/* Left Content */}
                <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                  {/* Logo */}
                  <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight whitespace-pre-line tracking-tight">
                      {slide.logo}
                    </h1>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white/95 leading-relaxed">
                    {slide.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                    {slide.description}
                  </p>

                  {/* Button */}
                  <div className="flex justify-center lg:justify-start">
                    <button className="group relative bg-white text-orange-600 font-bold text-sm md:text-base px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl uppercase tracking-wide overflow-hidden hover:bg-orange-50">
                      Learn More
                      <ChevronRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right Image - always visible */}
                <div className="relative">
                  <div className="relative group">
                    {/* Main Image Container - object-contain so the full image with text is visible */}
                    <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl bg-black/30">
                      <img
                        src={slide.image}
                        alt={slide.logo}
                        className="w-full h-auto max-h-[420px] object-contain transform transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 lg:w-32 lg:h-32 bg-white/10 rounded-2xl -z-10 transform rotate-12"></div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 lg:w-32 lg:h-32 bg-white/10 rounded-2xl -z-10 transform -rotate-12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 group z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full border-2 ${
              index === currentSlide
                ? "w-10 md:w-12 h-3 bg-white border-white"
                : "w-3 h-3 bg-transparent border-white/50 hover:border-white hover:bg-white/20"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
