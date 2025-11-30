"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

export function Hero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section ref={ref} className="relative flex h-screen items-center justify-center overflow-hidden">
            {/* Dynamic Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background blur-3xl" />
                <div className="absolute top-0 left-0 h-full w-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </motion.div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h1 className="text-6xl font-black tracking-tighter sm:text-8xl md:text-9xl">
                        ESENCIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">IA</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mx-auto mb-12 max-w-2xl text-xl text-muted-foreground sm:text-2xl font-light"
                >
                    Redefiniendo el estándar digital. <br />
                    <span className="text-white font-medium">Diseño cinemático. Desarrollo inteligente.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col items-center justify-center gap-6 sm:flex-row"
                >
                    <Link href="#services">
                        <Button size="lg" className="group h-14 min-w-[200px] rounded-full text-lg cursor-hover">
                            Iniciar Experiencia
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                    <Link href="#services">
                        <Button size="lg" variant="outline" className="h-14 min-w-[200px] rounded-full border-white/10 bg-white/5 text-lg backdrop-blur-sm hover:bg-white/10 cursor-hover">
                            Explorar Servicios
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
