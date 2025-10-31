"use client"

import { ColumnDef } from "@tanstack/react-table"
import { InventoryTableProps } from "./InventoryTable.types"
import { EllipsisVertical, PackageMinus, PackagePlus, Pencil } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import Tag from "@/components/Tag/Tag"
import { formatPrice } from "@/lib/formatPrice"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { useState } from "react"
import MovementDialog from "../MovementDialog"
import Link from "next/link"

export const columns: ColumnDef<InventoryTableProps>[] = [
    {
        accessorKey: "name",
        header: "Producto",
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
        accessorKey: "stock",
        header: "Stock",
        cell: ({ row }) => {
            const { stock, minStock, unit } = row.original
            const isLowStock = stock < minStock

            return (
                <div className="flex items-center gap-2">
                    <span className={isLowStock ? "text-red-500 font-semibold" : ""}>
                        {stock} {unit}
                    </span>
                    {isLowStock && (
                        <Tag text="Bajo" color="red" />
                    )}
                </div>
            )
        }
    },
    {
        accessorKey: "unitPrice",
        header: "Precio Unit.",
        cell: ({ row }) => {
            return <span>{formatPrice(row.original.unitPrice)}</span>
        }
    },
    {
        accessorKey: "lastMovement",
        header: "Último Movimiento",
        cell: ({ row }) => {
            return <span>{format(row.original.lastMovement, "dd/MM/yyyy", { locale: es })}</span>
        }
    },
    {
        accessorKey: "actions",
        header: "",
        cell: ({ row }) => {
            const { id, name, stock, unit } = row.original
            const [openEntrada, setOpenEntrada] = useState(false)
            const [openSalida, setOpenSalida] = useState(false)

            return (
                <>
                    <div className="justify-self-end">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <EllipsisVertical className="size-5 justify-self-end" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="border bg-card rounded-lg p-1 shadow-lg">
                                <DropdownMenuItem
                                    className="flex items-center gap-2 p-2 px-3 rounded cursor-pointer hover:bg-accent"
                                    onClick={() => setOpenEntrada(true)}
                                >
                                    <PackagePlus className="size-4 text-green-600" />
                                    Entrada
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className="flex items-center gap-2 p-2 px-3 rounded cursor-pointer hover:bg-accent"
                                    onClick={() => setOpenSalida(true)}
                                >
                                    <PackageMinus className="size-4 text-orange-600" />
                                    Salida
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="my-1 h-px bg-border" />
                                <DropdownMenuItem className="flex items-center gap-2 p-2 px-3 rounded cursor-pointer hover:bg-accent">
                                    <Link className="flex items-center gap-2" href={`/inventary/${id}`}>
                                        <Pencil className="size-4" />
                                        Editar
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <MovementDialog
                        productId={id}
                        productName={name}
                        currentStock={stock}
                        unit={unit}
                        type="Entrada"
                        open={openEntrada}
                        onOpenChange={setOpenEntrada}
                    />

                    <MovementDialog
                        productId={id}
                        productName={name}
                        currentStock={stock}
                        unit={unit}
                        type="Salida"
                        open={openSalida}
                        onOpenChange={setOpenSalida}
                    />
                </>
            )
        }
    }
]
