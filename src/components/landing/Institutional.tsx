"use client"

import { motion } from "framer-motion"
import { Building, GraduationCap } from "lucide-react"

export function Institutional() {
    return (
        <section className="py-24 relative bg-black/70 border-y border-white/10 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6">Institucional y Educación</h2>
                        <div className="space-y-6 text-lg text-muted-foreground">
                            <p>
                                Trabajamos con instituciones y proyectos educativos que necesitan una presencia digital clara, confiable y profesional.
                            </p>
                            <p>
                                Entendemos la web como un canal institucional clave: un espacio donde la información debe ser accesible, ordenada y alineada a los valores de la organización.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="p-8 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center justify-center text-center">
                            <Building className="h-12 w-12 text-primary mb-4" />
                            <span className="font-bold">Instituciones</span>
                        </div>
                        <div className="p-8 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center justify-center text-center">
                            <GraduationCap className="h-12 w-12 text-secondary mb-4" />
                            <span className="font-bold">Educación</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
