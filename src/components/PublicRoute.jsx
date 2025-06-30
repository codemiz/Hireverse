import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoute = ({children}) =>{
 const {user,loading}  = useAuth()

 if(loading) return <p>loading</p>
 if(user) return <Navigate to={"/"} />

 return children
}

export default PublicRoute