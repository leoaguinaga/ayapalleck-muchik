import React from 'react'
import { Separator } from "../ui/separator"
import { PackagePlus, Pencil } from "lucide-react"
import { Button } from '../ui/button'
import RoomTypeTable from '../RoomTypeTable'
import CreateRoomTypeButton from '../CreateRoomTypeButton'


export default function SettingsTab() {
    return (
        <div>
            <h2 className="text-lg p-2.5 font-semibold">Configuración</h2>
            <Separator className="border" />
            <div className="flex items-center justify-between w-full p-2.5">
                <p className="font-medium">Nombre</p>
                <div className="flex items-center gap-2">
                    <p>Ayapalleck Muchik</p>
                    <Pencil className="size-3.5 cursor-pointer" />
                </div>
            </div>
            <Separator className="border" />
            <div className="flex items-center justify-between w-full p-2.5">
                <p className="font-medium">Número</p>
                <div className="flex items-center gap-2">
                    <p>+51 937 103 394</p>
                    <Pencil className="size-3.5 cursor-pointer" />
                </div>
            </div>
            <Separator className="border" />
            <div className="flex items-center justify-between w-full p-2.5">
                <p className="font-medium">Correo</p>
                <div className="flex items-center gap-2">
                    <p>ayapalleck_muchik@gmail.com</p>
                    <Pencil className="size-3.5 cursor-pointer" />
                </div>
            </div>
            <Separator className="border" />
            <div className="flex items-center justify-between w-full p-2.5">
                <p className="font-medium">Dirección</p>
                <div className="flex items-center gap-2">
                    <p>San José 1084, Chiclayo</p>
                    <Pencil className="size-3.5 cursor-pointer" />
                </div>
            </div>
            <Separator className="border" />
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
