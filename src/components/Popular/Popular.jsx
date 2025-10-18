import React from "react";
import {
  Code,
  Palette,
  TrendingUp,
  Database,
  FileText,
  Headphones,
  Briefcase,
  Camera,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";

export default function Popular() {
  const categories = [
    {
      id: 1,
      name: "Web Development",
      icon: Code,
      color: "bg-primary",
      jobs: "2,450+ jobs",
    },
    {
      id: 2,
      name: "Graphic Design",
      icon: Palette,
      color: "bg-secondary",
      jobs: "1,890+ jobs",
    },
    {
      id: 3,
      name: "Marketing",
      icon: TrendingUp,
      color: "bg-accent",
      jobs: "1,560+ jobs",
    },
    {
      id: 4,
      name: "Data Entry",
      icon: Database,
      color: "bg-info",
      jobs: "3,200+ jobs",
    },
    {
      id: 5,
      name: "Writing & Translation",
      icon: FileText,
      color: "bg-success",
      jobs: "1,720+ jobs",
    },
    {
      id: 6,
      name: "Customer Support",
      icon: Headphones,
      color: "bg-warning",
      jobs: "980+ jobs",
    },
    {
      id: 7,
      name: "Business Consulting",
      icon: Briefcase,
      color: "bg-error",
      jobs: "1,120+ jobs",
    },
    {
      id: 8,
      name: "Photography",
      icon: Camera,
      color: "bg-primary",
      jobs: "850+ jobs",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-3">
            Popular <span className="text-primary">Categories</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Browse through the most in-demand freelance categories and find your
            perfect opportunity
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="card bg-base-100   transition-all duration-300 border border-base-content/10  "
              >
                <div className="card-body">
                  {/* Icon */}
                  <div
                    className={`${category.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-7 h-7 text-base-100" />
                  </div>

                  {/* Category Name */}
                  <h3 className="card-title text-xl text-base-content hover:text-primary transition-colors">
                    {category.name}
                  </h3>

                  {/* Jobs Count */}
                  <p className="text-sm text-base-content/60 mb-2">
                    {category.jobs}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link to="/browseJobs">
            <button className="btn btn-primary btn-lg hover:bg-transparent hover:text-base-content hover:shadow-none gap-2">
              View All Categories Jobs
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
