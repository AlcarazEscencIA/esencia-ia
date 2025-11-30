"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Bell, Check, Info, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

interface Notification {
  id: string
  title: string
  description: string
  time: string
  type: "info" | "success" | "warning"
  read: boolean
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "Bienvenido a Esencia IA",
    description: "Gracias por unirte a nuestra plataforma.",
    time: "Hace 2 min",
    type: "success",
    read: false,
  },
  {
    id: "2",
    title: "Nuevo proyecto creado",
    description: "El proyecto 'Campaña Verano' ha sido creado.",
    time: "Hace 1 hora",
    type: "info",
    read: false,
  },
  {
    id: "3",
    title: "Actualización del sistema",
    description: "Mantenimiento programado para esta noche.",
    time: "Hace 5 horas",
    type: "warning",
    read: true,
  },
]

interface NotificationDropdownProps {
  isOpen: boolean
  onClose: () => void
}

export function NotificationDropdown({ isOpen, onClose }: NotificationDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop to close on click outside */}
          <div 
            className="fixed inset-0 z-40 bg-transparent" 
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-80 sm:w-96 z-50 origin-top-right"
          >
            <div className="rounded-xl border border-border/10 bg-card/80 backdrop-blur-xl shadow-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/10 bg-white/5">
                <h3 className="font-semibold text-sm">Notificaciones</h3>
                <span className="text-xs text-muted-foreground bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  2 nuevas
                </span>
              </div>
              
              <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                {notifications.length > 0 ? (
                  <div className="divide-y divide-border/5">
                    {notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={cn(
                          "flex gap-3 p-4 hover:bg-white/5 transition-colors cursor-pointer",
                          !notification.read && "bg-primary/5"
                        )}
                      >
                        <div className={cn(
                          "mt-1 h-8 w-8 rounded-full flex items-center justify-center shrink-0",
                          notification.type === "success" && "bg-green-500/10 text-green-500",
                          notification.type === "info" && "bg-blue-500/10 text-blue-500",
                          notification.type === "warning" && "bg-yellow-500/10 text-yellow-500",
                        )}>
                          {notification.type === "success" && <Check className="h-4 w-4" />}
                          {notification.type === "info" && <Info className="h-4 w-4" />}
                          {notification.type === "warning" && <AlertTriangle className="h-4 w-4" />}
                        </div>
                        <div className="space-y-1">
                          <p className={cn("text-sm font-medium leading-none", !notification.read && "text-foreground")}>
                            {notification.title}
                          </p>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {notification.description}
                          </p>
                          <p className="text-[10px] text-muted-foreground/70">
                            {notification.time}
                          </p>
                        </div>
                        {!notification.read && (
                          <div className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-muted-foreground">
                    <Bell className="h-8 w-8 mx-auto mb-2 opacity-20" />
                    <p className="text-sm">No tienes notificaciones</p>
                  </div>
                )}
              </div>
              
              <div className="p-2 border-t border-border/10 bg-white/5">
                <button className="w-full text-xs text-center py-2 text-muted-foreground hover:text-primary transition-colors">
                  Marcar todas como leídas
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
