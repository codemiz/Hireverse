import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

export const signUp = (data,role) => api.post(`/api/register/${role}` , data)
export const login = (data) => api.post(`/api/login` , data)
export const getUser = () => api.get("/api/user")
export const sendCode = (data) => api.post("/send-code" , {email:data})
export const verifyCode = (data) => api.post("/verify/email" , data)
export const googleLogin = (token , role) => api.post(`/api/auth/google-login/${role}` , {token})
export const editResume = (data) => api.post("/api/resume/edit" , data)
export const editCompany = (data) => api.post("/api/company/edit" , data)