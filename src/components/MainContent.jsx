import React from 'react'
import DropdownMonth from './DropdownMonth'


export default function MainContent() {
  return (
    <div className='h-screen w-[83vw] overflow-y-scroll scroll-hide p-10 '>
      {/* top line of the main content side */}
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold text-gray-700'>Overview</h1>
        {/* dropdown for selecting the months */}
        <DropdownMonth />
      </div>
      {/* card option amount of transaction  */}
      <div></div>

    </div>
  )
}
