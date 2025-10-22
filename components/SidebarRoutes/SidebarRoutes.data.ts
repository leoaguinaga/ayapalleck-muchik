import {
    PanelsTopLeft,
    CalendarClock,
    DoorOpen,
    ClipboardList,
    BedDouble,
    Users,
    History,
    LayoutDashboard,
    ShieldUser,
    BookMarked
    
} from 'lucide-react';

export const dataAdminSidebar = [
    {
        icon: LayoutDashboard,
        label: "Panel",
        href: "/dashboard"
    },
    {
        icon: ShieldUser,
        label: "Usuarios",
        href: "/users"
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
        label: "Salidas",
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
]

export const dataSupportSidebar = [
    {
        icon: BedDouble,
        label: "Habitaciones",
        href: "/rooms"
    },
    {
        icon: Users,
        label: "Huéspedes",
        href: "/customers"
    },
]

