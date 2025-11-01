'use client';

import { Request, RequestStatus } from '@/app/(routes)/requests/types';
import { Card } from '@/components/ui/card';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar, Clock, Bed, CheckCircle, XCircle, AlertCircle, Ban } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface RequestCardProps {
  request: Request;
  onClick: () => void;
  status: RequestStatus;
}

export function RequestCard({ request, onClick, status }: RequestCardProps) {
  const formatDate = (date: Date) => {
    return format(date, 'dd/MM', { locale: es });
  };

  const getTimeDifference = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `Hace ${days}d`;
    }
    return `Hace ${hours}h`;
  };

  const getDuration = (checkIn: Date, checkOut: Date) => {
    const diff = checkOut.getTime() - checkIn.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
  };

  const getStatusConfig = () => {
    switch (status) {
      case 'in-review':
        return {
          borderColor: 'border-l-yellow-500',
          icon: <AlertCircle className="w-4 h-4 text-yellow-500" />,
          badge: <Badge variant="outline" className="text-xs border-yellow-500 text-yellow-600">Por revisar</Badge>,
          highlight: 'roomType', // Resaltar tipo de habitación
        };
      case 'approved':
        return {
          borderColor: 'border-l-blue-500',
          icon: <CheckCircle className="w-4 h-4 text-blue-500" />,
          badge: <Badge variant="outline" className="text-xs border-blue-500 text-blue-600">Por confirmar</Badge>,
          highlight: 'dates', // Resaltar fechas
        };
      case 'confirmed':
        return {
          borderColor: 'border-l-green-500',
          icon: <CheckCircle className="w-4 h-4 text-green-500" />,
          badge: <Badge className="text-xs bg-green-500">Confirmada</Badge>,
          highlight: 'customer', // Resaltar cliente
        };
      case 'rejected':
        return {
          borderColor: 'border-l-red-500',
          icon: <XCircle className="w-4 h-4 text-red-500" />,
          badge: <Badge variant="destructive" className="text-xs">Rechazada</Badge>,
          highlight: 'none',
        };
      case 'expired':
        return {
          borderColor: 'border-l-gray-500',
          icon: <Clock className="w-4 h-4 text-gray-500" />,
          badge: <Badge variant="secondary" className="text-xs">Expirada</Badge>,
          highlight: 'none',
        };
      case 'cancelled':
        return {
          borderColor: 'border-l-orange-500',
          icon: <Ban className="w-4 h-4 text-orange-500" />,
          badge: <Badge variant="outline" className="text-xs border-orange-500 text-orange-600">Cancelada</Badge>,
          highlight: 'none',
        };
      default:
        return {
          borderColor: 'border-l-gray-300',
          icon: null,
          badge: null,
          highlight: 'none',
        };
    }
  };

  const config = getStatusConfig();
  const nights = getDuration(request.checkIn, request.checkOut);

  return (
    <Card 
      className={`p-3 mb-2 cursor-pointer hover:shadow-md transition-all hover:border-primary/50 group border-l-4 ${config.borderColor}`}
      onClick={onClick}
    >
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className={`font-semibold text-sm line-clamp-2 flex-1 group-hover:text-primary transition-colors ${config.highlight === 'customer' ? 'text-base text-green-600' : ''}`}>
            {request.customerName}
          </h3>
          {config.icon}
        </div>

        {config.badge && (
          <div className="flex justify-start">
            {config.badge}
          </div>
        )}
        
        <div className={`flex items-center gap-1.5 text-xs ${config.highlight === 'roomType' ? 'font-bold text-yellow-600' : 'text-muted-foreground'}`}>
          <Bed className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="font-medium truncate">{request.roomType}</span>
        </div>

        <div className={`flex items-center gap-1.5 text-xs ${config.highlight === 'dates' ? 'font-bold text-blue-600' : 'text-muted-foreground'}`}>
          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">
            {formatDate(request.checkIn)} - {formatDate(request.checkOut)}
            <span className="ml-1 text-xs">({nights}n)</span>
          </span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{getTimeDifference(request.createdAt)}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
