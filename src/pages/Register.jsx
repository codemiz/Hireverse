import React from "react";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { signInWithPopup } from "firebase/auth";
import { Auth , googleProvider } from "../firebase";
import { signUp , googleLogin } from "../api";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import GoogleLoginButton from "../components/GoogleLoginButton";


function Register() {
  const [selectetedRole, setSelectetedRole] = useState("Employee")
  const {setUser} = useAuth()
  const navigate = useNavigate()
 
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm();

  async function onSubmit(data) {
    try {
          const res = await signUp(data,selectetedRole)
          setUser(res.data.user)
          setTimeout(() => {
                navigate("/verification")
              }, 200);
       } catch (error) {
        if(error.response && error.response.status === 400){
          setError("password" ,{
            type: "manual" ,
            message: "email already exists. try signing in."
          })
        }
        else if(error.response && error.response.status === 500){
          setError("password" ,{
            type: "manual" ,
            message: "server error. please try again."
          })
          
        }
       }
  }
  return (
    <div className="w-full h-screen bg-blue-50 flex flex-col gap-2 justify-center items-center">
      

     
      <div className=" w-11/12 sm:w-9/12 md:w-8/12 lg:w-5/12 xl:w-4/12 2xl:w-[28%] min-h-4/6 bg-white shadow flex flex-col items-center pt-8 pb-8 rounded-2xl gap-3">
       <img
        src="./logo.png"
        width={100}
        className="mb-2"
        alt=""
      />
        <p className="font-light text-md">
         Select a role before signing up
        </p>
        <div className="flex w-[80%] justify-between h-12 ">
          <button onClick={() => setSelectetedRole("Employee")} className={`options border-[1px] ${selectetedRole=="Employee" ? "border-blue-400 bg-blue-50" : "border-gray-400"} cursor-pointer rounded-md flex w-[45%] py-1 px-2 text-lg text-gray-8900 items-center justify-center font-medium md:font-semibold hover:border-2`}>
            Employee
          </button>
          <button onClick={() => setSelectetedRole("Employer")} className={`options border-[1px] ${selectetedRole=="Employer" ? "border-blue-400 bg-blue-50" : "border-gray-400"} cursor-pointer rounded-md flex w-[45%] py-1 px-2 text-lg text-gray-700 items-center justify-center font-medium md:font-semibold hover:border-2`}>
            Employer
          </button>
        </div>
        {/* <div className="text-md font-light">Sign in using google</div>*/}
        <hr className="text-gray-400 w-4/5 my-3" />
        <GoogleLoginButton role={selectetedRole} />
        <div className="text-md font-light">or</div>
        <form
          className="w-full flex flex-col items-center  gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-4/5 flex flex-col items-start">
            <input
              type="text"
              {...register("name", {
                required: { value: true, message: "name is required" },
              })}
              className="w-full outline-blue-300 border h-12 px-3 border-gray-400 rounded-md"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="w-4/5 flex flex-col items-start">
            <input
              type="text"
              {...register("email", {
                required: { value: true, message: "email is required" },
              })}
              className="w-full border h-12 px-3 outline-blue-300 border-gray-400 rounded-md"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="w-4/5 flex flex-col items-start">
            <input
              type="password"
              {...register("password", {
                required: { value: true, message: "password is required" },
              })}
              className="w-full border outline-blue-300 h-12 px-3 border-gray-400 rounded-md"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="google w-4/5 border-[1px] border-gray-400 h-12 bg-blue-400 text-white font-semibold flex justify-center items-center text-lg rounded-md mt-1"
          >
            {isSubmitting ? <div className="w-6 h-6 border-4 border-blue-300 border-t-4 animate-spin border-t-white rounded-full"></div> : "Submit"}
          </button>
        <div className="flex justify-center w-4/5">
         <p className="font-light text-md">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-400">Log in</Link>
        </p>
        
        </div>
        </form>
      </div>
     
    
    </div>
  );
}

export default Register;
