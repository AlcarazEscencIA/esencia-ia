import { Hero } from "@/components/landing/Hero"
import { About } from "@/components/landing/About"
import { Services } from "@/components/landing/Services"
import { VisualContent } from "@/components/landing/VisualContent"
import { CustomDev } from "@/components/landing/CustomDev"
import { Institutional } from "@/components/landing/Institutional"
import { Pricing } from "@/components/landing/Pricing"
import { Contact } from "@/components/landing/Contact"
import { ScrollToTop } from "@/components/ui/ScrollToTop"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Hero />
        <About />
        <Services />
        <CustomDev />
        <VisualContent />
        <Institutional />
        <Pricing />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  )
}
