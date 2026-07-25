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

        {/* Thin rule above */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-16 bg-orange-400/70" />
          <span className="text-orange-300 text-[11px] font-semibold tracking-[0.35em] uppercase">
            Est. 2024
          </span>
          <div className="h-px w-16 bg-orange-400/70" />
        </div>

        {/* Main heading */}
        <h1
          className="text-white font-bold leading-[1.08] tracking-tight text-balance mb-6"
          style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)", maxWidth: "900px" }}
        >
          Welcome to{" "}
          <span className="block text-white">
            Corporate Network Broadcasting Cinema
          </span>
        </h1>

        {/* Thin divider */}
        <div className="w-20 h-0.5 bg-orange-500 mb-8 rounded-full" />

        {/* Sub-copy */}
        <p className="text-white/65 text-base md:text-lg max-w-lg leading-relaxed mb-14 text-balance">
          Premium film production and broadcast entertainment — crafted for global audiences.
        </p>

        {/* ── CTA buttons ── */}
        <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full max-w-sm sm:max-w-none sm:justify-center">

          {/* CNBC */}
          <a
            href="/home"
            className="group relative overflow-hidden rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0"
            style={{ minWidth: 220 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex flex-col items-center px-10 py-5 gap-1">
              <span className="text-orange-100/70 text-[10px] font-semibold tracking-[0.25em] uppercase">
                Click here for
              </span>
              <span className="text-white text-2xl font-bold tracking-tight">CNBC</span>
            </div>
          </a>

          {/* Divider on desktop */}
          <div className="hidden sm:flex items-center">
            <div className="w-px h-16 bg-white/20 rounded-full" />
          </div>

          {/* ION Plus */}
          <a
            href="https://ionplustv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-blue-700 hover:bg-blue-800 transition-all duration-300 shadow-2xl hover:shadow-blue-700/40 hover:-translate-y-0.5 active:translate-y-0"
            style={{ minWidth: 220 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex flex-col items-center px-10 py-5 gap-1">
              <span className="text-blue-200/70 text-[10px] font-semibold tracking-[0.25em] uppercase">
                Click here
              </span>
              <span className="text-white text-2xl font-bold tracking-tight">ION Plus</span>
            </div>
          </a>

        </div>

        {/* Disclaimer */}
        <p className="mt-12 text-white/30 text-[11px] max-w-sm leading-relaxed text-balance">
          We are an independent film production and broadcasting company, not affiliated with or representative of CNBC News.
        </p>

      </main>

      {/* ── Decorative bottom gradient bar ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 z-30"
        style={{ background: "linear-gradient(90deg, transparent, #f97316, #ea580c, transparent)" }}
      />
    </div>
  )
}
