"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroWithNavbar() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      type: "single",
      title: "Film Production and Broadcasting",
      subtitle:
        "With expertise across film, television, live events, and music, CNBC is redefining the creative landscape. Our tailored solutions ensure every project reaches its full potential.",
      image: "h2.png",
      label: "CNBC Exclusive",
    },
    {
      id: 2,
      type: "single",
      title: "Empowering Creative Visions",
      subtitle:
        "At CNBC, we bring bold ideas to life. From studio films to independent projects, we partner with global talent to create stories that inspire and captivate audiences worldwide.",
      image: "h1.jpg",
      label: "CNBC Exclusive",
    },
    {
      id: 3,
      type: "multiple",
      label: "Featured Content",
      heading: "Our Productions",
      shows: [
        {
          title: "Film Production and Broadcasting",
          subtitle: "CNBC - Innovating Entertainment",
          image: "aa.jpg",
        },
        {
          title: "Global Reach",
          subtitle: "Bridging creativity and opportunity worldwide",
          image: "hh.jpg",
        },
        {
          title: "Empowering Creative Visions",
          subtitle: "At CNBC, we bring bold ideas to life",
          image: "hh1.jpg",
        },
      ],
    },
  ]

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
    <div className="relative w-full min-h-screen gradient-orange overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full min-h-screen flex items-center pt-20 md:pt-24 pb-16">
        {currentSlideData.type === "multiple" ? (
          /* Multiple Shows Slide */
          <div className="w-full flex items-center">
            <div className="container mx-auto px-4 md:px-8">
              <div className="text-center mb-8 md:mb-12">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold uppercase tracking-wider mb-4">
                  {currentSlideData.label}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                  {currentSlideData.heading}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                {(currentSlideData.shows ?? []).map((show, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={show.image}
                        alt={show.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-center">
                      <h3 className="text-base md:text-lg font-bold text-white mb-1 leading-tight">
                        {show.title}
                      </h3>
                      <p className="text-orange-200 text-xs md:text-sm font-medium">{show.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Single Image Slide */
          <div className="w-full h-full">
            <div className="absolute inset-0">
              <img
                src={currentSlideData.image}
                alt={currentSlideData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-orange-600/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            <div className="relative h-full min-h-screen flex items-center">
              <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="max-w-2xl">
                  <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold uppercase tracking-wider mb-6">
                    {currentSlideData.label}
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                    {currentSlideData.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    {currentSlideData.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide
                ? "w-8 md:w-10 h-2.5 md:h-3 bg-white"
                : "w-2.5 md:w-3 h-2.5 md:h-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
