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
          <Route path="/verification" element={
            <PrivateRoute>
              <Verification />
            </PrivateRoute>
          } />
        </Routes>
  )
}

export default AppRoutes
