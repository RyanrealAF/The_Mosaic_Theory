import React, { useState, useEffect, useRef } from "react";
import { 
  Activity, 
  Brain, 
  Hourglass, 
  ShieldAlert, 
  Globe, 
  FileText, 
  Search, 
  MessageSquare, 
  ChevronDown, 
  ChevronRight, 
  Heart, 
  AlertTriangle, 
  Scale, 
  Cpu, 
  ArrowRight, 
  Clock, 
  BookOpen, 
  Layers, 
  CheckCircle,
  HelpCircle,
  Send,
  Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { paperTitle, paperMetadata, paperSections, documentFullText, papers } from "./data/document";

export default function App() {
  const [selectedPaperId, setSelectedPaperId] = useState<string>("physiological-constitutional");
  const selectedPaper = papers.find(p => p.id === selectedPaperId) || papers[0];
  const [activeTab, setActiveTab] = useState<"overview" | "pathway" | "constitutional" | "document" | "ama">("overview");
  
  // Mobile responsive helper states
  const [isMobileIndexExpanded, setIsMobileIndexExpanded] = useState(false);
  const [isMobilePromptsExpanded, setIsMobilePromptsExpanded] = useState(false);
  
  // Biological pathway visualizer state
  const [selectedBioNode, setSelectedBioNode] = useState<string>("hpa");
  
  // Constitutional model interactive state
  const [selectedConstTab, setSelectedConstTab] = useState<"1st" | "4th" | "14th" | "ada">("14th");
  
  // Custom document search/expand state
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "neuro": true,
  });

  // Chat/AMA states
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ role: "user" | "model" | "system"; text: string }>>([
    {
      role: "model",
      text: "Welcome to the Medico-Legal DSA Explainer. I can provide detailed academic explanations, break down clinical studies (Sapolsky, McEwen, Epel, Thayer), or analyze federal constitutional principles (Jones, Carpenter, Adickes, Paul v. Davis) directly from the paper. What would you like me to clarify?"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isFallbackActive, setIsFallbackActive] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, isTyping]);

  // Toggle sections
  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAllSections = () => {
    const all = {} as Record<string, boolean>;
    selectedPaper.sections.forEach(s => {
      all[s.id] = true;
    });
    setExpandedSections(all);
  };

  const collapseAllSections = () => {
    setExpandedSections({});
  };

  const handleSendMessage = async (msgToSend?: string) => {
    const queryText = msgToSend || chatMessage;
    if (!queryText.trim()) return;

    if (!msgToSend) {
      setChatMessage("");
    }

    // Collapse search/prompt drawers on mobile so user sees output right away
    setIsMobilePromptsExpanded(false);

    const userTurn = { role: "user" as const, text: queryText };
    setChatHistory(prev => [...prev, userTurn]);
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: queryText,
          // Extract user/model turns from history for state
          history: chatHistory.filter(h => h.role !== "system")
        })
      });

      const data = await response.json();
      setIsTyping(false);

      if (response.ok) {
        setChatHistory(prev => [...prev, { role: "model", text: data.text }]);
      } else {
        // Handle fallback mode or API key notice
        if (data.isFallbackActive) {
          setIsFallbackActive(true);
          setChatHistory(prev => [...prev, { role: "model", text: data.fallbackReply }]);
        } else {
          setChatHistory(prev => [...prev, { 
            role: "model", 
            text: `⚠️ **Server Communication Error:** ${data.error || "Failed to reach the Gemini endpoint."}\n\n*Technical Details:* ${data.details || "No details provided"}` 
          }]);
        }
      }
    } catch (err: any) {
      setIsTyping(false);
      setChatHistory(prev => [...prev, { 
        role: "model", 
        text: `⚠️ **Network Error:** Could not connect to the backend server. Please verify your internet connection.\n\n*Error text:* ${err.message}` 
      }]);
    }
  };

  // Preset prompts
  const searchPills = [
    { label: "Explain 'The Tip-Badge Loop'", query: "Can you explain the 'Tip-Badge Loop' concept simply?" },
    { label: "How does it shorten life (Telomeres)?", query: "What medical evidence is cited regarding Telomere attrition and biological aging (+10 years)?" },
    { label: "What is 'Stigma-Plus' standard?", query: "How does the paper apply the Paul v. Davis 'stigma-plus' standard to distributed neighborhood exclusions?" },
    { label: "Define 'Coercive Control' in public spaces", query: "Explain the connection made between domestic coercive control and public-space distributed infrastructure attacks." }
  ];

  // Biological nodes metadata
  const bioNodes = [
    {
      id: "aggression",
      name: "1. Directed Social Aggression",
      short: "Multi-vector community targeting campaigns",
      icon: <ShieldAlert className="w-5 h-5 text-amber-600" />,
      detail: "Coordinated campaigns deploying atmospheric poisoning, citizen weaponization, and platform erasure. Designed to turn the target's physical and digital environment into an inescapable hostile apparatus.",
      citations: ["Stark (2007) - Coercive Control", "Cohen (1972) - Folk Devils"],
      metrics: ["5 operational stages", "Exclusion from 100% of local infrastructure nodes"]
    },
    {
      id: "hpa",
      name: "2. HPA-Axis Hyper-Activation",
      short: "Constant neurological combat readiness",
      icon: <Layers className="w-5 h-5 text-red-600" />,
      detail: "The nervous system perceives continuous, inescapable threat. Unlike standard acute stress, the Hypothalamic-Pituitary-Adrenal (HPA) axis is locked in permanent gear, pouring cortisol into the bloodstream.",
      citations: ["McEwen & Stellar (1993) - Allostatic Load model"],
      metrics: ["No baseline return to rest", "Severe wear across endocrine pathways"]
    },
    {
      id: "hippocampus",
      name: "3. Neurological Hippocampal Atrophy",
      short: "Physical dendritic cell retraction",
      icon: <Brain className="w-5 h-5 text-indigo-600" />,
      detail: "Continuous cortisol elevation acts as a localized neurotoxin, causing dendritic atrophy in the CA3 pyramidal neurons of the hippocampus. This explicitly destroys the subject's capacity to organize chronological narratives of their own victimization.",
      citations: ["Sapolsky (1996) - Glucocorticoid toxicity", "Arnsten (1998) - Prefrontal executive inhibition"],
      metrics: ["Atrophy of CA3 dendritic terminals", "Severe drop in sequential working memory"]
    },
    {
      id: "cardio",
      name: "4. Autonomic HRV Collapse",
      short: "Cardiac vagal brake inactivation",
      icon: <Activity className="w-5 h-5 text-rose-600" />,
      detail: "Autonomic system loses Heart Rate Variability (HRV), shifting to permanent sympathetic overdrive. The vagal brake fails, denying cardiac system recovery and creating extreme long-term vascular friction.",
      citations: ["Thayer & Lane (2000) - Neurovisceral integration", "Kivimaki et al. (2012) - Lancet Heart Study"],
      metrics: ["Sustained drop in HRV baseline", "Coronary heart disease risk matching active smoking"]
    },
    {
      id: "cytokines",
      name: "5. Chronic Cytokine Inflammation",
      short: "Immunological injury signaling cascade",
      icon: <Heart className="w-5 h-5 text-orange-600" />,
      detail: "The brain processes persistent social exclusion and isolation as a severe physical tissue wound. This triggers chronic upregulation of pro-inflammatory cytokines, causing neurochemical blocks and 'sickness behavior.'",
      citations: ["Cacioppo & Hawkley (2003) - Psychoneuroimmunology of isolation"],
      metrics: ["Upregulation of IL-6 and TNF-α cytokines", "Direct blockade of standard dopamine & serotonin synthesis"]
    },
    {
      id: "telomeres",
      name: "6. Cellular Telomere Shortening",
      short: "Irreversible bases destruction at chromosome caps",
      icon: <Hourglass className="w-5 h-5 text-emerald-600" />,
      detail: "Accelerated attrition of nucleotide caps (telomeres) that regulate cell division. Suppressed telomerase enzymes and systemic oxidative damage result in rapid cellular aging visible at the base-pair level.",
      citations: ["Epel et al. (2004) - Stress-induced telomere caps attrition"],
      metrics: ["Equivalent to +10 years of biological aging", "Drastic reduction in healthy lifecycle envelope"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f9f8f4] text-[#1a1a1a] font-sans flex flex-col antialiased selection:bg-orange-600/25 selection:text-[#1a1a1a] sm:border-[12px] md:border-[16px] border-[#e2e2da] transition-all" id="main-container">
      
      {/* Top Academic Header / Editorial Masthead */}
      <header className="border-b border-[#1a1a1a]/15 bg-[#f9f8f4] sticky top-0 z-40" id="primary-header">
        {/* Superior classification fine print */}
        <div className="w-full bg-[#e2e2da]/45 py-2 px-4 sm:px-8 border-b border-[#1a1a1a]/10 flex flex-col sm:flex-row justify-between items-center text-[9px] uppercase tracking-[0.25em] font-semibold text-black/50 font-mono text-center gap-1">
          <span>Medico-Legal Public Ledger</span>
          <span>Security Classification: UNRESTRICTED ARCHIVE</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-5 flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-4 lg:gap-6">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="text-lg sm:text-2xl font-serif italic text-[#1a1a1a]">Issue No. 84</span>
              <span className="h-px w-6 sm:w-10 bg-black/25"></span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-extrabold text-orange-600">SCHOLARLY EDITORIAL</span>
            </div>
            
            <div className="flex items-center gap-2.5 sm:gap-3 mt-1 sm:mt-1.5">
              <div className="p-1.5 bg-[#1a1a1a] text-[#f9f8f4] rounded-xs shrink-0">
                <Scale className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] sm:tracking-widest block font-mono text-black/50">RESEARCH MANUSCRIPT</span>
                <h1 className="text-sm sm:text-xl md:text-2xl font-serif font-black tracking-tight leading-tight text-[#1a1a1a]">Coordinated Directed Social Aggression</h1>
              </div>
            </div>
          </div>
          
          {/* Main Module Tabs on Mobile are swipeable horizontally; Desktop are standard layout */}
          <nav className="border-t lg:border-t-0 pt-3 lg:pt-0 border-[#1a1a1a]/10" id="navigation-tabs">
            <div className="flex flex-row overflow-x-auto whitespace-nowrap scrollbar-none pb-1 -mx-4 px-4 lg:mx-0 lg:px-0 gap-1.5" style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
              {[
                { id: "overview", label: "Executive Summary", icon: <BookOpen className="w-3.5 h-3.5" /> },
                { id: "pathway", label: "Physiological Cascade", icon: <Activity className="w-3.5 h-3.5" /> },
                { id: "constitutional", label: "Constitutional Harm", icon: <ShieldAlert className="w-3.5 h-3.5" /> },
                { id: "document", label: "Full Document", icon: <FileText className="w-3.5 h-3.5" /> },
                { id: "ama", label: "Ask the Paper", icon: <MessageSquare className="w-3.5 h-3.5" />, special: true }
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-2 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold transition-all flex items-center gap-1.5 border cursor-pointer shrink-0 ${
                      isActive 
                        ? "bg-[#1a1a1a] text-[#f9f8f4] border-[#1a1a1a]" 
                        : tab.special 
                          ? "text-orange-600 border-orange-600/35 hover:bg-orange-600/5 bg-[#f9f8f4]"
                          : "text-black/70 border-black/15 hover:border-black/50 hover:bg-black/5 bg-[#f9f8f4]"
                    }`}
                    id={`tab-${tab.id}-btn`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Container Area with Newsprint Canvas */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-5 sm:py-8" id="primary-content-wrapper">
        
        {/* Dynamic banner regarding model configuration */}
        {isFallbackActive && (
          <div className="mb-6 bg-amber-50 border border-amber-200 text-amber-900 px-4 py-3.5 rounded-xl shadow-xs text-xs flex items-start gap-2.5 animate-fadeIn" id="fallback-banner">
            <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold">Interactive AI Simulator Active:</span> Because a custom <code>GEMINI_API_KEY</code> has not been detected in your active workspace settings, the app is running in scholarly mock proxy mode. Answers return structured conceptual details about the paper. To unlock deep live reasoning, provide your Gemini API key in the AI Studio Settings menu.
            </div>
          </div>
        )}

        {/* Global Academic Manual selector (Highly Compact and Responsive) */}
        <div className="mb-6 sm:mb-8 border-2 sm:border-4 border-[#1a1a1a] bg-[#faf8f2] p-4 sm:p-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-xs" id="global-manual-selector">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#1a1a1a] text-[#f9f8f4] font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-widest leading-none select-none">
              MANUAL
            </div>
            <div>
              <div className="font-sans font-black text-[11px] sm:text-xs uppercase tracking-wider text-black">Active Academic Treatise</div>
              <p className="font-serif italic text-[10px] sm:text-[11px] text-black/60 pt-0.5 leading-snug">Toggle context folder to update indices, clinical profiles, and automated summaries.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:flex sm:flex-row gap-1.5" id="selector-buttons">
            {papers.map((p) => {
              const isSelected = p.id === selectedPaperId;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPaperId(p.id)}
                  className={`px-3 py-2.5 sm:px-4 sm:py-3 text-[9px] uppercase tracking-wider sm:tracking-widest font-mono font-bold transition-all border-2 cursor-pointer flex items-center justify-center gap-1.5 ${
                    isSelected 
                      ? "bg-orange-600 text-white border-orange-600 shadow-[2px_2px_0px_rgba(26,26,26,1)] sm:shadow-[3px_3px_0px_rgba(26,26,26,1)]" 
                      : "bg-white text-black border-[#1a1a1a]/15 hover:border-[#1a1a1a]/50 hover:bg-[#1a1a1a]/5"
                  }`}
                  id={`select-paper-${p.id}`}
                >
                  <FileText className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{p.id === "physiological-constitutional" ? "Doc I: Physiological & Constitutional" : "Doc II: Mosaic Theory Convergence"}</span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          
          {/* TAB 1: EXECUTIVE BENTO OVERVIEW */}
          {activeTab === "overview" && (
            <motion.div
              key="overview-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
              id="overview-panel"
            >
              {/* Main abstract overview hero - Editorial Broadsheet style */}
              <div className="bg-white border-4 border-[#1a1a1a] p-6 sm:p-10 relative overflow-hidden" id="hero-overview">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#e2e2da] text-black font-mono text-[9px] font-bold flex items-center justify-center border-b border-l border-black rotate-45 translate-x-12 -translate-y-12 select-none">
                  LEDGER
                </div>
                <div className="max-w-4xl relative z-10 space-y-4">
                  <span className="text-xs uppercase tracking-[0.4em] font-bold text-orange-600 block">
                    MANUSCRIPT OVERVIEW
                  </span>
                  
                  <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight leading-[1.1] text-[#1a1a1a]">
                    {selectedPaper.title.toUpperCase()}
                  </h2>
                  
                  <p className="text-black/80 text-base sm:text-lg leading-relaxed font-serif italic max-w-4xl border-l-4 border-orange-600 pl-5 py-2">
                    {selectedPaper.id === "physiological-constitutional" 
                      ? "Coordinated Directed Social Aggression (DSA) is not simple social conflict. It represents a form of bio-social warfare where a citizen is subjected to continuous targeting, causing severe measurable damage at the base-pair cellular level and systematic deprivation of core constitutional rights."
                      : "The mosaic theory converts the state national security privilege shield into an individual privacy protection sword. An aggregate sequence of seemingly innocuous community alerts, business service denials, and tip dispatches constitutes a system of coordinated directed social aggression."}
                  </p>
                  
                  {/* Author / Metadata Footer */}
                  <div className="pt-5 border-t-2 border-[#1a1a1a]/15 flex flex-wrap gap-x-8 gap-y-3 text-xs font-mono text-black/70">
                    <div><span className="font-bold text-black/50 uppercase">FORMAT:</span> Medical-Legal Synthesis</div>
                    <div><span className="font-bold text-black/50 uppercase">AUTHORS:</span> {selectedPaper.metadata.author}</div>
                    <div><span className="font-bold text-black/50 uppercase">INQUIRIES:</span> <a href={`mailto:${selectedPaper.metadata.contact}`} className="text-orange-600 font-semibold underline hover:text-orange-700 transition-colors">{selectedPaper.metadata.contact}</a></div>
                    <div className="ml-auto text-[10px] uppercase font-bold tracking-widest text-[#1a1a1a]/40 bg-[#e2e2da]/40 px-2 py-0.5">UNCLASSIFIED INTEL</div>
                  </div>
                </div>
              </div>

              {/* Bento Grid layout summarizing the key elements - Broadside column formatting */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="bento-summary-grid">
                
                {/* Visualizer card link - Ivory Newsprint col */}
                <div className="col-span-1 md:col-span-2 bg-[#f1efe9]/50 border-2 border-[#1a1a1a] p-6 relative flex flex-col justify-between" id="card-bento-physiological">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#1a1a1a]/10 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-[#1a1a1a] text-[#f9f8f4] rounded-none">
                          <Activity className="w-5 h-5 text-orange-600" />
                        </div>
                        <span className="text-xs font-serif italic text-black/50">Clinical Diagnostic</span>
                      </div>
                      <span className="text-[9px] uppercase tracking-widest font-bold bg-[#1a1a1a] text-white px-2 py-0.5">SECTION I PROFILE</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1a1a1a] tracking-tight">The 5 Spheres of Physiological Harm</h3>
                      <p className="text-xs leading-relaxed text-black/80 font-sans">
                        Sustained Directed Social Aggression triggers a profound neurobiological cascade. The HPA Axis gets locked in hyper-activation, elevating cortisol. This creates structural brain changes, decreases heart rate variability, spikes immunological inflammatory biomarkers (IL-6, TNF-α), and accelerates base-pair telomere degradation.
                      </p>
                    </div>
                    
                    {/* Key Metrics Quick Look */}
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-dashed border-[#1a1a1a]/20 text-center">
                      <div className="bg-white/75 p-2.5 border border-[#1a1a1a]/10">
                        <span className="block text-2xl font-bold font-serif text-[#1a1a1a] tracking-tight">-10y</span>
                        <span className="text-[9px] text-[#1a1a1a]/60 font-bold font-mono uppercase tracking-wider">Cell Aging</span>
                      </div>
                      <div className="bg-white/75 p-2.5 border border-[#1a1a1a]/10">
                        <span className="block text-2xl font-bold font-serif text-orange-600 tracking-tight">CA3</span>
                        <span className="text-[9px] text-[#1a1a1a]/60 font-bold font-mono uppercase tracking-wider">Atrophy</span>
                      </div>
                      <div className="bg-[#1a1a1a] p-2.5">
                        <span className="block text-2xl font-bold font-serif text-white tracking-tight">ERR</span>
                        <span className="text-[9px] text-white/60 font-bold font-mono uppercase tracking-wider">Vagal Brake</span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setActiveTab("pathway")}
                    className="mt-6 px-5 py-3 bg-[#1a1a1a] text-white text-[10px] uppercase tracking-widest font-bold hover:bg-orange-600 transition-colors self-start cursor-pointer flex items-center gap-2"
                  >
                    <span>Analyze Physiological Cascade</span> 
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Legal Action Link - Stark contrasting page block */}
                <div className="bg-white border-2 border-[#1a1a1a] p-6 flex flex-col justify-between" id="card-bento-legal">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#1a1a1a]/10 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-orange-600 text-white rounded-none">
                          <Scale className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-serif italic text-black/50">Constitutional Remedy</span>
                      </div>
                      <span className="text-[9px] uppercase tracking-widest font-bold bg-orange-600 text-white px-2 py-0.5">FEDERAL LAW</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1a1a1a] tracking-tight">Constitutional Actions</h3>
                      <p className="text-xs leading-relaxed text-black/80 font-sans">
                        Exclusion from communal life is mapped to actionable constitutional injuries. Aggressive litigation under <strong>42 U.S.C. § 1983</strong> targets the <strong>Tip-Badge Loop</strong> as joint private-public state actions.
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-dashed border-[#1a1a1a]/25 text-xs font-mono text-[#1a1a1a]/90">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-600" />
                        <span className="text-[10px] font-bold">1st Am: Prior Restraints</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-600" />
                        <span className="text-[10px] font-bold">4th Am: Mosaic Surveillance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-600" />
                        <span className="text-[10px] font-bold">14th Am: Liberty Deprivations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-600" />
                        <span className="text-[10px] font-bold">ADA: System Accommodations</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setActiveTab("constitutional")}
                    className="mt-6 px-5 py-3 bg-[#1a1a1a] text-white text-[10px] uppercase tracking-widest font-bold hover:bg-orange-600 transition-colors self-start cursor-pointer flex items-center gap-2"
                  >
                    <span>Examine Constitutional Core</span> 
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

              {/* The Abstract Section / Deep-Dive Accordions - Ledger Document Layout */}
              <div className="bg-white border-2 border-[#1a1a1a] p-6 sm:p-9 space-y-6" id="bento-deep-dive">
                <div className="border-b-2 border-[#1a1a1a] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-orange-600 font-bold block">DOCUMENT SOURCE</span>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-black" />
                      <h3 className="text-xl sm:text-2xl font-serif font-black text-[#1a1a1a] tracking-tight">Abstract & Core Methodology</h3>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={expandAllSections} 
                      className="px-3 py-1.5 text-[9px] uppercase tracking-wider font-mono font-bold bg-[#f1efe9] hover:bg-[#e2e2da] text-black border border-black/20 transition-colors cursor-pointer"
                    >
                      [ Expand All ]
                    </button>
                    <button 
                      onClick={collapseAllSections} 
                      className="px-3 py-1.5 text-[9px] uppercase tracking-wider font-mono font-bold bg-[#f1efe9] hover:bg-[#e2e2da] text-black border border-black/20 transition-colors cursor-pointer"
                    >
                      [ Collapse All ]
                    </button>
                  </div>
                </div>

                <div className="prose max-w-none text-black/85 text-sm leading-relaxed" id="paper-overview-sections">
                  <p className="font-serif italic font-medium text-black/80 text-base border-l-4 border-orange-600 pl-4 py-1.5 mb-6 bg-[#f1efe9]/30">
                    "{selectedPaper.metadata.abstract}"
                  </p>

                  <div className="space-y-4">
                    {selectedPaper.sections.map((section) => {
                      const isExpanded = !!expandedSections[section.id];
                      return (
                        <div key={section.id} className="border border-[#1a1a1a]/15 rounded-none overflow-hidden transition-all duration-200">
                          {/* Toggle Header */}
                          <button
                            onClick={() => toggleSection(section.id)}
                            className="w-full flex items-center justify-between p-4 bg-[#f1efe9]/25 hover:bg-[#f1efe9]/50 text-left transition-colors cursor-pointer border-b border-[#1a1a1a]/5"
                          >
                            <div className="pr-4 space-y-1">
                              <h4 className="font-serif font-bold text-[#1a1a1a] text-base tracking-tight flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-orange-600 rounded-none shrink-0" />
                                {section.title}
                              </h4>
                              <p className="text-[10px] uppercase font-bold tracking-widest text-[#1a1a1a]/50 font-mono">{section.tagline}</p>
                            </div>
                            <div className="p-1 border border-[#1a1a1a]/10 bg-white">
                              {isExpanded ? (
                                <ChevronDown className="w-3.5 h-3.5 text-black" />
                              ) : (
                                <ChevronRight className="w-3.5 h-3.5 text-black" />
                              )}
                            </div>
                          </button>

                          {/* Content Drawer */}
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.18 }}
                                className="border-t border-[#1a1a1a]/15 bg-[#f9f8f4]/35"
                              >
                                <div className="p-4 sm:p-6 space-y-6">
                                  {/* Section core text */}
                                  <div className="text-xs sm:text-sm text-black/80 leading-relaxed font-sans space-y-3 whitespace-pre-line">
                                    {section.content}
                                  </div>

                                  {/* Dynamic Metric Grid for Visual Fast Reading */}
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-5 border-t border-dashed border-[#1a1a1a]/25">
                                    {section.metrics.map((met, idx) => (
                                      <div key={idx} className="bg-white p-3 border border-[#1a1a1a]/15 flex flex-col justify-between">
                                        <div className="space-y-1">
                                          <span className="text-[9px] uppercase tracking-wider font-mono font-bold text-orange-600 block">{met.label}</span>
                                          <span className="block text-xs sm:text-sm font-serif font-semibold text-black/90 leading-tight">{met.value}</span>
                                        </div>
                                        <p className="text-[11px] text-black/60 mt-2 font-serif italic leading-snug">{met.desc}</p>
                                      </div>
                                    ))}
                                  </div>

                                  {/* Citation List Footer */}
                                  <div className="flex flex-wrap gap-2 items-center justify-between text-[10px] font-mono text-black/55 pt-3 border-t border-[#1a1a1a]/10 bg-[#e2e2da]/20 p-2">
                                    <div className="flex items-center gap-1.5">
                                      <BookOpen className="w-3.5 h-3.5 text-orange-600" />
                                      <span>DOCUMENT ARCHIVE INDEX:</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 font-bold text-black/75">
                                      {section.citations.map((cit, idx) => (
                                        <span key={idx} className="bg-white border border-[#1a1a1a]/15 px-2 py-0.5 text-[9px]">{cit}</span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* The 5 Operational Stages Breakdown - Public Diagnostic Dossier */}
              <div className="bg-[#1a1a1a] text-[#f9f8f4] p-6 sm:p-9 space-y-6" id="bento-operational-stages">
                <div className="border-b border-[#f9f8f4]/20 pb-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-600 font-mono">THE TACTICAL APPARATUS</p>
                  <h3 className="text-xl sm:text-2xl font-serif font-black tracking-tight text-white mt-1">The 5 Operational Stages of Coordinated DSA</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3" id="stages-grid">
                  {[
                    { step: "01", title: "Atmospheric Poisoning", desc: "Preemptive reputation contamination. Sowing toxic narratives into the local social and professional background before direct interactions begin to isolate the subject." },
                    { step: "02", title: "Civilian Weaponization", desc: "Co-opting civic proxies. Recruiting neighbors, business staff, or administrators as surveillance scouts under the guise of community vigilance." },
                    { step: "03", title: "Badge Play & Loops", desc: "Weaponizing dispatch response. Submitting fabricated or highly exaggerated 'welfare/danger' tips to loop law enforcement into acting as civilian harassment proxies." },
                    { step: "04", title: "The Entrapment Loop", desc: "Engineered crisis provocations. Generating intense, deniable local stress specifically designed to elicit a natural defense, which is then recorded as 'instability.'" },
                    { step: "05", title: "Digital Erasure", desc: "Narrative monopoly. Coordinating false mass-reporting campaigns on publication sites or media platforms to suppress documentation and counter-evidence." }
                  ].map((stage, i) => (
                    <div key={i} className="bg-transparent border border-[#f9f8f4]/15 p-4.5 space-y-3 flex flex-col justify-between hover:border-orange-600 transition-colors">
                      <div className="space-y-2">
                        <span className="text-xl font-bold font-serif text-orange-600">{stage.step}</span>
                        <h4 className="font-serif font-bold text-white text-sm tracking-tight leading-snug">{stage.title}</h4>
                        <p className="text-[11px] text-white/70 leading-relaxed font-sans">{stage.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: PHYSIOLOGICAL CASCADE MAP */}
          {activeTab === "pathway" && (
            <motion.div
              key="pathway-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
              id="pathway-panel"
            >
              {/* Clinical Header - Broadside Document Sheet */}
              <div className="bg-white border-2 border-[#1a1a1a] p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6" id="pathway-lead">
                <div className="space-y-1.5 max-w-2xl">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-orange-600 font-mono">CLINICAL STRESS VECTOR STUDY</span>
                  <h2 className="text-xl sm:text-3xl font-serif font-black text-black tracking-tight">The Neurobiological Stress Transduction Pathway</h2>
                  <p className="text-xs text-black/75 leading-relaxed font-sans">
                    How coordinated campaign surveillance triggers actual permanent somatic damage at the cellular level. Click each somatic node below to load specific clinical metrics, citations, and structural symptoms from the document archive.
                  </p>
                </div>
                <div className="flex items-center gap-2.5 bg-[#f1efe9] border border-black/15 p-3 font-mono text-[10px] text-black/70 max-w-sm">
                  <Clock className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Sustained overdrive bypasses standard physiological recovery limits.</span>
                </div>
              </div>

              {/* Grid with Interactive Flow and Panel detail */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="pathway-grid">
                
                {/* Horizontal / Vertical Node sequence (Left Column) */}
                <div className="lg:col-span-5 flex flex-col gap-3" id="flow-nodes">
                  {bioNodes.map((node) => {
                    const isSelected = selectedBioNode === node.id;
                    return (
                      <div key={node.id} className="flex flex-col">
                        <button
                          onClick={() => setSelectedBioNode(node.id)}
                          className={`w-full text-left p-4 rounded-none border transition-all duration-200 cursor-pointer ${
                            isSelected 
                              ? "bg-white border-2 border-black lg:shadow-[4px_4px_0px_0px_#1a1a1a] lg:scale-[1.01]" 
                              : "bg-white/70 hover:bg-white border-[#1a1a1a]/15 hover:border-black/50"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 transition-colors border shrink-0 ${
                                isSelected 
                                  ? "bg-black text-white border-black" 
                                  : "bg-[#f1efe9] text-black border-[#1a1a1a]/15"
                              }`}>
                                {node.icon}
                              </div>
                              <div>
                                <h3 className="font-serif font-bold text-sm text-black/90 tracking-tight">{node.name}</h3>
                                <p className="text-[10px] uppercase text-black/50 font-mono tracking-wider font-semibold mt-0.5">{node.short}</p>
                              </div>
                            </div>
                            {/* Mobile-only toggle hint indicator icon */}
                            <div className="lg:hidden p-1">
                              {isSelected ? (
                                <ChevronDown className="w-4 h-4 text-orange-600" />
                              ) : (
                                <ChevronRight className="w-4 h-4 text-black/45" />
                              )}
                            </div>
                          </div>
                        </button>

                        {/* Mobile-Only In-line detail drawer! Expanded if this node is selected. */}
                        <div className="lg:hidden">
                          <AnimatePresence initial={false}>
                            {isSelected && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.18 }}
                                className="border-x border-b border-black bg-white p-4 space-y-4 -mt-px"
                              >
                                <div className="space-y-2">
                                  <span className="text-[8px] font-mono uppercase tracking-widest font-extrabold text-orange-600 bg-[#f1efe9] px-2 py-0.5 inline-block">SELECTED DIAGNOSTIC NODE</span>
                                  <h4 className="text-sm font-serif font-bold text-black">{node.name}</h4>
                                  <p className="text-xs font-serif italic text-black/80 leading-relaxed border-l-2 border-orange-600 pl-3 py-1 bg-[#f1efe9]/30">
                                    "{node.detail}"
                                  </p>
                                </div>

                                <div className="space-y-2 pt-2 border-t border-dashed border-[#1a1a1a]/15">
                                  <span className="text-[9px] font-mono uppercase tracking-widest font-bold text-[#1a1a1a]/55 block">Somatic Indicators & Measurements</span>
                                  <div className="grid grid-cols-1 gap-1.5">
                                    {node.metrics.map((m, idx) => (
                                      <div key={idx} className="bg-[#f1efe9]/50 border border-black/10 p-2 text-xs font-serif font-medium text-black/90">
                                        <span className="inline-block w-1.5 h-1.5 bg-orange-600 mr-2" />
                                        {m}
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="space-y-2 pt-2 border-t border-dashed border-[#1a1a1a]/15">
                                  <span className="text-[9px] font-mono uppercase tracking-widest font-bold text-[#1a1a1a]/55 block">Key Peer-Reviewed Document Cross-References</span>
                                  <div className="flex flex-wrap gap-1.5">
                                    {node.citations.map((cit, idx) => (
                                      <span key={idx} className="bg-[#f1efe9] border border-black/15 font-mono text-[8px] font-bold px-1.5 py-0.5">
                                        📚 {cit}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Node Detail Reveal card (Right Column - Desktop Only) */}
                <div className="hidden lg:flex lg:col-span-7 bg-white border-2 border-black p-6 sm:p-8 flex-col justify-between min-h-[460px] relative overflow-hidden" id="node-detailed-panel">
                  {/* Decorative faint background watermark */}
                  <div className="absolute -bottom-12 -right-12 text-[#1a1a1a]/[0.03] pointer-events-none uppercase font-serif font-black text-8xl select-none leading-none">
                    BIOMETRICS
                  </div>

                  <AnimatePresence mode="wait">
                    {(() => {
                      const activeNode = bioNodes.find(n => n.id === selectedBioNode);
                      if (!activeNode) return null;
                      return (
                        <motion.div
                          key={activeNode.id}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -12 }}
                          transition={{ duration: 0.15 }}
                          className="space-y-6 relative z-10"
                        >
                          <div className="flex items-center gap-3 border-b border-[#1a1a1a]/10 pb-4">
                            <div className="p-3 bg-[#1a1a1a] text-white">
                              {activeNode.icon}
                            </div>
                            <div>
                              <span className="text-[9px] font-mono uppercase tracking-widest font-extrabold text-orange-600 bg-[#f1efe9] px-2 py-0.5">SELECTED DIAGNOSTIC NODE</span>
                              <h3 className="text-xl font-serif font-black text-black/95 tracking-tight">{activeNode.name}</h3>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <h4 className="text-[10px] uppercase tracking-widest text-[#1a1a1a]/55 font-mono font-bold">Biomedical Pathway & Mechanism</h4>
                            <p className="text-sm font-serif leading-relaxed text-black/85 max-w-2xl italic">
                              "{activeNode.detail}"
                            </p>
                          </div>

                          {/* Key clinical metrics inside detail card */}
                          <div className="space-y-3 pt-4 border-t border-dashed border-[#1a1a1a]/20">
                            <h4 className="text-[10px] uppercase tracking-widest text-[#1a1a1a]/55 font-mono font-bold">Somatic Indicators & Measurements</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {activeNode.metrics.map((m, idx) => (
                                <div key={idx} className="bg-[#f1efe9]/50 border border-black/10 p-3">
                                  <span className="inline-block w-1.5 h-1.5 bg-orange-600 mr-2" />
                                  <span className="text-xs font-serif font-semibold text-black/90 tracking-tight">{m}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Associated paper reference citation */}
                          <div className="space-y-2 pt-4 border-t border-dashed border-[#1a1a1a]/20">
                            <h4 className="text-[10px] uppercase tracking-widest text-[#1a1a1a]/55 font-mono font-bold">Key Peer-Reviewed Document Cross-References</h4>
                            <div className="flex flex-wrap gap-2">
                              {activeNode.citations.map((cit, idx) => (
                                <span key={idx} className="bg-[#f1efe9] hover:bg-[#e2e2da] text-black border border-black/15 font-mono text-[9px] font-bold px-2 py-1 transition-colors">
                                  📚 {cit}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })()}
                  </AnimatePresence>

                  <div className="mt-8 pt-4 border-t border-[#1a1a1a]/10 flex items-center justify-between text-xs text-black/40" id="cascade-citations-guide">
                    <span className="font-mono uppercase text-[9px] tracking-widest">SOURCE: MEDICAL SUMMARY I</span>
                    <button 
                      onClick={() => setActiveTab("document")}
                      className="text-black hover:text-orange-600 font-bold flex items-center gap-1 text-[11px] font-mono tracking-tight cursor-pointer"
                    >
                      [ READ FULL LITIGATION TEXT → ]
                    </button>
                  </div>
                </div>

              </div>

              {/* Sickness Behavior & Pathologization Warning box - Broadsheet Warning element */}
              <div className="bg-[#f1efe9] border-l-4 border-orange-600 p-6 flex flex-col md:flex-row items-start gap-4" id="clinical-warning-box">
                <AlertTriangle className="w-5 h-5 text-orange-600 mt-1 shrink-0" />
                <div className="space-y-1 max-w-4xl">
                  <h4 className="text-sm font-serif font-extrabold uppercase tracking-wide text-black flex items-center gap-1.5">
                    Medico-Legal Directive: Diagnostic Inversion Risk
                  </h4>
                  <p className="text-xs text-black/80 leading-relaxed font-serif">
                    Traditional psychiatry diagnoses <strong>hypervigilance</strong> as an internal deficit—unwarranted threat detection. In DSA campaigns, the threat is real, continuous, and documented. The target's hypervigilance is an accurate sensory calibration. The campaign architects exploit this, framing correct environmental assessments as mental pathology to lock the isolation loop. Clinicians hold an obligation not to participate in this pathologization loop.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: CONSTITUTIONAL HARMS */}
          {activeTab === "constitutional" && (
            <motion.div
              key="const-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
              id="constitutional-panel"
            >
              {/* Constitutional Lead Banner - Ledger Entry */}
              <div className="bg-white border-2 border-[#1a1a1a] p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4" id="const-banner">
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-orange-600 font-mono">CIVIL LIBERTIES DEFENSE CASEFILE</span>
                  <h2 className="text-xl sm:text-3xl font-serif font-black text-black tracking-tight">Civil Liberties Deprivation under Distributed Social Warfare</h2>
                  <p className="text-xs text-black/75 leading-relaxed font-sans max-w-4xl">
                    Social aggression coordinates state responders through fabricated dispatch loops, incurring federal liability action under <strong>42 U.S.C. § 1983</strong>.
                  </p>
                </div>
              </div>

              {/* Detailed Selector Tabs - Broadsheet Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" id="constitutional-matrix-wrapper">
                
                {/* Visual selectors sidebar - Desktop List / Mobile Accordion Hybrid */}
                <div className="lg:col-span-1 flex flex-col gap-3.5 font-sans" id="const-tabs-list">
                  {[
                    { id: "14th", label: "14th Amendment", sub: "Stigma-Plus Liberty Interest", marker: "Paul v. Davis standard" },
                    { id: "1st", label: "1st Amendment", sub: "The Digitally-Applied Chilling Effect", marker: "Algorithmic erasure pipeline" },
                    { id: "4th", label: "4th Amendment", sub: "Warrantless Mosaic Surveillance", marker: "Carpenter track aggregation" },
                    { id: "ada", label: "ADA Protections", sub: "Regarded-As & actual disability", marker: "Title II accommodation locks" }
                  ].map((ct) => {
                    const isSelected = selectedConstTab === ct.id;
                    return (
                      <div key={ct.id} className="flex flex-col text-[#1a1a1a]">
                        <button
                          onClick={() => setSelectedConstTab(ct.id as any)}
                          className={`text-left p-4 rounded-none border transition-all duration-150 cursor-pointer flex items-center justify-between lg:block ${
                            isSelected 
                              ? "bg-[#1a1a1a] text-[#f9f8f4] border-2 border-[#1a1a1a] lg:shadow-[4px_4px_0px_0px_#f9f8f4,4px_4px_0px_1px_#1a1a1a]" 
                              : "bg-white text-black/80 border-[#1a1a1a]/15 hover:border-black/50 hover:bg-[#f1efe9]/30"
                          }`}
                        >
                          <div>
                            <span className={`block text-[9px] font-mono tracking-wider uppercase font-bold ${isSelected ? "text-orange-400" : "text-orange-600"}`}>
                              {ct.marker}
                            </span>
                            <h4 className="font-serif font-bold text-sm sm:text-base mt-1">{ct.label}</h4>
                            <p className={`text-[10px] leading-snug mt-1.5 font-sans ${isSelected ? "text-white/70" : "text-black/60"}`}>
                              {ct.sub}
                            </p>
                          </div>
                          {/* Mobile Toggle Assist Icon */}
                          <div className="lg:hidden">
                            {isSelected ? (
                              <ChevronDown className="w-5 h-5 text-orange-400 shrink-0" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-black/30 shrink-0" />
                            )}
                          </div>
                        </button>

                        {/* Mobile Accordion Drawer (Expanded inline) */}
                        <div className="lg:hidden">
                          <AnimatePresence initial={false}>
                            {isSelected && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.18 }}
                                className="border-x border-b border-black bg-white p-4 sm:p-5 space-y-4 -mt-px text-black"
                              >
                                {ct.id === "14th" && (
                                  <div className="space-y-4">
                                    <div className="flex items-center gap-2 border-b border-black/10 pb-2">
                                      <Scale className="w-4 h-4 text-orange-600" />
                                      <h5 className="font-serif font-extrabold text-sm text-black">Fourteenth Amendment: Stigma-Plus & Joint State Action</h5>
                                    </div>
                                    <p className="text-xs font-serif leading-relaxed text-black/85">
                                      Under <strong>Paul v. Davis (1976)</strong>, damage to reputation alone is not constitutionally protected. However, if the reputational damage is combined with a tangible loss of access or liberty, a cognizable <strong>liberty interest</strong> is immediately triggered under the Stigma-Plus doctrine.
                                    </p>
                                    <p className="text-xs font-serif leading-relaxed text-black/85">
                                      DSA campaigns satisfy this criteria via community-distributed blockade. The exhumed historical record is weaponized to systematically coerce restaurants, coffee shops (the target's living room), and libraries (the target's office) to expel the target.
                                    </p>
                                    <div className="bg-[#f1efe9]/70 p-3 border border-[#1a1a1a]/15 text-[11px] space-y-1">
                                      <span className="font-mono uppercase font-bold text-orange-600 block">The Joint State Action Lever: Adickes v. S.H. Kress</span>
                                      <p className="text-black/75 leading-relaxed font-sans">
                                        Under the <strong>Adickes (1970) joint action doctrine</strong>, private citizens can be held liable under <strong>42 U.S.C. § 1983</strong> if they operate as 'willful participants in joint activity' with state officials. When private campaign actors file manufactured dispatch complaints and law enforcement responds repeatedly without investigating, joint-action threshold is reached.
                                      </p>
                                    </div>
                                  </div>
                                )}

                                {ct.id === "1st" && (
                                  <div className="space-y-4">
                                    <div className="flex items-center gap-2 border-b border-black/10 pb-2">
                                      <Globe className="w-4 h-4 text-orange-600" />
                                      <h5 className="font-serif font-extrabold text-sm text-black">First Amendment: Coordinated Digital Platform Erasure</h5>
                                    </div>
                                    <p className="text-xs font-serif leading-relaxed text-black/85">
                                      The absolute core of First Amendment safety lies in the protection of counter-narrative capabilities. The target must have the functional infrastructure to document and publish truth. 
                                    </p>
                                    <p className="text-xs font-serif leading-relaxed text-black/85">
                                      In Stage Five of DSA, the threat is <strong>digital erasure</strong>. By routing thousands of automated or coordinated false reports to hosting algorithms, the target's publications get blocked. Under the <strong>chilling effect doctrine (Lamont, 1965)</strong>, official or quasi-official actions that reduce the practical ability to speak violate speech guarantees as prior-restraint.
                                    </p>
                                    <div className="grid grid-cols-1 gap-2.5">
                                      <div className="bg-[#f1efe9]/55 p-3.5 border border-black/15 text-[11px]">
                                        <span className="text-[10px] tracking-wider uppercase font-mono font-bold text-orange-600 block">PRACTICAL RESTRAINT</span>
                                        <p className="text-black/70 mt-1 font-serif leading-relaxed">Platform algorithmic capture restricts access to publication pipelines during acute targeting cycles.</p>
                                      </div>
                                      <div className="bg-[#f1efe9]/55 p-3.5 border border-black/15 text-[11px]">
                                        <span className="text-[10px] tracking-wider uppercase font-mono font-bold text-orange-600 block">SPEECH INFRASTRUCTURE</span>
                                        <p className="text-black/70 mt-1 font-serif leading-relaxed">First Amendment requires protectability of basic interfaces: electrical, optical, and logistical.</p>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {ct.id === "4th" && (
                                  <div className="space-y-4">
                                    <div className="flex items-center gap-2 border-b border-black/10 pb-2">
                                      <ShieldAlert className="w-4 h-4 text-orange-600" />
                                      <h5 className="font-serif font-extrabold text-sm text-black">Fourth Amendment: Mosaic Peer Surveillance Systems</h5>
                                    </div>
                                    <p className="text-xs font-serif leading-relaxed text-black/85">
                                      The Fourth Amendment protects against warrantless spatial telemetry tracking of citizens. <strong>United States v. Jones (2012)</strong> and <strong>Carpenter v. United States (2018)</strong> established the <strong>Mosaic Theory of Surveillance</strong>.
                                    </p>
                                    <p className="text-xs font-serif leading-relaxed text-black/85">
                                      A coordinated campaign where local civilian lookouts (recruited baristas, landlords, managers) input entries and exits, compile timestamp logs, and coordinate via real-time alerts constitutes an unconstitutional warrantless surveillance apparatus. Bypassing Fourth Amendment warrant obligations using crowd-sourced civilian conduits violates privacy protections.
                                    </p>
                                  </div>
                                )}

                                {ct.id === "ada" && (
                                  <div className="space-y-4">
                                    <div className="flex items-center gap-2 border-b border-black/10 pb-2">
                                      <Cpu className="w-4 h-4 text-orange-600" />
                                      <h5 className="font-serif font-extrabold text-sm text-black">The Americans with Disabilities Act: Statutory Accommodation</h5>
                                    </div>
                                    <p className="text-xs font-serif leading-relaxed text-black/85">
                                      The ADA contains two distinct avenues of application to Directed Social Aggression: the <strong>'Regarded As'</strong> prong and the <strong>'Actual Disability'</strong> category.
                                    </p>
                                    <p className="text-xs font-serif leading-relaxed text-black/85">
                                      <strong>'Regarded As' Protection:</strong> By continually framing the subject's actions as evidence of acute mental instabilty, the campaign network regard the subject as disabled, triggering immediate ADA antidiscrimination constraints.
                                    </p>
                                    <p className="text-xs font-serif leading-relaxed text-black/85">
                                      <strong>Actual Biological Disability:</strong> Cortisol-induced hippocampal CA3 atrophy and prefrontal executive inhibition represent clinically verifiable, mechanical cognitive impairments. Under <strong>Title II of the ADA</strong>, public state actors (including responding police officers) have a legal obligation to adjust standard protocols to accommodate this neurobiological fatigue rather than using standard arrest/eviction shortcuts.
                                    </p>
                                  </div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Sub-panel showing selected card metrics (Desktop Only) */}
                <div className="hidden lg:flex lg:col-span-3 bg-white border-2 border-black p-6 sm:p-9 rounded-none flex-col justify-between min-h-[440px]" id="const-narrative-panel">
                  <AnimatePresence mode="wait">
                    {selectedConstTab === "14th" && (
                      <motion.div
                        key="14th-const"
                        initial={{ opacity: 0, scale: 0.99 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.99 }}
                        transition={{ duration: 0.12 }}
                        className="space-y-6"
                      >
                        <div className="border-b border-[#1a1a1a]/15 pb-3 flex items-center gap-2.5">
                          <Scale className="w-5 h-5 text-orange-600" />
                          <h4 className="font-serif font-extrabold text-[#1a1a1a] text-lg sm:text-xl">Fourteenth Amendment: Stigma-Plus & Joint State Action</h4>
                        </div>
                        <p className="text-sm font-serif text-black/85 leading-relaxed">
                          Under <strong>Paul v. Davis (1976)</strong>, damage to reputation alone is not constitutionally protected. However, if the reputational damage is combined with a tangible loss of access or liberty, a cognizable <strong>liberty interest</strong> is immediately triggered under the Stigma-Plus doctrine.
                        </p>
                        <p className="text-sm font-serif text-black/85 leading-relaxed">
                          DSA campaigns satisfy this criteria via community-distributed blockade. The exhumed historical record is weaponized to systematically coerce restaurants, coffee shops (the target's living room), and libraries (the target's office) to expel the target.
                        </p>
                        <div className="bg-[#f1efe9]/70 p-4 border border-[#1a1a1a]/15 space-y-2">
                          <span className="text-[10px] font-mono uppercase tracking-wider font-extrabold text-orange-600 block">The Joint State Action Lever: Adickes v. S.H. Kress</span>
                          <p className="text-xs text-black/75 leading-relaxed font-sans">
                            Under the <strong>Adickes (1970) joint action doctrine</strong>, private citizens can be held liable under <strong>42 U.S.C. § 1983</strong> if they operate as 'willful participants in joint activity' with state officials. When private campaign actors file manufactured dispatch complaints and law enforcement responds repeatedly without investigating the systematic instigation, the joint-action threshold is reached through Tacit Understanding.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {selectedConstTab === "1st" && (
                      <motion.div
                        key="1st-const"
                        initial={{ opacity: 0, scale: 0.99 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.99 }}
                        transition={{ duration: 0.12 }}
                        className="space-y-6"
                      >
                        <div className="border-b border-[#1a1a1a]/15 pb-3 flex items-center gap-2.5">
                          <Globe className="w-5 h-5 text-orange-600" />
                          <h4 className="font-serif font-extrabold text-[#1a1a1a] text-lg sm:text-xl">First Amendment: Coordinated Digital Platform Erasure</h4>
                        </div>
                        <p className="text-sm font-serif text-black/85 leading-relaxed">
                          The absolute core of First Amendment safety lies in the protection of counter-narrative capabilities. The target must have the functional infrastructure to document and publish truth. 
                        </p>
                        <p className="text-sm font-serif text-black/85 leading-relaxed">
                          In Stage Five of DSA, the threat is <strong>digital erasure</strong>. By routing thousands of automated or coordinated false reports to hosting algorithms, the target's publications get blocked. Under the <strong>chilling effect doctrine (Lamont, 1965)</strong>, official or quasi-official actions that reduce the practical ability to speak violate speech guarantees as prior-restraint.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#1a1a1a]/10">
                          <div className="bg-[#f1efe9]/55 p-3.5 border border-[#1a1a1a]/15">
                            <span className="text-[10px] tracking-wider uppercase font-mono font-bold text-orange-600">PRACTICAL RESTRAINT</span>
                            <p className="text-xs text-black/70 mt-1 font-serif leading-relaxed">Platform algorithmic capture restricts access to publication pipelines during acute targeting cycles.</p>
                          </div>
                          <div className="bg-[#f1efe9]/55 p-3.5 border border-[#1a1a1a]/15">
                            <span className="text-[10px] tracking-wider uppercase font-mono font-bold text-orange-600">SPEECH INFRASTRUCTURE</span>
                            <p className="text-xs text-black/70 mt-1 font-serif leading-relaxed">First Amendment requires protectability of basic interfaces: electrical, optical, and logistical.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {selectedConstTab === "4th" && (
                      <motion.div
                        key="4th-const"
                        initial={{ opacity: 0, scale: 0.99 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.99 }}
                        transition={{ duration: 0.12 }}
                        className="space-y-6"
                      >
                        <div className="border-b border-[#1a1a1a]/15 pb-3 flex items-center gap-2.5">
                          <ShieldAlert className="w-5 h-5 text-orange-600" />
                          <h4 className="font-serif font-extrabold text-[#1a1a1a] text-lg sm:text-xl">Fourth Amendment: Mosaic Peer Surveillance Systems</h4>
                        </div>
                        <p className="text-sm font-serif text-black/85 leading-relaxed">
                          The Fourth Amendment protects against warrantless spatial telemetry tracking of citizens. <strong>United States v. Jones (2012)</strong> and <strong>Carpenter v. United States (2018)</strong> established the <strong>Mosaic Theory of Surveillance</strong>.
                        </p>
                        <p className="text-sm font-serif text-black/85 leading-relaxed">
                          Under Mosaic Theory, the government cannot claim that because individual visual locations of a vehicle are on 'public streets' (and hence contain zero expectation of privacy in isolation), compilation is allowed. Tracking the aggregate movement web of a target yields a qualitative, structured intrusion requiring a warrant.
                        </p>
                        <div className="bg-[#f1efe9]/70 p-4 border border-[#1a1a1a]/15 space-y-2">
                          <span className="text-[10px] font-mono uppercase tracking-wider font-extrabold text-orange-600 block">The Peer-Sourced Surveillance Mosaic</span>
                          <p className="text-xs text-black/75 leading-relaxed font-sans">
                            A coordinated campaign where local civilian lookouts (recruited baristas, landlords, managers) input entries and exits, compile timestamp logs, and coordinate via real-time alerts constitutes an unconstitutional warrantless surveillance apparatus. Bypassing Fourth Amendment warrant obligations using crowd-sourced civilian conduits violates privacy protections.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {selectedConstTab === "ada" && (
                      <motion.div
                        key="ada-const"
                        initial={{ opacity: 0, scale: 0.99 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.99 }}
                        transition={{ duration: 0.12 }}
                        className="space-y-6"
                      >
                        <div className="border-b border-[#1a1a1a]/15 pb-3 flex items-center gap-2.5">
                          <Cpu className="w-5 h-5 text-orange-600" />
                          <h4 className="font-serif font-extrabold text-[#1a1a1a] text-lg sm:text-xl">The Americans with Disabilities Act: Statutory Accommodation</h4>
                        </div>
                        <p className="text-sm font-serif text-black/85 leading-relaxed">
                          The ADA contains two distinct avenues of application to Directed Social Aggression: the <strong>'Regarded As'</strong> prong and the <strong>'Actual Disability'</strong> category.
                        </p>
                        <p className="text-sm font-serif text-black/85 leading-relaxed">
                          <strong>'Regarded As' Protection:</strong> By continually framing the subject's actions as evidence of acute mental instabilty, the campaign network regard the subject as disabled, triggerring immediate ADA antidiscrimination constraints.
                        </p>
                        <p className="text-sm font-serif text-black/85 leading-relaxed">
                          <strong>Actual Biological Disability:</strong> Cortisol-induced hippocampal CA3 atrophy and prefrontal executive inhibition represent clinically verifiable, mechanical cognitive impairments. Under <strong>Title II of the ADA</strong>, public state actors (including responding police officers) have a legal obligation to adjust standard protocols to accommodate this neurobiological fatigue rather than using standard arrest/eviction shortcuts.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="pt-4 border-t border-[#1a1a1a]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-black/45" id="const-remedy-footer">
                    <span>REMEDY CODE: FEDERAL LITIGATION STANDARD II & III</span>
                    <button 
                      onClick={() => setActiveTab("document")}
                      className="text-black hover:text-orange-600 font-bold flex items-center gap-1 text-[11px] font-mono tracking-tight"
                    >
                      [ EXAMINE LEGAL CITATIONS → ]
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 4: THE FULL DOCUMENT READER SCREEN */}
          {activeTab === "document" && (
            <motion.div
              key="document-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6"
              id="document-panel"
            >
              {/* Left Column Section Navigator - Editorial Folder Layout */}
              <div className="lg:col-span-4 space-y-4" id="document-sidebar">
                {/* Mobile Drawer Toggle Button */}
                <button
                  onClick={() => setIsMobileIndexExpanded(!isMobileIndexExpanded)}
                  className="lg:hidden w-full flex items-center justify-between bg-white border-2 border-black p-4 text-xs font-mono font-bold tracking-wider hover:bg-[#f1efe9]/40 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-orange-600" />
                    <span>DOCUMENT INDEX</span>
                  </span>
                  <span className="text-orange-600 bg-[#f1efe9] px-2.5 py-0.5 border border-black/10 text-[10px]">
                    {isMobileIndexExpanded ? "[ HIDE ]" : "[ SHOW INDEX ]"}
                  </span>
                </button>

                {/* Sidebar Index Wrapper: Collapsible on mobile, always visible on desktop */}
                <div className={`${isMobileIndexExpanded ? "block" : "hidden lg:block"} space-y-4`}>
                  <div className="bg-white border-2 border-black p-5 space-y-4">
                    <div className="flex items-center gap-2 border-b border-[#1a1a1a]/15 pb-2">
                      <Layers className="w-4.5 h-4.5 text-orange-600" />
                      <h3 className="font-serif font-black text-black text-sm uppercase tracking-tight">Structured Document Contents</h3>
                    </div>
                    
                    {/* Search bar helper */}
                    <div className="relative">
                      <Search className="w-4 h-4 text-[#1a1a1a]/55 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="Search keywords (e.g. Sapolsky, Adickes)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full text-xs bg-[#f1efe9]/30 border border-[#1a1a1a]/25 py-2.5 pl-9 pr-4 text-black placeholder-[#1a1a1a]/40 focus:outline-hidden focus:border-black rounded-none font-mono"
                      />
                    </div>

                    {/* Sections clicker */}
                    <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
                      {selectedPaper.sections.map((sec) => {
                        const matchesSearch = searchQuery === "" || 
                          sec.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          sec.content.toLowerCase().includes(searchQuery.toLowerCase());
                        
                        if (!matchesSearch) return null;
                        
                        const isExpanded = !!expandedSections[sec.id];
                        return (
                          <button
                            key={sec.id}
                            onClick={() => {
                              toggleSection(sec.id);
                              // Scroll corresponding element into view if open
                              setTimeout(() => {
                                const el = document.getElementById(`doc-anchor-${sec.id}`);
                                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                              }, 100);
                              
                              // Auto collapse sidebar index on mobile selection
                              if (window.innerWidth < 1024) {
                                setIsMobileIndexExpanded(false);
                              }
                            }}
                            className={`w-full text-left p-2.5 rounded-none text-xs transition-colors flex items-center justify-between cursor-pointer border ${
                              isExpanded 
                                ? "bg-[#1a1a1a] text-white border-black font-semibold font-serif" 
                                : "text-black/75 hover:bg-[#f1efe9]/50 border-transparent hover:border-[#1a1a1a]/10"
                            }`}
                          >
                            <span className="truncate pr-2">{sec.title}</span>
                            <span className={`shrink-0 text-[9px] px-1.5 py-0.5 font-mono ${isExpanded ? "bg-orange-600 text-white" : "bg-[#f1efe9] text-black/60 border border-black/10"}`}>{sec.id}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Asymmetric Deterrence explanation card */}
                  <div className="bg-[#1a1a1a] text-[#f9f8f4] p-5 space-y-3" id="asymmetric-deterrence-card">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-orange-400 font-extrabold font-serif">REMEDIAL PROTOCOLS</span>
                    <h4 className="font-serif font-bold text-sm tracking-tight leading-snug">The Dead Man's Switch & Archive Redundancy</h4>
                    <p className="text-[11px] text-white/70 leading-relaxed font-sans">
                      Under severe DSA threat, standard legal channels fail due to distributed deniability. The paper charts two critical individual defense architectures:
                    </p>
                    <ul className="text-[10px] font-mono text-white/80 space-y-2 list-disc pl-4 border-t border-white/10 pt-2">
                      <li><strong>Breadcrumb Web</strong>: Gathering multidimensional evidence streams to prove tacit state-citizen conspiracy loops.</li>
                      <li><strong>Dead Man's Switch</strong>: Automated release pipelines designed to ensure incapacitation triggers immediate public archive disclosure.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column Full Academic Paper Reader */}
              <div className="lg:col-span-8 bg-white border-2 border-black p-6 sm:p-9 max-h-[800px] overflow-y-auto font-sans text-black" id="document-content-pane">
                <div className="border-b-2 border-black pb-5 mb-6 text-center space-y-3">
                  <h2 className="text-xl sm:text-3xl font-serif font-black text-black tracking-tight leading-tight">
                    {selectedPaper.title}
                  </h2>
                  <div className="text-[10px] uppercase font-bold font-mono text-black/55 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                    <span>Clinical Research & Constitutional Litigation Manifesto</span>
                    <span>•</span>
                    <span className="text-orange-600">Correspondence: {selectedPaper.metadata.contact}</span>
                  </div>
                </div>

                <div className="prose max-w-none space-y-6 text-sm text-black/85 leading-relaxed font-serif" id="academic-paper-text-render">
                    
                  {/* Abstract card block inside full reader */}
                  <div className="bg-[#f1efe9]/40 border border-[#1a1a1a]/15 p-5 mb-8 font-serif italic">
                    <span className="text-[9px] font-mono font-bold text-orange-600 uppercase tracking-widest block not-italic mb-1">PAPER READERS DIGEST ABSTRACT</span>
                    <p className="text-xs leading-relaxed text-black/75">
                      "{selectedPaper.metadata.abstract}"
                    </p>
                  </div>

                  {selectedPaperId === "physiological-constitutional" ? (
                    <>
                      {/* Section 1 */}
                      <div id="doc-anchor-neuro" className="space-y-4 pt-4 border-t border-[#1a1a1a]/15">
                        <h3 className="text-lg font-serif font-bold text-black tracking-tight border-b border-black/10 pb-1.5">1.1 The Neurobiological Signature of Sustained Hypervigilance</h3>
                        <p>
                          The physiological damage pathway in DSA begins with the nervous system's response to what the clinical literature identifies as inescapable, unpredictable threat. Unlike acute stressors — which activate and then resolve the threat-response architecture — chronic, distributed social aggression forces the target into a state of perpetual hypervigilance that bypasses normal habituation mechanisms.
                        </p>
                        <p>
                          The primary neurobiological consequence is sustained activation of the Hypothalamic-Pituitary-Adrenal (HPA) axis. Under normal threat conditions, HPA activation produces cortisol release that mobilizes the organism for response, then resolves when the threat passes. Under DSA conditions, the threat does not pass. The HPA axis remains activated, and chronic cortisol elevation produces a cascade of neurobiological damage with well-documented structural consequences.
                        </p>
                        <p>
                          McEwen and Stellar's (1993) foundational research on allostatic load established the mechanism through which chronic HPA activation produces cumulative physiological cost. Repeated activation without recovery produces wear and tear across multiple regulatory systems — what McEwen termed the 'price of adaptation.' At the structural neurological level, chronic cortisol elevation produces measurable damage to the hippocampus — the brain region most critical for memory consolidation, contextual sequencing, and the integration of disparate experiential data into coherent narrative.
                        </p>
                        <p>
                          Sapolsky's (1996) research demonstrated that sustained glucocorticoid exposure causes dendritic atrophy in hippocampal CA3 pyramidal neurons, reducing the structural substrate available for memory formation and retrieval. The clinical consequence for DSA targets is specifically relevant: impaired capacity to sequence the events of their own victimization, reduced ability to construct chronological accounts, and diminished working memory available for the complex organizational tasks required to build the documentation systems that constitute their defense.
                        </p>
                      </div>

                      {/* Section 2 */}
                      <div id="doc-anchor-cardio" className="space-y-4 pt-6 border-t border-[#1a1a1a]/15">
                        <h3 className="text-lg font-serif font-bold text-black tracking-tight border-b border-black/10 pb-1.5">1.2 Cardiovascular Consequences: The Somatic Record of Sustained Threat</h3>
                        <p>
                          The cardiovascular system provides perhaps the most precisely measurable somatic record of sustained psychological stress. Heart Rate Variability (HRV) serves as a direct physiological index of autonomic nervous system balance and, by extension, of the organism's capacity for flexible adaptive response. High HRV indicates a nervous system capable of shifting fluidly between activation and recovery. Low HRV indicates sympathetic dominance — a system locked in threat-response mode.
                        </p>
                        <p>
                          Sustained psychosocial stress produces sustained HRV reduction, with the magnitude of reduction correlating with both the intensity and duration of the stressor. Kivimaki et al.'s (2012) landmark meta-analysis of work stress and cardiovascular disease — encompassing 197,473 participants across thirteen European cohort studies — established that chronic psychosocial stress confers a statistically significant increase in coronary heart disease incidence independent of traditional cardiovascular risk factors. The effect size was comparable to active smoking.
                        </p>
                      </div>

                      {/* Section 3 */}
                      <div id="doc-anchor-immuno" className="space-y-4 pt-6 border-t border-[#1a1a1a]/15">
                        <h3 className="text-lg font-serif font-bold text-black tracking-tight border-b border-black/10 pb-1.5">1.3 Immunological Suppression: The Inflammatory Signature of Social Exclusion</h3>
                        <p>
                          The immunological consequences of sustained social stress represent one of the most extensively documented physiological pathways in contemporary psychoneuroimmunology. Chronic HPA activation produces glucocorticoid-mediated immunosuppression through multiple mechanisms, including the downregulation of natural killer cell activity, the reduction of lymphocyte proliferation, and the dysregulation of cytokine signaling that coordinates inflammatory response.
                        </p>
                        <p>
                          Cacioppo and Hawkley's (2003) research on social isolation and health established a particularly relevant specific pathway: loneliness and perceived social disconnection produces measurable upregulation of inflammatory cytokines, including Interleukin-6 (IL-6) and Tumor Genesis Factor-alpha (TNF-alpha). The body treats social exclusion as a form of injury, mounting an inflammatory response to a wound that has no physical location. Both cytokines cross the blood-brain barrier and directly affect neurotransmitter metabolism, contributing to what the clinical literature recognizes as sickness behavior.
                        </p>
                      </div>

                      {/* Section 4 */}
                      <div id="doc-anchor-cellular" className="space-y-4 pt-6 border-t border-[#1a1a1a]/15">
                        <h3 className="text-lg font-serif font-bold text-black tracking-tight border-b border-black/10 pb-1.5">1.4 Telomere Attrition: The Cellular Ledger of Accelerated Aging</h3>
                        <p>
                          The most striking evidence of DSA's physiological impact appears at the cellular level, in the structure of telomeres — the protective nucleotide sequences that cap chromosomal ends and serve as a biological aging clock. Telomere length shortens with each cell division; critically, it also shortens in response to oxidative stress and chronic psychological stress through stress-induced oxidative damage to telomeric DNA. The enzyme telomerase, which maintains telomere length, is suppressed by chronic cortisol elevation.
                        </p>
                        <p>
                          Epel et al.'s (2004) landmark study in the Proceedings of the National Academy of Sciences established the direct link between perceived psychological stress and accelerated telomere attrition in a human sample. Women experiencing chronic caregiving stress showed significantly shorter telomeres and lower telomerase activity than controls — an effect equivalent to approximately ten additional years of cellular aging.
                        </p>
                        <p>
                          In the DSA context, the implications are unambiguous: sustained campaign-induced stress accelerates the biological aging process at the cellular level, shortening the target's healthy lifespan in proportion to the duration and intensity of the campaign. The campaign against the documented subject has a measurable biological cost that will be paid in reduced healthy years of life — a cost as concrete as any physical injury.
                        </p>
                      </div>

                      {/* Section 5 (Distributed households) */}
                      <div id="doc-anchor-coercive" className="space-y-4 pt-6 border-t border-[#1a1a1a]/15">
                        <h3 className="text-lg font-serif font-bold text-black tracking-tight border-b border-black/10 pb-1.5">2.1 - 2.4 Distributed Coercive Control and Infrastructure Attacks</h3>
                        <p>
                          Evan Stark's (2007) work on coercive control reframed intimate partner violence by identifying control over the infrastructure of daily life rather than physical violence as the core mechanism of harm. Abusers achieve dominance through systematic control of access to food, shelter, finance, and communication.
                        </p>
                        <p>
                          Community-based DSA shatters this household limit. For an unhoused individual, the survival infrastructure is distributed. Groceries are the refrigerator. Restaurants are the kitchen. Coffee shops are the office. When coordinated DSA networks approach staff at these nodes, introduce their folk devil narratives, and exclude the target from each in sequence, they execute a distributed coercive control operation. The harm is the product of exclusion and the complete elimination of recovery options, creating an inescapable pressure matrix.
                        </p>
                      </div>

                      {/* Section 6 (Constitutional claims) */}
                      <div id="doc-anchor-const-fourteenth" className="space-y-4 pt-6 border-t border-[#1a1a1a]/15">
                        <h3 className="text-lg font-serif font-bold text-black tracking-tight border-b border-black/10 pb-1.5">3.1 - 3.4 Constitutional Liability & State Joint Action (Section 1983)</h3>
                        <p>
                          First Amendment rights are violated via digital suppression under prior restraint principles (Lamont 1965). Fourth Amendment claims attach under the mosaic theory of surveillance established in <em>Jones (2012)</em> and <em>Carpenter (2018)</em>. Deprivation of core space access satisfies the Fourteenth Amendment stigma-plus standard (Paul v. Davis 1976).
                        </p>
                        <p>
                          Under the Adickes (1970) joint action test, private harassers participate with municipal responders. Municipal police departments that repeatedly respond to manufactured notifications without auditing bias are liable under Monell (1978) custom doctrine.
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-8">
                      {selectedPaper.sections.map((sec) => (
                        <div key={sec.id} id={`doc-anchor-${sec.id}`} className="space-y-4 pt-6 border-t border-[#1a1a1a]/15">
                          <h3 className="text-lg font-serif font-bold text-black tracking-tight border-b border-[#1a1a1a]/10 pb-1.5">{sec.title}</h3>
                          <p className="text-xs uppercase tracking-wider font-mono text-orange-600 font-bold">{sec.tagline}</p>
                          <div className="space-y-4 pt-1">
                            {sec.content.split("\n\n").map((para, i) => (
                              <p key={i} className="leading-relaxed text-sm text-[#1a1a1a]/95">{para}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-6 text-xs font-mono text-black/55 border-t border-[#1a1a1a]/15 bg-[#f1efe9]/30 p-3 italic">
                    <span>This completes the public facing digest copy of the academic text. For complete citations and raw legal records, utilize the interactive Chat panel to generate custom extracts.</span>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 5: ASK THE PAPER AI CHAT PLATFORM */}
          {activeTab === "ama" && (
            <motion.div
              key="ama-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[580px]"
              id="ama-panel"
            >
              {/* Left Column Chat Guidelines & Prompt Pills */}
              <div className="lg:col-span-4 space-y-4" id="ama-left-bar">
                {/* Mobile Guidelines / Prompt Pills Toggle */}
                <button
                  onClick={() => setIsMobilePromptsExpanded(!isMobilePromptsExpanded)}
                  className="lg:hidden w-full flex items-center justify-between bg-white border-2 border-black p-4 text-xs font-mono font-bold tracking-wider hover:bg-[#f1efe9]/40 cursor-pointer text-[#1a1a1a]"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-orange-600" />
                    <span>SUGGESTED AMICUS PROMPTS</span>
                  </span>
                  <span className="text-orange-600 bg-[#f1efe9] px-2.5 py-0.5 border border-black/10 text-[10px]">
                    {isMobilePromptsExpanded ? "[ HIDE ]" : "[ SHOW PROMPTS ]"}
                  </span>
                </button>

                {/* Collapsible Wrapper for Mobile / Always Visible on Desktop */}
                <div className={`${isMobilePromptsExpanded ? "block" : "hidden lg:block"} space-y-4`}>
                  <div className="bg-white border-2 border-black p-5 space-y-4">
                    <div className="flex items-center gap-2 border-b border-[#1a1a1a]/15 pb-2">
                      <MessageSquare className="w-5 h-5 text-orange-600" />
                      <h3 className="font-serif font-black text-black text-sm uppercase tracking-tight">AI Academic Assistant</h3>
                    </div>
                    <p className="text-xs text-black/75 leading-relaxed font-sans">
                      Ask questions directly regarding the paper. The AI is pre-loaded with the complete text of the scientific and legal analysis, and returns grounded scholarly reviews.
                    </p>

                    <div className="pt-3 border-t border-[#1a1a1a]/10 space-y-2">
                      <span className="text-[9px] uppercase font-mono font-extrabold tracking-wider text-orange-600 block">QUICK INDEX PROMPT EXTRAS</span>
                      <div className="flex flex-col gap-2 font-serif text-[#1a1a1a]">
                        {searchPills.map((pill, i) => (
                          <button
                            key={i}
                            onClick={() => handleSendMessage(pill.query)}
                            className="w-full text-left p-3 rounded-none bg-white hover:bg-[#f1efe9]/55 border border-[#1a1a1a]/15 text-[11px] text-black hover:text-orange-600 font-serif transition-colors cursor-pointer leading-normal flex items-start justify-between gap-1 group"
                          >
                            <span className="font-bold">{pill.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 shrink-0 transition-transform mt-0.5" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#f1efe9] border-l-4 border-orange-600 p-4 text-[11px] text-black/85 leading-relaxed font-serif" id="academic-citation-warning">
                    <strong>Scholarly Note on Citations:</strong> Answers generated by the assistant refer explicitly to the biological frameworks (McEwen, Sapolsky, Cacioppo) and federal precedent (United States v. Jones, Carpenter, Monell) detailed in the paper.
                  </div>
                </div>
              </div>

              {/* Right Column Interactive Chat Arena - Terminal Broadsheet */}
              <div className="lg:col-span-8 bg-white border-2 border-black flex flex-col justify-between min-h-[500px]" id="ama-chat-arena">
                
                {/* Chat dialogue list */}
                <div className="flex-1 p-5 overflow-y-auto space-y-4 max-h-[460px] font-serif" id="chat-messages-container">
                  {chatHistory.map((chat, idx) => {
                    const isUser = chat.role === "user";
                    return (
                      <div key={idx} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[85%] rounded-none p-4 text-xs sm:text-sm leading-relaxed ${
                          isUser 
                            ? "bg-[#1a1a1a] text-[#f9f8f4] border border-black" 
                            : "bg-[#f1efe9]/55 text-black border border-[#1a1a1a]/15"
                        }`}>
                          <div className="whitespace-pre-line prose max-w-none text-xs sm:text-sm font-sans">
                            {chat.text}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Custom loader element */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-[#f1efe9]/55 text-black/60 rounded-none p-4 text-xs border border-black/10 flex items-center gap-2">
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-orange-600" />
                        <span className="font-mono text-[10px] uppercase tracking-wider font-bold">Reconstructing document context...</span>
                      </div>
                    </div>
                  )}

                  <div ref={chatEndRef} />
                </div>

                {/* Input action toolbar */}
                <div className="p-4 border-t-2 border-black flex items-center gap-2 bg-[#f1efe9]/40" id="chat-input-bar">
                  <input
                    type="text"
                    placeholder="Ask about the neurobiology or legal theories in this document..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSendMessage();
                    }}
                    className="flex-1 bg-white border-2 border-black py-3 px-4 text-xs sm:text-sm text-black placeholder-black/35 focus:outline-hidden focus:border-orange-600 rounded-none font-serif"
                    id="chat-text-input"
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    className="p-3.5 bg-[#1a1a1a] text-white hover:bg-orange-600 cursor-pointer flex items-center justify-center shrink-0 border border-black rounded-none transition-colors"
                    id="chat-send-btn"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </main>

      {/* Persistent Academic Footer - Broadsheet Legal Record */}
      <footer className="border-t-2 border-black bg-[#f1efe9]/50 py-8 mt-12 text-xs text-black/60 font-mono" id="primary-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-serif font-black uppercase text-black text-[11px] tracking-wider">Medico-Legal DSA Analysis Platform</span>
            <span className="text-[10px] text-black/55">Synthesizing neurobiology research & federal constitutional doctrine.</span>
          </div>
          <div className="flex items-center gap-4 text-black/45 text-[10px]">
            <span>CALIFORNIA JURISDICTIONS STUDY</span>
            <span>•</span>
            <a href="mailto:purarecoveryryan@gmail.com" className="hover:text-orange-600 transition-colors underline decoration-dotted font-bold">Report Inquiry</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
