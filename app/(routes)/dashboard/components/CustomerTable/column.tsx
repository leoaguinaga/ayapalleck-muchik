"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CustomerTableProps } from "./CustomerTable.type"
import { formatPrice } from "@/lib/formatPrice"

export const columns: ColumnDef<CustomerTableProps>[] = [
    {
        id: "customer",
        header: "Cliente",
        accessorFn: (row) =>
            typeof (row as any).customer === "string"
                ? (row as any).customer
                : ((row as any).customer?.name ??
                     `${(row as any).customer?.firstName ?? ""} ${(row as any).customer?.lastName ?? ""}`.trim()),
        cell: ({ getValue }) => getValue() || "-",
    },
    {
        id: "room",
        header: "Habitación",
        accessorFn: (row) => {
            const r = (row as any).room
            if (r == null) return "-"
            const number = r.number ?? r
            // intentar obtener el tipo desde varias posibles propiedades
            const rawType = r.type ?? r.roomType ?? (r.type?.name ?? r.roomType?.name) ?? ""
            const typeStr =
                typeof rawType === "object"
                    ? (rawType.name ?? String(rawType))
                    : String(rawType ?? "")
            return `${number}${typeStr ? ` - ${typeStr}` : ""}`
        },
        cell: ({ getValue }) => getValue() || "-",
    },
    {
        id: "checkIn",
        header: "Fecha de entrada",
        accessorKey: "checkIn",
    },
    {
        id: "checkOut",
        header: "Fecha de salida",
        accessorKey: "checkOut",
        cell: ({ getValue }) => {
            const val = getValue() as string | undefined
            if (!val) return <span>-</span>

            const date = new Date(val)
            const isValidDate = !isNaN(date.getTime())
            const isPast = isValidDate && date.getTime() < Date.now()

            return <span className={isPast ? "" : "text-red-500"}>{val}</span>
        },
    },
    {
        id: "amount",
        header: "Deuda",
        accessorFn: (row) => {
            const a = (row as any).amount
            return typeof a === "string" ? parseFloat(a) || 0 : typeof a === "number" ? a : 0
        },
        cell: ({ getValue }) => <p className="font-medium">{formatPrice(getValue() as number)}</p>,
    },
]