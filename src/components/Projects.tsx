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
