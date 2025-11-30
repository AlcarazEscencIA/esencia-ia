"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Activity, CreditCard, DollarSign, Users } from "lucide-react"

const stats = [
    {
        title: "Ingresos Totales",
        value: "$45,231.89",
        change: "+20.1% desde el mes pasado",
        icon: DollarSign,
    },
    {
        title: "Suscripciones",
        value: "+2350",
        change: "+180.1% desde el mes pasado",
        icon: Users,
    },
    {
        title: "Ventas",
        value: "+12,234",
        change: "+19% desde el mes pasado",
        icon: CreditCard,
    },
    {
        title: "Actividad",
        value: "+573",
        change: "+201 desde la última hora",
        icon: Activity,
    },
]

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Resumen</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">
                                {stat.change}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Resumen de Actividad</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                            Gráfico de actividad (Placeholder)
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Ventas Recientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center">
                                    <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                        JD
                                    </div>
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">Juan Perez</p>
                                        <p className="text-sm text-muted-foreground">juan@example.com</p>
                                    </div>
                                    <div className="ml-auto font-medium">+$1,999.00</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
