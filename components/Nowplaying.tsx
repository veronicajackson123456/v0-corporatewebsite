"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

export default function NowPlayingSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-background overflow-hidden">
      {/* Ambient effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-96 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-sm md:text-base tracking-[0.2em] text-secondary uppercase font-bold">
                Now Playing
              </h3>
              <h2 className="text-5xl md:text-6xl lg:text-7xl cinematic-text leading-tight">
                Premium Entertainment
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              Experience the pinnacle of cinematic storytelling with our carefully curated selection of premium productions.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <p className="text-secondary text-xs font-bold">HD</p>
                </div>
              </div>
              <div>
                <p className="text-secondary font-bold text-sm tracking-wide">4K AVAILABLE</p>
                <p className="text-muted-foreground text-sm">Crystal clear cinematic quality</p>
              </div>
            </div>

            <div className="pt-4">
              <button className="px-8 py-4 bg-primary hover:bg-red-700 text-foreground font-bold text-sm tracking-widest uppercase transition-all duration-300 rounded-lg cinematic-glow inline-flex items-center gap-3">
                <Play className="w-5 h-5 fill-current" />
                Watch Now
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-video bg-black group-hover:shadow-[0_0_50px_rgba(139,0,0,0.4)] transition-shadow duration-300">
              <img
                src="/1.jpg"
                alt="Premium Content"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors duration-300 transform group-hover:scale-110">
                  <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-secondary/50 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-secondary/50 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="mt-16 md:mt-20 border-t border-secondary/20"></div>
    </section>
  )
}
