
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Badge } from '@/components/ui/badge'
import { formatDueDelta } from '../../utils'
import { cn } from '@/lib/utils'

interface StayCellProps {
  checkIn: Date
  checkOut: Date
  nights: number
  dueDelta?: number
}

export function StayCell({ checkIn, checkOut, nights, dueDelta }: StayCellProps) {
  const checkInFormatted = format(checkIn, 'dd MMM', { locale: es })
  const checkOutFormatted = format(checkOut, 'dd MMM', { locale: es })
  
  const dueInfo = dueDelta !== undefined ? formatDueDelta(dueDelta) : null

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <span className="text-sm">
          {checkInFormatted} → {checkOutFormatted}
        </span>
        {/* <Badge variant="outline" className="text-xs font-normal">
          {nights} {nights === 1 ? 'noche' : 'noches'}
        </Badge> */}
      </div>
      {dueInfo && (
        <Badge
          variant="outline"
          className={cn('text-xs font-normal w-fit', dueInfo.className)}
        >
          {dueInfo.text}
        </Badge>
      )}
    </div>
  )
}
