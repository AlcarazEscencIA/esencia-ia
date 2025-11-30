"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import Link from "next/link"
import { ArrowLeft, Play, Image as ImageIcon, Film, Layers, Zap, CheckCircle } from "lucide-react"
import { ComparisonSlider } from "@/components/ui/ComparisonSlider"
import { useRef } from "react"

export default function VisualContentPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  return (
    <div ref={containerRef} className="min-h-screen bg-black">
      {/* Immersive Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
          {/* Placeholder for Video Background */}
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-50" />
        </motion.div>

        <div className="container relative z-20 mx-auto px-4 text-center">
          <Link href="/">
            <Button variant="ghost" className="absolute top-8 left-4 md:left-8 text-white/70 hover:text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver
            </Button>
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 text-5xl font-black tracking-tighter sm:text-7xl md:text-8xl"
          >
            VISUAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">IMPACT</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto max-w-2xl text-xl text-gray-300"
          >
            Donde la creatividad se encuentra con la tecnología.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24 space-y-32">
        {/* Gallery of Comparisons */}
        <section className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Transformación Digital</h2>
            <p className="text-muted-foreground">El poder de una imagen perfeccionada. Desliza para ver la diferencia.</p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            {[
              {
                title: "Arquitectura: Sketch a Realidad",
                desc: "Visualización arquitectónica fotorrealista a partir de bocetos.",
                img1: "/images/arch-render.png",
                img2: "/images/arch-sketch.png",
                label1: "Render 8K",
                label2: "Sketch",
                color: "text-accent"
              },
              {
                title: "Producto: Studio a Campaña",
                desc: "Transformación de fotografía de producto simple a arte publicitario.",
                img1: "/images/sneaker-ad.png",
                img2: "/images/sneaker-plain.png",
                label1: "Campaña AI",
                label2: "Foto Studio",
                color: "text-primary"
              },
              {
                title: "Restauración Digital",
                desc: "Recuperación de detalles perdidos y eliminación de ruido.",
                img1: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
                img2: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop&blur=10",
                label1: "Restaurado",
                label2: "Dañado",
                color: "text-secondary"
              },
              {
                title: "Color Grading Cinemático",
                desc: "Atmósfera y estilo visual para narrativa emocional.",
                img1: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2621&auto=format&fit=crop",
                img2: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2621&auto=format&fit=crop&hue=180",
                label1: "Graded",
                label2: "Log",
                color: "text-white"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className={`text-xl font-semibold mb-2 ${item.color}`}>{item.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{item.desc}</p>
                <ComparisonSlider
                  itemOne={item.img1}
                  itemTwo={item.img2}
                  labelOne={item.label1}
                  labelTwo={item.label2}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* AI Video Generation */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Generación de Video IA</h2>
            <p className="text-muted-foreground">De imagen estática a narrativa en movimiento.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Cinemagraphs", url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
              { title: "Morphing 3D", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
              { title: "Character Animation", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }
            ].map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden border border-white/10 bg-black/50 aspect-video group"
              >
                <video
                  src={video.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                  <h4 className="font-bold text-white">{video.title}</h4>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-5 w-5 fill-white text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Animación 3D", icon: Film, desc: "Modelado y animación de productos con realismo fotográfico." },
              { title: "Diseño UI/UX", icon: ImageIcon, desc: "Interfaces modernas que priorizan la experiencia de usuario." },
              { title: "Motion Graphics", icon: Play, desc: "Narrativa visual en movimiento para explicar tu marca." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass hover:bg-white/5 border-white/10 transition-colors">
                  <CardHeader>
                    <item.icon className="mb-4 h-10 w-10 text-primary" />
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Timeline */}
        <section className="relative border-l border-white/10 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
          <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-primary via-accent to-transparent hidden md:block md:left-1/2" />

          <div className="space-y-24">
            {[
              { step: "01", title: "Concepto", desc: "Definimos la dirección artística y el moodboard.", icon: Layers },
              { step: "02", title: "Producción", desc: "Ejecución técnica con herramientas de vanguardia.", icon: Zap },
              { step: "03", title: "Entrega", desc: "Formatos optimizados para todas las plataformas.", icon: CheckCircle },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 text-left md:text-right">
                  {index % 2 !== 0 && (
                    <div className="hidden md:block">
                      <h3 className="text-3xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  )}
                  {index % 2 === 0 && (
                    <div className="block md:hidden">
                      <h3 className="text-3xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  )}
                  {index % 2 === 0 && (
                    <div className="hidden md:block text-left">
                      <h3 className="text-3xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  )}
                </div>

                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-black border border-primary shadow-[0_0_30px_rgba(138,43,226,0.5)]">
                  <item.icon className="h-8 w-8 text-white" />
                </div>

                <div className="flex-1">
                  {index % 2 !== 0 && (
                    <div className="block md:hidden">
                      <h3 className="text-3xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pb-20">
          <Card className="mx-auto max-w-3xl bg-gradient-to-r from-primary/10 to-accent/10 border-white/10">
            <CardContent className="p-12">
              <h3 className="mb-6 text-3xl font-bold">¿Listo para elevar tu marca?</h3>
              <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-white text-black hover:bg-gray-200">
                Iniciar Proyecto Visual
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
