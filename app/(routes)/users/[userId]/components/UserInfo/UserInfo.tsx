import React from 'react'
import InfoCard from '@/components/InfoCard'
import { userInfoData } from './UserInfo.data'

export default function UserInfo() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5'>
            {userInfoData.map((item, index) => (
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
