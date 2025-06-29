import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

export const signUp = (data,role) => api.post(`/api/register/${role}` , data)
export const login = (data) => api.post(`/api/login` , data)
export const getUser = () => api.get("/api/user")