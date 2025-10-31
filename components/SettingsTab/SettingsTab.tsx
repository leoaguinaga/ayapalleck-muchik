"use client"

import React, { useState } from 'react'
import { Separator } from "../ui/separator"
import { Pencil, Save } from "lucide-react"
import { Button } from '../ui/button'
import RoomTypeTable from '../RoomTypeTable'
import CreateRoomTypeButton from '../CreateRoomTypeButton'
import toast from 'react-hot-toast'


export default function SettingsTab() {
    const [isEditingName, setIsEditingName] = useState(false)
    const [isEditingPhone, setIsEditingPhone] = useState(false)
    const [isEditingEmail, setIsEditingEmail] = useState(false)
    const [isEditingAddress, setIsEditingAddress] = useState(false)

    const [hotelName, setHotelName] = useState("Ayapalleck Muchik")
    const [hotelPhone, setHotelPhone] = useState("+51 937 103 394")
    const [hotelEmail, setHotelEmail] = useState("ayapalleck_muchik@gmail.com")
    const [hotelAddress, setHotelAddress] = useState("San José 1084, Chiclayo")

    const handleCancel = () => {
        setIsEditingName(false)
        setIsEditingPhone(false)
        setIsEditingEmail(false)
        setIsEditingAddress(false)
        // Restore original values
        setHotelName("Ayapalleck Muchik")
        setHotelPhone("+51 937 103 394")
        setHotelEmail("ayapalleck_muchik@gmail.com")
        setHotelAddress("San José 1084, Chiclayo")
    }

    const handleSave = (field: string, value: string, setter: (value: boolean) => void, originalValue: string) => {
        if (value.trim() === "") {
            toast.error("El campo no puede estar vacío")
            return
        }
        if (value === originalValue) {
            setter(false)
        } else {
            toast.success("Actualizado correctamente")
            setter(false)
        }
    }

    const onInputKeyDown =
        (onSave: () => void, onCancel: () => void) =>
            (e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") onSave()
                if (e.key === "Escape") onCancel()
            }

    const isEditing = isEditingName || isEditingPhone || isEditingEmail || isEditingAddress

    return (
        <div className="h-full flex flex-col w-full">
            <div className="flex items-center justify-between w-full">
                <h2 className="text-lg p-2.5 font-semibold">Configuración</h2>
                {isEditing ? (
                    <Button onClick={handleCancel} className="h-8 p-2.5 mr-2.5 motion-preset-slide-left-sm motion-preset-slide-right-sm-exit">
                        Cancelar
                    </Button>
                ) : null}
            </div>
            <Separator className="border-1 border-b-0" />
            <div className="flex items-center justify-between w-full p-2.5">
                <p className="font-medium">Nombre</p>
                {isEditingName ? (
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={hotelName}
                            onChange={(e) => setHotelName(e.target.value)}
                            onKeyDown={onInputKeyDown(
                                () => handleSave("nombre", hotelName, setIsEditingName, "Ayapalleck Muchik"),
                                handleCancel
                            )}
                            autoFocus
                            className="border-gray-300 border-0 text-right"
                        />
                        <Save 
                            className="size-4 cursor-pointer" 
                            onClick={() => handleSave("nombre", hotelName, setIsEditingName, "Ayapalleck Muchik")} 
                        />
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <p>{hotelName}</p>
                        <Pencil className="size-3.5 cursor-pointer" onClick={() => setIsEditingName(true)} />
                    </div>
                )}
            </div>
            <Separator className="border-1 border-b-0" />
            <div className="flex items-center justify-between w-full p-2.5">
                <p className="font-medium">Número</p>
                {isEditingPhone ? (
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={hotelPhone}
                            onChange={(e) => setHotelPhone(e.target.value)}
                            onKeyDown={onInputKeyDown(
                                () => handleSave("número", hotelPhone, setIsEditingPhone, "+51 937 103 394"),
                                handleCancel
                            )}
                            autoFocus
                            className="border-gray-300 border-0 text-right"
                        />
                        <Save 
                            className="size-4 cursor-pointer" 
                            onClick={() => handleSave("número", hotelPhone, setIsEditingPhone, "+51 937 103 394")} 
                        />
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <p>{hotelPhone}</p>
                        <Pencil className="size-3.5 cursor-pointer" onClick={() => setIsEditingPhone(true)} />
                    </div>
                )}
            </div>
            <Separator className="border-1 border-b-0" />
            <div className="flex items-center justify-between w-full p-2.5">
                <p className="font-medium">Correo</p>
                {isEditingEmail ? (
                    <div className="flex items-center gap-2">
                        <input
                            type="email"
                            value={hotelEmail}
                            onChange={(e) => setHotelEmail(e.target.value)}
                            onKeyDown={onInputKeyDown(
                                () => handleSave("correo", hotelEmail, setIsEditingEmail, "ayapalleck_muchik@gmail.com"),
                                handleCancel
                            )}
                            autoFocus
                            className="border-gray-300 border-0 text-right"
                        />
                        <Save 
                            className="size-4 cursor-pointer" 
                            onClick={() => handleSave("correo", hotelEmail, setIsEditingEmail, "ayapalleck_muchik@gmail.com")} 
                        />
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <p>{hotelEmail}</p>
                        <Pencil className="size-3.5 cursor-pointer" onClick={() => setIsEditingEmail(true)} />
                    </div>
                )}
            </div>
            <Separator className="border-1 border-b-0" />
            <div className="flex items-center justify-between w-full p-2.5">
                <p className="font-medium">Dirección</p>
                {isEditingAddress ? (
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={hotelAddress}
                            onChange={(e) => setHotelAddress(e.target.value)}
                            onKeyDown={onInputKeyDown(
                                () => handleSave("dirección", hotelAddress, setIsEditingAddress, "San José 1084, Chiclayo"),
                                handleCancel
                            )}
                            autoFocus
                            className="border-gray-300 border-0 text-right"
                        />
                        <Save 
                            className="size-4 cursor-pointer" 
                            onClick={() => handleSave("dirección", hotelAddress, setIsEditingAddress, "San José 1084, Chiclayo")} 
                        />
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <p>{hotelAddress}</p>
                        <Pencil className="size-3.5 cursor-pointer" onClick={() => setIsEditingAddress(true)} />
                    </div>
                )}
            </div>
            <Separator className="border-1 border-b-0" />
            <div className="flex flex-col gap-2.5 p-2.5">
                <div className="flex items-center justify-between w-full">
                    <p className="font-medium">Tipos de habitaciones</p>
                    <CreateRoomTypeButton />
                </div>
                <RoomTypeTable />
            </div>
        </div>
    )
}
