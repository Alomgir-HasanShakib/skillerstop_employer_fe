import {
  createCompany,
  getAllCompanies,
  updateCompany,
  deleteCompany,
} from "../../api/company/company";
import React, { useEffect, useState } from "react";
import { Building2 } from "lucide-react";
import CompanyModal from "../../components/CompanyModal/CompanyModal";
import CompanyCard from "../../components/CompanyCard/CompanyCard";
import { toast } from "sonner";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading/Loading";

export default function Company() {
  const [companies, setCompanies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    companyOverview: {
      size: "",
      type: "",
      sector: "",
      foundedYear: new Date().getFullYear(),
      industry: "",
      revenue: "",
    },
  });

  // Fetch companies
  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      setLoading(true);
      const data = await getAllCompanies();
      setCompanies(data);
    } catch (error) {
      console.error("Error fetching companies:", error);
      toast.error("Failed to load companies");
    } finally {
      setLoading(false);
    }
  };

  // Check if user email matches any company email
  const userCompanies = companies.filter(
    (company) =>
      company.email &&
      user?.email &&
      company.email.toLowerCase() === user.email.toLowerCase()
  );

  const hasMatchingCompany = userCompanies.length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userEmail = user?.email || formData.email;

    const submitData = {
      ...formData,
      email: userEmail,
      profile: {
        email: userEmail,
        name: formData.name || "",
        phone: formData.phone || "",
      },
    };

    console.log(
      "Submitting company data:",
      JSON.stringify(submitData, null, 2)
    );

    try {
      if (editingId) {
        await updateCompany(editingId, submitData);
        toast.success("Company updated successfully");
      } else {
        if (hasMatchingCompany) {
          toast.error("You can only create one company per account");
          return;
        }

        await createCompany(submitData);
        toast.success("Company created successfully");
      }

      await fetchCompanies();
      resetForm();
      setShowModal(false);
      setEditingId(null);
    } catch (error) {
      console.error("Error saving company:", error);
      console.error("Error response data:", error.response?.data);
      const errorMessage =
        error.response?.data?.message || "Error saving company";
      toast.error(errorMessage);
    }
  };

  const handleEdit = (company) => {
    setFormData({
      name: company.name || "",
      description: company.description || "",
      address: company.address || "",
      phone: company.phone || "",
      email: company.email || "",
      website: company.website || "",
      companyOverview: {
        size: company.companyOverview?.size || "",
        type: company.companyOverview?.type || "",
        sector: company.companyOverview?.sector || "",
        foundedYear:
          company.companyOverview?.foundedYear || new Date().getFullYear(),
        industry: company.companyOverview?.industry || "",
        revenue: company.companyOverview?.revenue || "",
      },
    });
    setEditingId(company.companyId || company._id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    console.log("Deleting company ID:", id);

    if (
      window.confirm(
        "Are you sure you want to delete this company? This action cannot be undone."
      )
    ) {
      try {
        await deleteCompany(id);
        await fetchCompanies();
        toast.success("Company deleted successfully");
      } catch (error) {
        console.error("Error deleting company:", error);
        const errorMessage =
          error.response?.data?.message || "Failed to delete company";
        toast.error(errorMessage);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      address: "",
      phone: "",
      email: "",
      website: "",
      companyOverview: {
        size: "",
        type: "",
        sector: "",
        foundedYear: new Date().getFullYear(),
        industry: "",
        revenue: "",
      },
    });
  };

  const openCreateModal = () => {
    // Check if user can create new company
    if (hasMatchingCompany) {
      toast.error("You can only create one company per account");
      return;
    }

    setEditingId(null);
    resetForm();
    setShowModal(true);
  };

  // Check if user can create company
  const canCreateCompany = !hasMatchingCompany;

  return (
    <div className="bg-base-100 min-h-screen py-10">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6">
            <Building2 className="w-6 h-6" />
            <span className="font-bold">Company Management</span>
          </div>
          <h1 className="text-5xl font-bold text-base-content mb-4">
            Manage Your <span className="text-primary">Companies</span>
          </h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Create and manage your company profiles to attract top talent and
            showcase your organization
          </p>
        </div>

        {/* Stats and Actions */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
          <div className="stats bg-base-100 border border-base-300 ">
            <div className="stat">
              <div className="stat-figure text-primary">
                <Building2 className="w-8 h-8" />
              </div>
              <div className="stat-title">Your Companies</div>
              <div className="stat-desc">Matching company profiles</div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={openCreateModal}
              className={`btn btn-lg gap-3 shadow-lg hover:shadow-xl transition-all duration-300 ${
                canCreateCompany ? "btn-primary" : "btn-disabled"
              }`}
              disabled={!canCreateCompany}
            >
              <Building2 className="w-5 h-5" />
              {canCreateCompany ? "Add New Company" : "Company Limit Reached"}
            </button>
            {!canCreateCompany && (
              <p className="text-sm text-warning mt-2">
                You can only create one company per account.
              </p>
            )}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loading></Loading>
          </div>
        )}

        {/* Companies List */}
        <div className="space-y-6 ">
          {!loading && !hasMatchingCompany && (
            <div className="text-center py-12">
              <Building2 className="w-16 h-16 text-base-content/30 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-base-content mb-2">
                No Company Here
              </h3>
              <p className="text-base-content/70 mb-6">
                {companies.length > 0
                  ? "No company found with your email address"
                  : "Create your first company profile to get started"}
              </p>
              {companies.length === 0 && (
                <button
                  onClick={openCreateModal}
                  className="btn btn-primary btn-lg gap-3"
                >
                  <Building2 className="w-5 h-5" />
                  Create Your First Company
                </button>
              )}
            </div>
          )}

         
          {hasMatchingCompany &&
            userCompanies.map((company) => (
              <CompanyCard
                key={company._id}
                company={company}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
        </div>
      </div>

      {/* Modal */}
      <CompanyModal
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
