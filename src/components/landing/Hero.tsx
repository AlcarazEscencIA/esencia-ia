"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { AnimatePresence, useMotionValueEvent } from "framer-motion"

export function Hero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const [isScrolled, setIsScrolled] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const threshold = 200 // Adjust this value based on when you want the transition to happen
        const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1280

        if (latest > threshold && !isScrolled && isDesktop) {
            setIsScrolled(true)
        } else if ((latest <= threshold || !isDesktop) && isScrolled) {
            setIsScrolled(false)
        }
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section ref={ref} className="relative flex h-screen items-center justify-center overflow-hidden">
            {/* Fixed Animated Logo (Top Left) */}
            <AnimatePresence>
                {isScrolled && (
                    <motion.div
                        layoutId="hero-logo"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: 1,
                            scale: 0.4,
                            translateX: "0%", // Reset center alignment
                            translateY: "0%"
                        }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.6, ease: "circOut" }}
                        style={{
                            position: "fixed",
                            zIndex: 50,
                            originX: 0, // Pivot from left
                            originY: 0,
                            mixBlendMode: "difference"
                        }}
                        // Strict left alignment: left-1 (0.25rem). Pushing it even further left as requested.
                        className="fixed top-6 left-1 w-20 h-20 md:w-24 md:h-24 pointer-events-none"
                    >
                        <img src="/logo.png" alt="Esencia IA Logo" className="object-contain w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Dynamic Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background blur-3xl" />
                {/* Grid removed */}
            </motion.div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8 flex flex-col items-center justify-center"
                >
                    {/* Placeholder to maintain layout space when logo leaves */}
                    <div className="relative mb-8 w-32 h-32 md:w-40 md:h-40">
                        {/* In-flow Logo (Visible only when not scrolled) */}
                        {!isScrolled && (
                            <motion.div
                                layoutId="hero-logo"
                                className="absolute inset-0 w-full h-full"
                                transition={{ duration: 0.6, ease: "circOut" }}
                            >
                                <img src="/logo.png" alt="Esencia IA Logo" className="object-contain w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                            </motion.div>
                        )}
                    </div>

                    <h1 className="text-6xl font-black tracking-widest sm:text-8xl md:text-9xl mb-4">
                        ESENC<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%_auto] bg-[0%_0%] hover:bg-[100%_0%] transition-[background-position] duration-500 cursor-default">IA</span>
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/80 tracking-widest uppercase">
                        Diseño web estratégico
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground sm:text-xl font-light leading-relaxed"
                >
                    Presencia digital profesional para marcas, instituciones y emprendedores.
                    <br />
                    <span className="text-white font-medium tracking-wide block mt-2">
                        Creamos sitios web claros, modernos y orientados a resultados.
                    </span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col items-center justify-center gap-6 sm:flex-row"
                >
                    <Link href="#contact">
                        <Button variant="outline" size="lg" className="h-14 min-w-[200px] rounded-md text-lg bg-white/5 border-white/10 hover:bg-white/10 text-white cursor-hover">
                            Consultar proyecto
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            </motion.div>
        </section>
    )
}
