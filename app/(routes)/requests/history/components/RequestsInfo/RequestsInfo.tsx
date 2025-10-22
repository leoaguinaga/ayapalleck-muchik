import InfoCard from '@/components/InfoCard'
import { requestsData } from './RequestsInfo.data'


export default function RequestsInfo() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
            {requestsData.map((item, index) => (
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
