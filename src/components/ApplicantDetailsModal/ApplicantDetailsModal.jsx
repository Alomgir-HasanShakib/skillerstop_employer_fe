import React from "react";
import {
  X,
  User,
  Mail,
  Phone,
  MapPin,
  Home,
  Calendar,
  DollarSign,
  Award,
  Languages,
  Briefcase,
  GraduationCap,
  FileText,
  MessageCircle,
} from "lucide-react";

export default function ApplicantDetailsModal({ 
  isOpen, 
  applicant, 
  onClose 
}) {
  if (!isOpen || !applicant) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box relative max-w-4xl max-h-[90vh] overflow-hidden p-0 bg-gradient-to-br from-base-100 to-base-200">
        {/* Header with Gradient Background */}
        <div className="border border-base-content/10 p-6 sticky top-0 z-10">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 hover:bg-white/20"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className="avatar placeholder">
              <div className="bg-base-100 text-primary rounded-full w-16 ring ring-primary-content ring-offset-base-100 ring-offset-2">
                <span className="text-2xl flex justify-center items-center font-bold w-full h-full">
                  {(applicant.name || "?")[0].toUpperCase()}
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                {applicant.name || "No Name"}
              </h3>
              <p className="text-base-content/60 flex items-center gap-2 mt-1">
                <Mail className="w-4 h-4" />
                {applicant.email}
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-180px)] p-6">
          <div className="space-y-6">
            {/* Contact Information Card */}
            <div className="card bg-base-100 border border-base-content/10">
              <div className="card-body">
                <h4 className="card-title text-lg flex items-center gap-2 mb-4">
                  <Phone className="w-5 h-5 text-primary" />
                  Contact Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3 bg-base-200 rounded-lg">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-xs text-base-content/60 font-medium">
                        Primary Phone
                      </p>
                      <p className="font-semibold">
                        {applicant.phone}
                      </p>
                    </div>
                  </div>

                  {applicant.altPhone && (
                    <div className="flex items-start gap-3 p-3 bg-base-200 rounded-lg">
                      <Phone className="w-5 h-5 text-secondary mt-0.5" />
                      <div>
                        <p className="text-xs text-base-content/60 font-medium">
                          Alternate Phone
                        </p>
                        <p className="font-semibold">
                          {applicant.altPhone}
                        </p>
                      </div>
                    </div>
                  )}

                  {applicant.whatsappPhone && (
                    <div className="flex items-start gap-3 p-3 bg-base-200 rounded-lg">
                      <MessageCircle className="w-5 h-5 text-success mt-0.5" />
                      <div>
                        <p className="text-xs text-base-content/60 font-medium">
                          WhatsApp
                        </p>
                        <p className="font-semibold">
                          {applicant.whatsappPhone}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3 p-3 bg-base-200 rounded-lg">
                    <Mail className="w-5 h-5 text-info mt-0.5" />
                    <div>
                      <p className="text-xs text-base-content/60 font-medium">
                        Email Address
                      </p>
                      <p className="font-semibold break-all">
                        {applicant.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Information Card */}
            {(applicant.gender || applicant.dob) && (
              <div className="card bg-base-100 border border-base-content/10">
                <div className="card-body">
                  <h4 className="card-title text-lg flex items-center gap-2 mb-4">
                    <User className="w-5 h-5 text-primary" />
                    Personal Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {applicant.gender && (
                      <div className="flex items-start gap-3 p-3 bg-base-200 rounded-lg">
                        <User className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-xs text-base-content/60 font-medium">
                            Gender
                          </p>
                          <p className="font-semibold">
                            {applicant.gender}
                          </p>
                        </div>
                      </div>
                    )}

                    {applicant.dob && (
                      <div className="flex items-start gap-3 p-3 bg-base-200 rounded-lg">
                        <Calendar className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <p className="text-xs text-base-content/60 font-medium">
                            Date of Birth
                          </p>
                          <p className="font-semibold">
                            {new Date(
                              applicant.dob
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Location Information Card */}
            {(applicant.currentLocation || applicant.homeLocation) && (
              <div className="card bg-base-100 border border-base-content/10">
                <div className="card-body">
                  <h4 className="card-title text-lg flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    Location Details
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {applicant.currentLocation && (
                      <div className="flex items-start gap-3 p-3 bg-base-200 rounded-lg">
                        <MapPin className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-xs text-base-content/60 font-medium">
                            Current Location
                          </p>
                          <p className="font-semibold">
                            {applicant.currentLocation}
                          </p>
                        </div>
                      </div>
                    )}

                    {applicant.homeLocation && (
                      <div className="flex items-start gap-3 p-3 bg-base-200 rounded-lg">
                        <Home className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <p className="text-xs text-base-content/60 font-medium">
                            Home Location
                          </p>
                          <p className="font-semibold">
                            {applicant.homeLocation}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Salary Information Card */}
            {applicant.currentMonthlySalary && (
              <div className="card bg-gradient-to-br from-success/10 to-success/5 border border-base-content/10">
                <div className="card-body">
                  <h4 className="card-title text-lg flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-success" />
                    Current Monthly Salary
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="badge badge-success badge-lg gap-2">
                      <DollarSign className="w-4 h-4" />₹
                      {applicant.currentMonthlySalary.toLocaleString()}
                      /month
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Card */}
            {applicant.skills?.length > 0 && (
              <div className="card bg-base-100 border border-base-content/10">
                <div className="card-body">
                  <h4 className="card-title text-lg flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {applicant.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="badge badge-lg badge-outline gap-2"
                      >
                        <Award className="w-3 h-3" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Languages Card */}
            {applicant.knownLanguages?.length > 0 && (
              <div className="card bg-base-100 border border-base-content/10">
                <div className="card-body">
                  <h4 className="card-title text-lg flex items-center gap-2 mb-4">
                    <Languages className="w-5 h-5 text-primary" />
                    Known Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {applicant.knownLanguages.map(
                      (language, index) => (
                        <div
                          key={index}
                          className="badge badge-lg badge-primary gap-2"
                        >
                          <Languages className="w-3 h-3" />
                          {language}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Work Experience Card */}
            {applicant.workExp?.length > 0 && (
              <div className="card bg-base-100 border border-base-content/10">
                <div className="card-body">
                  <h4 className="card-title text-lg flex items-center gap-2 mb-4">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Work Experience
                  </h4>
                  <div className="space-y-3">
                    {applicant.workExp.map((exp, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-base-200 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <p className="flex-1">{exp}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Educational Experience Card */}
            {applicant.educationalExp?.length > 0 && (
              <div className="card bg-base-100 border border-base-content/10">
                <div className="card-body">
                  <h4 className="card-title text-lg flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Educational Experience
                  </h4>
                  <div className="space-y-3">
                    {applicant.educationalExp.map((edu, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-base-200 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="mt-1">
                          <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        </div>
                        <p className="flex-1">{edu}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Certificates Card */}
            {applicant.certificates?.length > 0 && (
              <div className="card bg-base-100 border border-base-content/10">
                <div className="card-body">
                  <h4 className="card-title text-lg flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    Certificates
                  </h4>
                  <div className="space-y-3">
                    {applicant.certificates.map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-gradient-to-r from-warning/10 to-warning/5 rounded-lg border border-warning/20 hover:shadow-md transition-shadow"
                      >
                        <Award className="w-5 h-5 text-warning mt-0.5" />
                        <p className="flex-1">{cert}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Documents Card */}
            {applicant.documents?.length > 0 && (
              <div className="card bg-base-100 border border-base-content/10">
                <div className="card-body">
                  <h4 className="card-title text-lg flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-primary" />
                    Documents
                  </h4>
                  <div className="space-y-2">
                    {applicant.documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-base-200 rounded-lg hover:bg-base-300 transition-colors cursor-pointer"
                      >
                        <FileText className="w-5 h-5 text-info" />
                        <p className="flex-1">{doc}</p>
                        <button className="btn btn-sm btn-ghost btn-circle">
                          {/* Download icon can be added here */}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="modal-action sticky bottom-0 bg-base-100 border-t border-base-300 p-4 m-0">
          <button
            className="btn btn-outline hover:text-white btn-error gap-2"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
            Close
          </button>
        </div>
      </div>
    </div>
  );
}