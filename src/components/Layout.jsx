import React from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent'


export default function Layout() {
  return (
    <div className='w-full'>
      <Navbar />
      <MainContent />
    </div>
  )
}
