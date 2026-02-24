
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Grid3X3, ChevronUp, Play } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const videos = [
  { id: 1, embedId: "D4_0tJwDFhY", title: "Steve Nash - Finger Drumming World Championship" },
  { id: 2, embedId: "lgjCzpjlX8M", title: "Steve Nash - Live MPC Performance" },
  { id: 3, embedId: "ETIJgU5f7kc", title: "Steve Nash - Electronic Music Set" },
  { id: 4, embedId: "hEfMOjYDRkQ", title: "Steve Nash - Beat Making Session" },
  { id: 5, embedId: "LAJ17hWIzFg", title: "Steve Nash - DJ World Championship" },
  { id: 6, embedId: "vc_UTsYRGkM", title: "Steve Nash - Live Show Highlights" },
  { id: 7, embedId: "-GZuoAAUw1g", title: "Steve Nash - MPC Performance Art" },
  { id: 8, embedId: "sII-3xiwobU", title: "Steve Nash - Stage Performance" },
];

const YouTubeFacade = ({ embedId, title, startTime }: { embedId: string; title: string; startTime?: number }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePlay = useCallback(() => {
    setIsLoaded(true);
  }, []);

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${embedId}?autoplay=1${startTime ? `&start=${startTime}` : ""}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
        loading="lazy"
      />
    );
  }

  return (
    <button
      onClick={handlePlay}
      className="absolute inset-0 w-full h-full cursor-pointer group/play bg-black"
      aria-label={`Play video: ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${embedId}/hqdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
        width={480}
        height={360}
      />
      <div className="absolute inset-0 bg-black/30 group-hover/play:bg-black/40 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center group-hover/play:bg-red-500 group-hover/play:scale-110 transition-all duration-300 shadow-lg">
          <Play className="w-6 h-6 text-white ml-1" fill="white" />
        </div>
      </div>
    </button>
  );
};

const VideoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="videos" className="section-padding bg-black/40">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/80 inline-block mb-4">
            VIDEO CONTENT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Watch on <span className="text-white/90">YouTube</span>
          </h2>
        </div>

        <div className="relative py-10">
          {/* Mobile swipe indicator */}
          <div className="md:hidden flex justify-center mb-4">
            <div className="flex items-center gap-2 text-white/60 text-sm animate-bounce">
              <ChevronUp className="h-4 w-4" />
              <span>Swipe to see more videos</span>
              <ChevronUp className="h-4 w-4" />
            </div>
          </div>

          <Carousel
            opts={{
              align: "center",
              loop: true
            }}
            className="w-full max-w-7xl mx-auto"
            setApi={api => {
              api?.on("select", () => {
                setActiveIndex(api.selectedScrollSnap());
              });
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video, index) => (
                <CarouselItem key={video.id} className="pl-2 md:pl-4 basis-full md:basis-1/3 lg:basis-1/4">
                  <div className={cn(
                    "rounded-xl overflow-hidden border transition-all duration-300",
                    activeIndex === index
                      ? "border-white/20 shadow-lg shadow-black/20 scale-100 opacity-100"
                      : "border-white/10 opacity-80"
                  )}>
                    <div className="relative pb-[56.25%] h-0 overflow-hidden touch-pan-x">
                      <YouTubeFacade
                        embedId={video.embedId}
                        title={video.title}
                        startTime={video.embedId === "D4_0tJwDFhY" ? 5335 : undefined}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Desktop navigation */}
            <div className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 z-30">
              <CarouselPrevious
                variant="ghost"
                size="lg"
                className="static h-12 w-12 rounded-full bg-black/60 backdrop-blur-sm border-white/10 hover:bg-white/20 text-white shadow-lg translate-x-0 translate-y-0"
              >
                <ArrowLeft className="h-6 w-6" />
              </CarouselPrevious>
            </div>
            <div className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 z-30">
              <CarouselNext
                variant="ghost"
                size="lg"
                className="static h-12 w-12 rounded-full bg-black/60 backdrop-blur-sm border-white/10 hover:bg-white/20 text-white shadow-lg translate-x-0 translate-y-0"
              >
                <ArrowRight className="h-6 w-6" />
              </CarouselNext>
            </div>
          </Carousel>

          {/* Mobile dots indicator */}
          <div className="md:hidden flex justify-center gap-1 mt-6">
            {videos.map((_, index) => (
              <button
                key={index}
                className="p-3 flex items-center justify-center"
                aria-label={`Go to video ${index + 1}`}
              >
                <span className={cn(
                  "block h-2 rounded-full transition-all duration-300",
                  activeIndex === index
                    ? "bg-white w-8"
                    : "bg-white/30 w-2"
                )} />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@stevenashbeats"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white/90 rounded-md font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            <Grid3X3 className="h-4 w-4" />
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
