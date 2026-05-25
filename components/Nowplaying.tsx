"use client"

import { Play } from "lucide-react"

export default function NowPlayingSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Now Playing on CNBC
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            Business Today
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Market Analysis and Global Economy coverage, Monday through Friday at 9AM
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <span className="text-orange-600 text-2xl md:text-3xl font-bold">Mon-Fri / 9AM</span>
              </div>
              <p className="text-gray-600 text-lg md:text-xl font-medium">
                Market Analysis + Global Economy
              </p>
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Stay informed with comprehensive coverage of global markets, economic trends, and investment opportunities. Our expert analysts break down complex financial data into actionable insights.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl">
                <Play className="w-5 h-5" />
                Watch Now
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-all duration-300">
                View Schedule
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/1.jpg"
                alt="Business Today Show"
                className="w-full aspect-video object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 p-4 rounded-full shadow-lg">
                  <Play className="w-8 h-8 text-orange-600" />
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-orange-100 rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-16 md:mt-20 border-t-2 border-gray-100"></div>
      </div>
    </section>
  )
}
