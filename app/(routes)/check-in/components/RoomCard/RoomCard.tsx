import React from 'react'
import { RoomCardProps } from './RoomCard.types'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ArrowRight, BadgeCheck, Bed, BrushCleaning, Stars } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function RoomCard(props: RoomCardProps) {
  const { room_type, number, available, status } = props;

  return (
    <Card className={`flex flex-col gap-2.5 p-4 px-0 m-0 items-center justify-center w-full text-center ${available ? 'bg-card' : 'border-orange-500 bg-orange-50  dark:bg-orange-900/25'}`}>
      <CardHeader className='w-full text-center flex flex-row items-center gap-1'>
        <h1 className='font-semibold text-xl'>{number} <span className='font-semilight'>-</span></h1>
        <p className='text-semilight'>{room_type}</p>
      </CardHeader>
      <CardContent className='w-full flex flex-col gap-3'>
        <img src="/room-simple.webp" alt="" className='h-25 w-full rounded-lg border' />
        <div className='text-xs flex-row gap-3 flex w-fit'>
          {available ? (
            <div className='flex flex-row gap-1 items-center text-green-500'>
              <BadgeCheck className='size-4' />
              Disponible
            </div>
          ) : (
            <div className='flex flex-row gap-1 items-center text-orange-500'>
              <Bed className='size-4' />
              Ocupado
            </div>
          )}
          {status === "DIRTY" ? (
            <div className='flex flex-row gap-1 items-center text-yellow-500'>
              <BrushCleaning className='size-4' />
              Sucio
            </div>
          ) : (
            <div className='flex flex-row gap-1 items-center text-blue-500'>
              <Stars className='size-4' />
              Limpio
            </div>
          )}
        </div>
        <Button className='w-full flex flex-row gap-2'>
          Administrar
          <ArrowRight className='size-5' />
        </Button>
      </CardContent>
    </Card>
  )
}
