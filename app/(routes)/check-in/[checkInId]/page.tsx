"use client"

import React, { useState } from 'react'
import RoomInfo from './components/RoomInfo'
import RoomDetails from './components/RoomDetails'
import FormCheckIn from './components/FormCheckIn'
import BookingSummary from './components/BookingSummary'

export default function CheckInPage({ params }: { params: { checkInId: string } }) {
    const { checkInId } = params
    const [summaryData, setSummaryData] = useState({
        reservationType: "Por noche",
        duration: "",
        basePrice: 120,
        products: [] as Array<{ productName: string, price: number, quantity: number }>,
        discount: 0,
        taxiFee: 0,
        advance: 0,
        total: 120
    })

    // Mock data - reemplazar con datos reales
    const roomData = {
        roomNumber: checkInId,
        roomType: "Matrimonial",
        nextReservation: "14 horas",
        description: "La habitación cuenta con vista a la calle, tiene el aire acondicionado en mantenimiento."
    }

    return (
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-5'>
            <div className='xl:col-span-2 flex flex-col gap-5'>
                <div className='flex items-center gap-2'>
                    <RoomInfo
                        roomNumber={roomData.roomNumber}
                        roomType={roomData.roomType}
                        nextReservation={roomData.nextReservation}
                    />
                    <RoomDetails description={roomData.description} />
                </div>
                <FormCheckIn roomId={checkInId} onSummaryChange={setSummaryData} />
            </div>

            <div className='xl:col-span-1'>
                <BookingSummary {...summaryData} />
            </div>
        </div>
    )
}