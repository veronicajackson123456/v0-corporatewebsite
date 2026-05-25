"use client"

import { useState, useEffect } from "react"
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
    <section className="relative w-full h-screen bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 overflow-hidden">
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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Slider Content */}
      <div className="relative z-10 h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="container mx-auto px-6 md:px-12 lg:px-16 h-full flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
                {/* Left Content */}
                <div
                  className="space-y-6 lg:space-y-8"
                  style={{
                    animation: index === currentSlide ? "slideInLeft 0.8s ease-out" : "none",
                  }}
                >
                  {/* Logo */}
                  <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight whitespace-pre-line tracking-tight">
                      {slide.logo}
                    </h1>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white/95 leading-relaxed">
                    {slide.title}
                  </h2>

                  {/* Description */}
                  <p className="text-base md:text-lg text-white/85 leading-relaxed font-light max-w-xl">
                    {slide.description}
                  </p>

                  {/* Button */}
                  <button className="group relative bg-black hover:bg-gray-900 text-white font-semibold text-sm md:text-base px-8 py-3.5 transition-all duration-300 shadow-lg hover:shadow-2xl uppercase tracking-widest overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </button>
                </div>

                {/* Right Image */}
                <div
                  className="relative hidden lg:block"
                  style={{
                    animation: index === currentSlide ? "slideInRight 0.8s ease-out" : "none",
                  }}
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
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Logo Overlay on Image */}
                      <div className="absolute bottom-8 right-8 bg-gradient-to-r from-black/90 to-black/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 transform group-hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white whitespace-pre-line leading-tight">
                          {slide.logo}
                        </h3>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -left-4 w-32 h-32 bg-white/10 rounded-3xl -z-10 transform rotate-12 group-hover:rotate-6 transition-transform duration-500"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-3xl -z-10 transform -rotate-12 group-hover:-rotate-6 transition-transform duration-500"></div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl shadow-[0_0_80px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_100px_rgba(255,255,255,0.2)] transition-shadow duration-500 -z-10"></div>
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
        className="absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 md:p-5 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 group z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7 md:w-9 md:h-9 text-white group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full border-2 ${
              index === currentSlide
                ? "w-12 md:w-14 h-3 bg-white border-white"
                : "w-3 h-3 bg-transparent border-white/50 hover:border-white hover:bg-white/20"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 3s;
        }
      `}</style>
    </section>
  )
}
