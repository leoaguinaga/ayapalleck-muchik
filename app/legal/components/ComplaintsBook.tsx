"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle2, User, FileText, Send } from 'lucide-react'

export default function ComplaintsBook() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simular llamada a API
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)
        }, 1500)
    }

    if (isSubmitted) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center gap-4">
                <CheckCircle2 className="size-16 text-green-500" />
                <h2 className="text-2xl font-bold">Reclamo Enviado</h2>
                <p className="text-muted-foreground max-w-md">
                    Hemos registrado su solicitud en nuestro libro de reclamaciones virtual. Se ha enviado una copia a su correo electrónico.
                    Le responderemos a la brevedad posible.
                </p>
                <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                >
                    Enviar otro reporte
                </Button>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-6 w-full">
            <div>
                <h2 className="text-2xl font-bold mb-2 text-foreground">
                    Libro de Reclamaciones
                </h2>
                <p className="text-sm text-muted-foreground">
                    Conforme a la normativa vigente, ponemos a su disposición nuestro libro virtual de reclamaciones para atender sus quejas o reclamos.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-2">
                {/* Datos del Consumidor */}
                <div className="flex flex-col gap-4 p-5 md:p-6 border rounded-xl bg-card">
                    <h3 className="font-semibold flex items-center gap-2 text-primary border-b pb-3">
                        <User className="size-4" />
                        1. Identidad del Consumidor
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Nombres completos / Razón social</label>
                            <Input placeholder="Escriba sus nombres..." required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Apellidos</label>
                            <Input placeholder="Escriba sus apellidos..." />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Tipo y Nro. de Documento</label>
                            <div className="flex gap-2">
                                <select className="flex h-9 w-24 items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                                    <option>DNI</option>
                                    <option>CE</option>
                                    <option>RUC</option>
                                    <option>Pasaporte</option>
                                </select>
                                <Input placeholder="12345678" className="flex-1" required />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Celular / Teléfono</label>
                            <Input placeholder="+51 999 999 999" type="tel" required />
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="text-sm font-medium">Correo electrónico</label>
                            <Input placeholder="correo@ejemplo.com" type="email" required />
                        </div>
                    </div>
                </div>

                {/* Detalle del Reclamo */}
                <div className="flex flex-col gap-4 p-5 md:p-6 border rounded-xl bg-card">
                    <h3 className="font-semibold flex items-center gap-2 text-primary border-b pb-3">
                        <FileText className="size-4" />
                        2. Detalle de Reclamo / Queja
                    </h3>

                    <div className="flex flex-col gap-4 mt-2">
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                            <label className="text-sm font-medium">Tipo:</label>
                            <label className="flex items-center gap-2 text-sm cursor-pointer">
                                <input type="radio" name="queja_tipo" value="reclamo" className="cursor-pointer" required defaultChecked />
                                Reclamo <span className="text-xs text-muted-foreground hidden sm:inline">(Disconformidad relacionada al producto o servicio)</span>
                            </label>
                            <label className="flex items-center gap-2 text-sm cursor-pointer">
                                <input type="radio" name="queja_tipo" value="queja" className="cursor-pointer" required />
                                Queja <span className="text-xs text-muted-foreground hidden sm:inline">(Descontento respecto a la atención recibida)</span>
                            </label>
                        </div>

                        <div className="flex flex-col gap-2 mt-2">
                            <label className="text-sm font-medium text-destructive">Detalle</label>
                            <Textarea
                                placeholder="Describa el detalle de su reclamo o queja aquí..."
                                className="min-h-[120px] resize-y"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-destructive">Pedido (Opcional)</label>
                            <Textarea
                                placeholder="Describa lo que solicita como solución..."
                                className="min-h-[80px] resize-y"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-2">
                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto min-w-[200px] flex gap-2">
                        {isSubmitting ? (
                            "Procesando envío..."
                        ) : (
                            <>
                                <Send className="size-4" />
                                Enviar formulario
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    )
}

function BookOpenIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary size-7"
        >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    )
}
