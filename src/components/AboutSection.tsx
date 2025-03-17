
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="section-container" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className={cn(
                "section-title mb-6 opacity-0",
                inView && "animate-fade-in"
              )}>
                About Me
              </h2>
              
              <div className={cn(
                "space-y-4 opacity-0",
                inView && "animate-fade-in"
              )}
              style={{ animationDelay: '0.2s' }}>
                <p className="text-muted-foreground leading-relaxed">
                  Hi, I'm Suyash Kumar Singh. I'm a passionate Data Science and AI student with a strong foundation in data analysis, machine learning, and software development.
                  Proficient in programming languages like Python, R, and C++, and experienced in leveraging tools like Pandas, NumPy, and Scikit-learn for data-driven insights. 
                  Adept at working in teams, managing time efficiently, and solving complex problems. Actively participating in coding competitions and passionate about building 
                  innovative solutions using AI/ML to address real-world challenges.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  My journey in Machine Learning started in college(IIT Guwahati), and I've been hooked ever since. 
                  I'm constantly learning and improving my skills to stay at the forefront of web technologies.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me hiking in the mountains, reading a good book, or 
                  Singing and Listening Songs.
                </p>
              </div>
              
              <div className={cn(
                "mt-8 opacity-0",
                inView && "animate-fade-in"
              )}
              style={{ animationDelay: '0.4s' }}>
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  <span>Let's work together</span>
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
            
            <div className={cn(
              "relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden opacity-0",
              inView && "animate-fade-in-right"
            )} style={{ animationDelay: '0.3s' }}>
              <div className="glass absolute inset-0 rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                {/* Here you would typically place an image */}
                <span className="text-lg">Profile Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
