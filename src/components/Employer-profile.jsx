import React from 'react'
import Footer from './Footer'
import Header from './Header'

function EmployerProfile() {
  return (
    <div  className="w-full min-h-screen bg-blue-50 flex flex-col gap-2 items-center py-20">
     <Header />
      
      
           <div className="posted-jobs-div w-[90%] lg:w-3/4  xl:w-3/5 2xl:w-1/2 h-40 flex justify-center flex-col items-start  bg-blue-100 shadow rounded-2xl gap-3 py-4 px-4">
              <p className='text-4xl font-bold text-gray-700'>Alex Smith</p>
              <div className="w-full flex justify-between items-end">
              <p className='text-xl font-thin text-gray-700'>Jobs Posted: 05</p>
              <p className='text-md font-thin text-gray-700 mr-2'>&gt;</p>

              </div>
           
           
        </div>
       
         <p className='text-xl w-[90%] lg:w-3/4  xl:w-3/5 2xl:w-1/2 text-center bg-gray-50 rounded shadow font-thin text-gray-700 mt-2'>Your Company Details</p>
         <div className="company-profile w-[90%] lg:w-3/4 xl:w-3/5 2xl:w-1/2 bg-white shadow py-14 px-2 md:px-6 flex flex-col items-center">
      <div className="image-div w-11/12 flex justify-center md:justify-start ">
      <div className="w-52 h-52 rounded-full mb-12">
        <img src="./logo2.png" className="rounded-full" alt="" />
      </div>
      </div>

      <div className="flex w-11/12 flex-col gap-4 justify-center text-gray-600 items-center">
      <div className="name w-full flex flex-col">
          <label htmlFor="name" className="text-lg font-medium text-gray-700">
            Company Name:
          </label>
          <textarea
            name="about"
            id=""
            value={"JobNext"}
            disabled
            rows={1}
            cols={100}
            className="border w-full px-2 py-1 rounded-md border-gray-400"
            maxLength={25}
            
          ></textarea>
        </div>
        <div className="about w-full flex flex-col">
          <label htmlFor="name" className="text-lg font-medium text-gray-700">
            About Us:
          </label>
          <textarea
            name="about"
            id=""
            value={"It's a job board company where people can apply for jobs at varius companies."}
            rows={5}
            disabled
            cols={100}
            className="border w-full px-2 py-1 rounded-md border-gray-400"
            placeholder="Describe your company"
          ></textarea>
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
              value={"03325684563"}
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
        
       
        <div className="location w-full flex flex-col">
          <label htmlFor="name" className="text-lg font-medium text-gray-700">
            Location:
          </label>
          <textarea
            name="about"
            id=""
            value={"Lahore"}
            rows={1}
            disabled
            cols={100}
            className="border w-full px-2 py-1 rounded-md border-gray-400"
            maxLength={25}
            placeholder="The city in which your company is based in"
          ></textarea>
        </div>
        
      </div>
    </div>
       
      <Footer />
    </div>
  )
}

export default EmployerProfile
