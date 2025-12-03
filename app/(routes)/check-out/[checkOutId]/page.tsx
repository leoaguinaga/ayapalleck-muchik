'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { mockStayDetail, mockProducts } from './data'
import { Charge, Payment, ExtendStayData, AddChargeData } from './types'
import { StayHeader } from './components/StayHeader'
import { ChargesTable } from './components/ChargesTable'
import { PaymentsTable } from './components/PaymentsTable'
import { FinancialSummary } from './components/FinancialSummary'
import { ActivityTimeline } from './components/ActivityTimeline'
import { ExtendStayDialog } from './components/ExtendStayDialog'
import { AddProductDialog } from './components/AddProductDialog'
import { AddChargeDialog } from './components/AddChargeDialog'
import { AddPaymentDialog } from './components/AddPaymentDialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowLeft, 
  LogOut, 
  Wallet,
  Receipt,
  Printer,
  Trash,
  Trash2
} from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import toast from 'react-hot-toast'

export default function CheckOutIdPage({ params }: { params: { checkOutId: string } }) {
  const router = useRouter()
  const [stay, setStay] = useState(mockStayDetail)

  const totalCharges = stay.charges.reduce((sum, charge) => sum + charge.total, 0)
  const totalPaid = stay.payments.reduce((sum, payment) => sum + payment.amount, 0)
  const pendingAmount = totalCharges - totalPaid

  const handleExtendStay = (newCheckOut: Date, additionalNights: number, additionalCost: number) => {
    const newCharge: Charge = {
      id: `c${stay.charges.length + 1}`,
      type: 'accommodation',
      description: `Extensión - ${additionalNights} ${additionalNights === 1 ? 'noche' : 'noches'} adicionales`,
      quantity: additionalNights,
      unitPrice: stay.room.pricePerNight,
      total: additionalCost,
      createdAt: new Date(),
      createdBy: 'admin',
    }

    setStay(prev => ({
      ...prev,
      checkOut: newCheckOut,
      nights: prev.nights + additionalNights,
      charges: [...prev.charges, newCharge],
    }))

    toast.success(`Estadía extendida: ${additionalNights} noches adicionales`)
  }

  const handleAddProduct = (productId: string, productName: string, quantity: number, unitPrice: number, total: number) => {
    const newCharge: Charge = {
      id: `c${stay.charges.length + 1}`,
      type: 'product',
      description: productName,
      quantity,
      unitPrice,
      total,
      createdAt: new Date(),
      createdBy: 'admin',
    }

    setStay(prev => ({
      ...prev,
      charges: [...prev.charges, newCharge],
    }))

    toast.success(`Producto agregado: ${quantity} × ${productName}`)
  }

  const handleAddCharge = (type: Charge['type'], description: string, quantity: number, unitPrice: number, total: number) => {
    const newCharge: Charge = {
      id: `c${stay.charges.length + 1}`,
      type,
      description,
      quantity,
      unitPrice,
      total,
      createdAt: new Date(),
      createdBy: 'admin',
    }

    setStay(prev => ({
      ...prev,
      charges: [...prev.charges, newCharge],
    }))

    toast.success(`Cargo agregado: ${description}`)
  }

  const handleAddPayment = (amount: number, method: Payment['method'], reference?: string) => {
    const newPayment: Payment = {
      id: `p${stay.payments.length + 1}`,
      amount,
      method,
      reference,
      createdAt: new Date(),
      createdBy: 'admin',
    }

    setStay(prev => ({
      ...prev,
      payments: [...prev.payments, newPayment],
    }))

    const methodLabel = method === 'cash' ? 'Efectivo' : method === 'card' ? 'Tarjeta' : 'Transferencia'
    toast.success(`Pago registrado: S/ ${amount.toFixed(2)} - ${methodLabel}`)
  }

  const handleCheckOut = () => {
    if (pendingAmount > 0) {
      toast.error(`No se puede realizar el check-out. Saldo pendiente: S/ ${pendingAmount.toFixed(2)}`)
      return
    }

    setStay(prev => ({
      ...prev,
      status: 'checked-out',
    }))

    toast.success('Check-out realizado exitosamente')

    setTimeout(() => {
      router.push('/check-out')
    }, 1500)
  }

  const handlePrintReceipt = () => {
    toast('Generando recibo...')
  }

  return (
    <div className="flex-1 space-y-6 ">
      {/* Stay Header */}
      <StayHeader 
        stay={stay}
        checkoutButton={
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="default"
                size="lg"
                disabled={pendingAmount > 0 || stay.status === 'checked-out'}
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
              >
                <LogOut className="h-4 w-4" />
                Realizar Check-out
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-card border-border">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  ¿Confirmar Check-out?
                </AlertDialogTitle>
                <AlertDialogDescription className="text-muted-foreground">
                  Se dará por finalizada la estadía de <span className="font-semibold text-foreground">{stay.guest.name}</span> en la habitación <span className="font-semibold text-foreground">{stay.room.code}</span>.
                  Esta acción no se puede deshacer.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>
                  Cancelar
                </AlertDialogCancel>
                <AlertDialogAction 
                  onClick={handleCheckOut}
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
                >
                  Confirmar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        }
      />

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Charges & Payments */}
        <div className="col-span-2 space-y-6">
          {/* Quick Actions */}
          <div className="grid grid-cols-4 gap-3">
            <ExtendStayDialog
              currentCheckOut={stay.checkOut}
              pricePerNight={stay.room.pricePerNight}
              onExtend={handleExtendStay}
            />
            
            <AddProductDialog
              products={mockProducts}
              onAddProduct={handleAddProduct}
            />
            
            <AddChargeDialog
              onAddCharge={handleAddCharge}
            />
            
            <AddPaymentDialog
              pendingAmount={pendingAmount}
              onAddPayment={handleAddPayment}
            />
          </div>

          {/* Charges Section */}
          <Card className="bg-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Receipt className="h-5 w-5 text-violet-400" />
                  Cargos
                </CardTitle>
                <div className="text-sm">
                  {stay.charges.length} {stay.charges.length === 1 ? 'cargo' : 'cargos'}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ChargesTable charges={stay.charges} />
            </CardContent>
          </Card>

          {/* Payments Section */}
          <Card className="bg-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                  Historial de Pagos
                </CardTitle>
                <div className="text-sm">
                  {stay.payments.length} {stay.payments.length === 1 ? 'pago' : 'pagos'}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <PaymentsTable payments={stay.payments} />
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Summary & Timeline */}
        <div className="space-y-6">
          <FinancialSummary 
            totalCharges={totalCharges}
            totalPaid={totalPaid}
          />
{/*           
          <ActivityTimeline
            charges={stay.charges}
            payments={stay.payments}
            checkIn={stay.checkIn}
            checkOut={stay.checkOut}
            originalCheckOut={stay.originalCheckOut}
          /> */}
        </div>
      </div>
      <Button variant="destructive" className='flex items-center -space-x-1 place-self-end'>
        <Trash2 className='size-4.5' /> Cancelar reserva
      </Button>
    </div>
  )
}
