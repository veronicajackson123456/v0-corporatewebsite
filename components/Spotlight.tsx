"use client"
import { Film, MapPin, DollarSign, Tag } from "lucide-react"

export default function SpotlightProject() {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-100 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-50 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-6 py-2">
            <Film className="w-4 h-4 text-orange-600" />
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Spotlight Project</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            A Beautiful Kill
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold uppercase">
              Upcoming
            </span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A psychological thriller set against the luxurious backdrop of Marbella, Spain. This project exemplifies our
            dedication to compelling narratives and stunning visuals.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left - Project Details */}
          <div className="space-y-8">
            {/* Synopsis */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Synopsis</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                A Beautiful Kill takes viewers on a thrilling journey into the enigmatic life of a woman who becomes
                entangled in a high-stakes web of deceit, luxury, and betrayal. As secrets unravel, the film explores
                the depths of human nature and the lengths people go to protect their truths.
              </p>
            </div>

            {/* Project Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-600 text-sm uppercase tracking-wide">Budget</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">€4,000,000</p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-600 text-sm uppercase tracking-wide">Location</span>
                </div>
                <p className="text-xl font-bold text-gray-900">USA, Spain, UK </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 col-span-2 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <Tag className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-600 text-sm uppercase tracking-wide">Genre</span>
                </div>
                <p className="text-xl font-bold text-gray-900">Drama • Suspense • Psychological Thriller</p>
              </div>
            </div>

            {/* CTA */}
          </div>

          {/* Right - Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/12.jpg"
                alt="A Beautiful Kill"
                className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Overlay Text */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed italic">
                  "Immerse yourself in the intrigue of A Beautiful Kill, where luxury meets deception."
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-orange-100 rounded-2xl -z-10 transform rotate-12"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-100 rounded-2xl -z-10 transform -rotate-12"></div>
          </div>
        </div>

        {/* Project Overview Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Project Overview</p>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Discover how CNBC LLC is redefining cinematic storytelling with this captivating film.
          </p>
        </div>
      </div>
    </section>
  )
}
