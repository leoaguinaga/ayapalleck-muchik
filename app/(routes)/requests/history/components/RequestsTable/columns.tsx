"use client"

import { ColumnDef } from "@tanstack/react-table"
import { RequestsTableProps } from "./RequestsTable.types"
import { ArrowRight, EllipsisVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"

export const columns: ColumnDef<RequestsTableProps>[] = [
    {
        accessorKey: "customerName",
        header: "Cliente",
    },
    {
        accessorKey: "customerEmail",
        header: "Correo",
    },
    {
        accessorKey: "date",
        header: "Fecha de registro",
        cell: ({ row }) => {
            const date = new Date(row.getValue("date") as string)
            return (
                <p className="font-medium">{date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' })}</p>
            )
        }
    },
    {
        accessorKey: "bookingDate",
        header: "Fecha de reserva",
        cell: ({ row }) => {
            const bookingDate = new Date(row.getValue("bookingDate") as string)
            return (
                <p className="font-medium">{bookingDate.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' })}</p>
            )
        }
    },
    {
        accessorKey: "roomType",
        header: "Tipo de habitación",
    },
    {
        accessorKey: "duration",
        header: "Duración",
        cell: ({ row }) => {
            const duration = row.getValue("duration") as number
            return (
                <p className="font-medium">{duration} {duration > 1 ? ('días') : ('día')}</p>
            )
        }
    },
    {
        accessorKey: "actions",
        header: "",
        cell: ({ row }) => {
            const customer = row.getValue("customerName")

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
                            <DropdownMenuItem className="flex items-center gap-2 p-2 px-3 border bg-card rounded-lg cursor-pointer">
                                Revisar disponibilidad
                                <ArrowRight className="size-4" />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
]