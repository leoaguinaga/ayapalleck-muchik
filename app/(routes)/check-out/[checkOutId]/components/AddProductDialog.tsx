
"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { ShoppingCart, Plus, Minus } from 'lucide-react'
import { Product } from '../types'
import toast from 'react-hot-toast'

const addProductSchema = z.object({
  productId: z.string({}),
  quantity: z.number().min(1, 'La cantidad debe ser mayor a 0'),
})

interface AddProductDialogProps {
  products: Product[]
  onAddProduct: (productId: string, productName: string, quantity: number, unitPrice: number, total: number) => void
}

export function AddProductDialog({ products, onAddProduct }: AddProductDialogProps) {
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof addProductSchema>>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      quantity: 1,
    },
  })

  const selectedProductId = form.watch('productId')
  const quantity = form.watch('quantity')
  const selectedProduct = products.find(p => p.id === selectedProductId)
  const total = selectedProduct ? selectedProduct.price * quantity : 0

  const onSubmit = (values: z.infer<typeof addProductSchema>) => {
    const product = products.find(p => p.id === values.productId)
    if (!product) return

    onAddProduct(product.id, product.name, values.quantity, product.price, total)
    toast.success(`${product.name} agregado (x${values.quantity})`)
    setOpen(false)
    form.reset()
  }

  const incrementQuantity = () => {
    const currentQty = form.getValues('quantity')
    form.setValue('quantity', currentQty + 1)
  }

  const decrementQuantity = () => {
    const currentQty = form.getValues('quantity')
    if (currentQty > 1) {
      form.setValue('quantity', currentQty - 1)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Añadir producto
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Añadir producto consumido</DialogTitle>
          <DialogDescription>
            Selecciona el producto y la cantidad consumida por el huésped
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="productId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Producto</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un producto" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {products.map((product) => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.name} - S/ {product.price.toFixed(2)} ({product.stock} disponibles)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cantidad</FormLabel>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={decrementQuantity}
                      disabled={field.value <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <FormControl>
                      <Input
                        type="number"
                        min={1}
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                        className="text-center"
                      />
                    </FormControl>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={incrementQuantity}
                      disabled={selectedProduct && field.value >= selectedProduct.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Preview del cálculo */}
            {selectedProduct && (
              <div className="rounded-lg bg-muted p-4 space-y-2">
                <h4 className="font-semibold text-sm">Resumen</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Producto:</span>
                    <span>{selectedProduct.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Precio unitario:</span>
                    <span>S/ {selectedProduct.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cantidad:</span>
                    <span>{quantity}</span>
                  </div>
                  <div className="h-px bg-border my-2" />
                  <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span className="text-primary">S/ {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit" disabled={!selectedProductId}>
                Agregar
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}