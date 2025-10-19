import React, { useState, useEffect } from "react";
import {
  ArrowUp,
  Briefcase,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Building2,
  Users,
  Target,
} from "lucide-react";
import { Link } from "react-router";
import NavLightLogo from "../../assets/brand.svg";
import NavDarkLogo from "../../assets/brand-dark.svg";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "light"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute("data-theme"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Premium Footer */}
      <footer className="bg-gradient-to-br from-base-200 via-base-100 to-base-200 text-base-content relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Link
                  to="/"
                  className="flex items-center group transition-transform hover:scale-105 duration-300"
                >
                  <div>
                    <img
                      src={
                        document.documentElement.getAttribute("data-theme") ===
                        "dark"
                          ? NavDarkLogo
                          : NavLightLogo
                      }
                      className="w-23"
                      alt="Logo"
                    />
                  </div>
                </Link>
              </div>
              <p className="text-sm leading-relaxed opacity-80">
                Your trusted partner in talent acquisition. Connecting companies with exceptional candidates to drive business success.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="btn btn-circle btn-sm bg-primary/10 hover:bg-primary border-primary/20 hover:border-primary text-primary hover:text-primary-content transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-sm bg-primary/10 hover:bg-primary border-primary/20 hover:border-primary text-primary hover:text-primary-content transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-sm bg-primary/10 hover:bg-primary border-primary/20 hover:border-primary text-primary hover:text-primary-content transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-sm bg-primary/10 hover:bg-primary border-primary/20 hover:border-primary text-primary hover:text-primary-content transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-sm bg-primary/10 hover:bg-primary border-primary/20 hover:border-primary text-primary hover:text-primary-content transition-all duration-300 hover:scale-110"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* For Employers */}
            <div>
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                For Employers
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="link link-hover text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Post a Job
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link link-hover text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Browse Candidates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link link-hover text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Company Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link link-hover text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link link-hover text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Employer Dashboard
                  </a>
                </li>
              </ul>
            </div>

            {/* Recruitment Solutions */}
            <div>
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Solutions
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="link link-hover text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    AI Candidate Matching
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link link-hover text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Bulk Hiring
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link link-hover text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Skill Assessments
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link link-hover text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Recruitment Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link link-hover text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Employer Resources
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Employer Support
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    123 Business District, San Francisco, CA 94102
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    employers@skillerstop.com
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    +1 (555) 123-4567
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-sm w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 backdrop-blur-sm relative z-10">
          <div className="container mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h4 className="font-bold text-xl mb-2 flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-6 h-6 text-primary" />
                  Employer Insights
                </h4>
                <p className="text-sm opacity-70">
                  Get hiring trends, recruitment tips, and industry insights delivered to your inbox
                </p>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter work email"
                  className="input input-bordered w-full md:w-72 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
                <button className="btn btn-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-base-300/50 backdrop-blur-sm border-t border-base-content/10 relative z-10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="opacity-70 flex items-center gap-2">
                © 2025 SkillerStop. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="#"
                  className="link link-hover opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="link link-hover opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="link link-hover opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300"
                >
                  Cookie Policy
                </a>
                <a
                  href="#"
                  className="link link-hover opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300"
                >
                  Service Agreement
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`btn btn-circle btn-primary fixed bottom-8 right-8 shadow-2xl transition-all duration-500 z-50 hover:scale-110 ${
            showButton
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16 pointer-events-none"
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </footer>
    </>
  );
}