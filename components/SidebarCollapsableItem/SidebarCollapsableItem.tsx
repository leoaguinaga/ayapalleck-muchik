"use client"

import React, { useState, useEffect } from 'react'
import { SidebarCollapsableItemProps } from './SidebarCollapsableItem.types'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ChevronRight, History } from "lucide-react"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function SidebarCollapsableItem(props: SidebarCollapsableItemProps) {
    const { item } = props;
    const { label, icon: Icon, href } = item;
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const pathname = usePathname();
    const activePath = pathname === href;
    const activeHistoryPath = pathname === `${href}/history`;

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="mt-1">
                <div className={cn(
                    "flex justify-between light:text-slate-700 dark:text-white text-md items-center rounded-lg overflow-hidden cursor-pointer hover:bg-slate-300/20",
                    (activePath || activeHistoryPath) && 'bg-slate-400/20'
                )}>
                    <Link
                        href={href}
                        className="flex gap-2 items-center p-2 rounded-lg flex-1"
                    >
                        <Icon className='size-5' />
                        <p>{label}</p>
                    </Link>
                    <button
                        className="p-3 rounded-lg transition-all cursor-pointer"
                    >
                        <ChevronRight className='size-4 transition-transform duration-300 ease-in-out' />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-1">
            <div className={cn(
                "flex justify-between light:text-slate-700 dark:text-white text-md items-center rounded-lg overflow-hidden  cursor-pointer hover:bg-slate-300/20",
                (activePath || activeHistoryPath) && 'bg-slate-400/20'
            )}>
                <Link
                    href={href}
                    className="flex gap-2 items-center  p-2 rounded-lg flex-1"
                >
                    <Icon className='size-5' />
                    <p>{label}</p>
                </Link>

                <CollapsibleTrigger asChild>
                    <button
                        className="p-3 rounded-lg transition-all cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ChevronRight
                            className={cn(
                                'size-4 transition-transform duration-300 ease-in-out',
                                isOpen && 'rotate-90'
                            )}
                        />
                    </button>
                </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="overflow-hidden transition-all duration-300 ease-in-out">
                <div className='flex flex-row h-full gap-2 w-full rounded-full'>
                    <div className='border mb-4 min-h-full ml-5'></div>
                    <Link
                        href={`${href}/history`}
                        className={cn(
                            "flex gap-2 items-center hover:bg-slate-300/20 px-2.5 py-2 rounded-lg cursor-pointer mt-1 light:text-slate-700 dark:text-white text-sm transition-colors w-full",
                            activeHistoryPath && 'bg-slate-400/20'
                        )}
                    >
                        <History className='size-4.5' />
                        <p>Historial</p>
                    </Link>
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}
