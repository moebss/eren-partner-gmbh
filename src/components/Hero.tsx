import { Star, ShieldCheck, ArrowRight, Building2, PhoneCall, Award } from 'lucide-react';
import heroImg from '../images/hero_construction.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative pt-20 lg:pt-0 min-h-[85vh] lg:min-h-screen bg-slate-50 flex flex-col lg:flex-row w-full overflow-hidden border-b border-slate-200">
      
      {/* LEFT 50%: Content & Typography (STRIKTE AKZENT-HIERARCHIE) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 lg:py-24 bg-slate-50 relative z-10 border-r border-slate-200/80">
        
        <div className="max-w-xl space-y-6 text-left relative z-10">
          
          {/* Dezent & Neutral: KEIN ORANGE auf Sternen oder Badges */}
          <div className="inline-flex flex-wrap items-center gap-3 bg-white border border-slate-300 shadow-sm rounded-full px-4 py-2 text-xs">
            <div className="flex text-slate-800 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-slate-800" />
              ))}
            </div>
            <span className="font-extrabold text-slate-950">4.9 / 5.0 Sterne</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-bold uppercase tracking-wider text-[11px]">Meisterbetrieb Köln & NRW</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.1] text-balance">
            Präzision im Rohbau.<br />
            <span className="text-slate-900">
              Exzellenz im Hochbau.
            </span>
          </h1>

          {/* Subline */}
          <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed text-pretty">
            Eren & Partner GmbH ist Ihr meistergeführtes Bauunternehmen für Rohbau, Schalungsarbeiten, Gewerbebau & schlüsselfertige Bauvorhaben in Köln und Nordrhein-Westfalen.
          </p>

          {/* Action Buttons: ORANGE GEHÖRT ZU 100% EXKLUSIV DEM PRIMÄREN CTA! */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            {/* DER EINZIGE AKZENT-BUTTON IM SICHTBAREN BEREICH */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-xl shadow-xl shadow-orange-600/30 hover:-translate-y-0.5 transition-all cursor-pointer group focus-visible:ring-4 focus-visible:ring-orange-600 focus-visible:outline-none"
            >
              <span>Kostenlose Bauanfrage in 2 Min.</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Sekundärer Button: Klares Dunkel-Navy ohne Orange */}
            <a
              href="tel:+4922198765430"
              className="inline-flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-800 text-white border border-slate-900 font-semibold text-sm px-6 py-4 rounded-xl shadow-sm transition-all focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:outline-none"
            >
              <PhoneCall className="w-4 h-4 text-slate-300" />
              <span>Direkt anrufen: 0221 / 987 654 30</span>
            </a>
          </div>

          {/* Key Bullet Points: Neutrale Slate Icons */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-900 font-bold">
              <ShieldCheck className="w-4.5 h-4.5 text-slate-800 shrink-0" />
              <span>Meisterbetrieb</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-900 font-bold">
              <Building2 className="w-4.5 h-4.5 text-slate-800 shrink-0" />
              <span>Hoch- & Rohbau</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-900 font-bold">
              <Award className="w-4.5 h-4.5 text-slate-800 shrink-0" />
              <span>Termingarantie</span>
            </div>
          </div>

        </div>

      </div>

      {/* RIGHT 50%: Fullscreen Borderless Image */}
      <div className="w-full lg:w-1/2 relative min-h-[420px] lg:min-h-full">
        <img
          src={heroImg}
          alt="Eren & Partner GmbH Hochbau Bauunternehmer Köln"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width={1200}
          height={1200}
        />
        
        {/* Soft Light Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/20 to-transparent lg:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent lg:hidden" />

        {/* Floating Master Badge */}
        <div className="absolute bottom-8 left-8 right-8 lg:left-12 lg:right-12 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-300 flex items-center justify-between shadow-2xl">
          <div>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Meisterbetrieb & Zentrale</p>
            <p className="text-base font-extrabold text-slate-950">Venloer Str. 123, 50672 Köln</p>
            <p className="text-xs text-slate-700 font-semibold mt-0.5">Projektvolumen von 50k bis 5 Mio. €</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-slate-950 text-white flex items-center justify-center font-extrabold text-sm shrink-0 shadow-md">
            KÖLN
          </div>
        </div>
      </div>

    </section>
  );
}
