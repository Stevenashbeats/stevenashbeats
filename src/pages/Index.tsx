
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PhotoGallery from "@/components/PhotoGallery";
import MusicSection from "@/components/MusicSection";
import VideoSection from "@/components/VideoSection";
import PartnersSection from "@/components/PartnersSection";
import AkaiSection from "@/components/AkaiSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll implementation for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <PartnersSection />
      <AkaiSection />
      <PhotoGallery />
      <MusicSection />
      <VideoSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
