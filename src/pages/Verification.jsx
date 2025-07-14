import React, { useEffect,useState } from 'react'
import { sendCode , verifyCode } from '../api'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Verification() {
    const [code, setCode] = useState("")
    const {user , setUser} = useAuth()
    const navigate = useNavigate()
    
    useEffect(() => {
     sendCode(user.email)
     .then(res => console.log(res))
     .catch(err => console.log(err))
    }, [])
    
    async function submitCode(){
      const data = {
        email: user.email ,
        code: code
      }
        const res = await verifyCode(data)
        setUser(res.data.user)
        navigate("/")
        setCode("")
    }
  return (
   <div className='w-full h-screen bg-blue-50 flex flex-col gap-2 justify-center items-center'>
    <img src="./logo2.png" width={100} className='absolute left-2 top-2' alt="" />
   <div className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-5/12 xl:w-4/12 2xl:w-[25%] bg-white shadow flex flex-col items-center py-8 rounded-2xl gap-4">
    <div className='text-2xl text-gray-500 font-semibold mb-6'>Verify your email</div>
    <p className='font-light text-md'>Enter the code your recieved om your email.</p>
   
   <div className='w-full flex flex-col items-center gap-1 mb-3'>

    <input type="text" maxLength={6} value={code} onChange={(e)=>setCode(e.target.value)} className='w-4/5 border h-12 px-3 border-gray-400 rounded-md' placeholder='Enter the 6-digits code' />        
    
   </div>
    <button onClick={submitCode} className="google w-4/5 border-[1px] border-gray-400 h-12 bg-blue-400 text-white font-semibold flex justify-center items-center text-lg rounded-md">Submit</button>

       
   </div>
   
</div>
  )
}

export default Verification
