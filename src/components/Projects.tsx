// Import all project images
// Named residences / elevations
import imgNarendra from "@/assets/projects/Mr Narendra Simha's Residence.jpeg";
import imgManuprasad from "@/assets/projects/Mr. Manuprasad's Residence 1.jpeg";
import imgManjula from "@/assets/projects/Mrs.Manjula's Residence .jpeg";
import imgYatish from "@/assets/projects/11.jpg";
import imgChethan from "@/assets/projects/Mr. Chethan's Residence.jpeg";
import imgParamesh from "@/assets/projects/Mr. Paramesh's Residence.jpeg";
import imgPruthvi from "@/assets/projects/MR. PRUTHVI'S RESIDENCE.png";
import imgRaghu from "@/assets/projects/Mr. Raghu's Residence.jpeg";
import imgShivshankar from "@/assets/projects/Mr. Shivshankar's Residence.jpeg";
import imgSrinivas from "@/assets/projects/Mr. Srinivas Residence.jpeg";
import imgAmaresh from "@/assets/projects/MR.AMARESH'S PROPOSED ELEVATION.png";
import imgSadashivaiah from "@/assets/projects/MR.SADASHIVAIAH'S RESIDENCE ELEVATION.png";

// Gallery images
import gallery1 from "@/assets/projects/3.jpg";
import gallery2 from "@/assets/projects/12 (1).jpg";
import gallery3 from "@/assets/projects/12 (2).jpg";
import gallery4 from "@/assets/projects/13.jpg";
import gallery5 from "@/assets/projects/14.jpg";
import gallery6 from "@/assets/projects/15.jpg";
import gallery7 from "@/assets/projects/20.jpg";
import gallery8 from "@/assets/projects/21.jpg";
import gallery9 from "@/assets/projects/WhatsApp Image 2026-01-12 at 2.13.32 PM (1).jpeg";
import gallery10 from "@/assets/projects/WhatsApp Image 2026-01-12 at 2.13.32 PM (2).jpeg";
import gallery11 from "@/assets/projects/WhatsApp Image 2026-01-12 at 2.13.32 PM.jpeg";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Main projects (named residences/elevations - no duplicates)
const mainProjects = [
  { name: "Mr. Narendra Simha's Residence", image: imgNarendra },
  { name: "Mr. Manuprasad's Residence", image: imgManuprasad },
  { name: "Mrs.Manjula's Residence", image: imgManjula },
  { name: "Mr. Chethan's Residence", image: imgChethan },
  { name: "Mr. Paramesh's Residence", image: imgParamesh },
  { name: "Mr. Pruthvi's Residence", image: imgPruthvi },
  { name: "Mr. Raghu's Residence", image: imgRaghu },
  { name: "Mr. Shivshankar's Residence", image: imgShivshankar },
  { name: "Mr. Srinivas Residence", image: imgSrinivas },
  { name: "Mr. Amaresh's Proposed Elevation", image: imgAmaresh },
  { name: "Mr. Sadashivaiah's Residence Elevation", image: imgSadashivaiah },
];

// Others section - Project Gallery items (no named residences)
const otherProjects = [
  { name: "Project Gallery 1", image: gallery1 },
  { name: "Project Gallery 2", image: gallery2 },
  { name: "Project Gallery 3", image: gallery3 },
  { name: "Project Gallery 4", image: gallery4 },
  { name: "Project Gallery 5", image: gallery5 },
  { name: "Project Gallery 6", image: gallery6 },
  { name: "Project Gallery 7", image: gallery7 },
  { name: "Project Gallery 8", image: gallery8 },
  { name: "Project Gallery 9", image: gallery9 },
  { name: "Project Gallery 10", image: gallery10 },
  { name: "Project Gallery 11", image: gallery11 },
  { name: "Mr. Yatish Residence", image: imgYatish },
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
          For a better view of the projects, click on any card to view the photo.
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

        {/* Others Section - Project Gallery */}
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