"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MovementHistoryTableProps } from "./MovementHistoryTable.types"
import { ArrowDownCircle, ArrowUpCircle } from "lucide-react"
import Tag from "@/components/Tag/Tag"
import { format } from "date-fns"
import { es } from "date-fns/locale"

export const columns: ColumnDef<MovementHistoryTableProps>[] = [
    {
        accessorKey: "date",
        header: "Fecha",
        cell: ({ row }) => {
            return <span>{format(row.original.date, "dd/MM/yyyy", { locale: es })}</span>
        }
    },
    {
        accessorKey: "productName",
        header: "Producto",
        cell: ({ row }) => {
            const { productName, productId } = row.original
            return (
                <div className="flex flex-col">
                    <span className="font-medium">{productName}</span>
                    <span className="text-xs text-muted-foreground">{productId}</span>
                </div>
            )
        }
    },
    {
        accessorKey: "category",
        header: "Categoría",
        cell: ({ row }) => {
            const category = row.original.category
            return (
                <Tag 
                    text={category} 
                    color={category === "Venta" ? "blue" : "purple"} 
                />
            )
        }
    },
    {
        accessorKey: "type",
        header: "Tipo",
        cell: ({ row }) => {
            const type = row.original.type
            return (
                <div className="flex items-center gap-2">
                    {type === "Entrada" ? (
                        <ArrowDownCircle className="size-4 text-green-600" />
                    ) : (
                        <ArrowUpCircle className="size-4 text-orange-600" />
                    )}
                    <Tag 
                        text={type} 
                        color={type === "Entrada" ? "green" : "orange"} 
                    />
                </div>
            )
        }
    },
    {
        accessorKey: "quantity",
        header: "Cantidad",
        cell: ({ row }) => {
            const { quantity, unit } = row.original
            return (
                <span className="font-semibold">
                    {quantity} {unit}
                </span>
            )
        }
    },
    {
        accessorKey: "reason",
        header: "Razón",
    },
    {
        accessorKey: "user",
        header: "Usuario",
    },
    {
        accessorKey: "notes",
        header: "Notas",
        cell: ({ row }) => {
            const notes = row.original.notes
            return notes ? (
                <span className="text-sm text-muted-foreground">{notes}</span>
            ) : (
                <span className="text-sm text-muted-foreground italic">-</span>
            )
        }
    },
]
