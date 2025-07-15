import React, { useState } from 'react'
import Job from './Job'
import Header from '../components/Header'
import { getLatestJobs } from '../api'
import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import Loading from '../components/Loading'

function Home() {
const {jobs,jobsLoading} = useAuth()
const [search, setSearch] = useState("")
const [city, setCity ]= useState("None")
  
const filteredJobs = jobs.filter(job =>{
  const matchesTitle  = job.title.toLowerCase().includes(search.toLowerCase())
  const matchesCity = city === "None" || job.location.toLowerCase().includes(city.toLowerCase())

  return matchesTitle && matchesCity
})
  
  if( jobsLoading) return <Loading />
  return (
    <div className='w-full min-h-screen bg-blue-50 flex flex-col gap-2 items-center py-20'>
     
     <Header />
      <div className="hero-section w-[90%] lg:w-3/4 xl:w-3/5 2xl:w-1/2 h-24 md:h-32 flex justify-center items-center">
        <div className='flex w-full bg-white h-1/2 justify-between border-[1px] rounded-xl border-gray-300'>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className='w-3/6 outline-none border-r-[1px] border-gray-300 px-5 text-md md:text-lg' placeholder='Search job' />

        <select name="city" value={city} onChange={(e)=>setCity(e.target.value)} className='text-gray-600 outline-none w-2/6 px-3 text-sm md:text-md appearance-none'>
          <option value="None">Select City</option>
          <option value="islamabad">Islamabad</option>
          <option value="rawalpindi">Rawalpindi</option>
          <option value="lahore">Lahore</option>
          <option value="karachi">karachi</option>
          <option value="multan">Multan</option>
          <option value="peshawar">Peshawar</option>
          <option value="quetta">Quetta</option>
          <option value="faisalabad">Faisalabad</option>
          <option value="gilgit">Gilgit</option>
          <option value="mirpur">Mirpur</option>
          <option value="hyderabad">hyderabad</option>
          <option value="muzaffarabad">Muzaffarabad</option>
          <option value="sukkur">Sukkur</option>
          <option value="fata">Fata</option>
        </select>
      <button className=' w-2/6 md:w-1/6 bg-blue-400 text-white text-sm md:text-md md:text-xl font-semibold rounded-r-xl cursor-pointer'>Search</button>
        </div>
      </div>
     

      {filteredJobs.length > 0 ? (
  filteredJobs.map(job => (
    <Job
      key={job._id}
      title={job.title}
      description={job.description}
      company={job.company}
      education={job.education}
      age={job.age}
      salary={job.salary}
      experience={job.experience}
      location={job.location}
      isVerified={job.verifiedCompany}
      jobID={job._id}
    />
  ))
) : (
  <p className="text-center mt-4 text-gray-500">
    No jobs found matching your criteria.
  </p>
)}

     
    </div>
  )
}

export default Home
