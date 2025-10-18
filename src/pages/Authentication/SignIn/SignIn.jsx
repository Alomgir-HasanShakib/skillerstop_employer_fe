import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { loginUser } from "../../../api/auth/auth";
import { toast } from "sonner";
import useAuth from "../../../hooks/useAuth";
import {
  ArrowRight,
  Camera,
  Eye,
  EyeOff,
  FastForward,
  Lock,
  User,
} from "lucide-react";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };
    try {
      const response = await loginUser(formData);
      const { accessToken, user } = response.data;
      //Save token
      localStorage.setItem("accessToken", accessToken);
      // Update React Query
      login(user, accessToken);
      console.log(user, accessToken);
      toast.success("Login successful! Welcome to SkillersTop!");
      navigate("/");
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error("Login failed! Please check your credentials.");
    }
  };
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center py-30">
      <div className="container px-4 mx-auto">
        <div className="bg-base-100 rounded-xl border border-base-300 overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
            {/* Left Section - Content */}
            <div className="relative p-6 lg:p-8 xl:p-12 flex flex-col justify-between overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-48 h-48 lg:w-72 lg:h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div
                  className="absolute bottom-0 right-0 w-48 h-48 lg:w-72 lg:h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="absolute top-1/2 left-1/2 w-48 h-48 lg:w-72 lg:h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
                  style={{ animationDelay: "4s" }}
                ></div>
              </div>
              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-base-200 rounded-2xl mb-6 lg:mb-8">
                  <Camera className="w-6 h-6 lg:w-10 lg:h-10 text-primary" />
                </div>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-base-content mb-4 lg:mb-6 leading-tight">
                  Welcome to
                  <br />
                  <span className="text-primary">SkillersTop</span>
                </h1>
                <p className="text-base lg:text-lg xl:text-xl text-base-content/80 mb-8 lg:mb-12 leading-relaxed">
                  Discover your dream career with thousands of job opportunities
                  from top companies worldwide.
                </p>
                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3 lg:gap-4">
                  <div className="bg-base-200 rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-base-300 text-center">
                    <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-base-content mb-1">
                      5K+
                    </div>
                    <div className="text-xs lg:text-sm text-base-content/70">
                      Active Jobs
                    </div>
                  </div>
                  <div className="bg-base-200 rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-base-300 text-center">
                    <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-base-content mb-1">
                      2K+
                    </div>
                    <div className="text-xs lg:text-sm text-base-content/70">
                      Companies
                    </div>
                  </div>
                  <div className="bg-base-200 rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-base-300 text-center">
                    <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-base-content mb-1">
                      10K+
                    </div>
                    <div className="text-xs lg:text-sm text-base-content/70">
                      Happy Users
                    </div>
                  </div>
                </div>
              </div>
              {/* Bottom Quote */}
              <div className="relative z-10 mt-6 lg:mt-0">
                <div className="flex items-start space-x-3">
                  <FastForward className="w-6 h-6 lg:w-8 lg:h-8 text-warning flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-base-content/80 italic mb-2 text-sm lg:text-base">
                      "SkillersTop helped me land my dream job in just 2 weeks.
                      The platform is incredibly user-friendly!"
                    </p>
                    <p className="text-base-content/60 text-xs lg:text-sm font-semibold">
                      - Sarah Johnson, Software Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Section - Login Form */}
            <div className="p-6 lg:p-8 xl:p-12 flex flex-col justify-center bg-base-100">
              <div className="w-full max-w-md mx-auto">
                {/* Header */}
                <div className="text-center mb-8 lg:mb-10">
                  <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-base-content mb-2 lg:mb-3">
                    Login to Your Account
                  </h2>
                  <p className="text-base-content/70 text-sm lg:text-base">
                    Enter your credentials to access your dashboard
                  </p>
                </div>
                {/* Form */}
                <div className="space-y-4 lg:space-y-6">
                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-semibold text-base-content mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 lg:pl-4 flex items-center pointer-events-none">
                        <User className="w-4 h-4 lg:w-5 lg:h-5 text-base-content/40" />
                      </div>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="input input-bordered w-full pl-10 lg:pl-12 h-11 lg:h-12 text-sm lg:text-base focus:border-primary"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* Password Field */}
                  <div>
                    <label className="block text-sm font-semibold text-base-content mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 lg:pl-4 flex items-center pointer-events-none">
                        <Lock className="w-4 h-4 lg:w-5 lg:h-5 text-base-content/40" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="input input-bordered w-full pl-10 lg:pl-12 pr-10 lg:pr-12 h-11 lg:h-12 text-sm lg:text-base focus:border-primary"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 lg:pr-4 flex items-center text-base-content/40 hover:text-base-content/60 transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4 lg:w-5 lg:h-5" />
                        ) : (
                          <Eye className="w-4 h-4 lg:w-5 lg:h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  {/* Remember & Forgot */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary checkbox-sm"
                      />
                      <span className="ml-2 text-sm text-base-content/70 group-hover:text-base-content transition-colors">
                        Remember me
                      </span>
                    </label>
                    <a
                      href="#"
                      className="text-sm font-semibold text-primary hover:text-primary-focus transition-colors"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  {/* Login Button */}
                  <button
                    onClick={handleSubmit}
                    className="btn btn-primary w-full h-11 lg:h-12 text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Sign In
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                  </button>
                  {/* Sign Up Link */}
                  <div className="text-center pt-2">
                    <Link
                      to="/signup"
                      className="text-sm text-base-content/70 hover:text-base-content transition-colors"
                    >
                      Don't have an account?{" "}
                      <span className="font-semibold text-primary hover:text-primary-focus">
                        Create Account
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
