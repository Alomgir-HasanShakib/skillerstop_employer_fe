import React from 'react';
import { MapPin, Phone, Mail, Globe, Users, Briefcase, Calendar, DollarSign, Edit3, Trash2 } from 'lucide-react';

const CompanyCard = ({ company, onEdit, onDelete }) => {
  // Safe value access functions
  const getSafeValue = (value, defaultValue = 'Not specified') => {
    return value || defaultValue;
  };

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : 'C';
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto  py-8">
        {/* Main Card */}
        <div className="card bg-base-100 border border-base-content/10 ">
          {/* Header Section with Gradient */}
          <div className="border-b border-base-content/10 p-8 md:p-10 bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
              <div className="avatar placeholder">
                <div className="bg-primary text-primary-content rounded-full w-28 md:w-32 border-4 border-base-100 shadow-lg">
                  <span className="text-5xl md:text-6xl font-bold">
                    {getInitial(company.name)}
                  </span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-base-content">
                  {getSafeValue(company.name, 'Unnamed Company')}
                </h1>
                <p className="text-base-content/70 text-xl">
                  {getSafeValue(company.companyOverview?.industry)}
                </p>
              </div>
              <div className="hidden md:block text-right">
                <div className="badge badge-lg gap-2 px-4 py-4 bg-primary text-primary-content border-0">
                  <Briefcase size={20} />
                  <span className="font-bold text-base">
                    {getSafeValue(company.companyOverview?.type, 'Company')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body p-8 md:p-10">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
              <div className="badge badge-primary gap-2 px-4 py-3">
                <Briefcase size={16} />
                {getSafeValue(company.companyOverview?.type, 'Company')}
              </div>
              <div className="badge badge-secondary gap-2 px-4 py-3">
                {getSafeValue(company.companyOverview?.sector, 'Sector not specified')}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-base-content mb-3">About Company</h3>
              <p className="text-base-content/80 leading-relaxed text-justify">
                {getSafeValue(company.description, 'No description provided.')}
              </p>
            </div>

            <div className="divider my-4"></div>

            {/* Contact Information */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-base-content mb-4">Contact Information</h3>
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-4 p-4 bg-base-200 rounded-lg border border-base-content/5 hover:bg-base-300 transition-colors">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base-content/60 text-xs font-semibold mb-1">Address</p>
                    <p className="text-base-content font-medium text-sm break-words">
                      {getSafeValue(company.address, 'Address not specified')}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-base-200 rounded-lg border border-base-content/5 hover:bg-base-300 transition-colors">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base-content/60 text-xs font-semibold mb-1">Phone</p>
                    {company.phone ? (
                      <a 
                        href={`tel:${company.phone}`} 
                        className="text-base-content font-medium text-sm hover:text-primary transition-colors break-all"
                      >
                        {company.phone}
                      </a>
                    ) : (
                      <p className="text-base-content/60 text-sm">Phone not specified</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-base-200 rounded-lg border border-base-content/5 hover:bg-base-300 transition-colors">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base-content/60 text-xs font-semibold mb-1">Email</p>
                    {company.email ? (
                      <a 
                        href={`mailto:${company.email}`} 
                        className="text-base-content font-medium text-sm hover:text-primary transition-colors break-all"
                      >
                        {company.email}
                      </a>
                    ) : (
                      <p className="text-base-content/60 text-sm">Email not specified</p>
                    )}
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4 p-4 bg-base-200 rounded-lg border border-base-content/5 hover:bg-base-300 transition-colors">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Globe size={24} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base-content/60 text-xs font-semibold mb-1">Website</p>
                    {company.website ? (
                      <a 
                        href={company.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-base-content font-medium text-sm hover:text-primary transition-colors break-all"
                      >
                        {company.website}
                      </a>
                    ) : (
                      <p className="text-base-content/60 text-sm">Website not specified</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="divider my-4"></div>

            {/* Company Overview Stats */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-base-content mb-4">Company Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Company Size */}
                <div className="bg-base-200 p-5 rounded-lg border border-base-content/5 hover:bg-base-300 transition-colors">
                  <p className="text-base-content/60 text-xs mb-2 flex items-center gap-2 font-semibold">
                    <Users size={18} className="text-primary" /> Company Size
                  </p>
                  <p className="text-base-content font-bold text-lg">
                    {getSafeValue(company.companyOverview?.size, 'Not specified')}
                  </p>
                </div>

                {/* Founded Year */}
                <div className="bg-base-200 p-5 rounded-lg border border-base-content/5 hover:bg-base-300 transition-colors">
                  <p className="text-base-content/60 text-xs mb-2 flex items-center gap-2 font-semibold">
                    <Calendar size={18} className="text-primary" /> Founded
                  </p>
                  <p className="text-base-content font-bold text-lg">
                    {getSafeValue(company.companyOverview?.foundedYear, 'Not specified')}
                  </p>
                </div>

                {/* Revenue */}
                <div className="bg-base-200 p-5 rounded-lg border border-base-content/5 hover:bg-base-300 transition-colors">
                  <p className="text-base-content/60 text-xs mb-2 flex items-center gap-2 font-semibold">
                    <DollarSign size={18} className="text-primary" /> Revenue
                  </p>
                  <p className="text-base-content font-bold text-lg">
                    {getSafeValue(company.companyOverview?.revenue, 'Not specified')}
                  </p>
                </div>

                {/* Sector */}
                <div className="bg-base-200 p-5 rounded-lg border border-base-content/5 hover:bg-base-300 transition-colors">
                  <p className="text-base-content/60 text-xs mb-2 flex items-center gap-2 font-semibold">
                    <Briefcase size={18} className="text-primary" /> Sector
                  </p>
                  <p className="text-base-content font-bold text-lg">
                    {getSafeValue(company.companyOverview?.sector, 'Not specified')}
                  </p>
                </div>
              </div>
            </div>

            <div className="divider my-4"></div>

            {/* Action Buttons */}
            <div className="card-actions justify-center md:justify-end gap-3 flex-wrap">
              <button
                onClick={() => onDelete(company.id || company.companyId)}
                className="btn btn-error btn-outline gap-2"
              >
                <Trash2 size={18} />
                Delete Company
              </button>
              <button
                onClick={() => onEdit(company)}
                className="btn btn-primary gap-2"
              >
                <Edit3 size={18} />
                Edit Company
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;