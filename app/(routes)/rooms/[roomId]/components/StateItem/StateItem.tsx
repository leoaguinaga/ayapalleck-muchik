import { Button } from '@/components/ui/button'
import React from 'react'
import StateToolTip from '../StateToolTip'
import { StateItemProps } from './StateItem.types'

export default function StateItem(props: StateItemProps) {
  const { type, typeState } = props;

  const getState = () => {
    if (type === 'availability') {
      return typeState ? 'available' : 'occupied';
    } else {
      return typeState ? 'clean' : 'dirty';
    }
  }

  const getDescription = () => {
    switch (getState()) {
      case 'available':
        return 'La habitación se encuentra disponible.'
      case 'occupied':
        return 'La habitación se encuentra ocupada.'
      case 'clean':
        return 'La habitación ha sido limpiada.'
      case 'dirty':
        return 'La habitación necesita servicio de limpieza.'
    }
  }

  const getButton = () => {
    switch (getState()) {
      case 'available':
        return (
          <Button className='text-sm w-full bg-red-100/30 border-2 border-red-500 text-red-500 font-bold cursor-pointer h-7.5 hover:bg-red-200/40 hover:text-red-600 dark:bg-red-100/90 dark:hover:bg-red-200/90 dark:text-red-700 dark:border-red-700 dark:hover:text-red-800'>
            <p className='text-xs'>Marcar como ocupada</p>
          </Button>
        )
      case 'occupied':
        return (
          <Button className='text-sm w-full bg-green-100/40 border-2 border-green-500 text-green-500 font-bold cursor-pointer h-7.5 hover:bg-green-200/40 hover:text-green-600 dark:bg-green-100/90 dark:hover:bg-green-200/90 dark:text-green-700 dark:border-green-700 dark:hover:text-green-800'>
            <p className='text-xs'>Marcar como disponible</p>
          </Button>
        )
      case 'clean':
        return (
          <Button className='text-sm w-full bg-yellow-100/40 border-2 border-yellow-500 text-yellow-500 font-bold cursor-pointer h-7.5 hover:bg-yellow-200/40 hover:text-yellow-600 dark:bg-yellow-100/90 dark:hover:bg-yellow-200/90 dark:text-yellow-700 dark:border-yellow-700 dark:hover:text-yellow-800'>
            <p className='text-xs'>Marcar como sucia</p>
          </Button>
        )
      case 'dirty':
        return (
          <Button className='text-sm w-full bg-blue-100/30 border-2 border-blue-500 text-blue-500 font-bold cursor-pointer h-7.5 hover:bg-blue-200/40 hover:text-blue-600 dark:bg-blue-100/90 dark:hover:bg-blue-200/90 dark:text-blue-700 dark:border-blue-700 dark:hover:text-blue-800'>
            <p className='text-xs'>Marcar como limpia</p>
          </Button>
        )
    }
  }

  return (
    <div className='flex flex-col gap-2 w-[180px]'>
      <div className='flex flex-row w-full justify-between items-center'>
        <p className='font-medium'>{type === "availability" ? "Disponibilidad" : "Limpieza"}:</p>
        <StateToolTip state={getState()} />
      </div>
      <p className='text-sm text-gray-700 dark:text-gray-400'>{getDescription()}</p>
      {getButton()}
    </div>
  )
}
