import {
    LayoutDashboard,
    DoorOpen,
    CalendarClock,
    BookMarked,
    ClipboardList,
    Bed,
    Boxes,
    Users2,
    Settings

} from 'lucide-react';

export const dataAdminSidebar = [
    {
        icon: LayoutDashboard,
        label: "Panel",
        href: "/dashboard"
    },
]

export const dataGeneralSidebar = [
    {
        icon: DoorOpen,
        label: "Ingresos",
        href: "/check-in"
    },
    {
        icon: CalendarClock,
        label: "Estadías",
        href: "/check-out"
    },
]

export const dataToolsSidebar = [
    {
        icon: BookMarked,
        label: "Reservas",
        href: "/bookings"
    },

    {
        icon: ClipboardList,
        label: "Solicitudes",
        href: "/requests"
    },
    {
        icon: Boxes,
        label: "Inventario",
        href: "/inventary"
    },
]

export const dataSupportSidebar = [
    {
        icon: Bed,
        label: "Habitaciones",
        href: "/rooms"
    },
    {
        icon: Users2,
        label: "Huéspedes",
        href: "/customers"
    },
]

