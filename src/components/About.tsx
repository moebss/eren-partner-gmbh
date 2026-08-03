import { CheckCircle2, ShieldCheck } from 'lucide-react';
import aboutTeamImg from '../images/about_team.jpg';

interface AboutProps {
  onOpenContact: () => void;
}

export function About({ onOpenContact }: AboutProps) {
  const advantages = [
    "Meisterbetrieb für Hochbau, Rohbau & Betonbau seit über 18 Jahren",
    "Feste Ansprechpartner & transparente Baukostenkalkulation",
    "Eigene moderne Schalungssysteme & Baugerätepark",
    "Termingerechte Ausführung von Rohbauten bis 5 Mio. € Projektvolumen",
    "Zertifizierte ISO-Qualitätsstandards & geschultes Bauleiter-Team",
    "Regional verwurzelt in Köln, Erftkreis & gesamtem Rheinland"
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
              <img
                src={aboutTeamImg}
                alt="Eren & Partner GmbH Team Bauunternehmer Köln"
                className="w-full h-[450px] object-cover object-center"
                width={800}
                height={900}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>

            {/* Innung Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white border border-slate-200 p-5 rounded-xl shadow-2xl flex items-center gap-4 max-w-xs">
              <div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center font-bold text-xl shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Zertifizierter Baubetrieb</p>
                <p className="text-sm font-bold text-slate-900">Geprüfte Meisterqualität Hoch- & Rohbau</p>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Baukultur & Unternehmenswerte
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-balance">
              Baukultur,<br />
              <span className="text-slate-900">Verlässlichkeit & Termintreue in Köln.</span>
            </h2>

            <p className="text-base text-slate-700 leading-relaxed text-pretty">
              Die <strong className="text-slate-950">Eren & Partner GmbH</strong> mit Sitz in der Venloer Str. 123 in Köln ist Ihr vertrauensvolles Bauunternehmen für anspruchsvolle Hochbau- und Rohbauprojekte.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Ob Wohnungsbau, Gewerbeobjekt oder schlüsselfertiger Neubau: Wir realisieren Bauvorhaben mit präziser Schalungstechnik, verlässlicher Zeitplanung und transparenter Kostenstruktur.
            </p>

            {/* Advantages Grid (Neutrale Checkmarks, kein Orange!) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {advantages.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Management Tag */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500 font-semibold">Geschäftsführung & Bauleitung</p>
                <p className="text-base font-extrabold text-slate-950">Geschäftsführung Eren & Partner</p>
              </div>
              <button
                onClick={onOpenContact}
                className="bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-md transition-all cursor-pointer"
              >
                Erstgespräch vereinbaren
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
