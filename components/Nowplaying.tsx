"use client"

export default function NowPlayingSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-orange-600 text-xl md:text-2xl font-bold tracking-wide">Now Playing on CNBC</h3>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
              BUSINESS
              <br />
              TODAY
            </h2>

            <div className="space-y-2">
              <p className="text-orange-600 text-2xl md:text-3xl font-bold">Mon-Fri / 9AM</p>
              <p className="text-gray-600 text-lg md:text-xl font-medium">Market Analysis + Global Economy</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/1.jpg"
                alt="Business Today Show"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-600 rounded-2xl -z-10 opacity-20"></div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-16 md:mt-20 border-t-2 border-gray-300"></div>
      </div>
    </section>
  )
}
