import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Music } from "lucide-react";

const MusicSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="music" className="section-padding bg-black/40">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/80 inline-block mb-4">
            FEATURED MUSIC
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Listen on <span className="text-white/90">Spotify</span>
          </h2>
          <p className="text-white/60">
            Experience the sound that defines the Steve Nash Beats signature. Each track is crafted with precision and passion.
          </p>
        </div>
        <div ref={sectionRef} className="max-w-5xl mx-auto">
          <Card className="border-white/10 bg-black/20 backdrop-blur-sm">
            <CardContent className="p-0">
              {isVisible ? (
                <iframe
                  src="https://open.spotify.com/embed/artist/0BEEuWgQsqyONbgdGnJKTD"
                  width="100%"
                  height="520"
                  title="Steve Nash on Spotify"
                  allow="encrypted-media"
                  className="rounded-md w-full border-0"
                ></iframe>
              ) : (
                <div className="w-full flex items-center justify-center bg-black/40 rounded-md" style={{ height: 520 }}>
                  <div className="text-center text-white/70">
                    <Music className="w-12 h-12 mx-auto mb-3" />
                    <p className="text-sm">Loading Spotify...</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://open.spotify.com/artist/0BEEuWgQsqyONbgdGnJKTD"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white/90 rounded-md font-medium transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Follow on Spotify
          </a>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
