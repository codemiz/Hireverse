import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true
})

export const signUp = (data,role) => api.post(`/api/register/${role}` , data)
export const login = (data) => api.post(`/api/login` , data)
export const getUser = () => api.get("/api/user")
export const logout = () => api.get("/logout")
export const previewJob = (jobID) => api.post(`/api/job/preview` , {jobID})
export const previewResume = (resumeID) => api.post(`/api/resume/preview` , {resumeID})
export const getLatestJobs = () => api.get("/api/jobs/all")
export const applyJob = (jobID) => api.get(`api/job/apply/${jobID}`)
export const sendCode = (data) => api.post("/send-code" , {email:data})
export const verifyCode = (data) => api.post("/verify/email" , data)
export const changePassword = (data) => api.post("/password/change" , data)
export const googleLogin = (token , role) => api.post(`/api/auth/google-login/${role}` , {token})
export const editResume = (data) => api.post("/api/resume/edit" , data)
export const postJob = (data) => api.post("/api/job/post" , data)
export const sendInterviewInvite = (data) => api.post("/api/interview/invite" , data)
export const rejectApplicant = (jobID,applicantID) => api.post("/api/job/reject" , {jobID,applicantID})
export const editCompany = (data) => api.post("/api/company/edit" , data , {
    headers: {
        "Content-Type" : "multipart/form-data"
    }
})
export const uploadAvatar = (data) => api.post("/api/employer/profile/avatar" , data , {
    headers: {
        "Content-Type" : "multipart/form-data"
    }
})