import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import {
  Menu,
  X,
  Briefcase,
  Home,
  Info,
  Mail,
  LogIn,
  User,
  LogOut,
} from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import NavLightLogo from "../../assets/brand.svg";
import NavDarkLogo from "../../assets/brand-dark.svg";
import useAuth from "../../hooks/useAuth";
import { toast } from "sonner";

const navLinks = [
  { path: "/", label: "Home", icon: Home },
  { path: "/postJobs", label: "Post a Jobs", icon: Briefcase },
  { path: "/about", label: "About", icon: Info },
  { path: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownOpen && !e.target.closest(".avatar-dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [dropdownOpen]);

  const handleLogout = () => {
    logout(); // AuthProvider এর logout call
    toast.success("LogOut Successful");
    navigate("/signin");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base-100/90 backdrop-blur-md  border-b border-base-300"
          : "bg-base-100 border-b border-base-300"
      }`}
    >
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center  group">
            <div>
              <img
                src={
                  document.documentElement.getAttribute("data-theme") === "dark"
                    ? NavDarkLogo
                    : NavLightLogo
                }
                className="w-30"
                alt="Logo"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? " border-b-2  border-primary text-primary   "
                        : "text-base-content hover:bg-base-200/70 hover:shadow-md  "
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <div className="scale-110">
              <ThemeToggle />
            </div>

            {/* User Avatar or Login Button */}
            {user ? (
              <div className="relative avatar-dropdown">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src={
                        user.photoURL ||
                        `https://ui-avatars.com/api/?name=${
                          user.displayName || user.email
                        }&background=random`
                      }
                      alt="User Avatar"
                    />
                  </div>
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-base-100 rounded-lg  border border-base-300 py-2 z-50">
                    <Link
                      to="/profile"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-base-200 transition-colors"
                    >
                      <User className="w-4 h-4" />
                      <Link to="/profile">
                        <span>My Profile</span>
                      </Link>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-base-200 transition-colors text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/signin"
                className="btn btn-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 gap-2"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden btn btn-ghost btn-square"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2 pt-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-primary-content shadow-lg"
                        : "text-base-content hover:bg-base-200"
                    }`
                  }
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </NavLink>
              );
            })}
            <div className="flex items-center space-x-3 pt-4">
              <div className="flex-1 flex justify-center">
                <ThemeToggle />
              </div>
              {user ? (
                <div className="flex-1 flex flex-col space-y-2">
                  <Link
                    to="/profile"
                    onClick={() => setIsOpen(false)}
                    className="btn btn-outline gap-2"
                  >
                    <User className="w-5 h-5" />
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="btn btn-error gap-2"
                  >
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/signin"
                  className="flex-1 btn btn-primary shadow-lg gap-2"
                >
                  <LogIn className="w-5 h-5" />
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
