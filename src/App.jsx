import { useState } from "react";
import Home from "./components/home";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/Admin";
import PasswordReset from "./components/Password-reset";
import Resume from "./components/Resume";
import Profile from "./components/Profile";
import Jobs from "./components/Jobs";
import JobPreview from "./components/Job-preview";
import PostJob from "./components/Post-job";
import CompanyProfile from "./components/Company-profile";
import EmployerProfile from "./components/Employer-profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getUser } from "./api";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/privateRoute";
import Verification from "./components/Verification";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding" element={<Register />} />
          <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
          <Route path="/verification" element={
            <PrivateRoute>
              <Verification />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
