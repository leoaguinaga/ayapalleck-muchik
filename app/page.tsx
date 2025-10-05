"use client"

import { LoginForm } from "@/components/login-form"
import { redirect } from "next/navigation"
import { authClient } from "@/lib/auth-client"

export default function LoginPage() {
  const { data: session } = authClient.useSession()

  if (session?.user) {
    redirect("/dashboard")
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <img src="logo-main.webp" alt="Ayapalleck Logo" className="w-20 dark:invert" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-120">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/check-in.webp"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}