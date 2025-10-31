import React from 'react'
import { ProductMovementsProps } from './ProductMovements.types'
import { getProductMovementsData } from './ProductMovements.data'
import { columns } from './columns'
import { DataTable } from './data-table'

export default function ProductMovements(props: ProductMovementsProps) {
  const { productId, productName } = props
  const movementsData = getProductMovementsData(productId)

  return (
    <div className='bg-card rounded-lg border p-5'>
      <div className='mb-4'>
        <h2 className='text-xl font-bold'>Historial de Movimientos</h2>
        <p className='text-sm text-muted-foreground'>
          Registro completo de entradas y salidas del producto
        </p>
      </div>
      <DataTable columns={columns} data={movementsData} />
    </div>
  )
}
