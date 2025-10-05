import { Info } from "lucide-react";
import { CardSummaryProps } from "./CardSummary.types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CardSummary(props: CardSummaryProps) {
    const { title, value } = props;

    return (
        <Card className="gap-0">
            <CardHeader className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <Info className="size-5" />
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-3xl font-bold mt-2">{value}</p>
            </CardContent>
        </Card>

    )
}
