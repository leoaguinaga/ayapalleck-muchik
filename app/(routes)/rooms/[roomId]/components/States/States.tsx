import React from 'react'
import StateItem from '../StateItem'

export default function States() {
  return (
    <div className='flex flex-col md:flex-row gap-3.5'>
      <StateItem type='availability' typeState={false}/>
      <div className='min-h-full flex border'></div>
      <StateItem type='cleanliness' typeState={true}/>
    </div>
  )
}
