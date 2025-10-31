export interface FormUpdateProductProps {
    productId: string
    defaultValues: {
        name: string
        category: "Venta" | "Almacén"
        minStock: number
        unitPrice: number
        unit: string
        description: string
    }
}
