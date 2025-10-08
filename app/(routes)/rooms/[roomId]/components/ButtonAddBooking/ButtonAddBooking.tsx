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
import { ChevronRight, NotebookText} from "lucide-react"
import { useState } from "react"
import FormAddBooking from "../FormAddBooking"

export default function ButtonAddBooking() {
    const [openModalCreate, setOpenModalCreate] = useState(false)

    return (
        <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
            <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                    <NotebookText className="size-4.5" />
                    Registrar reserva
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-1 font-bold">
                        <p>101</p>
                        <ChevronRight className="size-4.5" />
                        <p>Registrar reserva</p>
                    </DialogTitle>
                    <DialogDescription className="text-left">
                        Aquí podrás agregar una nueva reserva para esta habitación.
                    </DialogDescription>
                    <FormAddBooking setOpenModalAddBooking={setOpenModalCreate} />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
