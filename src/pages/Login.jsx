import React from "react";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios"
import { useState } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const [selectetedRole, setSelectetedRole] = useState("Employee")
  const {setUser ,user} = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
   try {
      const res = await login(data)
      setUser(res.data.user)
      
      
      setTimeout(() => {
            navigate("/")
            
          }, 200);
   } catch (error) {
    if(error.response && error.response.status === 401){
      setError("password" ,{
        type: "manual" ,
        message: "incorrect password. please try again."
      })
    }
    else if(error.response && error.response.status === 404){
      setError("email" ,{
        type: "manual" ,
        message: "email is not registered. try signing up."
      })
      
    }
   }
  }



  
  return (
    <div className="w-full h-screen bg-blue-50 flex flex-col gap-2 justify-center items-center">
      
      <div className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-5/12 xl:w-4/12 2xl:w-[20%] min-h-[45%] bg-white shadow flex flex-col items-center pt-8 pb-8 rounded-2xl gap-4">
        <img
        src="./logo.png"
        width={100}
        className=""
        alt=""
      />
        <p className="font-light text-md">
          Login to your account or{" "}
          <span className="text-blue-400">sign up</span>
        </p>
        
       
        <hr className="text-gray-400 w-4/5 my-3" />
        <GoogleLoginButton role="Employee" />
        <div className="text-md font-light">or</div>
        <form
          className="w-full flex flex-col items-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-4/5 flex flex-col items-start">
            <input
              type="text"
              {...register("email", {
                required: { value: true, message: "email is required" },
              })}
              className="w-full border h-12 outline-blue-300 px-3 border-gray-400 rounded-md"
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
            className="google w-4/5 border-[1px] border-gray-400 h-12 bg-blue-400 text-white font-semibold flex justify-center items-center text-lg rounded-md"
          >
            {isSubmitting ? <div className="w-6 h-6 border-4 border-blue-300 border-t-4 animate-spin border-t-white rounded-full"></div> : "Submit"}
          </button>
        <div className="flex justify-between w-4/5">
          <NavLink to={"/onboarding"} className="text-md font-light text-blue-400">Register</NavLink>
          <NavLink to={"/password/reset"} className="text-md font-light text-blue-400">
            Forgot Password?
          </NavLink>
        </div>
        </form>
      </div>
      
    </div>
  );
}

export default Login;
