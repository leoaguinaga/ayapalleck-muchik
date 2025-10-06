import { Info } from "lucide-react";
import { CustomToolTipProps } from "./CustomToolTip.types";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function CustomToolTip(props: CustomToolTipProps) {
    const { content } = props;

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Info className="size-5" />
                </TooltipTrigger>
                <TooltipContent>
                    <p>{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
