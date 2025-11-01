export interface CreateBookingModalProps {
  isOpen: boolean
  onClose: () => void
  roomNumber?: string
  selectedDate?: string
}

export interface Guest {
  id: string
  name: string
}
