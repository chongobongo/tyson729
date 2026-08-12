import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

const AboutPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-300'>
      <h1 className={`${poppins.className} text-6xl font-bold`}>About</h1>
    </div>
  )
}

export default AboutPage
