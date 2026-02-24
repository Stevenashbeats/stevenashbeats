
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X, Grid3X3 } from "lucide-react";
import BlurImage from "./ui/BlurImage";
import { cn } from "@/lib/utils";

// 8 zdjęć z nową, bardziej strukturalną mozaiką
const images = [
  {
    src: "/lovable-uploads/c59bcb9b-1098-4121-9671-e0bfdaefc71a.png",
    alt: "Producer with MPC in urban setting",
    color: "bg-rose-500"
  },
  {
    src: "/lovable-uploads/4b34bfca-e3f3-4771-b9f1-c4a1d8abfec4.png",
    alt: "Steve Nash jacket with logo",
    color: "bg-orange-500"
  },
  {
    src: "/lovable-uploads/82f8a410-17e9-452a-aa33-c41f22a530fd.png",
    alt: "Steve Nash smiling with MPC",
    color: "bg-amber-500"
  },
  {
    src: "/lovable-uploads/653a8071-c8d3-4c36-a36a-a6253217b0c3.png",
    alt: "Producer at piano",
    color: "bg-yellow-400"
  },
  {
    src: "/lovable-uploads/626eec10-897b-4309-bc48-5d33755495a3.png",
    alt: "Producer in colorful hoodie",
    color: "bg-lime-500"
  },
  {
    src: "/lovable-uploads/8d487b0d-67b1-4c83-9d26-d50e8568e5f2.png",
    alt: "Photo of DJ Steve Nash in a concert",
    color: "bg-green-500"
  },
  {
    src: "/lovable-uploads/be420382-e2c4-4e75-aeee-1a935c20ae15.png",
    alt: "Steve Nash with MPC on street",
    color: "bg-emerald-500"
  },
  {
    src: "/lovable-uploads/a8cdd696-2ca0-47be-93d7-59a823d07716.png",
    alt: "Live performance with crowd",
    color: "bg-teal-500"
  },
];

const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [activePad, setActivePad] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handlePadClick = (index: number) => {
    setActivePad(index);
    openLightbox(index);
    setTimeout(() => {
      setActivePad(null);
    }, 300);
  };

  return (
    <section id="gallery" className="section-padding bg-black">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="max-w-lg">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white inline-block mb-4 flex items-center gap-1 w-fit">
              <Grid3X3 className="h-3 w-3" />
              GALLERY
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display text-white uppercase tracking-tight">
              World-Class Finger Drumming
            </h2>
          </div>
        </div>

        {/* NOWA ARTYSTYCZNA MOZAIKA – struktura i rytm */}
        <div
          className={cn(
            "grid gap-3 md:gap-6 grid-cols-4 md:grid-cols-6 grid-rows-5 md:grid-rows-4",
            "max-w-6xl mx-auto"
          )}
        >
          <div className="col-span-2 row-span-3 md:col-span-2 md:row-span-3 rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105"
            onClick={() => handlePadClick(0)}
          >
            <BlurImage src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover brightness-90" />
          </div>
          <div className="col-span-2 row-span-2 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-1 col-start-3 row-start-1 rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105"
            onClick={() => handlePadClick(1)}
          >
            <BlurImage src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover brightness-100" />
          </div>
          <div className="col-span-1 row-span-2 md:col-span-1 md:row-span-2 md:col-start-5 md:row-start-1 col-start-1 row-start-4 rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105"
            onClick={() => handlePadClick(2)}
          >
            <BlurImage src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover brightness-95" />
          </div>
          <div className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 md:col-start-3 md:row-start-3 col-start-2 row-start-4 rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105"
            onClick={() => handlePadClick(3)}
          >
            <BlurImage src={images[3].src} alt={images[3].alt} className="w-full h-full object-cover brightness-90" />
          </div>
          <div className="col-span-2 row-span-2 md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-3 col-start-3 row-start-3 rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105"
            onClick={() => handlePadClick(4)}
          >
            <BlurImage src={images[4].src} alt={images[4].alt} className="w-full h-full object-cover brightness-100" />
          </div>
          <div className="col-span-1 row-span-2 md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-4 col-start-4 row-start-2 rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105"
            onClick={() => handlePadClick(5)}
          >
            <BlurImage src={images[5].src} alt={images[5].alt} className="w-full h-full object-cover brightness-95" />
          </div>
          <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 md:col-start-6 md:row-start-4 col-start-4 row-start-5 rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105"
            onClick={() => handlePadClick(6)}
          >
            <BlurImage src={images[6].src} alt={images[6].alt} className="w-full h-full object-cover brightness-90" />
          </div>
          <div className="col-span-2 row-span-1 md:col-span-2 md:row-span-1 md:col-start-3 md:row-start-4 col-start-1 row-start-5 rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105"
            onClick={() => handlePadClick(7)}
          >
            <BlurImage src={images[7].src} alt={images[7].alt} className="w-full h-full object-cover brightness-100" />
          </div>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className={cn(
                  "max-w-full max-h-[85vh] w-auto h-auto object-contain",
                  "animate-fade-in"
                )}
              />
              <div className="absolute bottom-0 left-0 right-0 text-center py-4 text-white">
                <h3 className="text-xl font-bold">{images[currentImage].alt}</h3>
              </div>
            </div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;

