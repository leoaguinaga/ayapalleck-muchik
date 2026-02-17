import React from 'react'
import { kpisData } from './DashboardKpis.data';
import KpiCard from '@/components/KpiCard/KpiCard';

export default function DashboardKpis() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {kpisData.map((kpi) => (
            <KpiCard
                key={kpi.title}
                title={kpi.title}
                value={kpi.value}
                icon={kpi.icon}
                tooltip={kpi.tooltip}
                isPrimary={kpi.isPrimary}
            />
        ))}
      </div>
  )
}
