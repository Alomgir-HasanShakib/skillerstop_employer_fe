import React from "react";
import {
  Rocket,
  UserPlus,
  Briefcase,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Clock,
  Award,
  Target,
  CheckCircle,
  Star,
} from "lucide-react";

export default function CallToAction() {
  const features = [
    {
      icon: TrendingUp,
      title: "Fast Growth",
      description: "Join a rapidly growing community",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Top Talent",
      description: "Connect with verified professionals",
      color: "text-secondary",
    },
    {
      icon: Rocket,
      title: "Quick Matches",
      description: "AI-powered matching system",
      color: "text-accent",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your data is safe with us",
      color: "text-success",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "We're here whenever you need",
      color: "text-info",
    },
    {
      icon: Award,
      title: "Verified Jobs",
      description: "All opportunities are verified",
      color: "text-warning",
    },
  ];

  return (
    <div className="relative min-h-screen  py-20 ">
      <div className="container px-4 mx-auto">
        {/* Hero Section */}
        <div className="hero  bg-base-100 rounded-3xl  relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          </div>

          <div className="hero-content text-center relative z-10 py-10">
            <div className="max-w-4xl">
              {/* Badge */}

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Join <span className="text-primary">SkillerStop</span> Today
              </h1>

              <p className="text-lg opacity-70 max-w-2xl mx-auto mb-5">
                The fastest growing platform for skilled professionals and
                employers. Start your journey today and unlock unlimited
                opportunities!
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid - 8 Small Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card bg-base-100 border border-base-content/10  transition-all duration-300  group"
              >
                <div className="card-body items-center text-center p-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-base-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="card-title text-lg justify-center">
                    {feature.title}
                  </h3>
                  <p className="text-sm opacity-70">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section - 4 Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card border border-base-content/10  text-primary-100  transition-all duration-300">
            <div className="card-body items-center text-center">
              <Star className="w-12 h-12 mb-2" />
              <h2 className="card-title text-5xl font-extrabold">10K+</h2>
              <p className="text-lg font-semibold">Active Users</p>
              <p className="text-sm opacity-80">Growing daily</p>
            </div>
          </div>

          <div className="card  text-secondary-100 border border-base-content/10  transition-all duration-300 ">
            <div className="card-body items-center text-center">
              <Briefcase className="w-12 h-12 mb-2" />
              <h2 className="card-title text-5xl font-extrabold">5K+</h2>
              <p className="text-lg font-semibold">Jobs Posted</p>
              <p className="text-sm opacity-80">This month</p>
            </div>
          </div>

          <div className="card border border-base-content/10 text-accent-100  transition-all duration-300 ">
            <div className="card-body items-center text-center">
              <Award className="w-12 h-12 mb-2" />
              <h2 className="card-title text-5xl font-extrabold">95%</h2>
              <p className="text-lg font-semibold">Success Rate</p>
              <p className="text-sm opacity-80">Satisfaction</p>
            </div>
          </div>

          <div className="card  text-accent-100t  border border-base-content/10 transition-all duration-300 ">
            <div className="card-body items-center text-center">
              <Clock className="w-12 h-12 mb-2" />
              <h2 className="card-title text-5xl font-extrabold">24h</h2>
              <p className="text-lg font-semibold">Avg Response</p>
              <p className="text-sm opacity-80">Lightning fast</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
