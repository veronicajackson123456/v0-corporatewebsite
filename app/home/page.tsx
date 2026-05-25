import Navbar from "@/components/Navbar"
import HeroSection from "@/components/Hero"
import Footer from "@/components/Footer"
import NowPlayingSection from "@/components/Nowplaying"
import MysterySlider from "@/components/Myster"
import TopShowsSection from "@/components/Topshow"
import VideoShowcase from "@/components/VideoShowcase"
import VideoGrid from "@/components/VideoGrid"

export default function Home() {
  const videos = [
    {
      id: "1",
      title: "A Beautiful Night for A Beautiful Kill",
      subtitle: "A room filled with elegance, anticipation, and the first.",
      videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20Beautiful%20Night%20for%20A%20Beautiful%20Kill.%20A%20room%20filled%20with%20elegance%2C%20anticipation%2C%20and%20the%20first-fLqeDACHLAnFJ5pkvNH0ee96ZOApeM.mp4",
      posterUrl: "/poster1.jpg",
    },
    {
      id: "2",
      title: "Marbella Takeover",
      subtitle: "The team that will be taking over Marbella this Summer.",
      videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Introducing%20the%20team%20that%20will%20be%20taking%20over%20Marbella%20this%20Summer%20with%20%40abeautifulkill%20the%20movi-DshbHXmuBrzg2jTYJPookPXIh3YSSS.mp4",
      posterUrl: "/poster2.jpg",
    },
  ]

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <VideoShowcase 
        videoUrl={videos[0].videoUrl}
        title={videos[0].title}
        subtitle={videos[0].subtitle}
        posterUrl={videos[0].posterUrl}
      />
      <VideoGrid videos={videos} />
      <NowPlayingSection />
      <MysterySlider />
      <TopShowsSection />
      <Footer />
    </div>
  )
}
