"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CustomersTableProps } from "./CustomersTable.types"
import { EllipsisVertical, Pencil } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"

export const columns: ColumnDef<CustomersTableProps>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
    },
    {
        accessorKey: "documentType",
        header: "Tipo de documento",
    },
    {
        accessorKey: "documentNumber",
        header: "Número de documento",
    }, 
    {
        accessorKey: "email",
        header: "Correo",
    },
    {
        accessorKey: "phone",
        header: "Teléfono",
    },
    {
        accessorKey: "birthDate",
        header: "Fecha de nacimiento",
        cell: ({ row }) => {
            const date = new Date(row.getValue("birthDate"))
            return date.toLocaleDateString("es-PE")
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
                            <DropdownMenuItem className="flex items-center gap-2 p-2 px-3 border bg-card rounded-lg cursor-pointer">
                                Editar
                                <Pencil className="size-4" />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
]