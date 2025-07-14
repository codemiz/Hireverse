import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { applyJob, previewResume } from "../api";
import { useForm } from "react-hook-form";
import { sendInterviewInvite  ,rejectApplicant } from "../api";

function ResumePreview() {
  const { user } = useAuth();
  const { resumeId, applyJobId } = useParams();
  const [resume, setResume] = useState();
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    previewResume(resumeId)
      .then((res) => {
        setResume(res.data.resume);
      })
      .catch((err) => setResume(null))
      .finally(() => setLoading(false));
  }, []);

  async function sendInvite(data) {
    try {
      const formData = new FormData();

      formData.append("notes", data.notes);
      formData.append("location", data.location);
      formData.append("date", data.date);
      formData.append("time", data.time);
      formData.append("jobID", applyJobId);
      formData.append("applicantID", resume.userID);

      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      await sendInterviewInvite(formData);
      location.reload()
      //  setUser(res.data.user);
      //  setTimeout(() => {
      //    navigate("/resume");
      //  }, 400);
    } catch (error) {
      console.error(error);
    }
  }
  async function reject() {
    try {

      await rejectApplicant(applyJobId , resume.userID);
      location.reload()
      //  setUser(res.data.user);
      //  setTimeout(() => {
      //    navigate("/resume");
      //  }, 400);
    } catch (error) {
      console.error(error);
    }
  }
  if (loading) return <p>loading Resume</p>;
  return (
    <div className="w-full h-[1500px] bg-blue-50 flex flex-col gap-2 items-center pt-20">
      <Header />
      {showPopup && (
        <div className="popup w-[70%] md:w-2/5 lg:w-1/3 xl:w-1/4 2xl:w-1/5 min-h-1/2 bg-white border border-gray-300 flex gap-3 rounded shadow-md fixed top-1/4 flex-col justify-center items-center">
          <p className="text-xl font-medium border-b border-gray-400 py-0.5 mb-4">
            Add interview details
          </p>
          <p
            onClick={() => setShowPopup(false)}
            className="text-xl absolute cursor-pointer top-0 right-2 font-medium border-b border-gray-400 py-0.5 mb-4"
          >
            X
          </p>
          <div className="about w-11/12 flex flex-col">
            <textarea
              name="about"
              {...register("notes")}
              rows={6}
              cols={100}
              className="border w-full px-2 py-1 rounded-md border-gray-400"
              placeholder="Interview notes"
            ></textarea>
          </div>
          <div className="experience-div w-11/12 flex flex-col gap-1">
            <div className="w-full">
              <label
                htmlFor="name"
                className="text-lg font-medium text-gray-700"
              >
                Other Details:
              </label>
              <input
                type="text"
                {...register("location")}
                placeholder="Location"
                className="w-full border border-gray-400  rounded-md h-10 px-2"
              />
            </div>

            <div className="w-full flex flex-col items-end justify-end">
              <input
                type="date"
                {...register("date")}
                className="w-full border border-gray-400 rounded-md h-10 px-2"
              />
            </div>
            <div className="w-full flex flex-col items-end justify-end">
              <input
                type="time"
                {...register("time")}
                className="w-full border border-gray-400  rounded-md h-10 px-2"
              />
            </div>
          </div>
          <button
            onClick={handleSubmit(sendInvite)}
            className="bg-blue-400 px-4 w-11/12 py-2 text-white font-normal text-md rounded-md"
          >
            Invite
          </button>{" "}
        </div>
      )}
      <p className="text-3xl font-semibold">Applicant's resume</p>
      <hr className="text-gray-400 w-[90%] my-4" />
      <div className="cv w-[90%] lg:w-3/4 xl:w-3/5 2xl:w-1/2 bg-white shadow py-14 px-2 md:px-6 flex flex-col items-center">
        <div className="image-div w-11/12 flex justify-center md:justify-start ">
          <div className="w-52 h-52 rounded-full mb-12">
            <img src={resume.pictureURL} className="rounded-full" alt="" />
          </div>
        </div>

        <div className="flex w-11/12 flex-col gap-4 justify-center text-gray-600 items-center">
          <div className="name-div flex w-full gap-2">
            <div className="w-2/4">
              <label
                htmlFor="name"
                className="text-lg font-medium text-gray-700"
              >
                First Name:
              </label>
              <input
                type="text"
                value={resume.firstName}
                disabled
                className="w-full text-gray-600 md:w-4/5 border border-gray-400  rounded-md h-10 px-2"
              />
            </div>

            <div className="w-2/4 flex flex-col items-end">
              <div className="w-full md:w-4/5">
                <label
                  htmlFor="name"
                  className="text-lg font-medium text-gray-700"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  value={resume.lastName}
                  disabled
                  className="w-full border text-gray-600 border-gray-400  rounded-md h-10 px-2"
                />
              </div>
            </div>
          </div>
          <div className="about w-full flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
              About Me:
            </label>
            <textarea
              name="about"
              value={resume.about}
              disabled
              rows={5}
              cols={100}
              className="border w-full px-2 py-1 rounded-md border-gray-400"
              placeholder="Describe yourself"
            ></textarea>
          </div>
          <div className="skill w-full flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
              Lead skill:
            </label>
            <textarea
              name="about"
              value={resume.skill}
              disabled
              rows={1}
              cols={100}
              className="border w-full px-2 py-1 rounded-md border-gray-400"
              maxLength={25}
              placeholder="i.e Graphics Designer"
            ></textarea>
          </div>

          <div className="education-div flex flex-col md:flex-row w-full gap-1">
            <div className="w-full md:w-2/6">
              <label
                htmlFor="name"
                className="text-lg font-medium text-gray-700"
              >
                Education:
              </label>
              <input
                type="text"
                value={resume.degree}
                disabled
                placeholder="Degree name"
                className="w-full border border-gray-400  rounded-md h-10 px-2"
              />
            </div>

            <div className="w-full md:w-3/6 flex flex-col items-end justify-end">
              <input
                type="text"
                value={resume.institute}
                disabled
                placeholder="Institute"
                className="w-full border border-gray-400  rounded-md h-10 px-2"
              />
            </div>
            <div className="w-full md:w-1/6 flex flex-col items-end justify-end">
              <input
                type="text"
                value={resume.gpa}
                disabled
                placeholder="Marks/GPA"
                className="w-full border border-gray-400  rounded-md h-10 px-2"
              />
            </div>
          </div>
          <div className="contact-div flex w-full gap-2">
            <div className="w-2/4">
              <label
                htmlFor="name"
                className="text-lg font-medium text-gray-700"
              >
                Mobile No:
              </label>
              <input
                type="text"
                value={resume.mobileNumber}
                disabled
                maxLength={11}
                className="w-full md:w-4/5 border border-gray-400  rounded-md h-10 px-2"
              />
            </div>

            <div className="w-2/4 flex flex-col items-end">
              <div className="full md:w-4/5">
                <label
                  htmlFor="name"
                  className="text-lg font-medium text-gray-700"
                >
                  Email:
                </label>
                <input
                  type="text"
                  disabled
                  value={resume.email}
                  className="w-full border border-gray-400 rounded-md h-10 px-2 text-gray-600"
                />
              </div>
            </div>
          </div>
          <div className="experience-div flex flex-col md:flex-row w-full gap-1">
            <div className="w-full md:w-2/5">
              <label
                htmlFor="name"
                className="text-lg font-medium text-gray-700"
              >
                Experience:
              </label>
              <input
                type="text"
                value={resume.exJobTitle}
                disabled
                placeholder="Job title"
                className="w-full border border-gray-400  rounded-md h-10 px-2"
              />
            </div>

            <div className="w-full md:w-2/5 flex flex-col items-end justify-end">
              <input
                type="text"
                value={resume.exCompany}
                disabled
                placeholder="Company name"
                className="w-full border border-gray-400  rounded-md h-10 px-2"
              />
            </div>
            <div className="w-full md:w-1/5 flex flex-col items-end justify-end">
              <input
                type="text"
                value={resume.workYears}
                disabled
                placeholder="Working years"
                className="w-full border border-gray-400  rounded-md h-10 px-2"
              />
            </div>
          </div>

          <div className="languages w-full flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
              Languages:
            </label>
            <textarea
              name="languages"
              value={resume.languages}
              disabled
              rows={1}
              cols={100}
              className="border w-full px-2 py-1 rounded-md border-gray-400"
              maxLength={25}
              placeholder="Seperate with comma"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="buttons w-[90%] flex gap-2 justify-center mt-2">
        <button  
        disabled={user.postedJobs.some((obj) => obj._id == applyJobId  &&
              obj.rejections.includes(resume.userID) 
            )} onClick={reject} className={`${
            user.postedJobs.some((obj) => obj._id == applyJobId  &&
              obj.rejections.includes(resume.userID) 
            )
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-400 cursor-pointer"
          } w-1/2 px-4 py-1 text-white font-medium h-10 text-lg rounded-md`}>
          {user.postedJobs.some((obj) => obj._id == applyJobId  &&
              obj.rejections.includes(resume.userID) 
            )
              ? "Rejected"
              : "Reject"
          }
        </button>
        <button
          disabled={user.postedJobs.some((obj) => obj._id == applyJobId  &&
              obj.interviewInvitations.includes(resume.userID) 
            )}
          onClick={() => setShowPopup(true)}
          className={`${
            user.postedJobs.some((obj) => obj._id == applyJobId  &&
              obj.interviewInvitations.includes(resume.userID) 
            )
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-400 cursor-pointer"
          } w-1/2 px-4  py-1 text-white font-medium h-10 text-lg rounded-md`}
        >
           {user.postedJobs.some((obj) => obj._id == applyJobId  &&
              obj.interviewInvitations.includes(resume.userID) 
            )
              ? "Invited for interview"
              : "Invite for interview"
          }
        </button>
      </div>

      
    </div>
  );
}

export default ResumePreview;
