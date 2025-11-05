"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { formCheckInSchema } from "./FormCheckIn.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import toast from 'react-hot-toast'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FormCheckInProps, Guest, Product } from "./FormCheckIn.types"
import ProductsTable from '../ProductsTable/ProductsTable'
import { CustomerSelector } from '@/components/CustomerSelector'
import { CustomOpenModalButton } from '@/components/CustomOpenModalButton'
import FormCreateCustomer from '@/app/(routes)/customers/components/FromCreateCustomer/FormCreateCustomer'

const mockGuests: Guest[] = [
  { id: "1", name: "Leonardo Aguinaga Paredes", document: "45236789" },
  { id: "2", name: "María López García", document: "47896532" },
  { id: "3", name: "Carlos Pérez Sánchez", document: "41234567" }
]

const mockProducts: Product[] = [
  { id: "PROD001", name: "Coca-Cola 500ml", price: 4.50, stock: 20 },
  { id: "PROD002", name: "Inka Kola 500ml", price: 4.00, stock: 17 },
  { id: "PROD003", name: "Sporade 600ml", price: 2.50, stock: 11 }
]

export default function FormCheckIn({ roomId, onSummaryChange }: FormCheckInProps) {
  const router = useRouter()
  const [selectedProducts, setSelectedProducts] = useState<Array<{ productId: string, productName: string, price: number, quantity: number }>>([])
  const [openCreateGuestModal, setOpenCreateGuestModal] = useState(false)
  const [changeType, setChangeType] = useState("Por noche")
  
  const form = useForm<z.infer<typeof formCheckInSchema>>({
    resolver: zodResolver(formCheckInSchema),
    defaultValues: {
      guestId: "",
      duration: "",
      discount: 0,
      reservationType: "Por noche",
      taxiFee: 0,
      advance: 0,
      extras: []
    }
  })

  const reservationType = form.watch("reservationType")
  const discount = form.watch("discount") || 0
  const taxiFee = form.watch("taxiFee") || 0
  const advance = form.watch("advance") || 0
  const duration = form.watch("duration") || ""

  const basePrice = reservationType === "Por noche" ? 120 : 60
  const productsTotal = selectedProducts.reduce((sum, p) => sum + (p.price * p.quantity), 0)
  const subtotal = basePrice + productsTotal
  const total = subtotal - discount + taxiFee - advance

  useEffect(() => {
    onSummaryChange({
      reservationType,
      duration,
      basePrice,
      products: selectedProducts,
      discount,
      taxiFee,
      advance,
      total
    })
  }, [reservationType, duration, basePrice, selectedProducts, discount, taxiFee, advance, total, onSummaryChange])

  const onSubmit = async (values: z.infer<typeof formCheckInSchema>) => {
    const data = {
      ...values,
      extras: selectedProducts,
      roomId
    }
    console.log(data)
    toast.success('Ingreso registrado con éxito')
    router.push('/check-in')
  }

  const handleAddProduct = (productId: string, productName: string, price: number, quantity: number) => {
    setSelectedProducts(prev => {
      const existing = prev.find(p => p.productId === productId)
      if (existing) {
        return prev.map(p =>
          p.productId === productId
            ? { ...p, quantity: p.quantity + quantity }
            : p
        )
      }
      return [...prev, { productId, productName, price, quantity }]
    })
  }

  return (
    <div className="flex flex-col gap-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className='bg-card rounded-lg border p-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
            <h2 className='text-xl font-bold col-span-2'>Registrar ingreso</h2>

            <FormField
              control={form.control}
              name="guestId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Selecciona el huésped</FormLabel>
                  <FormControl>
                    <CustomerSelector
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                      customers={mockGuests.map(g => ({ id: g.id, name: g.name, document: g.document }))}
                      placeholder="Selecciona el huésped"
                      searchPlaceholder="Buscar por nombre..."
                      className="w-full"
                    />
                  </FormControl>
                  <p className='text-sm text-muted-foreground'>
                    o{' '}
                    <CustomOpenModalButton
                      triggerLabel="Crea uno nuevo"
                      buttonVariant="underline"
                      buttonClassName="text-sm"
                      title="Nuevo Huésped"
                      description="Completa el formulario para registrar un nuevo huésped"
                      breadcrumb={["Huéspedes", "Agregar huésped"]}
                      open={openCreateGuestModal}
                      onOpenChange={setOpenCreateGuestModal}
                    >
                      <FormCreateCustomer setOpenModalCreateCustomer={setOpenCreateGuestModal} />
                    </CustomOpenModalButton>
                  </p>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="reservationType"
              render={({ field }) => (
                <FormItem className='mb-4 flex flex-col items-start w-full'>
                  <FormLabel>¿En qué modalidad hará la reserva?</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value)
                      setChangeType(value)
                      form.setValue("duration", value === "Por noche" ? "12" : "1")
                    }}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='w-full'>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='w-full'>
                      <SelectItem value="Por noche">Por noche</SelectItem>
                      <SelectItem value="Por horas">Por horas</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>¿Cuánto tiempo se hospedará?</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder="Selecciona la duración"/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='w-full'>
                      {changeType === "Por noche" ? (
                        <>
                          <SelectItem value="12">12 horas</SelectItem>
                          <SelectItem value="24">1 día</SelectItem>
                          <SelectItem value="36">1 día y medio</SelectItem>
                          <SelectItem value="48">2 días</SelectItem>
                          <SelectItem value="72">3 días</SelectItem>
                        </>
                      ) : (
                        <>
                          <SelectItem value="1">1 hora</SelectItem>
                          <SelectItem value="2">2 horas</SelectItem>
                          <SelectItem value="3">3 horas</SelectItem>
                          <SelectItem value="4">4 horas</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="taxiFee"
              render={({ field }) => (
                <FormItem className='mb-4'>
                  <FormLabel>¿Hay algún cargo por taxi? (Opcional)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      placeholder="S/ 30.00"
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="discount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>¿Se realizó un descuento? (Opcional)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      placeholder="S/ 10.00"
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="advance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adelanto (Opcional)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      placeholder="S/ 10.00"
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Productos extras */}
          <div className='bg-card rounded-lg border p-5'>
            <h2 className='text-lg font-semibold mb-4'>¿Desea añadir algún extra?</h2>
            <ProductsTable
              products={mockProducts}
              onAddProduct={handleAddProduct}
            />
          </div>
        </form>
      </Form>
    </div>
  )
}
