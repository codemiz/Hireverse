import React from 'react'

function Header() {
  return (
    <header className='w-full absolute top-0 h-16 shadow-md flex justify-between px-4 items-center bg-white '>
        <div>JobNext.</div>
        <nav className='flex gap-6 font-light'>
         <div>Browse Jobs</div>
         <div>Login</div>
         <div>Register</div>
        </nav>
      </header>
  )
}

export default Header
