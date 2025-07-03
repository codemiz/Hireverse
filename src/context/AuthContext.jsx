import { useContext, createContext, useState, useEffect } from "react";
import { getUser } from "../api";
import { getLatestJobs } from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [jobsLoading, setJobsLoading] = useState(true);
  useEffect(() => {
    getUser()
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => setUser(null))
      .finally(()=>setLoading(false))
  }, []);
  useEffect(() => {
    getLatestJobs()
      .then((res) => {
        setJobs(res.data.jobs);
        console.log(jobs);
        
      })
      .catch((err) => setJobs(null))
      .finally(()=>setJobsLoading(false))
  }, []);

  useEffect(() => {
    console.log("jobs updated:", jobs);
  }, [jobs]);

  return (
    <AuthContext.Provider value={{ user, setUser , loading ,jobs ,setJobs , jobsLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
