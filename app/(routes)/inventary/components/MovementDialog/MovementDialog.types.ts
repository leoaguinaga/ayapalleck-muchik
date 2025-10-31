export interface MovementDialogProps {
    productId: string
    productName: string
    currentStock: number
    unit: string
    type: "Entrada" | "Salida"
    open: boolean
    onOpenChange: (open: boolean) => void
}
