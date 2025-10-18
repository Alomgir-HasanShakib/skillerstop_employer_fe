import { useState, useEffect } from "react";
import { Link } from "react-router";

import { getProfile } from "../../api/profile/profile";
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
} from "lucide-react";
import { BiCube } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading/Loading";

export default function MyProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { verifyEmail } = useAuth();
  console.log(verifyEmail);

  // Fetch profile from server
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleMyApply = () => {
    alert("Redirecting to My Applications page...");
    // Navigate to applications page
  };

  const calculateAge = (dob) => {
    if (!dob) return "Not specified";
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    )
      age--;
    return age;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const renderEmptyState = (message) => (
    <div className="text-center py-4 text-base-content/60">
      <p>{message}</p>
    </div>
  );

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-5xl py-20">
        <Loading></Loading>
      </div>
    );
  if (!profile)
    return <div className="text-center py-20">No profile data found.</div>;

  // Use profile data from server with fallbacks
  const userData = {
    name: profile.name || "No Name Provided",
    phone: profile.phone || "Not provided",
    email: profile.email || "Not provided",
    whatsappPhone: profile.whatsappPhone || "main",
    altPhone: profile.altPhone || "Not provided",
    dob: profile.dob || "",
    gender: profile.gender || "Not specified",
    currentLocation: profile.currentLocation || "Not specified",
    homeLocation: profile.homeLocation || "Not specified",
    currentMonthlySalary: profile.currentMonthlySalary || 0,
    skills: profile.skills || [],
    certificates: profile.certificates || [],
    educationalExp: profile.educationalExp || [],
    workExp: profile.workExp || [],
    knownLanguages: profile.knownLanguages || [],
  };

  return (
    <div className="min-h-screen bg-base-100 py-30 px-4">
      <div className="container px-4 mx-auto">
        {/* Header Card with Profile Info */}
        <div className="card border border-base-content/10 mb-6">
          <div className="card-body">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-32 h-32">
                  <span className="text-5xl font-bold">
                    {userData.name.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2">{userData.name}</h1>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <div className="badge badge-lg bg-white text-primary">
                    <MapPin className="h-4 w-4 mr-1" strokeWidth={2} />
                    {userData.currentLocation}
                  </div>
                  <div className="badge badge-lg bg-white text-primary">
                    <Calendar className="h-4 w-4 mr-1" strokeWidth={2} />
                    {userData.workExp.length > 0
                      ? "Software Engineer"
                      : "No profession specified"}
                  </div>
                  {userData.currentMonthlySalary > 0 && (
                    <div className="badge badge-lg bg-white text-primary">
                      💰 {userData.currentMonthlySalary.toLocaleString()}{" "}
                      BDT/month
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Link to="/update-profile">
                  <button className="btn btn-primary w-full">
                    <Edit className="h-5 w-5" strokeWidth={2} />
                    Update Profile
                  </button>
                </Link>
                <Link>
                  <button
                    onClick={handleMyApply}
                    className="btn btn-secondary text-black"
                  >
                    <FileText className="h-5 w-5" strokeWidth={2} />
                    My Applications
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch h-full">
          {/* Left Column - Contact & Personal Info */}
          <div className="lg:col-span-1 space-y-6 flex flex-col h-full">
            {/* Contact Information */}
            <div className="card bg-base-100 border border-base-content/10">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">
                  <Mail className="h-6 w-6" strokeWidth={2} />
                  Contact Info
                </h2>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="text-primary">📧</div>
                    <div>
                      <p className="text-sm opacity-70">Email</p>
                      <p className="font-semibold">{userData.email}</p>
                    </div>
                  </div>

                  <div className="divider my-2"></div>

                  <div className="flex items-start gap-3">
                    <div className="text-primary">📱</div>
                    <div>
                      <p className="text-sm opacity-70">Phone</p>
                      <p className="font-semibold">{userData.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-primary">📞</div>
                    <div>
                      <p className="text-sm opacity-70">Alternative Phone</p>
                      <p className="font-semibold">{userData.altPhone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-success">💬</div>
                    <div>
                      <p className="text-sm opacity-70">WhatsApp</p>
                      <p className="font-semibold">
                        {userData.whatsappPhone === "main"
                          ? userData.phone
                          : userData.altPhone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Details */}
            <div className="card bg-base-100 border border-base-content/10">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">
                  <User className="h-6 w-6" strokeWidth={2} />
                  Personal Details
                </h2>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm opacity-70">Date of Birth</p>
                    <p className="font-semibold">{formatDate(userData.dob)}</p>
                  </div>

                  <div>
                    <p className="text-sm opacity-70">Age</p>
                    <p className="font-semibold">
                      {userData.dob
                        ? `${calculateAge(userData.dob)} years old`
                        : "Not specified"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm opacity-70">Gender</p>
                    <p className="font-semibold">{userData.gender}</p>
                  </div>

                  <div className="divider my-2"></div>

                  <div>
                    <p className="text-sm opacity-70">Home Location</p>
                    <p className="font-semibold">{userData.homeLocation}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="card bg-base-100 border border-base-content/10">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">
                  <TrendingUp className="h-6 w-6" strokeWidth={2} />
                  Languages
                </h2>

                {userData.knownLanguages.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {userData.knownLanguages.map((lang, index) => (
                      <div key={index} className="badge badge-lg badge-outline">
                        {lang}
                      </div>
                    ))}
                  </div>
                ) : (
                  renderEmptyState("No languages specified")
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Professional Info */}
          <div className="lg:col-span-2 space-y-6 flex flex-col h-full">
            {/* Skills */}
            <div className="card bg-base-100 border border-base-content/10">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">
                  <Bell className="h-6 w-6" strokeWidth={2} />
                  Skills & Expertise
                </h2>

                {userData.skills.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {userData.skills.map((skill, index) => (
                      <div key={index} className="badge badge-lg badge-primary">
                        {skill}
                      </div>
                    ))}
                  </div>
                ) : (
                  renderEmptyState("No skills added yet")
                )}
              </div>
            </div>

            {/* Work Experience */}
            <div className="card bg-base-100 border border-base-content/10">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">
                  <Clipboard className="h-6 w-6" strokeWidth={2} />
                  Work Experience
                </h2>

                {userData.workExp.length > 0 ? (
                  <div className="space-y-4">
                    {userData.workExp.map((work, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="text-primary text-2xl">💼</div>
                        <div className="flex-1">
                          <p className="font-semibold text-lg">{work}</p>
                          {index === 0 && (
                            <span className="badge badge-success badge-sm mt-1">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  renderEmptyState("No work experience added")
                )}
              </div>
            </div>

            {/* Education */}
            <div className="card bg-base-100 border border-base-content/10">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">
                  <BiCube className="h-6 w-6" strokeWidth={2} />
                  Education
                </h2>

                {userData.educationalExp.length > 0 ? (
                  <div className="space-y-4">
                    {userData.educationalExp.map((edu, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="text-primary text-2xl">🎓</div>
                        <div className="flex-1">
                          <p className="font-semibold text-lg">{edu}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  renderEmptyState("No education history added")
                )}
              </div>
            </div>

            {/* Certificates */}
            <div className="card bg-base-100 border border-base-content/10">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">
                  <Globe className="h-6 w-6" strokeWidth={2} />
                  Certificates & Achievements
                </h2>

                {userData.certificates.length > 0 ? (
                  <div className="space-y-3">
                    {userData.certificates.map((cert, index) => (
                      <div key={index} className="flex gap-3 items-start">
                        <div className="text-accent text-xl">🏆</div>
                        <p className="font-semibold">{cert}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  renderEmptyState("No certificates added")
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
