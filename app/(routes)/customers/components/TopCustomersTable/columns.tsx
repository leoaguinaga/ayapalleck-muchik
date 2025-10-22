"use client"

import { ColumnDef } from "@tanstack/react-table"
import { TopCustomersTableProps } from "./TopCustomersTable.types"
import { EllipsisVertical, Pencil } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Tag from "@/components/Tag/Tag"

export const columns: ColumnDef<TopCustomersTableProps>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
    },
    {
        accessorKey: "visits",
        header: "Visitas",
        cell: ({ row }) => {
            return (
                <div className="font-semibold">
                    {row.original.visits}
                </div>
            )
        }
    },
    {
        accessorKey: "lastVisitDate",
        header: "Última visita",
        cell: ({ row }) => {
            const lastVisitDate = row.original.lastVisitDate;
            const isRecent = (new Date().getTime() - new Date(lastVisitDate).getTime()) / (1000 * 3600 * 24) <= 30;

            return (
                <div className="flex items-center gap-2">
                    {
                        isRecent ? (
                            <Tag color="green" text={lastVisitDate} />
                        ) : (
                            <Tag color="gray" text={lastVisitDate} />
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