"use client"

import { Separator } from "@radix-ui/react-select";
import { LoaderCircle, LogOut, Pencil, Save, X } from "lucide-react";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";
import React, { useState } from 'react'
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { set } from "zod";

export default function ProfileTab() {
    const { data: session } = authClient.useSession()
    const { user } = session || {}
    const { name, email } = user || {}

    const [isLoading, setIsLoading] = useState(false)
    const [isEditingName, setIsEditingName] = useState(false)
    const [isEditingEmail, setIsEditingEmail] = useState(false)

    const [fakeName, setFakeName] = useState(name || "")
    const [fakeEmail, setFakeEmail] = useState(email || "")

    const handleCancel = () => {
        setIsEditingName(false)
        setIsEditingEmail(false)
    }

    const handleSaveName = () => {
        if (fakeName.trim() === "") {
            toast.error("El nombre no puede estar vacío")
            return
        }
        if (fakeName === name) {
            return setIsEditingName(false)
        } else {
            toast.success("Nombre actualizado correctamente")
            setIsEditingName(false)
        }
    }

    const handleSaveEmail = () => {
        if (fakeEmail.trim() === "") {
            toast.error("El correo no puede estar vacío")
            return
        }
        if (fakeEmail === email) {
            return setIsEditingEmail(false)
        } else {
            toast.success("Correo actualizado correctamente")
            setIsEditingEmail(false)
        }
    }

    const handleLogout = async () => {
        setIsLoading(true)
        await authClient.signOut();
        redirect('/')
    }

    const onInputKeyDown =
        (onSave: () => void, onCancel: () => void) =>
            (e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") onSave()
                if (e.key === "Escape") onCancel()
            }

    return (
        <div className="h-full flex flex-col w-full">
            <div className="flex items-center justify-between w-full">
                <h2 className="text-lg p-2.5 font-semibold">Mi perfil</h2>
                {isEditingEmail || isEditingName ? (
                    <Button onClick={() => handleCancel()} className="h-8 p-2.5 mr-2.5 motion-preset-slide-left-sm motion-preset-slide-right-sm-exit">Cancelar</Button>
                ) : null}
            </div>
            <Separator className="border-1 border-b-0" />
            <div className="flex items-center justify-between w-full p-2.5">
                <p className="font-medium">Nombre</p>
                {isEditingName ? (
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={fakeName}
                            onChange={(e) => setFakeName(e.target.value)}
                            onKeyDown={onInputKeyDown(handleSaveName, handleCancel)}
                            autoFocus
                            className="border-gray-300 border-0 text-right"
                        />
                        <Save className="size-4 cursor-pointer" onClick={() => handleSaveName()} />
                    </div>
                ) : (
                    <div className="flex items-center gap-2 ">
                        <p>{name}</p>
                        <Pencil className="size-3.5 cursor-pointer" onClick={() => setIsEditingName(true)} />
                    </div>

                )}
            </div>
            <Separator className="border-1 border-b-0" />
            <div className="flex flex-col gap-2.5 p-2.5">
                <div className="flex items-center justify-between w-full">
                    <p className="font-medium">Correo</p>
                    {isEditingEmail ? (
                        <div className="flex items-center gap-2">
                            <input
                                type="email"
                                value={fakeEmail}
                                onChange={(e) => setFakeEmail(e.target.value)}
                                onKeyDown={onInputKeyDown(() => setIsEditingEmail(false), handleCancel)}
                                autoFocus
                                className="border-gray-300 border-0 text-right"
                            />
                            <Save className="size-4 cursor-pointer" onClick={() => handleSaveEmail()} />
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 ">
                            <p>{email}</p>
                            <Pencil className="size-3.5 cursor-pointer" onClick={() => setIsEditingEmail(true)} />
                        </div>

                    )}
                </div>
            </div>
            <Separator className="border-1 border-b-0" />
            <div className="flex items-start justify-between w-full p-2.5">
                <p className="font-medium">Contraseña</p>
                <Button className="w-fit h-8 p-2.5 cursor-pointer">Cambiar contraseña</Button>
            </div>
            <div className="h-full flex items-end justify-end">
                <Button className="w-fit h-8 p-2.5 flex items-center gap-2 m-2.5 self-end cursor-pointer" onClick={() => handleLogout()}>
                    {isLoading ? <><LoaderCircle className="animate-spin size-5" /> <span>Cerrando</span> </> :
                        <>
                            <LogOut className="size-4" />
                            <p>Cerrar sesión</p>
                        </>
                    }
                </Button>
            </div>
        </div>
    )
}
