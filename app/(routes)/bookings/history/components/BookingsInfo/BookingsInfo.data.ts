import { KpiCardProps } from "@/components/KpiCard/KpiCard.types";
import { CalendarDays, CheckCircle, Clock, XCircle } from "lucide-react";

export const bookingsData: KpiCardProps[] = [
    {
        title: 'Total Bookings',
        value: '1,250',
        tooltip: 'Total number of bookings made.',
        icon: CalendarDays,
        isPrimary: true
    },
    {
        title: 'Completed Bookings',
        value: '1,100',
        tooltip: 'Number of bookings that have been completed.',
        icon: CheckCircle
    },
    {
        title: 'Pending Bookings',
        value: '100',
        tooltip: 'Number of bookings that are still pending.',
        icon: Clock
    },
    {
        title: 'Cancelled Bookings',
        value: '50',
        tooltip: 'Number of bookings that have been cancelled.',
        icon: XCircle
    }
]