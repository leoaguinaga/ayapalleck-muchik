import {
    PanelsTopLeft,
    CalendarClock,
    DoorOpen,
    ClipboardList,
    BedDouble,
    Users,
    History,
    LayoutDashboard
    
} from 'lucide-react';

export const dataGeneralSidebar = [
    {
        icon: LayoutDashboard,
        label: "Panel",
        href: "/dashboard"
    },
    {
        icon: DoorOpen,
        label: "Ingresos",
        href: "/check-in"
    },
    {
        icon: CalendarClock,
        label: "Salidas",
        href: "/check-out"
    },
    {
        icon: ClipboardList,
        label: "Solicitudes",
        href: "/requests"
    },
]

export const dataSupportSidebar = [
    {
        icon: BedDouble,
        label: "Habitaciones",
        href: "/rooms"
    },
    {
        icon: Users,
        label: "Clientes",
        href: "/customers"
    },
]

export const dataToolsSidebar = [
    {
        icon: History,
        label: "Reservas",
        href: "/bookings"
    },
    // {
    //     icon: Boxes,
    //     label: "Inventario",
    //     href: "/inventary"
    // },
]