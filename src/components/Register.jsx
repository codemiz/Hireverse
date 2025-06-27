import React from 'react'
import Footer from './Footer'

function Register() {
  return (
    <div className='w-full h-screen bg-blue-50 flex flex-col gap-2 justify-center items-center'>
    <img src="./logo2.png" width={100} className='absolute left-2 top-2' alt="" />
   <div className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-5/12 xl:w-4/12 2xl:w-[28%] h-3/4 bg-white shadow flex flex-col items-center pt-8 rounded-2xl gap-4">
    <div className='text-3xl text-gray-500 font-bold mb-6'>Welcome to jobnest.</div>
    <p className='font-light text-md'>Login to your account or <span className='text-blue-400'>sign up</span></p>
    <div className='flex w-[80%] justify-between h-12 '>
    <div className="options border-[1px] border-blue-400 bg-blue-50 rounded-md flex w-[45%] py-1 px-2 text-lg text-gray-8900 items-center justify-center font-semibold ">Employee Login</div>
    <div className="options border-[1px] border-gray-400 rounded-md flex w-[45%] py-1 px-2 text-lg text-gray-700 items-center justify-center font-semibold ">Employer Login</div>
    </div>
    {/* <div className="text-md font-light">Sign in using google</div>         */}
    <hr className='text-gray-400 w-4/5 my-4' />
    <div className="google w-4/5 border-[1px] border-gray-400 h-12 flex justify-center items-center text-lg rounded-md">Sign in with google</div>        
    <div className="text-md font-light">or</div>
    <input type="text" className='w-4/5 border h-12 px-3 border-gray-400 rounded-md' placeholder='Enter your Name' />        
    <input type="text" className='w-4/5 border h-12 px-3 border-gray-400 rounded-md' placeholder='Enter your email' />        
    <input type="password" className='w-4/5 border h-12 px-3 border-gray-400 rounded-md' placeholder='Password' />        
    <button className="google w-4/5 border-[1px] border-gray-400 h-12 bg-blue-400 text-white font-semibold flex justify-center items-center text-lg rounded-md">Submit</button>
    <div className='flex justify-between w-4/5'>
    <div className="text-md font-light text-blue-400">Register</div>
    <div className="text-md font-light text-blue-400">Forgot Password?</div>        
    </div>        
   </div>
   <Footer />
</div>
  )
}

export default Register
