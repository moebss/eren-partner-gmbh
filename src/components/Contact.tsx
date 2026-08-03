import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Rohbau & Massivbau',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-950 text-white border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                Direkter Projektkontakt
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Besprechen Sie Ihr Bauvorhaben mit uns.
              </h2>
              <p className="text-sm text-slate-300 mt-2">
                Nehmen Sie direkt Kontakt mit unserem Bauleiter-Team auf. Wir erstellen Ihnen ein verlässliches Festpreisangebot für Ihr Bauprojekt in Köln & NRW.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-start gap-4 shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-semibold uppercase">Zentrale & Firmensitz</h4>
                  <p className="text-sm font-bold text-white">Eren & Partner GmbH</p>
                  <p className="text-xs text-slate-300">Venloer Str. 123, 50672 Köln</p>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-start gap-4 shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-semibold uppercase">Telefon & Bauleitung</h4>
                  <a href="tel:+4922198765430" className="text-sm font-bold text-white hover:underline block">
                    0221 / 98 76 54 30
                  </a>
                  <p className="text-xs text-slate-400">Mo – Fr: 07:30 – 17:30 Uhr</p>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-start gap-4 shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-semibold uppercase">E-Mail Kontakt</h4>
                  <a href="mailto:info@eren-partner.de" className="text-sm font-bold text-slate-200 hover:text-white">
                    info@eren-partner.de
                  </a>
                  <p className="text-xs text-slate-400">Antwort i.d.R. innerhalb von 24h</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden border border-slate-800 h-48 bg-slate-900 shadow-md">
              <iframe
                title="Eren & Partner GmbH Standort Köln"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.882195029454!2d6.9381!3d50.9413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25642a555555%3A0x1c3a64938d8f0!2sVenloer%20Str.%20123%2C%2050672%20K%C3%B6ln!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.9) contrast(1.2) invert(0.9)' }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-800 text-white mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Vielen Dank für Ihre Projektanfrage!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Wir haben Ihre Anfrage erhalten. Ein Bauleiter der Eren & Partner GmbH wird sich innerhalb von 24 Stunden bei Ihnen melden.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                >
                  Neue Anfrage senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">Unverbindliche Bauanfrage stellen</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">Vollständiger Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="z.B. Dipl.-Ing. Thomas Weber"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-slate-700 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-300 mb-1.5">Telefonnummer *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="z.B. 0221 123456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-slate-700 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">E-Mail Adresse *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@beispiel.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-slate-700 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-project" className="block text-xs font-semibold text-slate-300 mb-1.5">Gewünschtes Gewerk</label>
                    <select
                      id="contact-project"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-slate-700 focus:outline-none transition-colors"
                    >
                      <option>Rohbau & Massivbau</option>
                      <option>Schlüsselfertiges Bauen</option>
                      <option>Gewerbe- & Industriebau</option>
                      <option>Umbau & Aufstockung</option>
                      <option>Betonsanierung & Instandsetzung</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-location" className="block text-xs font-semibold text-slate-300 mb-1.5">Bauort / PLZ des Vorhabens</label>
                  <input
                    id="contact-location"
                    type="text"
                    placeholder="z.B. 50672 Köln"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-slate-700 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-msg" className="block text-xs font-semibold text-slate-300 mb-1.5">Projektbeschreibung</label>
                  <textarea
                    id="contact-msg"
                    rows={4}
                    placeholder="Beschreiben Sie kurz Ihr Bauvorhaben (z.B. Geschossanzahl, geplanter Baubeginn, BGF in qm)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-slate-700 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Strikter Datenschutz. Ihre Angaben dienen nur der Angebotserstellung.</span>
                </div>

                {/* EXKLUSIVER ORANGE CONVERSION BUTTON FÜR DAS KONTAKDFORMULAR */}
                <button
                  type="submit"
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-orange-600/30 hover:shadow-orange-600/40 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Verlässliches Angebot in 24h anfordern</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
