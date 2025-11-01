export interface BookingDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  booking: {
    id: string
    guestName: string
    roomNumber: string
    checkIn: string
    checkOut: string
    status: 'confirmed' | 'pending' | 'cancelled'
    color?: string
  } | null
}
