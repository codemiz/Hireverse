import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { previewJob , applyJob } from '../api'
import { useAuth } from '../context/AuthContext'
import { NavLink } from 'react-router-dom'
import Loading from '../components/Loading'

function JobPreview() {
  const {jobId} = useParams()
  const {user} = useAuth()
  const [job, setJob] = useState()
  const [loading, setLoading] = useState(true)
  const [applyingloading, setApplyingLoading] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {

  previewJob(jobId)
  .then(res => setJob(res.data.job))
  .catch(err => setJob(null))
  .finally(()=>setLoading(false))
  }, [])

  useEffect(() => {
    console.log(job);
    
  
    
  }, [job])
  

  function jobApply(){
    setShowPopup(true)
    setApplyingLoading(true)
    applyJob(job._id)
    .then(res =>{
      setApplyingLoading(false)
      setTimeout(() => {
        setShowPopup(false)
        location.reload()
      }, 2000);
    })
    .catch(err =>{
      setShowPopup(false)
      setApplyingLoading(false)
      alert("Jobs Application failed. Try again")
    })

  }
  if (loading) return <Loading />
  return (
    <div className="w-full min-h-screen bg-blue-50 flex flex-col gap-2 items-center py-20">
      <Header />

    {showPopup &&
      <div className="popup w-[60%] md:w-1/3 lg:w-1/4 h-68 bg-white border border-gray-300 flex shadow-md absolute top-1/3 justify-center items-center">

        {applyingloading ? 
        <div className="loading w-24 h-24 border-b-2 border-r-2 animate-spin rounded-full border-blue-500"></div>
        :

        <div className='flex flex-col items-center gap-2 text-lg font-medium text-blue-500'>
         <img src="/check.png" width={100} alt="" />

          <p>Successfully Applied</p>
        </div>
        }
      </div>
    }
      <div className="w-[90%] lg:w-3/4 xl:w-3/5 2xl:w-2/5 bg-white shadow pt-8 pb-6 px-4 md:px-6 flex flex-col rounded-sm items-start">
          <div className='flex w-full flex-col justify-between gap-2 '>
          <h1 className='text-2xl md:text-3xl font-semibold text-gray-800'>{job.title}</h1>
          {user && 
          job.applicants.some(obj => (obj._id == user._id)) ?
            
            <p className={`text-green-500 font-thin`}>Applied.</p>
            :
            (user.resume && user.role == "Employee") ? 
            <button onClick={jobApply} className={`px-4 w-32 md:w-40 py-1 ${(user && user.role == "Employee" ? "bg-blue-400" : "hidden")} text-white font-medium w-1/2 h-10 text-md md:text-lg rounded-md cursor-pointer`}>Apply</button>
            :
            <p className={`font-thin`}>Create your resume before applying.</p>
          }
          </div>
          
          {/* <button className="bg-blue-400 px-6 py-1.5 text-white font-medium text-md rounded-full mt-2">Apply</button> */}
          <hr className='text-gray-400 w-[100%] mt-4 mb-2' />
          <p className='text-xl font-medium flex items-center gap-1'>{job.company} {job.verifiedCompany &&  <img src="/check.png" width={14} alt="check=mark" /> }</p>
          <p className='text-sm font-light'>{job.location}</p>
          <p className='text-xl font-medium mt-8'>Job Description</p>
          <hr className='text-gray-400 w-[90%] my-2' />
          <p className='text-md font-light'>{job.description}</p>
          <div className=' flex flex-col gap-1.5 xl:gap-3 mt-8 '>
          <p className='text-xl border-b border-gray-400 pr-1 font-medium'>Requirements & Incentives</p>
            <span className=' text-sm'><b>Education:</b> {job.education}</span>
            <span className=' text-sm'><b>Experience:</b> {job.experience}</span>
            <span className=' text-sm'><b>Age:</b> {job.age}</span>
            <span className=' text-sm'><b>Salery:</b> {job.salary}</span>
            {job.incentiveOne && 
            <span className=' text-sm'><b>Additional Incentive:</b> {job.incentiveOne}</span>
          }
            {job.incentiveTwo && 
            <span className=' text-sm'><b>Additional Incentive:</b> {job.incentiveTwo}</span>
          }
          
          <p className={`text-red-500 ${(!user? "block" : "hidden")} font-thin mt-4`}>Login to apply for jobs.</p>
            </div>
      </div>
      { (user && user.role == "Employer") &&
      <>
        <p className="text-xl w-[90%] lg:w-3/4  xl:w-3/5 2xl:w-1/2 text-center h-10 flex justify-center items-center bg-gray-50 rounded shadow text-gray-700 mt-2">
        Applicants ({job.applicants.length})
      </p>

       <div className="job-div bg-white w-[90%] lg:w-3/4 xl:w-3/5 2xl:w-1/2 min-h-32 border border-gray-300 rounded-2xl gap-2 shadow flex flex-col px-4 py-10 justify-between cursor-pointer items-center  hover:border-gray-500">
       {job.applicants.map((applicant,index)=>(
         <div className='flex hover:bg-gray-100 justify-between items-center py-4 w-full border-b border-gray-400 px-3'>
             <p className='text-2xl text-gray-600'>{index+1}. {applicant.name}</p>
             {applicant.resume ?
             <NavLink to={`/applicant/resume/preview/${applicant.resume}/${job._id}`} className={`px-4 py-1 text-white font-thin bg-blue-400 text-sm md:text-md rounded-md cursor-pointer`}>view resume</NavLink>
            :
             <p className='text-sm font-thin text-gray-600'>No resume</p>
            }
            </div>
       ))}
           
            
           
        </div>
       </>
      }
    </div>
  )
}

export default JobPreview
