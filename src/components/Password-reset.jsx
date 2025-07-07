import React, { useState } from 'react'
import { sendCode , verifyCode , changePassword } from '../api'
import { useNavigate } from 'react-router-dom'
function PasswordReset() {
  const [step, setStep] = useState(1)
  const [error, setError] = useState()
  const [email, setEmail] = useState()
  const [code, setCode] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  async function onSubmit(){
    if(step==1){

      try {
        await sendCode(email)
        setError(null)
        setStep(2)
      } catch (error) {
        if(error.response && error.response.status == 404){
          setError("Email not registered. try again")
        }
      }
    }
    else if(step==2){
      try {
         const data = {
        email: email ,
        code: code
      }
        await verifyCode(data)
        setError(null)
        setStep(3)
      } catch (error) {
        if(error.response && error.response.status == 401){
          setError("Invalid code. try again")
        }
      }
    }
    else if(step==3){
      try {
         const data = {
        email ,
        password
      }
        await changePassword(data)
        navigate("/login")
      } catch (error) {
        if(error.response && error.response.status == 401){
          setError("Invalid email. try again")
        }
      }
    }
  }
  return (
    <div className='w-full h-screen bg-blue-50 flex flex-col gap-2 justify-center items-center'>
    <img src="./logo2.png" width={100} className='absolute left-2 top-2' alt="" />
   <div className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-5/12 xl:w-4/12 2xl:w-[25%] min-h-[28%] bg-white shadow flex flex-col items-center py-8 rounded-2xl gap-4">
    <div className='text-2xl text-gray-500 font-semibold mb-6'>Reset your password</div>
    {step ==1 && 
    <>
    <p className='font-light text-md'>We'll send a code to your email</p>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-4/5 border h-12 px-3 border-gray-400 rounded-md' placeholder='Enter your email' />        
    </>
    
    }
    {step == 2 && 
    <>
    <p className='font-light text-md'>Enter the code your recieved om your email.</p>
    <input type="text" value={code} onChange={(e)=>setCode(e.target.value)} maxLength={6} className='w-4/5 border h-12 px-3 border-gray-400 rounded-md' />        
    </>
    }
    
    {step == 3 && 
    <>
    <p className='font-light text-md'>Choose the new password.</p>
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-4/5 border h-12 px-3 border-gray-400 rounded-md' placeholder='Password' />        
    </>
    }
    {error && 
    <p className='font-light text-red-400 text-md'>{error}</p>
    }
    <button onClick={onSubmit} className="google w-4/5 border-[1px] border-gray-400 h-12 bg-blue-400 text-white font-semibold flex justify-center items-center text-lg rounded-md">Submit</button>
    

     <div className='flex gap-1 mt-5 items-center'>
    <div className={`circles border-[1px] ${step == 1 ? "bg-blue-400 border-blue-400 w-[14px] h-[14px]" : "border-gray-500 w-[10px] h-[10px]"} rounded-full`}></div>    
    <div className={`circles border-[1px] ${step == 2 ? "bg-blue-400 border-blue-400 w-[14px] h-[14px]" : "border-gray-500 w-[10px] h-[10px]"} rounded-full`}></div>    
    <div className={`circles border-[1px] ${step == 3 ? "bg-blue-400 border-blue-400 w-[14px] h-[14px]" : "border-gray-500 w-[10px] h-[10px]"} rounded-full`}></div>    
    </div>    
   </div>
   
</div>
  )
}

export default PasswordReset
