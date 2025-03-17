
import React from 'react';
import { Mail, Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 border-t border-border/50 bg-secondary/20">
      <div className="container px-6">
        <div className="flex flex-col items-center justify-center">
          <a href="#" className="font-playfair text-2xl font-medium mb-8">
            blinder<span className="text-primary/80">chief</span>
          </a>
          
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <a href="#about" className="uppercase text-xs tracking-wider font-medium text-foreground/70 hover:text-foreground transition-colors duration-200">About</a>
            <a href="#experience" className="uppercase text-xs tracking-wider font-medium text-foreground/70 hover:text-foreground transition-colors duration-200">Experience</a>
            <a href="#skills" className="uppercase text-xs tracking-wider font-medium text-foreground/70 hover:text-foreground transition-colors duration-200">Skills</a>
            <a href="#projects" className="uppercase text-xs tracking-wider font-medium text-foreground/70 hover:text-foreground transition-colors duration-200">Projects</a>
            <a href="#contact" className="uppercase text-xs tracking-wider font-medium text-foreground/70 hover:text-foreground transition-colors duration-200">Contact</a>
          </div>
          
          <div className="flex space-x-6 mb-10">
            <a href="mailto:suyashsingh.raebareli@gmail.com" className="p-2 rounded-full border border-primary/10 hover:bg-primary/5 transition-colors duration-200">
              <Mail size={18} className="text-primary/70" />
            </a>
            <a href="https://github.com/blinderchief" className="p-2 rounded-full border border-primary/10 hover:bg-primary/5 transition-colors duration-200">
              <Github size={18} className="text-primary/70" />
            </a>
            <a href="https://www.linkedin.com/in/suyash-kumar-singh/" className="p-2 rounded-full border border-primary/10 hover:bg-primary/5 transition-colors duration-200">
              <Linkedin size={18} className="text-primary/70" />
            </a>
            <a href="https://codeforces.com/profile/blinderchief" className="p-2 rounded-full border border-primary/10 hover:bg-primary/5 transition-colors duration-200">
              <Code size={18} className="text-primary/70" />
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground/80">
            <p>&copy; {currentYear} Suyash Kumar Singh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
