"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronRight } from "lucide-react"
import { useState } from "react"
import { CustomOpenModalButtonProps, ButtonVariant } from "./CustomOpenModalButton.types"
import { cn } from "@/lib/utils"

export default function CustomOpenModalButton({
    triggerLabel = "Abrir",
    triggerIcon,
    buttonVariant = "default",
    buttonClassName,
    title,
    description,
    breadcrumb,
    children,
    open: controlledOpen,
    onOpenChange: controlledOnOpenChange,
    modalClassName,
}: CustomOpenModalButtonProps) {
    const [internalOpen, setInternalOpen] = useState(false)
    
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen
    const setIsOpen = controlledOnOpenChange || setInternalOpen

    const getButtonStyles = (variant: ButtonVariant) => {
        switch (variant) {
            case 'icon':
                return "flex items-center gap-2"
            case 'text':
                return "bg-transparent hover:bg-transparent text-primary p-0 h-auto font-normal"
            case 'underline':
                return "bg-transparent hover:bg-transparent text-primary p-0 h-auto font-normal underline underline-offset-4 hover:underline-offset-2 transition-all"
            default:
                return "flex items-center gap-2"
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className={cn(getButtonStyles(buttonVariant), buttonClassName)}>
                    {triggerIcon && buttonVariant !== 'text' && buttonVariant !== 'underline' && (
                        <span className="size-4.5">{triggerIcon}</span>
                    )}
                    {triggerLabel}
                </Button>
            </DialogTrigger>
            <DialogContent className={cn("sm:max-w-[625px]", modalClassName)}>
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-1 font-bold">
                        {breadcrumb && breadcrumb.length > 0 ? (
                            <>
                                {breadcrumb.map((item, index) => (
                                    <div key={index} className="flex items-center gap-1">
                                        <p>{item}</p>
                                        {index < breadcrumb.length - 1 && (
                                            <ChevronRight className="size-4.5" />
                                        )}
                                    </div>
                                ))}
                            </>
                        ) : (
                            <p>{title}</p>
                        )}
                    </DialogTitle>
                    {description && (
                        <DialogDescription className="text-left">
                            {description}
                        </DialogDescription>
                    )}
                </DialogHeader>
                <div>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}
