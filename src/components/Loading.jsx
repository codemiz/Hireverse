import React from 'react'

function Loading() {
  return (
    <div className='w-full h-screen bg-white flex flex-col gap-2 justify-center items-center'>

   <div className="w-4/5 sm:w-9/12 md:w-8/12 lg:w-5/12 xl:w-4/12 2xl:w-[25%] min-h-[40%] flex flex-col justify-center items-center py-8 rounded-2xl gap-4">
   
    
   
    <div className="loader w-32 h-32 border-8 rounded-full border-blue-100 border-t-8 border-t-blue-500 animate-spin"></div>

    <div className='text-div flex flex-col justify-center items-center'>
    <p className='text-3xl font-semibold text-blue-500'>Almost There</p>
    <p className='font-light'>We're getting everything ready for you.</p>
    </div>
     
   </div>
   
</div>
  )
}

export default Loading
