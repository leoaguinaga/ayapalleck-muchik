import React from 'react'

export default async function CustomerDocumentPage({ params }: { params: { customerId: string } }) {
  const { customerId } = await params;
  return (
    <div>
      <div>CustomerInfo</div>
      <div>CustomerDetails</div>
      <div>Recent Activity</div>
      <div>DangerZone</div>
    </div>
  )
}
