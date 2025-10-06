import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import FormForgotPassword from "../FormForgotPassword"

export default function ForgotPasswordButton() {
    const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState(false)

  return (
    <Dialog open={openForgotPasswordModal} onOpenChange={setOpenForgotPasswordModal}>
            <DialogTrigger asChild>
                <p className="text-sm underline-offset-4 hover:underline cursor-pointer">
                    Olvidaste tu contraseña?
                </p>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-1 font-bold">
                        <p>Reestablece tu contraseña</p>
                    </DialogTitle>
                    <DialogDescription className="text-left">
                        Ingresa tu correo electrónico y te enviaremos un enlace para reestablecer tu contraseña.
                    </DialogDescription>
                    <FormForgotPassword setOpenForgotPasswordModal={setOpenForgotPasswordModal} />
                </DialogHeader>
            </DialogContent>
        </Dialog>
  )
}
