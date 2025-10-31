import React from 'react'
import CustomerInfo from './components/CustomerInfo'
import CustomerBookings from './components/CustomerBookings'
import DangerZone from './components/DangerZone'

export default async function CustomerDocumentPage({ params }: { params: { customerId: string } }) {
  const { customerId } = await params

  const customer = {
    customerId: customerId,
    name: "Juan Pérez García",
    documentType: "DNI",
    documentNumber: customerId,
    email: "juan.perez@gmail.com",
    phone: "987654321",
    birthDate: new Date("1990-05-15"),
    ruc: "20123456789"
  }

  return (
    <div className='flex flex-col gap-5'>
      <CustomerInfo />
      <CustomerBookings />
      <DangerZone customerId={customerId} customerName={customer.name} />
    </div>
  )
}
