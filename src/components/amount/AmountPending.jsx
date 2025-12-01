import React from 'react'
import CustomIcon from '../../assets/CustomIcon'

export default function AmountPending() {
    return (
        <div className='bg-white w-full p-5 rounded-lg flex flex-col  gap-4'>
            {/* heading section  */}
            <h1 className='flex items-center gap-3 text-gray-500 text-xl '>
                Amount Pending
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </h1>
            {/* The amount section  */}
            <div className='flex justify-between'>
                <h2 className='text-black text-3xl font-Semibold flex items-center gap-1'>
                    <CustomIcon color={'#00000'} />
                    15,964.08
                </h2>
                <a href="#" className='flex justify-center items-center font-semibold text-blue-800 underline'>23 Orders
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    )
}
