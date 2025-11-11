
import { StayDetail, Product } from './types'

export const mockStayDetail: StayDetail = {
  id: '1',
  folio: 'F-2025-001',
  guest: {
    id: 'g1',
    name: 'Leonardo Aguinaga Paredes',
    email: 'leo@example.com',
    phone: '+51 987 654 321',
    document: '12345678',
    documentType: 'DNI',
  },
  room: {
    code: '101',
    type: 'Matrimonial',
    floor: 1,
    pricePerNight: 500,
  },
  checkIn: new Date('2025-11-04T14:00:00'),
  checkOut: new Date('2025-11-06T12:00:00'),
  originalCheckOut: new Date('2025-11-06T12:00:00'),
  nights: 2,
  status: 'active',
  charges: [
    {
      id: 'c1',
      type: 'accommodation',
      description: 'Habitación Matrimonial - 2 noches',
      quantity: 2,
      unitPrice: 500,
      total: 1000,
      createdAt: new Date('2025-11-04T14:00:00'),
      createdBy: 'admin',
    },
  ],
  payments: [
    {
      id: 'p1',
      amount: 500,
      method: 'cash',
      createdAt: new Date('2025-11-04T14:00:00'),
      createdBy: 'admin',
    },
  ],
  notes: 'Cliente VIP - Llegada tardía',
  createdAt: new Date('2025-11-04T14:00:00'),
  createdBy: 'admin',
}

export const mockProducts: Product[] = [
  { id: 'PROD001', name: 'Coca-Cola 500ml', price: 4.50, stock: 20, category: 'Bebidas' },
  { id: 'PROD002', name: 'Inka Kola 500ml', price: 4.00, stock: 17, category: 'Bebidas' },
  { id: 'PROD003', name: 'Sporade 600ml', price: 2.50, stock: 11, category: 'Bebidas' },
  { id: 'PROD004', name: 'Agua San Luis 625ml', price: 2.00, stock: 30, category: 'Bebidas' },
  { id: 'PROD005', name: 'Cerveza Pilsen 330ml', price: 8.00, stock: 15, category: 'Bebidas' },
  { id: 'PROD006', name: 'Papas Lays 45g', price: 3.50, stock: 25, category: 'Snacks' },
  { id: 'PROD007', name: 'Chocolate Sublime', price: 4.00, stock: 18, category: 'Snacks' },
]
