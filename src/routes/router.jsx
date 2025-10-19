// router.jsx
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import ProfileForm from "../components/ProfileForm/ProfileFrom";
import MyProfile from "../components/MyProfile/MyProfile";
import JobDetails from "../pages/JobDetails/JobDetails";
import VerifyEmailPage from "../pages/Authentication/EmailVerify/EmailVerify";
import PostJobs from "../pages/PostJobs/PostJobs";
import Company from "../pages/Company/Company";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // সব page MainLayout এর child
    children: [
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
      { path: "company", element: <Company /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "profile", element: <MyProfile /> },
      { path: "update-profile", element: <ProfileForm /> },
      { path: "postJobs", element: <PostJobs /> },
      { path: "jobDetails", element: <JobDetails /> },
      { path: "verify-email", element: <VerifyEmailPage /> },
      { path: "/", element: <SignIn /> },
    ],
  },
]);
