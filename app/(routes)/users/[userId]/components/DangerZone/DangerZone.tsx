import React from 'react'
import FormUpdateUser from '../FormUpdateUser'
import FormRemoveUser from '../FormRemoveUser'
import { DangerZoneProps } from './DangerZone.types'

export default function DangerZone(props: DangerZoneProps) {
  const { userId, userName, userData } = props

  return (
    <div className='w-full h-fit bg-orange-500/10 border border-orange-500 rounded-lg p-5'>
        <h2 className='font-bold text-xl text-orange-500'>Zona de peligro</h2>
        <div className='flex flex-col gap-5 2xl:flex-row min-h-fit'>
            <FormUpdateUser userId={userId} defaultValues={userData} />
            <div className='min-h-full flex border'></div>
            <FormRemoveUser userId={userId} userName={userName} />
        </div>
    </div>
  )
}
