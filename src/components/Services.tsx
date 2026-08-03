import { Building2, Hammer, ShieldAlert, ArrowRight, CheckCircle2, Ruler, Layers } from 'lucide-react';

interface ServicesProps {
  onOpenContact: () => void;
}

export function Services({ onOpenContact }: ServicesProps) {
  const servicesList = [
    {
      icon: Building2,
      title: "Rohbau & Massivbau",
      description: "Erstellung von tragenden Konstruktionen, Fundamenten, Stahlbetonarbeiten und Mauerwerk für Wohn- & Gewerbeimmobilien.",
      features: ["Stahlbeton- & Mauerwerksbau", "Präzise Schalungsarbeiten", "Höchste Tragwerksqualität"]
    },
    {
      icon: Layers,
      title: "Schlüsselfertiges Bauen",
      description: "Von der Grundsteinlegung bis zur Schlüsselübergabe – Komplettabwicklung Ihres Neubauprojekts aus einer meistergeführten Hand.",
      features: ["Fixpreis & Bauzeitgarantie", "Einer für alles – Schnittstellenfrei", "Schlüsselfertige Übergabe"]
    },
    {
      icon: Ruler,
      title: "Gewerbe- & Industriebau",
      description: "Realisierung von Hallen, Bürogebäuden und Logistikzentren nach modernsten energetischen und statischen Standards.",
      features: ["Großprojekt-Expertise", "Wirtschaftliche Bauweise", "Zertifizierte Baustoffe"]
    },
    {
      icon: Hammer,
      title: "Umbau & Aufstockung",
      description: "Erweiterung von bestehendem Wohnraum, Dachaufstockungen, Anbauten und statisch anspruchsvolle Wanddurchbrüche.",
      features: ["Statisch geprüfte Durchbrüche", "Wohnraumerweiterung", "Saubere Baustellenführung"]
    },
    {
      icon: ShieldAlert,
      title: "Betonsanierung & Instandsetzung",
      description: "Fachgerechte Sanierung von Rissen, Betonabplatzungen und Feuchtigkeitsschäden an Fundamenten und Tiefgaragen.",
      features: ["Dauerhafte Abdichtung", "Rissverpressung & Sanierung", "Substanzerhalt für Immobilien"]
    },
    {
      icon: Building2,
      title: "Klinker & Fassadenbau",
      description: "Hochwertige Verblendklinkerarbeiten, Wärmedämmverbundsysteme (WDVS) und ästhetische Klinkerfassaden für Langlebigkeit.",
      features: ["Ästhetische Klinkeroptik", "Effiziente WDVS-Dämmung", "Wetterfeste Außenwand"]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-950 text-white border-t border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Dezent Eyebrow */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Kernkompetenzen & Leistungsübersicht
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            Bauen mit Substanz & Verantwortung
          </h2>
          <p className="text-base sm:text-lg text-slate-300 text-pretty">
            Von der Bodenplatte bis zum schlüsselfertigen Rohbau – Eren & Partner GmbH steht für erstklassiges Bauhandwerk in Köln & NRW.
          </p>
        </div>

        {/* Services Grid (Deep Anthrazit Architectural Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:border-slate-700 hover:-translate-y-1"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-950 transition-all duration-300 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-slate-200 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 border-t border-slate-800/80 pt-4 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sekundäre Aktion als schlichter Textlink (KEIN ORANGE!) */}
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 group-hover:text-white pt-2 border-t border-slate-800/80 cursor-pointer"
                >
                  <span>Leistungskatalog & Preise ansehen</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
