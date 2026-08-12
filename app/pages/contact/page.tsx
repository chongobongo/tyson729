import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

const ContactPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-300'>
      <h1 className={`${poppins.className} text-6xl font-bold`}>Contact Page</h1>
    </div>
  )
}

export default ContactPage
