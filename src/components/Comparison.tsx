import { Check, X, Sparkles, TrendingUp, TrendingDown } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const comparisons = [
  {
    vivid: "No Cost Overturns",
    others: "Too Many Hidden Charges",
    icon: "💰",
  },
  {
    vivid: "Quality is Top Priority",
    others: "Few Compromises Based on Costs",
    icon: "⭐",
  },
  {
    vivid: "Building Your Trust with Top Satisfaction",
    others: "Multiple Compromises on Your Satisfaction",
    icon: "🤝",
  },
  {
    vivid: "Proper Tech Support and Qualified Supervision",
    others: "No Tech Support or Unqualified/No Supervisor",
    icon: "🔧",
  },
  {
    vivid: "Regular Updates on Group About Site Activities",
    others: "No Update Unless You Take It",
    icon: "📱",
  },
];

const Comparison = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section
      ref={sectionRef}
      className="py-8 md:py-10 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-0 left-1/4 w-96 h-96 bg-vivid-gold/5 rounded-full blur-3xl transition-all duration-1000 ${
            sectionVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            sectionVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vivid-gold/10 border border-vivid-gold/30 mb-6 transition-all duration-700 ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            <Sparkles className="w-4 h-4 text-vivid-gold" />
            <span className="text-sm font-semibold text-vivid-gold">The Difference</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 font-heading text-foreground transition-all duration-700 delay-200 ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            What Makes Us <span className="text-gradient-gold">Better</span>
          </h2>
          <p
            className={`text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-700 delay-300 ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            See the clear difference in how we approach construction
          </p>
        </div>

        {/* Unique Comparison Cards */}
        <div className="max-w-6xl mx-auto space-y-6">
          {comparisons.map((item, index) => {
            const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

            return (
              <div
                key={index}
                ref={ref}
                className={`group relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
              {/* Main Card Container */}
              <div className="grid md:grid-cols-2 gap-4 premium-card">
                {/* VIVID Side - Premium Card */}
                <div
                  className={`relative overflow-hidden rounded-xl p-6 border-2 transition-all duration-500 ${
                    hoveredIndex === index
                      ? "border-vivid-gold bg-gradient-to-br from-vivid-gold/10 to-primary/5 shadow-xl scale-[1.02]"
                      : "border-vivid-gold/30 bg-gradient-to-br from-vivid-gold/5 to-transparent shadow-lg"
                  }`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 border-2 border-vivid-gold rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 border-2 border-vivid-gold rounded-full translate-y-1/2 -translate-x-1/2" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-vivid-gold/20 flex items-center justify-center border-2 border-vivid-gold/30">
                          <span className="text-xl">{item.icon}</span>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-vivid-gold uppercase tracking-wider">
                            Vivid
                          </div>
                          <div className="text-xs text-muted-foreground">Premium Service</div>
                        </div>
                      </div>
                      <div
                        className={`transition-all duration-500 ${
                          hoveredIndex === index ? "scale-110 rotate-12" : ""
                        }`}
                      >
                        <Check className="w-8 h-8 text-vivid-gold" />
                      </div>
                    </div>

                    {/* Feature Text */}
                    <p className="text-foreground font-semibold text-lg leading-relaxed">
                      {item.vivid}
                    </p>

                    {/* Animated Progress Bar */}
                    <div className="mt-4 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-vivid-gold to-vivid-gold-light rounded-full transition-all duration-1000"
                        style={{
                          width: hoveredIndex === index ? "100%" : "85%",
                        }}
                      />
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute top-4 right-4 opacity-10">
                      <TrendingUp className="w-16 h-16 text-vivid-gold" />
                    </div>
                  </div>
                </div>

                {/* OTHERS Side - Contrast Card */}
                <div
                  className={`relative overflow-hidden rounded-xl p-6 border-2 transition-all duration-500 ${
                    hoveredIndex === index
                      ? "border-red-300/50 bg-gradient-to-br from-red-50/50 to-red-100/30 shadow-xl scale-[1.02]"
                      : "border-red-200/30 bg-gradient-to-br from-red-50/20 to-transparent shadow-lg"
                  }`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-32 h-32 border-2 border-red-300 rounded-full -translate-y-1/2 -translate-x-1/2" />
                    <div className="absolute bottom-0 right-0 w-24 h-24 border-2 border-red-300 rounded-full translate-y-1/2 translate-x-1/2" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center border-2 border-red-200">
                          <span className="text-xl opacity-50">{item.icon}</span>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                            Others
                          </div>
                          <div className="text-xs text-muted-foreground">Standard Service</div>
                        </div>
                      </div>
                      <div
                        className={`transition-all duration-500 ${
                          hoveredIndex === index ? "scale-110 rotate-12" : ""
                        }`}
                      >
                        <X className="w-8 h-8 text-red-400" />
                      </div>
                    </div>

                    {/* Feature Text */}
                    <p className="text-foreground/70 font-medium text-lg leading-relaxed line-through decoration-2 decoration-red-300">
                      {item.others}
                    </p>

                    {/* Animated Progress Bar */}
                    <div className="mt-4 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-300 to-red-400 rounded-full transition-all duration-1000"
                        style={{
                          width: hoveredIndex === index ? "35%" : "40%",
                        }}
                      />
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute top-4 right-4 opacity-10">
                      <TrendingDown className="w-16 h-16 text-red-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Line (Desktop Only) */}
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent z-0" />

              {/* VS Badge */}
              <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-12 h-12 rounded-full bg-background border-4 border-muted shadow-lg flex items-center justify-center">
                  <span className="text-xs font-black text-muted-foreground">VS</span>
                </div>
              </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-vivid-gold/10 to-primary/10 border border-vivid-gold/30 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-vivid-gold" />
            <p className="text-foreground font-semibold">
              Experience the <span className="text-vivid-gold">Vivid Difference</span> today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
