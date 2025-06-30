import React from 'react'

function Admin() {
  return (
    <div className='w-full h-screen bg-blue-50 flex flex-col gap-2 justify-center items-center'>
    <img src="./logo2.png" width={100} className='absolute left-2 top-2' alt="" />
   <div className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-5/12 xl:w-4/12 2xl:w-[25%] h-3/6 bg-white shadow flex flex-col items-center pt-8 rounded-2xl gap-4">
    <div className='text-3xl text-gray-500 font-bold mb-6'>Welcome to jobnest.</div>
    <p className='font-light text-md'>Login to admin account</p>
    
    <hr className='text-gray-400 w-4/5 my-4' />
    
    <input type="text" className='w-4/5 border h-12 px-3 border-gray-400 rounded-md' placeholder='Admin code' />        
    <input type="text" className='w-4/5 border h-12 px-3 border-gray-400 rounded-md' placeholder='Wmail' />        
    <input type="password" className='w-4/5 border h-12 px-3 border-gray-400 rounded-md' placeholder='Password' />        
    <button className="google w-4/5 border-[1px] border-gray-400 h-12 bg-blue-400 text-white font-semibold flex justify-center items-center text-lg rounded-md">Submit</button>
         
   </div>
   
</div>
  )
}

export default Admin
