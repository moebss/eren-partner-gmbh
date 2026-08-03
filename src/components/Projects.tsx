import { useState } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import projCommercial from '../images/project_commercial.jpg';
import projResidential from '../images/project_residential.jpg';
import projTurnkey from '../images/project_turnkey.jpg';

interface ProjectsProps {
  onOpenContact: () => void;
}

export function Projects({ onOpenContact }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'rohbau' | 'gewerbe'>('all');

  const projects = [
    {
      id: '1',
      category: 'rohbau',
      title: 'Rohbau Wohnquartier mit 12 Wohneinheiten',
      location: 'Köln-Lindenthal',
      type: 'Rohbau & Stahlbeton',
      details: 'Fundamente, Tiefgarage & Massivwände',
      image: projResidential,
      tag: 'Wohnbau'
    },
    {
      id: '2',
      category: 'gewerbe',
      title: 'Moderner Büro- & Gewerbekomplex',
      location: 'Köln-Deutz',
      type: 'Gewerbebau',
      details: 'Skelettbauweise & Klinkerfassade',
      image: projCommercial,
      tag: 'Gewerbebau'
    },
    {
      id: '3',
      category: 'rohbau',
      title: 'Schlüsselfertiges Mehrfamilienhaus',
      location: 'Köln-Rodenkirchen',
      type: 'Schlüsselfertig',
      details: 'Komplettbau inklusive Außenanlagen',
      image: projTurnkey,
      tag: 'Schlüsselfertig'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
              Referenzprojekte Köln & NRW
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Realisierte Bauvorhaben
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Alle Referenzen' },
              { id: 'rohbau', label: 'Rohbau & Wohnbau' },
              { id: 'gewerbe', label: 'Gewerbebau' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all cursor-pointer focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:outline-none ${
                  filter === btn.id
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Seamless Mosaic Hover-Reveal Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-slate-200 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={onOpenContact}
              className="group relative aspect-[3/4] overflow-hidden bg-slate-900 cursor-pointer focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:outline-none"
              tabIndex={0}
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                width={600}
                height={800}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Tag Badge */}
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-slate-800 text-[11px] font-bold text-slate-200 uppercase tracking-wider">
                {project.tag}
              </div>

              {/* Top Right Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/80 border border-slate-800 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Hover-Reveal Info Panel (Slide-Up) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{project.location} • {project.type}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.details}
                </p>

                <div className="pt-2 flex items-center gap-1 text-xs font-bold text-white uppercase tracking-wider">
                  <span>Referenzobjekt & Details prüfen →</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
