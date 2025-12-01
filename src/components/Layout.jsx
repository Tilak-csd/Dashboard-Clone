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
          className="fixed inset-0 z-40 bg-gray-600 opacity-50" 
          onClick={() => setOpen(false)} // Optional: close sidebar when clicking overlay
        >
          <div></div>
        </div>
      )}
      <Navbar />
      <MainContent />
    </div>
  )
}