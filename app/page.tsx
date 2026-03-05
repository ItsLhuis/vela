import { ClosingCta } from "@/components/sections/ClosingCta"
import { Features } from "@/components/sections/Features"
import { Footer } from "@/components/sections/Footer"
import { Hero } from "@/components/sections/Hero"
import { Integration } from "@/components/sections/Integration"
import { LogoBar } from "@/components/sections/LogoBar"
import { Navbar } from "@/components/sections/Navbar"
import { Pricing } from "@/components/sections/Pricing"

const Home = () => {
  return (
    <main className="bg-surface">
      <Navbar />
      <Hero />
      <LogoBar />
      <Features />
      <Integration />
      <Pricing />
      <ClosingCta />
      <Footer />
    </main>
  )
}

export default Home
