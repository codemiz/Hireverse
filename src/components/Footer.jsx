import React from 'react'

function Footer() {
  return (
    <footer className='w-full h-14 bg-gray-50 fixed bottom-0 text-gray-400 shadow flex justify-center md:justify-between px-6 font-light items-center text-sm'>
    <p>All rights reserved 2025</p>
    <div className=' gap-4 hidden md:flex'>
        <p>Privacy Policy</p>
        <p>Contact us</p>
        <p>About us</p>
    </div>
   </footer>
  )
}

export default Footer

