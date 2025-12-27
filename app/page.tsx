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
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden flex items-center justify-center">
      <Navbar />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,140,0,0.03),transparent_50%)]"></div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,140,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,140,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        {/* Top accent line */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-12 animate-pulse"></div>

        <div className="mb-8">
          
        </div>

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

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
    </div>
  )
}
