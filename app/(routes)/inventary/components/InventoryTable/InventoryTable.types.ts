export interface InventoryTableProps {
    id: string
    name: string
    category: "Venta" | "Almacén"
    stock: number
    minStock: number
    unitPrice: number
    unit: string
    lastMovement: Date
}
