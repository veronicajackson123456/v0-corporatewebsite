"use client"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* ── Full-bleed background photo ── */}
      <div className="absolute inset-0">
        <img
          src="/hh.jpg"
          alt=""
          className="w-full h-full object-cover object-center scale-105"
          style={{ filter: "brightness(0.55) saturate(1.1)" }}
        />
        {/* Multi-layer gradient for depth and warmth */}
        <div className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.20) 60%, rgba(0,0,0,0.80) 100%)"
          }}
        />
        {/* Warm amber vignette from the bottom */}
        <div className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 110% 60% at 50% 100%, rgba(194,97,12,0.38) 0%, transparent 70%)"
          }}
        />
        {/* Subtle side vignettes */}
        <div className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 100% at 0% 50%, rgba(0,0,0,0.45) 0%, transparent 60%), radial-gradient(ellipse 50% 100% at 100% 50%, rgba(0,0,0,0.45) 0%, transparent 60%)"
          }}
        />
      </div>

      {/* ── Navbar ── */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-14 py-6">
        {/* CNBC logo */}
        <a href="/home" className="group flex-shrink-0">
          <div className="px-4 py-1.5 rounded-lg bg-orange-500 group-hover:bg-orange-600 transition-colors duration-200 shadow-lg">
            <span className="text-white text-xl font-bold tracking-tight">CNBC</span>
          </div>
        </a>

        {/* Nav links — center */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { label: "HOME", href: "/home" },
            { label: "FILM PRODUCTION", href: "/portfolio" },
            { label: "SPONSORS", href: "/sponsors" },
            { label: "CONTACT", href: "/contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-white/80 hover:text-white text-xs font-semibold tracking-[0.18em] uppercase transition-colors duration-200 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* ION logo */}
        <a
          href="https://ionplustv.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex-shrink-0"
        >
          <div className="px-4 py-1.5 rounded-lg bg-white group-hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            <span className="text-blue-700 text-xl font-bold tracking-tight">ION</span>
          </div>
        </a>
      </nav>

      {/* ── Main hero content ── */}
      <main className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">

        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
          <span className="text-white">Welcome to </span>
          <span className="text-orange-500">CNBC</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-lg md:text-xl mb-12 font-light tracking-wide">
          Corporate Network Broadcasting Cinema
        </p>

        {/* ── CTA buttons ── */}
        <div className="flex flex-col items-center gap-2 mb-8">

          {/* Button labels */}
          <div className="flex justify-center gap-24 mb-4 w-full">
            <span className="text-white/50 text-xs tracking-wide">Click here for</span>
            <span className="text-white/50 text-xs tracking-wide">Click here</span>
          </div>

          {/* Buttons row */}
          <div className="flex gap-8 justify-center">
            {/* CNBC */}
            <a
              href="/home"
              className="group relative overflow-hidden rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 px-20 py-3"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-white text-lg font-bold tracking-wide">CNBC</span>
            </a>

            {/* ION Plus */}
            <a
              href="https://ionplustv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-2xl hover:shadow-blue-600/50 px-20 py-3"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-white text-lg font-bold tracking-wide">ION Plus</span>
            </a>
          </div>

        </div>

        {/* Orange divider line */}
        <div className="w-24 h-1 bg-orange-500 my-8 rounded-full" />

        {/* Disclaimer Box */}
        <div className="mt-16 w-full max-w-2xl bg-black/40 backdrop-blur-sm border border-orange-500/30 rounded-lg p-6">
          <div className="flex gap-4">
            <div className="text-orange-500 text-lg font-bold flex-shrink-0 mt-0.5">ⓘ</div>
            <div>
              <h3 className="text-orange-500 text-sm font-bold tracking-wide mb-2">IMPORTANT NOTICE</h3>
              <p className="text-white/80 text-xs leading-relaxed">
                We are not connected to or representatives of CNBC News. They are a different company and not affiliated with us in any way.
              </p>
              <p className="text-white/70 text-xs leading-relaxed mt-2">
                Corporate Network Broadcasting Cinema operates independently as a film production and broadcasting company.
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* ── Decorative bottom gradient bar ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 z-30"
        style={{ background: "linear-gradient(90deg, transparent, #f97316, #ea580c, transparent)" }}
      />
    </div>
  )
}
