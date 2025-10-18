import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { updateProfile, getProfile } from "../../api/profile/profile";
import { MapPin, Sun, User } from "lucide-react";
import { FiUserCheck } from "react-icons/fi";
import { HiAcademicCap, HiTrendingUp } from "react-icons/hi";
import { HiClipboardDocument } from "react-icons/hi2";
import { toast } from "sonner";
import Loading from "../Loading/Loading";

// Constants for better maintainability
const FORM_SECTIONS = {
  PERSONAL: "personal",
  LOCATION: "location",
  SKILLS: "skills",
  CERTIFICATES: "certificates",
  EDUCATION: "education",
  WORK: "work",
  LANGUAGES: "languages",
};

const INITIAL_FORM_DATA = {
  name: "",
  phone: "",
  email: "",
  whatsappPhone: "main",
  altPhone: "",
  dob: "",
  gender: "male",
  currentLocation: "",
  homeLocation: "",
  currentMonthlySalary: "",
  skills: [],
  certificates: [],
  educationalExp: [],
  workExp: [],
  knownLanguages: [],
};

const INITIAL_INPUT_FIELDS = {
  skillInput: "",
  certInput: "",
  eduInput: "",
  workInput: "",
  langInput: "",
};

// SVG Icon Components
const UserIcon = () => <User className="w-5 h-5" />;
const LocationIcon = () => <MapPin className="w-5 h-5" />;
const SkillIcon = () => <Sun className="w-5 h-5" />;
const CertificateIcon = () => <FiUserCheck className="w-5 h-5 text-current" />;
const EducationIcon = () => <HiAcademicCap className="w-5 h-5 text-current" />;
const WorkIcon = () => <HiClipboardDocument className="w-5 h-5 text-current" />;
const LanguageIcon = () => <HiTrendingUp className="w-5 h-5 text-current" />;

// UI Components (moved outside to prevent re-creation on each render)
const FormField = ({
  label,
  name,
  type = "text",
  required = false,
  children,
  value,
  onChange,
  errors,
  ...props
}) => (
  <div className="form-control">
    <label className="label">
      <span className={`label-text ${required ? "font-semibold" : ""}`}>
        {label} {required && "*"}
      </span>
    </label>
    {children || (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`input input-bordered w-full ${
          errors?.[name] ? "input-error" : ""
        }`}
        required={required}
        {...props}
      />
    )}
    {errors?.[name] && (
      <span className="text-error text-sm mt-1">{errors[name]}</span>
    )}
  </div>
);

const Section = ({ title, icon, children }) => (
  <div className="bg-base-200 p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
      {icon} {title}
    </h3>
    {children}
  </div>
);

const BadgeList = ({ items, field, onRemove }) => (
  <div className="flex flex-wrap gap-2 mt-2">
    {items.map((item, index) => (
      <div key={index} className="badge badge-lg badge-primary gap-2">
        {item}
        <button
          type="button"
          onClick={() => onRemove(field, index)}
          className="btn btn-ghost btn-xs btn-circle"
        >
          ✕
        </button>
      </div>
    ))}
  </div>
);

const ArrayInputSection = ({
  title,
  icon,
  field,
  inputField,
  placeholder,
  inputValue,
  onInputChange,
  onAdd,
  onKeyPress,
  items,
  onRemove,
}) => (
  <Section title={title} icon={icon}>
    <div className="flex gap-2 mb-2">
      <input
        type="text"
        name={inputField}
        value={inputValue}
        onChange={onInputChange}
        className="input input-bordered flex-1"
        placeholder={placeholder}
        onKeyPress={onKeyPress}
      />
      <button type="button" onClick={onAdd} className="btn btn-primary">
        Add
      </button>
    </div>
    <BadgeList items={items} field={field} onRemove={onRemove} />
  </Section>
);
const LoadingSpinner = () => (
  <div className="min-h-screen bg-base-100 py-30 px-4 flex items-center justify-center">
    <Loading></Loading>
  </div>
);
const SubmitButton = ({ loading }) => (
  <button type="submit" className="btn btn-primary btn-wide" disabled={loading}>
    {loading ? (
      <>
        <span className="loading loading-spinner"></span> Updating...
      </>
    ) : (
      "Update Profile"
    )}
  </button>
);
export default function ProfileForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [inputFields, setInputFields] = useState(INITIAL_INPUT_FIELDS);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  // Custom hook to fetch profile data
  const useProfileData = () => {
    useEffect(() => {
      const fetchProfile = async () => {
        try {
          setLoading(true);
          const profile = await getProfile();
          if (profile) {
            setFormData(formatProfileData(profile));
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
          setErrors({ fetch: "Failed to load profile data" });
        } finally {
          setLoading(false);
        }
      };
      fetchProfile();
    }, []);
  };
  useProfileData();
  // Helper functions
  const formatProfileData = (profile) => ({
    name: profile.name || "",
    phone: profile.phone || "",
    email: profile.email || "",
    whatsappPhone: profile.whatsappPhone || "main",
    altPhone: profile.altPhone || "",
    dob: profile.dob ? profile.dob.split("T")[0] : "",
    gender: profile.gender || "male",
    currentLocation: profile.currentLocation || "",
    homeLocation: profile.homeLocation || "",
    currentMonthlySalary: profile.currentMonthlySalary || "",
    skills: profile.skills || [],
    certificates: profile.certificates || [],
    educationalExp: profile.educationalExp || [],
    workExp: profile.workExp || [],
    knownLanguages: profile.knownLanguages || [],
  });
  const clearError = (fieldName) => {
    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: "" }));
    }
  };
  // Event handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    clearError(name);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prev) => ({ ...prev, [name]: value }));
  };
  const handleAddItem = (field, inputField) => {
    if (inputFields[inputField]?.trim()) {
      setFormData((prev) => ({
        ...prev,
        [field]: [...prev[field], inputFields[inputField].trim()],
      }));
      setInputFields((prev) => ({ ...prev, [inputField]: "" }));
    }
  };
  const handleRemoveItem = (field, index) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };
  const handleKeyPress = (e, field, inputField) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddItem(field, inputField);
    }
  };
  // Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (formData.currentMonthlySalary && isNaN(formData.currentMonthlySalary)) {
      newErrors.currentMonthlySalary = "Please enter a valid number";
    }
    if (formData.dob) {
      const dobDate = new Date(formData.dob);
      const today = new Date();
      if (dobDate > today) {
        newErrors.dob = "Date of birth cannot be in the future";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Please fix the validation errors before submitting.");
      return;
    }
    try {
      setLoading(true);
      const payload = preparePayload();
      await updateProfile(payload);
      toast.success("Profile updated successfully!");
      navigate("/profile");
    } catch (error) {
      handleSubmissionError(error);
      toast.error("Error", error);
    } finally {
      setLoading(false);
    }
  };
  const preparePayload = () => ({
    name: formData.name.trim(),
    phone: formData.phone.trim(),
    email: formData.email.trim(),
    whatsappPhone: formData.whatsappPhone === "main" ? "main" : "alt",
    altPhone: formData.altPhone?.trim() || null,
    dob: new Date(formData.dob),
    gender: formData.gender,
    currentLocation: formData.currentLocation.trim(),
    homeLocation: formData.homeLocation.trim(),
    currentMonthlySalary: formData.currentMonthlySalary
      ? Number(formData.currentMonthlySalary)
      : 0,
    skills: formData.skills.filter((skill) => skill.trim() !== ""),
    certificates: formData.certificates.filter((cert) => cert.trim() !== ""),
    educationalExp: formData.educationalExp.filter((edu) => edu.trim() !== ""),
    workExp: formData.workExp.filter((work) => work.trim() !== ""),
    knownLanguages: formData.knownLanguages.filter(
      (lang) => lang.trim() !== ""
    ),
  });
  const handleSubmissionError = (error) => {
    console.error("Error saving profile:", error);
    if (error.response?.data?.message) {
      const messages = Array.isArray(error.response.data.message)
        ? error.response.data.message.join("\n• ")
        : error.response.data.message;
      alert(`Validation Errors:\n• ${messages}`);
    } else {
      alert("Failed to save profile. Please try again.");
    }
  };
  if (loading && !formData.name) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="min-h-screen bg-base-100 py-30 px-4">
      <div className="container mx-auto px-4">
        <div className="card bg-base-100 border border-base-content/10">
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold text-center justify-center mb-6">
              Update Your Profile
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <Section title="Personal Information" icon={<UserIcon />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Full Name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    errors={errors}
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    errors={errors}
                  />
                  <FormField
                    label="Phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="017XXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    errors={errors}
                  />
                  <FormField
                    label="Alternative Phone"
                    name="altPhone"
                    type="tel"
                    placeholder="018XXXXXXXX"
                    value={formData.altPhone}
                    onChange={handleChange}
                    errors={errors}
                  />
                  <FormField
                    label="WhatsApp Phone"
                    name="whatsappPhone"
                    value={formData.whatsappPhone}
                    onChange={handleChange}
                    errors={errors}
                  >
                    <select
                      name="whatsappPhone"
                      value={formData.whatsappPhone}
                      onChange={handleChange}
                      className="select select-bordered w-full"
                    >
                      <option value="main">Main Phone</option>
                      <option value="alt">Alternative Phone</option>
                    </select>
                  </FormField>
                  <FormField
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    required
                    value={formData.dob}
                    onChange={handleChange}
                    errors={errors}
                  />
                  <FormField
                    label="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    errors={errors}
                  >
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="select select-bordered w-full"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="not-specified">Not Specified</option>
                    </select>
                  </FormField>
                  <FormField
                    label="Current Monthly Salary (BDT)"
                    name="currentMonthlySalary"
                    type="number"
                    placeholder="50000"
                    min="0"
                    value={formData.currentMonthlySalary}
                    onChange={handleChange}
                    errors={errors}
                  />
                </div>
              </Section>

              {/* Location Information */}
              <Section title="Location Information" icon={<LocationIcon />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Current Location"
                    name="currentLocation"
                    placeholder="e.g., Delhi, India"
                    value={formData.currentLocation}
                    onChange={handleChange}
                    errors={errors}
                  />
                  <FormField
                    label="Home Location"
                    name="homeLocation"
                    placeholder="e.g., Kolkata, India"
                    value={formData.homeLocation}
                    onChange={handleChange}
                    errors={errors}
                  />
                </div>
              </Section>
              {/* Dynamic Input Sections */}
              <ArrayInputSection
                title="Skills"
                icon={<SkillIcon />}
                field="skills"
                inputField="skillInput"
                placeholder="Add a skill (e.g., JavaScript, React, Node.js)"
                inputValue={inputFields.skillInput}
                onInputChange={handleInputChange}
                onAdd={() => handleAddItem("skills", "skillInput")}
                onKeyPress={(e) => handleKeyPress(e, "skills", "skillInput")}
                items={formData.skills}
                onRemove={handleRemoveItem}
              />
              <ArrayInputSection
                title="Certificates"
                icon={<CertificateIcon />}
                field="certificates"
                inputField="certInput"
                placeholder="Add a certificate (e.g., AWS Certified, Google Cloud Professional)"
                inputValue={inputFields.certInput}
                onInputChange={handleInputChange}
                onAdd={() => handleAddItem("certificates", "certInput")}
                onKeyPress={(e) =>
                  handleKeyPress(e, "certificates", "certInput")
                }
                items={formData.certificates}
                onRemove={handleRemoveItem}
              />
              <ArrayInputSection
                title="Educational Experience"
                icon={<EducationIcon />}
                field="educationalExp"
                inputField="eduInput"
                placeholder="Add education (e.g., BSc in Computer Science - University of Delhi)"
                inputValue={inputFields.eduInput}
                onInputChange={handleInputChange}
                onAdd={() => handleAddItem("educationalExp", "eduInput")}
                onKeyPress={(e) =>
                  handleKeyPress(e, "educationalExp", "eduInput")
                }
                items={formData.educationalExp}
                onRemove={handleRemoveItem}
              />
              <ArrayInputSection
                title="Work Experience"
                icon={<WorkIcon />}
                field="workExp"
                inputField="workInput"
                placeholder="Add work experience (e.g., Senior Developer - Tech Company Ltd.)"
                inputValue={inputFields.workInput}
                onInputChange={handleInputChange}
                onAdd={() => handleAddItem("workExp", "workInput")}
                onKeyPress={(e) => handleKeyPress(e, "workExp", "workInput")}
                items={formData.workExp}
                onRemove={handleRemoveItem}
              />
              <ArrayInputSection
                title="Known Languages"
                icon={<LanguageIcon />}
                field="knownLanguages"
                inputField="langInput"
                placeholder="Add a language (e.g., English, Bengali, Hindi)"
                inputValue={inputFields.langInput}
                onInputChange={handleInputChange}
                onAdd={() => handleAddItem("knownLanguages", "langInput")}
                onKeyPress={(e) =>
                  handleKeyPress(e, "knownLanguages", "langInput")
                }
                items={formData.knownLanguages}
                onRemove={handleRemoveItem}
              />
              {/* Submit Button */}
              <div className="flex justify-end gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => navigate("/profile")}
                  className="btn btn-outline"
                  disabled={loading}
                >
                  Cancel
                </button>
                <SubmitButton loading={loading} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
