"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/Card"
import { Code, Database, Globe, Server, Cpu, Smartphone, CheckCircle, ArrowRight } from "lucide-react"

export function CustomDev() {
    return (
        <section id="custom-dev" className="py-24 scroll-snap-start">
            <div className="container mx-auto px-4 space-y-16">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        CUSTOM <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">DEV</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Arquitectura de software escalable para el futuro. Construimos soluciones digitales robustas y personalizadas.
                    </p>
                </motion.div>

                {/* Tech Stack Grid */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-8 text-center"
                    >
                        Stack Tecnológico
                    </motion.h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            { name: "Next.js", icon: Globe },
                            { name: "React", icon: Code },
                            { name: "Node.js", icon: Server },
                            { name: "PostgreSQL", icon: Database },
                            { name: "AI Integration", icon: Cpu },
                            { name: "Mobile", icon: Smartphone },
                        ].map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary/50 transition-all cursor-pointer"
                            >
                                <tech.icon className="h-10 w-10 mb-4 text-secondary group-hover:scale-110 transition-transform" />
                                <span className="font-medium">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Methodology */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold mb-8">Metodología Ágil</h3>
                        <div className="space-y-6">
                            {[
                                { title: "Discovery", desc: "Análisis profundo de requerimientos y arquitectura." },
                                { title: "Sprint Development", desc: "Iteraciones rápidas con entregables funcionales cada 2 semanas." },
                                { title: "QA & Testing", desc: "Pruebas automatizadas y manuales rigurosas." },
                                { title: "Deployment", desc: "CI/CD pipelines para despliegues sin interrupciones." },
                            ].map((step, i) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="mt-1">
                                        <CheckCircle className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">{step.title}</h4>
                                        <p className="text-muted-foreground text-sm">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-secondary/10 to-primary/10"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-9xl font-black text-white/5 select-none">CODE</div>
                        </div>
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                    </motion.div>
                </div>


            </div>
        </section>
    )
}
