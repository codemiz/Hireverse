import React from 'react'
import { signInWithPopup } from "firebase/auth";
import { Auth , googleProvider } from "../firebase";
import { googleLogin } from "../api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function GoogleLoginButton({role}) {
    const {setUser} = useAuth()
    const nevigate = useNavigate()

     const googleAuth = async () =>{
        try {
          const result  = await signInWithPopup(Auth,googleProvider);
          const user = result.user
          const token = await user.getIdToken()
          const res =await googleLogin(token , role)
          setUser(res.data.user)
          setTimeout(() => {
            nevigate("/profile")
            
          }, 100);
          console.log("User" , user);
          console.log("token" , token);
          
          
        } catch (error) {
          console.log(error.message);
          
        }
      }
  return (
    <div onClick={googleAuth} className="google w-4/5 border-[1px] border-gray-400 h-12 flex gap-1.5 justify-center items-center text-lg font-normal font- rounded-md">
          <img
            className="w-5 h-5"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span>Login with Google</span>
        </div>
  )
}

export default GoogleLoginButton
