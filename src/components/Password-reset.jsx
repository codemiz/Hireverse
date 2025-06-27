import React from 'react'

function PasswordReset() {
  return (
    <div className='w-full h-screen bg-blue-50 flex flex-col gap-2 justify-center items-center'>
    <img src="./logo2.png" width={100} className='absolute left-2 top-2' alt="" />
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
   
</div>
  )
}

export default PasswordReset
