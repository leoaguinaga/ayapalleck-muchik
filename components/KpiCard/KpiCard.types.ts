import { LucideIcon } from "lucide-react";

export type KpiCardProps = {
    title: string;
    value: string | number;
    icon: LucideIcon;
    tooltip: string;
    isPrimary?: boolean;
}