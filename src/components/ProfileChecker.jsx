import React from 'react'
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loading from './Loading';
import Profile from '../pages/Profile';
import EmployerProfile from '../pages/Employer-profile';

const ProfileChecker = ({children}) => {
  const {user,loading}  = useAuth()

 if(loading) return <Loading />
 if(user.role == "Employee" ) return <Profile />
 if(user.role == "Employer" ) return <EmployerProfile />



 return children
}

export default ProfileChecker
