import React from 'react'
import InfoCard from '@/components/InfoCard'
import { customerInfoData } from './CustomerInfo.data'

export default function CustomerInfo() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-5'>
            {customerInfoData.map((item, index) => (
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
