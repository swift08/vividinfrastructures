import { useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { HardHat } from "lucide-react";
import manvanthPhoto from "@/assets/our team/Manvanth T S.jpeg";
import vaibhavPhoto from "@/assets/our team/Vaibhav R Bhat.jpeg";
import nuthanPhoto from "@/assets/our team/Nuthan S P.jpeg";
import nitishPhoto from "@/assets/our team/Nitish S Ambale.jpeg";
import avinashPhoto from "@/assets/our team/Dr. Avinash Gornale.jpeg";
import nareshPhoto from "@/assets/our team/DR. B G Naresh Kumar .jpeg";
import pavanPhoto from "@/assets/our team/Pavan K Prakash.jpeg";
import karthikPhoto from "@/assets/our team/Er Karthik.jpeg";
import manojPhoto from "@/assets/our team/Er Manoj.jpeg";
import tejasPhoto from "@/assets/our team/Er Tejas.jpeg";
import dhanushPhoto from "@/assets/our team/Er. Dhanush.jpeg";

// Types
interface TeamMember {
  name: string;
  role: string;
  photo: string;
  qualifications?: string;
  isMain?: boolean;
}

// Data
const siteLeadership: TeamMember[] = [
  { 
    name: "Manvanth T S", 
    qualifications: "BE, MBA",
    role: "Executive Officer",
    photo: manvanthPhoto,
    isMain: true,
  },
  { 
    name: "Vaibhav R Bhat", 
    qualifications: "BE, M.Tech Structures",
    role: "Partner, Structural Engineer",
    photo: vaibhavPhoto,
    isMain: false,
  },
  { 
    name: "Nuthan S P", 
    qualifications: "BE, M.Tech",
    role: "Partner, Quality Supervision",
    photo: nuthanPhoto,
    isMain: false,
  },
];

const technicalAdvisors: TeamMember[] = [
  {
    name: "Dr. B G NARESH KUMAR",
    role: "President, MET(r)\nProfessor, Former Principal,\nMIT Mysore",
    photo: nareshPhoto,
    isMain: true,
  },
  {
    name: "Dr. Avinash GORNALE",
    role: "Professor\nMIT Mysore",
    photo: avinashPhoto,
    isMain: false,
  },
  {
    name: "Nithish S Ambale",
    role: "BE, M.Tech(PhD)\nAsst. Professor\nJyothi Institute of Technology,\nBangalore",
    photo: nitishPhoto,
    isMain: false,
  },
];

const projectManagers: TeamMember[] = [
  {
    name: "Pavan K Prakash",
    role: "PM and Professional Vastu Consultant",
    photo: pavanPhoto,
  },
  {
    name: "Karthik MK",
    role: "Site Supervision",
    photo: karthikPhoto,
  },
  {
    name: "Manoj",
    role: "Site Supervision",
    photo: manojPhoto,
  },
  {
    name: "Tejas",
    role: "Site Supervision",
    photo: tejasPhoto,
  },
  {
    name: "Dhanush",
    role: "Site Supervision",
    photo: dhanushPhoto,
  },
];

// Shared CSS Classes
const sharedStyles = {
  cardBase: "relative premium-card bg-gradient-to-br from-vivid-charcoal-light/90 to-vivid-charcoal-dark/90 backdrop-blur-md border-2 border-vivid-gold/40 rounded-2xl shadow-2xl hover:shadow-vivid-gold/20 hover:border-vivid-gold transition-all duration-500 hover:-translate-y-3",
  cardSmall: "relative premium-card bg-gradient-to-br from-vivid-charcoal-light/80 to-vivid-charcoal-dark/80 backdrop-blur-sm border border-vivid-gold/30 rounded-xl shadow-xl hover:shadow-vivid-gold/10 hover:border-vivid-gold/50 transition-all duration-500 hover:-translate-y-2",
  photoGlow: "absolute inset-0 bg-vivid-gold/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500",
  photoContainer: "relative w-full h-full rounded-full overflow-hidden border-4 border-vivid-gold/50 group-hover:border-vivid-gold shadow-2xl group-hover:scale-110 transition-all duration-500",
  photoContainerSmall: "relative w-full h-full rounded-full overflow-hidden border-2 border-vivid-gold/40 group-hover:border-vivid-gold shadow-lg group-hover:scale-110 transition-all duration-500",
  badgeCorner: "absolute -bottom-2 left-1/2 -translate-x-1/2 bg-vivid-gold rotate-45 border-2 border-vivid-charcoal-dark",
  nameText: "font-bold text-white font-heading group-hover:text-vivid-gold transition-colors duration-300",
  roleText: "text-vivid-gold/80 font-medium uppercase tracking-wide",
  decorativeLine: "h-px w-0 bg-vivid-gold mx-auto transition-all duration-500",
  bottomDecorator: "absolute bottom-4 h-px bg-vivid-gold/30 group-hover:bg-vivid-gold transition-colors",
  animationBase: "group relative transition-all duration-700",
  animationVisible: "opacity-100 translate-y-0 scale-100",
  animationHidden: "opacity-0 translate-y-20 scale-95",
};

// Reusable Components
interface TeamMemberCardProps {
  member: TeamMember;
  size: "large" | "medium" | "small";
  objectPosition?: string;
  showQualifications?: boolean;
  showBlueprintCorners?: boolean;
  showTopBar?: boolean;
  delay?: number;
}

const TeamMemberCard = ({
  member,
  size,
  objectPosition = "center 30%",
  showQualifications = false,
  showBlueprintCorners = false,
  showTopBar = false,
  delay = 0,
}: TeamMemberCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const photoSize = size === "large" ? "w-40 h-40" : "w-32 h-32";
  const badgeSize = size === "large" ? "w-8 h-8" : "w-6 h-6";
  const padding = size === "large" ? "p-8" : "p-6";
  const nameSize = size === "large" ? "text-xl" : size === "medium" ? "text-lg" : "text-sm";
  const qualSize = size === "large" ? "text-sm" : "text-xs";
  const roleSize = size === "large" ? "text-sm" : "text-xs";
  const initialSize = size === "large" ? "text-5xl" : size === "medium" ? "text-4xl" : "text-2xl";
  const decoratorWidth = size === "large" ? "w-12" : "w-10";
  const hoverLineWidth = size === "large" ? "group-hover:w-16" : "group-hover:w-12";
  const marginBottom = size === "large" ? "mb-6" : "mb-4";
  const spacing = size === "small" ? "space-y-1.5" : "space-y-2";

  return (
    <div
      ref={ref}
      className={`${sharedStyles.animationBase} ${
        isVisible ? sharedStyles.animationVisible : sharedStyles.animationHidden
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`${size === "small" ? sharedStyles.cardSmall : sharedStyles.cardBase} ${padding}`}>
        {showTopBar && (
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-vivid-gold/50 via-vivid-gold to-vivid-gold/50 rounded-t-xl" />
        )}
        
        {showBlueprintCorners && (
          <>
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-vivid-gold/50" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-vivid-gold/50" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-vivid-gold/50" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-vivid-gold/50" />
          </>
        )}

        <div className={`relative mx-auto ${marginBottom} ${photoSize}`}>
          <div className={sharedStyles.photoGlow} />
          <div className={size === "small" ? sharedStyles.photoContainerSmall : sharedStyles.photoContainer}>
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover"
                style={{ objectPosition }}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-vivid-gold/30 to-vivid-gold/10 flex items-center justify-center">
                <span className={`${initialSize} font-bold text-vivid-gold font-heading`}>
                  {member.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
          {size !== "small" && (
            <div className={`${sharedStyles.badgeCorner} ${badgeSize}`} />
          )}
        </div>

        <div className={`text-center ${spacing}`}>
          <h3 className={`${nameSize} ${sharedStyles.nameText}`}>
            {member.name}
          </h3>
          {showQualifications && member.qualifications && (
            <p className={`${qualSize} text-vivid-gold/90 font-medium`}>
              {member.qualifications}
            </p>
          )}
          <div className={`${sharedStyles.decorativeLine} ${hoverLineWidth}`} />
          <p className={`${roleSize} ${sharedStyles.roleText} ${size === "small" ? "leading-tight" : ""} ${member.role.includes("\n") ? "whitespace-pre-line leading-relaxed" : ""}`}>
            {member.role}
          </p>
        </div>

        {size !== "small" && (
          <>
            <div className={`${sharedStyles.bottomDecorator} left-4 ${decoratorWidth}`} />
            <div className={`${sharedStyles.bottomDecorator} right-4 ${decoratorWidth}`} />
          </>
        )}
      </div>
    </div>
  );
};

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
        aria-hidden="true"
      />

      {/* Construction Site Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-5" aria-hidden="true">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-vivid-gold rotate-45" />
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-vivid-gold rotate-12" />
        <div className="absolute bottom-32 left-1/4 w-28 h-28 border-2 border-vivid-gold -rotate-45" />
        <div className="absolute bottom-20 right-1/3 w-36 h-36 border-2 border-vivid-gold rotate-90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8">
          <div
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-vivid-gold/10 border-2 border-vivid-gold/30 backdrop-blur-sm mb-6 transition-all duration-700 ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            <HardHat className="w-5 h-5 text-vivid-gold" aria-hidden="true" />
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

        {/* Site Leadership */}
        <div className="mb-8 md:mb-10">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-vivid-gold font-heading mb-2">
              Site Leadership
            </h3>
            <p className="text-white/60 text-sm uppercase tracking-wider">Project Directors</p>
          </div>
          
          {/* Main Leader */}
          <div className="max-w-md mx-auto mb-8">
            {(() => {
              const member = siteLeadership.find(m => m.isMain);
              return member ? (
                <TeamMemberCard
                  member={member}
                  size="large"
                  objectPosition="center 30%"
                  showQualifications
                />
              ) : null;
            })()}
          </div>

          {/* Secondary Leaders */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {siteLeadership
              .filter((member) => !member.isMain)
              .map((member, index) => (
                <TeamMemberCard
                  key={member.name}
                  member={member}
                  size="medium"
                  objectPosition="center 30%"
                  showQualifications
                  delay={300 + index * 150}
                />
              ))}
          </div>
        </div>

        {/* Technical Advisors */}
        <div className="mb-8 md:mb-10">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-vivid-gold font-heading mb-2">
              Technical Advisors
            </h3>
            <p className="text-white/60 text-sm uppercase tracking-wider">Academic Specialists</p>
          </div>
          
          {/* Main Advisor */}
          <div className="max-w-md mx-auto mb-8">
            {(() => {
              const advisor = technicalAdvisors.find(a => a.isMain);
              return advisor ? (
                <TeamMemberCard
                  member={advisor}
                  size="large"
                  objectPosition="center 30%"
                  showBlueprintCorners
                  delay={600}
                />
              ) : null;
            })()}
          </div>

          {/* Secondary Advisors */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {technicalAdvisors
              .filter((advisor) => !advisor.isMain)
              .map((advisor, index) => (
                <TeamMemberCard
                  key={advisor.name}
                  member={advisor}
                  size="medium"
                  objectPosition="center 30%"
                  showBlueprintCorners
                  delay={900 + index * 150}
                />
              ))}
          </div>
        </div>

        {/* Project Managers */}
        <div>
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-vivid-gold font-heading mb-2">
              Project Managers
            </h3>
            <p className="text-white/60 text-sm uppercase tracking-wider">Site Supervision</p>
          </div>
          
          {/* Main Project Manager - Pavan (Top Center) */}
          <div className="max-w-md mx-auto mb-8">
            {(() => {
              const mainPM = projectManagers.find(m => m.name === "Pavan K Prakash");
              return mainPM ? (
                <TeamMemberCard
                  member={mainPM}
                  size="medium"
                  objectPosition="center 60%"
                  showTopBar
                  delay={1200}
                />
              ) : null;
            })()}
          </div>

          {/* Other Project Managers - Karthik, Manoj, Tejas, Dhanush (Bottom Row) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {projectManagers
              .filter((member) => member.name !== "Pavan K Prakash")
              .map((member, index) => (
                <TeamMemberCard
                  key={member.name}
                  member={member}
                  size="small"
                  objectPosition="center 60%"
                  showTopBar
                  delay={1500 + index * 100}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
