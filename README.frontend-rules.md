# Back-Office UI Rules + API Roadmap

Este documento fija convenciones de implementacion para tablas/modales del `back-office` y resume los endpoints actuales de la API para integracion.

## 1) Regla de estructura para tablas

Cada tabla debe vivir en una carpeta con este formato:

```text
{NombreComponente}/
  {NombreComponente}.tsx
  data-table.tsx
  columns.tsx
  {NombreComponente}.data.ts
```

Notas:
- `{NombreComponente}.data.ts` se usa para mocks/fallbacks o fixtures de desarrollo.
- Si la tabla consume API, mantener `data.ts` como respaldo de UI o ejemplos.

## 2) Regla de `data-table.tsx` (estilo obligatorio)

Se debe usar exactamente esta base visual y de comportamiento:

```tsx
"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  if (!isMounted) {
    return null;
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-xl bg-white overflow-hidden">
        <Table className="w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="px-3 bg-gray-200/80">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="px-3 py-2 cursor-pointer"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previo
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}
```

## 3) Regla de modales (estilo + estructura)

Todos los modales de accion/creacion/edicion deben seguir este patron:

```tsx
"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronRight, DoorClosed} from "lucide-react"
import { useState } from "react"
import FormCreateCustomer from "../FormCreateRoom/FormCreateRoom"


export default function ButtonCreateRoom() {
    const [openModalCreate, setOpenModalCreate] = useState(false)

    return (
        <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
            <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                    <DoorClosed className="size-4.5" />
                    Agregar Habitación
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-156">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-1 font-bold">
                        <p>Habitaciones</p>
                        <ChevronRight className="size-4.5" />
                        <p>Agregar Habitación</p>
                    </DialogTitle>
                    <DialogDescription className="text-left">
                        Aquí podrás agregar una nueva habitación a la plataforma.
                    </DialogDescription>
                    <FormCreateCustomer setOpenModalCreateCustomer={setOpenModalCreate} />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
```

Regla de integracion:
- Todo modal debe quedar listo para mandar peticion real (`create/update/delete`) con hooks/API del modulo.

## 4) API roadmap de integracion (endpoints disponibles hoy)

Base path: `NEXT_PUBLIC_API_BASE_URL`

### User (`/user`)
- `POST /user/sign-up`
- `POST /user/sign-in`
- `GET /user/me`
- `GET /user`
- `GET /user/:id`
- `GET /user/email/:email`
- `PATCH /user/:id`
- `DELETE /user/:id`

### Room Type (`/room-type`)
- `POST /room-type`
- `GET /room-type`
- `GET /room-type/:id`
- `PATCH /room-type/:id`
- `DELETE /room-type/:id`

### Room (`/room`)
- `POST /room`
- `GET /room`
- `GET /room/:id`
- `PATCH /room/:id`
- `DELETE /room/:id`
- `GET /room/room-number/:roomNumber`
- `GET /room/room-type-id/:roomTypeId`
- `GET /room/status/:status`

### Customer (`/customer`)
- `POST /customer`
- `GET /customer`
- `GET /customer/:id`
- `PATCH /customer/:id`
- `DELETE /customer/:id`

### Booking (`/booking`)
- `POST /booking`
- `GET /booking`
- `GET /booking/:id`
- `GET /booking/customer/:customerId`
- `PATCH /booking/:id`
- `DELETE /booking/:id`

### Request (`/request`)
- `POST /request`
- `GET /request`
- `GET /request/:id`
- `GET /request/status/:status`
- `PUT /request/:id`
- `DELETE /request/:id`

### Product (`/product`)
- `POST /product`
- `GET /product`
- `GET /product/low-stock`
- `GET /product/category/:category`
- `GET /product/:id`
- `PATCH /product/:id`
- `DELETE /product/:id`

### Charges (`/charges`)
- `POST /charges`
- `GET /charges`
- `GET /charges/low-stock`
- `GET /charges/:id`
- `PATCH /charges/:id`
- `DELETE /charges/:id`

### Movement (`/movement`)
- `POST /movement`
- `GET /movement`
- `GET /movement/type/:type`
- `GET /movement/product/:productId`
- `GET /movement/:id`
- `PATCH /movement/:id`
- `DELETE /movement/:id`

### Booking Movement (`/booking-movement`)
- `POST /booking-movement`
- `GET /booking-movement`
- `GET /booking-movement/booking/:bookingId`
- `GET /booking-movement/:id`
- `PATCH /booking-movement/:id`
- `DELETE /booking-movement/:id`

### Booking Payment (`/booking-payment`)
- `POST /booking-payment`
- `GET /booking-payment`
- `GET /booking-payment/booking/:bookingId`
- `GET /booking-payment/:id`
- `PATCH /booking-payment/:id`
- `DELETE /booking-payment/:id`

### Booking Payment Activity (`/booking-payment-activity`)
- `POST /booking-payment-activity`
- `GET /booking-payment-activity`
- `GET /booking-payment-activity/booking/:bookingId`
- `GET /booking-payment-activity/:id`
- `PATCH /booking-payment-activity/:id`
- `DELETE /booking-payment-activity/:id`

### Request Payment (`/request-payment`)
- `POST /request-payment`
- `GET /request-payment`
- `GET /request-payment/pending`
- `GET /request-payment/request/:requestId`
- `GET /request-payment/:id`
- `PATCH /request-payment/:id`
- `DELETE /request-payment/:id`

### Request Activity (`/request-activity`)
- `POST /request-activity`
- `GET /request-activity`
- `GET /request-activity/request/:requestId`
- `GET /request-activity/:id`
- `PATCH /request-activity/:id`
- `DELETE /request-activity/:id`

### Room Activity (`/room-activity`)
- `POST /room-activity`
- `GET /room-activity`
- `GET /room-activity/room/:roomId`
- `GET /room-activity/user/:userId`
- `GET /room-activity/:id`
- `DELETE /room-activity/:id`

### User Activity (`/user-activity`)
- `POST /user-activity`
- `GET /user-activity`
- `GET /user-activity/action/:action`
- `GET /user-activity/user/:userId`
- `GET /user-activity/:id`
- `DELETE /user-activity/:id`

### Charges Activity (`/charges-activity`)
- `POST /charges-activity`
- `GET /charges-activity`
- `GET /charges-activity/booking/:bookingId`
- `GET /charges-activity/:id`
- `PATCH /charges-activity/:id`
- `DELETE /charges-activity/:id`

### Tax Debt (`/tax-debt`)
- `POST /tax-debt`
- `GET /tax-debt`
- `GET /tax-debt/pending`
- `GET /tax-debt/booking/:bookingId`
- `GET /tax-debt/:id`
- `PATCH /tax-debt/:id`
- `DELETE /tax-debt/:id`

## 5) TODO API (gap funcional pendiente)

Checklist de funcionalidades de API que aun no estan cubiertas o deben consolidarse:

- [ ] Cambio de contraseña para usuario autenticado.
- [ ] Flujo completo de "olvidé contraseña" con token y expiracion.
- [ ] Logout/revocacion de sesion desde endpoint propio (si se requiere fuera de Better Auth).
- [ ] Refresh/revalidacion de sesion para front.
- [ ] Bloqueo temporal por intentos fallidos de login.
- [ ] Rate limiting en endpoints sensibles (`sign-in`, reset password).
- [ ] Soft-delete consistente en todos los modulos operativos.
- [ ] Paginacion/filtros/sorting server-side para listados grandes.
- [ ] Endpoints de dashboard con agregaciones reales (kpis/series).
- [ ] Exportaciones (CSV/PDF) para reservas, clientes, caja e inventario.
- [ ] Historial/auditoria transversal por entidad con trazabilidad de usuario.
- [ ] Politicas de permisos por rol a nivel endpoint.
- [ ] Tests e2e de rutas criticas de negocio.

## 6) Criterio de implementacion para nuevas pantallas

Para nuevas vistas de gestion:
1. Definir estructura de tabla obligatoria.
2. Implementar `data-table.tsx` con estilo base exacto.
3. Implementar modales bajo patron `Dialog`.
4. Conectar a hooks API (`useQuery` / `useMutation`).
5. Soportar estado de carga, error y vacio.
6. Agregar acciones destructivas con `AlertDialog`.
