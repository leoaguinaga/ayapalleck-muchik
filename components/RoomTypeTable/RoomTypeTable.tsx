'use client'

import React from 'react'
import DataTable from './data-table'
import { createColumns } from './columns'
import { useRoomTypes } from '@/hooks/room-types/useRoomTypes'
import { Skeleton } from '@/components/ui/skeleton'
import { RoomTypeTableProps } from './RoomTypeTable.types'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useUpdateRoomType } from '@/hooks/room-types/useUpdateRoomType'
import toast from 'react-hot-toast'
import { ChevronRight } from 'lucide-react'

const extractValue = (field: unknown) => {
  if (field && typeof field === 'object' && 'value' in (field as Record<string, unknown>)) {
    return (field as { value: unknown }).value
  }
  return field
}

export default function RoomTypeTable() {
  const { data: roomTypes, isLoading, isError } = useRoomTypes()
  const { mutate: updateRoomType, isPending } = useUpdateRoomType()
  const [editingRoomType, setEditingRoomType] = React.useState<RoomTypeTableProps | null>(null)
  const [deactivatingRoomType, setDeactivatingRoomType] = React.useState<RoomTypeTableProps | null>(null)
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [price, setPrice] = React.useState<number>(0)

  const handleEditOpen = (roomType: RoomTypeTableProps) => {
    setEditingRoomType(roomType)
    setName(String(extractValue(roomType.name) ?? ''))
    setDescription(String(extractValue(roomType.description) ?? ''))
    setPrice(Number(extractValue(roomType.price) ?? 0))
  }

  const handleEditSubmit = () => {
    if (!editingRoomType?.id) return
    updateRoomType(
      {
        id: editingRoomType.id,
        data: {
          name: name.trim(),
          description: description.trim(),
          price: Number(price),
        },
      },
      {
        onSuccess: () => {
          toast.success('Tipo de habitación actualizado')
          setEditingRoomType(null)
        },
        onError: () => {
          toast.error('No se pudo actualizar el tipo de habitación')
        },
      }
    )
  }

  const handleDeactivate = () => {
    if (!deactivatingRoomType?.id) return
    updateRoomType(
      {
        id: deactivatingRoomType.id,
        data: { available: false },
      },
      {
        onSuccess: () => {
          toast.success('Tipo de habitación desactivado')
          setDeactivatingRoomType(null)
        },
        onError: () => {
          toast.error('No se pudo desactivar el tipo de habitación')
        },
      }
    )
  }

  const columns = React.useMemo(
    () =>
      createColumns({
        onEdit: handleEditOpen,
        onDeactivate: (roomType) => setDeactivatingRoomType(roomType),
      }),
    []
  )

  if (isLoading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="text-center py-8 text-destructive">
        Error al cargar los tipos de habitación
      </div>
    )
  }

  return (
    <div className="space-y-3 w-full">
      <DataTable columns={columns} data={roomTypes ?? []} />

      <Dialog open={Boolean(editingRoomType)} onOpenChange={(open) => !open && setEditingRoomType(null)}>
        <DialogContent className="sm:max-w-[520px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-1 font-bold">
            <p>Tipo de habitación</p>
            <ChevronRight className="size-4.5" />
            <p>Editar</p>
          </DialogTitle>
            <DialogDescription>
              Actualiza los datos del tipo de habitación seleccionado.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
            <div className="grid gap-2">
              <Label htmlFor="room-type-name">Nombre</Label>
              <Input id="room-type-name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="room-type-price">Precio por noche</Label>
              <Input
                id="room-type-price"
                type="number"
                min={1}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value || 0))}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="room-type-description">Descripción</Label>
              <Textarea
                id="room-type-description"
                className="max-h-24"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditingRoomType(null)}>
              Cancelar
            </Button>
            <Button
              onClick={handleEditSubmit}
              disabled={!name.trim() || !Number.isFinite(price) || price <= 0 || isPending}
            >
              Guardar cambios
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={Boolean(deactivatingRoomType)} onOpenChange={(open) => !open && setDeactivatingRoomType(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-1 font-bold">
            <p>Tipo de habitación</p>
            <ChevronRight className="size-4.5" />
            <p>Desactivar</p>
          </AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción desactivará el tipo de habitación {" "}
              <strong>{String(extractValue(deactivatingRoomType?.name) ?? "")}</strong> y no se mostrará como disponible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/90" onClick={handleDeactivate}>
              Desactivar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
