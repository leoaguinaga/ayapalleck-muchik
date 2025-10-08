import React from 'react'
import FormUpdateRoom from '../FormUpdateRoom'
import FormRemoveRoom from '../FormRemoveRoom'
import { DangerZoneProps } from './DangerZone.types'

export default function DangerZone(props: DangerZoneProps) {
  const { roomNumber } = props;

  return (
    <div className='w-full h-fit bg-orange-500/10 border border-orange-500 rounded-lg p-5'>
        <h2 className='font-bold text-xl text-orange-500'>Zona de peligro</h2>
        <div className='flex flex-col gap-5 2xl:flex-row min-h-fit'>
            <FormUpdateRoom />
            <div className='min-h-full flex border'></div>
            <FormRemoveRoom roomNumber={roomNumber} />
        </div>
    </div>
  )
}
