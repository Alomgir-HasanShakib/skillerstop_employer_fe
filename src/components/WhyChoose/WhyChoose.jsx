import React from "react";
import { Zap, Clock, ShieldCheck, CreditCard } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      id: 1,
      icon: Zap,
      title: "Easy to Use",
      description:
        "Simple and intuitive interface that makes finding jobs or hiring talent effortless. Get started in minutes with our user-friendly platform.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      hoverColor: "group-hover:bg-primary",
    },
    {
      id: 2,
      icon: Clock,
      title: "Fast Hiring",
      description:
        "Connect with qualified professionals in hours, not weeks. Our streamlined process ensures quick matching and efficient collaboration.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      hoverColor: "group-hover:bg-secondary",
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Verified Employers",
      description:
        "Work with confidence knowing all employers are thoroughly verified. We ensure a safe and trustworthy environment for all freelancers.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      hoverColor: "group-hover:bg-accent",
    },
    {
      id: 4,
      icon: CreditCard,
      title: "Secure Payments",
      description:
        "Protected payment system with escrow service ensures you get paid on time. Multiple payment methods available for your convenience.",
      color: "text-success",
      bgColor: "bg-success/10",
      hoverColor: "group-hover:bg-success",
    },
  ];

  return (
    <div className=" bg-base-100 py-20 ">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            Why Choose <span className="text-primary">SkillerStop</span>?
          </h2>
          <p className="text-lg text-base-content/70 max-w-3xl mx-auto">
            Join thousands of satisfied users who trust SkillerStop for their
            freelancing needs. Experience the difference with our world-class
            platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group card bg-base-100  transition-all duration-300 border border-base-content/10"
              >
                <div className="card-body items-center text-center">
                  {/* Icon */}
                  <div
                    className={`${feature.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${feature.hoverColor}`}
                  >
                    <IconComponent
                      className={`w-10 h-10 ${feature.color} group-hover:text-base-100 transition-colors duration-300`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="card-title text-2xl text-base-content mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base-content/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
