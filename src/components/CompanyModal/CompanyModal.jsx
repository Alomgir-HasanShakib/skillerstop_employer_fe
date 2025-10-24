import React from "react";
import { Building2 } from "lucide-react";
import useAuth from "../../hooks/useAuth";

const CompanyModal = ({
  showModal,
  setShowModal,
  editingId,
  formData,
  setFormData,
  onSubmit,
  setEditingId,
}) => {
  const { user } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOverviewChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      companyOverview: {
        ...prev.companyOverview,
        [name]: name === "foundedYear" ? parseInt(value) : value,
      },
    }));
  };

  const handleClose = () => {
    setShowModal(false);
    setEditingId(null);
  };

  // Set user email as default value when modal opens for creating new company
  React.useEffect(() => {
    if (showModal && !editingId && user?.email) {
      setFormData((prev) => ({
        ...prev,
        email: user.email
      }));
    }
  }, [showModal, editingId, user]);

  return (
    <div className={`modal ${showModal ? "modal-open" : ""}`}>
      <div className="modal-box w-full max-w-4xl bg-base-100 border border-base-300 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-primary rounded-2xl">
            <Building2 className="w-6 h-6 text-primary-content" />
          </div>
          <div>
            <h3 className="font-bold text-2xl text-base-content">
              {editingId ? "Edit Company" : "Create New Company"}
            </h3>
            <p className="text-base-content/60 text-sm">
              Fill in the company details below
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-6 max-h-96 overflow-y-auto pr-2"
        >
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Company Name *
                </span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter company name"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Email Address *
                </span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="company@example.com"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20 bg-base-200 cursor-not-allowed"
                required
                disabled
                title="Email cannot be changed"
              />
              <label className="label">
                <span className="label-text-alt text-base-content/50">
                  Your account email (cannot be changed)
                </span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Description
                </span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Brief description about your company..."
                className="textarea textarea-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
                rows="3"
              ></textarea>
            </div>
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Address
                </span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Company address"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Phone
                </span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+880XXXXXXXXX"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Website
                </span>
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="https://example.com"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Company Overview Section */}
          <div className="divider text-base-content/60">Company Overview</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Company Size
                </span>
              </label>
              <input
                type="text"
                name="size"
                value={formData.companyOverview.size}
                onChange={handleOverviewChange}
                placeholder="e.g., 50-100 employees"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Company Type
                </span>
              </label>
              <input
                type="text"
                name="type"
                value={formData.companyOverview.type}
                onChange={handleOverviewChange}
                placeholder="e.g., Private Limited"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Sector
                </span>
              </label>
              <input
                type="text"
                name="sector"
                value={formData.companyOverview.sector}
                onChange={handleOverviewChange}
                placeholder="e.g., IT Services"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Industry
                </span>
              </label>
              <input
                type="text"
                name="industry"
                value={formData.companyOverview.industry}
                onChange={handleOverviewChange}
                placeholder="e.g., Software Development"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Founded Year
                </span>
              </label>
              <input
                type="number"
                name="foundedYear"
                value={formData.companyOverview.foundedYear}
                onChange={handleOverviewChange}
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Annual Revenue
                </span>
              </label>
              <input
                type="text"
                name="revenue"
                value={formData.companyOverview.revenue}
                onChange={handleOverviewChange}
                placeholder="e.g., 1M USD"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Modal Actions */}
          <div className="modal-action mt-8 gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="btn btn-ghost"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary gap-2">
              {editingId ? "Update Company" : "Create Company"}
            </button>
          </div>
        </form>
      </div>
      <div className="modal-backdrop" onClick={handleClose}></div>
    </div>
  );
};

export default CompanyModal;