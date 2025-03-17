
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
                  Hi, I'm John Doe. I'm a passionate frontend developer with over 5 years of experience building 
                  exceptional digital experiences. I focus on creating intuitive and beautiful user interfaces 
                  that are accessible to everyone.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  My journey in web development started when I was in college, and I've been hooked ever since. 
                  I'm constantly learning and improving my skills to stay at the forefront of web technologies.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me hiking in the mountains, reading a good book, or 
                  experimenting with new recipes in the kitchen.
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
