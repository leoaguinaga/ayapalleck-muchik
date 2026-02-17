import { bookingsData } from './BookingsInfo.data'
import KpiCard from '@/components/KpiCard/KpiCard'


export default function BookingsInfo() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4'>
            {bookingsData.map((item, index) => (
                <KpiCard
                    key={index}
                    isPrimary={item.isPrimary}
                    title={item.title}
                    value={item.value}
                    tooltip={item.tooltip}
                    icon={item.icon}
                />
            ))}
        </div>
    )
}
