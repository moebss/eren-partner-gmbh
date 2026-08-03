import { Phone, FileText } from 'lucide-react';

interface StickyCTAProps {
  onOpenContact: () => void;
}

export function StickyCTA({ onOpenContact }: StickyCTAProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-lg border-t border-neutral-800 p-3 flex gap-2">
      <a
        href="tel:+492271000000"
        className="flex-1 py-3 px-4 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center gap-2 text-white font-bold text-xs shadow-md active:bg-neutral-800"
      >
        <Phone className="w-4 h-4 text-amber-500" />
        <span>Anrufen</span>
      </a>

      <button
        onClick={onOpenContact}
        className="flex-1 py-3 px-4 bg-amber-500 text-neutral-950 rounded-xl flex items-center justify-center gap-2 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 active:bg-amber-400"
      >
        <FileText className="w-4 h-4" />
        <span>Angebot</span>
      </button>
    </div>
  );
}
