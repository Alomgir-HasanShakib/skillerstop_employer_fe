import React from "react";
import {
  UserPlus,
  Search,
  Briefcase,
  CheckCircle,
  ArrowDown,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      number: "01",
      icon: UserPlus,
      title: "Create an Account",
      description:
        "Sign up for free in just 2 minutes. Fill in your basic information and set up your professional profile to get started.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary",
    },
    {
      id: 2,
      number: "02",
      icon: Search,
      title: "Search or Post Jobs",
      description:
        "Browse thousands of available jobs or post your project requirements. Use advanced filters to find the perfect match.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary",
    },
    {
      id: 3,
      number: "03",
      icon: Briefcase,
      title: "Apply or Hire Easily",
      description:
        "Submit your proposal with one click or review applications from talented freelancers. Connect and communicate seamlessly.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent",
    },
    {
      id: 4,
      number: "04",
      icon: CheckCircle,
      title: "Get Work Done",
      description:
        "Collaborate efficiently with built-in tools. Track progress, manage deadlines, and ensure timely completion with secure payments.",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success",
    },
  ];

  return (
    <div className=" bg-base-100 py-20 ">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            Getting Started is <span className="text-primary">Easy</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-3xl mx-auto">
            Follow these simple steps to start your freelancing journey or find
            the perfect talent for your project. It's quick, easy, and
            hassle-free!
          </p>
        </div>

        {/* Steps Grid - Desktop View */}
        <div className="hidden lg:grid grid-cols-4 gap-6 mb-16 relative">
          {/* Connecting Line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-success -z-10"></div>

          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="group relative">
                <div className="card bg-base-100   transition-all duration-300 border border-base-content/10 ">
                  <div className="card-body items-center text-center">
                    {/* Step Number */}
                    <div
                      className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center border-4 border-base-100 shadow-lg`}
                    >
                      <span className={`text-xl font-bold ${step.color}`}>
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className={`${step.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mt-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`w-10 h-10 ${step.color}`} />
                    </div>

                    {/* Title */}
                    <h3 className="card-title text-xl text-base-content mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base-content/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Steps List - Mobile/Tablet View */}
        <div className="lg:hidden space-y-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.id} className="relative">
                <div className="card bg-base-100 shadow-xl border-2 border-base-300">
                  <div className="card-body">
                    <div className="flex items-start gap-4">
                      {/* Left Side - Number & Icon */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center mb-2`}
                        >
                          <IconComponent className={`w-8 h-8 ${step.color}`} />
                        </div>
                        <div
                          className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center border-4 border-base-100 shadow-lg`}
                        >
                          <span className={`text-lg font-bold ${step.color}`}>
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Right Side - Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-base-content mb-2">
                          {step.title}
                        </h3>
                        <p className="text-base-content/70 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Arrow for Mobile */}
                {!isLast && (
                  <div className="flex justify-center my-4">
                    <div className="text-primary">
                      <ArrowDown className="w-8 h-8" strokeWidth={3} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="card bg-base-100  border border-base-content/10">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h4 className="font-bold text-base-content">Quick Setup</h4>
              <p className="text-sm text-base-content/70">
                Account creation takes less than 2 minutes
              </p>
            </div>
          </div>
          <div className="card bg-base-100  border border-base-content/10">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">🔒</div>
              <h4 className="font-bold text-base-content">100% Secure</h4>
              <p className="text-sm text-base-content/70">
                Your data is protected with encryption
              </p>
            </div>
          </div>
          <div className="card bg-base-100  border border-base-content/10">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">💬</div>
              <h4 className="font-bold text-base-content">24/7 Support</h4>
              <p className="text-sm text-base-content/70">
                We're here to help you anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
