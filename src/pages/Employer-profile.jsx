import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useAuth } from '../context/AuthContext'
import Jobs from './Jobs'

function EmployerProfile() {
  const {user} = useAuth()
  return (
    <div  className="w-full min-h-screen bg-blue-50 flex flex-col gap-2 items-center py-20">
     <Header />
      
      
           <div className="posted-jobs-div w-[90%] lg:w-3/4  xl:w-3/5 2xl:w-1/2 h-60 flex justify-center flex-col md:flex-row items-center md:items-center md:justify-start  bg-blue-100 shadow rounded-2xl gap-3 py-4 px-11">
                <div className="image-div flex justify-center md:justify-start ">
                   <div className="w-[136px] md:w-44 md:h-44 h-[136px] rounded-full">
                    <img src="/logo2.png" className="rounded-full" alt="" />
                   </div>
               </div>
              <div className=" flex flex-col items-center">
                <p className='text-3xl md:text-4xl font-bold text-gray-700'>{user.name}</p>
                <p className='text-md md:text-xl font-thin text-gray-700'>Jobs Posted: {user.postedJobs.length}</p>
              </div>
           
        </div>
       
         <p className='text-xl w-[90%] lg:w-3/4  xl:w-3/5 2xl:w-1/2 text-center bg-gray-50 rounded shadow font-thin text-gray-700 mt-2'>My Jobs</p>
        
        {user.postedJobs.length > 0 ?
        
        <Jobs />
      :
      <p className='font-light text-md mt-3'>You have not posted any jobs yet.</p>
      }
               
       
      <Footer />
    </div>
  )
}

export default EmployerProfile
