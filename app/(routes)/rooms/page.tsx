import React from 'react'
import RoomsTable from './components/RoomsTable/RoomsTable'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Calendar } from 'lucide-react'

export default function page() {
  return (
    <div className='flex flex-col-reverse lg:flex-row gap-5 w-full h-full'>
      <div className='flex flex-col gap-5 w-full lg:w-3/4 h-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2.5 lg:gap-5'>
          <Card className='py-5 gap-0'>
            <CardHeader className='text-lg font-bold'>
              Disponibilidad
            </CardHeader>
            <CardContent className='text-3xl font-semibold'>
              70%
            </CardContent>
          </Card>
          <Card className='py-5 gap-0'>
            <CardHeader className='text-lg font-bold'>
              Limpieza
            </CardHeader>
            <CardContent className='text-3xl font-semibold'>
              65%
            </CardContent>
          </Card>
          <Card className='py-5 gap-0'>
            <CardHeader className='text-lg font-bold'>
              Balance
            </CardHeader>
            <CardContent className='text-3xl font-semibold'>
              S/570
            </CardContent>
          </Card>
          <Card className='py-5 gap-0'>
            <CardHeader className='text-lg font-bold'>
              Cuotas por taxi
            </CardHeader>
            <CardContent className='text-3xl font-semibold'>
              S/120
            </CardContent>
          </Card>
        </div>
        <RoomsTable />
      </div>
      <div className='flex flex-col min-w-[290px] lg:w-1/4 min-h-full border rounded-lg bg-card'>
        <h1 className='text-lg font-bold p-2.5'>Reservas próximas</h1>
        <Separator />
        <div className='flex flex-col'>
          <div className='flex flex-col hover:bg-accent/50 gap-2.5 cursor-pointer'>
            <div className='p-2.5 pb-0 flex flex-col'>
              <div className='flex flex-row justify-between items-center'>
                <p className='text-2xl font-semibold'>101</p>
                <p className='flex flex-row items-center text-sm text-muted-foreground'>
                  <Calendar className='size-4 mr-2 mb-1' />
                  4 Oct 10:30 AM
                </p>
              </div>
              <p className='text-lg'>Leonardo Aguinaga</p>
            </div>
            <Separator />
          </div>
          <div className='flex flex-col hover:bg-accent/50 gap-2.5 cursor-pointer'>
            <div className='p-2.5 pb-0 flex flex-col'>
              <div className='flex flex-row justify-between items-center'>
                <p className='text-2xl font-semibold'>102</p>
                <p className='flex flex-row items-center text-sm text-muted-foreground'>
                  <Calendar className='size-4 mr-2 mb-1' />
                  5 Oct 10:30 AM
                </p>
              </div>
              <p className='text-lg'>Danfer Pérez</p>
            </div>
            <Separator />
          </div>
          <div className='flex flex-col hover:bg-accent/50 gap-2.5 cursor-pointer'>
            <div className='p-2.5 pb-0 flex flex-col'>
              <div className='flex flex-row justify-between items-center'>
                <p className='text-2xl font-semibold'>103</p>
                <p className='flex flex-row items-center text-sm text-muted-foreground'>
                  <Calendar className='size-4 mr-2 mb-1' />
                  6 Oct 10:30 AM
                </p>
              </div>
              <p className='text-lg'>Anderson Zapata</p>
            </div>
            <Separator />
          </div>
          <div className='flex flex-col hover:bg-accent/50 gap-2.5 cursor-pointer'>
            <div className='p-2.5 flex flex-col'>
              <div className='flex flex-row justify-between items-center'>
                <p className='text-2xl font-semibold'>104</p>
                <p className='flex flex-row items-center text-sm text-muted-foreground'>
                  <Calendar className='size-4 mr-2 mb-1' />
                  7 Oct 10:30 AM
                </p>
              </div>
              <p className='text-lg'>Paul Flores</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
