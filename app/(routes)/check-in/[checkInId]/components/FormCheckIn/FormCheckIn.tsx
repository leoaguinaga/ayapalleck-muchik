"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { formCheckInSchema } from "./FormCheckIn.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import toast from 'react-hot-toast'

import { Button } from "@/components/ui/button"
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
import { formatPrice } from '@/lib/formatPrice'

// Mock data - reemplazar con datos reales
const mockGuests: Guest[] = [
  { id: "1", name: "Leonardo Aguinaga Paredes" },
  { id: "2", name: "María López García" },
  { id: "3", name: "Carlos Pérez Sánchez" }
]

const mockProducts: Product[] = [
  { id: "PROD001", name: "Coca-Cola 500ml", price: 4.50, stock: 20 },
  { id: "PROD002", name: "Inka Kola 500ml", price: 4.00, stock: 17 },
  { id: "PROD003", name: "Sporade 600ml", price: 2.50, stock: 11 }
]

export default function FormCheckIn({ roomId, onSummaryChange }: FormCheckInProps) {
  const router = useRouter()
  const [selectedProducts, setSelectedProducts] = useState<Array<{productId: string, productName: string, price: number, quantity: number}>>([])

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

  // Calcular totales
  const basePrice = reservationType === "Por noche" ? 120 : 60
  const productsTotal = selectedProducts.reduce((sum, p) => sum + (p.price * p.quantity), 0)
  const subtotal = basePrice + productsTotal
  const total = subtotal - discount + taxiFee - advance

  // Actualizar el resumen cuando cambien los valores
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
          {/* Registrar ingreso */}
          <div className='bg-card rounded-lg border p-5'>
            <h2 className='text-lg font-semibold mb-4'>Registrar ingreso</h2>
            
            <FormField
              control={form.control}
              name="guestId"
              render={({ field }) => (
                <FormItem className='mb-4'>
                  <FormLabel>Selecciona el huésped</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un huésped" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {mockGuests.map((guest) => (
                        <SelectItem key={guest.id} value={guest.id}>
                          {guest.name}
                        </SelectItem>
                      ))}
                      <SelectItem value="new">○ Crea uno nuevo</SelectItem>
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
                <FormItem className='mb-4'>
                  <FormLabel>¿Cuánto tiempo se hospedará?</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona la duración" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="12">12 horas</SelectItem>
                      <SelectItem value="1">1 día</SelectItem>
                      <SelectItem value="2">2 días</SelectItem>
                      <SelectItem value="3">3 días</SelectItem>
                      <SelectItem value="7">1 semana</SelectItem>
                    </SelectContent>
                  </Select>
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
          </div>

          {/* Detalles de la reserva */}
          <div className='bg-card rounded-lg border p-5'>
            <h2 className='text-lg font-semibold mb-4'>Detalles de la reserva</h2>

            <FormField
              control={form.control}
              name="reservationType"
              render={({ field }) => (
                <FormItem className='mb-4'>
                  <FormLabel>¿En qué modalidad hará la reserva?</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
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

          {/* Botones de acción */}
          <div className='flex gap-3 justify-end'>
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Previo
            </Button>
            <Button type="submit">
              Registrar ingreso
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
