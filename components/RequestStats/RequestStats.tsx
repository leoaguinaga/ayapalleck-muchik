'use client';

import { Request, RequestStatus } from '@/app/(routes)/requests/types';
import { Card } from '@/components/ui/card';
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  FileText,
  TrendingUp 
} from 'lucide-react';

interface RequestStatsProps {
  requests: Request[];
}

export function RequestStats({ requests }: RequestStatsProps) {
  const stats = {
    total: requests.length,
    inReview: requests.filter(r => r.status === 'in-review').length,
    approved: requests.filter(r => r.status === 'approved' || r.status === 'confirmed').length,
    rejected: requests.filter(r => r.status === 'rejected').length,
    expired: requests.filter(r => r.status === 'expired').length,
  };

  const statCards = [
    {
      title: 'Total',
      value: stats.total,
      icon: FileText,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'En Revisión',
      value: stats.inReview,
      icon: Clock,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      title: 'Aprobadas',
      value: stats.approved,
      icon: CheckCircle,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Rechazadas',
      value: stats.rejected,
      icon: XCircle,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
    {
      title: 'Expiradas',
      value: stats.expired,
      icon: TrendingUp,
      color: 'text-gray-500',
      bgColor: 'bg-gray-500/10',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
      {statCards.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="p-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <Icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
