import React, { useState } from "react";
import {
  Award,
  Users,
  Target,
  Zap,
  BookOpen,
  TrendingUp,
  Building2,
  Briefcase,
  Globe,
  Info,
} from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  const stats = [
    { icon: Users, label: "Skilled Candidates", value: "50K+" },
    { icon: Building2, label: "Companies", value: "2K+" },
    { icon: Briefcase, label: "Jobs Posted", value: "10K+" },
    { icon: TrendingUp, label: "Hiring Success", value: "95%" },
  ];

  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Connecting top companies with exceptional talent through innovative recruitment solutions and streamlined hiring processes that drive business growth.",
    },
    {
      icon: Zap,
      title: "Why Choose Us",
      description:
        "AI-powered candidate matching, verified skill assessments, dedicated employer support, and access to a vast pool of pre-screened professionals.",
    },
    {
      icon: Award,
      title: "Our Achievement",
      description:
        "Recognized as a leading recruitment platform with thousands of successful hires and partnerships with top companies across various industries.",
    },
  ];

  const tabs = [
    { id: "mission", label: "Mission", icon: Target },
    { id: "choose", label: "Why Us", icon: Zap },
    { id: "achievement", label: "Achievement", icon: Award },
  ];

  return (
    <div className="min-h-screen  py-10 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6">
            <Info className="w-6 h-6" />
            <span className="font-bold">About Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            About SkillersTop
          </h1>
          <p className="text-xl text-base-content opacity-70 max-w-2xl mx-auto">
            Your trusted partner in talent acquisition. Find, hire, and grow
            with the best recruitment platform.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="card bg-base-100 border border-base-content/10   transition-all duration-300 "
            >
              <div className="card-body items-center text-center p-6">
                <stat.icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-3xl font-bold text-base-content">
                  {stat.value}
                </h3>
                <p className="text-base-content opacity-60 text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs Section */}
        <div className="card bg-base-100 border border-base-content/10 mb-16">
          <div className="card-body p-8">
            {/* Tab Buttons */}
            <div className="tabs tabs-boxed bg-base-200 p-2 mb-8 justify-center flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab gap-2 ${
                    activeTab === tab.id
                      ? "tab-active bg-primary text-primary-content"
                      : ""
                  } transition-all duration-300`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="animate-fadeIn">
              {activeTab === "mission" && (
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-primary rounded-2xl">
                        <Target className="w-8 h-8 text-primary-content" />
                      </div>
                      <h2 className="text-3xl font-bold text-base-content">
                        Our Mission
                      </h2>
                    </div>
                    <p className="text-base-content opacity-70 text-lg leading-relaxed">
                      {features[0].description}
                    </p>
                  </div>
                  <div className="w-full md:w-1/3">
                    <div className="bg-base-200 rounded-2xl p-8 text-center">
                      <Building2 className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-base-content font-semibold">
                        Trusted by leading companies
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "choose" && (
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-primary rounded-2xl">
                        <Zap className="w-8 h-8 text-primary-content" />
                      </div>
                      <h2 className="text-3xl font-bold text-base-content">
                        Why Choose Us
                      </h2>
                    </div>
                    <p className="text-base-content opacity-70 text-lg leading-relaxed mb-6">
                      {features[1].description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "AI Candidate Matching",
                        "Verified Skills",
                        "Dedicated Support",
                        "Pre-screened Talent",
                      ].map((item, idx) => (
                        <span
                          key={idx}
                          className="badge badge-lg badge-primary badge-outline p-4"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "achievement" && (
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-primary rounded-2xl">
                        <Award className="w-8 h-8 text-primary-content" />
                      </div>
                      <h2 className="text-3xl font-bold text-base-content">
                        Our Achievement
                      </h2>
                    </div>
                    <p className="text-base-content opacity-70 text-lg leading-relaxed">
                      {features[2].description}
                    </p>
                  </div>
                  <div className="w-full md:w-1/3">
                    <div className="border border-base-content/10 bg-opacity-20 rounded-2xl p-8 text-center">
                      <Award className="w-16 h-16 text-warning mx-auto mb-4" />
                      <p className="text-base-content font-semibold">
                        Award-winning recruitment platform
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="card bg-base-100 border border-base-content/10 mb-16">
          <div className="card-body p-12 text-center ">
            <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90">
              To revolutionize the recruitment industry by creating the world's
              most efficient talent acquisition platform, where companies of all
              sizes can find exceptional candidates quickly and build teams that
              drive innovation and success.
            </p>
            <button className="btn btn-primary btn-lg mt-8  transition-transform">
              Start Hiring Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
