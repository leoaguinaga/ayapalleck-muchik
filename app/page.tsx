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
      <div className="flex flex-col gap-8 p-6 md:p-10 dark:bg-[#0a0a0a]">
        <div className="flex flex-1 items-center justify-center ">
          <div className="w-full max-w-120 gap-7 flex flex-col items-center">
            <img src="logo-full.webp" alt="Ayapalleck Logo" className="w-65 dark:invert" />
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