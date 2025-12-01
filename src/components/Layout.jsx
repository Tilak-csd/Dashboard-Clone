// Layout.jsx
import React from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent'
import { useRecoilState } from 'recoil'
import { SidebarAtom } from '../store/atoms/main'


export default function Layout() {
  const [open, setOpen] = useRecoilState(SidebarAtom)
  return (
    <div className="relative w-full min-h-screen">
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 opacity-50 lg:hidden"
          onClick={() => setOpen(false)} // Optional: close sidebar when clicking overlay
        >
          <div className='absolute top-5 right-5 z-50 opacity-100 text-white cursor-pointer lg:hidden'
            onClick={() => setOpen(prev => !prev)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>


          </div>
        </div>
      )}
      <Navbar />
      <MainContent />
    </div>
  )
}