"use client"

import { ColumnDef } from "@tanstack/react-table"
import { BookingsTablePops } from "./BookingsTable.types"
import { ArrowRight, EllipsisVertical, Link, Pencil } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/formatPrice"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"

export const columns: ColumnDef<BookingsTablePops>[] = [
    {
        accessorKey: "customer",
        header: "Cliente",
    },
    {
        accessorKey: "room",
        header: "Habitación",
    },
    {
        accessorKey: "checkIn",
        header: "Fecha de entrada",
    },
    {
        accessorKey: "checkOut",
        header: "Fecha de salida",
    },
    {
        accessorKey: "amount",
        header: "Monto",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            return (
                <p className="font-medium">{formatPrice(amount)}</p>
            )
        },
    },
    {
        accessorKey: "paymentMethod",
        header: "Método de pago",
    },
    {
        accessorKey: "status",
        header: "Estado",
        cell: ({ row }) => {
            const status = row.getValue("status") as string
            if (status === "late") {
                return <span className="font-semibold py-1 px-2 rounded-lg bg-red-300 text-red-700 w-fit dark:bg-red-700/30 dark:text-red-500">Cancelado</span>

            } else if (status === "punctual") {
                return <span className="font-semibold py-1 px-2 rounded-lg bg-blue-300 text-blue-700 w-fit dark:bg-blue-700/30 dark:text-blue-500">Completado</span>
            } else {
                return <Badge variant="secondary">Desconocido</Badge>
            }
        }
    },
    {
        accessorKey: "actions",
        header: "",
        cell: ({ row }) => {
            const customer = row.getValue("customer")

            return (
                <div className="justify-self-end">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <EllipsisVertical className="size-5 justify-self-end" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem className="flex items-center gap-2 p-2 border bg-card rounded-lg cursor-pointer">
                                Ver detalles
                                <ArrowRight className="size-4" />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
]