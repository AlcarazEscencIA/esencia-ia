"use client"

import { motion } from "framer-motion"


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
                    <h2 className="text-4xl font-bold mb-4">
                        RESPALDO <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">VISUAL</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        El diseño no es decoración. Es una herramienta para guiar, ordenar y comunicar con intención.
                    </p>
                </motion.div>
                {/* Example Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((item) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: item * 0.1 }}
                            className="aspect-video rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group hover:border-primary/50 transition-colors"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="text-muted-foreground font-light tracking-widest uppercase text-sm">Ejemplo {item}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    )
}
