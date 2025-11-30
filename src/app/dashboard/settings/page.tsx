"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { User, CreditCard, Bell, Shield } from "lucide-react"

export default function SettingsPage() {
    return (
        <div className="max-w-4xl space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Configuración</h1>
                <p className="text-muted-foreground">Administra tu cuenta y preferencias.</p>
            </div>

            <div className="grid gap-8">
                {/* Profile Section */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle>Perfil de Usuario</CardTitle>
                                <p className="text-sm text-muted-foreground">Información personal y de contacto.</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Nombre Completo</label>
                                <Input defaultValue="Alexi" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input defaultValue="alexi@esencia.ia" />
                            </div>
                        </div>
                        <Button>Guardar Cambios</Button>
                    </CardContent>
                </Card>

                {/* Notifications */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-secondary/10">
                                <Bell className="h-6 w-6 text-secondary" />
                            </div>
                            <div>
                                <CardTitle>Notificaciones</CardTitle>
                                <p className="text-sm text-muted-foreground">Elige cómo quieres que te contactemos.</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {["Email Digest semanal", "Alertas de nuevos proyectos", "Actualizaciones de estado"].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/5">
                                    <span className="text-sm">{item}</span>
                                    <div className="h-6 w-11 rounded-full bg-primary/20 relative cursor-pointer">
                                        <div className="absolute right-1 top-1 h-4 w-4 rounded-full bg-primary" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Billing */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-accent/10">
                                <CreditCard className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                                <CardTitle>Facturación</CardTitle>
                                <p className="text-sm text-muted-foreground">Plan actual y método de pago.</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-white/10">
                            <div>
                                <p className="font-bold text-lg">Plan Profesional</p>
                                <p className="text-sm text-muted-foreground">Próxima factura: 15 Dic, 2025</p>
                            </div>
                            <Button variant="outline" className="bg-black/50">Gestionar Plan</Button>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium mb-4">Historial de Facturas</h4>
                            <div className="space-y-2">
                                {[
                                    { date: "15 Nov, 2025", amount: "$2,500.00", status: "Pagado" },
                                    { date: "15 Oct, 2025", amount: "$2,500.00", status: "Pagado" },
                                ].map((invoice, i) => (
                                    <div key={i} className="flex items-center justify-between text-sm p-2 hover:bg-white/5 rounded transition-colors">
                                        <span>{invoice.date}</span>
                                        <div className="flex items-center gap-4">
                                            <span>{invoice.amount}</span>
                                            <span className="text-green-400 text-xs bg-green-500/10 px-2 py-1 rounded-full">{invoice.status}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
