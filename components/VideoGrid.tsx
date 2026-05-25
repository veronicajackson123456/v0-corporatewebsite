'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

interface VideoItem {
  id: string
  title: string
  subtitle: string
  videoUrl: string
  posterUrl?: string
}

interface VideoGridProps {
  videos: VideoItem[]
  title?: string
  subtitle?: string
}

export default function VideoGrid({ videos, title = 'Featured Productions', subtitle = 'Explore our latest cinematic works' }: VideoGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [playingId, setPlayingId] = useState<string | null>(null)

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-background">
      {/* Ambient effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-800/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 space-y-4 text-center">
          <h3 className="text-sm md:text-base tracking-[0.2em] text-secondary uppercase font-semibold">
            {subtitle}
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl cinematic-text">
            {title}
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group relative overflow-hidden rounded-xl"
              onMouseEnter={() => setHoveredId(video.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-black overflow-hidden rounded-xl">
                <video
                  src={video.videoUrl}
                  poster={video.posterUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors duration-300 transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-secondary/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-secondary/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {video.title}
                  </h3>
                  <p className="text-sm md:text-base text-secondary">
                    {video.subtitle}
                  </p>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_rgba(139,0,0,0.2)] group-hover:shadow-[0_0_50px_rgba(139,0,0,0.4)] transition-shadow duration-300 pointer-events-none"></div>
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
