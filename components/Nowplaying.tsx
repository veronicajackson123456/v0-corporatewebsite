"use client"

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
            <div className="space-y-3">
              <span className="text-orange-600 text-2xl md:text-3xl font-bold block">Mon-Fri / 9AM</span>
              <p className="text-gray-800 text-xl md:text-2xl font-semibold">
                Market Analysis + Global Economy
              </p>
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Stay informed with comprehensive coverage of global markets, economic trends, and investment
              opportunities. Our expert analysts break down complex financial data into actionable insights.
            </p>
          </div>

          {/* Right Image — static, no play button */}
          <div className="relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/1.jpg"
                alt="Business Today Show"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-orange-100 rounded-2xl -z-10" />
          </div>
        </div>

        <div className="mt-16 md:mt-20 border-t-2 border-gray-100" />
      </div>
    </section>
  )
}
