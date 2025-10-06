"use client"

import { useRouter } from "next/navigation";
import { FormCreateRoomProps } from "./FormCreateRoom.types"
import { useForm } from "react-hook-form";
import { formForgotPasswordSchema } from "./FormForgotPassword.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import toast from 'react-hot-toast';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { authClient } from "@/lib/auth-client"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

export default function FormForgotPassword(props: FormCreateRoomProps) {
    const { setOpenForgotPasswordModal } = props;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof formForgotPasswordSchema>>({
        resolver: zodResolver(formForgotPasswordSchema),
        defaultValues: {
            email: "",
        }
    })

    const { isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formForgotPasswordSchema>) => {
        try {
            console.log(values);
            await authClient.forgetPassword({ email: values.email });
            
            toast.success('Se envió el correo para reestablecer la contraseña');
            setOpenForgotPasswordModal(false);
            router.refresh();
        } catch (error) {
            toast.error('Error al enviar el correo');
        } finally {
            setIsSubmitting(false);
        }
    }

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit(onSubmit)(e);
    }

    return (
        <Form {...form}>
            <form onSubmit={handleFormSubmit} className="space-y-4 mt-3">
                <div className="grid grid-cols-1 gap-3">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Correo electrónico</FormLabel>
                                <FormControl>
                                    <Input placeholder="ayapalleck@outlook.com" {...field} id="email" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" disabled={!isValid} onClick={() => setIsSubmitting(true)} className="w-full">
                    {isSubmitting ? <LoaderCircle className="animate-spin size-5" /> : 'Enviar correo'}
                </Button>
            </form>
        </Form>
    )
}