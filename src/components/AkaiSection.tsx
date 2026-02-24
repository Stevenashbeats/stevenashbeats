const AkaiSection = () => {
  return (
    <section className="section-padding bg-black/60">
      <div className="container px-4 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/80 inline-block mb-4">
              AKAI PROFESSIONAL
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display text-white/90">
              Oficjalny Endorser AKAI
            </h2>

            <p className="text-base md:text-lg text-gray-400 font-light mb-6 leading-relaxed">
              Steve od wielu lat jest oficjalnym endorserem AKAI Professional.
              Jego mistrzostwo w pracy z kontrolerami MPC przyczyniło się do zdobycia tytułów mistrzowskich w zawodach finger drummingu na całym świecie.
            </p>

            <p className="text-base md:text-lg text-gray-400 font-light mb-8 leading-relaxed">
              Współpraca jest wspierana przez Audio Stacja, oficjalnego polskiego dystrybutora AKAI Professional, zapewniającego sprzęt i wsparcie na najwyższym poziomie.
            </p>

            {/* Logos */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="inline-block p-6 bg-white/5 rounded-xl">
                <img
                  src="/logos/Akai_Professional_red_logo.svg.webp"
                  alt="AKAI Professional logo"
                  loading="lazy"
                  width={400}
                  height={109}
                  className="h-12 object-contain"
                />
              </div>
              <div className="inline-block p-6 bg-white/5 rounded-xl">
                <img
                  src="/logos/audiostacja.webp"
                  alt="Audio Stacja logo"
                  loading="lazy"
                  width={300}
                  height={132}
                  className="h-12 object-contain brightness-0 invert"
                />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/logos/P1194354.webp"
                alt="Steve Nash finger drumming world champion live show"
                loading="lazy"
                width={1200}
                height={1800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AkaiSection;
