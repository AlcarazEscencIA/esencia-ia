"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Upload, Image as ImageIcon, MoreVertical, Clock } from "lucide-react"

export default function VisualDashboardPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Proyectos Visuales</h1>
                    <p className="text-muted-foreground">Gestiona tus activos y entregas.</p>
                </div>
                <Button className="gap-2">
                    <Upload className="h-4 w-4" /> Nuevo Proyecto
                </Button>
            </div>

            {/* Upload Zone */}
            <Card className="border-dashed border-2 border-white/20 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Arrastra tus archivos aquí</h3>
                    <p className="text-muted-foreground max-w-sm">
                        Soporta imágenes RAW, videos 4K y archivos de proyecto 3D.
                    </p>
                </CardContent>
            </Card>

            {/* Active Projects */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                    { title: "Campaña Verano 2025", type: "Fotografía", status: "En Edición", progress: 65, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop" },
                    { title: "Product Render V2", type: "3D Animation", status: "Renderizando", progress: 30, image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop" },
                    { title: "Corporate Reel", type: "Video", status: "Completado", progress: 100, image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop" },
                ].map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="overflow-hidden h-full group">
                            <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Button variant="secondary" size="sm">Ver Detalles</Button>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black/70">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-bold text-lg">{project.title}</h3>
                                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                                            <ImageIcon className="h-3 w-3" /> {project.type}
                                        </p>
                                    </div>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === "Completado" ? "bg-green-500/20 text-green-400" :
                                            project.status === "Renderizando" ? "bg-blue-500/20 text-blue-400" : "bg-yellow-500/20 text-yellow-400"
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                        <span>Progreso</span>
                                        <span>{project.progress}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary transition-all duration-1000"
                                            style={{ width: `${project.progress}%` }}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
