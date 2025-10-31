export interface UserActivity {
    id: string
    type: "login" | "logout" | "check-in" | "check-out" | "room-update" | "booking-created" | "booking-updated"
    description: string
    roomNumber?: string
    timestamp: Date
    details?: string
}

export const userActivitiesData: UserActivity[] = [
    {
        id: "ACT001",
        type: "login",
        description: "Inició sesión",
        timestamp: new Date("2025-10-30T08:30:00"),
        details: "Desde dispositivo web - IP: 192.168.1.100"
    },
    {
        id: "ACT002",
        type: "check-in",
        description: "Realizó check-in de cliente",
        roomNumber: "205",
        timestamp: new Date("2025-10-30T09:15:00"),
        details: "Cliente: Juan Pérez - Reserva #BK145"
    },
    {
        id: "ACT003",
        type: "room-update",
        description: "Actualizó estado de habitación",
        roomNumber: "103",
        timestamp: new Date("2025-10-30T10:45:00"),
        details: "Estado: Limpieza completada → Disponible"
    },
    {
        id: "ACT004",
        type: "booking-created",
        description: "Creó nueva reserva",
        roomNumber: "301",
        timestamp: new Date("2025-10-30T11:30:00"),
        details: "Reserva para María Gómez - 3 noches"
    },
    {
        id: "ACT005",
        type: "check-out",
        description: "Realizó check-out de cliente",
        roomNumber: "107",
        timestamp: new Date("2025-10-30T14:20:00"),
        details: "Cliente: Carlos Ruiz - Pago procesado"
    },
    {
        id: "ACT006",
        type: "room-update",
        description: "Actualizó estado de habitación",
        roomNumber: "107",
        timestamp: new Date("2025-10-30T14:25:00"),
        details: "Estado: Ocupada → Limpieza pendiente"
    },
    {
        id: "ACT007",
        type: "booking-updated",
        description: "Modificó reserva existente",
        roomNumber: "205",
        timestamp: new Date("2025-10-30T15:10:00"),
        details: "Extendió estadía por 2 noches adicionales"
    },
    {
        id: "ACT008",
        type: "login",
        description: "Inició sesión",
        timestamp: new Date("2025-10-29T08:15:00"),
        details: "Desde dispositivo web - IP: 192.168.1.100"
    },
    {
        id: "ACT009",
        type: "check-in",
        description: "Realizó check-in de cliente",
        roomNumber: "102",
        timestamp: new Date("2025-10-29T10:00:00"),
        details: "Cliente: Ana Torres - Reserva #BK138"
    },
    {
        id: "ACT010",
        type: "room-update",
        description: "Actualizó estado de habitación",
        roomNumber: "204",
        timestamp: new Date("2025-10-29T11:45:00"),
        details: "Estado: Limpieza pendiente → En limpieza"
    },
    {
        id: "ACT011",
        type: "logout",
        description: "Cerró sesión",
        timestamp: new Date("2025-10-29T17:30:00"),
        details: "Duración de sesión: 9h 15m"
    },
]
