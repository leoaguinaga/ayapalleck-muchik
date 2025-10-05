"use client"

import { ChevronsUpDown, LogOut, Settings, UserCircle } from "lucide-react"
import { authClient } from "@/lib/auth-client"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "../ui/separator"

import React from 'react'
import { redirect } from "next/navigation"

export default function UserButton() {
    const { data: session } = authClient.useSession()
    const [ isOpen, setIsOpen ] = React.useState(false);

    const handleLogout = async () => {
        await authClient.signOut();
        redirect('/')
    }

    return (
        <div className="flex flex-row mx-1 sm:mx-3">
            <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger className={`w-full rouded-lg flex flex-row items-center p-2 rounded-lg my-5 justify-between cursor-pointer hover:bg-gray-300/20 text-left ${isOpen ? "bg-gray-300/20" : ""}`}>
                    <div className="flex flex-row gap-2 items-center">
                        <div className="rounded-lg h-8 w-8 bg-black dark:bg-white"></div>
                        <div className="flex flex-col">
                            <div className="text-sm font-semibold">{session?.user.name}</div>
                            <div className="text-xs overflow-clip">{session?.user.email}</div>
                        </div>
                    </div>
                    <ChevronsUpDown className="size-4.5" />
                </PopoverTrigger>
                <PopoverContent side="top" align="start" className="w-69 p-1 text-sm flex flex-col gap-1">
                    <div className="flex flex-row gap-2 items-center m-1">
                        <div className="rounded-lg h-8 w-8 bg-black dark:bg-white"></div>
                        <div className="flex flex-col">
                            <div className="text-sm font-semibold">{session?.user.name}</div>
                            <div className="text-xs overflow-clip">Administrador</div>
                        </div>
                    </div>
                    <Separator className="w-full" />
                    <div className="flex flex-row gap-2 items-center cursor-pointer hover:bg-gray-300/20 px-3 py-2 rounded-md">
                        <UserCircle className="size-5" />
                        <p>Editar perfil</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center cursor-pointer hover:bg-gray-300/20 px-3 py-2 rounded-md">
                        <Settings className="size-5" />
                        <p>Configuración</p>
                    </div>
                    <Separator className="w-full" />
                    <button className="flex flex-row gap-2 items-center cursor-pointer hover:bg-gray-300/20 px-3 py-2 rounded-md" onClick={() => handleLogout()}>
                        <LogOut className="size-5" />
                        <p>Cerrar sesión</p>
                    </button>
                </PopoverContent>
            </Popover>
        </div>
    )
}
