import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { useForm } from 'react-hook-form';
import { editResume } from '../api';
import { useNavigate } from "react-router-dom";
function CvEditor() {
  const {setUser , user} = useAuth()
  const navigate = useNavigate()
  const {register  , setError , handleSubmit , formState : {errors , isSubmitting}} = useForm()

  async function formSubmit (data) {
    
    try {
      const res = await editResume(data)
      setUser(res.data.user)
      setTimeout(() => {
        navigate("/resume")
      }, 400);
    } catch (error) {
      
    }
  }
  return (
   <div className="w-full h-[1400px] bg-blue-50 flex flex-col gap-2 items-center pt-20">
         <Header />
       
         <p className="text-3xl font-semibold">Create your resume</p>
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
                {...register("firstName")}
                className="w-full md:w-4/5 border border-gray-400  rounded-md h-10 px-2"
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
                   {...register("lastName")}
                  className="w-full border border-gray-400  rounded-md h-10 px-2"
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
              id=""
               {...register("about")}
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
              id=""
              rows={1}
               {...register("skill")}
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
                 {...register("degree")}
                placeholder="Degree name"
                className="w-full border border-gray-400  rounded-md h-10 px-2"
              />
            </div>

            <div className="w-full md:w-3/6 flex flex-col items-end justify-end">
                <input
                  type="text"
                   {...register("institute")}
                  placeholder="Institute"
                  className="w-full border border-gray-400  rounded-md h-10 px-2"
                />
            </div>
            <div className="w-full md:w-1/6 flex flex-col items-end justify-end">
                <input
                  type="text"
                   {...register("gpa")}
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
                  className="w-full border border-gray-400 rounded-md h-10 px-2"
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
                 {...register("jobTitle")}
                placeholder="Job title"
                className="w-full border border-gray-400  rounded-md h-10 px-2"
              />
            </div>

            <div className="w-full md:w-2/5 flex flex-col items-end justify-end">
                <input
                  type="text"
                   {...register("company")}
                  placeholder="Company name"
                  className="w-full border border-gray-400  rounded-md h-10 px-2"
                />
            </div>
            <div className="w-full md:w-1/5 flex flex-col items-end justify-end">
                <input
                  type="text"
                   {...register("workYears")}
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
              name="languages"
               {...register("languages")}
              id=""
              rows={1}
              cols={100}
              className="border w-full px-2 py-1 rounded-md border-gray-400"
              maxLength={25}
              placeholder="Seperate with comma"
            ></textarea>
          </div>
          
         <div className="buttons w-[90%] flex gap-2 justify-center mt-2">
           <button type='submit' className="bg-blue-400 px-10 py-1 text-white font-medium h-10 text-lg rounded-md">Save</button>
         </div>
        </form>
      </div>
         
       <Footer />
       </div>
  )
}

export default CvEditor