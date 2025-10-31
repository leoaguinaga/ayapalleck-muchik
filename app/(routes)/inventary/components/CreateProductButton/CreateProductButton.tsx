"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronRight, PackagePlus } from "lucide-react"
import { useState } from "react"
import FormCreateProduct from "../FormCreateProduct"

export default function CreateProductButton() {
    const [openModalCreate, setOpenModalCreate] = useState(false)

    return (
        <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
            <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                    <PackagePlus className="size-4.5" />
                    Agregar Producto
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-1 font-bold">
                        <p>Inventario</p>
                        <ChevronRight className="size-4.5" />
                        <p>Agregar Producto</p>
                    </DialogTitle>
                    <DialogDescription className="text-left">
                        Registra un nuevo producto en el inventario. Puedes seleccionar si es un producto de venta o de almacén.
                    </DialogDescription>
                    <FormCreateProduct setOpenModalCreateProduct={setOpenModalCreate} />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
