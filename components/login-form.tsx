"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { authClient } from "@/lib/auth-client"
import { toast } from "react-hot-toast"
import { useState } from "react"
import { Eye, EyeClosed, LoaderCircle } from "lucide-react"
import { redirect } from "next/navigation"
import ForgotPasswordButton from "./ForgotPasswordButton"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const { isValid } = form.formState;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      const res = await authClient.signIn.email(values);
      if (res.data?.user) {
        toast.success("Bienvenido de nuevo!");
        redirect("/dashboard");
      } else {
        toast.error("Credenciales inválidas");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-6" onSubmit={form.handleSubmit(onSubmit)} >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Inicia sesión con tu cuenta</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Ingresa tu correo y contraseña para ingresar
          </p>
        </div>
        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="grid gap-3">
                <FormLabel>Correo</FormLabel>
                <FormControl>
                  <Input placeholder="ayapalleck@outlook.com" id="email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="grid gap-3">
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="********"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      className="absolute top-1/2 right-3 -translate-y-1/2 p-0 h-auto"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeClosed className="size-5" /> : <Eye className="size-5" />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full cursor-pointer" disabled={!isValid}>
            {isSubmitting ? <LoaderCircle className="animate-spin size-5" /> : "Iniciar sesión"}
          </Button>
        </div>
        <div className="w-full flex justify-end text-sm">
          <div onClick={(e) => e.stopPropagation()}>
            <ForgotPasswordButton />
          </div>
        </div>
      </form>
    </Form>
  )
}
