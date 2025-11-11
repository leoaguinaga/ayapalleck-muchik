
import { StayState, PaymentState } from './types'

export const stayStateConfig = {
  'on-time': {
    label: 'En tiempo',
    className: 'bg-emerald-500/15 text-emerald-400 ring-emerald-500/20',
  },
  'delayed': {
    label: 'Con retraso',
    className: 'bg-rose-500/15 text-rose-400 ring-rose-500/20',
  },
  'extended': {
    label: 'Extendida',
    className: 'bg-amber-500/15 text-amber-400 ring-amber-500/20',
  },
  'no-show': {
    label: 'No-show',
    className: 'bg-slate-500/15 text-slate-400 ring-slate-500/20',
  },
} as const

export const paymentStateConfig = {
  'paid': {
    label: 'Pagado',
    className: 'bg-emerald-500/15 text-emerald-300',
  },
  'partial': {
    label: 'Parcial',
    className: 'bg-cyan-500/15 text-cyan-300',
  },
  'pending': {
    label: 'Pendiente',
    className: 'bg-rose-500/15 text-rose-300',
  },
} as const

export function formatDueDelta(minutes: number): { text: string; className: string } {
  const absMinutes = Math.abs(minutes)
  const hours = Math.floor(absMinutes / 60)
  const mins = absMinutes % 60
  
  let text = ''
  if (hours > 0) {
    text = `${hours}h ${mins}m`
  } else {
    text = `${mins}m`
  }
  
  if (minutes < 0) {
    // Atraso
    return {
      text: `Atraso ${text}`,
      className: 'bg-rose-500/15 text-rose-400 ring-rose-500/20',
    }
  } else if (minutes < 180) {
    // Vence en menos de 3 horas
    return {
      text: `Vence en ${text}`,
      className: 'bg-amber-500/15 text-amber-400 ring-amber-500/20',
    }
  } else {
    // Vence en más de 3 horas
    return {
      text: `Vence en ${text}`,
      className: 'bg-blue-500/15 text-blue-400 ring-blue-500/20',
    }
  }
}

export function getRowBackgroundClass(stayState: StayState, paymentState: PaymentState): string {
  if (stayState === 'delayed') {
    return 'bg-rose-500/5 border-l-2 border-rose-500'
  }
  if (stayState === 'on-time' && paymentState === 'pending') {
    return 'border-l-2 border-amber-500'
  }
  return ''
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
  }).format(amount)
}
