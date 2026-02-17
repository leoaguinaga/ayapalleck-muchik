"use client";

import React, { useState } from "react";
import { formatDateSpanish, formatDateKey, isSameDay } from "@/lib/date-utils";
import { mockBookings, mockRooms } from "./BookingCalendar.data";
import { Booking } from "./BookingCalendar.types";
import CreateBookingModal from "../CreateBookingModal";
import BookingDetailsModal from "../BookingDetailsModal";
import { cn } from "@/lib/utils";

interface BookingCalendarProps {
  weekOffset: number;
}

export default function BookingCalendar({ weekOffset }: BookingCalendarProps) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const getDates = () => {
    const today = new Date();
    today.setDate(today.getDate() + weekOffset * 8);
    const days: Date[] = [];

    for (let i = 0; i < 8; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i - 1);
      days.push(date);
    }

    return days;
  };

  const dates = getDates();

  const getBookingsForCell = (roomNumber: string, date: Date): Booking[] => {
    const dateKey = formatDateKey(date);

    return mockBookings.filter((booking) => {
      const checkIn = new Date(booking.checkIn);
      const checkOut = new Date(booking.checkOut);

      return (
        booking.roomNumber === roomNumber && date >= checkIn && date < checkOut
      );
    });
  };

  // Función para calcular el ancho de la reserva en el calendario
  const getBookingWidth = (booking: Booking, startDate: Date): number => {
    const checkIn = new Date(booking.checkIn);
    const checkOut = new Date(booking.checkOut);

    // Calcular cuántos días de la semana actual ocupa la reserva
    let daysInWeek = 0;
    dates.forEach((date) => {
      if (date >= checkIn && date < checkOut) {
        daysInWeek++;
      }
    });

    return daysInWeek;
  };

  // Función para verificar si es el primer día de la reserva en la semana visible
  const isFirstDayInWeek = (booking: Booking, date: Date): boolean => {
    const checkIn = new Date(booking.checkIn);
    const dateKey = formatDateKey(date);
    const checkInKey = formatDateKey(checkIn);

    // Si es el día de check-in, es el primero
    if (dateKey === checkInKey) return true;

    // Si el check-in es antes de esta semana y este es el primer día de la semana
    if (checkIn < dates[0] && isSameDay(date, dates[0])) return true;

    return false;
  };

  const handleCellClick = (
    roomNumber: string,
    date: Date,
    event: React.MouseEvent
  ) => {
    const bookings = getBookingsForCell(roomNumber, date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Si hay una reserva en esta celda, abrir modal de detalles
    if (bookings.length > 0) {
      event.stopPropagation();
      setSelectedBooking(bookings[0]);
      setIsDetailsModalOpen(true);
    } else if (date >= today) {
      // Solo permitir crear reservas desde hoy en adelante
      setSelectedRoom(roomNumber);
      setSelectedDate(formatDateKey(date));
      setIsCreateModalOpen(true);
    }
  };

  const handleBookingClick = (booking: Booking, event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedBooking(booking);
    setIsDetailsModalOpen(true);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Calendario */}
      <div className="rounded-xl bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-255">
            {/* Header de fechas */}
            <div className="grid grid-cols-9 border-b bg-muted/50">
              <div className="p-3 border-r flex items-center justify-center gap-2 bg-white">
                <p className="text-sm font-semibold">Número / Tipo</p>
              </div>
              {dates.map((date, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-3 text-center border-r text-sm font-medium",
                    isSameDay(date, new Date()) && "bg-primary/10"
                  )}
                >
                  {formatDateSpanish(date)}
                </div>
              ))}
            </div>

            {/* Filas de habitaciones */}
            {mockRooms.map((room, roomIndex) => (
              <div
                key={room.number}
                className="grid grid-cols-9 border-b last:border-b-0"
              >
                {/* Columna de número de habitación */}
                <div className="border-r bg-muted/30 flex items-center justify-center font-medium">
                  <div className="flex flex-col leading-tight">
                    <p>Habitación {room.number}</p>
                    <span className="text-sm font-normal text-gray-600 text-left">
                      Matrimonial
                    </span>
                  </div>
                </div>

                {/* Celdas de fechas */}
                {dates.map((date, dateIndex) => {
                  const bookings = getBookingsForCell(room.number, date);
                  const mainBooking = bookings[0]; // Tomamos la primera reserva si hay varias
                  const isFirst = mainBooking
                    ? isFirstDayInWeek(mainBooking, date)
                    : false;
                  const width =
                    mainBooking && isFirst
                      ? getBookingWidth(mainBooking, date)
                      : 0;
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  const isPastDate = date < today;
                  const isToday = isSameDay(date, new Date());

                  return (
                    <div
                      key={dateIndex}
                      className={cn(
                        "relative p-2 border-r h-15.5 transition-colors",
                        isToday && "bg-primary/5",
                        !isPastDate &&
                          !mainBooking &&
                          "cursor-pointer hover:bg-muted/50",
                        isPastDate &&
                          !mainBooking &&
                          "bg-muted/20 cursor-not-allowed"
                      )}
                      onClick={(e) => handleCellClick(room.number, date, e)}
                    >
                      {mainBooking && isFirst && (
                        <div
                          className="absolute inset-y-1 left-1 rounded-lg bg-white text-black px-3.5 py-1.5 text-sm font-semibold border overflow-hidden whitespace-nowrap text-ellipsis z-10 cursor-pointer hover:opacity-90 transition-opacity flex flex-col justify-between"
                          style={{
                            width: `calc(${width * 100}% + ${
                              (width - 5) * 8
                            }px)`,
                          }}
                          onClick={(e) => handleBookingClick(mainBooking, e)}
                        >
                          <div
                            className="absolute inset-0 max-w-1.75 h-full"
                            style={{
                              backgroundColor: mainBooking.color || "#3b82f6",
                            }}
                          />
                          {mainBooking.guestName}
                          <p className="text-xs text-gray-600">
                            Check Out 20:30
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal para crear reserva */}
      <CreateBookingModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        roomNumber={`${selectedRoom}`}
        selectedDate={selectedDate}
      />

      {/* Modal para ver detalles de reserva */}
      <BookingDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        booking={selectedBooking}
      />
    </div>
  );
}
