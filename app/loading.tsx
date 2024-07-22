import Image from 'next/image'
import React from 'react'

const LoadingPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Image src='/logo-span.png' alt='logo' width={100} height={100} />
    </div>
  )
}

export default LoadingPage