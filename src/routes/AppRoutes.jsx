import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import { useAuth } from "../context/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Verification from "../pages/Verification";
import PublicRoute from "../components/PublicRoute";
import EmployerOnly from "../components/EmployerOnly";
import CompanyProfile from "../pages/Company-profile";
import PostJob from "../pages/Post-job";
import Resume from "../pages/Resume";
import JobPreview from "../pages/Job-preview";
import CvEditor from "../pages/Cv-editor";
import CompanyProfileUpdate from "../pages/Company-profile-update";
import ResumePreview from "../pages/Resume-preview";
import PasswordReset from "../components/Password-reset";
import Notfound from "../pages/Notfound";
import Loading from "../components/Loading";
import ProfileChecker from "../components/ProfileChecker";
import EmployeeOnly from "../components/EmployeeOnly";
function AppRoutes() {
  const { user } = useAuth();
  const nevigate = useNavigate();
  useEffect(() => {
    if (user && !user.verified) {
      nevigate("/verification");
    }
  }, [user]);
  return (
    <Routes>
      <Route path="*" element={<Notfound />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/" element={<Home />} />
      <Route path="/password/reset" element={<PasswordReset />} />
      <Route path="/job/preview/:jobId" element={<JobPreview />} />
      <Route
        path="/cv/edit"
        element={
            <EmployeeOnly>
              <CvEditor />
            </EmployeeOnly>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/onboarding"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfileChecker />
          </PrivateRoute>
        }
      />
      <Route
        path="/resume"
        element={
            <EmployeeOnly>
              <Resume />
            </EmployeeOnly>
        }
      />
      <Route
        path="/employer/company"
        element={
          <EmployerOnly>
            <CompanyProfile />
          </EmployerOnly>
        }
      />
      <Route
        path="/employer/post-job"
        element={
          <EmployerOnly>
            <PostJob />
          </EmployerOnly>
        }
      />
      <Route
        path="/employer/company/edit"
        element={
          <EmployerOnly>
            <CompanyProfileUpdate />
          </EmployerOnly>
        }
      />
      <Route
        path="/applicant/resume/preview/:resumeId/:applyJobId"
        element={
          <EmployerOnly>
            <ResumePreview />
          </EmployerOnly>
        }
      />
      <Route
        path="/verification"
        element={
          <PrivateRoute>
            <Verification />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
