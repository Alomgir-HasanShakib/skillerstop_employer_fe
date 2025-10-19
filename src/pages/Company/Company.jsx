import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import CompanyModal from '../../components/CompanyModal/CompanyModal';
import CompanyCard from '../../components/CompanyCard/CompanyCard';

export default function Company() {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "TechNova Solutions Ltd.",
      description: "We provide AI-based CRM solutions for businesses of all sizes.",
      address: "House 12, Road 5, Banani, Dhaka",
      phone: "+8801787654321",
      email: "info@technova.com",
      website: "https://technova.com",
      companyOverview: {
        size: "50-100 employees",
        type: "Private Limited",
        sector: "IT Services",
        foundedYear: 2021,
        industry: "Software",
        revenue: "1M USD"
      }
    },
    {
      id: 2,
      name: "Digital Innovations Inc.",
      description: "Leading digital transformation agency specializing in web and mobile solutions.",
      address: "Road 7, Dhanmondi, Dhaka",
      phone: "+8801987654321",
      email: "contact@digitalinnovations.com",
      website: "https://digitalinnovations.com",
      companyOverview: {
        size: "100-200 employees",
        type: "Public Limited",
        sector: "Digital Agency",
        foundedYear: 2018,
        industry: "Technology",
        revenue: "5M USD"
      }
    },
    {
      id: 3,
      name: "CloudTech Systems",
      description: "Cloud infrastructure and DevOps solutions for modern enterprises.",
      address: "Gulshan 1, Dhaka",
      phone: "+8801687654321",
      email: "hello@cloudtech.com",
      website: "https://cloudtech.com",
      companyOverview: {
        size: "20-50 employees",
        type: "Private Limited",
        sector: "Cloud Services",
        foundedYear: 2020,
        industry: "Infrastructure",
        revenue: "2M USD"
      }
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    companyOverview: {
      size: '',
      type: '',
      sector: '',
      foundedYear: new Date().getFullYear(),
      industry: '',
      revenue: ''
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setCompanies(companies.map(c => c.id === editingId ? { ...c, ...formData } : c));
      setEditingId(null);
    } else {
      const newCompany = {
        id: Date.now(),
        ...formData
      };
      setCompanies([...companies, newCompany]);
    }
    resetForm();
    setShowModal(false);
  };

  const handleEdit = (company) => {
    setFormData(company);
    setEditingId(company.id);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this company?')) {
      setCompanies(companies.filter(c => c.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      address: '',
      phone: '',
      email: '',
      website: '',
      companyOverview: {
        size: '',
        type: '',
        sector: '',
        foundedYear: new Date().getFullYear(),
        industry: '',
        revenue: ''
      }
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
            <Building2 className="w-6 h-6" />
            <span className="font-bold">Company Management</span>
          </div>
          <h1 className="text-5xl font-bold text-base-content mb-4">
            Manage Your <span className="text-primary">Companies</span>
          </h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Create and manage your company profiles to attract top talent and showcase your organization
          </p>
        </div>

        {/* Stats and Actions */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
          <div className="stats shadow-lg bg-base-100 border border-base-300">
            <div className="stat">
              <div className="stat-figure text-primary">
                <Building2 className="w-8 h-8" />
              </div>
              <div className="stat-title">Total Companies</div>
              <div className="stat-value text-primary">{companies.length}</div>
              <div className="stat-desc">Active company profiles</div>
            </div>
          </div>

          <button
            onClick={openCreateModal}
            className="btn btn-primary btn-lg gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Add New Company
          </button>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {companies.map(company => (
            <CompanyCard
              key={company.id}
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