"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

export function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid gap-12 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
                            ¿Listo para transformar tu negocio?
                        </h2>
                        <p className="mb-8 text-lg text-muted-foreground">
                            En Esencia IA, no solo construimos software; construimos el futuro de tu empresa.
                            Nuestra combinación única de diseño visual y potencia técnica nos permite entregar
                            resultados que superan las expectativas.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    📧
                                </div>
                                <div>
                                    <div className="font-medium">Email</div>
                                    <div className="text-muted-foreground">contacto@esencia-ia.com</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    📍
                                </div>
                                <div>
                                    <div className="font-medium">Ubicación</div>
                                    <div className="text-muted-foreground">Buenos Aires, Argentina</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Contáctanos</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium">Nombre</label>
                                            <Input id="name" placeholder="Tu nombre" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                                            <Input id="email" type="email" placeholder="tu@email.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
                                        <textarea
                                            id="message"
                                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 glass"
                                            placeholder="Cuéntanos sobre tu proyecto..."
                                        />
                                    </div>
                                    <Button className="w-full">Enviar Mensaje</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
