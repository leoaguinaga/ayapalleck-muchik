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
import { ChevronRight, DoorClosed} from "lucide-react"
import { useState } from "react"
import FormCreateCustomer from "../FormCreateRoom/FormCreateRoom"


export default function ButtonCreateRoom() {
    const [openModalCreate, setOpenModalCreate] = useState(false)

    return (
        <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
            <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                    <DoorClosed className="size-4.5" />
                    Agregar Habitación
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-1 font-bold">
                        <p>Habitaciones</p>
                        <ChevronRight className="size-4.5" />
                        <p>Agregar Habitación</p>
                    </DialogTitle>
                    <DialogDescription className="text-left">
                        Aquí podrás agregar una nueva habitación a la plataforma.
                    </DialogDescription>
                    <FormCreateCustomer setOpenModalCreateCustomer={setOpenModalCreate} />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
