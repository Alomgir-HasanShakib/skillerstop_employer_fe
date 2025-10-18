import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Briefcase,
  Users,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
  HelpCircle,
  UserCheck,
  Building2,
  Search,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you for contacting SkillersTop! Our team will reach out to you within 24 hours."
    );
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactReasons = [
    {
      icon: Building2,
      title: "For Employers",
      description: "Post jobs and find talented candidates",
      gradient: "from-primary to-primary-focus",
    },
    {
      icon: Search,
      title: "For Job Seekers",
      description: "Get help finding your dream job",
      gradient: "from-secondary to-secondary-focus",
    },
    {
      icon: HelpCircle,
      title: "General Support",
      description: "Questions about our platform",
      gradient: "from-accent to-accent-focus",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      info: "support@skillerstop.com",
      subInfo: "We reply within 24 hours",
      color: "text-primary",
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+1 (555) 123-4567",
      subInfo: "Mon-Fri 9AM to 6PM EST",
      color: "text-success",
    },
    {
      icon: MapPin,
      title: "Office",
      info: "San Francisco, CA",
      subInfo: "United States",
      color: "text-info",
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Instagram, label: "Instagram", color: "hover:bg-pink-600" },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-30">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-content px-6 py-3 rounded-full mb-6 shadow-lg">
            <MessageCircle className="w-5 h-5" />
            <span className="font-bold text-sm">We're Here to Help</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-base-content mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Whether you're hiring talent or searching for opportunities, we're
            ready to assist you
          </p>
        </div>

        {/* Contact Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactReasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-base-100 rounded-2xl p-8   transition-all duration-300  border border-base-content/8 group"
            >
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="w-8 h-8 text-base-100" />
              </div>
              <h3 className="text-xl font-bold text-base-content mb-2">
                {item.title}
              </h3>
              <p className="text-base-content/70">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form - 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-base-100 rounded-3xl p-8 md:p-10 border border-base-content/8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
                  <Send className="w-6 h-6 text-base-100" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-base-content">
                    Send us a Message
                  </h2>
                  <p className="text-base-content/70 text-sm">
                    Fill out the details and we'll get back to you soon
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-base-content mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-base-content mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-base-content mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-base-content mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a topic</option>
                    <option value="employer">
                      I'm an Employer - Need Help
                    </option>
                    <option value="jobseeker">
                      I'm a Job Seeker - Need Help
                    </option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Payments</option>
                    <option value="partnership">
                      Partnership Opportunities
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-base-content mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us how we can help you..."
                    rows="6"
                    className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-primary  text-primary-content font-bold py-4 px-8 rounded-xl  transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* Contact Info Cards */}
            {contactInfo.map((item, idx) => (
              <div
                key={idx}
                className="bg-base-100 rounded-2xl p-6 border border-base-content/8  transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-base-200 rounded-lg ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base-content mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-base-content mb-1">
                      {item.info}
                    </p>
                    <p className="text-xs text-base-content/50">
                      {item.subInfo}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Working Hours */}
            <div className="border border-base-content/8 rounded-2xl p-6  ">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6" />
                <h3 className="font-bold text-lg">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="opacity-90">Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-90">Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between opacity-60">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-base-100 rounded-2xl p-6  border border-base-content/8">
              <h3 className="font-bold text-base-content mb-4">
                Connect With Us
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <button
                    key={idx}
                    className={`flex-1 p-3 bg-base-200 rounded-lg ${social.color} transition-all duration-300 hover:scale-110 group`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-base-content group-hover:text-base-100 mx-auto" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-base-100 rounded-3xl p-10 text-center  border border-base-content/8 ">
          <Users className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl font-bold mb-3">
            Join SkillersTop Community
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Connect with thousands of employers and job seekers. Start your
            journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className=" btn-primary btn hover:bg-transparent hover:text-primary  font-bold py-3 px-8 rounded-xl   transition-all duration-300">
              Post a Job
            </button>
            <button className="bg-transparent btn hover:bg-primary hover:text-base-content border-2 border-primary  font-bold py-3 px-8 rounded-xl text-primary transition-all duration-300">
              Find Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
