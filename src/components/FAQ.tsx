import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Wie läuft die Erstberatung & Angebotserstellung ab?",
      answer: "Nach Ihrer Anfrage setzt sich unser Bauleiter innerhalb von 24 Stunden mit Ihnen in Verbindung. Nach Sichtung der Baupläne erstellen wir ein verbindliches und detailliertes Festpreisangebot ohne versteckte Kosten."
    },
    {
      question: "Welche Projektgrößen übernimmt die Eren & Partner GmbH?",
      answer: "Wir realisieren Rohbau- und Hochbauprojekte mit einem Projektvolumen von 50.000 € bis 5.000.000 €. Dazu gehören Einfamilienhäuser, Mehrfamilienhäuser sowie Gewerbekomplexe."
    },
    {
      question: "Gibt es eine vertragliche Bauzeitgarantie?",
      answer: "Ja, wir vereinbaren im Bauvertrag feste Meilensteine und einen verbindlichen Fertigstellungstermin. Durch eigene Schalungssysteme und fest angestellte Handwerker garantieren wir lückenlose Termintreue."
    },
    {
      question: "Bieten Sie auch schlüsselfertiges Bauen an?",
      answer: "Ja, wir bieten neben reinen Rohbauarbeiten auch die schlüsselfertige Komplettausführung an. Sie haben über die gesamte Bauphase hinweg einen festen Ansprechpartner."
    },
    {
      question: "In welchem Umkreis ist Ihr Bauunternehmen tätig?",
      answer: "Unser Schwerpunkt liegt im Großraum Köln, Bonn, Düsseldorf, Rhein-Erft-Kreis sowie dem gesamten Rheinland in Nordrhein-Westfalen."
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Häufige Fragen & Transparenz
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Antworten zu Ihrem Bauvorhaben
          </h2>
          <p className="text-base text-slate-600">
            Alles, was Sie über Ablauf, Kosten und Garantien bei der Eren & Partner GmbH wissen müssen.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-950 text-base sm:text-lg cursor-pointer focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-slate-700 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
