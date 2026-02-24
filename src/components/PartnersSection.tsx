import { useEffect, useRef } from "react";

const PartnersSection = () => {
  const headerRef = useRef(null);

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
          scrollTrigger: { trigger: headerRef.current, start: "top 80%", end: "bottom 20%", toggleActions: "play none none reverse" },
          opacity: 0, y: -30, duration: 0.8, ease: "power3.out"
        });
      });
    };

    init();
    return () => ctx?.revert();
  }, []);

  const partners = [
    { name: "Effie", logo: "/logos/effie_poland_1line_black_goldmark_rgb-2.webp", w: 300, h: 229 },
    { name: "ING", logo: "/logos/ing-logo-728x497.webp", w: 300, h: 205 },
    { name: "Expo Poland", logo: "/logos/Poland_Expo_Osaka_2025_Logotyp_RGB_BAZOWY+SYGNET.webp", w: 400, h: 134 },
    { name: "MasterCard", logo: "/logos/symbol-mastercard-rebranding.webp", w: 200, h: 150 },
    { name: "Best Brands", logo: "/logos/best-brands-logo.svg", w: 504, h: 385 },
    { name: "TVP", logo: "/logos/channels4_profile.webp", w: 200, h: 200 },
    { name: "KTR", logo: "/logos/ktr-2.webp", w: 325, h: 325 },
    { name: "Adamed", logo: "/logos/Adamed-logo-white.webp", w: 641, h: 337 },
    { name: "Glo", logo: "/logos/GLO_Logo_Negative_RGB_1.webp", w: 400, h: 281 },
    { name: "Paszporty Polityki", logo: "/logos/354058624_607349134819299_6857181504970119438_n.webp", w: 200, h: 200 },
    { name: "Samsung", logo: "/logos/Samsung_logo_wordmark_2.webp", w: 400, h: 106 },
    { name: "Audiostacja", logo: "/logos/audiostacja.webp", w: 300, h: 132 },
    { name: "Zorza", logo: "/logos/opengraph-image.webp", w: 200, h: 200 },
    { name: "SGP", logo: "/logos/SGP.webp", w: 200, h: 200 },
    { name: "Moët & Chandon", logo: "/logos/Moet-Chandon-Simbolo.webp", w: 400, h: 225 },
    { name: "Business Insider", logo: "/logos/logoBI.webp", w: 300, h: 171 },
    { name: "Temat", logo: "/logos/ab67656300005f1fa8eabb066d2bd108195a29d6.webp", w: 200, h: 200 },
    { name: "Trójka Radio", logo: "/logos/Logotyp_programu_trzeciego_Polskiego_Radia.svg.webp", w: 300, h: 106 },
    { name: "Music China", logo: "/logos/music_china_2020.webp", w: 300, h: 116 },
    { name: "Polsat", logo: "/logos/polsat.webp", w: 200, h: 200 }
  ];

  return (
    <section className="section-padding bg-black/40">
      <div className="container px-4 mx-auto">
        <div ref={headerRef} className="max-w-4xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/80 inline-block mb-4">
            WSPÓŁPRACA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white/90">
            Marki, które mi zaufały
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Od lat specjalizuję się w tworzeniu muzycznych doświadczeń produkcując liczne eventy i gale. Miałem przyjemność współpracować z:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-5xl mx-auto">
          {partners.map((partner, index) => {
            const needsInvert = ["Effie", "Expo Poland", "Audiostacja"].includes(partner.name);
            const noRadius = partner.name === "Best Brands";
            const needsRadius = partner.name === "Moët & Chandon";
            const centerLogo = ["Adamed", "Audiostacja", "Samsung"].includes(partner.name);
            return (
              <div
                key={index}
                className="group flex items-center justify-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-500 w-full h-32 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-2 cursor-pointer"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  loading="lazy"
                  width={partner.w}
                  height={partner.h}
                  className={`${centerLogo ? 'max-w-[60%]' : 'max-w-full'} max-h-20 object-contain group-hover:scale-110 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] ${noRadius ? '' : needsRadius ? 'rounded-2xl' : 'rounded-lg'} ${needsInvert ? 'brightness-0 invert' : ''}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
