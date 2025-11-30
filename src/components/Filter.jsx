import React from 'react'

export default function Filter() {
    return (
        <div className='mt-10 flex justify-between items-center'>
            <div className='flex w-[35%] border-[.5px] border-gray-400 p-3 rounded-sm gap-3 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-gray-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type="text" placeholder='Order ID or Transactions ID' className='text-gray-500 w-full outline-0 placeholder:text-xl' />
            </div>

            <div className='flex justify-center gap-2'>
                <div className='flex border-[.5px] text-lg text-gray-500 border-gray-400 p-2 rounded-sm gap-2 items-center'>
                    Sort
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>

                </div>
                <div className='flex border-[.5px] text-lg text-gray-500 border-gray-400 p-2 rounded-sm gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>

                </div>
            </div>
        </div>
    )
}
