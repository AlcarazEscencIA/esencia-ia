"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Globe, Building2, ShoppingCart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

const services = [
    {
        title: "Landing Page estratégica",
        description: "Ideal para presentar un servicio, lanzar una propuesta o captar clientes. Una estructura clara, directa y enfocada en convertir visitas en consultas.",
        icon: Globe,
        href: "#contact",
        color: "text-accent",
    },
    {
        title: "Web institucional",
        description: "Pensada para marcas, profesionales e instituciones que necesitan transmitir confianza, orden y profesionalismo. Un sitio que funciona como canal oficial y respaldo digital.",
        icon: Building2,
        href: "#contact",
        color: "text-primary",
    },
    {
        title: "Tienda online básica",
        description: "Para proyectos que quieren comenzar a vender por internet de forma simple, clara y profesional, sin depender exclusivamente de redes sociales.",
        icon: ShoppingCart,
        href: "#contact",
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
                    <h2 className="mb-6 text-4xl font-bold tracking-wide sm:text-5xl md:text-6xl">Nuestros Servicios</h2>
                    <p className="mx-auto max-w-2xl text-xl text-muted-foreground">Soluciones digitales para cada etapa de crecimiento</p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-3 lg:gap-12 mb-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Link href={service.href} className="block h-full">
                                <Card className="group relative h-full overflow-hidden border-white/10 bg-black/60 transition-all duration-500 hover:border-primary/50 hover:bg-black/80 backdrop-blur-sm">
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
                                            Consultar <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
