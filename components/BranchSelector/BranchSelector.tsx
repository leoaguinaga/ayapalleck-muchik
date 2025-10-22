"use client"

import { ChevronsUpDown, Cog, Grid2x2Plus, Settings, SquarePlus } from "lucide-react"
import { authClient } from "@/lib/auth-client"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "../ui/separator"

import React, { useEffect, useState } from 'react'
import { branches } from "../BranchItem/BranchItem.data"
import BranchItem from "../BranchItem/BranchItem"
import BranchButton from "../BranchButton/BranchButton"

export default function BranchSelector() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return (
            <div className="flex flex-row mx-1 sm:mx-3 mt-4">
                <div className="w-full opacity-50">
                    <BranchButton isOpen={false} name="Balta" address="Av. José Balta 291" />
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-row mx-1 sm:mx-3 mt-4">
            <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger className="w-full">
                    <BranchButton isOpen={isOpen} name="Balta" address="Av. José Balta 291" />
                </PopoverTrigger>
                <PopoverContent side="bottom" align="start" className="w-64 p-0 text-sm flex flex-col gap-1">
                    {branches.map((branch) => (
                        <BranchItem key={branch.name} name={branch.name} address={branch.address} />
                    ))}
                    <Separator className="w-full" />
                    <div className="flex flex-row gap-2 items-center cursor-pointer hover:bg-gray-300/20 p-2 mx-1 rounded-sm">
                        <Grid2x2Plus className="size-5" />
                        <p>Registrar sede</p>
                    </div>
                    <Separator className="w-full" />
                    <div className="flex flex-row gap-2 items-center cursor-pointer hover:bg-gray-300/20 p-2 mx-1 mb-1 rounded-sm">
                        <Cog className="size-5" />
                        <p>Gestionar sedes</p>
                    </div>

                </PopoverContent>
            </Popover>
        </div>
    )
}
