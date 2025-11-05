'use client';

import { Request } from '@/app/(routes)/requests/types';
import { Room } from '@/app/(routes)/requests/room-types';
import { checkRoomAvailability } from '@/app/(routes)/requests/room-availability';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Bed, 
  Calendar, 
  DollarSign, 
  CheckCircle, 
  Sparkles,
  User,
  Clock
} from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useState, useEffect } from 'react';

interface RoomAvailabilityModalProps {
  request: Request | null;
  isOpen: boolean;
  onClose: () => void;
  onAssignRoom?: (request: Request, room: Room) => void;
  onReject?: (request: Request) => void;
}

export function RoomAvailabilityModal({
  request,
  isOpen,
  onClose,
  onAssignRoom,
  onReject,
}: RoomAvailabilityModalProps) {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [availableRooms, setAvailableRooms] = useState<Room[]>([]);

  useEffect(() => {
    if (request && isOpen) {
      const { available } = checkRoomAvailability(
        request.roomType,
        request.checkIn,
        request.checkOut
      );
      setAvailableRooms(available);
      setSelectedRoom(null);
    }
  }, [request, isOpen]);

  if (!request) return null;

  const formatDate = (date: Date) => {
    return format(date, "dd 'de' MMMM", { locale: es });
  };

  const getDuration = (checkIn: Date, checkOut: Date) => {
    const diff = checkOut.getTime() - checkIn.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
  };

  const nights = getDuration(request.checkIn, request.checkOut);

  const handleAssign = () => {
    if (selectedRoom && onAssignRoom) {
      onAssignRoom(request, selectedRoom);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bed className="w-5 h-5" />
            Disponibilidad de Habitaciones
          </DialogTitle>
          <DialogDescription>
            Revisa y asigna una habitación disponible para esta solicitud
          </DialogDescription>
        </DialogHeader>

        {/* Información de la solicitud */}
        <Card className="p-4 bg-muted/50">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <User className="w-4 h-4 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">Cliente</p>
                <p className="font-semibold text-sm">{request.customerName}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Bed className="w-4 h-4 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">Tipo solicitado</p>
                <p className="font-semibold text-sm">{request.roomType}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">Check-in</p>
                <p className="font-semibold text-sm">{formatDate(request.checkIn)}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">Check-out</p>
                <p className="font-semibold text-sm">{formatDate(request.checkOut)}</p>
              </div>
            </div>
          </div>

          <div className="pt-3.5 -mt-1 border-t">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <p className="text-sm">
                <span className="font-semibold">{nights}</span> {nights === 1 ? 'noche' : 'noches'}
              </p>
            </div>
          </div>
        </Card>

        <Separator />

        {/* Lista de habitaciones disponibles */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm">
              Habitaciones Disponibles
            </h3>
            <Badge variant="outline">
              {availableRooms.length} {availableRooms.length === 1 ? 'disponible' : 'disponibles'}
            </Badge>
          </div>

          {availableRooms.length === 0 ? (
            <Card className="p-8 text-center">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <Bed className="w-12 h-12 opacity-50" />
                <p className="font-medium">No hay habitaciones disponibles</p>
                <p className="text-sm">
                  No hay habitaciones tipo "{request.roomType}" disponibles para las fechas seleccionadas
                </p>
              </div>
            </Card>
          ) : (
            <div className="grid gap-2 max-h-[300px] overflow-y-auto pr-2">
              {availableRooms.map((room) => (
                <Card
                  key={room.roomNumber}
                  className={`p-3 cursor-pointer transition-all hover:shadow-md ${
                    selectedRoom?.roomNumber === room.roomNumber
                      ? 'border-2 border-primary bg-primary/5'
                      : 'hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedRoom(room)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <Bed className="w-6 h-6 text-primary" />
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-lg">#{room.roomNumber}</p>
                          {room.isClean && (
                            <Sparkles className="w-4 h-4 text-blue-500" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{room.roomType}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center gap-1 text-lg font-bold">
                        <DollarSign className="w-4 h-4" />
                        {room.price.toFixed(2)}
                      </div>
                      <p className="text-xs text-muted-foreground">por noche</p>
                    </div>
                  </div>

                  {selectedRoom?.roomNumber === room.roomNumber && (
                    <div className="-mt-2.5 pt-2 border-t">
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <CheckCircle className="w-4 h-4" />
                        <span className="font-medium">Seleccionada</span>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>

        <DialogFooter className="flex gap-2 sm:gap-2">
          <Button
            variant="outline"
            onClick={() => {
              onReject?.(request);
              onClose();
            }}
            className="flex-1"
          >
            Rechazar Solicitud
          </Button>
          <Button
            onClick={handleAssign}
            disabled={!selectedRoom}
            className="flex-1"
          >
            {selectedRoom ? 'Asignar Habitación' : 'Selecciona una habitación'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
