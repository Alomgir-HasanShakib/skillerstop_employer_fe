import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

export default function PostJobs() {
  const [formData, setFormData] = useState({
    title: '',
    college: '',
    location: '',
    salary: '',
    type: 'Full-time',
    description: '',
    requirements: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.college || !formData.location || !formData.salary || !formData.description) {
      alert('Please fill all required fields!');
      return;
    }

    alert('Job posted successfully!');
    console.log('Posted Job:', formData);
    
    setFormData({
      title: '',
      college: '',
      location: '',
      salary: '',
      type: 'Full-time',
      description: '',
      requirements: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2 flex items-center gap-3">
            <BookOpen size={40} />
            Post a New Job
          </h1>
          <p className="text-lg text-base-content opacity-70">
            Create a new job opportunity for your college
          </p>
        </div>

        {/* Form Card */}
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Title */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Job Title *</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Computer Science Instructor"
                    className="input input-bordered input-primary w-full"
                  />
                </div>

                {/* College */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">College Name *</span>
                  </label>
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleInputChange}
                    placeholder="e.g., Harvard College"
                    className="input input-bordered input-primary w-full"
                  />
                </div>

                {/* Location */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Location *</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g., New York, NY"
                    className="input input-bordered input-primary w-full"
                  />
                </div>

                {/* Salary */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Salary Range *</span>
                  </label>
                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    placeholder="e.g., $50,000 - $70,000"
                    className="input input-bordered input-primary w-full"
                  />
                </div>

                {/* Job Type */}
                <div className="form-control md:col-span-2">
                  <label className="label">
                    <span className="label-text font-semibold">Job Type *</span>
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="select select-bordered select-primary w-full"
                  >
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Job Description *</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Provide detailed description of the job role and responsibilities..."
                  className="textarea textarea-bordered textarea-primary w-full h-24"
                />
              </div>

              {/* Requirements */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Requirements (comma separated)</span>
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="e.g., B.S. in Computer Science, 3+ years experience, Excellent communication skills"
                  className="textarea textarea-bordered textarea-primary w-full h-20"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 justify-end pt-6">
                <button
                  onClick={() => setFormData({
                    title: '',
                    college: '',
                    location: '',
                    salary: '',
                    type: 'Full-time',
                    description: '',
                    requirements: ''
                  })}
                  className="btn btn-ghost"
                >
                  Clear
                </button>
                <button onClick={handleSubmit} className="btn btn-primary">
                  Post Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}