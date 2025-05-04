
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
                Hello, I'm Suyash Kumar Singh, a dedicated Data Science and AI student at IIT Guwahati, passionate about solving real-world challenges through innovative AI/ML solutions. 
                I specialize in data analysis, machine learning, and software development, with proficiency in Python, R, C++, and tools like Pandas, NumPy, TensorFlow, and Scikit-learn.
                My academic journey at IIT Guwahati has fueled my expertise, leading to impactful projects like a Multimodal Fake News Detection System, Sentiment Analysis of Political Tweets, 
                and an AI-Powered Health & Fitness App (BLINDERFIT), showcasing my ability to integrate advanced AI techniques with practical applications.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                I’m a competitive programmer with a CodeForces Max Rating of 1276 (Pupil Title) and a CodeChef Max Rating of 1855 (3-star Coder), having solved over 500 problems.
                My experience includes actively participating in coding competitions like Vishwa Das Diwas and the 2024-2025 ICPC online round, as well as contributing to the SSB of the Indian Army and Navy, where I honed my leadership, responsibility, and quick decision-making skills. 
                I thrive in collaborative environments and am committed to staying at the forefront of technology through continuous learning.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                When I’m not coding, I find inspiration in hiking the mountains, reading thought-provoking books, or singing and listening to music, which keep me grounded and fuel my creativity.
                I’m eager to connect and explore opportunities to build transformative solutions that make a meaningful impact.
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
                 "relative h-78 md:h-96 lg:h-[40rem] rounded-xl overflow-hidden opacity-0",
              inView && "animate-fade-in-right"
            )} style={{ animationDelay: '0.3s' }}>
              <div className="glass absolute inset-0 rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <img
                  src="/copy-modified.png" 
                     alt="Profile"
                    className="h-full w-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
