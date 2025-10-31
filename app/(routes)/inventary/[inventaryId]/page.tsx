"use client"

import React from 'react'
import ProductInfo from './components/ProductInfo'
import ProductMovements from './components/ProductMovements'
import DangerZone from './components/DangerZone'

export default function InventaryIdPage({ params }: { params: { inventaryId: string } }) {
  const { inventaryId } = params

  const product = {
    id: inventaryId,
    name: "Coca Cola 500ml",
    category: "Venta" as const,
    stock: 48,
    minStock: 24,
    unitPrice: 3.50,
    unit: "unidad",
    description: "Bebida gaseosa Coca Cola presentación 500ml",
    supplier: "Distribuidora Arca Continental",
    lastPurchaseDate: new Date("2025-10-25"),
    createdAt: new Date("2024-01-15")
  }

  return (
    <div className='flex flex-col gap-5'>
      <ProductInfo productId={inventaryId} />
      <ProductMovements productId={inventaryId} productName={product.name} />
      <DangerZone 
        productId={inventaryId} 
        productName={product.name}
        productData={{
          name: product.name,
          category: product.category,
          minStock: product.minStock,
          unitPrice: product.unitPrice,
          unit: product.unit,
          description: product.description || ''
        }}
      />
    </div>
  )
}
