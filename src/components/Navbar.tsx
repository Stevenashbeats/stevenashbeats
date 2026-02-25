
import React, { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "HOME", href: "#home" },
  { title: "NEWS", href: "#news" },
  { title: "MUSIC", href: "#music" },
  { title: "ABOUT", href: "#about" },
  { title: "GALLERY", href: "#gallery" },
  { title: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "py-3 bg-black/80 backdrop-blur-lg"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-bold font-display text-white uppercase tracking-wider"> 
          Steve Nash
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary/80 text-white/80 hover:text-white uppercase tracking-wider"
            >
              {item.title}
            </a>
          ))}
          
          <a
            href="https://instagram.com/stevenashbeats"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover-lift text-white"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black md:hidden transition-all duration-300 ease-out-expo",
          isOpen
            ? "opacity-100 pointer-events-auto z-[100]"
            : "opacity-0 pointer-events-none z-[-1]"
        )}
        style={{ position: 'fixed', inset: 0 }}
      >
        {/* Close button in mobile menu */}
        <button
          className="absolute top-6 right-6 text-white z-[110]"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <X className="h-8 w-8" />
        </button>
        
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-2xl font-medium text-white uppercase tracking-widest",
                "transform transition-all duration-300 ease-out-expo",
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              )}
              style={{
                transitionDelay: isOpen ? `${100 * index}ms` : "0ms",
              }}
            >
              {item.title}
            </a>
          ))}
          
          <a
            href="https://instagram.com/stevenashbeats"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={cn(
              "mt-4 hover-lift text-white",
              isOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0",
              "transform transition-all duration-300 ease-out-expo transition-delay-600"
            )}
            style={{
              transitionDelay: isOpen ? "600ms" : "0ms",
            }}
          >
            <Instagram className="h-7 w-7" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
