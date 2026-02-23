"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ExternalLink, Play } from "lucide-react"

export default function SponsorsPage() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Dramatic background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,140,0,0.08),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,140,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,140,0,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Ambient glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32 text-center">
          {/* Top accent line */}
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8 animate-pulse"></div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Our Sponsors
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed">
              <span className="font-serif italic text-orange-300">With Special Thanks to Our Corporate Sponsors</span>
              <br />
              <span className="font-sans text-gray-200 mt-4 block">
                Proudly Supporting the Production of the Feature Film{" "}
                <span className="font-bold text-white">A Beautiful Kill</span>
              </span>
            </p>
          </div>

          {/* Bottom accent line */}
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mt-8"></div>
        </div>
      </section>

      {/* About the Film Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-zinc-900/60 border border-orange-500/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight text-center">
                About <span className="text-orange-500">A Beautiful Kill</span>
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 mx-auto mb-8"></div>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-center">
                "A Beautiful Kill" is an upcoming feature film produced by Corporate Network Broadcasting Cinema. It is
                a psychological thriller that follows a woman entangled in a high-stakes web of deceit, luxury, and
                betrayal, showcasing compelling storytelling and cinematic vision.
              </p>

              <div className="flex justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="group relative px-8 md:px-10 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-lg md:text-xl font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,140,0,0.5)] hover:scale-105 active:scale-95 flex items-center gap-3"
                >
                  <Play className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                  <span className="relative z-10">Watch Trailer</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Our Featured <span className="text-orange-500">Corporate Sponsor</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="group relative backdrop-blur-sm bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 border-2 border-orange-500/30 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl transition-all duration-500 hover:border-orange-500/60 hover:shadow-[0_0_60px_rgba(255,140,0,0.3)]">
              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-orange-500/40 rounded-tl-2xl"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-orange-500/40 rounded-br-2xl"></div>

              {/* Sponsor Logo */}
              <div className="flex justify-center mb-8 md:mb-10">
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl transform transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-23%20170824-xLdr2cjQYl79YfxMdX7sZyNKgyZy1P.png"
                    alt="AbbVie Logo"
                    className="h-16 md:h-20 w-auto"
                  />
                </div>
              </div>

              {/* Sponsor Name */}
              <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">AbbVie</h3>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mb-8 md:mb-10 max-w-3xl mx-auto">
                AbbVie is a global biopharmaceutical company dedicated to research, scientific innovation, and
                delivering medicines that address serious health conditions and improve quality of life around the
                world.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center">
                <a
                  href="https://www.abbvie.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative px-8 md:px-10 py-4 bg-white text-orange-600 text-lg md:text-xl font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95 flex items-center gap-3"
                >
                  <span className="relative z-10">Visit Website</span>
                  <ExternalLink className="w-5 h-5 md:w-6 md:h-6 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors List Section */}
      <section className="relative py-16 md:py-24 bg-zinc-800/30">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Supporting <span className="text-orange-500">Partners</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Prestige Pawnbrokers */}
            <div className="group backdrop-blur-sm bg-zinc-900/60 border border-orange-500/20 rounded-2xl p-8 transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(255,140,0,0.2)]">
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-xl p-6 mb-6 w-full flex items-center justify-center min-h-[120px] transform transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/prestige-pawnbrokers-logo.jpg"
                    alt="Prestige Pawnbrokers"
                    className="h-24 w-auto"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white text-center">
                  Prestige Pawnbrokers
                </h3>
                <a
                  href="https://www.prestigepawnbrokers.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-orange-400 hover:text-orange-300 transition-colors duration-300 flex items-center gap-2"
                >
                  Visit Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* PNS UK */}
            <div className="group backdrop-blur-sm bg-zinc-900/60 border border-orange-500/20 rounded-2xl p-8 transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(255,140,0,0.2)]">
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-xl p-6 mb-6 w-full flex items-center justify-center min-h-[120px] transform transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/pnsuk-logo.jpg"
                    alt="PNS UK"
                    className="h-24 w-auto"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white text-center">
                  PNS UK
                </h3>
                <a
                  href="https://www.pnsuk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-orange-400 hover:text-orange-300 transition-colors duration-300 flex items-center gap-2"
                >
                  Visit Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative backdrop-blur-sm bg-gradient-to-br from-orange-600/20 to-orange-500/10 border border-orange-500/40 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center tracking-tight">
                  Interested in Sponsoring Future Films?
                </h2>

                <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center mb-8 max-w-2xl mx-auto">
                  We welcome partnerships with organizations that share our creative vision and commitment to cinematic
                  excellence. Contact our production team to learn more.
                </p>

                <div className="flex justify-center">
                  <a
                    href="/contact"
                    className="group relative px-10 md:px-12 py-4 bg-white text-orange-600 text-lg md:text-xl font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:scale-105 active:scale-95"
                  >
                    <span className="relative z-10">Become a Sponsor</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Trailer Modal (placeholder) */}
      {isPlaying && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setIsPlaying(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden">
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full transition-all duration-300"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Trailer Video Embed */}
            <video
              className="w-full h-full"
              controls
              autoPlay
              controlsList="nodownload"
            >
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CNBC%20-%20Film%20Production%20and%20Broadcasting-xbLKorFLidQUkqigqm6yKa1UXNTnPw.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  )
}
