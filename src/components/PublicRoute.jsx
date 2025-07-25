import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";

const PublicRoute = ({children}) =>{
 const {user,loading}  = useAuth()

 if(loading) return <Loading />
 if(user) return <Navigate to={"/"} />

 return children
}

export default PublicRoute