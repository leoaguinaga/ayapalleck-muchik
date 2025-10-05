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
import { LoaderCircle } from "lucide-react"
import { redirect } from "next/navigation"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
                  <Input placeholder="********" type="password" id="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full cursor-pointer" disabled={!isValid}>
            {isSubmitting ? <LoaderCircle className="animate-spin size-5" /> : "Iniciar sesión"}
          </Button>
        </div>
        <div className="text-right text-sm">
          <a
            href="#"
            className="ml-auto text-sm underline-offset-4 hover:underline"
          >
            Olvidaste tu contraseña?
          </a>
        </div>
      </form>
    </Form>
  )
}
