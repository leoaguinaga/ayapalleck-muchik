import InfoCard from '@/components/InfoCard'
import { bookingsData } from './BookingsInfo.data'


export default function BookingsInfo() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
            {bookingsData.map((item, index) => (
                <InfoCard
                    key={index}
                    title={item.title}
                    content={item.content}
                    tooltipContent={item.tooltipContent}
                />
            ))}
        </div>
    )
}
