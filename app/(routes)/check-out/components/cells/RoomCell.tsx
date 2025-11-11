
import { Room } from '../../types'
import { Badge } from '@/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { BrushCleaning, Sparkles } from 'lucide-react'

interface RoomCellProps {
  room: Room
}

export function RoomCell({ room }: RoomCellProps) {
  const tooltipContent = [
    room.isClean !== undefined && (room.isClean ? 'Limpio' : 'Sucio'),
  ].filter(Boolean).join(' · ')

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1.5">
        <Badge variant="secondary" className="font-mono font-semibold">
          {room.code}
        </Badge>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              {room.isClean ? (
                <Sparkles className="h-3 w-3 text-emerald-400" />
              ) : (
                <BrushCleaning className="h-3 w-3 text-amber-400" />
              )}
            </TooltipTrigger>
            {tooltipContent && (
              <TooltipContent>
                <p className="text-xs">{tooltipContent}</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>

      </div>
    </div>
  )
}
