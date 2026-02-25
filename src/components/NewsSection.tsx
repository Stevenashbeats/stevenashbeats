import { useEffect, useRef } from "react";
import { Tv, Music, Calendar } from "lucide-react";

const tagConfig: Record<string, { color: string; icon: typeof Tv }> = {
  TV: { color: "bg-purple-500/20 text-purple-300 border-purple-500/30", icon: Tv },
  Koncerty: { color: "bg-blue-500/20 text-blue-300 border-blue-500/30", icon: Calendar },
  Muzyka: { color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30", icon: Music },
};

const newsItems = [
  {
    date: "2025",
    tag: "TV",
    title: "Halo tu Polsat",
    description: `Wyst\u0119p na \u017cywo w programie "Halo tu Polsat" \u2014 finger drumming show na antenie og\u00f3lnopolskiej telewizji.`,
  },
  {
    date: "2025",
    tag: "TV",
    title: "Oprawa muzyczna ram\u00f3wki Polsatu",
    description: "Tworzenie oprawy muzycznej dla ram\u00f3wki stacji Polsat.",
  },
  {
    date: "2025",
    tag: "Koncerty",
    title: "Nadchodz\u0105ce koncerty",
    description: `Nowe daty koncert\u00f3w ju\u017c wkr\u00f3tce \u2014 \u015bled\u017a social media po szczeg\u00f3\u0142y!`,
  },
];

const NewsSection = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(headerRef.current, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: -30,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.from(cardsRef.current, {
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
        });
      });
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section id="news" className="section-padding bg-black/40">
      <div className="container px-4 mx-auto">
        <div ref={headerRef} className="max-w-4xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/80 inline-block mb-4">
            NEWS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white/90">
            Aktualności
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Najnowsze wydarzenia, występy i projekty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {newsItems.map((item, index) => {
            const tag = tagConfig[item.tag] ?? tagConfig.Muzyka;
            const Icon = tag.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border ${tag.color}`}
                  >
                    <Icon className="w-3 h-3" />
                    {item.tag}
                  </span>
                  <span className="text-xs text-white/40">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
