import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Header() {
  const {user, loading} = useAuth()

  if(loading) return <header className='w-full absolute top-0 h-16 shadow-md flex justify-between px-7 items-center bg-white '>
       <div className='w-14 h-6 bg-gray-300'></div>
        <div className='flex gap-6 font-light'>

          <div className='w-14 h-6 bg-gray-300'></div>
          <div className='w-14 h-6 bg-gray-300'></div>
          <div className='w-14 h-6 bg-gray-300'></div>
          <div className='w-14 h-6 bg-gray-300'></div>
         
        </div>
      </header>
  return (
    <header className='w-full absolute top-0 h-16 shadow-md flex justify-between px-7 items-center bg-white '>
        <div>JobNext.</div>
        <nav className='flex gap-6 font-light'>

          <NavLink to={"/"}>Browse Jobs</NavLink>
          {!user && 
          <>
         <NavLink to={"/employer/post-job"}>Post a job</NavLink>
         <NavLink to={"/login"}>Login</NavLink>
          </>
          }
          {user.role=="Employee" && 
          <>
          <NavLink to={"/resume"}>My Jobs</NavLink>
          <NavLink to={"/resume"}>Resume</NavLink>
          
         <NavLink to={"/profile"}>
         <img src="/profile-pic.jpg" width={25} alt="" />
         </NavLink>
          
          </>
          }
          {user.role == "Employer" &&
          <>
          <NavLink to={"/employer/post-job"}>Post a job</NavLink>
          <NavLink to={"/employer/company"}>Company</NavLink>
          
         <NavLink to={"/employer/profile"}>
         <img src={user.company.logoURL} width={25} alt="" />
         </NavLink>
          </>
          }
        </nav>
      </header>
  )
}

export default Header
