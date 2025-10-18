import React, { useState, useEffect } from "react";
import {
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Calendar,
  GraduationCap,
  Building2,
  Users,
  CheckCircle2,
  Star,
  ArrowLeft,
  Share2,
  Bookmark,
} from "lucide-react";
import { Link, useSearchParams } from "react-router";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const JobDetails = () => {
  const [job, setJob] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get("jobId");

  // Fetch specific job based on jobId
  useEffect(() => {
    fetch("/Jobs.json")
      .then((res) => res.json())
      .then((data) => {
        // Find the job with matching jobId
        const foundJob = data.find((job) => job.jobId === jobId);
        setJob(foundJob || null);
      })
      .catch((err) => console.error(err));
  }, [jobId]);

  if (!job) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="ml-4">Loading job details...</p>
      </div>
    );
  }

  const formatSalary = (min, max) =>
    `৳${min?.toLocaleString()} - ৳${max?.toLocaleString()}`;

  const formatDate = (dateString) => {
    return dateString
      ? new Date(dateString).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "";
  };

  const daysLeft = () => {
    const deadline = new Date(job.applicationDeadline);
    const today = new Date();
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <div className="min-h-screen bg-base-100 py-25 px-4 md:px-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/browseJobs">
          <button className="btn btn-ghost gap-2 mb-6">
            <ArrowLeft size={20} />
            Back to Jobs
          </button>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header Card */}
            <div className="card bg-base-100 border border-base-content/10">
              <div className="card-body">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3">
                    <div className="avatar placeholder">
                      <div className="bg-primary text-primary-content rounded-xl w-16 h-16">
                        <span className="text-2xl font-bold">
                          {job.jobTitle.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-base-content mb-2">
                        {job.jobTitle}
                      </h1>
                      <div className="flex items-center gap-2 text-base-content/70">
                        <Building2 size={18} className="text-primary" />
                        <span className="font-medium">
                          Company ID: {job.companyId}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className={`btn btn-circle btn-ghost ${
                        isBookmarked ? "text-primary" : ""
                      }`}
                      onClick={() => setIsBookmarked(!isBookmarked)}
                    >
                      <Bookmark
                        size={20}
                        fill={isBookmarked ? "currentColor" : "none"}
                      />
                    </button>
                    <button className="btn btn-circle btn-ghost">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs opacity-60">Location</p>
                      <p className="font-semibold text-sm">{job.jobLocation}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="bg-success/10 p-2 rounded-lg">
                      <DollarSign size={20} className="text-success" />
                    </div>
                    <div>
                      <p className="text-xs opacity-60">Salary</p>
                      <p className="font-semibold text-sm">
                        ৳{job.jobMinSalary.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="bg-info/10 p-2 rounded-lg">
                      <Briefcase size={20} className="text-info" />
                    </div>
                    <div>
                      <p className="text-xs opacity-60">Job Type</p>
                      <p className="font-semibold text-sm">{job.jobType}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-warning/10 p-2 rounded-lg">
                      <Clock size={20} className="text-warning" />
                    </div>
                    <div>
                      <p className="text-xs opacity-60">Experience</p>
                      <p className="font-semibold text-sm">
                        {job.experience}+ years
                      </p>
                    </div>
                  </div>
                </div>
                {/* Job Highlights */}
                <div className="mt-6 bg-primary/5 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Star size={18} className="text-primary" />
                    <h3 className="font-semibold text-base-content">
                      Job Highlights
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {job.jobHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-primary mt-1 flex-shrink-0"
                        />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Job Description */}
            <div className="card bg-base-100 border border-base-content/10">
              <div className="card-body">
                <h2 className="text-2xl font-bold text-base-content mb-1">
                  Job Description
                </h2>
                <p className="text-base-content/80 leading-relaxed">
                  {job.jobDescription}
                </p>
              </div>
            </div>
            {/* Responsibilities */}
            <div className="card bg-base-100 border border-base-content/10">
              <div className="card-body">
                <h2 className="text-2xl font-bold text-base-content mb-1">
                  Key Responsibilities
                </h2>
                <p className="text-base-content/80 leading-relaxed">
                  {job.jobResponsibilities}
                </p>
              </div>
            </div>
            {/* Requirements */}
            <div className="card bg-base-100 border border-base-content/10">
              <div className="card-body">
                <h2 className="text-2xl font-bold text-base-content mb-1">
                  Requirements
                </h2>
                <p className="text-base-content/80 leading-relaxed mb-1">
                  {job.jobRequirement}
                </p>
                <div className="mt-4">
                  <h3 className="font-semibold text-base-content mb-3 flex items-center gap-2">
                    <GraduationCap size={20} className="text-primary" />
                    Required Education
                  </h3>
                  <p className="text-base-content/80">{job.education}</p>
                </div>
              </div>
            </div>
            {/* Skills */}
            <div className="card bg-base-100 border border-base-content/10">
              <div className="card-body">
                <h2 className="text-2xl font-bold text-base-content mb-4">
                  Required Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, idx) => (
                    <span key={idx} className="badge badge-primary badge-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar - Right Side */}
          <div className="lg:col-span-1 space-y-6">
            {/* Application Deadline Card */}
            <div className="card  border border-error/20">
              <div className="card-body">
                <div className="flex items-center gap-2 text-error mb-3">
                  <Calendar size={20} />
                  <h3 className="font-bold">Application Deadline</h3>
                </div>
                <p className="text-2xl font-bold text-error">
                  {daysLeft()} Days Left
                </p>
                <p className="text-sm opacity-80">
                  Deadline: {formatDate(job.applicationDeadline)}
                </p>
                <div className="mt-4">
                  <progress
                    className="progress progress-error w-full"
                    value={daysLeft()}
                    max="30"
                  ></progress>
                </div>
              </div>
            </div>
            {/* Apply Now Card */}
            <div className="card border border-base-content/10 ">
              <div className="card-body">
                <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
                <button className="btn btn-primary btn-block btn-lg">
                  Apply Now
                </button>
                <button className="btn btn-outline btn-block mt-2  hover:bg-primary-content hover:text-primary">
                  Save for Later
                </button>
              </div>
            </div>
            {/* Job Details Card */}
            <div className="card bg-base-100 border border-base-content/10">
              <div className="card-body">
                <h3 className="text-lg font-bold text-base-content mb-4">
                  Job Overview
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-primary" />
                      <span className="text-sm opacity-70">Start Date</span>
                    </div>
                    <span className="text-sm font-semibold text-right">
                      {formatDate(job.jobStartDate)}
                    </span>
                  </div>
                  <div className="divider my-2"></div>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <DollarSign size={18} className="text-success" />
                      <span className="text-sm opacity-70">Salary Range</span>
                    </div>
                    <span className="text-sm font-semibold text-right">
                      {formatSalary(job.jobMinSalary, job.jobMaxSalary)}
                    </span>
                  </div>
                  <div className="divider my-2"></div>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-warning" />
                      <span className="text-sm opacity-70">Shift Time</span>
                    </div>
                    <span className="text-sm font-semibold text-right">
                      {job.jobShiftTime}
                    </span>
                  </div>
                  <div className="divider my-2"></div>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-info" />
                      <span className="text-sm opacity-70">Experience</span>
                    </div>
                    <span className="text-sm font-semibold">
                      {job.experience}+ years
                    </span>
                  </div>
                  <div className="divider my-2"></div>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <Briefcase size={18} className="text-primary" />
                      <span className="text-sm opacity-70">Job ID</span>
                    </div>
                    <span className="text-sm font-semibold">{job.jobId}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Share Card */}
            <div className="card bg-base-100 border border-base-content/10">
              <div className="card-body">
                <h3 className="text-lg font-bold text-base-content mb-4">
                  Share this Job
                </h3>
                <div className="flex gap-2">
                  <button className="btn btn-circle btn-outline flex-1">
                    <FaFacebookF className="w-5 h-5 text-current" />
                  </button>
                  <button className="btn btn-circle btn-outline flex-1">
                    <FaTwitter className="w-5 h-5 text-current" />
                  </button>
                  <button className="btn btn-circle btn-outline flex-1">
                    <FaLinkedinIn className="w-5 h-5 text-current" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
