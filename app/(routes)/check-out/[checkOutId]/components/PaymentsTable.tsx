'use client'

import { Payment } from '../types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Banknote, CreditCard, ArrowRightLeft } from 'lucide-react'

interface PaymentsTableProps {
  payments: Payment[]
}

export function PaymentsTable({ payments }: PaymentsTableProps) {
  const getPaymentIcon = (method: Payment['method']) => {
    switch (method) {
      case 'cash':
        return <Banknote className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
      case 'card':
        return <CreditCard className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      case 'transfer':
        return <ArrowRightLeft className="h-4 w-4 text-violet-600 dark:text-violet-400" />
    }
  }

  const getPaymentLabel = (method: Payment['method']) => {
    switch (method) {
      case 'cash':
        return 'Efectivo'
      case 'card':
        return 'Tarjeta'
      case 'transfer':
        return 'Transferencia'
    }
  }

  const getPaymentColors = (method: Payment['method']) => {
    switch (method) {
      case 'cash':
        return 'bg-emerald-500/15 text-emerald-700 border-emerald-500/30 dark:text-emerald-300'
      case 'card':
        return 'bg-blue-500/15 text-blue-700 border-blue-500/30 dark:text-blue-300'
      case 'transfer':
        return 'bg-violet-500/15 text-violet-700 border-violet-500/30 dark:text-violet-300'
    }
  }

  return (
    <div className="rounded-lg border border-border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="border-border hover:bg-transparent">
            <TableHead className="text-muted-foreground font-semibold">Método</TableHead>
            <TableHead className="text-muted-foreground font-semibold text-right">Monto</TableHead>
            <TableHead className="text-muted-foreground font-semibold">Referencia</TableHead>
            <TableHead className="text-muted-foreground font-semibold">Fecha</TableHead>
            <TableHead className="text-muted-foreground font-semibold">Registrado por</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                No hay pagos registrados
              </TableCell>
            </TableRow>
          ) : (
            payments.map((payment) => (
              <TableRow 
                key={payment.id} 
                className="border-border hover:bg-muted/50"
              >
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={`${getPaymentColors(payment.method)} gap-1.5`}
                  >
                    {getPaymentIcon(payment.method)}
                    {getPaymentLabel(payment.method)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-semibold text-emerald-700 dark:text-emerald-300">
                  S/ {payment.amount.toFixed(2)}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {payment.reference || '-'}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {format(payment.createdAt, "d MMM, HH:mm'h'", { locale: es })}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {payment.createdBy}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
