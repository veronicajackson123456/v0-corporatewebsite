'use client'

import { useState } from 'react'
import { Play, Pause } from 'lucide-react'

interface VideoShowcaseProps {
  videoUrl: string
  title: string
  subtitle: string
  posterUrl?: string
}

export default function VideoShowcase({ videoUrl, title, subtitle, posterUrl }: VideoShowcaseProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)

  return (
    <section className="relative w-full min-h-screen bg-background flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-red-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h3 className="text-sm md:text-base tracking-[0.2em] text-secondary uppercase font-semibold">
                Featured Content
              </h3>
              <h2 className="text-5xl md:text-6xl lg:text-7xl cinematic-text leading-tight">
                {title}
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="group relative px-8 md:px-10 py-3 md:py-4 bg-primary hover:bg-red-700 text-white font-semibold text-sm md:text-base transition-all duration-300 overflow-hidden rounded-lg cinematic-glow"
              >
                <div className="flex items-center justify-center gap-2">
                  {isPlaying ? (
                    <>
                      <Pause className="w-5 h-5" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 ml-0.5" />
                      <span>Watch Now</span>
                    </>
                  )}
                </div>
              </button>

              <button className="px-8 md:px-10 py-3 md:py-4 border-2 border-secondary text-secondary hover:bg-secondary/10 font-semibold text-sm md:text-base transition-all duration-300 rounded-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Video */}
          <div
            className="relative group rounded-2xl overflow-hidden"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            {/* Video container with aspect ratio */}
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <video
                src={videoUrl}
                poster={posterUrl}
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Play button overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors duration-300">
                    <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                  </div>
                </div>
              )}

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-secondary/50 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(139,0,0,0.3)] group-hover:shadow-[0_0_60px_rgba(139,0,0,0.5)] transition-shadow duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
