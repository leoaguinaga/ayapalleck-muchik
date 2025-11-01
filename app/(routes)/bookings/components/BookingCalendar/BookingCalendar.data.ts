import { Booking } from './BookingCalendar.types'

// Mock data de reservas
export const mockBookings: Booking[] = [
  {
    id: 'BK-001',
    guestName: 'Juan Pérez',
    roomNumber: '101',
    checkIn: '2025-10-31',
    checkOut: '2025-11-02',
    status: 'confirmed',
    color: '#22c55e' // green
  },
  {
    id: 'BK-002',
    guestName: 'Leonardo Aguinaga',
    roomNumber: '102',
    checkIn: '2025-11-01',
    checkOut: '2025-11-05',
    status: 'confirmed',
    color: '#3b82f6' // blue
  },
  {
    id: 'BK-003',
    guestName: 'María García López',
    roomNumber: '103',
    checkIn: '2025-11-02',
    checkOut: '2025-11-06',
    status: 'confirmed',
    color: '#8b5cf6' // purple
  },
  {
    id: 'BK-004',
    guestName: 'Carlos Rodríguez',
    roomNumber: '105',
    checkIn: '2025-10-31',
    checkOut: '2025-11-01',
    status: 'pending',
    color: '#f59e0b' // amber
  },
  {
    id: 'BK-005',
    guestName: 'Ana Martínez Silva',
    roomNumber: '104',
    checkIn: '2025-11-03',
    checkOut: '2025-11-06',
    status: 'confirmed',
    color: '#22c55e' // green
  },
  {
    id: 'BK-006',
    guestName: 'Pedro Sánchez',
    roomNumber: '106',
    checkIn: '2025-10-31',
    checkOut: '2025-11-03',
    status: 'confirmed',
    color: '#3b82f6' // blue
  },
  {
    id: 'BK-007',
    guestName: 'Laura Torres',
    roomNumber: '107',
    checkIn: '2025-11-01',
    checkOut: '2025-11-02',
    status: 'confirmed',
    color: '#ec4899' // pink
  },
  {
    id: 'BK-008',
    guestName: 'Roberto Flores',
    roomNumber: '108',
    checkIn: '2025-11-04',
    checkOut: '2025-11-06',
    status: 'confirmed',
    color: '#22c55e' // green
  },
  {
    id: 'BK-009',
    guestName: 'Isabel Ramírez',
    roomNumber: '110',
    checkIn: '2025-11-02',
    checkOut: '2025-11-05',
    status: 'confirmed',
    color: '#8b5cf6' // purple
  },
  {
    id: 'BK-010',
    guestName: 'Miguel Ángel Vargas',
    roomNumber: '112',
    checkIn: '2025-10-31',
    checkOut: '2025-11-04',
    status: 'confirmed',
    color: '#3b82f6' // blue
  },
  {
    id: 'BK-011',
    guestName: 'Carmen Díaz',
    roomNumber: '114',
    checkIn: '2025-11-03',
    checkOut: '2025-11-05',
    status: 'pending',
    color: '#f59e0b' // amber
  },
  {
    id: 'BK-012',
    guestName: 'José Luis Morales',
    roomNumber: '115',
    checkIn: '2025-11-01',
    checkOut: '2025-11-06',
    status: 'confirmed',
    color: '#22c55e' // green
  }
]

// Mock data de habitaciones
export const mockRooms = [
  { number: '101', type: 'Simple' },
  { number: '102', type: 'Matrimonial' },
  { number: '103', type: 'Doble' },
  { number: '104', type: 'Suite' },
  { number: '105', type: 'Simple' },
  { number: '106', type: 'Matrimonial' },
  { number: '107', type: 'Doble' },
  { number: '108', type: 'Simple' },
  { number: '109', type: 'Matrimonial' },
  { number: '110', type: 'Suite' },
  { number: '111', type: 'Simple' },
  { number: '112', type: 'Doble' },
  { number: '113', type: 'Simple' },
  { number: '114', type: 'Matrimonial' },
  { number: '115', type: 'Suite' },
  { number: '116', type: 'Simple' }
]
