export interface CustomerBooking {
    id: string
    roomNumber: string
    checkIn: Date
    checkOut: Date
    status: "Confirmada" | "En curso" | "Completada" | "Cancelada"
    totalAmount: number
    nights: number
}

export const customerBookingsData: CustomerBooking[] = [
    {
        id: "BK001",
        roomNumber: "101",
        checkIn: new Date("2025-11-05"),
        checkOut: new Date("2025-11-08"),
        status: "Confirmada",
        totalAmount: 450,
        nights: 3
    },
    {
        id: "BK002",
        roomNumber: "205",
        checkIn: new Date("2025-10-15"),
        checkOut: new Date("2025-10-18"),
        status: "Completada",
        totalAmount: 525,
        nights: 3
    },
    {
        id: "BK003",
        roomNumber: "103",
        checkIn: new Date("2025-09-20"),
        checkOut: new Date("2025-09-25"),
        status: "Completada",
        totalAmount: 750,
        nights: 5
    },
    {
        id: "BK004",
        roomNumber: "301",
        checkIn: new Date("2025-08-10"),
        checkOut: new Date("2025-08-12"),
        status: "Completada",
        totalAmount: 300,
        nights: 2
    },
]
