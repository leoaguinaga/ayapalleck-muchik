import CustomToolTip from "../CustomToolTip"
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { InfoCardProps } from "./InfoCard.type"

export default function InfoCard(props: InfoCardProps) {
    const { title, content, tooltipContent } = props;

    return (
        <Card className="py-5 gap-0">
            <CardHeader className='text-lg font-bold flex flex-row items-center justify-between gap-2.5'>
                <p>{title}</p>
                <CustomToolTip content={tooltipContent} />
            </CardHeader>
            <CardContent className='text-3xl font-semibold'>
                <p>{content}</p>
            </CardContent>
        </Card>
    )
}
