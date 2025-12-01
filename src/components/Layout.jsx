import React from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent'
import { useRecoilState } from 'recoil'
import { SidebarAtom } from '../store/atoms/main'


export default function Layout() {
  const [open, setOpen] = useRecoilState(SidebarAtom)
  return (
    <div className={`w-full ${open ? "bg-gray-600" : ""}`}>
      <Navbar />
      <MainContent />
    </div>
  )
}
