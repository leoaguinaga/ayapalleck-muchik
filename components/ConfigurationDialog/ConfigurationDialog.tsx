"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useEffect, useState } from "react"
import ConfigurationsTabs from "../ConfigurationsTabs"
import { ConfigurationDialogProps } from "./ConfigurationDialog.types"

export default function ConfigurationDialog(props: ConfigurationDialogProps) {
    const { open, onOpenChange, tab } = props
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => setIsMounted(true), [])
    if (!isMounted) return null

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[625px] p-0 m-0 gap-0" showCloseButton={false}>
                <DialogHeader className="p-0 m-0">
                    <DialogTitle className="m-0 p-0" />
                </DialogHeader>
                <ConfigurationsTabs tab={tab} />
            </DialogContent>
        </Dialog>
    )
}
