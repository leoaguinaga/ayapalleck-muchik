"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { formRemoveUserSchema } from "./FormRemoveUser.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import toast from "react-hot-toast"
import { FormRemoveUserProps } from "./FormRemoveUser.types"

export default function FormRemoveUser(props: FormRemoveUserProps) {
  const { userId, userName } = props
  const router = useRouter()

  const form = useForm<z.infer<typeof formRemoveUserSchema>>({
    resolver: zodResolver(formRemoveUserSchema),
    defaultValues: {
      text: "",
    },
  })

  const [isValid, setIsValid] = useState(false)
  const watchedText = form.watch("text")

  useEffect(() => {
    setIsValid(watchedText === `eliminar/usuario-${userId}`)
  }, [watchedText, userId])

  const onSubmit = async (values: z.infer<typeof formRemoveUserSchema>) => {
    if (!isValid) return
    console.log(values)
    toast.success(`Usuario ${userName} eliminado con éxito`)
    router.push("/users")
    router.refresh()
  }

  return (
    <div className="flex flex-col w-full my-2.5">
      <div className="flex flex-col">
        <h2 className="text-lg mb-1 font-semibold">Eliminar usuario</h2>
        <p className="text-sm text-muted-foreground">
          El usuario será marcado como "desactivado" y no podrá acceder al sistema. Esta acción es irreversible.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 mt-3 w-full"
        >
          <div className="grid grid-cols-1">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-500 dark:text-red-600">
                    Para continuar, escribe "eliminar/usuario-{userId}"
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="" 
                      {...field} 
                      id="text" 
                      className="text-red-500 dark:text-red-600 border-red-500 dark:border-red-600 bg-white dark:bg-background" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={!isValid}
            className="w-full bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-500 dark:text-white"
          >
            Eliminar usuario
          </Button>
        </form>
      </Form>
    </div>
  )
}
