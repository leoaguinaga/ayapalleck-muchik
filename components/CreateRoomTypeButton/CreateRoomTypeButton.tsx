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
import CreateRoomTypeForm from "../CreateRoomTypeForm"


export default function CreateRoomTypeButton() {
    const [openModalCreate, setOpenModalCreate] = useState(false)

    return (
        <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
            <DialogTrigger asChild>
                <Button className="w-fit h-8 p-2 flex items-center gap-1.5">
                    <PackagePlus className="size-4" />
                    <p>Registrar</p>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[420px]">
                <DialogHeader>
                    <DialogTitle>
                        <p className="text-left">Registrar tipo de habitación</p>
                    </DialogTitle>
                    <DialogDescription className="text-left">
                        Aquí podrás agregar un nuevo tipo de habitación a la plataforma.
                    </DialogDescription>
                </DialogHeader>
                <CreateRoomTypeForm setOpenModalCreateCustomer={setOpenModalCreate} />
            </DialogContent>
        </Dialog>
    )
}
