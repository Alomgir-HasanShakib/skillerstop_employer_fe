import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import MyProfile from "../pages/MyProfile/MyProfile";
import VerifyEmailPage from "../pages/Authentication/EmailVerify/EmailVerify";
import PostJobs from "../pages/PostJobs/PostJobs";
import Company from "../pages/Company/Company";
import PrivateRoute from "./private/PrivateRoute";
import PublicRoute from "./public/PublicRoute";
import Applications from "../pages/Applications/Applications";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        ),
      },
      {
        path: "signin",
        element: (
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        ),
      },
      {
        path: "company",
        element: (
          <PrivateRoute>
            <Company />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "postJobs",
        element: (
          <PrivateRoute>
            <PostJobs />
          </PrivateRoute>
        ),
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "verify-email", element: <PrivateRoute>
        <VerifyEmailPage /> 
      </PrivateRoute>},
      {
        path: "applications",
        element: <PrivateRoute><Applications></Applications></PrivateRoute>
      }
    ],
  },
]);
