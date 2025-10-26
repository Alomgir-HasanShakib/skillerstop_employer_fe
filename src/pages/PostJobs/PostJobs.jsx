// src/pages/Employer/Job.jsx
import React, { useState, useEffect } from "react";
import { Briefcase } from "lucide-react";
import JobModal from "../../components/JobModal/JobModal";
import JobCard from "../../components/JobCard/JobCard";
import { getAllJobs, createJob, updateJob, deleteJob } from "../../api/job/job";
import { getAllCompanies } from "../../api/company/company";
import { toast } from "sonner";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading/Loading";

export default function Job() {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [companyId, setCompanyId] = useState(null);
  const [loadingCompany, setLoadingCompany] = useState(true);
  const [loadingJobs, setLoadingJobs] = useState(true);

  const [formData, setFormData] = useState({
    jobTitle: "",
    jobHighlights: ["", "", ""],
    jobRequirement: "",
    jobResponsibilities: "",
    jobLocation: "",
    jobMinSalary: "",
    jobMaxSalary: "",
    jobShiftTime: "",
    jobDescription: "",
    jobType: "Full-Time",
    experience: "",
    education: "",
    skills: [],
    jobStartDate: "",
    applicationDeadline: "",
  });

  // Fetch companyId for logged-in user
  useEffect(() => {
    const fetchCompany = async () => {
      if (!user) return;

      try {
        if (user.companyId) {
          setCompanyId(user.companyId);
          setLoadingCompany(false);
          return;
        }

        const companies = await getAllCompanies();
        const myCompany = companies.find(
          (c) =>
            c.createdBy === user._id ||
            c.employers?.some((emp) => emp.createdBy === user._id)
        );
        if (!myCompany) {
          toast.error("You have no company! Please create a company first.");
          setCompanyId(null);
          setLoadingCompany(false);
          return;
        }
        setCompanyId(myCompany._id);
        setLoadingCompany(false);
      } catch (error) {
        console.error("Company fetch error:", error);
        setLoadingCompany(false);
      }
    };

    fetchCompany();
  }, [user]);

  // Fetch all jobs
  useEffect(() => {
    const fetchJobs = async () => {
      setLoadingJobs(true);
      try {
        const data = await getAllJobs();
        setJobs(data);
      } catch (error) {
        console.error("Job Fetch Error:", error.response?.data || error);
        toast.error("Failed to load jobs");
      } finally {
        setLoadingJobs(false);
      }
    };
    fetchJobs();
  }, []);

  //  Create or Update Job
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!companyId) {
      toast.error("You have no company! Please create a company first.");
      return;
    }
    const finalData = {
      ...formData,
      companyId,
      deleted: false,
      jobMinSalary: Number(formData.jobMinSalary),
      jobMaxSalary: Number(formData.jobMaxSalary),
      experience: Number(formData.experience),
    };

    try {
      if (editingId) {
        await updateJob(editingId, finalData);
        toast.success("Job updated successfully");
      } else {
        await createJob(finalData);
        toast.success("Job created successfully");
      }

      const updated = await getAllJobs();
      setJobs(updated);
      resetForm();
      setShowModal(false);
      setEditingId(null);
    } catch (error) {
      console.error("Job Submit Error:", error.response?.data || error);
      toast.error("Something went wrong");
    }
  };

  //  Edit Job
  const handleEdit = (job) => {
    setFormData({
      jobTitle: job.jobTitle || "",
      jobHighlights: job.jobHighlights || ["", "", ""],
      jobRequirement: job.jobRequirement || "",
      jobResponsibilities: job.jobResponsibilities || "",
      jobLocation: job.jobLocation || "",
      jobMinSalary: job.jobMinSalary?.toString() || "",
      jobMaxSalary: job.jobMaxSalary?.toString() || "",
      jobShiftTime: job.jobShiftTime || "",
      jobDescription: job.jobDescription || "",
      jobType: job.jobType || "Full-Time",
      experience: job.experience?.toString() || "",
      education: job.education || "",
      skills: job.skills || [],
      jobStartDate: job.jobStartDate || "",
      applicationDeadline: job.applicationDeadline || "",
    });
    setEditingId(job._id);
    setShowModal(true);
  };

  // Delete Job
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      setJobs((prevJobs) => prevJobs.filter((j) => j._id !== id));
      try {
        await deleteJob(id);
        toast.success("Job deleted");
      } catch (error) {
        console.error("Job Delete Error:", error.response?.data || error);
        toast.error("Failed to delete job");
        const data = await getAllJobs();
        setJobs(data);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      jobTitle: "",
      jobHighlights: ["", "", ""],
      jobRequirement: "",
      jobResponsibilities: "",
      jobLocation: "",
      jobMinSalary: "",
      jobMaxSalary: "",
      jobShiftTime: "",
      jobDescription: "",
      jobType: "Full-Time",
      experience: "",
      education: "",
      skills: [],
      jobStartDate: "",
      applicationDeadline: "",
    });
  };

  const openCreateModal = () => {
    if (!companyId) {
      toast.error("You have no company! Please create a company first.");
      return;
    }
    resetForm();
    setEditingId(null);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-base-100 py-10">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6">
            <Briefcase className="w-6 h-6" />
            <span className="font-bold">Job Management</span>
          </div>
          <h1 className="text-5xl font-bold text-base-content mb-4">
            Manage Your <span className="text-primary">Job Posts</span>
          </h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Create and manage job postings to attract top talent and grow your
            team
          </p>
        </div>

        {/* Stats and Actions */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
          <div className="stats bg-base-100 border border-base-300">
            <div className="stat">
              <div className="stat-figure text-primary">
                <Briefcase className="w-8 h-8" />
              </div>
              <div className="stat-title">Active Jobs</div>
              <div className="stat-value text-primary">{jobs.length}</div>
              <div className="stat-desc">Open positions</div>
            </div>
          </div>

          <button
            onClick={openCreateModal}
            disabled={loadingCompany}
            className="btn btn-primary btn-lg gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {loadingCompany ? "Loading..." : "Post New Job"}
          </button>
        </div>
        {/* Loading State */}
        {loadingJobs && (
          <div className="flex justify-center items-center pb-12">
            <Loading></Loading>
          </div>
        )}
        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {loadingJobs
            ? // Loading Placeholder
              Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="h-96 bg-base-200 animate-pulse rounded-lg"
                />
              ))
            : jobs.map((job) => (
                <JobCard
                  key={job._id}
                  job={job}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
        </div>
      </div>

      {/* Modal */}
      <JobModal
        showModal={showModal}
        setShowModal={setShowModal}
        editingId={editingId}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        setEditingId={setEditingId}
      />
    </div>
  );
}
