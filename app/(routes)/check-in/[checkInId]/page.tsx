import React from 'react'

export default async function CheckInPage({ params }: { params: { checkInId: string }}) {
    const { checkInId } = await params;

    return (
        <div></div>
    )
}