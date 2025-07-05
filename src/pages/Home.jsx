import React from 'react'
import Job from './Job'
import Header from '../components/Header'
import { getLatestJobs } from '../api'
import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

function Home() {
const {jobs,jobsLoading} = useAuth()
  
  
  if( jobsLoading) return <p>loading jobs</p>
  return (
    <div className='w-full min-h-screen bg-blue-50 flex flex-col gap-2 items-center py-20'>
     
     <Header />
      <div className="hero-section w-[90%] md:w-4/5 lg:w-3/4 xl:w-3/5 2xl:w-1/2 h-28 md:h-36 flex justify-center items-center">
        <div className='flex w-full bg-white h-1/2 justify-between border-[1px] rounded-2xl border-gray-300'>
        <input type="text" className='w-3/6 border-r-[1px] border-gray-300 px-5 text-md md:text-lg' placeholder='Search job' />

        <select name="city" id="" className='text-gray-600 w-2/6 px-3 appearance-none'>
          <option value="None">Select City</option>
          <option value="isl">Islamabad</option>
          <option value="rwp">Rawalpindi</option>
          <option value="lhr">Lahore</option>
          <option value="kar">karachi</option>
        </select>
      <button className='w-1/6 bg-blue-400 text-white text-md md:text-xl font-semibold rounded-r-2xl cursor-pointer'>Search</button>
        </div>
      </div>
      {/* <img src="./hero-img.jpg" width={800} alt="" /> */}

      {jobs.map((job,index)=>(
        <Job key={job._id} title={job.title} description={job.description} company={job.company} education={job.education} age={job.age} salary={job.salary} experience={job.experience} location={job.location}  isVerified={job.verifiedCompany} jobID={job._id}/>
      ))}
     
    </div>
  )
}

export default Home
