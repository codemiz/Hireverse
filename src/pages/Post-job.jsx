import React from 'react'
import Header from '../components/Header'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { postJob } from '../api';

function PostJob() {
  const navigate = useNavigate()
   
  const {register  , setError , handleSubmit , formState : {errors , isSubmitting}} = useForm()
  
  async function formSubmit (data) {
      console.log(data);
      
      try {
        const res = await postJob(data)
        // setUser(res.data.user)
        setTimeout(() => {
          navigate("/")
        }, 400);
      } catch (error) {
        
      }
    }
  return (
    <div  className="w-full min-h-screen bg-blue-50 flex flex-col gap-2 items-center py-20">
      <Header />
      <p className="text-3xl font-semibold text-gray-700">Post a job</p>
      <hr className="text-gray-400 w-[90%]  lg:w-3/4 xl:w-3/5 2xl:w-2/5 my-3" />
      <form className="job-post w-[90%] lg:w-3/4 xl:w-3/5 2xl:w-2/5 bg-white shadow py-14 px-2 md:px-6 flex flex-col items-center">
        

        <div className="flex w-11/12 flex-col gap-4 justify-center items-center">
        <div className="job-title w-full flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
             Job title:
            </label>
            <textarea
              name="title"
              {...register("title")}
              rows={1}
              cols={100}
              className="border w-full px-2 py-1 rounded-md border-gray-400"
              maxLength={25}
             
            ></textarea>
          </div>
          <div className="company-name-div flex w-full gap-2">
            <div className="w-full">
              <label
                htmlFor="name"
                className="text-lg font-medium text-gray-700"
              >
               Company Name:
              </label>
              <input
                type="text"
                {...register("company")}
                className="w-full border border-gray-400  rounded-md h-10 px-2"
              />
            </div>

            
          </div>
          <div className="description w-full flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
              Job Desciption:
            </label>
            <textarea
              name="description"
              {...register("description")}
              rows={15}
              cols={100}
              className="border w-full px-2 py-1 rounded-md border-gray-400"
              
            ></textarea>
          </div>
         

          <div className="requirements-div flex flex-col md:flex-row w-full gap-1">
            <div className="w-full md:w-2/6">
              <label
                htmlFor="name"
                className="text-lg font-medium text-gray-700"
              >
                Requirements:
              </label>
              <input
                type="text"
                 {...register("education")}
                placeholder="Education"
                className="w-full border border-gray-400  rounded-md h-10 px-2"
              />
            </div>

            <div className="w-full md:w-3/6 flex flex-col items-end justify-end">
                <input
                  type="text"
                   {...register("experience")}
                  placeholder="Experience"
                  className="w-full border border-gray-400  rounded-md h-10 px-2"
                />
            </div>
            <div className="w-full md:w-1/6 flex flex-col items-end justify-end">
                <input
                  type="text"
                   {...register("age")}
                  placeholder="Age"
                  className="w-full border border-gray-400  rounded-md h-10 px-2"
                />
            </div>
          </div>
          
          <div className="Offerings-div flex flex-col md:flex-row w-full gap-1">
            <div className="w-full md:w-2/6">
              <label
                htmlFor="name"
                className="text-lg font-medium text-gray-700"
              >
                Offerings:
              </label>
              <input
                type="text"
                 {...register("salary")}
                placeholder="Salary"
                className="w-full border border-gray-400  rounded-md h-10 px-2"
              />
            </div>

            <div className="w-full md:w-2/6 flex flex-col items-end justify-end">
                <input
                  type="text"
                  {...register("incentiveOne")}
                  placeholder="Other Incentives ( if any )"
                  className="w-full border border-gray-400  rounded-md h-10 px-2"
                />
            </div>
            <div className="w-full md:w-2/6 flex flex-col items-end justify-end">
                <input
                  type="text"
                  {...register("incentiveTwo")}
                  placeholder="Other Incentives ( if any )"
                  className="w-full border border-gray-400  rounded-md h-10 px-2"
                />
            </div>
          </div>
         
          <div className="languages w-full flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
              Job Location:
            </label>
            <textarea
              name="location"
              {...register("location")}
              rows={1}
              cols={100}
              className="border w-full px-2 py-1 rounded-md border-gray-400"
              maxLength={25}
              placeholder="City Name"
            ></textarea>
          </div>
          
        </div>
      </form>
      <div className="buttons w-[90%] lg:w-3/4 xl:w-3/5 2xl:w-2/5 flex gap-2 justify-center mt-2">
        <button className="bg-blue-400 px-4 py-1 text-white font-medium w-1/2  h-10 text-lg rounded-md">Go Back</button>
        <button onClick={handleSubmit(formSubmit)} className="bg-blue-400 px-4 py-1 text-white font-medium w-1/2  h-10 text-lg rounded-md">Post Job</button>
      </div>
    </div>
  )
}

export default PostJob
