import { BellRing, DoorClosed, User2, Wallet } from "lucide-react";

export const kpisData = [
    {
        title: "Ingreso hoy",
        value: "S/ 1,280",
        icon: Wallet,
        tooltip: "Ingresos generados por las reservas completadas en el hotel.",
        isPrimary: true,
    },
    {
        title: "Habitaciones disponibles",
        value: "11",
        icon: DoorClosed,
        tooltip: "Número de habitaciones disponibles para reservas.",
        isPrimary: false,
    },
    {
        title: "Huéspedes alojados",
        value: "30",
        icon: User2,
        tooltip: "Número de huéspedes actualmente alojados en el hotel.",
        isPrimary: false,
    },
    {
        title: "Solicitudes pendientes",
        value: "8",
        icon: BellRing,
        tooltip: "Número de solicitudes de reserva pendientes de aprobación.",
        isPrimary: false,
    },
];