import React from "react";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { signInWithPopup } from "firebase/auth";
import { Auth , googleProvider } from "../firebase";
import axios from "axios"
import { useState } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [selectetedRole, setSelectetedRole] = useState("Employee")

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
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
   login(data)
  }
  return (
    <div className="w-full h-screen bg-blue-50 flex flex-col gap-2 justify-center items-center">
      <img
        src="./logo2.png"
        width={100}
        className="absolute left-2 top-2"
        alt=""
      />
      <div className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-5/12 xl:w-4/12 2xl:w-[28%] h-4/6 bg-white shadow flex flex-col items-center pt-8 rounded-2xl gap-4">
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
      <Footer />
    </div>
  );
}

export default Login;
