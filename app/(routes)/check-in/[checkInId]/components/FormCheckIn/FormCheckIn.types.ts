export interface FormCheckInProps {
  roomId: string
  onSummaryChange: (summary: {
    reservationType: string
    duration: string
    basePrice: number
    products: Array<{productName: string, price: number, quantity: number}>
    discount: number
    taxiFee: number
    advance: number
    total: number
  }) => void
}

export interface Guest {
  id: string
  name: string
  document: string
}

export interface Product {
  id: string
  name: string
  price: number
  stock: number
}
