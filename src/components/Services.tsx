import {
  Shield,
  ClipboardCheck,
  Wallet,
  Award,
  HardHat,
  Users,
  MessageSquare,
  IndianRupee,
  Building2,
  FileCheck,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: HardHat,
    title: "Experienced Supervision",
    description:
      "Every project is supervised by a qualified site engineer.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Checks",
    description:
      "Regular site visits by Architect, Structural Engineer, and Project Coordinator.",
  },
  {
    icon: Wallet,
    title: "Retention-Based Payment",
    description:
      "A part of the contract amount is kept with the client and paid only after successful completion.",
  },
  {
    icon: Award,
    title: "Warranties",
    description:
      "1 year exclusive warranty, 2nd year extended warranty, 15 years structural warranty, and 10 year waterproofing warranty.",
  },
  {
    icon: Shield,
    title: "Strict Safety Compliance",
    description:
      "Adherence to Health, Safety & Environment protocols at the site.",
  },
  {
    icon: Users,
    title: "No Outsourcing",
    description:
      "All work and designs are done in-house, ensuring better quality control.",
  },
  {
    icon: MessageSquare,
    title: "Regular Updates",
    description: "Daily progress reports are shared via WhatsApp.",
  },
  {
    icon: IndianRupee,
    title: "Clear Pricing",
    description:
      "The cost includes all materials, labor, and equipment, with no hidden charges.",
  },
  {
    icon: Building2,
    title: "Dedicated Team",
    description: "Dedicated team for ensuring quality in all works.",
  },
  {
    icon: FileCheck,
    title: "Legally Registered",
    description:
      "Officially registered and follows all tax and government regulations.",
  },
];

const Services = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-12 md:py-16 bg-secondary text-secondary-foreground relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-0 right-0 w-96 h-96 bg-vivid-gold/5 rounded-full blur-3xl transition-all duration-1000 ${
            sectionVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div
          className={`absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            sectionVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading text-background transition-all duration-700 ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            Why Choose <span className="text-gradient-gold">Vivid Infrastructures?</span>
          </h2>
          <p
            className={`text-secondary-foreground/80 text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            We bring expertise, transparency, and dedication to every project
          </p>
        </div>

        {/* Clean Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const { ref, isVisible } = useScrollAnimation({
              threshold: 0.1,
            });

            return (
              <div
                key={index}
                ref={ref}
                className={`group premium-card bg-card border border-border rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-vivid-gold/10 flex items-center justify-center group-hover:bg-vivid-gold/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-vivid-gold" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 font-heading text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Simple Underline */}
                <div className="mt-4 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
