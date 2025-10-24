import React from 'react';
import { Briefcase } from 'lucide-react';

const JobModal = ({ 
  showModal, 
  setShowModal, 
  editingId, 
  formData, 
  setFormData, 
  onSubmit, 
  setEditingId 
}) => {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleHighlightChange = (index, value) => {
    const newHighlights = [...formData.jobHighlights];
    newHighlights[index] = value;
    setFormData(prev => ({
      ...prev,
      jobHighlights: newHighlights
    }));
  };

  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(',').map(skill => skill.trim()).filter(skill => skill);
    setFormData(prev => ({
      ...prev,
      skills
    }));
  };

  const handleClose = () => {
    setShowModal(false);
    setEditingId(null);
  };

  return (
    <div className={`modal ${showModal ? 'modal-open' : ''}`}>
      <div className="modal-box w-full max-w-4xl bg-base-100 border border-base-300 shadow-2xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-primary rounded-2xl">
            <Briefcase className="w-6 h-6 text-primary-content" />
          </div>
          <div>
            <h3 className="font-bold text-2xl text-base-content">
              {editingId ? 'Edit Job Post' : 'Create New Job Post'}
            </h3>
            <p className="text-base-content/60 text-sm">Fill in the job details below</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-6 overflow-y-auto pr-2 max-h-[60vh]">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Job Title *</span>
              </label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                placeholder="e.g., Frontend Developer"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Job Type *</span>
              </label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleInputChange}
                className="select select-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Contract">Contract</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>

          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text font-semibold text-base-content">Job Description *</span>
            </label>
            <textarea
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleInputChange}
              placeholder="Describe the job role and responsibilities..."
              className="textarea textarea-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
              rows="3"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Location *</span>
              </label>
              <input
                type="text"
                name="jobLocation"
                value={formData.jobLocation}
                onChange={handleInputChange}
                placeholder="e.g., Dhaka, Bangladesh"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Shift Time *</span>
              </label>
              <input
                type="text"
                name="jobShiftTime"
                value={formData.jobShiftTime}
                onChange={handleInputChange}
                placeholder="e.g., Day (9 AM - 6 PM)"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>
          </div>

          {/* Salary Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Minimum Salary (BDT) *</span>
              </label>
              <input
                type="number"
                name="jobMinSalary"
                value={formData.jobMinSalary}
                onChange={handleInputChange}
                placeholder="40000"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Maximum Salary (In) *</span>
              </label>
              <input
                type="number"
                name="jobMaxSalary"
                value={formData.jobMaxSalary}
                onChange={handleInputChange}
                placeholder="70000"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>
          </div>

          {/* Job Highlights */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base-content">Job Highlights</span>
            </label>
            <div className="space-y-2 space-x-2">
              {formData.jobHighlights.map((highlight, index) => (
                <input
                  key={index}
                  type="text"
                  value={highlight}
                  onChange={(e) => handleHighlightChange(index, e.target.value)}
                  placeholder={`Highlight ${index + 1} (e.g., Health insurance)`}
                  className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              ))}
            </div>
          </div>

          {/* Requirements and Responsibilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Requirements *</span>
              </label>
              <textarea
                name="jobRequirement"
                value={formData.jobRequirement}
                onChange={handleInputChange}
                placeholder="Job requirements..."
                className="textarea textarea-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
                rows="3"
                required
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Responsibilities *</span>
              </label>
              <textarea
                name="jobResponsibilities"
                value={formData.jobResponsibilities}
                onChange={handleInputChange}
                placeholder="Job responsibilities..."
                className="textarea textarea-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
                rows="3"
                required
              ></textarea>
            </div>
          </div>

          {/* Skills and Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Skills (comma separated) *</span>
              </label>
              <input
                type="text"
                value={formData.skills.join(', ')}
                onChange={handleSkillsChange}
                placeholder="React, TypeScript, HTML, CSS"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Education *</span>
              </label>
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                placeholder="e.g., Bachelor's degree in Computer Science"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>
          </div>

          {/* Experience and Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Experience (years) *</span>
              </label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="2"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Application Deadline *</span>
              </label>
              <input
                type="date"
                name="applicationDeadline"
                value={formData.applicationDeadline}
                onChange={handleInputChange}
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>
          </div>

          {/* Modal Actions */}
          <div className="modal-action mt-8 gap-3 sticky bottom-0 bg-base-100 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="btn btn-ghost"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary gap-2"
            >
              {editingId ? 'Update Job' : 'Create Job'}
            </button>
          </div>
        </form>
      </div>
      <div className="modal-backdrop" onClick={handleClose}></div>
    </div>
  );
};

export default JobModal;