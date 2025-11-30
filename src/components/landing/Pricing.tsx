"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Check } from "lucide-react"

const plans = [
    {
        name: "Inicial",
        price: "$999",
        description: "Perfecto para startups y pequeños negocios.",
        features: ["Landing Page Personalizada", "Integración Básica de IA", "Soporte por Email", "Hosting Incluido"],
    },
    {
        name: "Profesional",
        price: "$2,499",
        description: "Para empresas que buscan escalar.",
        features: ["Sitio Web Completo", "Módulos de IA Avanzados", "Dashboard Personalizado", "Soporte Prioritario 24/7", "SEO Optimizado"],
        popular: true,
    },
    {
        name: "Empresarial",
        price: "A Medida",
        description: "Soluciones complejas y de alto rendimiento.",
        features: ["Desarrollo de Software Full Stack", "Infraestructura Dedicada", "Consultoría de IA", "SLA Garantizado", "Equipo Dedicado"],
    },
]

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-black/20">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Planes y Precios</h2>
                    <p className="text-muted-foreground">Inversión transparente para resultados excepcionales</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 lg:gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className={`relative flex h-full flex-col ${plan.popular ? "border-primary shadow-lg shadow-primary/20" : ""}`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                                        Más Popular
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                    <div className="mt-4 text-4xl font-bold">{plan.price}</div>
                                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <ul className="space-y-3">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-center text-sm text-muted-foreground">
                                                <Check className="mr-2 h-4 w-4 text-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                                        Elegir Plan
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
