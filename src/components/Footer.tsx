import { useState } from 'react';
import { HardHat, ArrowUp } from 'lucide-react';
import { Impressum } from './Impressum';
import { Datenschutz } from './Datenschutz';

interface FooterProps {
  onOpenContact: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 pt-16 pb-24 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
            
            {/* Col 1: Brand */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                  <HardHat className="w-5 h-5" />
                </div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  EREN & PARTNER <span className="text-amber-500 font-light">GmbH</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Eren & Partner GmbH – Ihr meistergeführtes Bauunternehmen für Hochbau, Rohbau, Gewerbebau und schlüsselfertige Neubauten in Köln und Nordrhein-Westfalen.
              </p>
              <div className="text-xs text-slate-400 font-mono pt-2">
                Venloer Str. 123, 50672 Köln • Tel: 0221 / 98 76 54 30
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Leistungen</a></li>
                <li><a href="#projects" className="hover:text-amber-400 transition-colors">Referenzen</a></li>
                <li><a href="#about" className="hover:text-amber-400 transition-colors">Über Uns</a></li>
                <li><a href="#testimonials" className="hover:text-amber-400 transition-colors">Bewertungen</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">Kontakt</a></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Kernkompetenzen</h4>
              <ul className="space-y-2 text-xs">
                <li><span className="text-slate-300">Rohbau & Massivbau</span></li>
                <li><span className="text-slate-300">Schlüsselfertiges Bauen</span></li>
                <li><span className="text-slate-300">Gewerbe- & Industriebau</span></li>
                <li><span className="text-slate-300">Umbau & Aufstockung</span></li>
                <li><span className="text-slate-300">Betonsanierung</span></li>
              </ul>
            </div>

            {/* Col 4: Regional Area */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Einsatzgebiet</h4>
              <p className="text-xs leading-relaxed text-slate-400 mb-4">
                Köln, Bonn, Leverkusen, Düsseldorf, Erftkreis & gesamtes Rheinland/NRW.
              </p>
              <button
                onClick={onOpenContact}
                className="w-full py-2 bg-slate-800 border border-slate-700 hover:border-amber-500/40 text-amber-400 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Projekt Anfragen
              </button>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p className="text-slate-500">
              © {new Date().getFullYear()} Eren & Partner GmbH. Alle Rechte vorbehalten.
            </p>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setShowImpressum(true)}
                className="text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
              >
                Impressum
              </button>
              <button
                onClick={() => setShowDatenschutz(true)}
                className="text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
              >
                Datenschutz
              </button>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 hover:border-amber-500/50 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-colors"
                aria-label="Nach oben scrollen"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Modals */}
      <Impressum isOpen={showImpressum} onClose={() => setShowImpressum(false)} />
      <Datenschutz isOpen={showDatenschutz} onClose={() => setShowDatenschutz(false)} />
    </>
  );
}
