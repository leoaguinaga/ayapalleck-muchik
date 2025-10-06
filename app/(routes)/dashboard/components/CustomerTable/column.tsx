"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CustomerTableProps } from "./CustomerTable.type"
import { ArrowRight, EllipsisVertical, Link, Pencil } from "lucide-react"
import { formatPrice } from "@/lib/formatPrice"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import Tag from "@/components/Tag/Tag"

export const columns: ColumnDef<CustomerTableProps>[] = [
    {
        accessorKey: "customer",
        header: "Cliente",
    },
    {
        accessorKey: "room",
        header: "Habitación",
    },
    {
        accessorKey: "checkOut",
        header: "Fecha de salida",
    },
    {
        accessorKey: "status",
        header: "Estado",
        cell: ({ row }) => {
            const status = row.getValue("status") as string
            if (status === "late") {
                return <Tag text="Con retraso" color="red" />
            } else {
                return <Tag text="En horario" color="green" />
            }
        }
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
                                Ver reserva
                                <ArrowRight className="size-4" />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
]