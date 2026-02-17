import { Database, Clock, CheckCircle, Zap } from "lucide-react";
import { KpiCardProps } from "@/components/KpiCard/KpiCard.types";

export const requestsData: KpiCardProps[] = [
    {
        title: 'Total Requests',
        value: '1,250',
        tooltip: 'Total number of requests made in the system.',
        icon: Database,
        isPrimary: true
    },
    {
        title: 'Pending Requests',
        value: '300',
        tooltip: 'Number of requests that are currently pending.',
        icon: Clock
    },
    {
        title: 'Completed Requests',
        value: '900',
        tooltip: 'Number of requests that have been completed successfully.',
        icon: CheckCircle
    },
    {
        title: 'Average Response Time',
        value: '2 hrs',
        tooltip: 'Average time taken to respond to requests.',
        icon: Zap
    }
];