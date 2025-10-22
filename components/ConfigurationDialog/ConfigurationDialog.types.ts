export type ConfigTab = "profile" | "settings" | "help"

export type ConfigurationDialogProps = {
    open: boolean
    onOpenChange: (v: boolean) => void
    tab: ConfigTab
}
