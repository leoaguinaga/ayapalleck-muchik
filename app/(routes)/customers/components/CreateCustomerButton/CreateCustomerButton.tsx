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
import { ChevronRight, User, UserPlus } from "lucide-react"
import { useState } from "react"
import FormCreateCustomer from "../FromCreateCustomer/FormCreateCustomer"

export default function CreateCustomerButton() {
    const [openModalCreate, setOpenModalCreate] = useState(false)

    return (
        <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
            <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                    <UserPlus className="size-4.5" />
                    Agregar Cliente
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-1 font-bold">
                        <p>Clientes</p>
                        <ChevronRight className="size-4.5" />
                        <p>Agregar Cliente</p>
                    </DialogTitle>
                    <DialogDescription className="text-left">
                        Aquí podrás agregar un nuevo cliente a la plataforma. {/*  Ten en cuenta que el DNI es un parámetro único para cada cliente. */}
                    </DialogDescription>
                    <FormCreateCustomer setOpenModalCreateCustomer={setOpenModalCreate} />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
