import { useState, useMemo, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  LayoutDashboard, 
  GraduationCap, 
  HelpCircle, 
  ChevronRight, 
  ChevronLeft,
  Search,
  CheckCircle2,
  Trophy,
  Menu,
  X,
  History
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { units, pyqs, type Unit, type Topic } from './data/syllabus';

/**
 * Utility for tailwind classes
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [activeUnitId, setActiveUnitId] = useState<string>(units[0].id);
  const [activeTopicIndex, setActiveTopicIndex] = useState<number>(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'study' | 'pyq'>('study');
  const [selectedYear, setSelectedYear] = useState(pyqs[0].year);
  const [searchQuery, setSearchQuery] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [activeUnitId, activeTopicIndex, viewMode, selectedYear]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't navigate if typing in search
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }

      if (viewMode === 'study') {
        if (e.key === 'ArrowRight') {
          handleNextTopic();
        } else if (e.key === 'ArrowLeft') {
          handlePrevTopic();
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          scrollContainerRef.current?.scrollBy({ top: 120, behavior: 'smooth' });
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          scrollContainerRef.current?.scrollBy({ top: -120, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, activeTopicIndex, activeUnitId]);

  const activeUnit = useMemo(() => 
    units.find(u => u.id === activeUnitId) || units[0], 
  [activeUnitId]);

  const activeTopic = activeUnit.topics[activeTopicIndex];

  const filteredUnits = useMemo(() => {
    if (!searchQuery) return units;
    return units.map(u => ({
      ...u,
      topics: u.topics.filter(t => 
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        t.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(u => u.topics.length > 0);
  }, [searchQuery]);

  const handleNextTopic = () => {
    if (activeTopicIndex < activeUnit.topics.length - 1) {
      setActiveTopicIndex(prev => prev + 1);
    } else {
      const currentUnitIdx = units.findIndex(u => u.id === activeUnitId);
      if (currentUnitIdx < units.length - 1) {
        setActiveUnitId(units[currentUnitIdx + 1].id);
        setActiveTopicIndex(0);
      }
    }
  };

  const handlePrevTopic = () => {
    if (activeTopicIndex > 0) {
      setActiveTopicIndex(prev => prev - 1);
    } else {
      const currentUnitIdx = units.findIndex(u => u.id === activeUnitId);
      if (currentUnitIdx > 0) {
        const prevUnit = units[currentUnitIdx - 1];
        setActiveUnitId(prevUnit.id);
        setActiveTopicIndex(prevUnit.topics.length - 1);
      }
    }
  };

  return (
    <div className="flex h-screen bg-page-bg overflow-hidden font-sans">
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-ink-black/20 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Editorial Edition */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-80 bg-page-bg border-r-2 border-ink-black transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 overflow-y-auto",
        !isSidebarOpen && "-translate-x-full"
      )}>
        <div className="p-8 h-full flex flex-col">
          {/* Header Branding */}
          <div className="mb-12 border-b-2 border-ink-black pb-6">
            <span className="editorial-label block mb-1">Academic Curriculum</span>
            <h1 className="text-4xl font-black italic -tracking-widest leading-none mb-4 uppercase">Big Data <br/>Analytics</h1>
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest opacity-70">
              <span className="w-2 h-2 bg-ink-black rounded-full" />
              Course Ref: CS-801
            </div>
          </div>

          <div className="relative mb-8 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-black opacity-30 group-focus-within:opacity-100 transition-opacity" size={16} />
            <input 
              type="text" 
              placeholder="Index Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-transparent border-b border-ink-black/20 rounded-none text-sm font-medium focus:outline-none focus:border-ink-black transition-all placeholder:text-ink-black/30 italic"
            />
          </div>

          <nav className="flex-1 space-y-1 custom-scrollbar">
             <button 
              onClick={() => { setViewMode('study'); setIsSidebarOpen(false); }}
              className={cn(
                "w-full flex items-center justify-between px-2 py-3 border-b border-ink-black/10 text-xs font-black uppercase tracking-widest transition-all",
                viewMode === 'study' ? "text-ink-black opacity-100" : "text-ink-black opacity-40 hover:opacity-100"
              )}
            >
              <span className="flex items-center gap-3"><BookOpen size={16} /> Concepts</span>
              {viewMode === 'study' && <ChevronRight size={14} />}
            </button>
            <button 
              onClick={() => { setViewMode('pyq'); setIsSidebarOpen(false); }}
              className={cn(
                "w-full flex items-center justify-between px-2 py-3 border-b border-ink-black/10 text-xs font-black uppercase tracking-widest transition-all",
                viewMode === 'pyq' ? "text-ink-black opacity-100" : "text-ink-black opacity-40 hover:opacity-100"
              )}
            >
              <span className="flex items-center gap-3"><History size={16} /> Archives</span>
              {viewMode === 'pyq' && <ChevronRight size={14} />}
            </button>

            <div className="pt-8 pb-3 px-2 editorial-label">
              Course Modules
            </div>

            <div className="space-y-4">
              {filteredUnits.map((unit, uIdx) => (
                <div key={unit.id} className="relative group">
                  <span className="absolute -left-4 top-1 text-2xl font-black opacity-[0.08] font-sans group-hover:opacity-20 transition-all">0{uIdx+1}</span>
                  <button 
                    onClick={() => {
                      setActiveUnitId(unit.id);
                      setActiveTopicIndex(0);
                      setViewMode('study');
                    }}
                    className={cn(
                      "w-full text-left pl-4 transition-all",
                      activeUnitId === unit.id && viewMode === 'study'
                        ? "text-ink-black" 
                        : "text-ink-black/40 hover:text-ink-black"
                    )}
                  >
                    <span className="text-[11px] font-black uppercase tracking-wider block mb-0.5 opacity-60">Module 0{uIdx+1}</span>
                    <span className="text-sm font-bold block leading-tight">{unit.title.split(': ')[1]}</span>
                  </button>
                  
                  {activeUnitId === unit.id && viewMode === 'study' && !searchQuery && (
                    <div className="mt-3 ml-4 border-l-2 border-ink-black pl-4 space-y-2 py-1">
                      {unit.topics.map((topic, idx) => (
                        <button
                          key={topic.id}
                          onClick={() => setActiveTopicIndex(idx)}
                          className={cn(
                            "w-full text-left text-xs font-bold transition-colors block leading-snug uppercase tracking-tight",
                            activeTopicIndex === idx ? "text-ink-black" : "text-ink-black/30 hover:text-ink-black/60"
                          )}
                        >
                          {topic.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Developer Section */}
          <div className="mt-12 pt-8 border-t-2 border-ink-black/20">
            <span className="editorial-label block mb-4">Lead Developer</span>
            <a 
              href="https://aayush-ki-pehchan.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-ink-black flex items-center justify-center text-page-bg font-black italic rounded-sm transition-transform group-hover:-rotate-6">AS</div>
                <div>
                  <h4 className="text-sm font-black italic tracking-tighter uppercase group-hover:underline">Aayush Sharma</h4>
                  <p className="text-[10px] font-bold opacity-40 tracking-widest uppercase">Web Dev & AI Specialist</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </aside>

      {/* Main content - Page Aesthetic */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#fdfcf9]">
        {/* Floating Nav Bar for Mobile */}
        <header className="h-16 flex items-center justify-between px-6 bg-page-bg border-b border-ink-black lg:hidden">
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 -ml-2"><Menu size={20} /></button>
            <h1 className="font-display font-black italic">Big Data Analytics</h1>
            <div className="w-8 h-8 rounded-full bg-ink-black" />
        </header>

        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto custom-scrollbar"
        >
          <div className="max-w-4xl mx-auto p-8 lg:p-20">
            {viewMode === 'study' ? (
              <StudyView 
                unit={activeUnit} 
                activeTopicIndex={activeTopicIndex} 
                handlePrev={handlePrevTopic}
                handleNext={handleNextTopic}
              />
            ) : (
              <PYQView 
                selectedYear={selectedYear} 
                setSelectedYear={setSelectedYear} 
              />
            )}
          </div>
        </div>

        {/* Global Editorial Footer */}
        <footer className="px-8 lg:px-20 py-8 border-t border-ink-black/10 bg-page-bg hidden md:flex justify-between items-center select-none">
          <div className="flex gap-12">
            <div className="flex flex-col">
              <span className="editorial-label !opacity-30">Status</span>
              <span className="text-[11px] font-black uppercase">Study Reference active</span>
            </div>
            <div className="flex flex-col">
              <span className="editorial-label !opacity-30">Program Depth</span>
              <span className="text-[11px] font-black uppercase">Advanced Distributed Systems</span>
            </div>
            <div className="flex flex-col">
              <span className="editorial-label !opacity-30">Academic Year</span>
              <span className="text-[11px] font-black uppercase italic font-display">2024 / 2025</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="editorial-label !opacity-100 flex items-center gap-3">
              Module Complete
              <div className="w-24 h-1 bg-ink-black/5 flex overflow-hidden">
                <motion.div initial={{ x: '-100%' }} animate={{ x: '0%' }} className="w-full h-full bg-ink-black" />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function StudyView({ unit, activeTopicIndex, handlePrev, handleNext }: { 
  unit: Unit, 
  activeTopicIndex: number,
  handlePrev: () => void,
  handleNext: () => void
}) {
  const topic = unit.topics[activeTopicIndex];

  return (
    <motion.div 
      key={topic.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative pb-24"
    >
      <div className="editorial-header-number">0{activeTopicIndex + 1}</div>
      
      <header className="mb-16 border-b-4 border-ink-black pb-10 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="editorial-label !opacity-100 flex items-center gap-3">
            <span className="w-6 h-0.5 bg-ink-black" />
            Module Section {activeTopicIndex + 1}
          </div>
          <span className="text-[10px] font-black font-sans uppercase tracking-widest opacity-40 italic">
            Reference Note No. BD-{unit.id.toUpperCase()}-{activeTopicIndex}
          </span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-black italic -tracking-wider leading-[0.9] text-ink-black transition-all">
          {topic.title}
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
           <div className="markdown-body font-sans text-lg first-letter:text-7xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-ink-black first-letter:font-display">
            <ReactMarkdown>{topic.content}</ReactMarkdown>
          </div>

          {/* Topic Image */}
          {topic.imageUrl && (
            <div className="mt-12 group overflow-hidden border-2 border-ink-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img 
                src={topic.imageUrl} 
                alt={topic.title} 
                className="w-full h-auto object-cover grayscale transition-all duration-700 group-hover:grayscale-0 scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* SVG Diagram */}
          {topic.diagramSvg && (
             <div className="mt-12 border-2 border-ink-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white p-8">
                <div 
                  className="w-full grayscale hover:grayscale-0 transition-all duration-500"
                  dangerouslySetInnerHTML={{ __html: topic.diagramSvg }} 
                />
                <div className="mt-6 pt-4 border-t border-ink-black/10 text-[10px] uppercase font-black tracking-widest italic opacity-40">
                  Interactive Architectural Schematic // {topic.id.toUpperCase()}
                </div>
             </div>
          )}

          {/* Visual Aid Suggestion */}
          {topic.visualAidDesc && (
            <div className="mt-16 p-8 border-2 border-dashed border-ink-black/20 bg-ink-black/[0.02]">
              <div className="editorial-label mb-4 !opacity-30">Visual Aid Description</div>
              <p className="text-sm italic text-ink-black/60 leading-relaxed font-serif">
                {topic.visualAidDesc}
              </p>
            </div>
          )}

          {/* Code Snippet Section */}
          {topic.codeSnippet && (
            <div className="mt-16 space-y-4">
              <div className="editorial-label">Practical Implementation</div>
              <div className="bg-zinc-900 rounded-none overflow-hidden border-2 border-zinc-900">
                <div className="bg-zinc-800 px-4 py-2 border-b border-zinc-700 flex items-center justify-between">
                   <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                     Source File: {topic.language?.toUpperCase() || 'CODE'}
                   </span>
                </div>
                <pre className="p-6 text-sm font-mono text-zinc-300 leading-relaxed overflow-x-auto">
                  <code>{topic.codeSnippet}</code>
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Concepts */}
        <aside className="lg:col-span-4 space-y-12">
          {topic.keyTerms && topic.keyTerms.length > 0 && (
            <div className="sticky top-8">
              <h3 className="editorial-label mb-6 border-b border-ink-black/10 pb-2">Key Glossary</h3>
              <div className="space-y-8">
                {topic.keyTerms.map((term, tIdx) => (
                  <div key={tIdx} className="group">
                    <span className="text-xs font-black uppercase text-ink-black block mb-1 group-hover:underline">
                      {term.term}
                    </span>
                    <p className="text-xs text-ink-black/60 leading-normal font-sans">
                      {term.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* Viva Insight Part */}
      {topic.vivaQuestion && (
        <div className="mt-24 pt-10 border-t-2 border-ink-black">
          <section className="bg-ink-black text-page-bg p-8 lg:p-12 relative overflow-hidden">
            <motion.div 
              initial={{ rotate: -5, opacity: 0.1 }}
              className="absolute -right-4 -bottom-4 text-9xl font-black italic pointer-events-none select-none"
            >
              Q?
            </motion.div>
            <h3 className="editorial-label !text-page-bg !opacity-50 mb-6">Oral Examination Guide</h3>
            <div className="relative z-10 space-y-6">
              <p className="text-2xl lg:text-3xl font-display font-black italic leading-tight border-l-2 border-page-bg/30 pl-6">
                "{topic.vivaQuestion}"
              </p>
              <div className="bg-page-bg/10 p-6 rounded-none backdrop-blur-sm">
                <span className="editorial-label !text-page-bg block mb-3">Master Answer</span>
                <p className="text-base text-page-bg opacity-90 leading-relaxed font-medium">
                  {topic.vivaAnswer}
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Pager */}
      <div className="mt-20 flex justify-between items-center border-y border-ink-black/20 py-8">
        <button 
          onClick={handlePrev}
          className="editorial-label !opacity-100 hover:tracking-[0.5em] transition-all flex items-center gap-2 group"
        >
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Previous entry
        </button>
        <button 
          onClick={handleNext}
          className="editorial-label !opacity-100 hover:tracking-[0.5em] transition-all flex items-center gap-2 group"
        >
          Next entry
          <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

function PYQView({ selectedYear, setSelectedYear }: { selectedYear: string, setSelectedYear: (y: string) => void }) {
  const currentPYQ = pyqs.find(p => p.year === selectedYear) || pyqs[0];

  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-16 border-b-4 border-ink-black pb-10">
        <div className="editorial-label mb-4 opacity-100 flex items-center gap-3">
           <span className="w-10 h-0.5 bg-ink-black" />
           Examination Archives
        </div>
        <h1 className="text-6xl font-black italic -tracking-tight mb-8">Previous Question Papers</h1>
        
        <div className="flex flex-wrap gap-3">
          {pyqs.map(p => (
            <button
              key={p.year}
              onClick={() => setSelectedYear(p.year)}
              className={cn(
                "px-6 py-2 text-xs font-black uppercase tracking-widest border-2 transition-all",
                selectedYear === p.year ? "bg-ink-black text-page-bg border-ink-black" : "bg-transparent text-ink-black border-ink-black/10 hover:border-ink-black"
              )}
            >
              Session {p.year}
            </button>
          ))}
        </div>
      </header>

      <div className="grid gap-12">
        {currentPYQ.questions.map((section, sIdx) => (
          <div key={sIdx} className="space-y-8">
            <h3 className="editorial-label !opacity-100 border-b border-ink-black/20 pb-3 block">
              {section.section}
            </h3>
            <div className="divide-y-2 divide-ink-black/5">
              {section.items.map((item, iIdx) => (
                <div key={iIdx} className="py-8 group">
                  <div className="flex items-start gap-8">
                    <span className="editorial-label !opacity-20 text-3xl font-black pt-1">
                      0{iIdx+1}
                    </span>
                    <div className="space-y-4 flex-1">
                      <h4 className="font-display text-2xl font-black transition-colors group-hover:italic pr-4">
                        {item.q}
                      </h4>
                      <div className="bg-ink-black/5 p-6 border-l-4 border-ink-black">
                        <span className="editorial-label block mb-2">Model Solution</span>
                        <p className="text-base text-ink-black/70 leading-relaxed italic font-serif">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
