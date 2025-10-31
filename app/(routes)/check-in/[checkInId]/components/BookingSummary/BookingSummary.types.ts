export interface BookingSummaryProps {
  reservationType: string
  duration: string
  basePrice: number
  products: Array<{
    productName: string
    price: number
    quantity: number
  }>
  discount: number
  taxiFee: number
  advance: number
  total: number
}
