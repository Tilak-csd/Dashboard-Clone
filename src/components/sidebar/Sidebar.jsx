import React from 'react'
import SidebarItems from './SidebarItems'
import { useRecoilValue } from 'recoil'
import { SidebarAtom } from '../../store/atoms/main'

export default function SideBar() {
  const open = useRecoilValue(SidebarAtom)

  return (
    <div className={`w-[250px] z-2 absolute left-0 top-0 items-center p-2 flex-col bg-blue-950 h-screen gap-1
    transform transition-all duration-300 ease-in-out
    ${open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
      <div className='flex gap-1 mt-3 justify-start items-center'>
        <img src="./image.png" alt="" className='w-10 rounded-sm h-10' />
        <div className='ml-2 flex flex-col'>
          <h1 className='text-xl text-white font-semibold'>Tilak-csd</h1>
          <a href="#" className='text-sm underline text-gray-300 cursor-pointer'>Visit Store</a>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className='text-white w-7 h-7 font-bold size-1 ml-7.5' fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" >
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <div className='flex items-start flex-col mt-5 w-full text-gray-300 font-semibold gap-2'>
        <SidebarItems></SidebarItems>
      </div>
      <div className=' absolute bottom-5 flex gap-2 w-[90%] p-2 rounded-sm bg-blue-900'>
        <div className='bg-blue-800 rounded-sm flex justify-center items-center text-white h-auto px-2'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
          </svg>
        </div>
        <div className='text-white text-sm flex flex-col'>
          Available credits
          <span className='text-xl font-bold'>500.10</span>
        </div>
      </div>

    </div>
  )
}
