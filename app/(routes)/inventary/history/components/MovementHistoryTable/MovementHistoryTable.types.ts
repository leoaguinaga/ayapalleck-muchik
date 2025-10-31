export interface MovementHistoryTableProps {
    id: string
    productId: string
    productName: string
    category: "Venta" | "Almacén"
    type: "Entrada" | "Salida"
    quantity: number
    unit: string
    reason: string
    user: string
    date: Date
    notes?: string
}
