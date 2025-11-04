'use client';

import { Request } from '@/app/(routes)/requests/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Bed, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface RequestDetailsModalProps {
  request: Request | null;
  isOpen: boolean;
  onClose: () => void;
  onApprove?: (request: Request) => void;
  onReject?: (request: Request) => void;
  onConfirm?: (request: Request) => void;
  onCancel?: (request: Request) => void;
}

export function RequestDetailsModal({
  request,
  isOpen,
  onClose,
  onApprove,
  onReject,
  onConfirm,
  onCancel,
}: RequestDetailsModalProps) {
  if (!request) return null;

  const formatDate = (date: Date) => {
    return format(date, "dd 'de' MMMM 'de' yyyy", { locale: es });
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
      'in-review': { label: 'En revisión', variant: 'secondary' },
      approved: { label: 'Aprobada', variant: 'outline' },
      confirmed: { label: 'Confirmada', variant: 'default' },
      rejected: { label: 'Rechazada', variant: 'destructive' },
      expired: { label: 'Expirada', variant: 'destructive' },
      cancelled: { label: 'Cancelada', variant: 'destructive' },
    };

    const config = statusConfig[status] || statusConfig['in-review'];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getDuration = (checkIn: Date, checkOut: Date) => {
    const diff = checkOut.getTime() - checkIn.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return `${days} ${days === 1 ? 'noche' : 'noches'}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Detalles de la Solicitud</span>
          </DialogTitle>
          <DialogDescription className='flex items-center gap-2'>
            <span>Solicitud #{request.id}</span>
            {getStatusBadge(request.status)}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="flex items-start gap-3">
            <User className="w-5 h-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm font-medium">Cliente</p>
              <p className="text-sm text-muted-foreground">{request.customerName}</p>
            </div>
          </div>

          <Separator />

          <div className="flex items-start gap-3">
            <Bed className="w-5 h-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm font-medium">Tipo de Habitación</p>
              <p className="text-sm text-muted-foreground">{request.roomType}</p>
            </div>
          </div>

          <Separator />

          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium mb-2">Fechas de Reserva</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs mb-1">Check-in</p>
                  <p className="font-medium">{formatDate(request.checkIn)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-1">Check-out</p>
                  <p className="font-medium">{formatDate(request.checkOut)}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-xs mt-2">
                Duración: {getDuration(request.checkIn, request.checkOut)}
              </p>
            </div>
          </div>

          <Separator />

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm font-medium">Fecha de Solicitud</p>
              <p className="text-sm text-muted-foreground">{formatDate(request.createdAt)}</p>
            </div>
          </div>
        </div>

        <DialogFooter className="flex gap-2 sm:gap-2">
          {request.status === 'in-review' && (
            <>
              <Button
                variant="outline"
                onClick={() => {
                  onReject?.(request);
                  onClose();
                }}
                className="flex-1"
              >
                <XCircle className="w-4 h-4 mr-2" />
                Rechazar
              </Button>
              <Button
                onClick={() => {
                  onApprove?.(request);
                  onClose();
                }}
                className="flex-1"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Aprobar
              </Button>
            </>
          )}

          {request.status === 'approved' && (
            <>
              <Button
                variant="outline"
                onClick={() => {
                  onCancel?.(request);
                  onClose();
                }}
                className="flex-1"
              >
                <XCircle className="w-4 h-4 mr-2" />
                Cancelar
              </Button>
              <Button
                onClick={() => {
                  onConfirm?.(request);
                  onClose();
                }}
                className="flex-1"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Confirmar
              </Button>
            </>
          )}

          {request.status === 'confirmed' && (
            <Button
              variant="destructive"
              onClick={() => {
                onCancel?.(request);
                onClose();
              }}
              className="flex-1"
            >
              <XCircle className="w-4 h-4 mr-2" />
              Cancelar Reserva
            </Button>
          )}

          <Button variant="outline" onClick={onClose}>
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
