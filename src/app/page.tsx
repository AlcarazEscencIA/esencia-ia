import { Hero } from "@/components/landing/Hero"
import { Services } from "@/components/landing/Services"
import { VisualContent } from "@/components/landing/VisualContent"
import { CustomDev } from "@/components/landing/CustomDev"
import { Pricing } from "@/components/landing/Pricing"
import { Contact } from "@/components/landing/Contact"
import { ScrollToTop } from "@/components/ui/ScrollToTop"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Services />
        <VisualContent />
        <CustomDev />
        <Pricing />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  )
}
