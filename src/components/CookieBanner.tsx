import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/locales";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { language } = useLanguage();
  const t = useTranslation(language);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border shadow-2xl">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">{t.cookies.banner.title}</h3>
            <p className="text-sm text-foreground/90">
              {t.cookies.banner.description}{" "}
              <a 
                href="/polityka-cookies" 
                className="text-primary hover:underline font-medium"
              >
                {t.cookies.banner.policyLink}
              </a>.
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={declineCookies}
              className="flex-1 md:flex-none px-6 py-2.5 border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium"
            >
              {t.cookies.banner.decline}
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 md:flex-none px-6 py-2.5 bg-white text-black rounded-lg hover:bg-white/90 transition-colors text-sm font-medium"
            >
              {t.cookies.banner.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
