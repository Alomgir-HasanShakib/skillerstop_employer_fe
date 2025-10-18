import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import ProfileForm from "../components/ProfileForm/ProfileFrom";
import MyProfile from "../components/MyProfile/MyProfile";
import JobDetails from "../pages/JobDetails/JobDetails";
import VerifyEmailPage from "../pages/Authentication/EmailVerify/EmailVerify";
import PostJobs from "../components/PostJobs/PostJobs";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "update-profile",
        element: <ProfileForm></ProfileForm>,
      },
      {
        path: "postJobs",
        element: <PostJobs></PostJobs>,
      },
      {
        path: "jobDetails",
        element: <JobDetails></JobDetails>,
      },
      {
        path: "verify-email",
        element: <VerifyEmailPage></VerifyEmailPage>,
      },
    ],
  },
]);
