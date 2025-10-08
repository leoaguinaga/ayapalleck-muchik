"use client"

import React from 'react'
import { RoomDetailsProps } from './RoomDetails.types'
import { Save } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

export default function RoomDetails(props: RoomDetailsProps) {
    const { roomNumber, roomType, pricePerNight } = props;

    const onSave = () => {
        toast.success('Detalles guardados');
    }

    return (
        <div className='bg-card w-fit flex flex-col p-5 rounded-lg border gap-2.5'>
            <h2 className='text-lg font-bold'>Detalles de la habitación</h2>
            <img src="/room-simple.webp" className='rounded-lg max-w-[320px]' alt="" />
            <p className=''>Número de habitación: <strong>{roomNumber}</strong></p>
            <p className=''>Tipo de habitación: <strong>{roomType}</strong></p>
            <p className=''>Precio por noche: <strong>${pricePerNight}</strong></p>
            <div className='flex flex-col gap-2 w-full max-w-[320px]'>
                <p>Detalles:</p>
                <Textarea className='w-full h-20 max-h-20' value="Habitación con el aire acondicionado fuera de servicio con vista a la calle" readOnly />
                <Button className='w-fit place-self-end' onClick={onSave}>
                    <Save className='size-5' />
                    Guardar
                </Button>
            </div>
        </div>
    )
}
