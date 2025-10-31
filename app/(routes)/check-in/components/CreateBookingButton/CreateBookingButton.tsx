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
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import FormCreateBooking from "../../../rooms/[roomId]/components/FormAddBooking"


export default function CreateBookingButton() {
    const [openModalCreate, setOpenModalCreate] = useState(false)

    return (
        <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
            <DialogTrigger asChild>
                <Button className='w-full flex flex-row gap-2'>
                    Registrar
                    <ArrowRight className='size-5' />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>
                        <p className="text-left">Registrar ingreso</p>
                    </DialogTitle>
                    <DialogDescription className="text-left">
                        Aquí podrás registrar una nueva reserva para la habitación seleccionada.
                    </DialogDescription>
                </DialogHeader>
                <FormCreateBooking setOpenModalAddBooking={setOpenModalCreate} />
            </DialogContent>
        </Dialog>
    )
}