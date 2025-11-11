
import { Progress } from '@/components/ui/progress'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { formatCurrency } from '../../utils'
import { Check } from 'lucide-react'

interface PaymentCellProps {
  total: number
  paid: number
}

export function PaymentCell({ total, paid }: PaymentCellProps) {
  const due = total - paid
  const percentage = total > 0 ? (paid / total) * 100 : 0
  const isPaidInFull = due === 0

  const tooltipContent = [
    `Total: ${formatCurrency(total)}`,
    `Pagado: ${formatCurrency(paid)}`,
    due > 0 && `Pendiente: ${formatCurrency(due)}`,
  ].filter(Boolean).join(' · ')

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex flex-col gap-2 min-w-[180px]">
            <div className="flex items-center gap-2">
              <Progress value={percentage} className="h-2 flex-1" />
              {isPaidInFull && (
                <Check className="h-4 w-4 text-emerald-400" />
              )}
            </div>
            <div className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{formatCurrency(paid)}</span> pagado
              {due > 0 && (
                <>
                  {' · '}
                  <span className="font-medium text-rose-400">{formatCurrency(due)}</span> pendiente
                </>
              )}
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">{tooltipContent}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
