import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import JobModal from '../../components/JobModal/JobModal';
import JobCard from '../../components/JobCard/JobCard';

export default function Job() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      jobTitle: "Frontend Developer",
      jobHighlights: [
        "Flexible work schedule",
        "Health insurance",
        "5 working days a week"
      ],
      jobRequirement: "Strong proficiency in React.js and TypeScript.",
      jobResponsibilities: "Develop and maintain front-end features using React.",
      jobLocation: "Dhaka, Bangladesh",
      jobMinSalary: 40000,
      jobMaxSalary: 70000,
      jobShiftTime: "Day (9 AM - 6 PM)",
      jobDescription: "We are looking for a passionate Frontend Developer who loves building user-friendly web applications.",
      jobType: "Full-Time",
      experience: 2,
      education: "Bachelor's degree in Computer Science or equivalent",
      skills: ["React", "TypeScript", "HTML", "CSS", "REST APIs"],
      jobStartDate: "2025-10-20",
      applicationDeadline: "2025-11-10"
    },
    {
      id: 2,
      jobTitle: "Backend Developer",
      jobHighlights: [
        "Remote work options",
        "Performance bonuses",
        "Professional development"
      ],
      jobRequirement: "Strong proficiency in Node.js, Python, and database design.",
      jobResponsibilities: "Design and develop scalable backend systems and APIs.",
      jobLocation: "Remote",
      jobMinSalary: 50000,
      jobMaxSalary: 90000,
      jobShiftTime: "Flexible (Core hours 10 AM - 4 PM)",
      jobDescription: "We are seeking an experienced Backend Developer to build robust server-side applications and APIs.",
      jobType: "Full-Time",
      experience: 3,
      education: "Bachelor's degree in Computer Science or related field",
      skills: ["Node.js", "Python", "MongoDB", "PostgreSQL", "Docker"],
      jobStartDate: "2025-11-01",
      applicationDeadline: "2025-11-20"
    },
    {
      id: 3,
      jobTitle: "UI/UX Designer",
      jobHighlights: [
        "Creative work environment",
        "Latest design tools provided",
        "Career growth opportunities"
      ],
      jobRequirement: "Proven experience in UI/UX design with strong portfolio.",
      jobResponsibilities: "Create user-centered designs and improve user experience.",
      jobLocation: "Chattogram, Bangladesh",
      jobMinSalary: 35000,
      jobMaxSalary: 60000,
      jobShiftTime: "Day (10 AM - 7 PM)",
      jobDescription: "Looking for a creative UI/UX Designer to transform complex problems into intuitive designs.",
      jobType: "Full-Time",
      experience: 2,
      education: "Bachelor's degree in Design or equivalent experience",
      skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
      jobStartDate: "2025-10-25",
      applicationDeadline: "2025-11-15"
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobHighlights: ['', '', ''],
    jobRequirement: '',
    jobResponsibilities: '',
    jobLocation: '',
    jobMinSalary: '',
    jobMaxSalary: '',
    jobShiftTime: '',
    jobDescription: '',
    jobType: 'Full-Time',
    experience: '',
    education: '',
    skills: [],
    jobStartDate: '',
    applicationDeadline: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setJobs(jobs.map(j => j.id === editingId ? { ...j, ...formData } : j));
      setEditingId(null);
    } else {
      const newJob = {
        id: Date.now(),
        ...formData
      };
      setJobs([...jobs, newJob]);
    }
    resetForm();
    setShowModal(false);
  };

  const handleEdit = (job) => {
    setFormData(job);
    setEditingId(job.id);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      setJobs(jobs.filter(j => j.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({
      jobTitle: '',
      jobHighlights: ['', '', ''],
      jobRequirement: '',
      jobResponsibilities: '',
      jobLocation: '',
      jobMinSalary: '',
      jobMaxSalary: '',
      jobShiftTime: '',
      jobDescription: '',
      jobType: 'Full-Time',
      experience: '',
      education: '',
      skills: [],
      jobStartDate: '',
      applicationDeadline: ''
    });
  };

  const openCreateModal = () => {
    setEditingId(null);
    resetForm();
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-base-100 p-8">
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
            Create and manage job postings to attract top talent and grow your team
          </p>
        </div>

        {/* Stats and Actions */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
          <div className="stats  bg-base-100 border border-base-300">
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
            className="btn btn-primary btn-lg gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Post New Job
          </button>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {jobs.map(job => (
            <JobCard
              key={job.id}
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