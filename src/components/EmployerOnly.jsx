import React from 'react'
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const EmployerOnly = ({children}) => {
  const {user,loading}  = useAuth()

 if(loading) return <p>loading</p>
 if(!user) return <Navigate to={"/login"} />
 if(user.role == "Employee" || user.role == "Admin" ) return <Navigate to={"/"} />



 return children
}

export default EmployerOnly
