import HeroSection from "../components/Hero"
import Footer from "../components/Footer"
import NowPlayingSection from "../components/Nowplaying"
import MysterySlider from "../components/Myster"
import TopShowsSection from "../components/Topshow"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <NowPlayingSection />
      <MysterySlider />
      <TopShowsSection />
      <Footer />
    </div>
  )
}
