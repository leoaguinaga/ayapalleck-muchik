export const movementHistoryData = [
    {
        id: "MOV001",
        productId: "PROD001",
        productName: "Coca Cola 500ml",
        type: "Entrada" as const,
        quantity: 24,
        unit: "unidad",
        reason: "Compra a proveedor",
        user: "Juan Pérez",
        date: new Date("2025-10-28")
    },
    {
        id: "MOV002",
        productId: "PROD007",
        productName: "Toallas de baño",
        type: "Salida" as const,
        quantity: 5,
        unit: "unidad",
        reason: "Asignación a habitaciones",
        user: "María López",
        date: new Date("2025-10-28")
    },
    {
        id: "MOV003",
        productId: "PROD003",
        productName: "Galletas Soda Field",
        type: "Entrada" as const,
        quantity: 30,
        unit: "paquete",
        reason: "Reposición de stock",
        user: "Carlos Ruiz",
        date: new Date("2025-10-27")
    },
    {
        id: "MOV004",
        productId: "PROD010",
        productName: "Papel higiénico Elite",
        type: "Salida" as const,
        quantity: 20,
        unit: "rollo",
        reason: "Limpieza de habitaciones",
        user: "Ana Torres",
        date: new Date("2025-10-27")
    },
    {
        id: "MOV005",
        productId: "PROD005",
        productName: "Agua San Luis 625ml",
        type: "Entrada" as const,
        quantity: 48,
        unit: "unidad",
        reason: "Compra a proveedor",
        user: "Juan Pérez",
        date: new Date("2025-10-26")
    },
    {
        id: "MOV006",
        productId: "PROD008",
        productName: "Almohadas estándar",
        type: "Salida" as const,
        quantity: 3,
        unit: "unidad",
        reason: "Reemplazo por desgaste",
        user: "María López",
        date: new Date("2025-10-26")
    },
    {
        id: "MOV007",
        productId: "PROD013",
        productName: "Cerveza Pilsen 330ml",
        type: "Salida" as const,
        quantity: 12,
        unit: "unidad",
        reason: "Venta a huéspedes",
        user: "Luis García",
        date: new Date("2025-10-25")
    },
    {
        id: "MOV008",
        productId: "PROD009",
        productName: "Sábanas matrimoniales",
        type: "Entrada" as const,
        quantity: 10,
        unit: "juego",
        reason: "Compra de inventario",
        user: "Juan Pérez",
        date: new Date("2025-10-25")
    },
]
