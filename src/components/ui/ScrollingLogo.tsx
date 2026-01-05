"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function ScrollingLogo() {
    const [isVisible, setIsVisible] = useState(false)
    const { scrollY } = useScroll()

    // Define scroll thresholds
    // Define scroll thresholds
    const scale = useTransform(scrollY, [300, 800], [1.5, 0.4]) // Start larger to match hero, shrink to 40%
    const x = useTransform(scrollY, [300, 800], [200, 0]) // Start from center-ish (200px right) and move to anchored position
    const y = useTransform(scrollY, [300, 800], [100, 0]) // Start lower and move up
    const opacity = useTransform(scrollY, [300, 500], [0, 1]) // Fade in quicker

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsVisible(latest > 300)
        })
        return () => unsubscribe()
    }, [scrollY])

    if (!isVisible) return null

    return (
        <motion.div
            style={{
                scale,
                x,
                y,
                opacity,
            }}
            className="fixed top-6 left-6 z-50 pointer-events-none origin-top-left" // Fixed safe position
            initial={{ opacity: 0 }}
        >
            <div className="relative w-24 h-24 md:w-32 md:h-32">
                <img
                    src="/logo.png"
                    alt="Esencia IA Logo"
                    className="object-contain w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                />
            </div>
        </motion.div>
    )
}
