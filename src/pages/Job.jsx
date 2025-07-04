import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

function Job({title , company ,description , education , age , experience ,salary, location , isVerified , jobID}) {
  const navigate = useNavigate()
  
  return (
    <div className='w-full flex flex-col gap-4 items-center py-2'>

        <div onClick={()=>navigate(`/job/preview/${jobID}`)} className="job-div bg-white w-[90%] lg:w-3/4 xl:w-3/5 2xl:w-1/2 h-48 border border-gray-300 rounded-2xl shadow flex flex-col pl-4 pr-8 py-3 justify-between cursor-pointer hover:bg-gray-100 hover:border-gray-500">
            <div>
            <h1 className='text-3xl font-bold text-gray-800'>{title}</h1>
            <p className='text-xl font-medium flex items-center gap-1'>{company}{isVerified &&  <img src="/check.png" className='mt-1' width={14} alt="check=mark" />}</p>
            <p className='text-sm font-light'>{location}</p>

            <p className='text-sm font-normal mt-2'>{description.slice(0,140)} ...</p>
            </div>
            <div className=' flex gap-1.5 xl:gap-3'>
            <span className='bg-gray-200 text-sm px-3 py-0.5 rounded-2xl'>{education}</span>
            <span className='bg-gray-200 text-sm px-3 py-0.5 rounded-2xl'>age: {age}</span>
            <span className='bg-gray-200 text-sm px-3 py-0.5 rounded-2xl'>{salary}</span>
            <span className='bg-gray-200 text-sm px-3 py-0.5 rounded-2xl'>exp - {experience}</span>
            </div>
        </div>
      
       
    
    </div>
  )
}

export default Job
