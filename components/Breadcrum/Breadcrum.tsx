"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

function translate(route: string) {
    switch (route) {
        case "dashboard":
            return "Panel"
        case "customers":
            return "Huéspedes"
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
        case "history":
            return "Historial"
        case "settings":
            return "Ajustes"
        case "users":
            return "Usuarios"
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
            const isLast = index === segments.length - 1
            return (
                <div key={index} className="flex items-center">
                <Link href={href} className="hover:text-black dark:hover:text-white">
                    {translate(decodeURIComponent(segment))}
                </Link>
                {!isLast && (
                    <ChevronRight className="mx-1 size-5 md:size-6" strokeWidth={1.9} />
                )}
                </div>
            )
            })}
        </nav>
    )
}