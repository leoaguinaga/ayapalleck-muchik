import React from 'react'
import { BranchButtonProps } from './BranchButton.types'
import { ChevronsUpDown } from 'lucide-react';

export default function BranchButton(props: BranchButtonProps) {
    const { name, address, isOpen } = props;

    return (
        <div className={`w-full rouded-lg flex flex-row items-center p-2 rounded-lg justify-between cursor-pointer hover:bg-gray-300/20 text-left ${isOpen ? "bg-gray-300/20" : ""}`}>
            <div className="flex flex-row gap-2 items-center">
                <div className="rounded-lg h-8 w-8 bg-black dark:bg-white flex items-center justify-center">
                    <img src="/favicon.webp" alt="" className="rounded-lg h-6 w-6 invert dark:invert-0" />
                </div>
                <div className="flex flex-col">
                    <div className="text-sm font-semibold">Sede {name}</div>
                    <div className="text-xs overflow-clip">{address}</div>
                </div>
            </div>
            <ChevronsUpDown className="size-4.5" />
        </div>
    )
}
