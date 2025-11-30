"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Palette, Code, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ComparisonSlider } from "@/components/ui/ComparisonSlider"

const services = [
    {
        title: "Contenido Visual Interactivo",
        description: "Crea experiencias visuales impactantes que cautivan a tu audiencia. Desde animaciones hasta interfaces inmersivas.",
        icon: Palette,
        href: "#visual-content",
        color: "text-accent",
    },
    {
        title: "Desarrollo de Software a Medida",
        description: "Soluciones tecnológicas robustas y escalables diseñadas específicamente para las necesidades de tu negocio.",
        icon: Code,
        href: "#custom-dev",
        color: "text-secondary",
    },
]

export function Services() {
    return (
        <section id="services" className="py-32 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">Nuestros Servicios</h2>
                    <p className="mx-auto max-w-2xl text-xl text-muted-foreground">Dos pilares fundamentales para tu éxito digital</p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 mb-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Link href={service.href} className="block h-full">
                                <Card className="group relative h-full overflow-hidden border-white/10 bg-white/5 transition-all duration-500 hover:border-primary/50 hover:bg-white/10">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    <CardHeader>
                                        <service.icon className={`mb-6 h-16 w-16 ${service.color} transition-transform duration-500 group-hover:scale-110`} />
                                        <CardTitle className="text-3xl">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="mb-8 text-lg text-muted-foreground">
                                            {service.description}
                                        </p>
                                        <Button
                                            variant="ghost"
                                            className="text-lg group-hover:text-primary pl-0 hover:bg-transparent"
                                        >
                                            Explorar <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Showcase */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-3xl font-bold mb-4">Transformación Visual</h3>
                        <p className="text-muted-foreground mb-8">Desliza para ver el impacto de nuestras soluciones.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-5xl"
                    >
                        <ComparisonSlider
                            itemOne="/videos/producto-ai.mp4"
                            itemTwo="/images/producto-estandar.png"
                            labelOne="Con Esencia IA"
                            labelTwo="Estándar"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
