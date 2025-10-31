import { Product } from '../FormCheckIn/FormCheckIn.types'

export interface ProductsTableProps {
  products: Product[]
  onAddProduct: (productId: string, productName: string, price: number, quantity: number) => void
}
