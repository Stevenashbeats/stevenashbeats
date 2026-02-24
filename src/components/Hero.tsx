import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const TITLE_TEXT = "STEVE NASH";
const SUBTITLE_TEXT = "Finger Drumming World Champion";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Lazy load video after page is interactive
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.src = "/video/WEBSITE PREV_01_web.mp4";
        videoRef.current.load();
        videoRef.current.play().catch(() => {});
        setVideoLoaded(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Lazy load GSAP
  useEffect(() => {
    let cancelled = false;

    const initAnimations = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      if (cancelled) return;

      const chars = titleRef.current?.querySelectorAll('.char') || [];
      const subtitleChars = subtitleRef.current?.querySelectorAll('.char') || [];

      // Don't hide text - it's the LCP element and must be visible immediately
      gsap.set(imageRef.current, { scale: 1.2, filter: "brightness(0.5)" });

      const tl = gsap.timeline();
      tl.to(imageRef.current, {
        scale: 1,
        filter: "brightness(1)",
        duration: 2,
        ease: "power2.inOut"
      })
      .from(chars, {
        scale: 0.8,
        duration: 0.6,
        stagger: 0.03,
        ease: "power3.out"
      }, "-=1.5")
      .from(subtitleChars, {
        scale: 0.8,
        duration: 0.6,
        stagger: 0.02,
        ease: "power3.out"
      }, "-=0.5");

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(imageRef.current, { y: self.progress * -100, scale: 1 + self.progress * 0.2, ease: "none" });
          gsap.to(chars, { y: self.progress * -50, ease: "none" });
          gsap.to(subtitleChars, { y: self.progress * -30, ease: "none" });
        }
      });

      gsap.to(titleRef.current, { y: -3, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(titleRef.current, { filter: "drop-shadow(0 0 20px rgba(255,255,255,0.4))", duration: 3, repeat: -1, yoyo: true, ease: "power1.inOut" });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        initAnimations();
      });
    });

    return () => {
      cancelled = true;
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      });
      import("gsap").then(({ gsap }) => {
        gsap.killTweensOf("*");
      });
    };
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      <div ref={imageRef} className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Poster image shown immediately, video loads after */}
        <img
          src="/photo/STEVE COVER.webp"
          alt=""
          width={800}
          height={1030}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            videoLoaded ? "opacity-0" : "opacity-100"
          )}
          fetchPriority="high"
        />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className={cn(
            "w-full h-full object-cover transition-opacity duration-1000",
            videoLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center px-4">
        <h1
          ref={titleRef}
          className={cn(
            "text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-wider mb-4",
            "drop-shadow-2xl leading-tight"
          )}
        >
          {TITLE_TEXT.split('').map((char, i) => (
            <span
              key={i}
              className="char inline-block overflow-hidden align-top"
              style={{
                background: 'linear-gradient(to right, #ffffff, #e5e5e5, #ffffff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <div
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide mb-8 text-center max-w-2xl leading-relaxed"
        >
          {SUBTITLE_TEXT.split('').map((char, i) => (
            <span
              key={i}
              className="char inline-block overflow-hidden align-top font-bold"
              style={{
                background: 'linear-gradient(to right, #ffffff, #ffffff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>

        <div className="text-base md:text-lg text-gray-400 font-light tracking-wide text-center max-w-2xl leading-relaxed">
          Music Producer • Sound Designer • Audio Engineer
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
