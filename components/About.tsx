"use client"

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 py-20 md:py-32 overflow-hidden"
    >
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

      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-900/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            About <span className="text-orange-900">CNBC LLC</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
            Leading the future of corporate broadcasting and cinematic distribution
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Foundation</h3>
              <p className="text-white/80 leading-relaxed">
                CNBC LLC operates at the intersection of corporate communications and entertainment media. We specialize
                in delivering high-caliber broadcasting content and cinematic experiences designed for modern audiences
                and enterprise clients.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Industry Expertise</h3>
              <p className="text-white/80 leading-relaxed">
                With deep roots in media production and distribution, we understand the evolving landscape of digital
                content delivery. Our approach combines traditional broadcasting excellence with cutting-edge streaming
                technology.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Global Reach</h3>
              <p className="text-white/80 leading-relaxed">
                Our network extends across multiple platforms and territories, enabling seamless content distribution to
                diverse audiences. We facilitate connections between content creators, broadcasters, and viewers
                worldwide.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Commitment to Quality</h3>
              <p className="text-white/80 leading-relaxed">
                Every project we undertake reflects our dedication to premium production values and professional
                standards. From concept to delivery, we maintain rigorous quality control across all broadcasting and
                cinema operations.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/70 uppercase tracking-wider text-sm font-semibold">Operations</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">HD+</div>
            <div className="text-white/70 uppercase tracking-wider text-sm font-semibold">Quality</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">Multi</div>
            <div className="text-white/70 uppercase tracking-wider text-sm font-semibold">Platform</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">Global</div>
            <div className="text-white/70 uppercase tracking-wider text-sm font-semibold">Network</div>
          </div>
        </div>
      </div>
    </section>
  )
}
