import { useContext, createContext, useState, useEffect } from "react";
import { getUser } from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUser()
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => setUser(null))
      .finally(()=>setLoading(false))
  }, []);

  useEffect(() => {
    console.log("User updated:", user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser , loading }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
