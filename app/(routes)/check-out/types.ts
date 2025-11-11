
export type StayState = 'on-time' | 'delayed' | 'extended' | 'no-show'
export type PaymentState = 'paid' | 'partial' | 'pending'

export interface Guest {
  id: string
  name: string
  email?: string
  phone?: string
  avatar?: string
}

export interface Room {
  code: string
  type: string
  floor?: number
  capacity?: number
  isClean?: boolean
}

export interface Stay {
  id: string
  folio: string
  guest: Guest
  room: Room
  checkIn: Date
  checkOut: Date
  nights: number
  total: number
  paid: number
  stayState: StayState
  paymentState: PaymentState
  dueDelta?: number
  notes?: string
  extendedFrom?: Date
}

export interface StayFilters {
  search?: string
  stayState?: StayState[]
  paymentState?: PaymentState[]
  dateRange?: {
    from: Date
    to: Date
  }
  roomType?: string[]
}

export type TabFilter = 'today' | 'overdue' | 'tomorrow' | 'all'
