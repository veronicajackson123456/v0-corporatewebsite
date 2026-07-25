"use client"

import { useEffect, useRef } from "react"

export default function LandingPage() {
  const handleIONRedirect = () => {
    window.open("https://ionplustv.com/", "_blank", "noopener,noreferrer")
  }

  const handleCNBCRedirect = () => {
    window.location.href = "/home"
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-sans">

      {/* ── Full-bleed cinematic background ── */}
      <div className="absolute inset-0">
        <img
          src="/hh.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Deep layered scrim so text is always legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        {/* Warm orange tint to unify with brand */}
        <div className="absolute inset-0 bg-orange-900/20 mix-blend-multiply" />
      </div>

      {/* ── Top bar ── */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <span className="text-white text-sm font-bold tracking-[0.25em] uppercase opacity-80">
          CNBC
        </span>
        <span className="text-white/50 text-xs tracking-widest uppercase hidden sm:block">
          Corporate Network Broadcasting Cinema
        </span>
        <div className="w-12" /> {/* spacer to keep logo centred */}
      </header>

      {/* ── Hero content ── */}
      <main className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 text-center">

        {/* Eyebrow */}
        <p className="text-orange-400 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-orange-400" />
          Est. 2024
          <span className="inline-block w-8 h-px bg-orange-400" />
        </p>

        {/* Main headline — no "CNBC" in colour, just the full name */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-5xl text-balance mb-4">
          Welcome to Corporate Network Broadcasting Cinema
        </h1>

        {/* Sub-line */}
        <p className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed mb-14 text-balance">
          Premium film production and broadcast entertainment — crafted for global audiences.
        </p>

        {/* ── Two portal cards ── */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-2xl">

          {/* CNBC card */}
          <button
            onClick={handleCNBCRedirect}
            className="group flex-1 relative overflow-hidden rounded-2xl bg-orange-500 hover:bg-orange-600 transition-colors duration-300 text-left"
          >
            {/* Background image thumbnail */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
              <img src="/1.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 px-7 py-7 flex flex-col gap-3">
              <span className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase">Enter</span>
              <span className="text-white text-2xl md:text-3xl font-bold tracking-tight">CNBC</span>
              <span className="text-white/80 text-sm leading-snug">
                Film production, broadcasting & original content
              </span>
              <span className="mt-2 inline-flex items-center gap-2 text-white text-xs font-semibold tracking-widest uppercase">
                Explore
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </div>
          </button>

          {/* ION Plus card */}
          <button
            onClick={handleIONRedirect}
            className="group flex-1 relative overflow-hidden rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 text-left"
          >
            <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <img src="/h1.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 px-7 py-7 flex flex-col gap-3">
              <span className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase">Visit</span>
              <span className="text-white text-2xl md:text-3xl font-bold tracking-tight">ION Plus</span>
              <span className="text-white/70 text-sm leading-snug">
                Entertainment network for premium streaming
              </span>
              <span className="mt-2 inline-flex items-center gap-2 text-white text-xs font-semibold tracking-widest uppercase">
                Discover
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </div>
          </button>

        </div>

        {/* ── Disclaimer ── */}
        <p className="mt-10 text-white/30 text-xs max-w-md leading-relaxed text-balance">
          We are an independent film production and broadcasting company, not affiliated with or representative of CNBC News.
        </p>

      </main>
    </div>
  )
}
