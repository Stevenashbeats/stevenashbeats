import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Play } from "lucide-react";
import PhoneFrame from "./PhoneFrame";

gsap.registerPlugin(ScrollTrigger);

const CrossPadSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Initial states
    gsap.set(contentRef.current, { 
      opacity: 0, 
      y: 50,
      x: -30
    });
    gsap.set(iframeRef.current, { 
      opacity: 0, 
      scale: 0.9,
      y: 30
    });
    gsap.set(buttonRef.current, { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    });

    // Animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(contentRef.current, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to(iframeRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5")
    .to(buttonRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.2)"
    }, "-=0.3");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <section ref={sectionRef} id="crosspad" className="section-padding bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div ref={contentRef} className="order-2 lg:order-1">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary inline-block mb-4">
              CROSSPAD.APP
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              Connect with Finger Drummers Worldwide
            </h2>
            
            <p className="text-muted-foreground mb-6">
              CrossPad.app is the revolutionary platform that brings together finger drummers from around the world. 
              Created by Steve Nash, this innovative application allows you to share your beats, learn from others, 
              and become part of a global community of passionate musicians.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Whether you're a beginner looking to learn or a professional wanting to showcase your skills, 
              CrossPad.app provides the perfect environment to grow your finger drumming journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://crosspad.app/home"
                target="_blank"
                rel="noopener noreferrer"
                ref={buttonRef}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/25"
              >
                <Play className="w-4 h-4" />
                Play Now
              </a>
              
              <a
                href="https://crosspad.app/authors/Steve_Nash/dreamscape"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-background hover:bg-accent transition-all duration-300 rounded-lg font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                View Steve's Profile
              </a>
            </div>
          </div>

          {/* Phone Frame with Iframe */}
          <div ref={iframeRef} className="order-1 lg:order-2">
            <PhoneFrame className="max-w-xs lg:max-w-sm">
              <div className="h-[550px] lg:h-[600px] bg-[#3C3535]">
                {/* Status bar */}
                <div className="flex justify-between items-center px-6 py-2 text-xs bg-[#3C3535]">
                  <span className="font-medium text-white">9:41</span>
                </div>
                
                {/* Iframe content */}
                <iframe
                  src="https://crosspad.app/authors/Steve_Nash/dreamscape"
                  className="w-full h-[500px] lg:h-[550px] border-0"
                  title="Steve Nash CrossPad Profile"
                  loading="lazy"
                  style={{ 
                    transform: 'scale(0.85)', 
                    transformOrigin: 'top center',
                    margin: '0 auto',
                    display: 'block'
                  }}
                />
              </div>
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrossPadSection;
