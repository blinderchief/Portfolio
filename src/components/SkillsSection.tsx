
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      "Python", "C++", "Java", "JavaScript", "R"
    ]
  },
  {
    title: "Database Management",
    skills: [
      "MySQL", "SQL", "MongoDB", "Supabase"
    ]
  },
  {
    title: "Machine Learning & AI",
    skills: [
      "TensorFlow", "Scikit-learn", "Neural Networks", "NLP", 
      "Deep Learning", "PyTorch", "Streamlit", "Transformers", "BERT"
    ]
  },
  {
    title: "Data Science & Tools",
    skills: [
      "DSA", "Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn", 
      "EDA", "ETL", "Git", "GitHub", "OpenCV", "NetworkX"
    ]
  },
  {
    title: "Web Development",
    skills: [
      "HTML", "CSS", "Django", "JavaScript","APIs"
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
                  inView && "animate-fade-in",
                  category.title === "Web Development" ? "col-span-1 md:col-span-2 mx-auto max-w-xl" : ""
                )}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-center">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2 justify-center">
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


