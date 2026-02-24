
import { useEffect, useRef } from "react";
import { Award, Music, Clock, ExternalLink } from "lucide-react";
import BlurImage from "./ui/BlurImage";

const AboutSection = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(imageRef.current, {
          scrollTrigger: { trigger: imageRef.current, start: "top 80%", end: "bottom 20%", toggleActions: "play none none reverse" },
          opacity: 0, scale: 0.8, rotation: -10, duration: 1, ease: "power3.out"
        });
        gsap.from(contentRef.current, {
          scrollTrigger: { trigger: contentRef.current, start: "top 80%", end: "bottom 20%", toggleActions: "play none none reverse" },
          opacity: 0, x: 50, duration: 1, ease: "power3.out"
        });
        gsap.from(statsRef.current, {
          scrollTrigger: { trigger: statsRef.current[0], start: "top 85%", end: "bottom 20%", toggleActions: "play none none reverse" },
          opacity: 0, y: 30, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)"
        });
      });
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container px-4 mx-auto">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Image */}
          <div ref={imageRef} className="order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden border border-border/40 shadow-xl transform md:rotate-2 hover:rotate-0 transition-all duration-700">
              <BlurImage
                src="/photo/STEVE COVER.webp"
                alt="Steve Nash live finger drumming performance on MPC"
                width={800}
                height={1030}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="order-1 md:order-2">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary inline-block mb-4">
              ABOUT ME
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              The Story Behind the Beats
            </h2>
            
            <p className="text-muted-foreground mb-4">
              Steve Nash to wielokrotnie nagradzany DJ, fingerdrummer, producent muzyczny. Jego wyjątkowy talent przyniósł mu tytuły trzykrotnego Mistrza Świata DJ-ów oraz trzykrotnego Mistrza Świata Finger Drummingu. Artysta znany jest z innowacyjnego stylu, w którym łączy elektronikę z widowiskowym performance'em na żywo.
            </p>
            
            <p className="text-muted-foreground mb-4">
              Edukację muzyczną rozpoczął w Szkole Muzycznej w Częstochowie, a następnie kontynuował ją w Akademii Muzycznej w Łodzi, zdobywając solidne podstawy klasyczne, które łączy z nowoczesnymi technologiami muzycznymi.
            </p>
            
            <p className="text-muted-foreground mb-4">
              Ostatni tytuł Steve zdobył w 2024 roku, zostając Mistrzem Świata Finger Drummingu w Tokio podczas King of Flip Japan, co potwierdziło jego pozycję w światowej czołówce artystów live electronic performance.
            </p>
            
            <p className="text-muted-foreground mb-4">
              Jest twórcą platformy CrossPad.app, która łączy fingerdrummerów z całego świata i wspiera rozwój międzynarodowej społeczności artystycznej.
            </p>
            
            <p className="text-muted-foreground mb-4">
              Steve prowadzi również fundację, realizującą projekty multimedialne na styku muzyki, obrazu i nowoczesnych technologii. Jednym z flagowych przedsięwzięć fundacji jest projekt Steve Nash & Turntable Orchestra, unikalne połączenie DJ-ów i orkiestry symfonicznej.
            </p>
            
            <p className="text-muted-foreground mb-8">
              W swojej karierze współpracował z wieloma artystami polskiej sceny muzycznej, m.in. Sokół, Małpa, O.S.T.R., Tomasz Organek, Dawid Podsiadło, Natalia Szroeder, Fisz Emade.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div ref={el => { if (el) statsRef.current[0] = el; }} className="p-4 rounded-lg border bg-background/50 hover:bg-background transition-colors duration-300 flex flex-col items-center">
                <Award className="h-8 w-8 mb-2 text-primary" />
                <h3 className="text-xl font-bold mb-1">3x</h3>
                <p className="text-sm text-muted-foreground text-center">DJ World Champion</p>
              </div>
              
              <div ref={el => { if (el) statsRef.current[1] = el; }} className="p-4 rounded-lg border bg-background/50 hover:bg-background transition-colors duration-300 flex flex-col items-center">
                <Music className="h-8 w-8 mb-2 text-primary" />
                <h3 className="text-xl font-bold mb-1">3x</h3>
                <p className="text-sm text-muted-foreground text-center">Finger Drumming World Champion</p>
              </div>
              
              <div ref={el => { if (el) statsRef.current[2] = el; }} className="p-4 rounded-lg border bg-background/50 hover:bg-background transition-colors duration-300 flex flex-col items-center">
                <Clock className="h-8 w-8 mb-2 text-primary" />
                <h3 className="text-xl font-bold mb-1">13+</h3>
                <p className="text-sm text-muted-foreground text-center">Years Experience</p>
              </div>
            </div>

            {/* Wikipedia Button */}
            <div className="mt-8">
              <a
                href="https://pl.wikipedia.org/wiki/Steve_Nash_(polski_DJ)"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-background hover:bg-accent transition-all duration-300 rounded-lg font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4" />
                Wikipedia
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
