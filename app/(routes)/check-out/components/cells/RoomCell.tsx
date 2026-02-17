import Tag from "@/components/Tag/Tag";
import { Room } from "../../types";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BrushCleaning, Sparkles } from "lucide-react";

interface RoomCellProps {
  room: Room;
}

export function RoomCell({ room }: RoomCellProps) {
  const tooltipContent = [
    room.isClean !== undefined && (room.isClean ? "Limpio" : "Sucio"),
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex flex-col gap-1.25 justify-start font-medium">
        <p className="text-sm">{room.code} <span className="text-gray-600">(Suite)</span></p>
        {room.isClean ? (
          <Tag text="Limpio" color="green"/>
        ) : (
          <Tag text="Sucio" color="amber"/>
        )}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild></TooltipTrigger>
            {tooltipContent && (
              <TooltipContent>
                <p className="text-xs">{tooltipContent}</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
