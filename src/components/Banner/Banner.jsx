import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Search,
  Briefcase,
  TrendingUp,
  Users,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function Banner() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Create query params
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.append("search", searchQuery.trim());
    if (location.trim()) params.append("location", location.trim());

    // Navigate to browse jobs with query params
    navigate(`/browseJobs?${params.toString()}`);
  };

  const handleQuickSearch = (query) => {
    navigate(`/browseJobs?search=${query}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center ">
      <div className="w-full container mx-auto px-4 py-25">
        {/* Main Banner Container */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left Content */}
          <div className="rounded-2xl  p-8 md:p-12 flex flex-col justify-center relative overflow-hidden animate-fadeInLeft bg-base-100">
            {/* Animated Background Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "10s" }}
            ></div>

            <div className="space-y-6 relative z-10">
              <div className="inline-block animate-bounce">
                <span className="badge badge-primary badge-lg gap-2 shadow-lg ">
                  <Sparkles className="w-4 h-4" />
                  Premium Job Portal
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-base-content leading-tight animate-fadeIn">
                Find Your{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Dream Job
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-shimmer"></span>
                </span>{" "}
                at{" "}
                <span className="text-primary drop-shadow-lg animate-pulse">
                  SkillersTop
                </span>
              </h1>

              <p className="text-lg md:text-xl text-base-content/80 animate-fadeInUp leading-relaxed">
                Thousands of opportunities waiting for skilled professionals
                like you. Start your career journey today and unlock your
                potential!
              </p>

              <div
                className="flex flex-wrap gap-4 pt-4 animate-fadeInUp"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex items-center gap-2 text-base-content bg-base-200/80 px-4 py-2 rounded-full backdrop-blur-sm  transition-transform border border-base-300">
                  <Briefcase
                    className="w-5 h-5 animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <span className="font-semibold">5000+ Jobs</span>
                </div>
                <div className="flex items-center gap-2 text-base-content bg-base-200/80 px-4 py-2 rounded-full backdrop-blur-sm  transition-transform border border-base-300">
                  <Users
                    className="w-5 h-5 animate-bounce"
                    style={{ animationDelay: "0.7s" }}
                  />
                  <span className="font-semibold">2000+ Companies</span>
                </div>
                <div className="flex items-center gap-2 text-base-content bg-base-200/80 px-4 py-2 rounded-full backdrop-blur-sm  transition-transform border border-base-300">
                  <TrendingUp
                    className="w-5 h-5 animate-bounce"
                    style={{ animationDelay: "0.9s" }}
                  />
                  <span className="font-semibold">Growing Fast</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Search Section */}
          <div className="bg-base-100 rounded-2xl p-8 md:p-12 flex flex-col justify-center border border-base-content/5 animate-fadeInRight">
            <div className="space-y-6">
              <div className="text-center md:text-left animate-fadeIn">
                <h2 className="text-3xl md:text-4xl font-black text-base-content mb-3 relative inline-block">
                  Start Your Search
                  <span className="absolute -top-2 -right-8">
                    <Sparkles
                      className="w-6 h-6 text-secondary animate-spin"
                      style={{ animationDuration: "3s" }}
                    />
                  </span>
                </h2>
                <p className="text-base-content/70 text-lg animate-fadeInUp">
                  Enter job title, skills, or company name
                </p>
              </div>

              {/* Search Form */}
              <div className="space-y-4">
                {/* Job Title/Keyword Input */}
                <div className="form-control animate-slideInUp">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Job Title or Keyword
                    </span>
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="e.g. Web Developer, Designer, Manager"
                      className="input input-bordered input-lg w-full pl-12 focus:input-primary transition-all duration-300 "
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/50 group-focus-within:text-primary transition-colors" />
                  </div>
                </div>

                {/* Location Input */}
                <div
                  className="form-control animate-slideInUp"
                  style={{ animationDelay: "0.1s" }}
                >
                  <label className="label">
                    <span className="label-text font-semibold">Location</span>
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="e.g. Delhi, Remote"
                      className="input input-bordered input-lg w-full pl-12  transition-all focus:border-none duration-300 focus:border "
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/50 group-focus-within:text-primary transition-colors" />
                  </div>
                </div>

                {/* Search Button */}
                <button
                  className="btn btn-primary btn-lg w-full text-lg shadow-lg  transition-all duration-300  animate-slideInUp group"
                  style={{ animationDelay: "0.2s" }}
                  onClick={handleSearch}
                >
                  <Search className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                  Search Jobs
                </button>

                {/* Quick Links */}
                <div
                  className="pt-4 animate-fadeInUp"
                  style={{ animationDelay: "0.3s" }}
                >
                  <p className="text-sm text-base-content/60 mb-2">
                    Popular Searches:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="badge badge-outline cursor-pointer hover:badge-primary transition-all duration-300"
                      onClick={() => handleQuickSearch("React Developer")}
                    >
                      React Developer
                    </span>
                    <span
                      className="badge badge-outline cursor-pointer hover:badge-primary transition-all duration-300"
                      onClick={() => handleQuickSearch("UI/UX Designer")}
                    >
                      UI/UX Designer
                    </span>
                    <span
                      className="badge badge-outline cursor-pointer hover:badge-primary transition-all duration-300"
                      onClick={() => handleQuickSearch("Digital Marketing")}
                    >
                      Digital Marketing
                    </span>
                    <span
                      className="badge badge-outline cursor-pointer hover:badge-primary transition-all duration-300"
                      onClick={() => handleQuickSearch("Remote")}
                    >
                      Remote Jobs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-base-200 rounded-xl p-6 text-center border border-base-content/5  transition-all duration-300  animate-fadeInUp cursor-pointer">
            <div className="text-3xl font-bold text-primary animate-pulse">
              5000+
            </div>
            <div className="text-sm text-base-content/70 mt-1">Active Jobs</div>
          </div>
          <div
            className="bg-base-200 rounded-xl p-6 text-center  border border-base-content/5 transition-all duration-300  animate-fadeInUp cursor-pointer"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="text-3xl font-bold text-secondary animate-pulse">
              2000+
            </div>
            <div className="text-sm text-base-content/70 mt-1">Companies</div>
          </div>
          <div
            className="bg-base-200 rounded-xl p-6 text-center  border border-base-content/5 transition-all duration-300  animate-fadeInUp cursor-pointer"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-3xl font-bold text-accent animate-pulse">
              10000+
            </div>
            <div className="text-sm text-base-content/70 mt-1">Job Seekers</div>
          </div>
          <div
            className="bg-base-200 rounded-xl p-6 text-center  border border-base-content/5 transition-all duration-300  animate-fadeInUp cursor-pointer"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="text-3xl font-bold text-success animate-pulse">
              95%
            </div>
            <div className="text-sm text-base-content/70 mt-1">
              Success Rate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
