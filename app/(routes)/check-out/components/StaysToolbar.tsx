
"use client"

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import {
  Search,
  Filter,
  CheckCircle2,
  ArrowLeftRight,
  Mail,
  Printer,
  Calendar as CalendarIcon,
  ChevronDown,
} from 'lucide-react'
import { TabFilter, StayState, PaymentState } from '../types'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'

interface StaysToolbarProps {
  selectedTab: TabFilter
  onTabChange: (tab: TabFilter) => void
  searchValue: string
  onSearchChange: (value: string) => void
  selectedRows: number
}

export function StaysToolbar({
  selectedTab,
  onTabChange,
  searchValue,
  onSearchChange,
  selectedRows,
}: StaysToolbarProps) {
  const [stayStateFilters, setStayStateFilters] = useState<StayState[]>([])
  const [paymentStateFilters, setPaymentStateFilters] = useState<PaymentState[]>([])
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({})

  const handleBulkCheckout = () => {
    toast.success(`Checkout masivo: ${selectedRows} estadías`)
  }

  const handleBulkExtend = () => {
    toast.success(`Extender masivo: ${selectedRows} estadías`)
  }

  const handleBulkReminder = () => {
    toast.success(`Recordatorios enviados: ${selectedRows} estadías`)
  }

  const handleBulkPrint = () => {
    toast.success(`Imprimiendo ${selectedRows} recibos`)
  }

  const tabLabels = {
    today: 'Hoy',
    overdue: 'Atrasadas',
    tomorrow: 'Mañana',
    all: 'Todas',
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Acciones masivas */}
      {selectedRows > 0 && (
        <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg border">
          <span className="text-sm text-muted-foreground">
            {selectedRows} seleccionada{selectedRows > 1 ? 's' : ''}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleBulkCheckout}
          >
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Checkout
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleBulkExtend}
          >
            <ArrowLeftRight className="mr-2 h-4 w-4" />
            Extender
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleBulkReminder}
          >
            <Mail className="mr-2 h-4 w-4" />
            Recordatorio
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleBulkPrint}
          >
            <Printer className="mr-2 h-4 w-4" />
            Imprimir
          </Button>
        </div>
      )}

      {/* Búsqueda y filtros */}
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar por cliente o habitación..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Dropdown de filtro de vista */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-fit">
              {tabLabels[selectedTab]}
              <ChevronDown className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[180px]">
            <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={selectedTab} onValueChange={(v) => onTabChange(v as TabFilter)}>
              <DropdownMenuRadioItem value="today">
                Hoy
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="overdue">
                Atrasadas
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="tomorrow">
                Mañana
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="all">
                Todas
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Filtro de estado de checkout */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Filter className="mr-1 h-4 w-4" />
              Estado checkout
              {stayStateFilters.length > 0 && (
                <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-primary-foreground">
                  {stayStateFilters.length}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Estado de checkout</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={stayStateFilters.includes('on-time')}
              onCheckedChange={(checked) => {
                setStayStateFilters(
                  checked
                    ? [...stayStateFilters, 'on-time']
                    : stayStateFilters.filter((s) => s !== 'on-time')
                )
              }}
            >
              En tiempo
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={stayStateFilters.includes('delayed')}
              onCheckedChange={(checked) => {
                setStayStateFilters(
                  checked
                    ? [...stayStateFilters, 'delayed']
                    : stayStateFilters.filter((s) => s !== 'delayed')
                )
              }}
            >
              Con retraso
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={stayStateFilters.includes('extended')}
              onCheckedChange={(checked) => {
                setStayStateFilters(
                  checked
                    ? [...stayStateFilters, 'extended']
                    : stayStateFilters.filter((s) => s !== 'extended')
                )
              }}
            >
              Extendida
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Filtro de estado de pago */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Filter className="mr-1 h-4 w-4" />
              Estado pago
              {paymentStateFilters.length > 0 && (
                <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-primary-foreground">
                  {paymentStateFilters.length}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Estado de pago</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={paymentStateFilters.includes('paid')}
              onCheckedChange={(checked) => {
                setPaymentStateFilters(
                  checked
                    ? [...paymentStateFilters, 'paid']
                    : paymentStateFilters.filter((s) => s !== 'paid')
                )
              }}
            >
              Pagado
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={paymentStateFilters.includes('partial')}
              onCheckedChange={(checked) => {
                setPaymentStateFilters(
                  checked
                    ? [...paymentStateFilters, 'partial']
                    : paymentStateFilters.filter((s) => s !== 'partial')
                )
              }}
            >
              Parcial
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={paymentStateFilters.includes('pending')}
              onCheckedChange={(checked) => {
                setPaymentStateFilters(
                  checked
                    ? [...paymentStateFilters, 'pending']
                    : paymentStateFilters.filter((s) => s !== 'pending')
                )
              }}
            >
              Pendiente
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Filtro de rango de fechas */}
        {/* <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                'justify-start text-left font-normal',
                !dateRange.from && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateRange.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, 'dd MMM', { locale: es })} -{' '}
                    {format(dateRange.to, 'dd MMM', { locale: es })}
                  </>
                ) : (
                  format(dateRange.from, 'dd MMM', { locale: es })
                )
              ) : (
                'Fechas'
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              mode="range"
              selected={{ from: dateRange.from, to: dateRange.to }}
              onSelect={(range) =>
                setDateRange({ from: range?.from, to: range?.to })
              }
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover> */}
      </div>
    </div>
  )
}
