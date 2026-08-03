import { useEffect } from 'react';
import { X, Building2 } from 'lucide-react';

interface ImpressumProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Impressum({ isOpen, onClose }: ImpressumProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xl overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto text-slate-800 space-y-6 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <Building2 className="w-6 h-6 text-amber-700" />
          <h2 className="text-2xl font-bold text-slate-900">Impressum</h2>
        </div>

        <div className="space-y-4 text-sm leading-relaxed">
          <section className="space-y-1">
            <h3 className="font-bold text-slate-900 text-base">Angaben gemäß § 5 TMG</h3>
            <p className="font-semibold text-amber-800">Eren & Partner GmbH</p>
            <p>Bauunternehmen & Hochbau</p>
            <p>Venloer Str. 123</p>
            <p>50672 Köln</p>
            <p>Deutschland</p>
          </section>

          <section className="space-y-1 pt-2">
            <h3 className="font-bold text-slate-900 text-base">Vertreten durch</h3>
            <p>Geschäftsführung: <strong className="text-slate-900">Eren & Partner GmbH</strong></p>
          </section>

          <section className="space-y-1 pt-2">
            <h3 className="font-bold text-slate-900 text-base">Kontakt</h3>
            <p>Telefon: 0221 / 98 76 54 30</p>
            <p>E-Mail: info@eren-partner.de</p>
          </section>

          <section className="space-y-1 pt-2 border-t border-slate-200">
            <h3 className="font-bold text-slate-900 text-base">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <p>Eren & Partner GmbH</p>
            <p>Venloer Str. 123, 50672 Köln</p>
          </section>

          <section className="space-y-2 pt-2 text-xs text-slate-500">
            <h4 className="font-semibold text-slate-700">Streitschlichtung</h4>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>

        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-amber-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-amber-600 cursor-pointer"
          >
            Fenster Schließen
          </button>
        </div>

      </div>
    </div>
  );
}
