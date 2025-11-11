
export interface StayDetail {
  id: string
  folio: string
  guest: {
    id: string
    name: string
    email?: string
    phone?: string
    document: string
    documentType: string
  }
  room: {
    code: string
    type: string
    floor?: number
    pricePerNight: number
  }
  checkIn: Date
  checkOut: Date
  originalCheckOut: Date
  nights: number
  status: 'active' | 'checked-out' | 'cancelled'
  charges: Charge[]
  payments: Payment[]
  notes?: string
  createdAt: Date
  createdBy: string
}

export interface Charge {
  id: string
  type: string
  description: string
  quantity: number
  unitPrice: number
  total: number
  createdAt: Date
  createdBy: string
}

export interface Payment {
  id: string
  amount: number
  method: 'cash' | 'card' | 'transfer'
  reference?: string
  createdAt: Date
  createdBy: string
}

export interface Product {
  id: string
  name: string
  price: number
  stock: number
  category: string
}

export interface ExtendStayData {
  newCheckOut: Date
  additionalNights: number
  additionalCost: number
}

export interface AddChargeData {
  type: Charge['type']
  description: string
  quantity: number
  unitPrice: number
}
