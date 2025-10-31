// Mock data - reemplazar con fetch real
export const getProductInfoData = (productId: string) => {
    return [
        {
            title: "Stock actual",
            content: "48 unidades",
            tooltipContent: "Cantidad en inventario"
        },
        {
            title: "Stock mínimo",
            content: "24 unidades",
            tooltipContent: "Nivel de reorden"
        },
        {
            title: "Valor en stock",
            content: "S/ 168.00",
            tooltipContent: "48 × S/ 3.50"
        },
        {
            title: "Movimientos (30d)",
            content: "15 registros",
            tooltipContent: "Últimos 30 días"
        },
        {
            title: "Total entradas",
            content: "120 unidades",
            tooltipContent: "Histórico total"
        },
        {
            title: "Total salidas",
            content: "72 unidades",
            tooltipContent: "Histórico total"
        }
    ]
}
