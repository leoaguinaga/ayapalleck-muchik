"use client"

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
    {
        question: "¿Qué es FoxRooms y para qué sirve?",
        answer: "FoxRooms es un sistema PMS (Property Management System) en la nube, diseñado para que hoteles, hostales y hospedajes puedan gestionar sus reservas, habitaciones, limpieza y facturación desde una única plataforma intuitiva."
    },
    {
        question: "¿Necesito instalar algún software en mi computadora?",
        answer: "No. FoxRooms es una plataforma 100% basada en la nube (SaaS). Solo necesitas un dispositivo con conexión a internet y un navegador web para acceder a tu sistema desde cualquier lugar del mundo."
    },
    {
        question: "¿Qué pasa con mis datos si decido cancelar mi suscripción?",
        answer: "Tus datos te pertenecen. Si decides cancelar, podrás exportar tu base de clientes y registros financieros antes de que la cuenta sea desactivada. FoxRooms garantiza la eliminación de tu información pasados 30 días de la cancelación por política de privacidad."
    },
    {
        question: "¿Tienen soporte técnico incluido?",
        answer: "Sí, todos nuestros planes incluyen soporte técnico prioritario a través de correo electrónico y un canal de WhatsApp dedicado para asegurar que tu hotel nunca se detenga."
    },
    {
        question: "¿Puedo manejar más de una sede (sucursal) en una misma cuenta?",
        answer: "¡Por supuesto! FoxRooms está diseñado para escalar contigo. Puedes registrar múltiples sedes bajo una misma cuenta maestra y asignar roles a tus recepcionistas para que solo vean la sede que les corresponde."
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="flex flex-col gap-6 w-full text-foreground/90">
            <div>
                <h2 className="text-2xl font-bold mb-2 text-foreground">Preguntas Frecuentes (FAQ)</h2>
                <p className="text-sm text-muted-foreground">Encuentra respuestas rápidas a las dudas más comunes sobre la plataforma.</p>
            </div>

            <div className="flex flex-col gap-3 mt-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className="border rounded-xl bg-card overflow-hidden transition-all duration-200"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center px-5 py-3 text-left font-medium text-[15px] hover:bg-muted/50 transition-colors focus:outline-none"
                            >
                                <span className="pr-4">{faq.question}</span>
                                <div className="shrink-0 text-muted-foreground">
                                    {isOpen ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
                                </div>
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-5 py-3 text-[15px] text-muted-foreground leading-relaxed border-t">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
