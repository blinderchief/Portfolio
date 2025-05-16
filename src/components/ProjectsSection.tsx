
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
    title: "Multimodal Fake News Detection System",
    description: "Developed a system to detect fake news using multimodal data (text, images, videos) and advanced AI techniques. Leveraged NLP, Computer Vision, and graph-based models for cross-modal analysis.",
    technologies: ["Python", "TensorFlow", "OpenCV", "NetworkX", "Transformers", "Explainable AI"],
    link: "#"
  },
  {
    title: "AI-Powered Health & Fitness Website (BLINDERFIT)",
    description: "Developing an AI-driven health and fitness Website with personalized nutrition plans and integrations using API.",
    technologies: ["Python", "TensorFlow", "RAG-based Fine-tuning", "React Native", "APIs"],
    link: "https://blinderfit-live.firebaseapp.com/"
  },
  {
    title: "Sentiment Analysis of Political Tweets",
    description: "Built a tool to analyze political tweets across multiple languages and detect nuanced emotions. Applied NLP and transformer-based models (BERT) for accurate sentiment classification.",
    technologies: ["Python", "Hugging Face Transformers", "Pandas", "Matplotlib", "Multilingual Analysis"],
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
          
          {/* Display other projects in a grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.filter(p => p.title !== "Sentiment Analysis of Political Tweets").map((project, index) => {
              // Determine the image path based on the project
              let imagePath = `/project-${index + 1}.jpg`;
              if (project.title === "Multimodal Fake News Detection System") {
                imagePath = "/multimodalfake.png";
              } else if (project.title === "AI-Powered Health & Fitness Website (BLINDERFIT)") {
                imagePath = "/blinderfit.png";
              }
              
              return (
                <div 
                  key={index}
                  className={cn(
                    "group bg-background rounded-xl overflow-hidden shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md opacity-0",
                    inView && "animate-fade-in"
                  )}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="h-48 bg-muted flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={imagePath} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              );
            })}
          </div>
          
          {/* Display Sentiment Analysis project centered below */}
          <div className="max-w-md mx-auto">
            {projects.filter(p => p.title === "Sentiment Analysis of Political Tweets").map((project, index) => (
              <div 
                key={index}
                className={cn(
                  "group bg-background rounded-xl overflow-hidden shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md opacity-0",
                  inView && "animate-fade-in"
                )}
                style={{ animationDelay: `0.4s` }}
              >
                <div className="h-48 bg-muted flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/sentimentanalysis.png" 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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













