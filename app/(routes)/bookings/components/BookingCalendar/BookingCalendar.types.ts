export interface Booking {
  id: string
  guestName: string
  roomNumber: string
  checkIn: string // YYYY-MM-DD
  checkOut: string // YYYY-MM-DD
  status: 'confirmed' | 'pending' | 'cancelled'
  color?: string
}

export interface Room {
  number: string
  type: string
}
