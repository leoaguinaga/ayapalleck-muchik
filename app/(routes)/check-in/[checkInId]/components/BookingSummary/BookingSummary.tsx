import React from 'react'
import { BookingSummaryProps } from './BookingSummary.types'
import { formatPrice } from '@/lib/formatPrice'
import { Button } from '@/components/ui/button'

export default function BookingSummary({
  reservationType,
  duration,
  basePrice,
  products,
  discount,
  taxiFee,
  advance,
  total
}: BookingSummaryProps) {
  const durationText = duration ? `${duration} ${duration === "1" ? "día" : duration === "12" ? "horas" : "días"}` : ""
  
  return (
    <div className='bg-card rounded-lg border p-5'>
      <h2 className='text-xl font-bold mb-4'>Resumen</h2>
      
      <div className='space-y-3 mb-6'>
        <div className='flex justify-between items-center pb-2 border-b'>
          <span className='text-sm font-medium'>Servicio</span>
          <span className='text-sm font-medium'>Monto</span>
        </div>
        
        <div className='flex justify-between items-start text-sm'>
          <span className='flex-1'>
            Reserva {reservationType.toLowerCase()} {durationText}
          </span>
          <span className='font-medium'>{formatPrice(basePrice)}</span>
        </div>
        
        {products.length > 0 && products.map((product, index) => (
          <div key={index} className='flex justify-between items-start text-sm'>
            <span className='flex-1'>{product.productName} {product.quantity} und</span>
            <span className='font-medium'>{formatPrice(product.price * product.quantity)}</span>
          </div>
        ))}
        
        {discount > 0 && (
          <div className='flex justify-between items-center text-sm text-red-500'>
            <span>Descuento</span>
            <span className='font-medium'>-{formatPrice(discount)}</span>
          </div>
        )}

        {taxiFee > 0 && (
          <div className='flex justify-between items-center text-sm'>
            <span>Cargo por taxi</span>
            <span className='font-medium'>{formatPrice(taxiFee)}</span>
          </div>
        )}

        {advance > 0 && (
          <div className='flex justify-between items-center text-sm text-blue-500'>
            <span>Adelanto</span>
            <span className='font-medium'>-{formatPrice(advance)}</span>
          </div>
        )}
      </div>
      
      <div className='border-t pt-4 flex justify-between items-center'>
        <span className='font-semibold'>Total a cobrar:</span>
        <span className='text-xl font-bold'>{formatPrice(total)}</span>
      </div>
      <Button className='mt-2 w-full'>
        Registrar ingreso
      </Button>
    </div>
  )
}
