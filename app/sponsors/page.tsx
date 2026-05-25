"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ExternalLink, Play } from "lucide-react"

export default function SponsorsPage() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-800/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <div className="w-24 h-1 bg-white/60 mx-auto mb-8"></div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Our Sponsors
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            <span className="italic font-light">With Special Thanks to Our Corporate Sponsors</span>
            <br />
            <span className="font-semibold mt-4 block">
              Proudly Supporting the Production of the Feature Film{" "}
              <span className="text-white font-bold underline decoration-white/50 underline-offset-4">A Beautiful Kill</span>
            </span>
          </p>
          <div className="w-24 h-1 bg-white/60 mx-auto mt-8"></div>
        </div>
      </section>

      {/* About the Film Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-orange-100 rounded-3xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight text-center">
                About{" "}
                <span className="text-orange-600">A Beautiful Kill</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 text-center">
                "A Beautiful Kill" is an upcoming feature film produced by Corporate Network Broadcasting Cinema. It is
                a psychological thriller that follows a woman entangled in a high-stakes web of deceit, luxury, and
                betrayal, showcasing compelling storytelling and cinematic vision.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="flex items-center gap-3 px-8 md:px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                >
                  <Play className="w-5 h-5 fill-current" />
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sponsor Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Featured{" "}
              <span className="text-orange-600">Corporate Sponsor</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="group bg-white border-2 border-orange-200 hover:border-orange-400 rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex justify-center mb-8 md:mb-10">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-23%20170824-xLdr2cjQYl79YfxMdX7sZyNKgyZy1P.png"
                    alt="AbbVie Logo"
                    className="h-16 md:h-20 w-auto"
                  />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">AbbVie</h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center mb-8 md:mb-10 max-w-3xl mx-auto">
                AbbVie is a global biopharmaceutical company dedicated to research, scientific innovation, and
                delivering medicines that address serious health conditions and improve quality of life around the
                world.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://www.abbvie.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 md:px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                >
                  Visit Website
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Partners Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Supporting{" "}
              <span className="text-orange-600">Partners</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Prestige Pawnbrokers", logo: "/prestige-pawnbrokers-logo.jpg", url: "https://www.prestigepawnbrokers.co.uk" },
              { name: "PNS UK", logo: "/pnsuk-logo.jpg", url: "https://www.pnsuk.com" },
              { name: "5 Counties Contracting Ltd", logo: "/coxalls-logo.png", url: "https://www.coxalls.co.uk" },
              { name: "Electrical Mechanical & Cooling Ltd", logo: "/emc-logo.png", url: "https://www.emcltd.co" },
              { name: "East London Bus & Coach Company", logo: "/stagecoach-logo.png", url: "https://www.stagecoach.co.uk" },
              { name: "Haverfordwest County AFC", logo: "/haverfordwest-logo.png", url: "https://haverfordwestcountyafc.com/" },
              { name: "Lime Leasing Ltd", logo: "/lime-leasing-logo.png", url: "https://www.limeleasing.com" },
            ].map((sponsor) => (
              <div
                key={sponsor.name}
                className="group bg-white border border-orange-100 hover:border-orange-300 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-gray-50 rounded-xl p-5 mb-5 w-full flex items-center justify-center min-h-[100px] group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-20 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center mb-3">
                    {sponsor.name}
                  </h3>
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-orange-600 hover:text-orange-700 font-medium transition-colors duration-300 text-sm"
                  >
                    Visit Website <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Interested in Sponsoring Future Films?
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              We welcome partnerships with organizations that share our creative vision and commitment to cinematic
              excellence. Contact our production team to learn more.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 md:px-12 py-4 bg-white text-orange-600 text-lg md:text-xl font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              Become a Sponsor
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Trailer Modal */}
      {isPlaying && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsPlaying(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden">
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
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
