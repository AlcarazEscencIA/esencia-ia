"use client"

import { motion } from "framer-motion"
import Link from "next/link"


export function VisualContent() {
    return (
        <section id="visual-content" className="py-24 scroll-snap-start">
            <div className="container mx-auto px-4 space-y-16">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold tracking-wide mb-4">
                        RESPALDO <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">VISUAL</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        El diseño no es decoración. Es una herramienta para guiar, ordenar y comunicar con intención.
                    </p>
                </motion.div>
                {/* Example Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: "OWO 3D", image: "/images/owo3d.png", link: "https://owo3d.fun" },
                        { title: "Viajes Oeste", image: "/images/viajes-oeste.jpg", link: "https://viajesoeste-one.vercel.app" },
                        { title: "Instituto Maria Reina", image: "/images/maria-reina.png", link: "https://page-institucional-two.vercel.app" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="aspect-video rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group hover:border-primary/50 transition-colors"
                        >
                            {item.link !== "#" ? (
                                <Link href={item.link} target="_blank" className="absolute inset-0 z-10">
                                    <span className="sr-only">Ver {item.title}</span>
                                </Link>
                            ) : null}

                            {item.image ? (
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}

                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    )
}
