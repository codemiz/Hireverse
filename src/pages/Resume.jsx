import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

function Resume() {

  const {user , loading} = useAuth()

  if (loading) return <p>loading</p>
  return (
    <div className="w-full h-[1500px] bg-blue-50 flex flex-col gap-2 items-center pt-20">
      <Header />
      {user.resume ? 
      <>
      <p className="text-3xl font-semibold">Your resume</p>
      <hr className="text-gray-400 w-[90%] my-4" />
      <div className="cv w-[90%] lg:w-3/4 xl:w-3/5 2xl:w-1/2 bg-white shadow py-14 px-2 md:px-6 flex flex-col items-center">
        <div className="image-div w-11/12 flex justify-center md:justify-start ">
        <div className="w-52 h-52 rounded-full mb-12">
            
          <img src={user.resume.pictureURL} className="rounded-full" alt="" />
          
        </div>
        </div>

        <div className="flex w-11/12 flex-col gap-4 justify-center text-gray-600 items-center">
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
                value={user.resume.firstName}
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
                  value={user.resume.lastName}
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
              value={user.resume.about}
              disabled
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
              value={user.resume.skill}
              disabled
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
                value={user.resume.degree}
                disabled
                placeholder="Degree name"
                className="w-full border border-gray-400  rounded-md h-10 px-2"
              />
            </div>

            <div className="w-full md:w-3/6 flex flex-col items-end justify-end">
                <input
                  type="text"
                   value={user.resume.institute}
                   disabled
                  placeholder="Institute"
                  className="w-full border border-gray-400  rounded-md h-10 px-2"
                />
            </div>
            <div className="w-full md:w-1/6 flex flex-col items-end justify-end">
                <input
                  type="text"
                   value={user.resume.gpa}
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
                 value={user.resume.mobileNumber}
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
                   value={user.resume.email}
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
                 value={user.resume.exJobTitle}
                 disabled
                placeholder="Job title"
                className="w-full border border-gray-400  rounded-md h-10 px-2"
              />
            </div>

            <div className="w-full md:w-2/5 flex flex-col items-end justify-end">
                <input
                  type="text"
                   value={user.resume.exCompany}
                   disabled
                  placeholder="Company name"
                  className="w-full border border-gray-400  rounded-md h-10 px-2"
                />
            </div>
            <div className="w-full md:w-1/5 flex flex-col items-end justify-end">
                <input
                  type="text"
                   value={user.resume.workYears}
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
              name="languages"
              value={user.resume.languages}
              disabled
              rows={1}
              cols={100}
              className="border w-full px-2 py-1 rounded-md border-gray-400"
              maxLength={25}
              placeholder="Seperate with comma"
            ></textarea>
          </div>
          
        </div>
      </div>
      <div className="buttonw-[90%] lg:w-3/4 xl:w-3/5 2xl:w-1/2 flex gap-2 justify-center mt-2">
        <NavLink to={"/cv/edit"} className="bg-blue-400 px-4 py-1 text-white font-medium w-full text-center h-10 text-lg rounded-md">Update</NavLink>
       
      </div>
      </>
      :
      <>
      <div className=" w-[90%] h-screen flex gap-2 flex-col justify-center items-center">
       <p className="text-xl font-thin">You have not created a resume yet. Create one to apply for jobs.</p>
        <NavLink to={"/cv/edit"} className="bg-blue-400 px-10 py-1 text-white font-thin h-10 text-lg rounded-lg">Create</NavLink>
      </div>
      </>
      }
    
    </div>
  );
}

export default Resume;
