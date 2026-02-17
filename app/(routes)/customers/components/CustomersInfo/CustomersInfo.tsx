import React from 'react'
import { customersData } from './CustomersInfo.data'
import KpiCard from '@/components/KpiCard/KpiCard'

export default function CustomersInfo() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2.5 lg:gap-5'>
            {customersData.map((item, index) => (
                <KpiCard
                    key={index}
                    title={item.title}
                    value={item.value}
                    tooltip={item.tooltip}
                    icon={item.icon}
                    isPrimary={item.isPrimary}
                />
            ))}
        </div>
    )
}
