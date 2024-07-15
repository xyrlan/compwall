import React from 'react'
import { Sidebar } from './sidebar'
import { Navbar } from './navbar'

const SideNavbar = () => {
  return (
    <div className='fixed top-0 left-0 flex items-start z-50 w-full'>
      <Sidebar />
      <div className="flex-grow h-fit">
        <Navbar />
      </div>
    </div>
  )
}

export default SideNavbar
