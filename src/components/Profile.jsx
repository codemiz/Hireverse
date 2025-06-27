import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Profile() {
  return (
    <div  className="w-full min-h-screen bg-blue-50 flex flex-col gap-2 items-center py-20">
     <Header />
      
      <div className='w-[90%] lg:w-3/4  xl:w-3/5 2xl:w-1/2 flex flex-col md:flex-row items-center gap-2 md:gap-3'>
        
    
            <div className="image-div w-11/12 md:w-1/2 md:h-[500px] flex justify-center flex-col items-center bg-white shadow rounded-2xl gap-3 md:gap-4 py-3">
            <div className="w-52 h-52 lg:w-64 lg:h-64 flex justify-center items-center rounded-full">
              <img src="./profile-pic.jpg" className="rounded-full lg:w-64" alt="" />
            </div>
          <p className='text-3xl font-bold text-gray-700'>Alex Smith</p>
           </div>
           {/* <p className='text-2xl font-medium text-gray-700 mt-2'>My Jobs</p> */}
            <div className="w-full md:w-1/2 flex flex-col items-center gap-2">
           <div className="applied-div w-11/12 md:w-full h-40 flex justify-between flex-col items-start  bg-green-200 shadow rounded-2xl gap-3 py-4 px-4">
              <p className='text-lg font-medium text-gray-700'>Applied</p>
              <div className="w-full flex justify-between items-end">
              <p className='text-4xl font-bold text-gray-700'>12</p>
              <p className='text-md font-thin text-gray-700 mr-2'>&gt;</p>

              </div>
           </div>
           <div className="interviews-div w-11/12 md:w-full h-40 flex justify-between flex-col items-start  bg-blue-200 shadow rounded-2xl gap-3 py-4 px-4">
              <p className='text-lg font-medium text-gray-700'>Interviews</p>
              <div className="w-full flex justify-between items-end">
              <p className='text-4xl font-bold text-gray-700'>08</p>
              <p className='text-md font-thin text-gray-700 mr-2'>&gt;</p>

              </div>
           </div>
          <div className="rejected-div w-11/12 md:w-full h-40 flex justify-between flex-col items-start  bg-red-200 shadow rounded-2xl gap-3 py-4 px-4">
              <p className='text-lg font-medium text-gray-700'>Rejected</p>
              <div className="w-full flex justify-between items-end">
              <p className='text-4xl font-bold text-gray-700'>02</p>
              <p className='text-md font-thin text-gray-700 mr-2'> &gt;</p>

              </div>
          </div>
        </div>
       </div>
         <p className='text-xl w-[90%] lg:w-3/4  xl:w-3/5 2xl:w-1/2 text-center bg-gray-50 rounded shadow font-thin text-gray-700 mt-2'>Your CV</p>
         <div className="cv w-[90%] lg:w-3/4 xl:w-3/5 2xl:w-1/2 bg-white shadow py-14 px-2 md:px-6 flex flex-col items-center">
        <div className="image-div w-11/12 flex justify-center md:justify-start ">
        <div className="w-52 h-52 rounded-full mb-12">
            
          <img src="./profile-pic.jpg" className="rounded-full" alt="" />
          
        </div>
        </div>

        <div className="flex w-11/12 flex-col gap-4 justify-center items-center text-gray-600">
          <div className="name-div flex w-full gap-2">
            <div className="w-2/4">
              <label
                htmlFor="name"
                className="text-lg font-medium text-gray-700"
              >
                First Name:
              </label>
              <input
                type="text"
                value={"Alex"}
                disabled
                className="w-full text-gray-600 md:w-4/5 border border-gray-400  rounded-md h-10 px-2"
              />
            </div>

            <div className="w-2/4 flex flex-col items-end">
              <div className="w-full md:w-4/5">
              
                <label
                  htmlFor="name"
                  className="text-lg font-medium text-gray-700"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  value={"Smith"}
                  disabled
                  className="w-full border text-gray-600 border-gray-400  rounded-md h-10 px-2"
                />
              </div>
            </div>
          </div>
          <div className="about w-full flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
              About Me:
            </label>
            <textarea
              name="about"
              value={"I am a experienced video editor."}
              disabled
              id=""
              rows={5}
              cols={100}
              className="border w-full px-2 py-1 rounded-md border-gray-400"
              placeholder="Describe yourself"
            ></textarea>
          </div>
          <div className="skill w-full flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
              Lead skill:
            </label>
            <textarea
              name="about"
              value={"Video editor"}
              disabled
              id=""
              rows={1}
              cols={100}
              className="border w-full px-2 py-1 rounded-md border-gray-400"
              maxLength={25}
              placeholder="i.e Graphics Designer"
            ></textarea>
          </div>

          <div className="education-div flex flex-col md:flex-row w-full gap-1">
            <div className="w-full md:w-2/6">
              <label
                htmlFor="name"
                className="text-lg font-medium text-gray-700"
              >
                Education:
              </label>
              <input
                type="text"
                value={"M.S Media Sciences"}
                disabled
                placeholder="Degree name"
                className="w-full border border-gray-400  rounded-md h-10 px-2"
              />
            </div>

            <div className="w-full md:w-3/6 flex flex-col items-end justify-end">
                <input
                  type="text"
                  value={"COMSATS Islamabad"}
                  disabled
                  placeholder="Institute"
                  className="w-full border border-gray-400  rounded-md h-10 px-2"
                />
            </div>
            <div className="w-full md:w-1/6 flex flex-col items-end justify-end">
                <input
                  type="text"
                  value={"3.45"}
                  disabled
                  placeholder="Marks/GPA"
                  className="w-full border border-gray-400  rounded-md h-10 px-2"
                />
            </div>
          </div>
          <div className="contact-div flex w-full gap-2">
            <div className="w-2/4">
              <label
                htmlFor="name"
                className="text-lg font-medium text-gray-700"
              >
                Mobile No:
              </label>
              <input
                type="text"
                value={"03365874526"}
                disabled
                maxLength={11}
                className="w-full md:w-4/5 border border-gray-400  rounded-md h-10 px-2"
              />
            </div>

            <div className="w-2/4 flex flex-col items-end">
              <div className="full md:w-4/5">
              
                <label
                  htmlFor="name"
                  className="text-lg font-medium text-gray-700"
                >
                  Email:
                </label>
                <input
                  type="text"
                  disabled
                  value={"email223@gmail.com"}
                  className="w-full border border-gray-400 rounded-md h-10 px-2 text-gray-600"
                />
              </div>
            </div>
          </div>
          <div className="experience-div flex flex-col md:flex-row w-full gap-1">
            <div className="w-full md:w-2/5">
              <label
                htmlFor="name"
                className="text-lg font-medium text-gray-700"
              >
                Experience:
              </label>
              <input
                type="text"
                value={"Lead video Editor"}
                disabled
                placeholder="Job title"
                className="w-full border border-gray-400  rounded-md h-10 px-2"
              />
            </div>

            <div className="w-full md:w-2/5 flex flex-col items-end justify-end">
                <input
                  type="text"
                  value={"GC Tech Lahore"}
                  disabled
                  placeholder="Company name"
                  className="w-full border border-gray-400  rounded-md h-10 px-2"
                />
            </div>
            <div className="w-full md:w-1/5 flex flex-col items-end justify-end">
                <input
                  type="text"
                  value={"2023-2024"}
                  disabled
                  placeholder="Working years"
                  className="w-full border border-gray-400  rounded-md h-10 px-2"
                />
            </div>
          </div>
         
          <div className="languages w-full flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
              Languages:
            </label>
            <textarea
              name="about"
              id=""
              rows={1}
              cols={100}
              value={"Urdu , English"}
              disabled
              className="border w-full px-2 py-1 rounded-md border-gray-400"
              maxLength={25}
              placeholder="Seperate with comma"
            ></textarea>
          </div>
          
        </div>
        </div>
        <div className="buttons w-[90%] flex gap-2 justify-center mt-2">
        <button className="bg-blue-400 px-4 py-1 text-white font-medium w-1/2 md:w-28 h-10 text-lg rounded-md">Update</button>
        <button className="bg-blue-400 px-4 py-1 text-white font-medium w-1/2 md:w-28 h-10 text-lg rounded-md">Download</button>
      </div>

      <Footer />
    </div>
  )
}

export default Profile
