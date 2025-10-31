import { ProductMovementData } from "./ProductMovements.types"

export const getProductMovementsData = (productId: string): ProductMovementData[] => {
    return [
        {
            id: "MOV001",
            date: new Date("2025-10-30T14:30:00"),
            type: "Salida",
            quantity: 6,
            reason: "Venta a huéspedes",
            user: "María López",
            notes: "Habitación 305",
            stockAfter: 48
        },
        {
            id: "MOV002",
            date: new Date("2025-10-28T10:15:00"),
            type: "Entrada",
            quantity: 24,
            reason: "Compra a proveedor",
            user: "Carlos Mendoza",
            notes: "Orden de compra #1234",
            stockAfter: 54
        },
        {
            id: "MOV003",
            date: new Date("2025-10-27T16:45:00"),
            type: "Salida",
            quantity: 12,
            reason: "Asignación a habitaciones",
            user: "Ana Torres",
            notes: "Stock para minibar",
            stockAfter: 30
        },
        {
            id: "MOV004",
            date: new Date("2025-10-25T09:00:00"),
            type: "Entrada",
            quantity: 48,
            reason: "Reposición de stock",
            user: "Carlos Mendoza",
            stockAfter: 42
        },
        {
            id: "MOV005",
            date: new Date("2025-10-23T11:20:00"),
            type: "Salida",
            quantity: 3,
            reason: "Venta a huéspedes",
            user: "María López",
            notes: "Habitación 201",
            stockAfter: -6
        },
        {
            id: "MOV006",
            date: new Date("2025-10-20T15:30:00"),
            type: "Salida",
            quantity: 8,
            reason: "Asignación a habitaciones",
            user: "Ana Torres",
            stockAfter: -3
        },
        {
            id: "MOV007",
            date: new Date("2025-10-18T08:45:00"),
            type: "Entrada",
            quantity: 36,
            reason: "Compra a proveedor",
            user: "Carlos Mendoza",
            notes: "Proveedor: Arca Continental",
            stockAfter: 5
        },
        {
            id: "MOV008",
            date: new Date("2025-10-15T13:10:00"),
            type: "Salida",
            quantity: 2,
            reason: "Pérdida o robo",
            user: "Ana Torres",
            notes: "Producto dañado en almacén",
            stockAfter: -31
        }
    ]
}
