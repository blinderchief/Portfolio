
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "College Programs & Competitive Programming",
    position: "Competitive Programmer",
    period: "2024 - Present",
    description: [
      "Actively involved in coding competitions and events like Vishwas Diwas, applying algorithmic problem-solving skills",
      "Participating in the 2024-2025 ICPC online round, collaborating with peers to solve complex algorithmic challenges"
    ]
  },
  {
    company: "SSB of Indian Army and Navy",
    position: "Selection Process Participant",
    period: "2022 - 2023",
    description: [
      "Gained skills in leadership, responsibility management, and quick decision-making through participation in selection processes"
    ]
  }
];

const ExperienceSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/50">
      <div className="section-container" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <div className={cn(
            "text-center mb-16 opacity-0",
            inView && "animate-fade-in"
          )}>
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle mx-auto">
              My professional journey and the companies I've had the pleasure to work with.
            </p>
          </div>
          <div className="space-y-12">
            {experiences.map((job, index) => (
              <div 
                key={index}
                className={cn(
                  "bg-background rounded-xl p-6 md:p-8 shadow-sm border border-border/50 opacity-0",
                  inView && "animate-fade-in"
                )}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.position}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="text-muted-foreground text-sm font-medium px-3 py-1 bg-muted rounded-full">
                      {job.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {job.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-primary mt-1 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

