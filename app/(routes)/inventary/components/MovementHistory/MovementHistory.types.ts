export interface MovementHistoryProps {
    id: string
    productId: string
    productName: string
    type: "Entrada" | "Salida"
    quantity: number
    unit: string
    reason: string
    user: string
    date: Date
}
