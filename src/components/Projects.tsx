// Import all project images
import project1 from "@/assets/projects/3.jpg";
import project2 from "@/assets/projects/4.jpg";
import project3 from "@/assets/projects/7.jpg";
import project4 from "@/assets/projects/9.jpg";
import project5 from "@/assets/projects/11.jpg";
import project6 from "@/assets/projects/12.jpg";
import project7 from "@/assets/projects/12 (1).jpg";
import project8 from "@/assets/projects/12 (2).jpg";
import project9 from "@/assets/projects/13.jpg";
import project10 from "@/assets/projects/14.jpg";
import project11 from "@/assets/projects/15.jpg";
import project12 from "@/assets/projects/20.jpg";
import project13 from "@/assets/projects/21.jpg";
import project14 from "@/assets/projects/Mr. Chethan's Residence (2).jpeg";
import project15 from "@/assets/projects/Mr. Chethan's Residence.jpeg";
import project16 from "@/assets/projects/Mr. Manuprasad's Residence.jpeg";
import project17 from "@/assets/projects/Mr. Paramesh's Residence.jpeg";
import project18 from "@/assets/projects/MR. PRUTHVI'S RESIDENCE.png";
import project19 from "@/assets/projects/Mr. Raghu's Residence.jpeg";
import project20 from "@/assets/projects/Mr. Shivshankar's Residence.jpeg";
import project21 from "@/assets/projects/Mr. Srinivas Residence.jpeg";
import project22 from "@/assets/projects/MR.AMARESH'S PROPOSED ELEVATION.png";
import project23 from "@/assets/projects/MR.SADASHIVAIAH'S RESIDENCE ELEVATION.png";
import project24 from "@/assets/projects/Mr.Srinivas residence.jpeg";
import project25 from "@/assets/projects/WhatsApp Image 2026-01-12 at 2.13.32 PM (1).jpeg";
import project26 from "@/assets/projects/WhatsApp Image 2026-01-12 at 2.13.32 PM (2).jpeg";
import project27 from "@/assets/projects/WhatsApp Image 2026-01-12 at 2.13.32 PM.jpeg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  { name: "Mr. Narendra Simha Residence", image: project1 },
  { name: "Mr. Paramesh Residence", image: project2 },
  { name: "Mr. Shivashankar Residence", image: project3 },
  { name: "Mr. Raghu Residence", image: project4 },
  { name: "Mr. Yatish Residence", image: project5 },
  { name: "Mr. Manu Prasad Residence", image: project6 },
  { name: "Project Gallery 1", image: project7 },
  { name: "Project Gallery 2", image: project8 },
  { name: "Project Gallery 3", image: project9 },
  { name: "Project Gallery 4", image: project10 },
  { name: "Project Gallery 5", image: project11 },
  { name: "Project Gallery 6", image: project12 },
  { name: "Project Gallery 7", image: project13 },
  { name: "Mr. Chethan's Residence", image: project14 },
  { name: "Mr. Chethan's Residence", image: project15 },
  { name: "Mr. Manuprasad's Residence", image: project16 },
  { name: "Mr. Paramesh's Residence", image: project17 },
  { name: "Mr. Pruthvi's Residence", image: project18 },
  { name: "Mr. Raghu's Residence", image: project19 },
  { name: "Mr. Shivshankar's Residence", image: project20 },
  { name: "Mr. Srinivas Residence", image: project21 },
  { name: "Mr. Amaresh's Proposed Elevation", image: project22 },
  { name: "Mr. Sadashivaiah's Residence Elevation", image: project23 },
  { name: "Mr. Srinivas Residence", image: project24 },
  { name: "Project Gallery 8", image: project25 },
  { name: "Project Gallery 9", image: project26 },
  { name: "Project Gallery 10", image: project27 },
];

const Projects = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-8 md:py-10 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 font-heading text-foreground transition-all duration-700 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          Our <span className="text-gradient-gold">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const { ref, isVisible } = useScrollAnimation({
              threshold: 0.1,
            });

            return (
              <div
                key={index}
                ref={ref}
                className={`group premium-card overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
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
                <div className="p-6 bg-background">
                  <h3 className="font-semibold text-foreground font-heading group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </h3>
                  <div className="mt-3 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
