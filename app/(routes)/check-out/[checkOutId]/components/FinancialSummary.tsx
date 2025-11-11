'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Wallet, TrendingUp, AlertCircle } from 'lucide-react'

interface FinancialSummaryProps {
  totalCharges: number
  totalPaid: number
}

export function FinancialSummary({ totalCharges, totalPaid }: FinancialSummaryProps) {
  const pending = totalCharges - totalPaid
  const paymentProgress = totalCharges > 0 ? (totalPaid / totalCharges) * 100 : 0
  
  const getProgressColor = () => {
    if (paymentProgress === 100) return 'bg-emerald-500 dark:bg-emerald-500'
    if (paymentProgress >= 50) return 'bg-cyan-500 dark:bg-cyan-500'
    return 'bg-rose-500 dark:bg-rose-500'
  }

  const getStatusColor = () => {
    if (pending === 0) return 'text-emerald-700 dark:text-emerald-300'
    if (pending > 0 && totalPaid > 0) return 'text-cyan-700 dark:text-cyan-300'
    return 'text-rose-700 dark:text-rose-300'
  }

  const getStatusText = () => {
    if (pending === 0) return 'Pagado'
    if (pending > 0 && totalPaid > 0) return 'Pago parcial'
    return 'Pendiente'
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Wallet className="h-5 w-5 text-violet-600 dark:text-violet-400" />
          Resumen Financiero
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progreso de pago</span>
            <span className={`font-semibold ${getStatusColor()}`}>
              {getStatusText()}
            </span>
          </div>
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className={`h-full transition-all ${getProgressColor()}`}
              style={{ width: `${paymentProgress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{paymentProgress.toFixed(0)}% completado</span>
            <span>{totalPaid.toFixed(2)} de {totalCharges.toFixed(2)}</span>
          </div>
        </div>

        {/* Amounts */}
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg border border-border">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center h-8 w-8 bg-blue-500/20 rounded-lg">
                <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm text-muted-foreground">Total a pagar</span>
            </div>
            <span className="text-lg font-bold">
              S/ {totalCharges.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center h-8 w-8 bg-emerald-500/20 rounded-lg">
                <Wallet className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="text-sm text-emerald-700 dark:text-emerald-300">Pagado</span>
            </div>
            <span className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
              S/ {totalPaid.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-rose-500/10 rounded-lg border border-rose-500/30">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center h-8 w-8 bg-rose-500/20 rounded-lg">
                <AlertCircle className="h-4 w-4 text-rose-600 dark:text-rose-400" />
              </div>
              <span className="text-sm text-rose-700 dark:text-rose-300">Pendiente</span>
            </div>
            <span className="text-lg font-bold text-rose-700 dark:text-rose-300">
              S/ {pending.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Warning if pending */}
        {pending > 0 && (
          <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
            <p className="text-xs text-amber-800 dark:text-amber-200">
              <span className="font-semibold">Nota:</span> Se requiere saldar el monto pendiente antes del check-out
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
