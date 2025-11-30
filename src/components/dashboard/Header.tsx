"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Bell, User } from "lucide-react"
import { NotificationDropdown } from "./NotificationDropdown"

export function Header() {
    const [showNotifications, setShowNotifications] = useState(false)

    return (
        <header className="flex h-16 items-center justify-between border-b border-border/10 bg-card/50 px-6 glass relative z-50">
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full relative"
                        onClick={() => setShowNotifications(!showNotifications)}
                    >
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
                    </Button>
                    <NotificationDropdown
                        isOpen={showNotifications}
                        onClose={() => setShowNotifications(false)}
                    />
                </div>
                <Button variant="ghost" size="icon" className="rounded-full bg-primary/10">
                    <User className="h-5 w-5 text-primary" />
                </Button>
            </div>
        </header>
    )
}
