"use client"

import Navbar from "@/components/Navbar"

export default function LandingPage() {
  const handleIONRedirect = () => {
    window.open("https://ionplustv.com/", "_blank", "noopener,noreferrer")
  }

  const handleCNBCRedirect = () => {
    window.location.href = "/home"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 relative overflow-hidden flex flex-col">
      <Navbar />

      {/* Animated background gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>

      {/* Main content container */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-12">
        {/* Top accent line with animation */}
        <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-16 rounded-full"></div>

        {/* Main headline - Full company name, no CNBC in orange */}
        <div className="mb-8 text-center max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent font-sans block">
              Welcome to
            </span>
            <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 bg-clip-text text-transparent font-sans block mt-2">
              Corporate Network
            </span>
            <span className="bg-gradient-to-r from-gray-100 via-white to-gray-100 bg-clip-text text-transparent font-sans block mt-2">
              Broadcasting Cinema
            </span>
          </h1>
        </div>

        {/* Subheadline with description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 tracking-wide text-center max-w-2xl leading-relaxed font-light">
          Crafting premium film production and broadcasting experiences with excellence and innovation at every frame.
        </p>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mb-12"></div>

        {/* Two Button Layout - Enhanced */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 w-full max-w-3xl">
          {/* CNBC Button */}
          <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
            <p className="text-gray-400 text-sm font-light uppercase tracking-widest">Explore</p>
            <button
              onClick={handleCNBCRedirect}
              className="group relative w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-lg md:text-xl font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,140,0,0.6)] hover:scale-105 active:scale-95 min-w-[200px] uppercase tracking-wide"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                CNBC Productions
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <p className="text-xs text-gray-500">Premium film & broadcasting</p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-20 bg-gradient-to-b from-transparent via-orange-500/50 to-transparent"></div>

          {/* ION Plus Button */}
          <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
            <p className="text-gray-400 text-sm font-light uppercase tracking-widest">Discover</p>
            <button
              onClick={handleIONRedirect}
              className="group relative w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg md:text-xl font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] hover:scale-105 active:scale-95 min-w-[200px] uppercase tracking-wide"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                ION Plus TV
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <p className="text-xs text-gray-500">Entertainment network</p>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-16 rounded-full"></div>
      </div>

      {/* Footer disclaimer card */}
      <div className="relative z-10 px-4 md:px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 md:px-8 py-6 shadow-2xl hover:bg-white/7 transition-colors duration-300 group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-500/20 group-hover:bg-orange-500/30 transition-colors">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm md:text-base font-bold text-orange-400 mb-2 tracking-wide uppercase">Important Notice</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We are an independent film production and broadcasting company. We are not connected to or representatives of CNBC News, which is a separate entity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
