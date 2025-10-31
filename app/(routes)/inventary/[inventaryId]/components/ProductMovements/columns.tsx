"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ProductMovementData } from "./ProductMovements.types"
import { ArrowDownCircle, ArrowUpCircle } from "lucide-react"
import Tag from "@/components/Tag/Tag"
import { format } from "date-fns"
import { es } from "date-fns/locale"

export const columns: ColumnDef<ProductMovementData>[] = [
    {
        accessorKey: "date",
        header: "Fecha",
        cell: ({ row }) => {
            const date = row.getValue("date") as Date
            return (
                <div className="flex flex-col">
                    <span className="font-medium">{format(date, "dd/MM/yyyy", { locale: es })}</span>
                    <span className="text-xs text-muted-foreground">{format(date, "HH:mm", { locale: es })}</span>
                </div>
            )
        }
    },
    {
        accessorKey: "type",
        header: "Tipo",
        cell: ({ row }) => {
            const type = row.getValue("type") as string
            return type === "Entrada" ? (
                <div className="flex items-center gap-2">
                    <ArrowDownCircle className="size-4 text-green-600" />
                    <Tag text="Entrada" color="green" />
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <ArrowUpCircle className="size-4 text-orange-600" />
                    <Tag text="Salida" color="orange" />
                </div>
            )
        }
    },
    {
        accessorKey: "quantity",
        header: "Cantidad",
        cell: ({ row }) => {
            const quantity = row.getValue("quantity") as number
            const type = row.original.type
            return (
                <span className={`font-semibold ${type === "Entrada" ? "text-green-600" : "text-orange-600"}`}>
                    {type === "Entrada" ? "+" : "-"}{quantity}
                </span>
            )
        }
    },
    {
        accessorKey: "stockAfter",
        header: "Stock resultante",
        cell: ({ row }) => {
            const stock = row.getValue("stockAfter") as number
            return <span className="font-medium">{stock}</span>
        }
    },
    {
        accessorKey: "reason",
        header: "Razón"
    },
    {
        accessorKey: "user",
        header: "Usuario"
    },
    {
        accessorKey: "notes",
        header: "Notas",
        cell: ({ row }) => {
            const notes = row.getValue("notes") as string | undefined
            return notes ? (
                <span className="text-sm text-muted-foreground truncate max-w-[200px]">{notes}</span>
            ) : (
                <span className="text-sm text-muted-foreground">—</span>
            )
        }
    }
]
