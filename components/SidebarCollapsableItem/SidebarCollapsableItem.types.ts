import { LucideIcon } from "lucide-react";

export type SidebarCollapsableItemProps = {
    item: {
        label: string,
        icon: LucideIcon,
        href: string,
    },
    key: string,
}