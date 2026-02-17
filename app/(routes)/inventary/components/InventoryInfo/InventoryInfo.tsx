import React from 'react'
import InfoCard from '@/components/InfoCard'
import { inventoryData } from './InventoryInfo.data'
import KpiCard from '@/components/KpiCard/KpiCard'

export default function InventoryInfo() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2.5 lg:gap-5'>
            {inventoryData.map((item, index) => (
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
