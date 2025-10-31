import Tag from '@/components/Tag/Tag';
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function ActualShiftTag() {
    const now = new Date();
    const hour = now.getHours();
    let text = "Noche";
    let color = "violet";
    let toolTipText = "";

    if (hour >= 4 && hour < 12) {
        text = "Mañana";
        color = "yellow";
        toolTipText = "Turno de 04:00 a 12:00";
    } else if (hour >= 12 && hour < 20) {
        text = "Tarde";
        color = "orange";
        toolTipText = "Turno de 12:00 a 20:00";
    } else {
        text = "Noche";
        color = "violet";
        toolTipText = "Turno de 20:00 a 04:00";
    }

    return (
        <div className="flex w-full items-center justify-between">
            <h2 className="text-lg font-semibold">Trabajadores en turno</h2>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Tag color={color} text={text} />
                </TooltipTrigger>
                <TooltipContent align="end">
                    <p>{toolTipText}</p>
                </TooltipContent>
            </Tooltip>
        </div>
    )
}
