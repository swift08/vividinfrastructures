import { Building2, Calendar, Target, Heart, Sparkles } from "lucide-react";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import logo from "@/assets/logo.jpeg";

const stats = [
  { label: "Established", value: "2022", icon: Calendar, count: false },
  { label: "Projects", value: "10+", icon: Building2, count: true, end: 10 },
  { label: "Satisfaction", value: "100%", icon: Heart, count: true, end: 100 },
  { label: "Experience", value: "7+ Years", icon: Target, count: true, end: 7 },
];

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const projectsCount = useCountUp(10, 1500, 0);
  const satisfactionCount = useCountUp(100, 2000, 0);
  const experienceCount = useCountUp(7, 1500, 0);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 md:py-16 bg-gradient-to-b from-muted/50 via-background to-muted/30 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/4 left-0 w-96 h-96 bg-vivid-gold/5 rounded-full blur-3xl transition-all duration-1000 ${
            sectionVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            sectionVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Side with Enhanced Design */}
          <div
            ref={imageRef}
            className={`transition-all duration-1000 ${
              imageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            {/* Badge */}
            <div
              className={`absolute -top-4 -left-4 z-20 bg-vivid-gold text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all duration-700 delay-300 ${
                imageVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 -translate-y-10 scale-0"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-bold">Since 2022</span>
            </div>

            {/* Main Image Container */}
            <div className="relative premium-card group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-vivid-gold/20 via-primary/20 to-vivid-gold/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-vivid-gold/20 group-hover:border-vivid-gold/40 transition-all duration-500">
                <img
                  src={logo}
                  alt="Vivid Infrastructures"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-vivid-charcoal-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-vivid-gold opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-vivid-gold opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-vivid-gold opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-vivid-gold opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Stats Cards */}
            <div
              className={`absolute -bottom-6 -right-6 bg-background border-2 border-vivid-gold/30 rounded-xl p-4 shadow-xl backdrop-blur-sm transition-all duration-700 delay-500 ${
                imageVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-0"
              }`}
            >
              <div className="text-3xl font-bold text-vivid-gold mb-1">
                {projectsCount.count}+
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                Projects
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            ref={contentRef}
            className={`space-y-8 transition-all duration-1000 ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            {/* Header */}
            <div>
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vivid-gold/10 border border-vivid-gold/30 mb-6 transition-all duration-700 delay-200 ${
                  contentVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-10"
                }`}
              >
                <Building2 className="w-4 h-4 text-vivid-gold" />
                <span className="text-sm font-semibold text-vivid-gold">About Us</span>
              </div>
              <h2
                className={`text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading transition-all duration-700 delay-300 ${
                  contentVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                About <span className="text-gradient-gold">Vivid Infrastructures</span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p
                className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-400 ${
                  contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                At <strong className="text-primary font-semibold">Vivid Infrastructures</strong>, we
                don't just build structures – we <strong className="text-vivid-gold">build trust</strong>.
                Established on <strong className="text-primary">October 5th, 2022</strong>, our passionate
                and client-focused team is redefining construction with{" "}
                <strong className="text-foreground">transparency, reliability, and flexibility</strong> at
                the core of everything we do.
              </p>
              <p
                className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-500 ${
                  contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                Your vision is our mission, and your satisfaction is our success.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const displayValue = stat.count
                  ? stat.label === "Projects"
                    ? `${projectsCount.count}+`
                    : stat.label === "Satisfaction"
                    ? `${satisfactionCount.count}%`
                    : stat.label === "Experience"
                    ? `${experienceCount.count}+ Years`
                    : stat.value
                  : stat.value;

                return (
                  <div
                    key={index}
                    ref={stat.count ? (stat.label === "Projects" ? projectsCount.ref : stat.label === "Satisfaction" ? satisfactionCount.ref : experienceCount.ref) : undefined}
                    className={`group premium-card bg-card border border-border rounded-xl p-5 hover:border-vivid-gold/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                      contentVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-vivid-gold/10 flex items-center justify-center group-hover:bg-vivid-gold/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5 text-vivid-gold" />
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-foreground group-hover:text-vivid-gold transition-colors">
                      {displayValue}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div
              className={`pt-6 transition-all duration-700 delay-1000 ${
                contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-vivid-gold/10 to-primary/10 border border-vivid-gold/30 hover:scale-105 transition-transform duration-300">
                <span className="text-2xl">🚀</span>
                <p className="text-foreground font-semibold">
                  Let's bring your ideas to life – <span className="text-vivid-gold">together!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
