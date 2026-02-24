
import { Instagram, Mail, Music } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-muted-foreground py-12">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-display">Steve Nash Beats</h3>
            <p className="text-muted-foreground/80 mb-4">
              Elevating sound through innovation and passion. Creating beats that resonate with the soul.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/stevenashbeats"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full border border-muted-foreground/30 flex items-center justify-center text-muted-foreground/80 hover:bg-muted-foreground/10 hover:text-muted-foreground transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@stevenashbeats.com"
                aria-label="Email"
                className="h-10 w-10 rounded-full border border-muted-foreground/30 flex items-center justify-center text-muted-foreground/80 hover:bg-muted-foreground/10 hover:text-muted-foreground transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#music"
                aria-label="Music"
                className="h-10 w-10 rounded-full border border-muted-foreground/30 flex items-center justify-center text-muted-foreground/80 hover:bg-muted-foreground/10 hover:text-muted-foreground transition-all duration-300"
              >
                <Music className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home"
                  className="text-muted-foreground/80 hover:text-muted-foreground transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#music"
                  className="text-muted-foreground/80 hover:text-muted-foreground transition-colors"
                >
                  Music
                </a>
              </li>
              <li>
                <a 
                  href="#about"
                  className="text-muted-foreground/80 hover:text-muted-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#gallery"
                  className="text-muted-foreground/80 hover:text-muted-foreground transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  className="text-muted-foreground/80 hover:text-muted-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary-foreground/70 mt-0.5" />
                <span className="text-muted-foreground/80">
                  contact@stevenashbeats.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="h-5 w-5 text-primary-foreground/70 mt-0.5" />
                <span className="text-muted-foreground/80">
                  @stevenashbeats
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Music className="h-5 w-5 text-primary-foreground/70 mt-0.5" />
                <span className="text-muted-foreground/80">
                  Available for bookings and collaborations
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-muted-foreground/20 text-center">
          <p className="text-muted-foreground/70">
            © {currentYear} Steve Nash Beats. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
