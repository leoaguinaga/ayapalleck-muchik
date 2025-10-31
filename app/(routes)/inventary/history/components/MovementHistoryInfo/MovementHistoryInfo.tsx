import React from 'react'
import InfoCard from '@/components/InfoCard'
import { movementHistoryInfoData } from './MovementHistoryInfo.data'

export default function MovementHistoryInfo() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2.5 lg:gap-5'>
            {movementHistoryInfoData.map((item, index) => (
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
