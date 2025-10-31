import React from 'react'
import { movementHistoryData } from './MovementHistory.data'
import Tag from '@/components/Tag/Tag'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { ArrowDownCircle, ArrowUpCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function MovementHistory() {
    // Mostrar solo los últimos 5 movimientos
    const recentMovements = movementHistoryData.slice(0, 5)

    return (
        <div className='border rounded-lg p-5 bg-card h-full flex flex-col'>
            <div className='flex items-center justify-between mb-4'>
                <h3 className='font-semibold text-lg'>Movimientos Recientes</h3>
                <Link href="/inventary/history">
                    <Button variant="ghost" size="sm" className="gap-1">
                        Ver todo
                        <ArrowRight className='size-4' />
                    </Button>
                </Link>
            </div>
            <div className='flex-1 overflow-y-auto'>
                <div className='flex flex-col gap-3'>
                    {recentMovements.map((movement) => (
                        <div
                            key={movement.id}
                            className='p-3 border rounded-lg hover:bg-accent/50 transition-colors'
                        >
                            <div className='flex items-start justify-between gap-2'>
                                <div className='flex items-start gap-2 flex-1'>
                                    {movement.type === "Entrada" ? (
                                        <ArrowDownCircle className='size-5 text-green-600 mt-0.5 flex-shrink-0' />
                                    ) : (
                                        <ArrowUpCircle className='size-5 text-orange-600 mt-0.5 flex-shrink-0' />
                                    )}
                                    <div className='flex-1 min-w-0'>
                                        <p className='font-medium text-sm truncate'>{movement.productName}</p>
                                        <p className='text-xs text-muted-foreground'>{movement.reason}</p>
                                        <div className='flex items-center gap-2 mt-1'>
                                            <Tag
                                                text={movement.type}
                                                color={movement.type === "Entrada" ? "green" : "orange"}
                                            />
                                            <span className='text-xs font-semibold'>
                                                {movement.quantity} {movement.unit}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-right flex-shrink-0'>
                                    <p className='text-xs text-muted-foreground'>
                                        {format(movement.date, "dd/MM/yyyy", { locale: es })}
                                    </p>
                                    <p className='text-xs text-muted-foreground mt-1'>
                                        {movement.user}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
