"use client"

import { motion } from "framer-motion"

export default function TopShowsSection() {
  const shows = [
    {
      id: 1,
      title: "PREMIUM COLLECTION",
      image: "/aa.jpg",
    },
    {
      id: 2,
      title: "CINEMATIC VISION",
      image: "/hh.jpg",
    },
    {
      id: 3,
      title: "STORYTELLING ART",
      image: "/hh1.jpg",
    },
    {
      id: 4,
      title: "VISUAL EXCELLENCE",
      image: "/h1.jpg",
    },
  ]

  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-background overflow-hidden">
      {/* Ambient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-96 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-96 w-96 h-96 bg-red-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16 space-y-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm md:text-base tracking-[0.2em] text-secondary uppercase font-bold">
            Featured Productions
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl cinematic-text text-foreground">
            Curated Collection
          </h2>
        </motion.div>

        {/* Shows Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {shows.map((show, index) => (
            <motion.div
              key={show.id}
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Show Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:from-black/90 transition-all duration-500"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-white text-2xl md:text-3xl font-black tracking-wide leading-tight transform transition-transform duration-300 group-hover:scale-105">
                    {show.title}
                  </h3>
                </div>

                {/* Decorative Corner Borders */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-3 border-l-3 border-secondary/0 group-hover:w-12 group-hover:h-12 group-hover:border-secondary/80 transition-all duration-500 rounded-tl-lg"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-3 border-r-3 border-secondary/0 group-hover:w-12 group-hover:h-12 group-hover:border-secondary/80 transition-all duration-500 rounded-br-lg"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg shadow-[0_0_30px_rgba(139,0,0,0.2)] group-hover:shadow-[0_0_50px_rgba(139,0,0,0.4)] transition-shadow duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
