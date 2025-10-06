import React from 'react'
import { roomsData } from './RoomsInfo.data' 
import InfoCard from '@/components/InfoCard'

export default function RoomsInfo() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2.5 lg:gap-5'>
            {roomsData.map((item, index) => (
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
