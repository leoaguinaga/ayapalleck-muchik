
import { getInitials } from '@/lib/utils'
import { Guest } from '../../types'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

interface GuestCellProps {
  guest: Guest
  folio: string
}

export function GuestCell({ guest, folio }: GuestCellProps) {
  const initials = getInitials(guest.name)

  return (
    <div className="flex items-center gap-3">
      <Avatar className="h-8 w-8">
        <AvatarFallback className="text-xs">{initials}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="font-semibold text-sm">{guest.name}</span>
        <span className="text-xs text-muted-foreground">
          {guest.phone || guest.email}
        </span>
      </div>
    </div>
  )
}
