import React from 'react';
import { MapPin, Phone, Mail, Globe, Users, Briefcase, Calendar, DollarSign } from 'lucide-react';

const CompanyCard = ({ company, onEdit, onDelete }) => {
  return (
    <div className="card bg-base-100 border border-base-content/10   transition-all duration-300 ">
      <div className="card-body">
        {/* Company Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="avatar placeholder">
              <div className="bg-primary text-primary-content rounded-full w-12">
                <span className="text-lg font-bold">{company.name.charAt(0)}</span>
              </div>
            </div>
            <div>
              <h2 className="card-title text-base-content">{company.name}</h2>
              <p className="text-sm text-base-content/60">{company.companyOverview.industry}</p>
            </div>
          </div>
          <div className="badge badge-primary badge-lg gap-1">
            <Briefcase className="w-3 h-3" />
            {company.companyOverview.type}
          </div>
        </div>

        <p className="text-base-content/70 mb-6">{company.description}</p>

        <div className="divider my-2"></div>

        {/* Contact Information */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-base-content/80">
            <MapPin size={18} className="text-primary flex-shrink-0" />
            <span className="text-sm">{company.address}</span>
          </div>
          <div className="flex items-center gap-3 text-base-content/80">
            <Phone size={18} className="text-primary flex-shrink-0" />
            <a href={`tel:${company.phone}`} className="text-sm hover:text-primary transition-colors">{company.phone}</a>
          </div>
          <div className="flex items-center gap-3 text-base-content/80">
            <Mail size={18} className="text-primary flex-shrink-0" />
            <a href={`mailto:${company.email}`} className="text-sm hover:text-primary transition-colors">{company.email}</a>
          </div>
          <div className="flex items-center gap-3 text-base-content/80">
            <Globe size={18} className="text-primary flex-shrink-0" />
            <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors truncate">{company.website}</a>
          </div>
        </div>

        <div className="divider my-2"></div>

        {/* Company Overview Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-base-200 p-3 rounded-lg">
            <p className="text-base-content/60 text-xs mb-1 flex items-center gap-1">
              <Users size={14} /> Size
            </p>
            <p className="text-base-content font-semibold text-sm">{company.companyOverview.size}</p>
          </div>
          <div className="bg-base-200 p-3 rounded-lg">
            <p className="text-base-content/60 text-xs mb-1 flex items-center gap-1">
              <Briefcase size={14} /> Sector
            </p>
            <p className="text-base-content font-semibold text-sm">{company.companyOverview.sector}</p>
          </div>
          <div className="bg-base-200 p-3 rounded-lg">
            <p className="text-base-content/60 text-xs mb-1 flex items-center gap-1">
              <Calendar size={14} /> Founded
            </p>
            <p className="text-base-content font-semibold text-sm">{company.companyOverview.foundedYear}</p>
          </div>
          <div className="bg-base-200 p-3 rounded-lg">
            <p className="text-base-content/60 text-xs mb-1 flex items-center gap-1">
              <DollarSign size={14} /> Revenue
            </p>
            <p className="text-base-content font-semibold text-sm">{company.companyOverview.revenue}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="card-actions justify-end gap-2">
          <button
            onClick={() => onDelete(company.id)}
            className="btn btn-sm btn-error btn-outline"
          >
            Delete
          </button>
          <button
            onClick={() => onEdit(company)}
            className="btn btn-sm btn-primary"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;