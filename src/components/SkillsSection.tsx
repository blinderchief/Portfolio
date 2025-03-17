
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React", "TypeScript", "JavaScript", "HTML", "CSS/SCSS", 
      "Tailwind CSS", "Redux", "Next.js", "Webpack"
    ]
  },
  {
    title: "Backend",
    skills: [
      "Node.js", "Express", "RESTful APIs", "GraphQL", 
      "Firebase", "MongoDB"
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git", "GitHub", "VS Code", "Docker", "AWS", 
      "Netlify", "Vercel", "CI/CD", "Jest"
    ]
  },
  {
    title: "Design & Other",
    skills: [
      "Figma", "Adobe XD", "Responsive Design", "UI/UX Principles", 
      "Accessibility", "Performance Optimization"
    ]
  }
];

const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="section-container" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <div className={cn(
            "text-center mb-16 opacity-0",
            inView && "animate-fade-in"
          )}>
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle mx-auto">
              A showcase of my technical abilities and technologies I work with.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={cn(
                  "bg-background rounded-xl p-6 md:p-8 shadow-sm border border-border/50 opacity-0",
                  inView && "animate-fade-in"
                )}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
