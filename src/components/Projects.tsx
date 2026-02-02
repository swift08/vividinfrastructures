// Import project images - Main projects
import project1 from "@/assets/projects/3.jpg";
import project5 from "@/assets/projects/11.jpg";
import project15 from "@/assets/projects/Mr. Chethan's Residence.jpeg";
import project16 from "@/assets/projects/Mr. Manuprasad's Residence 1.jpeg";
import project17 from "@/assets/projects/Mr. Paramesh's Residence.jpeg";
import project18 from "@/assets/projects/MR. PRUTHVI'S RESIDENCE.png";
import project19 from "@/assets/projects/Mr. Raghu's Residence.jpeg";
import project20 from "@/assets/projects/Mr. Shivshankar's Residence.jpeg";
import project21 from "@/assets/projects/Mr. Srinivas Residence.jpeg";
import project22 from "@/assets/projects/MR.AMARESH'S PROPOSED ELEVATION.png";
import project23 from "@/assets/projects/MR.SADASHIVAIAH'S RESIDENCE ELEVATION.png";
import project24 from "@/assets/projects/Mrs.Manjula's Residence .jpeg";
import project28 from "@/assets/projects/Mr Narendra Simha's Residence.jpeg";
// Import project images - Others (Gallery)
import project7 from "@/assets/projects/12 (1).jpg";
import project8 from "@/assets/projects/12 (2).jpg";
import project9 from "@/assets/projects/13.jpg";
import project10 from "@/assets/projects/14.jpg";
import project11 from "@/assets/projects/15.jpg";
import project12 from "@/assets/projects/20.jpg";
import project13 from "@/assets/projects/21.jpg";
import project25 from "@/assets/projects/WhatsApp Image 2026-01-12 at 2.13.32 PM (1).jpeg";
import project26 from "@/assets/projects/WhatsApp Image 2026-01-12 at 2.13.32 PM (2).jpeg";
import project27 from "@/assets/projects/WhatsApp Image 2026-01-12 at 2.13.32 PM.jpeg";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Main projects (named residences/elevations - no duplicates)
const mainProjects = [
  { name: "Mr. Chethan's Residence", image: project15 },
  { name: "Mr. Narendra Simha's Residence", image: project28 },
  { name: "Mr. Manuprasad's Residence", image: project16 },
  { name: "Mr. Paramesh's Residence", image: project17 },
  { name: "Mr. Pruthvi's Residence", image: project18 },
  { name: "Mr. Raghu's Residence", image: project19 },
  { name: "Mr. Shivshankar's Residence", image: project20 },
  { name: "Mr. Srinivas Residence", image: project21 },
  { name: "Mrs.Manjula's Residence", image: project24 },
  { name: "Mr. Amaresh's Proposed Elevation", image: project22 },
  { name: "Mr. Sadashivaiah's Residence Elevation", image: project23 },
];

// Others section - Project Gallery items
const otherProjects = [
  { name: "Gallery 1", image: project7 },
  { name: "Gallery 2", image: project8 },
  { name: "Gallery 3", image: project9 },
  { name: "Gallery 4", image: project10 },
  { name: "Gallery 5", image: project11 },
  { name: "Gallery 6", image: project12 },
  { name: "Gallery 7", image: project13 },
  { name: "Gallery 8", image: project25 },
  { name: "Gallery 9", image: project26 },
  { name: "Gallery 10", image: project27 },
  { name: "Gallery 11", image: project1 },
  { name: "Mr. Yatish Residence", image: project5 },
];

type ProjectItem = { name: string; image: string };

const ProjectCard = ({
  project,
  index,
  baseDelay = 0,
  hideTitle = false,
  onCardClick,
}: {
  project: ProjectItem;
  index: number;
  baseDelay?: number;
  hideTitle?: boolean;
  onCardClick?: (project: ProjectItem) => void;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={() => onCardClick?.(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onCardClick?.(project);
        }
      }}
      className={`group premium-card overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      }`}
      style={{ transitionDelay: `${baseDelay + index * 50}ms` }}
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      {!hideTitle && (
        <div className="p-6 bg-background">
          <h3 className="font-semibold text-foreground font-heading group-hover:text-primary transition-colors duration-300">
            {project.name}
          </h3>
          <div className="mt-3 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [othersExpanded, setOthersExpanded] = useState(false);
  const [openProject, setOpenProject] = useState<ProjectItem | null>(null);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-8 md:py-10 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-2 font-heading text-foreground transition-all duration-700 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          Our <span className="text-gradient-gold">Projects</span>
        </h2>
        <p
          className={`text-center text-muted-foreground text-sm md:text-base mb-6 md:mb-8 transition-all duration-700 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Click on any photo to view it in full size.
        </p>

        {/* Main Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              baseDelay={0}
              onCardClick={setOpenProject}
            />
          ))}
        </div>

        {/* Others Section - click to show photos */}
        <div className="mt-12 md:mt-16">
          <button
            type="button"
            onClick={() => setOthersExpanded(!othersExpanded)}
            className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl border-2 border-border bg-card hover:border-primary hover:bg-muted/50 transition-all duration-300 font-heading font-bold text-2xl md:text-3xl text-foreground ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
            aria-expanded={othersExpanded}
          >
            Others
            <span
              className={`inline-block transition-transform duration-300 ${
                othersExpanded ? "rotate-180" : ""
              }`}
              aria-hidden
            >
              ▼
            </span>
          </button>
          {othersExpanded && (
            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 animate-fade-in">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={index}
                  baseDelay={300}
                  hideTitle
                  onCardClick={setOpenProject}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox: open photo at original aspect ratio */}
      <Dialog open={!!openProject} onOpenChange={(open) => !open && setOpenProject(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-4 border-0 bg-black/95 focus:outline-none [&>button]:text-white [&>button]:hover:text-white [&>button]:opacity-90">
          <DialogTitle className="sr-only">
            {openProject ? openProject.name : "Project image"}
          </DialogTitle>
          {openProject && (
            <img
              src={openProject.image}
              alt={openProject.name}
              className="max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg"
              style={{ aspectRatio: "auto" }}
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
