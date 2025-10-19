import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

import { registerUser } from "../../../api/auth/auth";
import { toast } from "sonner";
import useAuth from "../../../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
import { GiEyeOfHorus } from "react-icons/gi";
import { ArrowRight, Check, Eye, EyeOff } from "lucide-react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    dob: new Date().toISOString().split("T")[0], // Current date as default
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    try {
      const response = await registerUser(formData);
      const { accessToken, user } = response.data;
      // Save data in localStorage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userEmail", user.email);
      localStorage.setItem("userName", user.name);
      login(user, accessToken);
      toast.success("Company account created successfully!");
      navigate("/verify-email");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      toast.error("Failed to create company account!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center py-30 px-4">
      <div className="container mx-auto px-4">
        <div className="bg-base-100 rounded-2xl border border-base-content/10 overflow-hidden ">
          <div className="grid lg:grid-cols-2 min-h-[700px]">
            {/* Left Section - Premium Design */}
            <div className="relative bg-base-100 p-8 lg:p-12 flex flex-col justify-between overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div
                  className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
                  style={{ animationDelay: "4s" }}
                ></div>
              </div>
              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 backdrop-blur-lg rounded-2xl mb-6">
                  <FaUserCircle className="text-primary text-2xl" />
                </div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-base-content mb-4 lg:mb-6 leading-tight">
                  Start Hiring
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Top Talent
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-base-content/80 mb-8 lg:mb-12 leading-relaxed">
                  Join thousands of companies who found their perfect candidates through SkillersTop. Create your employer account today!
                </p>

                {/* Feature List */}
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                    </div>
                    <span className="text-base-content text-base lg:text-lg">
                      Post unlimited job listings
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                    </div>
                    <span className="text-base-content text-base lg:text-lg">
                      Access to 50K+ skilled candidates
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                    </div>
                    <span className="text-base-content text-base lg:text-lg">
                      Advanced candidate filtering
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="relative z-10 mt-6 lg:mt-0">
                <div className="grid grid-cols-3 gap-3 lg:gap-4">
                  <div className="bg-base-100/50 backdrop-blur-md text-center rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-base-300">
                    <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-base-content mb-1">
                      50K+
                    </div>
                    <div className="text-xs lg:text-sm text-base-content/70">
                      Skilled Candidates
                    </div>
                  </div>
                  <div className="bg-base-100/50 backdrop-blur-md text-center rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-base-300">
                    <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-base-content mb-1">
                      2K+
                    </div>
                    <div className="text-xs lg:text-sm text-base-content/70">
                      Companies
                    </div>
                  </div>
                  <div className="bg-base-100/50 backdrop-blur-md text-center rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-base-300">
                    <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-base-content mb-1">
                      95%
                    </div>
                    <div className="text-xs lg:text-sm text-base-content/70">
                      Hiring Success
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Section - SignUp Form */}
            <div className="p-6 lg:p-8 xl:p-12 flex flex-col justify-center bg-base-100">
              <div className="w-full max-w-md mx-auto">
                {/* Header */}
                <div className="text-center mb-6 lg:mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-2 lg:mb-3">
                    Create Company Account
                  </h2>
                  <p className="text-base-content/70 text-sm lg:text-base">
                    Register your company to start hiring talent
                  </p>
                </div>
                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 lg:space-y-5"
                >
                  {/* Username Field */}
                  <div>
                    <label className="block text-sm font-semibold text-base-content mb-2">
                      Company Username *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="username"
                        placeholder="techcorp2024"
                        className="input input-bordered w-full pl-10 lg:pl-12 h-11 lg:h-12 text-sm lg:text-base focus:border-primary focus:ring-2 focus:ring-primary/20"
                        value={formData.username}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-semibold text-base-content mb-2">
                      Company Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        placeholder="TechCorp Solutions Ltd."
                        className="input input-bordered w-full pl-10 lg:pl-12 h-11 lg:h-12 text-sm lg:text-base focus:border-primary focus:ring-2 focus:ring-primary/20"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        minLength="3"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-semibold text-base-content mb-2">
                      Work Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="hr@company.com"
                        className="input input-bordered w-full pl-10 lg:pl-12 h-11 lg:h-12 text-sm lg:text-base focus:border-primary focus:ring-2 focus:ring-primary/20"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-semibold text-base-content mb-2">
                      Company Phone *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 9876543210"
                        className="input input-bordered w-full pl-10 lg:pl-12 h-11 lg:h-12 text-sm lg:text-base focus:border-primary focus:ring-2 focus:ring-primary/20"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  {/* Password Field */}
                  <div>
                    <label className="block text-sm font-semibold text-base-content mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Create a strong password (min 8 characters)"
                        className="input input-bordered w-full pl-10 lg:pl-12 pr-10 lg:pr-12 h-11 lg:h-12 text-sm lg:text-base focus:border-primary focus:ring-2 focus:ring-primary/20"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength="8"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 lg:pr-4 flex items-center text-base-content/40 hover:text-base-content/60 transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  {/* Terms & Conditions */}
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary checkbox-sm mt-1"
                      required
                    />
                    <span className="ml-3 text-sm text-base-content/70">
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-primary hover:text-primary-focus font-semibold"
                      >
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="text-primary hover:text-primary-focus font-semibold"
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </div>
                  {/* SignUp Button */}
                  <button
                    type="submit"
                    className="btn btn-primary w-full h-11 lg:h-12 text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="loading loading-spinner"></span>
                        Creating Company Account...
                      </>
                    ) : (
                      <>
                        Create Company Account
                        <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                      </>
                    )}
                  </button>
                  {/* Login Link */}
                  <div className="text-center pt-2">
                    <Link
                      to="/signin"
                      className="text-sm text-base-content/70 hover:text-base-content transition-colors"
                    >
                      Already have a company account?{" "}
                      <span className="font-semibold text-primary hover:text-primary-focus">
                        Sign In
                      </span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}