import React from "react";
import {
  MapPin,
  DollarSign,
  Clock,
  Bookmark,
  Building2,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";

export default function FeaturedJobs() {
  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Solutions",
      logo: "💻",
      salary: "$80-120/hr",
      location: "Remote",
      type: "Full Time",
      posted: "2 days ago",
      applicants: 15,
      tags: ["React", "TypeScript", "Node.js"],
      featured: true,
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Creative Studio",
      logo: "🎨",
      salary: "$50-80/hr",
      location: "New York, USA",
      type: "Contract",
      posted: "1 day ago",
      applicants: 23,
      tags: ["Figma", "UI Design", "Prototyping"],
      featured: true,
    },
    {
      id: 3,
      title: "Content Writer",
      company: "Marketing Hub",
      logo: "✍️",
      salary: "$30-50/hr",
      location: "Remote",
      type: "Part Time",
      posted: "3 days ago",
      applicants: 31,
      tags: ["SEO", "Copywriting", "Blog Writing"],
      featured: false,
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      logo: "🚀",
      salary: "$70-100/hr",
      location: "London, UK",
      type: "Full Time",
      posted: "4 days ago",
      applicants: 42,
      tags: ["MERN", "AWS", "Docker"],
      featured: true,
    },
    {
      id: 5,
      title: "Digital Marketing Specialist",
      company: "Growth Agency",
      logo: "📱",
      salary: "$40-60/hr",
      location: "Remote",
      type: "Contract",
      posted: "5 days ago",
      applicants: 28,
      tags: ["Google Ads", "Facebook Ads", "Analytics"],
      featured: false,
    },
    {
      id: 6,
      title: "Data Analyst",
      company: "DataTech Inc",
      logo: "📊",
      salary: "$60-90/hr",
      location: "San Francisco, USA",
      type: "Full Time",
      posted: "1 week ago",
      applicants: 19,
      tags: ["Python", "SQL", "Tableau"],
      featured: true,
    },
    {
      id: 7,
      title: "WordPress Developer",
      company: "WebDesign Pro",
      logo: "🌐",
      salary: "$35-55/hr",
      location: "Remote",
      type: "Part Time",
      posted: "3 days ago",
      applicants: 37,
      tags: ["WordPress", "PHP", "CSS"],
      featured: false,
    },
    {
      id: 8,
      title: "Mobile App Developer",
      company: "AppMakers Ltd",
      logo: "📲",
      salary: "$75-110/hr",
      location: "Toronto, Canada",
      type: "Full Time",
      posted: "2 days ago",
      applicants: 26,
      tags: ["React Native", "iOS", "Android"],
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen  py-16 ">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-3">
            Top Posted <span className="text-primary">Jobs</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Discover the best freelance opportunities from top companies around
            the world
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="card bg-base-100   transition-all duration-300 border border-base-content/10 relative overflow-hidden group"
            >
              {/* Featured Badge */}
              {job.featured && (
                <div className="absolute top-0 right-0 bg-primary text-primary-content px-3 py-1 text-xs font-bold rounded-bl-lg">
                  FEATURED
                </div>
              )}

              <div className="card-body">
                {/* Company Logo & Bookmark */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-base-200 rounded-lg flex items-center justify-center text-3xl">
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base-content/70 text-sm">
                        {job.company}
                      </h3>
                    </div>
                  </div>
                  <button className="btn btn-ghost btn-circle btn-sm hover:bg-primary hover:text-primary-content">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                {/* Job Title */}
                <h3 className="card-title text-xl text-base-content mb-2 group-hover:text-primary transition-colors">
                  {job.title}
                </h3>

                {/* Job Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-base-content/60">
                    <DollarSign className="w-4 h-4 text-success" />
                    <span className="font-semibold text-success">
                      {job.salary}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-base-content/60">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-base-content/60">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.posted}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{job.applicants} applicants</span>
                    </div>
                  </div>
                </div>

                {/* Job Type Badge */}
                <div className="mb-4">
                  <span className="badge badge-outline badge-sm">
                    {job.type}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="badge badge-secondary badge-sm text-black/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Bottom Border */}
              <div className="h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link to="/browseJobs">
            <button className="btn btn-primary btn-lg hover:bg-transparent hover:text-base-content hover:shadow-none gap-2">
              View All Jobs
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
