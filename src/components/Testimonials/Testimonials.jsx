import React, { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Solutions",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 5,
      comment:
        "This product has completely transformed how our team works. The interface is intuitive and the results speak for themselves. Highly recommended!",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "StartupHub Inc",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      rating: 5,
      comment:
        "Outstanding service and support! We've seen a 200% increase in productivity since implementing this solution. The ROI is incredible.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Creative Agency Pro",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      rating: 5,
      comment:
        "Game changer for our business! The features are exactly what we needed, and the customer support team is always there when we need them.",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Freelance Developer",
      company: "Independent",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      rating: 5,
      comment:
        "As a developer, I appreciate the attention to detail and smooth performance. This has become an essential tool in my workflow.",
    },
    {
      id: 5,
      name: "Jessica Williams",
      role: "Operations Manager",
      company: "Global Logistics Co",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
      rating: 4,
      comment:
        "Excellent platform with great features. It's helped streamline our operations significantly. Looking forward to future updates!",
    },
    {
      id: 6,
      name: "Ryan Martinez",
      role: "Sales Lead",
      company: "SaaS Ventures",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan",
      rating: 5,
      comment:
        "Our sales team loves it! Easy to use, powerful features, and the analytics dashboard gives us insights we never had before.",
    },
    {
      id: 7,
      name: "Amanda Foster",
      role: "UX Designer",
      company: "Design Studio",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda",
      rating: 5,
      comment:
        "Beautiful design and seamless user experience. This tool has elevated the quality of our deliverables significantly.",
    },
    {
      id: 8,
      name: "James Cooper",
      role: "Business Analyst",
      company: "Finance Corp",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      rating: 5,
      comment:
        "The analytics capabilities are outstanding. We can now make data-driven decisions faster than ever before.",
    },
  ];

  // Auto-change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 4) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get 4 testimonials to display
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="py-20 bg-base-100">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied
            customers
          </p>
        </div>

        {/* Testimonial Grid - 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="bg-base-100 rounded-2xl p-6  transition-all duration-500 border border-base-content/10  group "
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary opacity-20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "fill-primary text-primary"
                        : "text-base-300"
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-base-content/70 mb-6 text-sm leading-relaxed line-clamp-4">
                "{testimonial.comment.split(" ").slice(0, 20).join(" ")}..."
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-base-300">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-primary"
                />
                <div>
                  <h5 className="font-bold text-base-content text-sm">
                    {testimonial.name}
                  </h5>
                  <p className="text-xs text-primary font-semibold">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-base-content/50">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: Math.ceil(testimonials.length / 4) }).map(
            (_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-500 ${
                  Math.floor(currentIndex / 4) === index
                    ? "bg-primary w-12"
                    : "bg-base-300 w-2"
                }`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
