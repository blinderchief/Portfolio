
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with product catalog, cart, and checkout functionality. Integrated with payment gateways and includes admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    link: "#"
  },
  {
    title: "Content Management System",
    description: "Custom CMS built for content creators with rich text editing, media management, and SEO optimization features. Includes analytics dashboard.",
    technologies: ["Next.js", "TypeScript", "GraphQL", "AWS S3"],
    link: "#"
  },
  {
    title: "Portfolio Generator",
    description: "A web application that helps users create beautiful portfolios without coding. Features customizable templates and themes.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, deadline tracking, and team communication features.",
    technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
    link: "#"
  }
];

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/50">
      <div className="section-container" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <div className={cn(
            "text-center mb-16 opacity-0",
            inView && "animate-fade-in"
          )}>
            <h2 className="section-title">Recent Projects</h2>
            <p className="section-subtitle mx-auto">
              A selection of my recent work and the technologies I used to build them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={cn(
                  "group bg-background rounded-xl overflow-hidden shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md opacity-0",
                  inView && "animate-fade-in"
                )}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="h-48 bg-muted flex items-center justify-center">
                  <div className="text-muted-foreground/50">Project Image</div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-secondary text-xs font-medium text-secondary-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    <span>View Project</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
