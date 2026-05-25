"use client"

export default function TopShowsSection() {
  const shows = [
    {
      id: 1,
      title: "POWER LUNCH",
      subtitle: "Weekdays at 12PM",
      image: "/aa.jpg",
    },
    {
      id: 2,
      title: "CLOSING BELL",
      subtitle: "Weekdays at 4PM",
      image: "/hh.jpg",
    },
    {
      id: 3,
      title: "SQUAWK BOX",
      subtitle: "Weekdays at 6AM",
      image: "/hh1.jpg",
    },
    {
      id: 4,
      title: "MAD MONEY",
      subtitle: "Weekdays at 6PM",
      image: "/h1.jpg",
    },
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Featured Shows
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
            Top Shows
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Discover our most popular programming delivering premium entertainment and insights
          </p>
        </div>

        {/* Shows Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {shows.map((show) => (
            <div
              key={show.id}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Show Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/20 transition-all duration-500"></div>
              </div>

              {/* Show Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-black tracking-wide leading-tight mb-1">
                  {show.title}
                </h3>
                <p className="text-orange-300 text-xs sm:text-sm font-semibold">
                  {show.subtitle}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[3px] border-l-[3px] border-orange-500/0 group-hover:w-12 group-hover:h-12 group-hover:border-orange-500 transition-all duration-500 rounded-tl-xl md:rounded-tl-2xl"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a 
            href="/portfolio"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Shows
          </a>
        </div>
      </div>
    </section>
  )
}
