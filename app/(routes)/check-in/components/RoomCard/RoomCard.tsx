import React from 'react'
import { RoomCardProps } from './RoomCard.types'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ArrowRight, BadgeCheck, Bed, BookMarked, BrushCleaning, Stars } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CreateBookingButton from '../CreateBookingButton'

export default function RoomCard(props: RoomCardProps) {
  const { room_type, number, available, status } = props;

  const getAvailability = () => {
    if (available) {
      return (
        <div className='flex flex-row gap-1 items-center text-green-500'>
          <BadgeCheck className='size-4' />
          Disponible
        </div>
      )
    } else {
      return (
        <div className='flex flex-row gap-1 items-center text-orange-500'>
          <Bed className='size-4' />
          Ocupado
        </div>
      )
    }
  }

  const getStatus = () => {
    if (status === "DIRTY") {
      return (
        <div className='flex flex-row gap-1 items-center text-yellow-500'>
          <BrushCleaning className='size-4' />
          Sucio
        </div>
      );
    } else {
      return (
        <div className='flex flex-row gap-1 items-center text-blue-500'>
          <Stars className='size-4' />
          Limpio
        </div>
      );
    }
  }

  const getActionButton = () => {
    if (available) {
      return (
        <CreateBookingButton  />
      )
    } else {
      return (
        <Button className='w-full flex flex-row gap-2'>
          Administrar
          <BookMarked className='size-4.5' />
        </Button>
      )
    }
  }

  return (
    <Card className={`flex flex-col gap-2.5 p-4 px-0 m-0 items-center justify-center w-full text-center ${available ? 'bg-card' : 'border-orange-500 bg-orange-50  dark:bg-orange-900/25'}`}>
      <CardHeader className='w-full text-center flex flex-row items-center gap-1'>
        <h1 className='font-semibold text-xl'>{number} <span className='font-semilight'>-</span></h1>
        <p className='text-semilight'>{room_type}</p>
      </CardHeader>
      <CardContent className='w-full flex lg:flex-col gap-3 h-full'>
        <img src="/room-simple.webp" alt="" className='h-25 w-full rounded-lg border' />
        <div className='text-xs flex-row gap-3 flex w-fit'>
          {getAvailability()}
          {getStatus()}
        </div>
        {getActionButton()}
      </CardContent>
    </Card >
  )
}
