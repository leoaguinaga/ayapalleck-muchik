"use client"

import React, { useState } from 'react'
import { ProductsTableProps } from './ProductsTable.types'
import { formatPrice } from '@/lib/formatPrice'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ProductsTable({ products, onAddProduct }: ProductsTableProps) {
  const [quantities, setQuantities] = useState<Record<string, number>>({})

  const handleQuantityChange = (productId: string, value: string) => {
    const numValue = parseInt(value) || 0
    setQuantities(prev => ({ ...prev, [productId]: numValue }))
  }

  const handleAdd = (productId: string, productName: string, price: number, stock: number) => {
    const quantity = quantities[productId] || 0
    if (quantity > 0 && quantity <= stock) {
      onAddProduct(productId, productName, price, quantity)
      setQuantities(prev => ({ ...prev, [productId]: 0 }))
    }
  }

  return (
    <div className='border rounded-lg overflow-hidden'>
      <table className='w-full'>
        <thead className='bg-muted'>
          <tr>
            <th className='text-left p-3 text-sm font-medium'>Producto</th>
            <th className='text-left p-3 text-sm font-medium'>Precio</th>
            <th className='text-left p-3 text-sm font-medium'>Stock</th>
            <th className='text-left p-3 text-sm font-medium'>Acción</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className='border-t'>
              <td className='p-3 text-sm'>{product.name}</td>
              <td className='p-3 text-sm'>{formatPrice(product.price)}</td>
              <td className='p-3 text-sm'>{product.stock}</td>
              <td className='p-3'>
                <div className='flex items-center gap-2'>
                  <Input
                    type="number"
                    min="0"
                    max={product.stock}
                    value={quantities[product.id] || 0}
                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    className='w-20 h-8'
                  />
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => handleAdd(product.id, product.name, product.price, product.stock)}
                    disabled={!quantities[product.id] || quantities[product.id] <= 0 || quantities[product.id] > product.stock}
                  >
                    Añadir
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
