"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare } from "lucide-react"
import Link from "next/link"

export function FixedContactButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(true) // Always visible or scroll dependent? 
                // Let's make it always visible if scrolled a bit to not clutter the Hero
                if (window.scrollY > 100) {
                    setIsVisible(true)
                } else {
                    setIsVisible(false)
                }
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        toggleVisibility() // Check initial position

        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <Link href="#contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-2 px-6 py-3 rounded-sm bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 glass border border-white/20"
                        >
                            <MessageSquare className="h-5 w-5" />
                            <span className="tracking-wide">Contactanos</span>
                        </motion.button>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
