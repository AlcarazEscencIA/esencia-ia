"use client"

import { motion } from "framer-motion"

export function About() {
    return (
        <section className="relative w-full">
            <div className="grid lg:grid-cols-2 min-h-[80vh]">
                {/* Visual Side (Left) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative h-full w-full min-h-[400px] lg:min-h-full overflow-hidden order-1 lg:order-1"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/60 z-10" />
                    <img
                        src="/images/arquitectura-ai.png"
                        alt="Diseño Estratégico"
                        className="h-full w-full object-cover"
                    />
                    {/* Decorative S symbol from reference */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block text-primary/40 font-serif text-[20rem] opacity-50 mix-blend-overlay italic">
                        S
                    </div>
                </motion.div>

                {/* Content Side (Right) */}
                <div className="flex flex-col justify-center p-8 lg:p-20 bg-background relative z-10 order-2 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10 max-w-xl"
                    >
                        <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl leading-tight text-primary">
                            En ESENCiA no hacemos páginas
                            <span className="block text-white mt-2">web sin sentido.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Diseñamos sitios pensados para cumplir un objetivo concreto: comunicar con claridad, generar confianza y acompañar el crecimiento de cada proyecto.
                            </p>
                            <p className="text-white font-medium">
                                Trabajamos desde la estructura, la estrategia y el diseño consciente, entendiendo la web como una herramienta clave de profesionalización y presencia digital.
                            </p>
                            <p>
                                Tu oficina en Londres, tu cafetería favorita en Dubái o virtualmente desde cualquier lugar.
                            </p>
                        </div>

                        <div className="pt-4">
                            <a
                                href="#contact"
                                className="inline-flex h-14 items-center justify-center rounded-none border border-primary/50 bg-transparent px-10 text-base font-medium text-white transition-all hover:bg-primary/10 hover:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            >
                                Iniciar Conversación
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
