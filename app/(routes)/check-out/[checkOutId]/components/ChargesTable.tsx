'use client'

import { Charge } from '../types'
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
import { Bed, ShoppingCart, Wrench, Car, Plus } from 'lucide-react'

interface ChargesTableProps {
  charges: Charge[]
}

export function ChargesTable({ charges }: ChargesTableProps) {
  const getChargeIcon = (type: Charge['type']) => {
    switch (type) {
      case 'accommodation':
        return <Bed className="h-4 w-4 text-violet-400" />
      case 'product':
        return <ShoppingCart className="h-4 w-4 text-emerald-400" />
      case 'service':
        return <Wrench className="h-4 w-4 text-blue-400" />
      case 'taxi':
        return <Car className="h-4 w-4 text-amber-400" />
      case 'extra':
        return <Plus className="h-4 w-4 text-cyan-400" />
    }
  }

  const getChargeLabel = (type: Charge['type']) => {
    switch (type) {
      case 'accommodation':
        return 'Alojamiento'
      case 'product':
        return 'Producto'
      case 'service':
        return 'Servicio'
      case 'taxi':
        return 'Taxi'
      case 'extra':
        return 'Extra'
    }
  }

  const getChargeColors = (type: Charge['type']) => {
    switch (type) {
      case 'accommodation':
        return 'bg-violet-500/15 text-violet-700 dark:text-violet-300 border-violet-500/30'
      case 'product':
        return 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
      case 'service':
        return 'bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30'
      case 'taxi':
        return 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30'
      case 'extra':
        return 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30'
    }
  }

  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="border-zinc-800 hover:bg-transparent">
            <TableHead className="text-zinc-700 dark:text-zinc-400 font-semibold">Tipo</TableHead>
            <TableHead className="text-zinc-700 dark:text-zinc-400 font-semibold">Descripción</TableHead>
            <TableHead className="text-zinc-700 dark:text-zinc-400 font-semibold text-center">Cantidad</TableHead>
            <TableHead className="text-zinc-700 dark:text-zinc-400 font-semibold text-right">Precio Unit.</TableHead>
            <TableHead className="text-zinc-700 dark:text-zinc-400 font-semibold text-right">Total</TableHead>
            <TableHead className="text-zinc-700 dark:text-zinc-400 font-semibold">Fecha</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {charges.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-zinc-700 dark:text-zinc-500 py-8">
                No hay cargos registrados
              </TableCell>
            </TableRow>
          ) : (
            charges.map((charge) => (
              <TableRow 
                key={charge.id} 
                className="border-zinc-800 hover:bg-zinc-800/30"
              >
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={`${getChargeColors(charge.type)} gap-1.5`}
                  >
                    {getChargeIcon(charge.type)}
                    {getChargeLabel(charge.type)}
                  </Badge>
                </TableCell>
                <TableCell>
                  {charge.description}
                </TableCell>
                <TableCell className="text-center">
                  {charge.quantity}
                </TableCell>
                <TableCell className="text-right">
                  S/ {charge.unitPrice.toFixed(2)}
                </TableCell>
                <TableCell className="text-right font-semibold ">
                  S/ {charge.total.toFixed(2)}
                </TableCell>
                <TableCell className="text-zinc-400 text-sm">
                  {format(charge.createdAt, "d MMM, HH:mm'h'", { locale: es })}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
