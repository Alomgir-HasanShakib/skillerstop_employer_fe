import React from "react";
import {
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  Users,
  BookOpen,
} from "lucide-react";

const JobCard = ({ job, onEdit, onDelete }) => {
  return (
    <div className="card bg-base-100 border border-base-300  transition-all duration-300 ">
      <div className="card-body">
        {/* Job Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="avatar placeholder">
              <div className="bg-primary text-primary-content rounded-full w-12">
                <span className="text-lg font-bold">
                  {job.jobTitle.charAt(0)}
                </span>
              </div>
            </div>
            <div>
              <h2 className="card-title text-base-content">{job.jobTitle}</h2>
              <p className="text-sm text-base-content/60">{job.jobType}</p>
            </div>
          </div>
          <div className="badge badge-primary badge-lg gap-1">
            {job.experience}+ years
          </div>
        </div>

        <p className="text-base-content/70  line-clamp-2">
          {job.jobDescription}
        </p>

        <div className="divider my-2"></div>

        {/* Job Details */}
        <div className="space-y-3 mb-2">
          <div className="flex items-center gap-3 text-base-content/80">
            <MapPin size={18} className="text-primary flex-shrink-0" />
            <span className="text-sm">{job.jobLocation}</span>
          </div>
          <div className="flex items-center gap-3 text-base-content/80">
            <Clock size={18} className="text-primary flex-shrink-0" />
            <span className="text-sm">{job.jobShiftTime}</span>
          </div>
          <div className="flex items-center gap-3 text-base-content/80">
            <DollarSign size={18} className="text-primary flex-shrink-0" />
            <span className="text-sm">
              ৳{job.jobMinSalary.toLocaleString()} - ৳
              {job.jobMaxSalary.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-3 text-base-content/80">
            <Calendar size={18} className="text-primary flex-shrink-0" />
            <span className="text-sm">
              Apply by: {new Date(job.applicationDeadline).toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="divider my-2"></div>

        {/* Job Highlights */}
        <div className="mb-6">
          <h4 className="font-semibold text-base-content mb-3 flex items-center gap-2">
            <Users size={16} />
            Job Highlights
          </h4>
          <div className="space-y-2">
            {job.jobHighlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-base-content/70">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h4 className="font-semibold text-base-content mb-3 flex items-center gap-2">
            <BookOpen size={16} />
            Required Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, index) => (
              <span key={index} className="badge badge-outline badge-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="card-actions justify-end gap-2">
          <button
            onClick={() => onDelete(job.jobId)}
            className="btn btn-sm btn-error btn-outline"
          >
            Delete
          </button>
          <button
            onClick={() => onEdit(job)}
            className="btn btn-sm btn-primary"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
