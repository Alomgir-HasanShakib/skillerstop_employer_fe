import { useState, useEffect } from "react";
import { Link } from "react-router";

import {
  Bell,
  Calendar,
  Clipboard,
  Edit,
  FileText,
  Globe,
  Mail,
  MapPin,
  TrendingUp,
  User,
  Phone,
  Briefcase,
  Award,
  CheckCircle,
  XCircle,
  Shield,
} from "lucide-react";
import { BiCube } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading/Loading";

export default function MyProfile() {
  const [loading,] = useState(false);
  const { user } = useAuth();

  const handleMyApply = () => {
    alert("Redirecting to My Applications page...");
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-5xl py-20">
        <Loading></Loading>
      </div>
    );

  if (!user)
    return <div className="text-center py-20">No user data found.</div>;

  const userData = {
    name: user.name || "No Name Provided",
    email: user.email || "Not provided",
    username: user.username || "Not provided",
    accountVerified: user.accountVerified || false,
    emailVerified: user.emailVerified || false,
    phoneVerified: user.phoneVerified || false,
  };

  return (
    <div className="min-h-screen  py-8">
      <div className="container mx-auto px-4">
        {/* Modern Header with Gradient Background */}
        <div className="card border border-base-content/10 mb-8 overflow-hidden">
          <div className="absolute inset-0"></div>
          <div className="card-body relative z-10 py-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar with Ring */}
              <div className="relative">
                <div className="avatar placeholder">
                  <div className="bg-base-100 text-primary rounded-full w-36 h-36 ring-4 ring-white ring-offset-4 ring-offset-primary shadow-xl">
                    <span className="text-6xl flex justify-center items-center w-full h-full font-bold">
                      {userData.name.charAt(0)}
                    </span>
                  </div>
                </div>
                {userData.accountVerified && (
                  <div className="absolute bottom-2 right-2 bg-success rounded-full p-2 ring-4 ring-white shadow-lg">
                    <CheckCircle className="h-6 w-6 text-white" strokeWidth={2.5} />
                  </div>
                )}
              </div>

              {/* User Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <h1 className="text-5xl font-extrabold tracking-tight">
                    {userData.name}
                  </h1>
                  {userData.accountVerified && (
                    <Shield className="h-8 w-8 text-success animate-pulse" strokeWidth={2} />
                  )}
                </div>
                
                <p className="text-xl opacity-90 mb-4">@{userData.username}</p>
                
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <div className="badge badge-lg border border-base-content/10 backdrop-blur-sm  gap-2">
                    <MapPin className="h-4 w-4" strokeWidth={2} />
                    Location not specified
                  </div>
                  <div className="badge badge-lg  backdrop-blur-sm border border-base-content/10   gap-2">
                    <Briefcase className="h-4 w-4" strokeWidth={2} />
                    Profession not specified
                  </div>
                  <div className="badge badge-lg border border-base-content/10 backdrop-blur-sm  gap-2">
                    <Calendar className="h-4 w-4" strokeWidth={2} />
                    Member since 2024
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <Link to="/postJobs">
                  <button className="btn btn-primary  gap-2 shadow-lg  transition-all duration-300  w-full ">
                    <Edit className="h-5 w-5" strokeWidth={2} />
                    Post a Job
                  </button>
                </Link>
                <Link to="/applications">
                    <button
                    
                    className="btn  text-primary gap-2 btn-secondary transition-all duration-300  w-full md:w-auto border-0"
                  >
                    <FileText className="h-5 w-5" strokeWidth={2} />
                    Applications
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch gap-6">
          {/* Left Column - Contact & Status */}
          <div className="lg:col-span-1 space-y-6 flex flex-col justify-between">
            {/* Contact Information Card */}
            <div className="card bg-base-100 border border-base-content/10  transition-all duration-300">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-6 flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" strokeWidth={2} />
                  </div>
                  Contact Info
                </h2>

                <div className="space-y-5">
                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 bg-base-200/50 rounded-xl hover:bg-base-200 transition-colors">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold opacity-60 uppercase tracking-wider mb-1">
                        Email Address
                      </p>
                      <p className="font-bold text-base mb-1 break-all">{userData.email}</p>
                      {userData.emailVerified ? (
                        <div className="badge badge-success badge-sm gap-1">
                          <CheckCircle className="h-3 w-3" />
                          Verified
                        </div>
                      ) : (
                        <div className="badge badge-error badge-sm gap-1">
                          <XCircle className="h-3 w-3" />
                          Not Verified
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="divider my-2"></div>

                  {/* Username */}
                  <div className="flex items-start gap-4 p-4 bg-base-200/50 rounded-xl hover:bg-base-200 transition-colors">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <User className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold opacity-60 uppercase tracking-wider mb-1">
                        Username
                      </p>
                      <p className="font-bold text-base">@{userData.username}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 bg-base-200/50 rounded-xl hover:bg-base-200 transition-colors">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold opacity-60 uppercase tracking-wider mb-1">
                        Phone Number
                      </p>
                      <p className="font-bold text-base mb-1">Not provided</p>
                      {userData.phoneVerified ? (
                        <div className="badge badge-success badge-sm gap-1">
                          <CheckCircle className="h-3 w-3" />
                          Verified
                        </div>
                      ) : (
                        <div className="badge badge-error badge-sm gap-1">
                          <XCircle className="h-3 w-3" />
                          Not Verified
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Status Card */}
            <div className="card bg-base-100 border border-base-content/10  transition-all duration-300">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-6 flex items-center gap-2">
                  <div className="bg-success/10 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-success" strokeWidth={2} />
                  </div>
                  Account Status
                </h2>

                <div className="space-y-4">
                  {/* Overall Status */}
                  <div className="stats shadow-sm bg-base-200/50">
                    <div className="stat place-items-center py-4">
                      <div className="stat-title text-xs mb-2">Overall Verification</div>
                      <div className="stat-value text-2xl flex items-center gap-2">
                        {userData.accountVerified ? (
                          <>
                            <CheckCircle className="h-8 w-8 text-success" />
                            <span className="text-success">Verified</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="h-8 w-8 text-error" />
                            <span className="text-error">Pending</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Verification Details */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-base-200/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 opacity-70" />
                        <span className="font-medium">Email</span>
                      </div>
                      {userData.emailVerified ? (
                        <div className="badge badge-success gap-1">
                          <CheckCircle className="h-3 w-3" />
                          Verified
                        </div>
                      ) : (
                        <div className="badge badge-error gap-1">
                          <XCircle className="h-3 w-3" />
                          Pending
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between p-3 bg-base-200/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 opacity-70" />
                        <span className="font-medium">Phone</span>
                      </div>
                      {userData.phoneVerified ? (
                        <div className="badge badge-success gap-1">
                          <CheckCircle className="h-3 w-3" />
                          Verified
                        </div>
                      ) : (
                        <div className="badge badge-error gap-1">
                          <XCircle className="h-3 w-3" />
                          Pending
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between p-3 bg-base-200/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 opacity-70" />
                        <span className="font-medium">Account</span>
                      </div>
                      {userData.accountVerified ? (
                        <div className="badge badge-success gap-1">
                          <CheckCircle className="h-3 w-3" />
                          Verified
                        </div>
                      ) : (
                        <div className="badge badge-error gap-1">
                          <XCircle className="h-3 w-3" />
                          Pending
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Additional Info (Placeholder for future features) */}
          <div className="lg:col-span-2 space-y-6 flex flex-col justify-between">
            {/* Activity Overview */}
            <div className="card bg-base-100 border border-base-content/10  transition-all duration-300">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-6 flex items-center gap-2">
                  <div className="bg-info/10 p-2 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-info" strokeWidth={2} />
                  </div>
                  Activity Overview
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="stat bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <div className="stat-figure text-primary">
                      <FileText className="h-8 w-8" strokeWidth={2} />
                    </div>
                    <div className="stat-title">Total Applications</div>
                    <div className="stat-value text-primary">0</div>
                    <div className="stat-desc">No applications yet</div>
                  </div>

                  <div className="stat bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <div className="stat-figure text-secondary">
                      <Clipboard className="h-8 w-8" strokeWidth={2} />
                    </div>
                    <div className="stat-title">Jobs Posted</div>
                    <div className="stat-value text-secondary">0</div>
                    <div className="stat-desc">Start posting jobs</div>
                  </div>

                  <div className="stat bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <div className="stat-figure text-accent">
                      <Award className="h-8 w-8" strokeWidth={2} />
                    </div>
                    <div className="stat-title">Profile Views</div>
                    <div className="stat-value text-accent">0</div>
                    <div className="stat-desc">Build your presence</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card bg-base-100 border border-base-content/10 transition-all duration-300">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-6 flex items-center gap-2">
                  <div className="bg-warning/10 p-2 rounded-lg">
                    <Bell className="h-6 w-6 text-warning" strokeWidth={2} />
                  </div>
                  Recent Activity
                </h2>

                <div className="text-center py-12">
                  <div className="bg-base-200 inline-block p-6 rounded-full mb-4">
                    <Bell className="h-12 w-12 opacity-30" strokeWidth={1.5} />
                  </div>
                  <p className="text-lg font-semibold opacity-70 mb-2">No recent activity</p>
                  <p className="text-sm opacity-50">Your recent activities will appear here</p>
                </div>
              </div>
            </div>
            {/* Quick Actions */}
            <div className="card bg-gradient-to-br from-info/5 to-info/10 border border-info/20   transition-all duration-300">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4 flex items-center gap-2">
                  <Globe className="h-6 w-6 text-info" strokeWidth={2} />
                  Quick Actions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <button className="btn btn-outline btn-info gap-2  transition-transform">
                    <Edit className="h-5 w-5" />
                    Verify Email
                  </button>
                  <button className="btn btn-outline btn-info gap-2  transition-transform">
                    <FileText className="h-5 w-5" />
                    View Applications
                  </button>
                  <button className="btn btn-outline btn-info gap-2  transition-transform">
                    <Clipboard className="h-5 w-5" />
                    Manage Jobs
                  </button>
                  <button className="btn btn-outline btn-info gap-2  transition-transform">
                    <Bell className="h-5 w-5" />
                    Notifications
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}