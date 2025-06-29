import React from "react";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import { signInWithPopup } from "firebase/auth";
import { Auth , googleProvider } from "../firebase";
import { signUp } from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";


function Register() {
  const [selectetedRole, setSelectetedRole] = useState("Employee")
  const {setUser} = useAuth()
  const nevigate = useNavigate()
  const googleLogin = async () =>{
    try {
      const result  = await signInWithPopup(Auth,googleProvider);
      const user = result.user
      const token = await user.getIdToken()

      console.log("User" , user);
      console.log("token" , token);
      
      
    } catch (error) {
      console.log(error.message);
      
    }
  }
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm();

  async function onSubmit(data) {
    console.log(data);
    const res = await signUp(data,selectetedRole)
    setUser(res.data.user)
    nevigate("/profile")

  }
  return (
    <div className="w-full h-screen bg-blue-50 flex flex-col gap-2 justify-center items-center">
      <img
        src="./logo2.png"
        width={100}
        className="absolute left-2 top-2"
        alt=""
      />

      {!isSubmitted ?
      <div className=" w-11/12 sm:w-9/12 md:w-8/12 lg:w-5/12 xl:w-4/12 2xl:w-[28%] min-h-4/6 bg-white shadow flex flex-col items-center pt-8 pb-5 rounded-2xl gap-4">
        <div className="text-3xl text-gray-500 font-bold mb-6">
          Welcome to jobnest.
        </div>
        <p className="font-light text-md">
          Login to your account or{" "}
          <span className="text-blue-400">sign up</span>
        </p>
        <div className="flex w-[80%] justify-between h-12 ">
          <button onClick={() => setSelectetedRole("Employee")} className={`options border-[1px] ${selectetedRole=="Employee" ? "border-blue-400 bg-blue-50" : "border-gray-400"} cursor-pointer rounded-md flex w-[45%] py-1 px-2 text-lg text-gray-8900 items-center justify-center font-semibold hover:border-2`}>
            Employee Login
          </button>
          <button onClick={() => setSelectetedRole("Employer")} className={`options border-[1px] ${selectetedRole=="Employer" ? "border-blue-400 bg-blue-50" : "border-gray-400"} cursor-pointer rounded-md flex w-[45%] py-1 px-2 text-lg text-gray-700 items-center justify-center font-semibold hover:border-2`}>
            Employer Login
          </button>
        </div>
        {/* <div className="text-md font-light">Sign in using google</div>         */}
        <hr className="text-gray-400 w-4/5 my-4" />
        <div onClick={googleLogin} className="google w-4/5 border-[1px] border-gray-400 h-12 flex gap-1.5 justify-center items-center text-lg font-normal font- rounded-md">
          <img
            className="w-5 h-5"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span>Login with Google</span>
        </div>
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
              className="w-full border h-12 px-3 border-gray-400 rounded-md"
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
              className="w-full border h-12 px-3 border-gray-400 rounded-md"
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
              className="w-full border h-12 px-3 border-gray-400 rounded-md"
              placeholder="Enter your email"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="google w-4/5 border-[1px] border-gray-400 h-12 bg-blue-400 text-white font-semibold flex justify-center items-center text-lg rounded-md"
          >
            Submit
          </button>
        <div className="flex justify-between w-4/5">
          <div className="text-md font-light text-blue-400">Register</div>
          <div className="text-md font-light text-blue-400">
            Forgot Password?
          </div>
        </div>
        </form>
      </div>
      :
      <div className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-5/12 xl:w-4/12 2xl:w-[25%] h-2/6 bg-white shadow flex flex-col items-center pt-8 rounded-2xl gap-4">
    <div className='text-2xl text-gray-500 font-semibold mb-6'>Reset your password</div>
    {/* <p className='font-light text-md'>We'll send a code to your email</p> */}
    {/* <p className='font-light text-md'>Enter the code your recieved om your email.</p> */}
    <p className='font-light text-md'>Choose the new password.</p>
    
    {/* <input type="email" className='w-4/5 border h-12 px-3 border-gray-400 rounded-md' placeholder='Enter your email' />         */}
    {/* <input type="text" maxLength={6} className='w-4/5 border h-12 px-3 border-gray-400 rounded-md' />         */}
    <input type="password" className='w-4/5 border h-12 px-3 border-gray-400 rounded-md' placeholder='Password' />        
    <button className="google w-4/5 border-[1px] border-gray-400 h-12 bg-blue-400 text-white font-semibold flex justify-center items-center text-lg rounded-md">Submit</button>

     <div className='flex gap-1 mt-5 items-center'>
    <div className="circle w-[10px] h-[10px]  border-[1px] border-gray-500 rounded-full"></div>    
    <div className="circle w-[12px] h-[12px] bg-blue-400 border-[1px] border-blue-400 rounded-full"></div>    
    <div className="circle w-[10px] h-[10px]  border-[1px] border-gray-500 rounded-full"></div>    
    </div>    
   </div>
   }
      <Footer />
    </div>
  );
}

export default Register;
