"use client"

import React from 'react'
import { RoomDetailsProps } from './RoomDetails.types'
import { Save } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

// Helper para extraer valores que pueden venir envueltos en {value: ...}
const extractValue = (field: any): any => {
    if (field && typeof field === 'object' && 'value' in field) {
        return field.value;
    }
    return field;
};

export default function RoomDetails(props: RoomDetailsProps) {
    const { room } = props;
    
    const roomTypeName = extractValue(room.roomType?.name) || 'N/A';
    const roomTypePrice = extractValue(room.roomType?.price) || 0;
    const roomTypeDescription = extractValue(room.roomType?.description) || 'Sin descripción disponible';

    const onSave = () => {
        toast.success('Detalles guardados');
    }

    return (
        <div className='bg-card w-full sm:grid sm:grid-cols-2 md:w-fit flex flex-col md:flex md:flex-col p-5 rounded-lg border gap-2.5'>
            <h2 className='text-lg font-bold col-span-2'>Detalles de la habitación</h2>
            <img src="/room-simple.webp" className='rounded-lg max-w-[320px] sm:max-w-[290px] md:max-w-[270px]' alt="" />
            <div className='flex flex-col gap-2 w-full sm:pl-4 md:pl-0'>
                <p className='w-full'>Número de habitación: <strong>{room.roomNumber}</strong></p>
                <p className='w-full'>Tipo de habitación: <strong>{roomTypeName}</strong></p>
                <p className='w-full text-left'>Precio por noche: <strong>S/{roomTypePrice.toFixed(2)}</strong></p>
            </div>
            <div className='flex flex-col gap-2 w-full col-span-2 md:max-w-[270px]'>
                <p>Detalles:</p>
                <Textarea className='w-full h-20 sm:h-10 md:h-20 max-h-20' value={roomTypeDescription} readOnly />
                <Button className='w-fit place-self-end' onClick={onSave}>
                    <Save className='size-5' />
                    Guardar
                </Button>
            </div>
        </div>
    )
}
