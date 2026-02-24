
import { Mail, Instagram, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-black/40">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/80 inline-block mb-4">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Let's Create Together
              </h2>
              <p className="text-white/60 mb-8">
                Masz pomysł na projekt? Skontaktuj się ze mną, aby omówić, jak możemy wspólnie zrealizować Twoją muzyczną wizję.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-white/80">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white/60">Email</h3>
                    <a href="mailto:contact@stevenashbeats.com" className="text-lg font-medium text-white/90 hover:text-white transition-colors">
                      contact@stevenashbeats.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-white/80">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white/60">Instagram</h3>
                    <a href="https://instagram.com/stevenashbeats" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white/90 hover:text-white transition-colors">
                      @stevenashbeats
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-white/80">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white/60">Booking</h3>
                    <p className="text-lg font-medium text-white/90">
                      Phone: 516 120 694
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
