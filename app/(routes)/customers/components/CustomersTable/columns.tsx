"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CustomersTableProps } from "./CustomersTable.types"
import { EllipsisVertical, Pencil } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Tag from "@/components/Tag/Tag"

export const columns: ColumnDef<CustomersTableProps>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
    },
    {
        accessorKey: "document",
        header: "Documento",
        cell: ({ row }) => {
            const { documentType, documentNumber } = row.original

            return <span>{`${documentType} - ${documentNumber}`}</span>
        }
    },  
    {
        accessorKey: "phone",
        header: "Contacto"
    },
    {
        accessorKey: "state",
        header: "Estado",
        cell: ({ row }) => {
            return <Tag text="Activo" color="green" />
        }
    },
    {
        accessorKey: "actions",
        header: "",
        cell: ({ row }) => {

            const { documentNumber } = row.original

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
                            <Link href={`/customers/${documentNumber}`}>
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