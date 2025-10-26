import React, { useEffect, useState } from "react";
import { getAllJobs } from "../../api/job/job";
import { getApplicantsByJobId } from "../../api/getApply/getApply";
import { toast } from "sonner";
import {
  Calendar,
  ChevronDown,
  ChevronDownIcon,
  ChevronUp,
  Clipboard,
  Code,
  HelpCircle,
  Mail,
  MapPin,
  Phone,
  Users,
  X,
  User,
  Briefcase,
  GraduationCap,
  Award,
  FileText,
  DollarSign,
  Languages,
  Home,
  MessageCircle,
} from "lucide-react";

import Loading from "../../components/Loading/Loading";
import ApplicantDetailsModal from "../../components/ApplicantDetailsModal/ApplicantDetailsModal";

export default function Applicants({ currentUser }) {
  const [jobWiseApplicants, setJobWiseApplicants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedJobs, setExpandedJobs] = useState(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const openModal = (applicant) => {
    setSelectedApplicant(applicant);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedApplicant(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchJobWiseApplicants = async () => {
      setLoading(true);
      try {
        const allJobs = await getAllJobs();
        console.log(allJobs);
        const jobsWithApplicantsData = [];

        for (const job of allJobs) {
          if (job.applicants?.length > 0) {
            try {
              const applicantsData = await getApplicantsByJobId(job.jobId);

              if (applicantsData && applicantsData.length > 0) {
                jobsWithApplicantsData.push({
                  jobId: job.jobId,
                  jobTitle: job.jobTitle || "Untitled Job",
                  jobLocation: job.jobLocation || "Location not specified",
                  jobType: job.jobType || "Full-time",
                  applicants: applicantsData,
                  totalApplicants: applicantsData.length,
                });
              }
            } catch (error) {
              console.error(
                `Failed to fetch applicants for job ${job.jobId}:`,
                error
              );
            }
          }
        }

        setJobWiseApplicants(jobsWithApplicantsData);

      
      } catch (error) {
        console.error("Error in fetching job-wise applicants:", error);
        toast.error("Failed to load applicants data");
      } finally {
        setLoading(false);
      }
    };

    fetchJobWiseApplicants();
  }, []);

  const toggleJobExpansion = (jobId) => {
    const newExpanded = new Set(expandedJobs);
    if (newExpanded.has(jobId)) {
      newExpanded.delete(jobId);
    } else {
      newExpanded.add(jobId);
    }
    setExpandedJobs(newExpanded);
  };

  const expandAll = () => {
    const allJobIds = jobWiseApplicants.map((job) => job.jobId);
    setExpandedJobs(new Set(allJobIds));
  };

  const collapseAll = () => {
    setExpandedJobs(new Set());
  };

  useEffect(() => {
    console.log("Job-wise Applicants State:", jobWiseApplicants);
    console.log("Expanded Jobs:", expandedJobs);
  }, [jobWiseApplicants, expandedJobs]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loading></Loading>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Job Applications
          </h1>
          <p className="text-base-content/60 mt-1">
            Manage and review your job applicants
          </p>
        </div>

        {jobWiseApplicants.length > 0 && (
          <div className="flex gap-2">
            <button onClick={expandAll} className="btn btn-primary btn-sm">
              <ChevronDown className="h-4 w-4" />
              Expand All
            </button>
            <button onClick={collapseAll} className="btn btn-ghost btn-sm">
              <ChevronUp className="h-4 w-4" />
              Collapse All
            </button>
          </div>
        )}
      </div>

      {/* Empty State */}
      {jobWiseApplicants.length === 0 ? (
        <div className="card bg-base-200 border border-base-content/10">
          <div className="card-body items-center text-center py-16">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="card-title text-2xl mb-2">No Applicants Yet</h2>
            <p className="text-base-content/60 max-w-md">
              There are no applicants for any of your jobs yet. They'll appear
              here once candidates start applying.
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Jobs List */}
          <div className="space-y-4">
            {jobWiseApplicants.map((jobData) => (
              <div
                key={jobData.jobId}
                className="card bg-base-100 border border-base-content/10 transition-shadow"
              >
                {/* Job Header */}
                <div
                  className="card-body cursor-pointer hover:bg-base-200/50 transition-colors rounded-t-2xl"
                  onClick={() => toggleJobExpansion(jobData.jobId)}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h2 className="card-title text-xl mb-3">
                        {jobData.jobTitle}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        <div className="badge badge-outline gap-1">
                          <MapPin className="h-3 w-3" />
                          {jobData.jobLocation}
                        </div>
                        <div className="badge badge-outline gap-1">
                          <Calendar className="h-3 w-3" />
                          {jobData.jobType}
                        </div>
                        <div className="badge badge-primary gap-1">
                          <Users className="h-3 w-3" />
                          {jobData.totalApplicants} Applicants
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-circle btn-ghost btn-sm">
                      <ChevronDownIcon
                        className={`h-5 w-5 transition-transform ${
                          expandedJobs.has(jobData.jobId) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Applicants List */}
                {expandedJobs.has(jobData.jobId) && (
                  <div className="card-body pt-0 border-t border-base-300">
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Applicants
                    </h3>

                    {jobData.applicants.length === 0 ? (
                      <div className="text-center py-12 text-base-content/60">
                        No applicants found for this job.
                      </div>
                    ) : (
                      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {jobData.applicants.map((applicant, index) => (
                          <div
                            key={applicant._id || `${applicant.email}-${index}`}
                            className="card bg-base-200 border border-base-content/10 transition-all"
                          >
                            <div className="card-body p-5">
                              <div className="flex items-start justify-between mb-3">
                                <div className="avatar placeholder">
                                  <div className="bg-primary text-primary-content rounded-full w-12">
                                    <span className="text-xl font-semibold">
                                      {(applicant.name || "?")[0].toUpperCase()}
                                    </span>
                                  </div>
                                </div>
                                <div className="badge badge-success badge-sm">
                                  Applied
                                </div>
                              </div>

                              <h4 className="font-bold text-lg mb-2">
                                {applicant.name || "No Name Provided"}
                              </h4>

                              <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-base-content/70">
                                  <Mail className="h-4 w-4" />
                                  <span className="truncate">
                                    {applicant.email}
                                  </span>
                                </div>

                                {applicant.phone && (
                                  <div className="flex items-center gap-2 text-base-content/70">
                                    <Phone className="h-4 w-4" />
                                    <span>{applicant.phone}</span>
                                  </div>
                                )}

                                {applicant.currentLocation && (
                                  <div className="flex items-center gap-2 text-base-content/70">
                                    <MapPin className="h-4 w-4" />
                                    <span>{applicant.currentLocation}</span>
                                  </div>
                                )}

                                {applicant.skills?.length > 0 && (
                                  <div className="mt-2">
                                    <div className="flex flex-wrap gap-1">
                                      <Code className="h-4 w-4 text-blue-500" />
                                      {applicant.skills
                                        .slice(0, 3)
                                        .map((skill, idx) => (
                                          <div
                                            key={idx}
                                            className="badge badge-sm badge-ghost"
                                          >
                                            {skill}
                                          </div>
                                        ))}
                                      {applicant.skills.length > 3 && (
                                        <div className="badge badge-sm badge-ghost">
                                          +{applicant.skills.length - 3}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                )}

                                {applicant.currentMonthlySalary && (
                                  <div className="flex items-center gap-2 text-base-content/70">
                                    <HelpCircle className="h-4 w-4 text-gray-700" />
                                    <span>
                                      ₹{applicant.currentMonthlySalary}/month
                                    </span>
                                  </div>
                                )}
                              </div>

                              <div className="card-actions justify-end mt-4">
                                <button
                                  onClick={() => openModal(applicant)}
                                  className="btn btn-primary btn-sm w-full"
                                >
                                  View Details
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="stats border border-base-content/10 w-full mt-8 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="stat">
              <div className="stat-figure text-primary">
                <Clipboard className="h-8 w-8 text-gray-700" />
              </div>
              <div className="stat-title">Active Job Posts</div>
              <div className="stat-value text-primary">
                {jobWiseApplicants.length}
              </div>
              <div className="stat-desc">Jobs with applicants</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <Users className="h-8 w-8 text-gray-700" />
              </div>
              <div className="stat-title">Total Applicants</div>
              <div className="stat-value text-secondary">
                {jobWiseApplicants.reduce(
                  (total, job) => total + job.totalApplicants,
                  0
                )}
              </div>
              <div className="stat-desc">Across all jobs</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-accent">
                <div
                  className="radial-progress text-accent"
                  style={{ "--value": "70", "--size": "3rem" }}
                >
                  70%
                </div>
              </div>
              <div className="stat-title">Response Rate</div>
              <div className="stat-value text-accent">
                {Math.round(
                  (jobWiseApplicants.reduce(
                    (total, job) => total + job.totalApplicants,
                    0
                  ) /
                    jobWiseApplicants.length) *
                    10
                ) / 10}
              </div>
              <div className="stat-desc">Avg. applicants per job</div>
            </div>
          </div>
        </>
      )}
      {/* View Details Modal */}
      <ApplicantDetailsModal
        isOpen={isModalOpen}
        applicant={selectedApplicant}
        onClose={closeModal}
      />
    </div>
  );
}
