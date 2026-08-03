import { useState, useEffect } from 'react';
import { Phone, Menu, X, HardHat, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md' : 'bg-gradient-to-b from-white/95 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-900 group-hover:bg-slate-950 group-hover:text-white transition-all duration-300">
            <HardHat className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-950 group-hover:text-slate-900 transition-colors">
              EREN & PARTNER <span className="text-slate-500 font-light">GmbH</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-500 uppercase font-semibold">
              Bauunternehmen • Hochbau & Rohbau Köln
            </span>
          </div>
        </a>

        {/* Desktop Nav (Neutrale Links) */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors">Leistungen</a>
          <a href="#projects" className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors">Referenzen</a>
          <a href="#about" className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors">Über Uns</a>
          <a href="#testimonials" className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors">Bewertungen</a>
          <a href="#faq" className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors">FAQ</a>
          <a href="#contact" className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors">Kontakt</a>
        </nav>

        {/* Action Button & Phone */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="tel:+4922198765430" 
            className="flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-slate-950 px-3.5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-slate-900" />
            <span>0221 / 98 76 54 30</span>
          </a>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all cursor-pointer"
          >
            <span>Kostenlose Bauanfrage in 2 Min.</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle (Mindestgröße 44x44px für Touch A11y) */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 hover:bg-slate-200 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Menü öffnen"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay (Optimiert für Smartphone-Navigation) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-6 pt-4 pb-8 space-y-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-900 hover:text-slate-700 py-2.5 border-b border-slate-100">Leistungen</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-900 hover:text-slate-700 py-2.5 border-b border-slate-100">Referenzen</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-900 hover:text-slate-700 py-2.5 border-b border-slate-100">Über Uns</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-900 hover:text-slate-700 py-2.5 border-b border-slate-100">Bewertungen</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-900 hover:text-slate-700 py-2.5 border-b border-slate-100">FAQ</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-900 hover:text-slate-700 py-2.5 border-b border-slate-100">Kontakt</a>
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a 
              href="tel:+4922198765430" 
              className="flex items-center justify-center gap-2 text-sm font-extrabold text-slate-950 py-3.5 rounded-xl bg-slate-100 border border-slate-300"
            >
              <Phone className="w-4 h-4 text-slate-900" />
              <span>Direkt anrufen: 0221 / 98 76 54 30</span>
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-orange-600/30 text-center cursor-pointer"
            >
              Kostenlose Bauanfrage in 2 Min.
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
