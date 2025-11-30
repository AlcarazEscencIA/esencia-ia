"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { GitBranch, Terminal, CheckCircle, Circle, Clock, AlertCircle } from "lucide-react"

export default function DevDashboardPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Desarrollo Activo</h1>
                    <p className="text-muted-foreground">Estado del sprint y despliegues.</p>
                </div>
                <Button variant="secondary" className="gap-2">
                    <GitBranch className="h-4 w-4" /> Ver Repositorio
                </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Kanban Board */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-xl font-semibold">Sprint Board</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {/* To Do */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <Circle className="h-3 w-3" /> POR HACER
                            </div>
                            {[
                                { title: "Integrar Stripe API", tag: "Backend", priority: "High" },
                                { title: "Diseñar Email Templates", tag: "Design", priority: "Low" },
                            ].map((task, i) => (
                                <Card key={i} className="bg-white/5 border-white/10 hover:border-white/20 cursor-pointer">
                                    <CardContent className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs px-2 py-1 rounded bg-white/10 text-white/70">{task.tag}</span>
                                            {task.priority === "High" && <span className="h-2 w-2 rounded-full bg-red-500" />}
                                        </div>
                                        <h4 className="font-medium text-sm">{task.title}</h4>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* In Progress */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-sm font-medium text-blue-400">
                                <Clock className="h-3 w-3" /> EN PROGRESO
                            </div>
                            {[
                                { title: "Refactorizar Auth", tag: "Security", priority: "High" },
                                { title: "Optimizar Imágenes", tag: "Performance", priority: "Medium" },
                            ].map((task, i) => (
                                <Card key={i} className="bg-blue-500/5 border-blue-500/20 hover:border-blue-500/40 cursor-pointer">
                                    <CardContent className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300">{task.tag}</span>
                                            {task.priority === "High" && <span className="h-2 w-2 rounded-full bg-red-500" />}
                                        </div>
                                        <h4 className="font-medium text-sm">{task.title}</h4>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Done */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-sm font-medium text-green-400">
                                <CheckCircle className="h-3 w-3" /> COMPLETADO
                            </div>
                            {[
                                { title: "Setup Inicial", tag: "DevOps", priority: "High" },
                                { title: "Landing Page V1", tag: "Frontend", priority: "High" },
                            ].map((task, i) => (
                                <Card key={i} className="bg-green-500/5 border-green-500/20 opacity-70">
                                    <CardContent className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-300">{task.tag}</span>
                                        </div>
                                        <h4 className="font-medium text-sm line-through text-muted-foreground">{task.title}</h4>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                {/* System Status */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold">System Status</h2>
                    <Card className="bg-black/40 border-white/10">
                        <CardHeader>
                            <CardTitle className="text-sm font-medium text-muted-foreground">Último Despliegue</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                                <span className="font-mono text-lg">v2.4.0-stable</span>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Commit</span>
                                    <span className="font-mono">8f3a2c1</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Tiempo</span>
                                    <span>Hace 2h</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Env</span>
                                    <span className="text-blue-400">Production</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-black/40 border-white/10">
                        <CardHeader>
                            <CardTitle className="text-sm font-medium text-muted-foreground">Logs Recientes</CardTitle>
                        </CardHeader>
                        <CardContent className="font-mono text-xs space-y-2">
                            <div className="flex gap-2 text-green-400">
                                <CheckCircle className="h-3 w-3 mt-0.5" />
                                <span>Build successful (7.2s)</span>
                            </div>
                            <div className="flex gap-2 text-blue-400">
                                <Terminal className="h-3 w-3 mt-0.5" />
                                <span>Deploying to edge...</span>
                            </div>
                            <div className="flex gap-2 text-yellow-400">
                                <AlertCircle className="h-3 w-3 mt-0.5" />
                                <span>Warning: High memory usage</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
