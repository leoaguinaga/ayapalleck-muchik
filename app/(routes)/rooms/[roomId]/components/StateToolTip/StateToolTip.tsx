import React from 'react'
import { StateToolTipProps } from './StateToolTip.types'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { BadgeCheck, Bed, BrushCleaning, Stars } from 'lucide-react';

export default function StateToolTip(props: StateToolTipProps) {
    const { state } = props;

    switch (state) {
        case 'available':
            return (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <BadgeCheck className='size-4.5 text-green-500'/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Disponible</p>
                        </TooltipContent>
                    </Tooltip>

                </TooltipProvider>
            )
        case 'occupied':
            return (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Bed className='size-4.5 text-red-500'/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Ocupada</p>
                        </TooltipContent>
                    </Tooltip>

                </TooltipProvider>
            )
        case 'clean':
            return (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Stars className='size-4.5 text-blue-500'/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Limpia</p>
                        </TooltipContent>
                    </Tooltip>

                </TooltipProvider>
            )
        case 'dirty':
            return (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <BrushCleaning className='size-4.5 text-yellow-500'/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Sucia</p>
                        </TooltipContent>
                    </Tooltip>

                </TooltipProvider>
            )
    }
}
