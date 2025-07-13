import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAuth } from '../context/AuthContext'
import Job from './Job'
import { uploadAvatar } from "../api";


function Profile() {
  const {user} = useAuth()
  const [preview, setPreview] = useState(user.avatar);
  const [status, setStatus] = useState("Applied");
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    function handlePictureChange(e) {
      const file = e.target.files[0];
      if (file) {
        setSelectedFile(file);
        const previewURL = URL.createObjectURL(file);
        setPreview(previewURL);
        const formData = new FormData();
  
        formData.append("avatar", file);
      
         uploadAvatar(formData)
        console.log(previewURL);
      }
    }
    
  
 
  return (
    <div  className="w-full min-h-screen bg-blue-50 flex flex-col gap-2 items-center py-20">
     <Header />
      
      <div className='w-[90%] lg:w-3/4  xl:w-3/5 2xl:w-1/2 flex flex-col md:flex-row items-center gap-2 md:gap-3'>
        
    
            <div className="image-div w-full md:w-1/2 md:h-[500px] flex justify-center flex-col items-center bg-white shadow rounded-2xl gap-3 md:gap-4 py-3">
            <div className="relative w-52 h-52 lg:w-64 lg:h-64 flex justify-center items-center rounded-full border border-gray-500">
              <img src={preview} className="rounded-full w-full h-full object-cover lg:w-64" alt="" />
               <div onClick={()=>fileInputRef.current.click()} className="circle w-10 h-10 lg:w-12 lg:h-12 border-2 border-gray-400 flex justify-center items-center bg-gray-200 rounded-full absolute left-44 lg:left-54 top-32 lg:top-40">
                <img src="/camera-icon.png" className="w-5 lg:w-7 cursor-pointer" alt="" />
              </div>
             <input
              type="file"
              accept="image/*"
              name="avatar"
              onChange={(e) => {
                handlePictureChange(e);
                
              }}
              ref={fileInputRef}
              className="hidden"
            />
            </div>
          <p className='text-3xl font-bold text-gray-700'>{user.name}</p>
           </div>
           <input
          type="file"
          accept="image/*"
          name="logo"
          onChange={(e)=>{
            handlePictureChange(e)
            setSelectedFile(e.target.files[0])
          }}
          ref={fileInputRef}
          className="hidden"
        />
           {/* <p className='text-2xl font-medium text-gray-700 mt-2'>My Jobs</p> */}
            <div className="w-full md:w-1/2 flex flex-col items-center gap-2">
           <div className="applied-div w-full md:w-full h-40 flex justify-between flex-col items-start  bg-green-200 shadow rounded-2xl gap-3 py-4 px-4">
              <p className='text-lg font-medium text-gray-700'>Applied</p>
              <div className="w-full flex justify-between items-end">
              <p className='text-4xl font-bold text-gray-700'>{user.appliedJobs.length}</p>
              <p className='text-md font-thin text-gray-700 mr-2'>&gt;</p>

              </div>
           </div>
           <div className="interviews-div w-full md:w-full h-40 flex justify-between flex-col items-start  bg-blue-200 shadow rounded-2xl gap-3 py-4 px-4">
              <p className='text-lg font-medium text-gray-700'>Interviews</p>
              <div className="w-full flex justify-between items-end">
              <p className='text-4xl font-bold text-gray-700'>{user.interviews.length}</p>
              <p className='text-md font-thin text-gray-700 mr-2'>&gt;</p>

              </div>
           </div>
          <div className="rejected-div w-full md:w-full h-40 flex justify-between flex-col items-start  bg-red-200 shadow rounded-2xl gap-3 py-4 px-4">
              <p className='text-lg font-medium text-gray-700'>Rejected</p>
              <div className="w-full flex justify-between items-end">
              <p className='text-4xl font-bold text-gray-700'>{user.rejectedJobs.length}</p>
              <p className='text-md font-thin text-gray-700 mr-2'> &gt;</p>

              </div>
          </div>
        </div>
       </div>
         {/* <p className='text-xl w-[90%] lg:w-3/4  xl:w-3/5 2xl:w-1/2 text-center font-medium text-gray-700 mt-2'>My jobs</p> */}
         <div className='text-md w-[90%] lg:w-3/4  xl:w-3/5 2xl:w-1/2 flex justify-between bg-white rounded shadow overflow-hidden font-thin text-gray-700 mt-2'>
         <div onClick={()=>setStatus("Applied")} className={`w-1/2 hover:bg-gray-100 cursor-pointer py-1 ${status=="Applied" ? "bg-gray-200" : "bg-white"} bg-gray-200 text-center`}>Applied</div>
         <div onClick={()=>setStatus("Interviews")} className={`w-1/2 hover:bg-gray-100 cursor-pointer py-1 ${status=="Interviews" ? "bg-gray-200" : "bg-white"} border-l border-gray-400 text-center`}>Interviews</div>
        
         </div>

          {status == "Applied" ? 
            user.appliedJobs.length > 0 ? (
              user.appliedJobs.map((job,index)=>(
                
                <Job key={job._id} title={job.title} description={job.description} company={job.company} education={job.education} age={job.age} salary={job.salary} experience={job.experience} location={job.location}  isVerified={job.verifiedCompany} jobID={job._id}/>
              ))
            ) : (
              <p className="font-light text-md mt-3">
              You have not applied to any jobs yet.
              </p>
            ) :
            user.interviews.length > 0 ? (
              user.interviews.map((interview,index)=>(
                
              <div className='w-full flex flex-col gap-4 items-center py-2'>

                     <div className="job-div relative bg-white w-[90%] lg:w-3/4 xl:w-3/5 2xl:w-1/2 min-h-48 border border-gray-300 rounded-2xl shadow flex flex-col pl-4 pr-8 py-3 justify-between cursor-pointer hover:bg-gray-100 hover:border-gray-500">
                        <div>
                        <h1 className='text-2xl font-semibold text-gray-800 mt-1'>Job : {interview.jobTitle}</h1>
                        <p className='text-xl font-medium flex items-center gap-1'>company <img src="/check.png" className='mt-1' width={14} alt="check=mark" /></p>
                        <p className='text-sm font-light'>{interview.location}</p>

                        <p className='text-sm font-normal mt-2'>{interview.notes}</p>
                        </div>
                        <div className='w-full mt-2 flex flex-wrap gap-1.5 xl:gap-3'>
                        <span className='bg-gray-200  text-sm px-3 py-1 rounded-2xl'>{interview.date}</span>
                        <span className='bg-gray-200  text-sm px-3 py-1 rounded-2xl'>{interview.time}</span>
                        <span className={`${interview.status == "Active" ? 'bg-green-600' : 'bg-red-600'} absolute right-4 bottom-3 font-medium text-white text-md px-5 py-1 rounded-2xl`}>{interview.status}</span>
                        </div>
                    </div>
      
       
               </div>
              ))
            ) : (
              <p className="font-light text-md mt-3">
              You have recieved any interview invites yet.
              </p>
            )
          }
      <Footer />
    </div>
  )
}

export default Profile
