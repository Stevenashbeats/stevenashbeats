import { useEffect, useRef } from "react";
import BlurImage from "./ui/BlurImage";
import { Download } from "lucide-react";

const PhotoGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const photoRefs = useRef<(HTMLDivElement | null)[]>([]);

  const photos = [
    { src: "/photo/Steve Nash - Jarek Magiera.webp", alt: "Steve Nash live on stage, photo by Jarek Magiera", w: 600, h: 400 },
    { src: "/photo/Steve Nash - for. Jarek Magiera.webp", alt: "Steve Nash finger drumming performance, photo by Jarek Magiera", w: 600, h: 400 },
    { src: "/photo/Steve Nash - fot. Dominik Czerny.webp", alt: "Steve Nash performing with MPC, photo by Dominik Czerny", w: 600, h: 728 },
    { src: "/photo/Steve Nash Dominik Czerny.webp", alt: "Steve Nash live electronic show, photo by Dominik Czerny", w: 600, h: 900 },
    { src: "/photo/Steve Nash Ossaka - Adrian Chmielewski.webp", alt: "Steve Nash at Ossaka event, photo by Adrian Chmielewski", w: 600, h: 900 },
    { src: "/photo/Steve Nash Ossaka Adrian Chmielewski 2.webp", alt: "Steve Nash live act at Ossaka, photo by Adrian Chmielewski", w: 600, h: 799 },
    { src: "/photo/Steve Nash Ossaka Adrian Chmielewski 3.webp", alt: "Steve Nash on stage at Ossaka, photo by Adrian Chmielewski", w: 600, h: 799 },
    { src: "/photo/Steve Nash Tokyo 2.webp", alt: "Steve Nash performing in Tokyo", w: 600, h: 900 },
    { src: "/photo/Steve Nash Tokyo.webp", alt: "Steve Nash at King of Flip Japan in Tokyo", w: 600, h: 400 },
    { src: "/photo/Steve Nash back - fot.Dominik Czerny.webp", alt: "Steve Nash backstage, photo by Dominik Czerny", w: 600, h: 900 },
    { src: "/photo/Steve Nash Polsat Ramowka.webp", alt: "Steve Nash at Polsat TV show", w: 600, h: 400 },
    { src: "/photo/Steve Nash Mpc Dj.webp", alt: "Steve Nash DJ performing on MPC controller", w: 600, h: 900, position: "top" }
  ];

  const handleDownload = (photoSrc: string, index: number) => {
    const link = document.createElement('a');
    link.href = photoSrc;
    link.download = `steve-nash-photo-${index + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    let cleanup: (() => void) | null = null;

    const init = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(photoRefs.current, { opacity: 0, y: 100, scale: 0.8, rotation: Math.random() * 10 - 5 });
      gsap.set(galleryRef.current, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", end: "top 20%", toggleActions: "play none none reverse" }
      });
      tl.to(galleryRef.current, { opacity: 1, duration: 0.5, ease: "power2.out" })
        .to(photoRefs.current, { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)" }, "-=0.2");

      photoRefs.current.forEach((photo) => {
        if (photo) {
          photo.addEventListener('mouseenter', () => {
            gsap.to(photo, { scale: 1.05, y: -10, rotation: Math.random() * 6 - 3, duration: 0.3, ease: "power2.out", zIndex: 10 });
          });
          photo.addEventListener('mouseleave', () => {
            gsap.to(photo, { scale: 1, y: 0, rotation: 0, duration: 0.3, ease: "power2.out", zIndex: 1 });
          });
        }
      });

      cleanup = () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
        gsap.killTweensOf("*");
      };
    };

    init();
    return () => cleanup?.();
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="section-padding bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary inline-block mb-4">
            GALLERY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Moments & Performances
          </h2>
        </div>

        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              ref={el => photoRefs.current[index] = el}
              className="relative group cursor-pointer overflow-hidden rounded-xl border border-border/40 shadow-lg transition-all duration-300"
            >
              <BlurImage
                src={photo.src}
                alt={photo.alt}
                width={photo.w}
                height={photo.h}
                className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                style={photo.position ? { objectPosition: photo.position } : undefined}
              />
              
              {/* Download button - appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(photo.src, index);
                    }}
                    aria-label={`Download photo ${index + 1}`}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 group"
                  >
                    <Download className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
