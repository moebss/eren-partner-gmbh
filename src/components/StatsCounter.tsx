import { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

function StatItem({ end, suffix = '', prefix = '', label, description }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const duration = 2000;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="bg-white border border-slate-200/80 p-6 rounded-2xl text-center relative overflow-hidden group hover:border-amber-500/50 shadow-sm hover:shadow-md transition-all">
      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl group-hover:bg-amber-500/10 transition-colors" />
      <div className="font-heading font-extrabold text-4xl sm:text-5xl text-amber-700 mb-2 font-features-[tnum]">
        {prefix}{count}{suffix}
      </div>
      <div className="text-base font-bold text-slate-900 mb-1">{label}</div>
      <div className="text-xs text-slate-500 font-medium">{description}</div>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatItem end={18} suffix="+" label="Jahre Bauerfahrung" description="Meistergeführtes Bauunternehmen" />
          <StatItem end={140} suffix="+" label="Erfolgreiche Bauprojekte" description="Hochbau, Rohbau & Schlüsselfertig" />
          <StatItem end={100} suffix="%" label="Termintreue" description="Verlässliche Bauzeitengarantie" />
          <StatItem end={42} suffix=" Sterne" prefix="4.9 / 5 " label="Kundenzufriedenheit" description="Google Top-Bewertungen Köln" />
        </div>
      </div>
    </section>
  );
}
