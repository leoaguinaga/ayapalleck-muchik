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
import { ChevronRight, UserPlus } from "lucide-react"
import { useState } from "react"
import FormCreateUser from "../CreateUserForm/CreateUserForm"

export default function CreateUserButton() {
    const [openModalCreate, setOpenModalCreate] = useState(false)

    return (
        <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
            <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                    <UserPlus className="size-4.5" />
                    Agregar Usuario
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-1 font-bold">
                        <p>Usuarios</p>
                        <ChevronRight className="size-4.5" />
                        <p>Agregar Usuario</p>
                    </DialogTitle>
                    <DialogDescription className="text-left">
                        Aquí podrás agregar un nuevo usuario a la plataforma.
                    </DialogDescription>
                    <FormCreateUser setOpenModalCreateUser={setOpenModalCreate} />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
