export interface DangerZoneProps {
    productId: string
    productName: string
    productData: {
        name: string
        category: "Venta" | "Almacén"
        minStock: number
        unitPrice: number
        unit: string
        description: string
    }
}
