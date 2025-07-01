import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import PrivateRoute from "../components/privateRoute";
import { useAuth } from '../context/AuthContext';
import Home from '../pages/Home';
import Login from "../pages/Login"
import Register from "../pages/Register"
import Profile from "../pages/Profile"
import Verification from '../pages/Verification';
import PublicRoute from '../components/PublicRoute';
import EmployerOnly from '../components/EmployerOnly';
import EmployerProfile from "../pages/Employer-profile"
import CompanyProfile from "../pages/Company-profile"
import Jobs from '../pages/Jobs';
import PostJob  from "../pages/Post-job"
import Resume from "../pages/Resume"
import JobPreview from "../pages/Job-preview"
import CvEditor from '../pages/Cv-editor';
import Admin from '../pages/Admin';
import CompanyProfileUpdate from '../pages/Company-profile-update';
function AppRoutes() {

     const {user} = useAuth()
      const nevigate = useNavigate()
      useEffect(() => {
        if(user && !user.verified){
          nevigate("/verification")
        }
      }, [user])
  return (
   <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/preview/:jobId" element={<JobPreview />} />
          <Route path="/cv/edit" element={
            <PrivateRoute>
            <CvEditor />
            </PrivateRoute>
            } />
          <Route path="/login" element={
            <PublicRoute>
                <Login />
            </PublicRoute>
            } />
          <Route path="/onboarding" element={
            <PublicRoute>
                <Register />
            </PublicRoute>
            } />
          <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
          <Route path="/resume" element={
            <PrivateRoute>
              <Resume />
            </PrivateRoute>
          } />
          <Route path="/employer/profile" element={
            <EmployerOnly>
              <EmployerProfile />
            </EmployerOnly>
          } />
          <Route path="/employer/company" element={
            <EmployerOnly>
              <CompanyProfile />
            </EmployerOnly>
          } />
          <Route path="/employer/post-job" element={
            <EmployerOnly>
              <PostJob />
            </EmployerOnly>
          } />
          <Route path="/employer/company/edit" element={
            <EmployerOnly>
              <CompanyProfileUpdate />
            </EmployerOnly>
          } />
          <Route path="/verification" element={
            <PrivateRoute>
              <Verification />
            </PrivateRoute>
          } />
        </Routes>
  )
}

export default AppRoutes
