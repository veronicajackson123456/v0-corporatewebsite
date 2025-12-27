"use client"

import Navbar from "@/components/Navbar"
import { useState } from "react"
import { Play, Film, Award } from "lucide-react"
import SpotlightProject from "@/components/Spotlight"

type MediaType = "image" | "video" | "youtube"

interface PortfolioItem {
  id: number
  title: string
  category: string
  type: string
  year: string
  description: string
  image: string
  awards: string[]
  mediaType: MediaType
  youtubeId?: string
  videoUrl?: string
}

export default function FilmPortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "production", label: "Film Production" },
    { id: "broadcasting", label: "Broadcasting" },
    { id: "documentary", label: "Documentaries" },
  ]

  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null)

  const portfolio: PortfolioItem[] = [
    {
      id: 1,
      title: "Market Dynamics",
      category: "production",
      type: "Feature Film",
      year: "2024",
      description: "An in-depth exploration of global market forces and economic trends",
      image: "1.jpg",
      awards: ["Best Business Documentary 2024"],
      mediaType: "image",
    },
    {
      id: 2,
      title: "Wall Street Chronicles",
      category: "broadcasting",
      type: "TV Series",
      year: "2024",
      description: "Daily insights into trading strategies and financial markets",
      image: "2.jpg",
      awards: ["Emmy Nominated"],
      mediaType: "youtube",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Corporate Giants",
      category: "documentary",
      type: "Documentary",
      year: "2023",
      description: "Behind the scenes of Fortune 500 companies",
      image: "3.jpg",
      awards: ["Sundance Selection"],
      mediaType: "video",
      videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v1-lqT4FvziCoG4wt5kOHLMApPIQXNy7V.mp4",
    },
    {
      id: 4,
      title: "Tech Revolution",
      category: "production",
      type: "Feature Film",
      year: "2024",
      description: "The story of innovation in Silicon Valley",
      image: "4.jpg",
      awards: [],
      mediaType: "image",
    },
    {
      id: 5,
      title: "Business Today Live",
      category: "broadcasting",
      type: "Live Show",
      year: "2024",
      description: "Real-time market analysis and expert commentary",
      image: "5.jpg",
      awards: ["Best Live Business Show"],
      mediaType: "youtube",
      youtubeId: "f7oKxlaUBac",
    },
    {
      id: 6,
      title: "Economic Frontiers",
      category: "documentary",
      type: "Documentary Series",
      year: "2023",
      description: "Exploring emerging markets and economic opportunities",
      image: "6.jpg",
      awards: ["Peabody Award"],
      mediaType: "image",
    },
    {
      id: 7,
      title: "Power Lunch",
      category: "broadcasting",
      type: "Live Show",
      year: "2024",
      description: "Midday market updates and financial news coverage",
      image: "aa.jpg",
      awards: ["Broadcasting Excellence Award"],
      mediaType: "image",
    },
    {
      id: 8,
      title: "Global Trade Routes",
      category: "documentary",
      type: "Documentary",
      year: "2023",
      description: "Following the flow of international commerce and trade",
      image: "7.jpg",
      awards: [],
      mediaType: "image",
    },
    {
      id: 9,
      title: "Startup Nation",
      category: "production",
      type: "Feature Film",
      year: "2024",
      description: "The entrepreneurial journey of tech innovators",
      image: "8.jpg",
      awards: ["Best Business Film 2024"],
      mediaType: "image",
    },
    {
      id: 10,
      title: "Closing Bell",
      category: "broadcasting",
      type: "Live Show",
      year: "2024",
      description: "End-of-day market wrap-up and analysis",
      image: "hh.jpg",
      awards: [],
      mediaType: "image",
    },
    {
      id: 11,
      title: "The Innovation Economy",
      category: "documentary",
      type: "Documentary Series",
      year: "2023",
      description: "How technology is reshaping business and industry",
      image: "9.jpg",
      awards: ["Documentary Excellence Award"],
      mediaType: "image",
    },
    {
      id: 12,
      title: "Squawk Box",
      category: "broadcasting",
      type: "Live Show",
      year: "2024",
      description: "Morning business news and market previews",
      image: "hh1.jpg",
      awards: [],
      mediaType: "image",
    },
    {
      id: 13,
      title: "Mad Money",
      category: "broadcasting",
      type: "Live Show",
      year: "2024",
      description: "Investment strategies and stock market insights",
      image: "h1.jpg",
      awards: ["Best Financial Show"],
      mediaType: "image",
    },
    {
      id: 14,
      title: "Fast Money",
      category: "broadcasting",
      type: "Live Show",
      year: "2024",
      description: "Fast-paced market analysis and trading strategies",
      image: "h2.png",
      awards: [],
      mediaType: "image",
    },
    {
      id: 15,
      title: "The Business Titans",
      category: "production",
      type: "Feature Film",
      year: "2023",
      description: "Profiles of the world's most influential CEOs",
      image: "10.jpg",
      awards: ["Audience Choice Award"],
      mediaType: "image",
    },
    {
      id: 16,
      title: "Market Movers",
      category: "documentary",
      type: "Documentary",
      year: "2024",
      description: "The forces driving today's financial markets",
      image: "11.jpg",
      awards: [],
      mediaType: "image",
    },
    {
      id: 17,
      title: "The Digital Revolution",
      category: "production",
      type: "Feature Film",
      year: "2024",
      description: "How digital transformation is changing business forever",
      image: "12.jpg",
      awards: ["Tech Film Festival Winner"],
      mediaType: "image",
    },
    {
      id: 18,
      title: "Executive Suite",
      category: "documentary",
      type: "Documentary Series",
      year: "2023",
      description: "Inside the boardrooms of major corporations",
      image: "images_2.jpg",
      awards: ["Business Documentary Award"],
      mediaType: "image",
    },
  ]

  const filteredPortfolio =
    activeCategory === "all" ? portfolio : portfolio.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Film className="w-8 h-8 md:w-10 md:h-10 text-white" />
              <span className="text-white/90 text-sm md:text-base font-semibold uppercase tracking-widest">
                Our Work
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Film Portfolio</h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
              Film Production and Broadcasting excellence through innovative storytelling and cutting-edge media
              solutions.
            </p>

            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold uppercase tracking-wider">
                  For Sponsorship, Investment or Advertising opportunities&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; please contact info@hmcfo.cc (www.hmcfo.cc)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Project */}
      <SpotlightProject />

      {/* Category Filter */}
      <section className="bg-gray-50 border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-orange-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {filteredPortfolio.map((item, index) => (
              <div
                key={item.id}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  item.mediaType === "video" ? "md:col-span-2 lg:col-span-3" : ""
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Image Container */}
                <div
                  className={`relative overflow-hidden ${item.mediaType === "video" ? "aspect-video" : "aspect-[4/3]"}`}
                >
                  {item.mediaType === "youtube" ? (
                    /* YouTube Video Thumbnail with Play Button */
                    <div className="relative w-full h-full cursor-pointer" onClick={() => setSelectedVideo(item)}>
                      <img
                        src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors">
                        <div className="bg-red-600 p-6 rounded-full shadow-2xl">
                          <Play className="w-10 h-10 text-white fill-white" />
                        </div>
                      </div>
                    </div>
                  ) : item.mediaType === "video" ? (
                    /* Local Video */
                    <video className="w-full h-full object-cover" poster={item.image} controls>
                      <source src={item.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    /* Regular Image */
                    <>
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    </>
                  )}

                  {item.mediaType !== "video" && (
                    <>
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        {item.type}
                      </div>

                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold">
                        {item.year}
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>

                  {/* Awards */}
                  {item.awards.length > 0 && (
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-gray-700">
                        {item.awards.map((award, idx) => (
                          <div key={idx} className="font-semibold">
                            {award}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
            <div></div>
            <div>
              
            </div>
            
          </div>

          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/90 text-base md:text-lg leading-relaxed font-light">
                For advertising, sponsorship or investment opportunities
              </p>
              <p className="text-white text-base md:text-lg leading-relaxed font-light mt-2">
                please contact our official agents
              </p>
              <p className="text-white font-semibold text-lg md:text-xl mt-4">HMCFO Ltd</p>
              <a
                href="https://www.hmcfo.cc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-white hover:text-orange-200 transition-colors text-base md:text-lg underline decoration-2 underline-offset-4"
              >
                www.hmcfo.cc
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && selectedVideo.mediaType === "youtube" && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-5xl aspect-video">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors text-sm font-bold uppercase tracking-wider"
            >
              Close ✕
            </button>
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

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
    </div>
  )
}
