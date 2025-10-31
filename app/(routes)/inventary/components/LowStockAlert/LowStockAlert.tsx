import React from 'react'
import { inventoryData } from '../InventoryTable/InventoryTable.data'
import Tag from '@/components/Tag/Tag'
import { AlertTriangle } from 'lucide-react'

export default function LowStockAlert() {
    const lowStockProducts = inventoryData.filter(product => product.stock < product.minStock)

    if (lowStockProducts.length === 0) {
        return (
            <div className='border rounded-lg p-5 bg-card'>
                <h3 className='font-semibold text-lg mb-4 flex items-center gap-2'>
                    <AlertTriangle className='size-5 text-yellow-600' />
                    Alertas de Stock Bajo
                </h3>
                <p className='text-sm text-muted-foreground text-center py-4'>
                    No hay productos con stock bajo
                </p>
            </div>
        )
    }

    return (
        <div className='border rounded-lg p-5 bg-card h-full'>
            <h3 className='font-semibold text-lg mb-4 flex items-center gap-2'>
                <AlertTriangle className='size-5 text-yellow-600' />
                Alertas de Stock Bajo
            </h3>
            <div className='h-full overflow-y-auto'>
                <div className='flex flex-col gap-3'>
                    {lowStockProducts.map((product) => (
                        <div 
                            key={product.id} 
                            className='p-3 border border-red-200 dark:border-red-900 rounded-lg bg-red-50 dark:bg-red-950/20'
                        >
                            <div className='flex items-start justify-between gap-2'>
                                <div className='flex-1 min-w-0'>
                                    <p className='font-medium text-sm truncate'>{product.name}</p>
                                    <p className='text-xs text-muted-foreground'>
                                        Código: {product.id}
                                    </p>
                                    <div className='flex items-center gap-2 mt-2'>
                                        <Tag text={product.category} color={product.category === "Venta" ? "blue" : "purple"} />
                                        <span className='text-xs'>
                                            <span className='font-semibold text-red-600'>
                                                {product.stock} {product.unit}
                                            </span>
                                            <span className='text-muted-foreground'> / {product.minStock} min</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
