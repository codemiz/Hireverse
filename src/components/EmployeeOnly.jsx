import React from 'react'
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loading from './Loading';

const EmployeeOnly = ({children}) => {
  const {user,loading}  = useAuth()

 if(loading) return <Loading />
if(!user) return <Navigate to={"/login"} />
 if(user.role == "Employer" ) return <Navigate to={"/"} />



 return children
}

export default EmployeeOnly
