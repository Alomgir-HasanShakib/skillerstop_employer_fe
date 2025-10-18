import React, { useState } from "react";
import { Award, Users, Target, Zap, BookOpen, TrendingUp } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  const stats = [
    { icon: Users, label: "Active Learners", value: "50K+" },
    { icon: BookOpen, label: "Courses", value: "500+" },
    { icon: Award, label: "Certifications", value: "100K+" },
    { icon: TrendingUp, label: "Success Rate", value: "95%" },
  ];

  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Empowering individuals to master new skills and achieve their career goals through accessible, high-quality education and hands-on learning experiences.",
    },
    {
      icon: Zap,
      title: "Why Choose Us",
      description:
        "Industry-expert instructors, practical projects, lifetime access to courses, and a supportive community that helps you succeed every step of the way.",
    },
    {
      icon: Award,
      title: "Our Achievement",
      description:
        "Recognized as a leading skill development platform with thousands of success stories from learners who transformed their careers with SkillersTop.",
    },
  ];

  const tabs = [
    { id: "mission", label: "Mission", icon: Target },
    { id: "choose", label: "Why Us", icon: Zap },
    { id: "achievement", label: "Achievement", icon: Award },
  ];

  return (
    <div className="min-h-screen  py-30 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            About SkillersTop
          </h1>
          <p className="text-xl text-base-content opacity-70 max-w-2xl mx-auto">
            Your journey to excellence starts here. Learn, grow, and achieve
            with the best online learning platform.
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
                      <BookOpen className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-base-content font-semibold">
                        Learn from anywhere, anytime
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
                        "Expert Instructors",
                        "Practical Projects",
                        "Lifetime Access",
                        "Community Support",
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
                        Award-winning platform
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
              To become the world's most trusted skill development platform,
              where millions of learners achieve their dreams through quality
              education, innovative teaching methods, and a global community of
              passionate educators and students.
            </p>
            <button className="btn btn-primary btn-lg mt-8  transition-transform">
              Join SkillersTop Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
