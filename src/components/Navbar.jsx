import React from 'react'
import { useSetRecoilState } from 'recoil'
import { SidebarAtom } from '../store/atoms/main'

export default function Navbar() {
    return (
        <div className='flex justify-between items-center sticky top-0 z-1 bg-white h-15 p-3 border-b-[1px] border-gray-300'>
            <div className='flex justify-center items-center gap-2'>
                <Button></Button>
                <h1 className='text-xl font-semibold text-gray-700'>Payouts</h1>
                <div className='flex items-center justify-center text-sm gap-1 text-gray-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    <p className='hidden'>How it works</p>
                </div>
            </div>
            <Search></Search>

            <div className='flex gap-2 justify-center items-center '>
                <div className=' w-7 h-7 hover:bg-[#ebe2ca] cursor-pointer rounded-full flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-gray-500 size-6">
                        <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div className='w-7 h-7 hover:bg-[#ebe2ca] cursor-pointer rounded-full flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-gray-500 size-6">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clip-rule="evenodd" />
                    </svg>

                </div>

            </div>
        </div>
    )
}

function Button() {
    const setSidebar = useSetRecoilState(SidebarAtom)
    return <button
        className='cursor-pointer lg:hidden'
        onClick={()=> setSidebar(prev => !prev)}
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>

    </button>
}

function Search() {
    return <div className='flex w-[40%] bg-gray-200 p-2 rounded-sm gap-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input type="text" placeholder='Search features, tutorials, etc.' className='text-gray-500 w-full outline-0 placeholder:text-md' />
    </div>
}