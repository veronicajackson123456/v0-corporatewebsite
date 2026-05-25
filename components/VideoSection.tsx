"use client"

const videos = [
  {
    id: 1,
    title: "A Beautiful Night for A Beautiful Kill",
    description:
      "A room filled with elegance, anticipation, and the first moments of an unforgettable story.",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20Beautiful%20Night%20for%20A%20Beautiful%20Kill.%20A%20room%20filled%20with%20elegance%2C%20anticipation%2C%20and%20the%20first-H8IMpXanYR9PDeUpUgyHLvvm45RuEt.mp4",
  },
  {
    id: 2,
    title: "The Marbella Takeover",
    description:
      "Introducing the team that will be taking over Marbella this Summer with A Beautiful Kill.",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Introducing%20the%20team%20that%20will%20be%20taking%20over%20Marbella%20this%20Summer%20with%20%40abeautifulkill%20the%20movi-q63aL1g1jjSrAym49np52zHhjz5Eye.mp4",
  },
]

export default function VideoSection() {
  return (
    <section className="bg-gray-950 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-orange-600/20 text-orange-400 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            CNBC Originals
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Watch Our Films
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
            Exclusive behind-the-scenes footage and premieres from our productions.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col gap-4">
              {/* Video Player — native controls include play/pause/mute/fullscreen */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video" style={{ WebkitBackdropFilter: 'blur(10px)' }}>
                <video
                  className="w-full h-full object-cover"
                  controls
                  controlsList="nodownload"
                  playsInline
                  preload="metadata"
                  allowFullScreen
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Caption */}
              <div className="px-1">
                <h3 className="text-white text-lg md:text-xl font-bold leading-tight mb-1">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
