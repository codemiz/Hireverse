import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";
import Job from "./Job";
import { uploadAvatar } from "../api";

function EmployerProfile() {
  const { user } = useAuth();
  const [preview, setPreview] = useState(user.avatar || "/profile-pic.jpg");
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
  


  // useEffect(() => {
    
 
    
  // }, [selectedFile])
  

  function changeProfilePicture(){
    fileInputRef.current.click()
    
  }
  return (
    <div className="w-full min-h-screen bg-blue-50 flex flex-col gap-2 items-center py-20">
      <Header />

      <div className="posted-jobs-div w-[90%] lg:w-3/4  xl:w-3/5 2xl:w-1/2 h-60 flex justify-center flex-col md:flex-row items-center md:items-center md:justify-start  bg-blue-100 shadow rounded-2xl gap-3 py-4 px-11">
        <div className="image-div flex justify-center md:justify-start ">
          <div className="w-[136px] md:w-44 md:h-44 h-[136px] rounded-full">
            <img src={preview} className="rounded-full" alt="" />
            <div onClick={changeProfilePicture} className="circle w-8 h-8 md:w-10 md:h-10 border-2 border-gray-400 flex justify-center items-center bg-gray-200 rounded-full relative left-[110px] md:left-36 top-[-50px] md:top-[-70px]">
              <img src="/camera-icon.png" className="w-[18px] md:w-6" alt="" />
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
        </div>
        <div className=" flex flex-col items-center">
          <p className="text-3xl md:text-4xl font-bold text-gray-700">
            {user.name}
          </p>
          {user.company && (
            <p className="text-md md:text-xl flex items-center gap-1 justify-center font-medium text-gray-700">
              {user.company.name}{" "}
              <img
                src="/check.png"
                className="w-[14px] h-[14px] mt-[1px]"
                alt=""
              />
            </p>
          )}
          {/* <p className='text-sm md:text-md font-thin text-gray-700'>Jobs Posted: {user.postedJobs.length}</p> */}
        </div>
      </div>

      <p className="text-xl w-[90%] lg:w-3/4  xl:w-3/5 2xl:w-1/2 text-center h-10 flex justify-center items-center bg-gray-50 rounded shadow text-gray-700 mt-2">
        My Jobs ({user.postedJobs.length})
      </p>

      {/* {user.postedJobs.length > 0 ? (
        <Job />
      ) : (
        <p className="font-light text-md mt-3">
          You have not posted any jobs yet.
        </p>
      )} */}

      <Footer />
    </div>
  );
}

export default EmployerProfile;
