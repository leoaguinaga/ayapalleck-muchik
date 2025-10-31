"use client"

import React, { useState } from 'react'
import { UserDetailsProps } from './UserDetails.types'
import { Save, User, Mail, Phone, CreditCard, Calendar, Shield } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import Tag from '@/components/Tag/Tag'

export default function UserDetails(props: UserDetailsProps) {
    const { userId, name, email, role, phone, documentNumber, hireDate, status } = props
    const [isEditing, setIsEditing] = useState(false)

    const onSave = () => {
        toast.success('Detalles guardados exitosamente')
        setIsEditing(false)
    }

    return (
        <div className='bg-card w-full flex flex-col p-5 rounded-lg border gap-4'>
            <div className='flex items-center justify-between'>
                <h2 className='text-lg font-bold'>Detalles del usuario</h2>
                <div className='flex items-center gap-2'>
                    <Tag text={status} color={status === "Activo" ? "green" : "red"} />
                    {!isEditing && (
                        <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                            Editar
                        </Button>
                    )}
                </div>
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
                    <Mail className='size-5 text-muted-foreground' />
                    <div className='flex-1'>
                        <p className='text-sm text-muted-foreground'>Correo electrónico</p>
                        {isEditing ? (
                            <Input defaultValue={email} className='mt-1' type='email' />
                        ) : (
                            <p className='font-medium'>{email}</p>
                        )}
                    </div>
                </div>

                <div className='flex items-center gap-3'>
                    <Shield className='size-5 text-muted-foreground' />
                    <div className='flex-1'>
                        <p className='text-sm text-muted-foreground'>Rol</p>
                        <p className='font-medium'>{role}</p>
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
                    <CreditCard className='size-5 text-muted-foreground' />
                    <div className='flex-1'>
                        <p className='text-sm text-muted-foreground'>DNI</p>
                        <p className='font-medium'>{documentNumber}</p>
                    </div>
                </div>

                <div className='flex items-center gap-3'>
                    <Calendar className='size-5 text-muted-foreground' />
                    <div className='flex-1'>
                        <p className='text-sm text-muted-foreground'>Fecha de contratación</p>
                        <p className='font-medium'>{format(hireDate, "dd 'de' MMMM 'de' yyyy", { locale: es })}</p>
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
