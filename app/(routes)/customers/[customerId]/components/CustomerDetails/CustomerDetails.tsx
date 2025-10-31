"use client"

import React, { useState } from 'react'
import { CustomerDetailsProps } from './CustomerDetails.types'
import { Save, User, Mail, Phone, Calendar, CreditCard, FileText } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

export default function CustomerDetails(props: CustomerDetailsProps) {
    const { customerId, name, documentType, documentNumber, email, phone, birthDate, ruc } = props
    const [isEditing, setIsEditing] = useState(false)

    const onSave = () => {
        toast.success('Detalles guardados exitosamente')
        setIsEditing(false)
    }

    return (
        <div className='bg-card w-full flex flex-col p-5 rounded-lg border gap-4'>
            <div className='flex items-center justify-between'>
                <h2 className='text-lg font-bold'>Detalles del cliente</h2>
                {!isEditing && (
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                        Editar
                    </Button>
                )}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex items-center gap-3'>
                    <User className='size-5 text-muted-foreground' />
                    <div className='flex-1'>
                        <p className='text-sm text-muted-foreground'>Nombre completo</p>
                        {isEditing ? (
                            <Input defaultValue={name} className='mt-1' />
                        ) : (
                            <p className='font-medium'>{name}</p>
                        )}
                    </div>
                </div>

                <div className='flex items-center gap-3'>
                    <CreditCard className='size-5 text-muted-foreground' />
                    <div className='flex-1'>
                        <p className='text-sm text-muted-foreground'>Documento</p>
                        <p className='font-medium'>{documentType} - {documentNumber}</p>
                    </div>
                </div>

                <div className='flex items-center gap-3'>
                    <Mail className='size-5 text-muted-foreground' />
                    <div className='flex-1'>
                        <p className='text-sm text-muted-foreground'>Correo electrónico</p>
                        {isEditing ? (
                            <Input defaultValue={email || ''} className='mt-1' type='email' />
                        ) : (
                            <p className='font-medium'>{email || 'No registrado'}</p>
                        )}
                    </div>
                </div>

                <div className='flex items-center gap-3'>
                    <Phone className='size-5 text-muted-foreground' />
                    <div className='flex-1'>
                        <p className='text-sm text-muted-foreground'>Teléfono</p>
                        {isEditing ? (
                            <Input defaultValue={phone} className='mt-1' />
                        ) : (
                            <p className='font-medium'>{phone}</p>
                        )}
                    </div>
                </div>

                <div className='flex items-center gap-3'>
                    <Calendar className='size-5 text-muted-foreground' />
                    <div className='flex-1'>
                        <p className='text-sm text-muted-foreground'>Fecha de nacimiento</p>
                        <p className='font-medium'>{format(birthDate, "dd 'de' MMMM 'de' yyyy", { locale: es })}</p>
                    </div>
                </div>

                <div className='flex items-center gap-3'>
                    <FileText className='size-5 text-muted-foreground' />
                    <div className='flex-1'>
                        <p className='text-sm text-muted-foreground'>RUC</p>
                        {isEditing ? (
                            <Input defaultValue={ruc || ''} className='mt-1' />
                        ) : (
                            <p className='font-medium'>{ruc || 'No registrado'}</p>
                        )}
                    </div>
                </div>
            </div>

            {isEditing && (
                <div className='flex gap-2 justify-end pt-2'>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancelar
                    </Button>
                    <Button onClick={onSave}>
                        <Save className='size-4 mr-2' />
                        Guardar
                    </Button>
                </div>
            )}
        </div>
    )
}
