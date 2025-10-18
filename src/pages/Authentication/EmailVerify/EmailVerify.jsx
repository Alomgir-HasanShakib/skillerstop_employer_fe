import React, { useState } from "react";
import { Check, ArrowRight, Shield } from "lucide-react";
import { verifyEmail } from "../../../api/auth/auth";
import { toast } from "sonner";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router";

export default function EmailVerify() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [resendCountdown, setResendCountdown] = useState(0);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = { otp };
      const response = await verifyEmail(formData);
      const { data } = response;

      // Save in localStorage
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("userEmail", data.user.email);
      localStorage.setItem("userName", data.user.name);

      // Update Auth Context
      login(data.user, data.accessToken);

      setUserData(data.user);
      setSuccess("Email verified successfully!");
      setOtp("");
      toast.success("Email verified successfully!");

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.error("Error:", err);
      const errorMessage =
        err.response?.data?.message || err.message || "Something went wrong";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = () => {
    setResendCountdown(60);
    const timer = setInterval(() => {
      setResendCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center py-12 px-4">
      <div className="container mx-auto px-4">
        <div className="bg-base-100 rounded-2xl border border-base-content/10 overflow-hidden">
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
                  <Shield className="text-primary w-8 h-8" />
                </div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-base-content mb-4 lg:mb-6 leading-tight">
                  Secure Your
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Account Today
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-base-content/80 mb-8 lg:mb-12 leading-relaxed">
                  Complete your email verification to unlock full access to your
                  account and all premium features.
                </p>

                {/* Feature List */}
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                    </div>
                    <span className="text-base-content text-base lg:text-lg">
                      Bank-level security encryption
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                    </div>
                    <span className="text-base-content text-base lg:text-lg">
                      Two-factor authentication enabled
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                    </div>
                    <span className="text-base-content text-base lg:text-lg">
                      Verified user protection
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="relative z-10 mt-6 lg:mt-0">
                <div className="grid grid-cols-3 gap-3 lg:gap-4">
                  <div className="bg-base-100/50 backdrop-blur-md text-center rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-base-300">
                    <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-base-content mb-1">
                      99.9%
                    </div>
                    <div className="text-xs lg:text-sm text-base-content/70">
                      Uptime
                    </div>
                  </div>
                  <div className="bg-base-100/50 backdrop-blur-md text-center rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-base-300">
                    <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-base-content mb-1">
                      500K+
                    </div>
                    <div className="text-xs lg:text-sm text-base-content/70">
                      Users
                    </div>
                  </div>
                  <div className="bg-base-100/50 backdrop-blur-md text-center rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-base-300">
                    <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-base-content mb-1">
                      24/7
                    </div>
                    <div className="text-xs lg:text-sm text-base-content/70">
                      Support
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Email Verification */}
            <div className="p-6 lg:p-8 xl:p-12 flex flex-col justify-center bg-base-100">
              <div className="w-full max-w-md mx-auto">
                {/* Header */}
                <div className="text-center mb-6 lg:mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-2 lg:mb-3">
                    Verify Email
                  </h2>
                  <p className="text-base-content/70 text-sm lg:text-base">
                    Enter the 6-digit code sent to your email
                  </p>
                </div>

                {!userData ? (
                  <div className="space-y-4 lg:space-y-5">
                    {/* OTP Input */}
                    <div>
                      <label className="block text-sm font-semibold text-base-content mb-2">
                        Verification Code *
                      </label>
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) =>
                          setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                        }
                        placeholder="000000"
                        maxLength="6"
                        className="input input-bordered w-full h-12 lg:h-13 text-center text-2xl tracking-widest font-bold focus:border-primary focus:ring-2 focus:ring-primary/20"
                        required
                      />
                      <p className="text-xs text-base-content/50 mt-2">
                        Check your email for the verification code
                      </p>
                    </div>

                    {/* Error Alert */}
                    {error && (
                      <div className="alert alert-error shadow-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2"
                          />
                        </svg>
                        <span className="text-sm">{error}</span>
                      </div>
                    )}

                    {/* Success Alert */}
                    {success && (
                      <div className="alert alert-success shadow-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-sm">{success}</span>
                      </div>
                    )}

                    {/* Verify Button */}
                    <button
                      onClick={handleSubmit}
                      className="btn btn-primary w-full h-11 lg:h-12 text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      disabled={loading || otp.length !== 6}
                    >
                      {loading ? (
                        <>
                          <span className="loading loading-spinner loading-sm"></span>
                          Verifying...
                        </>
                      ) : (
                        <>
                          Verify Email
                          <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                        </>
                      )}
                    </button>

                    {/* Resend OTP */}
                    <div className="text-center pt-2">
                      <p className="text-sm text-base-content/70 mb-3">
                        Didn't receive the code?
                      </p>
                      <button
                        onClick={handleResend}
                        disabled={resendCountdown > 0}
                        className="btn btn-ghost btn-sm w-full"
                      >
                        {resendCountdown > 0
                          ? `Resend in ${resendCountdown}s`
                          : "Resend Code"}
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Success State */
                  <div className="space-y-4 lg:space-y-5">
                    <div className="flex justify-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-success/20 backdrop-blur-md rounded-full">
                        <Check className="w-8 h-8 text-success" />
                      </div>
                    </div>

                    <div className="bg-base-100 border border-base-300 rounded-xl lg:rounded-2xl p-6 lg:p-8">
                      <h3 className="text-lg lg:text-xl font-bold text-base-content mb-4 lg:mb-6">
                        Verification Complete
                      </h3>

                      <div className="space-y-3 lg:space-y-4">
                        <div className="flex justify-between items-center pb-3 border-b border-base-300">
                          <span className="text-base-content/70 text-sm lg:text-base">
                            Full Name
                          </span>
                          <span className="font-semibold text-base-content">
                            {userData.name}
                          </span>
                        </div>

                        <div className="flex justify-between items-center pb-3 border-b border-base-300">
                          <span className="text-base-content/70 text-sm lg:text-base">
                            Email Address
                          </span>
                          <span className="font-semibold text-base-content text-sm">
                            {userData.email}
                          </span>
                        </div>

                        <div className="flex justify-between items-center pb-3 border-b border-base-300">
                          <span className="text-base-content/70 text-sm lg:text-base">
                            Email Verified
                          </span>
                          <div className="badge badge-success gap-1">
                            <Check className="w-4 h-4" />
                            Verified
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-base-content/70 text-sm lg:text-base">
                            Account Status
                          </span>
                          <div
                            className={`badge gap-1 ${
                              userData.accountVerified
                                ? "badge-success"
                                : "badge-warning"
                            }`}
                          >
                            <Check className="w-4 h-4" />
                            {userData.accountVerified ? "Active" : "Pending"}
                          </div>
                        </div>
                      </div>

                      <button className="btn btn-primary w-full mt-6 lg:mt-8">
                        Continue to Dashboard
                        <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
