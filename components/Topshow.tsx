"use client"

export default function TopShowsSection() {
  const shows = [
    {
      id: 1,
      title: "POWER LUNCH",
      image: "/aa.jpg",
      gradient: "from-blue-900/60 to-transparent",
    },
    {
      id: 2,
      title: "CLOSING BELL",
      image: "/hh.jpg",
      gradient: "from-gray-900/60 to-transparent",
    },
    {
      id: 3,
      title: "SQUAWK BOX",
      image: "/hh1.jpg",
      gradient: "from-orange-900/60 to-transparent",
    },
    {
      id: 4,
      title: "MAD MONEY",
      image: "/h1.jpg",
      gradient: "from-red-900/60 to-transparent",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-12 md:mb-16">Top Shows</h2>

        {/* Shows Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {shows.map((show, index) => (
            <div
              key={show.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Show Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${show.gradient}`}></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>

              {/* Show Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-white text-2xl md:text-3xl font-black tracking-wide leading-tight transform transition-transform duration-300 group-hover:scale-105">
                  {show.title}
                </h3>
              </div>

              {/* Decorative Corner Border */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-4 border-l-4 border-white/0 group-hover:w-16 group-hover:h-16 group-hover:border-white/50 transition-all duration-500 rounded-tl-lg"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
