"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Text content defined in the request
const servicesData = [
    {
        id: "landing",
        title: "LANDING",
        contentTitlePre: "Landing Page que ",
        contentTitleHighlight: "destacan",
        contentTitlePost: "",
        content: "Diseñamos landing pages enfocadas en un solo objetivo: convertir. Cada sección, cada animación y cada palabra está pensada para guiar al usuario hacia la acción, sin distracciones ni elementos innecesarios. Ideales para campañas, lanzamientos y validación de productos o servicios.",
        image: "/images/about-mockup.png",
    },
    {
        id: "institucional",
        title: "INSTITUCIONAL",
        contentTitlePre: "",
        contentTitleHighlight: "Identidad",
        contentTitlePost: " Institucional",
        content: "Creamos sitios institucionales que comunican quién sos, qué hacés y por qué tu marca es distinta. Diseño sobrio, estructura clara y una narrativa visual alineada con tus valores, pensada para generar confianza y presencia digital sólida.",
        image: "/images/maria-reina.png",
    },
    {
        id: "ecommerce",
        title: "E-COMMERCE",
        contentTitlePre: "E-commerce para ",
        contentTitleHighlight: "escalar",
        contentTitlePost: "",
        content: "Desarrollamos tiendas online funcionales, claras y optimizadas para vender. Desde la arquitectura de productos hasta la experiencia de compra, todo está diseñado para crecer, escalar y adaptarse a tu negocio.",
        image: "/images/sneaker-ad.png",
    },
]

export function Services() {
    const [activeService, setActiveService] = useState<string | null>(null)

    const toggleService = (id: string) => {
        if (activeService === id) {
            setActiveService(null)
        } else {
            setActiveService(id)
        }
    }

    const activeData = servicesData.find((s) => s.id === activeService)

    return (
        <section id="services" className="pt-10 pb-20 lg:pt-16 lg:pb-32 relative">
            {/* Main Titles - Contained, Centered */}
            <div className="container mx-auto px-4 relative z-20 mb-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 max-w-7xl mx-auto px-4">
                    {servicesData.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => toggleService(service.id)}
                            className={`group relative text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter transition-all duration-500 uppercase leading-none ${activeService === service.id
                                ? "text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%_auto] bg-[0%_0%] hover:bg-[100%_0%] scale-105 opacity-100"
                                : "text-white/40 hover:text-white"
                                }`}
                        >
                            {service.title}
                            <span
                                className={`absolute -bottom-4 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-500 ${activeService === service.id ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                                    }`}
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area - Full Width Dropdown */}
            <div className="w-full relative z-10 -mt-4">
                <AnimatePresence mode="wait">
                    {activeService && activeData && (
                        <motion.div
                            key={activeService}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden relative bg-[#FFFFF0]"
                        >
                            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-16 pb-20 max-w-7xl relative z-10">
                                {/* Text Column */}
                                <div className="flex flex-col justify-center">
                                    <motion.h3
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        className="text-3xl font-bold mb-6 font-sans tracking-tight cursor-default"
                                    >
                                        <span className="text-black">{activeData.contentTitlePre}</span>
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%_auto] bg-[0%_0%] hover:bg-[100%_0%] transition-[background-position] duration-500">
                                            {activeData.contentTitleHighlight}
                                        </span>
                                        <span className="text-black">{activeData.contentTitlePost}</span>
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        className="text-xl text-neutral-600 leading-relaxed mb-8 font-light font-sans tracking-wide"
                                    >
                                        {activeData.content}
                                    </motion.p>
                                </div>

                                {/* Image Column */}
                                <div className="relative">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4, duration: 0.5 }}
                                        className="relative aspect-video w-full overflow-hidden rounded-sm shadow-2xl bg-gray-100"
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={activeData.image}
                                            alt={activeData.title}
                                            className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}
