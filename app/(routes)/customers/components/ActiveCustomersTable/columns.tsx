"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ActiveCustomersProps } from "./ActiveCustomersTable.types"
import { EllipsisVertical, Pencil } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Tag from "@/components/Tag/Tag"

export const columns: ColumnDef<ActiveCustomersProps>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
    },
    {
        accessorKey: "roomNumber",
        header: "Habitación",
    },
    {
        accessorKey: "checkOutDate",
        header: "Fecha de salida",
        cell: ({ row }) => {
            const checkOutDate = row.original.checkOutDate;
            const isOverdue = new Date(checkOutDate) < new Date();

            return (
                <div className="flex items-center gap-2">
                    {
                        isOverdue ? (
                            <Tag color="red" text={checkOutDate} />
                        ) : (
                            <Tag color="green" text={checkOutDate} />
                        )
                    }

                </div>
            )
        }
    },
    {
        accessorKey: "actions",
        header: "",
        cell: ({ row }) => {

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
                            <Link href={`/customers/`}>
                                <DropdownMenuItem className="flex items-center gap-2 p-2 px-3 border bg-card rounded-lg cursor-pointer">
                                    Editar
                                    <Pencil className="size-4" />
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
]