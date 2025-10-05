"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

function translate(route: string) {
    switch (route) {
        case "dashboard":
            return "Panel"
        case "customers":
            return "Clientes"
        case "check-in":
            return "Ingresos"
        case "check-out":
            return "Salidas"
        case "requests":
            return "Solicitudes"
        case "rooms":
            return "Habitaciones"
        case "bookings":
            return "Reservas"
        case "inventary":
            return "Inventario"
        case "products":
            return "Productos"
        case "categories":
            return "Categorías"
        case "settings":
            return "Ajustes"
        default:
            return route
    }
}

export function Breadcrumb() {
    const pathname = usePathname()
    const segments = pathname.split("/").filter(Boolean)

    return (

        <nav className="flex items-center text-xl md:text-2xl font-bold text-muted-foreground">
            {segments.map((segment, index) => {
                const href = "/" + segments.slice(0, index + 1).join("/")
                return (
                    <Link href={decodeURIComponent(segment)} key={index} className="hover:text-black ">
                        {translate(decodeURIComponent(segment))}
                    </Link>
                )
            })}
            <ChevronRight className="mx-1 md:mx-2 size-5 md:size-6" strokeWidth={2.2} />
            <p>72166620</p>
        </nav>
    )
}