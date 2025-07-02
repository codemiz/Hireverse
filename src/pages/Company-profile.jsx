import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";


function CompanyProfile() {
  const {user , loading} = useAuth()
  return (
    <div className="w-full h-[1500px] bg-blue-50 flex flex-col gap-2 items-center pt-20">
    <Header />
    {user.company ? 
    <>
    <p className="text-3xl font-semibold">My company</p>
    <hr className="text-gray-400 w-[90%] my-4" />
    <div className="company w-[90%] lg:w-3/4 xl:w-3/5 2xl:w-1/2 bg-white shadow py-14 px-2 md:px-6 flex flex-col items-center">
      <div className="image-div w-11/12 flex justify-center md:justify-start ">
      <div className="w-52 h-52 rounded-full mb-12">
          
        <img src={user.company.logoURL} className="rounded-full" alt="" />
      </div>
      </div>

      <form className="flex w-11/12 text-gray-600 flex-col gap-4 justify-center items-center">
      <div className="name w-full flex flex-col">
          <label htmlFor="name" className="text-lg font-medium text-gray-700">
            Company Name:
          </label>
          <textarea
            name="about"
            value={user.company.name}
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
            value={user.company.about}
            disabled
            rows={5}
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
              value={user.company.number}
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
                value={user.company.email}
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
            rows={1}
            cols={100}
            value={user.company.location}
            disabled
            className="border w-full px-2 py-1 rounded-md border-gray-400"
            maxLength={25}
            placeholder="The city in which your company is based in"
          ></textarea>
        </div>
      </form>
    </div>
    <div className="buttons w-[90%] lg:w-3/4 xl:w-3/5 2xl:w-2/5 flex gap-2 justify-center mt-2">
        <NavLink to={"/employer/company/edit"} className="bg-blue-400 py-1 text-white font-medium px-20 h-10 text-lg rounded-md">Update Details</NavLink>
        {/* <button className="bg-blue-400 px-4 py-1 text-white font-medium w-1/2  h-10 text-lg rounded-md">Save</button> */}
    </div>
    </>
    :
       <div className=" w-[90%] h-screen flex gap-2 flex-col justify-center items-center">
             <p className="text-lg font-thin text-center">You have not added your company details yet. Add now to post jobs as a verified company.</p>
              <NavLink to={"/employer/company/edit"} className="bg-blue-400 px-10 py-1 text-white font-thin h-10 text-lg rounded-lg">Add Company</NavLink>
        </div>
}
    <Footer />
  </div>
  )
}

export default CompanyProfile
