import { Hero } from "@/components/landing/Hero"
import { Services } from "@/components/landing/Services"
import { Pricing } from "@/components/landing/Pricing"
import { Contact } from "@/components/landing/Contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Services />
      <Pricing />
      <Contact />
    </main>
  )
}
