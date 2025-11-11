
"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  RowSelectionState,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from "react"
import { Stay } from "../types"
import { getRowBackgroundClass } from "../utils"
import { cn } from "@/lib/utils"

interface StaysTableProps {
  columns: ColumnDef<Stay>[]
  data: Stay[]
  onRowSelectionChange?: (selectedRows: number) => void
}

export function StaysTable({ columns, data, onRowSelectionChange }: StaysTableProps) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onRowSelectionChange: (updater) => {
      setRowSelection(updater)
      // Calcular el número de filas seleccionadas después de la actualización
      const newSelection = typeof updater === 'function' ? updater(rowSelection) : updater
      const selectedCount = Object.keys(newSelection).filter(key => newSelection[key]).length
      onRowSelectionChange?.(selectedCount)
    },
    state: {
      sorting,
      rowSelection,
    },
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="sticky top-0 bg-background">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className={cn(
                  "hover:bg-muted/50 cursor-pointer transition-colors",
                  getRowBackgroundClass(
                    row.original.stayState,
                    row.original.paymentState
                  )
                )}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <p className="text-muted-foreground">No hay estadías para mostrar</p>
                  <p className="text-sm text-muted-foreground">
                    Intenta ajustar los filtros o crear una nueva reserva
                  </p>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
