"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroWithNavbar() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const slides = [
    {
      id: 1,
      type: "multiple",
      shows: [
        {
          title: "Film Production and Broadcasting",
          subtitle: "CNBC - Innovating Entertainment",
          image: "aa.jpg",
        },
        {
          title: "Global Reach",
          subtitle:
            "Leveraging our extensive network of international partners, CNBC bridges creativity and opportunity",
          image: "hh.jpg",
        },
        {
          title: "Empowering Creative Visions",
          subtitle: "At CNBC, we bring bold ideas to life",
          image: "hh1.jpg",
        },
      ],
    },
    {
      id: 2,
      type: "single",
      title: "Film Production and Broadcasting",
      subtitle:
        "With expertise across film, television, live events, and music, CNBC is redefining the creative landscape. Our tailored solutions ensure every project reaches its full potential.",
      image: "h2.png",
    },
    {
      id: 3,
      type: "single",
      title: "Empowering Creative Visions",
      subtitle:
        "At CNBC, we bring bold ideas to life. From studio films to independent projects, we partner with global talent to create stories that inspire and captivate audiences worldwide.",
      image: "h1.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000) // Slower transition - 8 seconds
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
    <div className="relative w-full h-screen bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 overflow-hidden">
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

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center pt-16 md:pt-20">
        {currentSlideData.type === "multiple" ? (
          /* Slide 1: Three Pictures */
          <div className="w-full h-full flex items-center">
            <div className="w-full h-full px-4 md:px-8 flex items-center">
              <div className="flex gap-3 md:gap-4 lg:gap-6 w-full max-w-6xl mx-auto justify-center items-center">
                {(currentSlideData.shows ?? []).map((show, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl"
                    style={{
                      animation: `fadeIn 1s ease-out ${index * 0.2}s both`,
                      width: index === 0 ? "35%" : index === 1 ? "30%" : "25%",
                      maxWidth: index === 0 ? "320px" : index === 1 ? "280px" : "240px",
                    }}
                  >
                    <div className="aspect-[2/3] overflow-hidden">
                      <img
                        src={show.image}
                        alt={show.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6 text-center">
                      <h3 className="text-sm md:text-lg lg:text-xl font-bold text-white mb-1 tracking-wide">
                        {show.title}
                      </h3>
                      <p className="text-orange-300 text-xs md:text-sm font-semibold tracking-widest">
                        {show.subtitle}
                      </p>
                    </div>
                    <div className="absolute top-3 left-3 w-8 h-8 md:w-12 md:h-12 border-t-4 border-l-4 border-white/30 rounded-tl-2xl"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Slides 2 & 3: Full Image */
          <div
            className="absolute inset-0"
            style={{
              animation: "fadeIn 1s ease-out both",
            }}
          >
            <img src={currentSlideData.image} alt={currentSlideData.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="max-w-2xl">
                  <h2
                    className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight leading-tight"
                    style={{
                      animation: "slideInLeft 0.8s ease-out 0.2s both",
                    }}
                  >
                    {currentSlideData.title}
                  </h2>
                  <p
                    className="text-xl md:text-2xl lg:text-3xl text-orange-300 font-bold tracking-wide"
                    style={{
                      animation: "slideInLeft 0.8s ease-out 0.4s both",
                    }}
                  >
                    {currentSlideData.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 group z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 group z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide
                ? "w-10 md:w-12 h-2.5 md:h-3 bg-white"
                : "w-2.5 md:w-3 h-2.5 md:h-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
      `}</style>
    </div>
  )
}
