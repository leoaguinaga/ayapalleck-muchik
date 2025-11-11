'use client'

import { Charge, Payment } from '../types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { 
  Clock, 
  Bed, 
  ShoppingCart, 
  Wrench, 
  Car, 
  Plus,
  Banknote,
  CreditCard,
  ArrowRightLeft,
  Calendar as CalendarIcon,
  DollarSign
} from 'lucide-react'

interface ActivityTimelineProps {
  charges: Charge[]
  payments: Payment[]
  checkIn: Date
  checkOut: Date
  originalCheckOut: Date
}

type TimelineEvent = {
  id: string
  type: 'checkin' | 'checkout' | 'extend' | 'charge' | 'payment'
  date: Date
  title: string
  description?: string
  amount?: number
  icon: React.ReactNode
  color: string
}

export function ActivityTimeline({ 
  charges, 
  payments, 
  checkIn,
  checkOut,
  originalCheckOut 
}: ActivityTimelineProps) {
  const events: TimelineEvent[] = []

  // Check-in event
  events.push({
    id: 'checkin',
    type: 'checkin',
    date: checkIn,
    title: 'Check-in realizado',
    icon: <CalendarIcon className="h-4 w-4" />,
    color: 'emerald',
  })

  // Charges events
  charges.forEach((charge) => {
    const getChargeIcon = () => {
      switch (charge.type) {
        case 'accommodation': return <Bed className="h-4 w-4" />
        case 'product': return <ShoppingCart className="h-4 w-4" />
        case 'service': return <Wrench className="h-4 w-4" />
        case 'taxi': return <Car className="h-4 w-4" />
        case 'extra': return <Plus className="h-4 w-4" />
      }
    }

    events.push({
      id: charge.id,
      type: 'charge',
      date: charge.createdAt,
      title: `Cargo: ${charge.description}`,
      description: `${charge.quantity} × S/ ${charge.unitPrice.toFixed(2)}`,
      amount: charge.total,
      icon: getChargeIcon(),
      color: 'violet',
    })
  })

  // Payment events
  payments.forEach((payment) => {
    const getPaymentIcon = () => {
      switch (payment.method) {
        case 'cash': return <Banknote className="h-4 w-4" />
        case 'card': return <CreditCard className="h-4 w-4" />
        case 'transfer': return <ArrowRightLeft className="h-4 w-4" />
      }
    }

    const getPaymentMethod = () => {
      switch (payment.method) {
        case 'cash': return 'Efectivo'
        case 'card': return 'Tarjeta'
        case 'transfer': return 'Transferencia'
      }
    }

    events.push({
      id: payment.id,
      type: 'payment',
      date: payment.createdAt,
      title: `Pago recibido - ${getPaymentMethod()}`,
      description: payment.reference,
      amount: payment.amount,
      icon: getPaymentIcon(),
      color: 'emerald',
    })
  })

  // Check if stay was extended
  if (checkOut.getTime() !== originalCheckOut.getTime()) {
    events.push({
      id: 'extend',
      type: 'extend',
      date: checkOut,
      title: 'Estadía extendida',
      description: `Originalmente hasta ${format(originalCheckOut, "d MMM 'a las' HH:mm'h'", { locale: es })}`,
      icon: <Clock className="h-4 w-4" />,
      color: 'amber',
    })
  }

  // Sort by date (newest first)
  const sortedEvents = events.sort((a, b) => b.date.getTime() - a.date.getTime())

  const getEventBg = (color: string) => {
    switch (color) {
      case 'emerald': return 'bg-emerald-500/20'
      case 'violet': return 'bg-violet-500/20'
      case 'amber': return 'bg-amber-500/20'
      case 'blue': return 'bg-blue-500/20'
      default: return 'bg-zinc-500/20'
    }
  }

  const getEventColor = (color: string) => {
    switch (color) {
      case 'emerald': return 'text-emerald-400'
      case 'violet': return 'text-violet-400'
      case 'amber': return 'text-amber-400'
      case 'blue': return 'text-blue-400'
      default: return 'text-zinc-400'
    }
  }

  return (
    <Card className="bg-gradient-to-br from-zinc-900/70 to-zinc-900/40 border-zinc-800">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
          <Clock className="h-5 w-5 text-violet-400" />
          Línea de Tiempo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {sortedEvents.map((event, index) => (
              <div key={event.id} className="relative">
                {/* Timeline line */}
                {index < sortedEvents.length - 1 && (
                  <div className="absolute left-5 top-12 w-0.5 h-full bg-zinc-800" />
                )}
                
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full ${getEventBg(event.color)} ${getEventColor(event.color)}`}>
                    {event.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-medium text-zinc-200 text-sm">
                        {event.title}
                      </h4>
                      {event.amount !== undefined && (
                        <Badge 
                          variant="outline" 
                          className={
                            event.type === 'payment' 
                              ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                              : 'bg-zinc-700/30 text-zinc-300 border-zinc-600/30'
                          }
                        >
                          <DollarSign className="h-3 w-3 mr-1" />
                          {event.amount.toFixed(2)}
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-xs text-zinc-500 mb-1">
                      {format(event.date, "d 'de' MMMM, HH:mm'h'", { locale: es })}
                    </p>
                    
                    {event.description && (
                      <p className="text-sm text-zinc-400">
                        {event.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
