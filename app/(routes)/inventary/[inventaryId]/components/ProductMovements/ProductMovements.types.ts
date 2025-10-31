export type ProductMovementsProps = {
    productId: string
    productName: string
}

export type ProductMovementData = {
    id: string
    date: Date
    type: "Entrada" | "Salida"
    quantity: number
    reason: string
    user: string
    notes?: string
    stockAfter: number
}
