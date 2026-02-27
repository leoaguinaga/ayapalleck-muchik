"use client"

import { redirect } from "next/navigation"
import { authClient } from "@/lib/auth-client"
import Link from "next/link"

export default function RegisterPage() {
    const { data: session } = authClient.useSession()

    if (session?.user) {
        redirect("/dashboard")
    }

    return (
        <div className="relative w-full min-h-screen flex justify-center items-center">
            <div className="absolute inset-0">
                <div className="absolute inset-0 -z-10 h-full w-full bg-card bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-size-[3rem_3rem]"></div>
            </div>

            <section className="w-full max-w-sm sm:max-w-md lg:max-w-5xl mx-4 grid border rounded-2xl overflow-hidden bg-card shadow-xl lg:grid-cols-2 z-10">
                <div className="flex flex-col gap-8 p-8 sm:p-10 lg:p-16 z-20">
                    <div className="flex flex-1 items-center justify-center">
                        <div className="w-full max-w-sm gap-8 flex flex-col items-center">
                            <img src="logo-full.webp" alt="Ayapalleck Logo" className="w-56 sm:w-64 dark:invert" />

                            <div className="flex flex-col items-center gap-2 text-center w-full">
                                <h1 className="text-2xl font-bold">Crea tu cuenta</h1>
                                <p className="text-muted-foreground text-sm text-balance">
                                    Ingresa tus datos para registrarte
                                </p>

                                {/* Placeholder del formulario - hasta que se cree RegisterForm.tsx */}
                                <div className="w-full p-8 border border-dashed rounded-xl mt-4 flex items-center justify-center text-muted-foreground bg-muted/50 text-sm">
                                    [Componente RegisterForm]
                                </div>
                                <div className="w-full flex justify-end text-sm font-medium mt-4">
                                    <p>¿Ya tienes cuenta? <Link href="/login" className="text-primary underline">Inicia sesión</Link></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bg-muted relative hidden lg:block overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1542314831-c53cd3816002?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Image"
                        className="absolute inset-0 h-full w-full object-cover dark:grayscale-50"
                    />
                </div>
            </section>
        </div>
    )
}
