
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          containerRef.current?.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('animate-text-reveal');
            }, i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background via-background to-muted animate-gradient"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwMCIgaGVpZ2h0PSIyMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImEiPjxwYXRoIGQ9Ik0gLTEwLDEwIGwgMjAsLTIwIE0gMCwyMCBsIDIwLC0yMCBNIDEwLDMwIGwgMjAsLTIwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container relative z-10 px-6 py-28 md:py-40">
        <div className="flex flex-col items-start max-w-5xl mx-auto">
          <div className="text-reveal-container mb-3">
            <span className="inline-block py-1 px-3 text-sm font-medium text-primary/80 border border-primary/10 rounded-full text-reveal animate-on-scroll">
              CP & Data Science & AI-ML
            </span>
          </div>
          
          <div className="text-reveal-container mb-2">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight md:leading-tight font-playfair text-reveal animate-on-scroll reveal-1">
              Suyash Kumar Singh
            </h1>
          </div>
          
          <div className="text-reveal-container mb-3">
            <div className="flex items-center">
              <div className="h-px w-16 bg-primary/20 mr-4"></div>
              <h2 className="text-xl md:text-2xl text-primary/80 font-light text-reveal animate-on-scroll reveal-2">
                Competitve Programmer, Data Scientist & AI-ML Student 
              </h2>
            </div>
          </div>
          
          <div className="text-reveal-container mb-6 max-w-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed text-reveal animate-on-scroll reveal-3">
              Crafting innovative solutions through data science, machine learning, and artificial intelligence.
              Transforming complex challenges into elegant technological solutions.
            </p>
          </div>

          <div className="text-reveal-container mb-8 w-full max-w-2xl">
            <div className="text-reveal animate-on-scroll reveal-4 flex gap-3 text-sm text-muted-foreground/80">
              <a href="https://github.com/blinderchief" className="hover:text-primary transition-colors duration-200 border-b border-transparent hover:border-primary">GitHub</a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/suyash-kumar-singh/" className="hover:text-primary transition-colors duration-200 border-b border-transparent hover:border-primary">LinkedIn</a>
              <span>•</span>
              <a href="https://codeforces.com/profile/blinderchief" className="hover:text-primary transition-colors duration-200 border-b border-transparent hover:border-primary">CodeForces</a>
              <span>•</span>
              <a href="https://www.codechef.com/users/blinderchief" className="hover:text-primary transition-colors duration-200 border-b border-transparent hover:border-primary">CodeChef</a>
              <span>•</span>
              <a href="mailto:suyashsingh.raebareli@gmail.com" className="hover:text-primary transition-colors duration-200 border-b border-transparent hover:border-primary">Contact</a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 text-reveal-container">
            <div className="text-reveal animate-on-scroll reveal-4">
              <a 
                href="#projects"
                className="premium-button bg-primary text-primary-foreground"
              >
                <span className="relative z-10">View Projects</span>
              </a>
            </div>
            
            <div className="text-reveal animate-on-scroll reveal-5">
              <a 
                href="#about"
                className="premium-button bg-background border border-primary/20 text-primary hover:bg-primary/5"
              >
                <span className="relative z-10">About Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 opacity-0 animate-fade-in-slow" style={{ animationDelay: '1.5s' }}>
        <div className="flex flex-col items-center">
          <a href="#about" className="p-2 rounded-full border border-primary/10 hover:bg-primary/5 transition-colors duration-200">
            <ArrowDown size={20} className="text-primary/60 animate-float" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
