
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="font-playfair text-xl font-medium">
          blinder<span className="text-primary/80">chief</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="uppercase text-xs tracking-wider font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <div className="md:hidden">
          <button 
            className="p-2 text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-lg z-50 transition-transform duration-300 transform",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container h-full flex flex-col py-6">
          <div className="flex justify-between items-center">
            <a href="#" className="font-playfair text-xl font-medium">
              blinder<span className="text-primary/80">chief</span>
            </a>
            <button 
              className="p-2 text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6 items-center justify-center h-full">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="text-2xl font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
