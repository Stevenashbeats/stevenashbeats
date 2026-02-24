import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/locales";

const CookiePolicy = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          {t.cookies.policy.backButton}
        </button>

        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">{t.cookies.policy.title}</h1>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{t.cookies.policy.subtitle}</h2>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">{t.cookies.policy.section1.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.cookies.policy.section1.p1}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.cookies.policy.section1.p2}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.cookies.policy.section1.p3}
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">{t.cookies.policy.section2.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.cookies.policy.section2.p1}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.cookies.policy.section2.p2}
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">{t.cookies.policy.section3.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              {t.cookies.policy.section3.intro}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              {t.cookies.policy.section3.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">{t.cookies.policy.section4.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.cookies.policy.section4.intro}
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">{t.cookies.policy.section4.necessary.title}</h4>
                <p className="text-muted-foreground">{t.cookies.policy.section4.necessary.description}</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">{t.cookies.policy.section4.analytical.title}</h4>
                <p className="text-muted-foreground">
                  {t.cookies.policy.section4.analytical.description}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">{t.cookies.policy.section4.thirdParty.title}</h4>
                <p className="text-muted-foreground mb-2">{t.cookies.policy.section4.thirdParty.description}</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  {t.cookies.policy.section4.thirdParty.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-2">
                  {t.cookies.policy.section4.thirdParty.note}
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">{t.cookies.policy.section5.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.cookies.policy.section5.p1}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.cookies.policy.section5.p2}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.cookies.policy.section5.p3}
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">{t.cookies.policy.section6.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.cookies.policy.section6.p1}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.cookies.policy.section6.p2}
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">{t.cookies.policy.section7.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.cookies.policy.section7.p1}
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">{t.cookies.policy.section8.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.cookies.policy.section8.p1}{" "}
              <a href="mailto:contact@stevenashbeats.com" className="text-primary hover:underline">
                contact@stevenashbeats.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
