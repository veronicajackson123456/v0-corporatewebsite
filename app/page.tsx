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
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden flex flex-col">
      <Navbar />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,140,0,0.03),transparent_50%)]"></div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,140,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,140,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Main content container */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
        {/* Top accent line */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-12 animate-pulse"></div>

        <div className="mb-8"></div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-center">
          <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent font-sans">
            Welcome to{" "}
          </span>
          <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-clip-text text-transparent font-sans">
            CNBC
          </span>
        </h1>

        {/* Subheadline */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 mb-16 tracking-wide text-center">
          Corporate Network Broadcasting Cinema
        </h2>

        {/* Two Button Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-2xl">
          {/* CNBC Button - stays on current page */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-gray-400 text-sm font-light">Click here for</p>
            <button
              onClick={handleCNBCRedirect}
              className="group relative px-10 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-lg md:text-xl font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,140,0,0.5)] hover:scale-105 active:scale-95 min-w-[180px]"
            >
              <span className="relative z-10">CNBC</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* ION Plus Button - redirects to external site */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-gray-400 text-sm font-light">Click here</p>
            <button
              onClick={handleIONRedirect}
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg md:text-xl font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:scale-105 active:scale-95 min-w-[180px]"
            >
              <span className="relative z-10">ION Plus</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-16 animate-pulse"></div>
      </div>

      <div className="relative z-10 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-sm bg-zinc-900/40 border border-zinc-800/50 rounded-2xl px-8 py-6 shadow-lg">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-orange-400 mb-2 tracking-wide uppercase">Important Notice</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We are not connected to or representatives of CNBC News. They are a different company and not
                  affiliated with us in any way.
                  <span className="block mt-2 text-gray-400 text-xs">
                    Corporate Network Broadcasting Cinema operates independently as a film production and broadcasting
                    company.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
    </div>
  )
}
