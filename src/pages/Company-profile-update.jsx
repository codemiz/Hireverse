import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useAuth } from "../context/AuthContext";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { editCompany } from '../api';



function CompanyProfileUpdate() {
    const {setUser , user} = useAuth()
    const navigate = useNavigate()
    const {register  , setError , handleSubmit , formState : {errors , isSubmitting}} = useForm()
    
    async function formSubmit (data) {
        
        console.log(data);
        try {
            
          const res = await editCompany(data)
          setUser(res.data.user)
          setTimeout(() => {
            navigate("/employer/company")
          }, 400);
        } catch (error) {
          
        }
      }
  return (
     <div className="w-full h-[1500px] bg-blue-50 flex flex-col gap-2 items-center pt-20">
    <Header />
    <p className="text-3xl font-semibold">Add you company details</p>
    <hr className="text-gray-400 w-[90%] my-4" />
    <div className="cv w-[90%] lg:w-3/4 xl:w-3/5 2xl:w-1/2 bg-white shadow py-14 px-2 md:px-6 flex flex-col items-center">
      <div className="image-div w-11/12 flex justify-center md:justify-start ">
      <div className="w-52 h-52 rounded-full mb-12">
          
        <img src="/profile-pic.jpg" className="rounded-full" alt="" />
        <div className="circle w-12 h-12 border-2 border-gray-400 flex justify-center items-center bg-gray-200 rounded-full relative left-40 top-[-70px]">
          <img src="/camera-icon.png" width={30} alt="" />
        </div>
      </div>
      </div>

      <form onSubmit={handleSubmit(formSubmit)} className="flex w-11/12 flex-col gap-4 justify-center items-center">
      <div className="name w-full flex flex-col">
          <label htmlFor="name" className="text-lg font-medium text-gray-700">
            Company Name:
          </label>
          <textarea
            name="name"
            {...register("name")}
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
             {...register("about")}
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
              {...register("number")}
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
                {...register("email")}
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
            {...register("location")}
            rows={1}
            cols={100}
            className="border w-full px-2 py-1 rounded-md border-gray-400"
            maxLength={25}
            placeholder="The city in which your company is based in"
          ></textarea>
        </div>
    <div className="buttons w-full flex gap-2 justify-center mt-2">
        <button className="bg-blue-400 px-4 py-1 text-white font-medium w-1/2  h-10 text-lg rounded-md">Go Back</button>
        <button type='submit' className="bg-blue-400 px-4 py-1 text-white font-medium w-1/2  h-10 text-lg rounded-md">Save</button>
      </div>
      </form>
    </div>
    <Footer />
  </div>
  )
}

export default CompanyProfileUpdate