
import { Badge } from '@/components/ui/badge'
import { StayState, PaymentState } from '../../types'
import { stayStateConfig, paymentStateConfig } from '../../utils'
import { cn } from '@/lib/utils'

interface StatusCellProps {
  stayState: StayState
  paymentState: PaymentState
}

export function StatusCell({ stayState, paymentState }: StatusCellProps) {
  const stayConfig = stayStateConfig[stayState]
  const payConfig = paymentStateConfig[paymentState]

  return (
    <div className="flex flex-col gap-1.5">
      <Badge
        variant="outline"
        className={cn('w-fit text-xs font-medium', stayConfig.className)}
      >
        {stayConfig.label}
      </Badge>
    </div>
  )
}
