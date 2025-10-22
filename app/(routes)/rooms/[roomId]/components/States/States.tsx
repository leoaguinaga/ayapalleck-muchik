import React from 'react'
import StateItem from '../StateItem'

export default function States() {
  return (
    <div className='flex flex-col sm:flex-row gap-3.5 md:gap-5 lg:gap-10 2xl:gap-5'>
      <StateItem type='availability' typeState={false}/>
      <StateItem type='cleanliness' typeState={true}/>
    </div>
  )
}
