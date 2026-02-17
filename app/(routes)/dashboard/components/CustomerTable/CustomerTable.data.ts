import { CustomerTableProps } from "./CustomerTable.type";

export const bookings: CustomerTableProps[] = [
    {
        customer: "Juan Pérez",
        room: {
            number: "101",
            type: "Doble"
        },
        checkIn: "Ene 11, 20:35",
        checkOut: "Ene 15, 12:00",
        amount: 450.00
    },
    {
        customer: "María Gómez",
        room: {
            number: "202",
            type: "Suite"
        },
        checkIn: "Ene 12, 14:00",
        checkOut: "Ene 16, 11:00",
        amount: 800.00
    },
    {
        customer: "Carlos Ruiz",
        room: {
            number: "303",
            type: "Individual"
        },
        checkIn: "Feb 02, 09:00",
        checkOut: "Feb 05, 10:00",
        amount: 150.00
    },
    {
        customer: "Ana López",
        room: {
            number: "404",
            type: "Doble"
        },
        checkIn: "Feb 14, 16:30",
        checkOut: "Feb 18, 12:00",
        amount: 520.50
    },
    {
        customer: "Diego Fernández",
        room: {
            number: "105",
            type: "Familiar"
        },
        checkIn: "Mar 01, 13:00",
        checkOut: "Mar 04, 11:00",
        amount: 650.00
    },
    {
        customer: "Laura Martínez",
        room: {
            number: "306",
            type: "Suite"
        },
        checkIn: "Mar 10, 18:00",
        checkOut: "Mar 12, 12:00",
        amount: 900.00
    },
    {
        customer: "Sofía Rodríguez",
        room: {
            number: "207",
            type: "Doble"
        },
        checkIn: "Abr 05, 15:45",
        checkOut: "Abr 08, 10:30",
        amount: 420.75
    },
    {
        customer: "Miguel Sánchez",
        room: {
            number: "508",
            type: "Premium"
        },
        checkIn: "May 20, 20:00",
        checkOut: "May 25, 11:00",
        amount: 1250.00
    },
    {
        customer: "Valentina Torres",
        room: {
            number: "609",
            type: "Suite"
        },
        checkIn: "Jun 02, 12:00",
        checkOut: "Jun 06, 12:00",
        amount: 980.00
    },
    {
        customer: "Pedro Álvarez",
        room: {
            number: "110",
            type: "Individual"
        },
        checkIn: "Jul 15, 09:30",
        checkOut: "Jul 16, 11:00",
        amount: 120.00
    },
    {
        customer: "Lucía Navarro",
        room: {
            number: "211",
            type: "Familiar"
        },
        checkIn: "Ago 01, 14:00",
        checkOut: "Ago 05, 13:00",
        amount: 700.00
    },
    {
        customer: "Rafael Castillo",
        room: {
            number: "712",
            type: "Suite"
        },
        checkIn: "Sep 22, 17:00",
        checkOut: "Sep 27, 12:00",
        amount: 1350.00
    }
]