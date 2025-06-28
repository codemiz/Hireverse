import { useState } from 'react'
import Home from './components/home'
import Login from './components/Login'
import Register from './components/Register'
import Admin from './components/Admin'
import PasswordReset from './components/Password-reset'
import Resume from './components/Resume'
import Profile from './components/Profile'
import Jobs from './components/Jobs'
import JobPreview from './components/Job-preview'
import PostJob from './components/Post-job'
import CompanyProfile from './components/Company-profile'
import EmployerProfile from './components/Employer-profile'
import {BrowserRouter , Routes , Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/onboarding' element={<Register />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App

