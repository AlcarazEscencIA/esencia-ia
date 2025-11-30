"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Film, ImageIcon, Play, Layers, Zap, CheckCircle } from "lucide-react"
import { ComparisonSlider } from "@/components/ui/ComparisonSlider"

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
                        VISUAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">IMPACT</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Donde la creatividad se encuentra con la tecnología. Transformamos ideas en experiencias visuales inolvidables.
                    </p>
                </motion.div>
                {/* Comparison Gallery */}
                <div className="grid gap-12 lg:grid-cols-2">
                    {[
                        {
                            title: "Arquitectura: Boceto a Realidad",
                            desc: "Visualización arquitectónica fotorrealista a partir de bocetos simples.",
                            img1: "/images/arquitectura-ai.png",
                            img2: "/images/arquitectura-estandar.png",
                            label1: "Con Esencia AI",
                            label2: "Estandar",
                            color: "text-accent"
                        },
                        {
                            title: "Producto: Studio a Campaña",
                            desc: "Transformación de fotografía de producto simple a arte publicitario.",
                            img1: "/images/zapatillas-ai.png",
                            img2: "/images/zapatillas-estandar.png",
                            label1: "Con Esencia AI",
                            label2: "Estandar",
                            color: "text-primary"
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


                {/* Services Grid */}
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

                {/* Process Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-2xl font-bold mb-8">Nuestro Proceso</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { step: "01", title: "Concepto", desc: "Definimos la dirección artística y el moodboard.", icon: Layers },
                            { step: "02", title: "Producción", desc: "Ejecución técnica con herramientas de vanguardia.", icon: Zap },
                            { step: "03", title: "Entrega", desc: "Formatos optimizados para todas las plataformas.", icon: CheckCircle },
                        ].map((item, i) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-black border border-primary shadow-[0_0_30px_rgba(138,43,226,0.5)] mb-4">
                                    <item.icon className="h-8 w-8 text-white" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                <p className="text-muted-foreground text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section >
    )
}
