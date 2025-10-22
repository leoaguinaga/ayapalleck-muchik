"use client"

import { ChevronsUpDown, Settings2, Siren, UserCircle } from "lucide-react"
import { authClient } from "@/lib/auth-client"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "../ui/separator"
import React, { useEffect, useState } from 'react'
import { redirect } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"
import ConfigurationDialog, { ConfigTab } from "../ConfigurationDialog"

// Si quieres mantener tus botones, dales un onClick por props
// import ProfileButton from "../ProfileButton"
// import SettingsButton from "../SettingsButton"
// import HelpButton from "../HelpButton"

export default function UserButton() {
    const { data: session } = authClient.useSession()
    const [isOpen, setIsOpen] = React.useState(false)
    const [isMounted, setIsMounted] = useState(false)

    // estado del dialog
    const [dialogOpen, setDialogOpen] = useState(false)
    const [activeTab, setActiveTab] = useState<ConfigTab>("profile")

    useEffect(() => setIsMounted(true), [])

    const handleLogout = async () => {
        await authClient.signOut()
        redirect('/')
    }

    const openConfig = (tab: ConfigTab) => {
        setActiveTab(tab)
        setDialogOpen(true)
        setIsOpen(false)
    }

    if (!isMounted) {
        return (
            <div className="flex flex-row mx-1 sm:mx-3">
                <div className="w-full rouded-lg flex flex-row items-center p-2 rounded-lg mb-4 justify-between text-left opacity-50">
                    <div className="flex flex-row gap-2 items-center">
                        <div className="rounded-lg h-8 w-8 bg-black dark:bg-white flex items-center justify-center">
                            <img src="/logo-alt.webp" alt="" className="h-6.5 invert dark:invert-0" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-2.5 w-35" />
                            <Skeleton className="h-2.5 w-20" />
                        </div>
                    </div>
                    <ChevronsUpDown className="size-4.5" />
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-row mx-1 sm:mx-3">
            {/* Dialog montado a nivel de UserButton */}
            <ConfigurationDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                tab={activeTab}
            />

            <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger className={`w-full rouded-lg flex flex-row items-center p-2 rounded-lg mb-4 justify-between cursor-pointer hover:bg-gray-300/20 text-left ${isOpen ? "bg-gray-300/20" : ""}`}>
                    <div className="flex flex-row gap-2 items-center">
                        <div className="rounded-lg h-8 w-8 bg-black dark:bg-white flex items-center justify-center">
                            <img src="/logo-alt.webp" alt="" className="h-6.5 invert dark:invert-0" />
                        </div>
                        <div className="flex flex-col">
                            <div className="text-sm font-semibold">{session?.user.name}</div>
                            <div className="text-xs overflow-clip">Administrador</div>
                        </div>
                    </div>
                    <ChevronsUpDown className="size-4.5" />
                </PopoverTrigger>

                <PopoverContent side="top" align="start" className="w-64 p-0 text-sm flex flex-col gap-1">
                    <div className="flex flex-row gap-2 items-center m-2 mb-1">
                        <div className="rounded-lg h-8 w-8 bg-black dark:bg-white flex items-center justify-center">
                            <img src="/logo-alt.webp" alt="" className="h-6.5 invert dark:invert-0" />
                        </div>
                        <div className="flex flex-col">
                            <div className="text-sm font-semibold">{session?.user.name}</div>
                            <div className="text-xs overflow-clip">{session?.user.email}</div>
                        </div>
                    </div>
                    <Separator className="w-full" />
                    <div className="flex flex-row gap-2 items-center cursor-pointer hover:bg-gray-300/20 px-3 py-2 rounded-md mx-1" onClick={() => openConfig("profile")}>
                        <UserCircle className="size-5" />
                        <p>Mi perfil</p>
                    </div>
                    <Separator className="w-full" />
                    <div className="flex flex-row gap-2 items-center cursor-pointer hover:bg-gray-300/20 px-3 py-2 rounded-md mx-1" onClick={() => openConfig("settings")}>
                        <Settings2 className="size-5" />
                        <p>Configuración</p>
                    </div>
                    <Separator className="w-full" />
                    <div className="flex flex-row gap-2 items-center cursor-pointer hover:bg-gray-300/20 px-3 py-2 rounded-md mx-1" onClick={() => openConfig("help")}>
                        <Siren className="size-5" />
                        <p>Obtener ayuda</p>
                    </div>
                    <Separator className="w-full" />
                </PopoverContent>
            </Popover>
        </div>
    )
}
