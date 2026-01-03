"use client"

import { motion } from "framer-motion"

export function About() {
    return (
        <section id="about" className="py-24 relative bg-black/70 border-y border-white/10 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Main Title */}
                        <div className="space-y-4">
                            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1]">
                                En <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%_auto] hover:bg-right transition-[background-position] duration-500 cursor-default">ESENCiA</span>
                                <br />
                                <span className="block">no hacemos</span>
                                <span className="block">páginas web</span>
                                <span className="block">sin sentido.</span>
                            </h2>
                        </div>

                        {/* Subtitle */}
                        <div className="border-l-4 border-primary pl-6">
                            <p className="text-xl font-semibold text-white/90">
                                Diseño con propósito.
                            </p>
                        </div>

                        {/* Description */}
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Diseñamos sitios pensados para cumplir un objetivo concreto: comunicar con claridad, generar confianza y acompañar el crecimiento de cada proyecto.
                            </p>
                            <p>
                                Trabajamos desde la estructura, la estrategia y el diseño consciente, entendiendo la web como una herramienta clave de profesionalización y presencia digital.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <a
                                href="#contact"
                                className="inline-flex h-14 items-center justify-center rounded-none border-2 border-primary bg-transparent px-10 text-base font-medium text-white transition-all hover:bg-primary hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
                            >
                                Iniciar Conversación
                            </a>
                        </div>
                    </motion.div>

                    {/* Image (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] lg:h-[600px]"
                    >
                        {/* Main Large Image */}
                        <div className="relative h-full w-full overflow-hidden border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
                            <img
                                src="/images/about-mockup.png"
                                alt="Diseño Estratégico"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Smaller Overlapping Image - Bottom Left */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="absolute -bottom-8 -left-8 lg:-bottom-12 lg:-left-12 w-48 h-48 lg:w-64 lg:h-64 overflow-hidden border-4 border-background shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent z-10" />
                            <img
                                src="/images/about-mockup.png"
                                alt="Detalle de diseño"
                                className="h-full w-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
