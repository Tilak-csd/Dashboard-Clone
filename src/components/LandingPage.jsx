import React from 'react'
import SideBar from './sidebar/Sidebar'
import MainContent from './MainContent'
import Navbar from './Navbar'

export default function LandingPage() {
    return (
        <div className='flex'>
            <SideBar />
            <Navbar />
        </div>
    )
}
