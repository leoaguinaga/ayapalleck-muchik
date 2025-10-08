import React from 'react'
import { roomData } from './RoomInfo.data' 
import InfoCard from '@/components/InfoCard'

export default function RoomInfo() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
            {roomData.map((item, index) => (
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
