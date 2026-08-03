import { Star, Quote, Building, CheckCircle2 } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: "Dipl.-Ing. Marcus Becker",
      clientType: "Architekturbüro Kölner Bucht",
      projectScope: "Rohbau Wohnquartier (12 WE) • Lindenthal",
      projectVolume: "1.4 Mio. € Projektvolumen",
      rating: 5,
      text: "Eren & Partner GmbH hat den Rohbau für unser 12-Parteien-Haus termingerecht und in makelloser Betonqualität fertiggestellt. Erstklassige Bauleitung und lückenlose Dokumentation bei jeder Abnahme."
    },
    {
      name: "Dr. Aris Thorne",
      clientType: "Rhein-Erft Immobilien GmbH (Bauträger)",
      projectScope: "Büro- & Gewerbekomplex • Köln-Deutz",
      projectVolume: "3.2 Mio. € Projektvolumen",
      rating: 5,
      text: "Wir schätzen die verlässliche Festpreiskalkulation und die saubere Baustellenführung sehr. Selbst bei komplexen Schalungsarbeiten gab es keinerlei Nachtragsforderungen. Ein echter Premium-Partner."
    },
    {
      name: "Kilian & Devran Özkan",
      clientType: "Privater Bauherr & Investor",
      projectScope: "Schlüsselfertiges Mehrfamilienhaus • Rodenkirchen",
      projectVolume: "890.000 € Projektvolumen",
      rating: 5,
      text: "Unser Neubau wurde von Eren & Partner von den Erdarbeiten bis zur Schlüsselübergabe perfekt umgesetzt. Feste Ansprechpartner, transparenter Bauzeitenplan und höchste handwerkliche Präzision."
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Vertrauen bei Großprojekten bis 5 Mio. €
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Was Architekten & Bauträger sagen
          </h2>
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex text-slate-800 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-slate-800" />
              ))}
            </div>
            <span className="text-lg font-bold text-slate-950">4.9 von 5.0</span>
            <span className="text-slate-300">•</span>
            <span className="text-sm text-slate-600 font-medium">Geprüfte Bauherren-Bewertungen</span>
          </div>
        </div>

        {/* High-Substance Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl p-8 relative flex flex-col justify-between hover:border-slate-300 transition-all shadow-sm hover:shadow-lg"
            >
              <Quote className="w-12 h-12 text-slate-100 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                {/* Project Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-800">
                  <Building className="w-3.5 h-3.5 text-slate-900" />
                  <span>{rev.projectVolume}</span>
                </div>

                <div className="flex text-slate-800 gap-1 pt-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-slate-800" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-extrabold text-slate-950">{rev.name}</h4>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                </div>
                <p className="text-xs font-semibold text-slate-900">{rev.clientType}</p>
                <p className="text-[11px] text-slate-500">{rev.projectScope}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
