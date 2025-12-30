"use client"

import { motion } from "framer-motion"
import { Layers, Zap, CheckCircle, FileText, Layout, Code } from "lucide-react"

export function CustomDev() {
    return (
        <section id="process" className="py-24 scroll-snap-start relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" />
            {/* Grid removed */}

            <div className="container mx-auto px-4 space-y-16 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        PROCESO Y <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">ENFOQUE</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Cada proyecto se desarrolla a través de un proceso claro y ordenado.
                    </p>
                </motion.div>

                {/* Methodology Steps */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-8">
                            {[
                                { title: "Análisis del proyecto", desc: "Objetivos y necesidades reales.", icon: FileText },
                                { title: "Estructura del contenido", desc: "Definición del recorrido del usuario.", icon: Layers },
                                { title: "Diseño visual", desc: "Alineado a la identidad del proyecto.", icon: Layout },
                                { title: "Desarrollo técnico", desc: "Simple, rápido y escalable.", icon: Code },
                                { title: "Entrega y puesta en marcha", desc: "Sitio listo para recibir visitas.", icon: CheckCircle },
                            ].map((step, i) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 items-start"
                                >
                                    <div className="mt-1 min-w-10">
                                        <step.icon className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">{step.title}</h4>
                                        <p className="text-muted-foreground text-sm">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="text-lg font-medium text-white/80">
                                Este enfoque permite construir sitios funcionales, coherentes y preparados para crecer.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-secondary/10 to-primary/10"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-8xl font-black text-white/5 select-none text-center leading-none">
                                STRAT<br />EGY
                            </div>
                        </div>
                        <div className="absolute inset-0 opacity-20" />
                        {/* Grid removed */}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
