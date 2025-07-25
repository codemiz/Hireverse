import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";

const PrivateRoute = ({children}) =>{
 const {user,loading}  = useAuth()

 if(loading) return <Loading />
 if(!user) return <Navigate to={"/login"} />

 return children
}

export default PrivateRoute