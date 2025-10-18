import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { Process } from "@/components/Process"
import { Performance } from "@/components/Performance"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Process />
        <Performance />
      </main>
      <Footer />
    </div>
  )
}
