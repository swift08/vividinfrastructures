import { useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { HardHat, Building2, Award, Users } from "lucide-react";
import manvanthPhoto from "@/assets/our team/Manvanth T S.jpeg";
import vaibhavPhoto from "@/assets/our team/Vaibhav R Bhat.jpeg";
import nuthanPhoto from "@/assets/our team/Nuthan S P.jpeg";
import nitishPhoto from "@/assets/our team/Nitish S Ambale.jpeg";
import avinashPhoto from "@/assets/our team/Dr. Avinash Gornale.jpeg";
import pavanPhoto from "@/assets/our team/Pavan K Prakash.jpeg";
import nareshPhoto from "@/assets/our team/DR. B G Naresh Kumar .jpeg";

const teamMembers = [
  { 
    name: "Manvanth T S", 
    role: "Executive Officer",
    photo: manvanthPhoto,
    isMain: true,
    icon: Building2,
  },
  { 
    name: "Vaibhav R Bhat", 
    role: "Partner Structural Engineer",
    photo: vaibhavPhoto,
    isMain: true,
    icon: HardHat,
  },
  { 
    name: "Nuthan S P", 
    role: "Partner Quality Incharge",
    photo: nuthanPhoto,
    isMain: true,
    icon: Award,
  },
  { 
    name: "Nitish S Ambale", 
    role: "Dormant Partner",
    photo: nitishPhoto,
    isMain: false,
    icon: Users,
  },
  { 
    name: "Dr. Avinash Gornale", 
    role: "Chief Structural Consultant",
    photo: avinashPhoto,
    isMain: false,
    icon: Building2,
  },
  { 
    name: "Pavan K Prakash", 
    role: "Project Manager & Professional Vastu Consultant",
    photo: pavanPhoto,
    isMain: false,
    icon: HardHat,
  },
];

const technicalAdvisors = [
  {
    name: "DR. B G NARESH KUMAR",
    role: "President, MIT Mysore",
    photo: nareshPhoto,
  },
  {
    name: "DR. AVINASH GORNALE",
    role: "Professor, MIT Mysore",
    photo: avinashPhoto,
  },
];

const Team = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Blueprint grid background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationFrame: number;
    let time = 0;

    const draw = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Blueprint grid pattern
      ctx.strokeStyle = "rgba(255, 215, 0, 0.08)";
      ctx.lineWidth = 0.5;
      const gridSize = 40;

      for (let i = 0; i < canvas.width / gridSize; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize + (time * 3) % gridSize, 0);
        ctx.lineTo(i * gridSize + (time * 3) % gridSize, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i < canvas.height / gridSize; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * gridSize + (time * 3) % gridSize);
        ctx.lineTo(canvas.width, i * gridSize + (time * 3) % gridSize);
        ctx.stroke();
      }

      // Construction measurement lines
      const measurements = [
        { x: canvas.width * 0.1, y: canvas.height * 0.2, length: 100 },
        { x: canvas.width * 0.8, y: canvas.height * 0.3, length: 80 },
        { x: canvas.width * 0.15, y: canvas.height * 0.7, length: 90 },
        { x: canvas.width * 0.85, y: canvas.height * 0.8, length: 70 },
      ];

      measurements.forEach((m, i) => {
        const offset = Math.sin(time + i) * 5;
        ctx.strokeStyle = "rgba(255, 215, 0, 0.1)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(m.x + offset, m.y);
        ctx.lineTo(m.x + m.length + offset, m.y);
        ctx.stroke();
        // Measurement ticks
        ctx.beginPath();
        ctx.moveTo(m.x + offset, m.y - 3);
        ctx.lineTo(m.x + offset, m.y + 3);
        ctx.moveTo(m.x + m.length + offset, m.y - 3);
        ctx.lineTo(m.x + m.length + offset, m.y + 3);
        ctx.stroke();
      });

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-8 md:py-12 bg-gradient-to-b from-vivid-charcoal-dark via-vivid-charcoal to-vivid-charcoal-dark text-secondary-foreground relative overflow-hidden"
    >
      {/* Animated Blueprint Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ mixBlendMode: "overlay" }}
      />

      {/* Construction Site Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-vivid-gold rotate-45" />
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-vivid-gold rotate-12" />
        <div className="absolute bottom-32 left-1/4 w-28 h-28 border-2 border-vivid-gold -rotate-45" />
        <div className="absolute bottom-20 right-1/3 w-36 h-36 border-2 border-vivid-gold rotate-90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Construction Theme */}
        <div className="text-center mb-6 md:mb-8">
          <div
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-vivid-gold/10 border-2 border-vivid-gold/30 backdrop-blur-sm mb-6 transition-all duration-700 ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            <HardHat className="w-5 h-5 text-vivid-gold" />
            <span className="text-sm font-bold text-vivid-gold uppercase tracking-wider">Our Construction Team</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading text-white transition-all duration-700 delay-200 ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            Building Excellence,
            <br />
            <span className="text-gradient-gold">One Team at a Time</span>
        </h2>
          <div className="w-24 h-1 bg-vivid-gold mx-auto mt-6" />
        </div>

        {/* Leadership Team - Construction Site Badge Style */}
        <div className="mb-8 md:mb-10">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-vivid-gold font-heading mb-2">
              Site Leadership
            </h3>
            <p className="text-white/60 text-sm uppercase tracking-wider">Project Directors</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers
              .filter((member) => member.isMain)
              .map((member, index) => {
                const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
                const Icon = member.icon;

                return (
                  <div
                    key={index}
                    ref={ref}
                    className={`group relative transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-20 scale-95"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Construction Badge Card */}
                    <div className="relative premium-card bg-gradient-to-br from-vivid-charcoal-light/90 to-vivid-charcoal-dark/90 backdrop-blur-md border-2 border-vivid-gold/40 rounded-2xl p-8 shadow-2xl hover:shadow-vivid-gold/20 hover:border-vivid-gold transition-all duration-500 hover:-translate-y-3">
                      {/* Photo Container - Hexagonal Style */}
                      <div className="relative mx-auto mb-6 w-36 h-36">
                        <div className="absolute inset-0 bg-vivid-gold/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-vivid-gold/50 group-hover:border-vivid-gold shadow-2xl group-hover:scale-110 transition-all duration-500">
                          {member.photo ? (
                            <img
                              src={member.photo}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-vivid-gold/30 to-vivid-gold/10 flex items-center justify-center">
                              <span className="text-5xl font-bold text-vivid-gold font-heading">
                                {member.name.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                        {/* Construction Badge Corner */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-vivid-gold rotate-45 border-2 border-vivid-charcoal-dark" />
                      </div>

                      {/* Name & Role */}
                      <div className="text-center space-y-2">
                        <h3 className="text-xl font-bold text-white font-heading group-hover:text-vivid-gold transition-colors duration-300">
                          {member.name}
                        </h3>
                        <div className="h-px w-0 bg-vivid-gold mx-auto group-hover:w-16 transition-all duration-500" />
                        <p className="text-vivid-gold/80 text-sm font-medium uppercase tracking-wide">
                          {member.role}
                        </p>
                      </div>

                      {/* Decorative Construction Lines */}
                      <div className="absolute bottom-4 left-4 w-12 h-px bg-vivid-gold/30 group-hover:bg-vivid-gold transition-colors" />
                      <div className="absolute bottom-4 right-4 w-12 h-px bg-vivid-gold/30 group-hover:bg-vivid-gold transition-colors" />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Technical Advisors - Blueprint Card Style */}
        <div className="mb-8 md:mb-10">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-vivid-gold font-heading mb-2">
              Technical Advisors
            </h3>
            <p className="text-white/60 text-sm uppercase tracking-wider">Expert Consultants</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {technicalAdvisors.map((advisor, index) => {
              const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

              return (
                <div
                  key={index}
                  ref={ref}
                  className={`group relative transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-20 scale-95"
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  {/* Blueprint Style Card */}
                  <div className="relative premium-card bg-gradient-to-br from-vivid-charcoal-light/90 to-vivid-charcoal-dark/90 backdrop-blur-md border-2 border-vivid-gold/40 rounded-2xl p-8 shadow-2xl hover:shadow-vivid-gold/20 hover:border-vivid-gold transition-all duration-500 hover:-translate-y-3">
                    {/* Blueprint Corner Markers */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-vivid-gold/50" />
                    <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-vivid-gold/50" />
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-vivid-gold/50" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-vivid-gold/50" />

                    {/* Photo */}
                    <div className="relative mx-auto mb-6 w-32 h-32">
                      <div className="absolute inset-0 bg-vivid-gold/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-vivid-gold/50 group-hover:border-vivid-gold shadow-2xl group-hover:scale-110 transition-all duration-500">
                        {advisor.photo ? (
                          <img
                            src={advisor.photo}
                            alt={advisor.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-vivid-gold/30 to-vivid-gold/10 flex items-center justify-center">
                            <span className="text-4xl font-bold text-vivid-gold font-heading">
                              {advisor.name.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Name & Role */}
                    <div className="text-center space-y-2">
                      <h3 className="text-lg font-bold text-white font-heading group-hover:text-vivid-gold transition-colors duration-300">
                        {advisor.name}
                      </h3>
                      <div className="h-px w-0 bg-vivid-gold mx-auto group-hover:w-16 transition-all duration-500" />
                      <p className="text-vivid-gold/80 text-sm font-medium">
                        {advisor.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Other Team Members - Construction ID Badge Style */}
        <div>
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-vivid-gold font-heading mb-2">
              Core Team
            </h3>
            <p className="text-white/60 text-sm uppercase tracking-wider">Specialists</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {teamMembers
              .filter((member) => !member.isMain)
              .map((member, index) => {
                const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
                const Icon = member.icon;

                return (
                  <div
                    key={index}
                    ref={ref}
                    className={`group relative transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-20 scale-95"
                    }`}
                    style={{ transitionDelay: `${900 + index * 150}ms` }}
                  >
                    {/* ID Badge Style Card */}
                    <div className="relative premium-card bg-gradient-to-br from-vivid-charcoal-light/80 to-vivid-charcoal-dark/80 backdrop-blur-sm border border-vivid-gold/30 rounded-xl p-6 shadow-xl hover:shadow-vivid-gold/10 hover:border-vivid-gold/50 transition-all duration-500 hover:-translate-y-2">
                      {/* ID Badge Header */}
                      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-vivid-gold/50 via-vivid-gold to-vivid-gold/50 rounded-t-xl" />

                      {/* Icon */}
                      <div className="absolute top-3 right-3 w-8 h-8 bg-vivid-gold/20 rounded-lg flex items-center justify-center border border-vivid-gold/30 group-hover:bg-vivid-gold/30 transition-colors">
                        <Icon className="w-4 h-4 text-vivid-gold" />
                      </div>

                      {/* Photo */}
                      <div className="relative mx-auto mb-4 w-20 h-20">
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-vivid-gold/40 group-hover:border-vivid-gold shadow-lg group-hover:scale-110 transition-all duration-500">
                          {member.photo ? (
                            <img
                              src={member.photo}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-vivid-gold/30 to-vivid-gold/10 flex items-center justify-center">
                              <span className="text-2xl font-bold text-vivid-gold font-heading">
                  {member.name.charAt(0)}
                </span>
              </div>
                          )}
                        </div>
                      </div>

                      {/* Name & Role */}
                      <div className="text-center space-y-1.5">
                        <h3 className="text-sm font-bold text-white font-heading group-hover:text-vivid-gold transition-colors duration-300">
                {member.name}
              </h3>
                        <div className="h-px w-0 bg-vivid-gold mx-auto group-hover:w-12 transition-all duration-500" />
                        <p className="text-vivid-gold/70 text-xs leading-tight">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
