import React from 'react'
import SideBar from './sidebar/Sidebar'
import MainContent from './MainContent'
import Layout from './Layout'


export default function LandingPage() {
    return (
        <div className='flex'>
            <SideBar />
            <Layout />
        </div>
    )
}
