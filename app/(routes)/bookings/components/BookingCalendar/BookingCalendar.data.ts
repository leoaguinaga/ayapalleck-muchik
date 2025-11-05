import { Booking } from './BookingCalendar.types'

// Mock data de reservas (fechas a partir de hoy: 2025-11-05)
export const mockBookings: Booking[] = [
  {
    id: 'BK-001',
    guestName: 'Juan Pérez',
    roomNumber: '101',
    checkIn: '2025-11-05',
    checkOut: '2025-11-07',
    status: 'confirmed',
    color: '#22c55e'
  },
  {
    id: 'BK-002',
    guestName: 'Leonardo Aguinaga',
    roomNumber: '102',
    checkIn: '2025-11-06',
    checkOut: '2025-11-10',
    status: 'confirmed',
    color: '#3b82f6'
  },
  {
    id: 'BK-003',
    guestName: 'María García López',
    roomNumber: '103',
    checkIn: '2025-11-08',
    checkOut: '2025-11-12',
    status: 'confirmed',
    color: '#8b5cf6'
  },
  {
    id: 'BK-004',
    guestName: 'Carlos Rodríguez',
    roomNumber: '105',
    checkIn: '2025-11-05',
    checkOut: '2025-11-06',
    status: 'pending',
    color: '#f59e0b'
  },
  {
    id: 'BK-005',
    guestName: 'Ana Martínez Silva',
    roomNumber: '104',
    checkIn: '2025-11-10',
    checkOut: '2025-11-13',
    status: 'confirmed',
    color: '#22c55e'
  },
  {
    id: 'BK-006',
    guestName: 'Pedro Sánchez',
    roomNumber: '106',
    checkIn: '2025-11-05',
    checkOut: '2025-11-08',
    status: 'confirmed',
    color: '#3b82f6'
  },
  {
    id: 'BK-007',
    guestName: 'Laura Torres',
    roomNumber: '107',
    checkIn: '2025-11-06',
    checkOut: '2025-11-07',
    status: 'confirmed',
    color: '#ec4899'
  },
  {
    id: 'BK-008',
    guestName: 'Roberto Flores',
    roomNumber: '108',
    checkIn: '2025-11-12',
    checkOut: '2025-11-15',
    status: 'confirmed',
    color: '#22c55e'
  },
  {
    id: 'BK-009',
    guestName: 'Isabel Ramírez',
    roomNumber: '110',
    checkIn: '2025-11-09',
    checkOut: '2025-11-12',
    status: 'confirmed',
    color: '#8b5cf6'
  },
  {
    id: 'BK-010',
    guestName: 'Miguel Ángel Vargas',
    roomNumber: '112',
    checkIn: '2025-11-05',
    checkOut: '2025-11-09',
    status: 'confirmed',
    color: '#3b82f6'
  },
  {
    id: 'BK-011',
    guestName: 'Carmen Díaz',
    roomNumber: '114',
    checkIn: '2025-11-11',
    checkOut: '2025-11-13',
    status: 'pending',
    color: '#f59e0b'
  },
  {
    id: 'BK-012',
    guestName: 'José Luis Morales',
    roomNumber: '115',
    checkIn: '2025-11-06',
    checkOut: '2025-11-11',
    status: 'confirmed',
    color: '#22c55e'
  },
  {
    id: 'BK-013',
    guestName: 'Sofía Herrera',
    roomNumber: '109',
    checkIn: '2025-11-14',
    checkOut: '2025-11-16',
    status: 'confirmed',
    color: '#f97316'
  },
  {
    id: 'BK-014',
    guestName: 'Andrés Morales',
    roomNumber: '111',
    checkIn: '2025-11-15',
    checkOut: '2025-11-18',
    status: 'confirmed',
    color: '#06b6d4'
  },
  {
    id: 'BK-015',
    guestName: 'Lucía Gómez',
    roomNumber: '113',
    checkIn: '2025-11-20',
    checkOut: '2025-11-22',
    status: 'cancelled',
    color: '#ef4444'
  },
  {
    id: 'BK-016',
    guestName: 'Mateo Rivera',
    roomNumber: '116',
    checkIn: '2025-11-18',
    checkOut: '2025-11-21',
    status: 'confirmed',
    color: '#84cc16'
  },
  {
    id: 'BK-017',
    guestName: 'Elena Cruz',
    roomNumber: '101',
    checkIn: '2025-11-22',
    checkOut: '2025-11-25',
    status: 'pending',
    color: '#f59e0b'
  },
  {
    id: 'BK-018',
    guestName: 'Diego Fernández',
    roomNumber: '102',
    checkIn: '2025-11-25',
    checkOut: '2025-11-28',
    status: 'confirmed',
    color: '#3b82f6'
  },
  {
    id: 'BK-019',
    guestName: 'Paula Reyes',
    roomNumber: '103',
    checkIn: '2025-11-28',
    checkOut: '2025-12-02',
    status: 'confirmed',
    color: '#8b5cf6'
  },
  {
    id: 'BK-020',
    guestName: 'Víctor Gómez',
    roomNumber: '104',
    checkIn: '2025-12-01',
    checkOut: '2025-12-05',
    status: 'confirmed',
    color: '#22c55e'
  },
  {
    id: 'BK-021',
    guestName: 'Marta León',
    roomNumber: '105',
    checkIn: '2025-12-03',
    checkOut: '2025-12-04',
    status: 'pending',
    color: '#f59e0b'
  },
  {
    id: 'BK-022',
    guestName: 'Raúl Ortega',
    roomNumber: '106',
    checkIn: '2025-12-05',
    checkOut: '2025-12-10',
    status: 'confirmed',
    color: '#3b82f6'
  },
  {
    id: 'BK-023',
    guestName: 'Inés Paredes',
    roomNumber: '107',
    checkIn: '2025-12-08',
    checkOut: '2025-12-12',
    status: 'confirmed',
    color: '#ec4899'
  },
  {
    id: 'BK-024',
    guestName: 'Óscar Medina',
    roomNumber: '108',
    checkIn: '2025-12-10',
    checkOut: '2025-12-15',
    status: 'cancelled',
    color: '#ef4444'
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
