import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { signOut } from 'firebase/auth'
import { Auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { logout } from '../api'
import { useState } from 'react'

function Header() {
  const navigate = useNavigate()
  const {user, loading , setUser} = useAuth()
   const [showPanel , setShowPanel]= useState(false)

async function logoutUser(){
 await signOut(Auth)
 await logout()
 setUser(null)
 navigate("/login")
}

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
        {showPanel && 
        
        <div className="panel absolute shadow top-16 right-0 z-10 w-3/4 h-screen bg-white px-3">
         <nav className='flex flex-col items-start text-lg font-medium mt-6'>

          
          {!user  && 
          <>
          <NavLink className={"border-b w-full py-4 hover:bg-gray-100 active:bg-gray-100"} to={"/"}>Browse Jobs</NavLink>
          <NavLink className={"border-b w-full py-4 hover:bg-gray-100 active:bg-gray-100"} to={"/employer/post-job"}>Post a job</NavLink>
          <NavLink className={"border-b w-full py-4 hover:bg-gray-100 active:bg-gray-100"} to={"/login"}>Login</NavLink>
          </>
          }
          {(user && user.role=="Employee") && 
          <>
          <NavLink className={"border-b w-full py-4 hover:bg-gray-100 active:bg-gray-100"} to={"/profile"}>Profile </NavLink>
          <NavLink className={"border-b w-full py-4 hover:bg-gray-100 active:bg-gray-100"} to={"/"}>Browse Jobs</NavLink>
          <NavLink className={"border-b w-full py-4 hover:bg-gray-100 active:bg-gray-100"} to={"/profile"}>My Jobs</NavLink>
          <NavLink className={"border-b w-full py-4 hover:bg-gray-100 active:bg-gray-100"} to={"/resume"}>Resume</NavLink>
          <NavLink className={"border-b w-full py-4 hover:bg-gray-100 active:bg-gray-100"} onClick={logoutUser}>Logout</NavLink>
          
          </>
          }
          {(user && user.role == "Employer" )&&
          <>
          <NavLink className={"border-b w-full py-4 hover:bg-gray-100 active:bg-gray-100"} to={"/profile"}>Profile </NavLink>
          <NavLink className={"border-b w-full py-4 hover:bg-gray-100 active:bg-gray-100"} to={"/"}>Browse Jobs</NavLink>
          <NavLink className={"border-b w-full py-4 hover:bg-gray-100 active:bg-gray-100"} to={"/employer/post-job"}>Post a job</NavLink>
          <NavLink className={"border-b w-full py-4 hover:bg-gray-100 active:bg-gray-100"} to={"/employer/company"}>My Company</NavLink>
          <NavLink className={"border-b w-full py-4 hover:bg-gray-100 active:bg-gray-100"} onClick={logoutUser}>Logout</NavLink>
          
          
          </>
          }
        </nav>
        </div>

         }
        <img src="/menu.png" onClick={()=>setShowPanel(!showPanel)} width={25} className='sm:hidden cursor-pointer hover:animate-pulse' alt="menu icon" />
        <nav className='hidden sm:flex gap-6 font-light'>

          <NavLink to={"/"}>Browse Jobs</NavLink>
          {!user  && 
          <>
         <NavLink to={"/employer/post-job"}>Post a job</NavLink>
         <NavLink to={"/login"}>Login</NavLink>
          </>
          }
          {(user && user.role=="Employee") && 
          <>
          <NavLink to={"/profile"}>My Jobs</NavLink>
          <NavLink to={"/resume"}>Resume</NavLink>
          <button onClick={logoutUser}>Logout</button>
          
         <NavLink to={"/profile"}>
         <img src={user.avatar} className='rounded-full border border-gray-400 w-6 h-6' alt="" />
         </NavLink>
          
          </>
          }
          {(user && user.role == "Employer" )&&
          <>
          <NavLink to={"/employer/post-job"}>Post a job</NavLink>
          <NavLink to={"/employer/company"}>Company</NavLink>
          <button onClick={logoutUser}>Logout</button>
         <NavLink to={"/profile"}>
         <img src={user.avatar} className='rounded-full border border-gray-400 w-6 h-6' alt="" />
         </NavLink>
          </>
          }
        </nav>
      </header>
  )
}

export default Header
