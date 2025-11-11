'use client'

import { StayDetail } from '../types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Home, User, Phone, Mail, FileText, Clock } from 'lucide-react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface StayHeaderProps {
  stay: StayDetail
  checkoutButton?: React.ReactNode
}

export function StayHeader({ stay, checkoutButton }: StayHeaderProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase()
  }

  const isExtended = stay.checkOut.getTime() !== stay.originalCheckOut.getTime()
  const statusColors = {
    active: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    'checked-out': 'bg-zinc-500/15 text-zinc-300 border-zinc-500/30',
    cancelled: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
  }

  return (
    <Card className="bg-card">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-6">
          {/* Guest Info */}
          <div className="flex items-start gap-4 flex-1">
            <Avatar className="h-16 w-16 border-2 border-border">
              <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${stay.guest.name}`} />
              <AvatarFallback className="bg-gradient-to-br from-violet-500 to-purple-600 text-white text-lg">
                {getInitials(stay.guest.name)}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1.5">
                <h1 className="text-2xl font-bold">{stay.guest.name}</h1>
                <Badge variant="outline" className={statusColors[stay.status]}>
                  {stay.status === 'active' ? 'En estadía' : 
                   stay.status === 'checked-out' ? 'Check-out' : 'Cancelado'}
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-1">
                <span className="flex items-center gap-1">
                  <FileText className="h-4 w-4" />
                  {stay.folio}
                </span>
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {stay.guest.documentType}: {stay.guest.document}
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {stay.guest.email && (
                  <a 
                    href={`mailto:${stay.guest.email}`}
                    className="flex items-center gap-1 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    {stay.guest.email}
                  </a>
                )}
                {stay.guest.phone && (
                  <a 
                    href={`tel:${stay.guest.phone}`}
                    className="flex items-center gap-1 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    {stay.guest.phone}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          {checkoutButton && (
            <div className="flex items-start">
              {checkoutButton}
            </div>
          )}
        </div>

        {/* Room & Stay Info */}
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border">
            <div className="flex items-center justify-center h-10 w-10 bg-violet-500/20 rounded-lg">
              <Home className="h-5 w-5 text-violet-500 dark:text-violet-400" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Habitación</p>
              <p className="text-lg font-semibold">{stay.room.code}</p>
              <p className="text-xs text-muted-foreground">{stay.room.type}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border">
            <div className="flex items-center justify-center h-10 w-10 bg-emerald-500/20 rounded-lg">
              <Calendar className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Check-in</p>
              <p className="text-lg font-semibold">
                {format(stay.checkIn, 'd MMM', { locale: es })}
              </p>
              <p className="text-xs text-muted-foreground">
                {format(stay.checkIn, 'HH:mm')}h
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border">
            <div className="flex items-center justify-center h-10 w-10 bg-rose-500/20 rounded-lg">
              <Calendar className="h-5 w-5 text-rose-600 dark:text-rose-400" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Check-out</p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-1.5">
                      <p className="text-lg font-semibold">
                        {format(stay.checkOut, 'd MMM', { locale: es })}
                      </p>
                      {isExtended && (
                        <Badge variant="outline" className="bg-amber-500/15 text-amber-600 dark:text-amber-300 border-amber-500/30 text-[10px] px-1.5 py-0">
                          Ext
                        </Badge>
                      )}
                    </div>
                  </TooltipTrigger>
                  {isExtended && (
                    <TooltipContent>
                      <p className="text-xs">Original: {format(stay.originalCheckOut, 'd MMM, HH:mm', { locale: es })}h</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
              <p className="text-xs text-muted-foreground">12:00h</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border">
            <div className="flex items-center justify-center h-10 w-10 bg-blue-500/20 rounded-lg">
              <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Duración</p>
              <p className="text-lg font-semibold">
                {stay.nights} {stay.nights === 1 ? 'noche' : 'noches'}
              </p>
              <p className="text-xs text-muted-foreground">
                S/ {stay.room.pricePerNight.toFixed(2)}/noche
              </p>
            </div>
          </div>
        </div>

        {/* Notes */}
        {stay.notes && (
          <div className="mt-4 p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <span className="font-semibold">Nota:</span> {stay.notes}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
