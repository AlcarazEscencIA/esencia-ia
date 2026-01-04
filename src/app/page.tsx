import { Hero } from "@/components/landing/Hero"
import { About } from "@/components/landing/About"
import { Services } from "@/components/landing/Services"
import { VisualContent } from "@/components/landing/VisualContent"
import { CustomDev } from "@/components/landing/CustomDev"
import { Contact } from "@/components/landing/Contact"
import { FixedContactButton } from "@/components/ui/FixedContactButton"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Hero />
        <About />
        <Services />
        <VisualContent />
        <CustomDev />
        <Contact />
      </main>
      <FixedContactButton />
    </>
  )
}
