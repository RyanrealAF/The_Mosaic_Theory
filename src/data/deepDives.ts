export interface DeepDive {
  scientificDetail: string;
  legalDetail: string;
  checklist: string[];
  citationDetail: string;
}

export const sectionDeepDives: Record<string, DeepDive> = {
  // === PAPER 1 SECTIONS ===
  neuro: {
    scientificDetail: `Sustained sympathetic-medullary activation inhibits the neurogenic capacity of the subgranular zone in the dentate gyrus. PET and fMRI clinical studies show that chronic cortisol excess (exceeding 25 μg/dL daily baseline) alters functional connectivity between the basolateral amygdala and the ventromedial prefrontal cortex (vmPFC). This functional decoupling leads to the default mode network (DMN) being hijacked by threat-appraisal hyper-activity, inducing localized structural atrophy in hippocampal CA3 apical dendrites and cellular exitus of GABAergic interneurons.`,
    legalDetail: `Highly relevant for establishes an ADA actual cognitive disability. Dendritic loss in CA3 directly impacts 'processing speed, sequential memory sorting, and spatial working memory.' When a public entity demands a target construct structured chronological briefings without administrative sequencing support, they violate Title II of the ADA by failing to accommodate an actively documented organic brain impairment.`,
    checklist: [
      "Obtain clinical salivary cortisol diurnal curve mapping (4-point collection)",
      "Secure clean volumetric MRI showing longitudinal hippocampal density deviation",
      "Document cognitive executive inhibition via standardized Neuropsychological Testing (e.g., WAIS-IV Digit Span and Wisconsin Card Sorting Test)"
    ],
    citationDetail: `Sapolsky, R. M. (1996). "Why stress is bad for your brain." Science, 273(5276), 749-750.\nMcEwen, B. S. (2000). "The neurobiology of stress: active agents and avenues for intervention." Brain Research, 886(1-2), 172-189.`
  },
  cardio: {
    scientificDetail: `Chronic glucocorticoid and catecholamine release downregulates beta-1 adrenergic receptors in the myocardium, causing a profound drop in baseline vagal tone. Time-domain indices of Heart Rate Variability (SDNN and rMSSD) drop below 15ms in sustained hypervigilance states (healthy norms exceed 55ms), corresponding to a complete withdrawal of the respiratory sinus arrhythmia (RSA) and parasympathetic vagal brake. This chronic autonomic disruption triggers continuous hemodynamic shear stress, causing endothelial dysfunction, microvascular damage, and accelerated atherosclerotic plaque rupture risks.`,
    legalDetail: `Provides raw, unalterable physiological proof of 'severe emotional distress' to survive standard demurrers under California tort frames (IIED/Negligent Infliction of Emotional Distress) and CCP § 527.6. It defeats defense assertions that the plaintiff is merely 'hypersensitive' or experiencing standard civic annoyance.`,
    checklist: [
      "Deploy 24-Hour continuous Holter monitor tracking to establish SDNN and rMSSD",
      "Correlate low frequency/high frequency (LF/HF ratio) peaks with documented field incident log timestamps",
      "Acquire arterial stiffness metric assays (e.g., Pulse Wave Velocity) to document early arterial wear"
    ],
    citationDetail: `Thayer, J. F., & Lane, R. D. (2000). "A model of neurovisceral integration." Journal of Affective Disorders, 61(3), 201-216.\nKivimaki, M., et al. (2012). "Job strain as a risk factor for coronary heart disease." The Lancet, 380(9852), 1491-1497.`
  },
  immuno: {
    scientificDetail: `Under inescapable social isolation, the immune system undergoes a conserved transcriptional response to adversity (CTRA). This response inverts normal signaling, upregulating pro-inflammatory cytokine genes (specifically IL-6, IL-1β, and TNF-α) while downregulating genes involved in antiviral defense (Type I interferons). These circulating cytokines cross the blood-brain barrier via active vagal transport channels and leaky endothelial pathways, activating microglia. Microglial activation halts local serotonin and dopamine biosynthesis, locking the target into a severe neuro-immunological loop labeled as clinical 'sickness behavior.'`,
    legalDetail: `Proves that the social exclusion elements of a coordinated DSA campaign are not mere 'reputational hurts' but constitute direct, physical, neurotoxic violence. This somatic injury satisfies the physical impact or physical manifestation requirements necessary to recover damages in federal and state administrative courts.`,
    checklist: [
      "Execute high-sensitivity C-reactive protein (hs-CRP) serum panels",
      "Measure baseline plasma concentrations of Tumor Necrosis Factor-alpha (TNF-α) and Interleukin-6 (IL-6)",
      "Conduct quantitative immune cell assays measuring natural killer (NK) cell activity suppression"
    ],
    citationDetail: `Cacioppo, J. T., & Hawkley, L. C. (2003). "Social isolation and health." Perspectives in Biology and Medicine, 46(3), S39-S52.\nCole, S. W., et al. (2007). "Social regulation of gene expression in the human immune system." Genome Biology, 8(9), R189.`
  },
  cellular: {
    scientificDetail: `Sustained high glucocorticoid exposure suppresses the hTERT (human Telomerase Reverse Transcriptase) gene promoter through transcriptional blockade. G-quadruplex sequence instability at the TTAGGG chromosomal caps is accelerated by stress-induced reactive oxygen species (ROS). This halts division capacity, initiating the senescence-associated secretory phenotype (SASP). The cell enters an irreversible terminal state, shedding molecular markers that pollute surrounding healthy tissues and accelerating the biological age of the overall organism.`,
    legalDetail: `Represents the absolute ceiling of permanent somatic damage. Accelerating cellular aging by 8-15 years is an irreversible loss of biological capital. It provides a quantifiably concrete measure of compensatory general damages for Section 1983 or civil tort litigation, representing a permanent reduction in total lifespan.`,
    checklist: [
      "Perform peripheral blood mononuclear cell (PBMC) quantitative PCR telomere length assays",
      "Measure baseline telomerase enzymatic activity levels under stimulated T-cell culture",
      "Enlist cellular age clock diagnostic algorithms (e.g., Horvath/Hannum epigenetic methylation analysis)"
    ],
    citationDetail: `Epel, E. S., et al. (2004). "Accelerated telomere shortening in response to life stress." PNAS, 101(49), 17312-17315.\nBlackburn, E. H. (2001). "Switching and signaling at the telomere." Cell, 106(6), 661-673.`
  },
  epistemic: {
    scientificDetail: `Systematic erasure of external safety cues prevents the central nervous system from ever achieving 'vagal recovery.' Under standard trauma paradigms, therapy relies on establishing an environment of 'present safety.' Because the DSA target's hypervigilance is a fully calibrated and accurate response to real coordinated hostility, attempts to 'de-sensitize' the patient fail. The mismatch between the therapist's assumption of safety and the client's actual geographic threat creates severe epistemic stress, leading to cognitive fatigue and dissociation.`,
    legalDetail: `Directly debunks defense efforts to classify the target as 'unstable' or 'delusional.' Proving that the target is responding to an objectively active network allows their testimonially documented experiences to survive credibility challenges in municipal custody, mental health holds, or protective order trials.`,
    checklist: [
      "Create a rigorous, multi-column empirical timeline mapping actual target-proxy interactions",
      "Document the clinical contradictions of treating a real, non-resolved threat under classic safe-room protocols",
      "Maintain a daily log of specific network-driven incidents coupled with third-party verifiable evidence"
    ],
    citationDetail: `Herman, J. L. (1992). "Trauma and Recovery." Basic Books.\nStark, E. (2007). "Coercive Control: How Men Entrap Women in Personal Life." Oxford University Press.`
  },
  coercive: {
    scientificDetail: `Systematic coordination of independent local nodes prevents normal adaptation. Rather than encountering isolated daily friction, the target is subjected to a spatial pressure field. When grocery stores, libraries, and parks are simultaneously converted into hostile spaces through coordinated rumors, the target is trapped in a geographic cage with no 'safe recovery coordinates.' This perpetual displacement prevents sleep consolidation and keeps nocturnal sympathetic activity highly elevated, leading to accelerated cardiac exhaustion.`,
    legalDetail: `Supports a unified theory of concerted exclusionary conduct. Demonstrates that while each separate merchant has a private right of exclusion, the coordinated orchestration of these exclusions across essential public nodes converts private action into a joint, systematic deprivation of the right to travel and basic liberty.`,
    checklist: [
      "Map out the geographic coordinates of exclusion events using GIS tracking overlays",
      "Collect formal declarations or subpoenaed communications (SMS, Nextdoor, Slack) showing cross-merchant narrative coordination",
      "Establish the unavailability of alternative food, storage, and communication nodes within a 5-mile boundary"
    ],
    citationDetail: `Stark, E. (2007). "Coercive Control." Oxford University Press.\nSellman v. Baruch College (S.D.N.Y. 1980) on systematic administrative exclusion.`
  },
  "const-first": {
    scientificDetail: `The complete silencing of counter-evidence prevents social feedback calibration. When automated flagging algorithms are triggered to delete a target's accounts, they lose the ability to speak, defend their reputational standing, or contact key legal witnesses. The resulting isolated psychological state simulates sensory deprivation, which upregulates internal threat-appraisal networks and accelerates prefrontal grey-matter decay.`,
    legalDetail: `Supports First Amendment joint action claims under Section 1983. When private actors use public police badges to pressure online services to take down a target's accounts under the guise of an 'active public safety threat,' the take-down constitutes state-attributed prior restraint.`,
    checklist: [
      "Export raw moderation logs, flagging timelines, and platform ban notifications",
      "Trace the transmission of police-reported tip logs to private corporate trust & safety panels",
      "Draft specific legal interrogatories targeting coordinated digital take-down pipelines"
    ],
    citationDetail: `Lamont v. Postmaster General, 381 U.S. 301 (1965).\nO'Handley v. Weber, 62 F.4th 1145 (9th Cir. 2023) detailing state-corporate moderation links.`
  },
  "const-fourth": {
    scientificDetail: `Continuous peer-to-peer surveillance simulates institutional panoptic conditioning. Because the target knows neighbors and local proxies are monitoring and recording their every movement, breathing patterns, and phone screens, the normal offline boundary of the self is completely breached. The nervous system responds by initiating 'tonic immobility' or sham-death reflexes, causing severe somatic motor inhibition and muscular fatigue.`,
    legalDetail: `Implements the Carpenter mosaic standard to civilian targeting. Demonstrates that while peer surveillance is private, when those peer logs are synthesized through shared municipal networks and aggregated as raw data trails, it crosses the Fourth Amendment search threshold, requiring a warrant.`,
    checklist: [
      "Document peer camera networks, Ring doorbells, and real-time localized surveillance groups targeting physical routes",
      "Compile evidence showing systemic aggregation of license plate trackers, Bluetooth trackers, or cell towers on a private grid",
      "Apply the Carpenter 'retrospective chronicle' framework to prove total movement compilation"
    ],
    citationDetail: `United States v. Jones, 565 U.S. 400 (2012).\nCarpenter v. United States, 585 U.S. 296 (2018).`
  },
  "const-fourteenth": {
    scientificDetail: `Being subjected to an unvetted 'folk devil' campaign violates procedural security. reputational destruction without an opportunity to clear one's name blocks all social integration. The endocrine system responds to this ultimate threat by suppressing anabolic growth hormones, leading to rapid biological deterioration and systemic neurological depletion.`,
    legalDetail: `Applies the dual-prong Paul v. Davis 'stigma-plus' test. Pleading must prove both: 1) Reputational defamation from municipal/state-loop sources, and 2) A concurrent tangible deprivation of a right or legal status, such as being barred from public transport, evicted, or excluded from basic safety networks.`,
    checklist: [
      "Secure written proof of the circulating defamation (emails, police logs, flyers)",
      "Establish the specific governmental actions (welfare checks, exclusions, arrests) triggered directly by this defamation",
      "File under 42 U.S.C. § 1983 detailing the public-private conspiracy under Dennis v. Sparks"
    ],
    citationDetail: `Paul v. Davis, 424 U.S. 693 (1976).\nDennis v. Sparks, 449 U.S. 24 (1980).\nAdickes v. S.H. Kress & Co., 398 U.S. 144 (1970).`
  },
  "const-ada": {
    scientificDetail: `When administrative or legal tribunals ignore the somatic trauma of a target, they worsen their neurobiological injury. Experiencing administrative hostility while suffering from CA3 dendritic atrophy causes further autonomic collapse and limits the cognitive capacity to defend oneself, locking the target into a condition of learned helplessness.`,
    legalDetail: `The ADA Title II accommodation represents an absolute procedural barrier. When properly served, public agencies must adapt their processes. Failure to do so creates separate, high-value civil rights liability that bypasses municipal standard qualified immunity limits.`,
    checklist: [
      "Draft a formal ADA Title II Request for Reasonable Accommodations with a clear clinical backing",
      "Specify administrative adaptations: written sequencing, narrative aid, pacing adjustments, and third-party recording",
      "Document all administrative refusals to accommodate as independent basis for federal litigation"
    ],
    citationDetail: `Americans with Disabilities Act of 1990, 42 U.S.C. §§ 12131-12165.\nTennessee v. Lane, 541 U.S. 509 (2004) regarding court access accommodations.`
  },
  synthesis: {
    scientificDetail: `The convergence of somatic biomarkers (cortisol diurnal curves, HRV indices, and telomeric assays) with high-density physical and digital evidence constructs an unshakeable proof matrix. Combining molecular laboratory readings with real-time log trails changes the court battle from a subjective credibility debate to an objective clinical assessment.`,
    legalDetail: `A strategic litigation model designed to survive motions to dismiss. By grouping multiple claims, the complaint shows that the sequential steps of private actors are actually coordinated tiles of a single, joint civil rights deprivation.`,
    checklist: [
      "Prepare a comprehensive Master Medico-Legal Pleading Notebook uniting cortisol and CSLI logs",
      "Incorporate expert testimony from cardiologists, immunologists, and constitutional scholars",
      "Structure the complaint around the joint action, stigma-plus, and Monell custom doctrines"
    ],
    citationDetail: `Dennis v. Sparks (1980).\nCalifornia Code of Civil Procedure § 527.6.\nMonell v. Department of Social Services (1978).`
  },

  // === PAPER 2 SECTIONS ===
  genealogy: {
    scientificDetail: `The intelligence apparatus utilizes the 'adversary puzzle-solving model.' Under this theory, individual intelligence pieces are completely harmless in isolation; however, when gathered over time and synthesized by expert analysts, they yield strategic breakthroughs. This model acknowledges that data points cannot be assessed inside isolated silos, but must be grouped dynamically over time.`,
    legalDetail: `Synthesizes the shift from governmental privilege to individual privacy protectiveness. Case law moves from CIA v. Sims (allowing the state to hide information using the mosaic concept) to United States v. Jones and Carpenter (forbidding the state from using automated tracking without a warrant to build an individual profile).`,
    checklist: [
      "Address CIA v. Sims and Halkin v. Helms to show how the mosaic theory is applied to data gathering",
      "Trace the judicial inversion where individual privacy protections adopt the state secrets model",
      "Draft claims explaining that aggregate digital tracking matches the national security intelligence model"
    ],
    citationDetail: `CIA v. Sims, 471 U.S. 159 (1985).\nHalkin v. Helms, 598 F.2d 1 (D.C. Cir. 1978).`
  },
  mechanics: {
    scientificDetail: `The Gestalt Shift operates mathematically on the non-additive interaction of data entries. When temporal monitoring (T) continues beyond critical thresholds, the predictive capacity of the dataset increases exponentially. High-resolution databases reduce data assembly costs to zero, eliminating individual privacy's natural protective barrier: 'practical obscurity.'`,
    legalDetail: `Replaces sequential analysis (0+0+0=0) with aggregate analysis (1+1+1=170). If any single step of a surveillance or exclusionary campaign is considered legal, the combined series must be evaluated for cumulative constitutional impact and physical harm.`,
    checklist: [
      "Define the spatial and temporal parameters of the tracking to establish a clear pattern",
      "Explain the reduction in data assembly costs to demonstrate that practical obscurity has been removed",
      "Formulate the Gestalt impact of the aggregated campaign to prove there is a constitutional violation"
    ],
    citationDetail: `United States v. Maynard, 615 F.3d 544 (D.C. Cir. 2010).\nKerr, O. S. (2012). "The Mosaic Theory of the Fourth Amendment." Michigan Law Review, 111(3), 311-354.`
  },
  architecture: {
    scientificDetail: `The tip-badge loop relies on informational pollution. By circulating fabricated or selectively edited alerts, the organizers create an environment of localized fear. This induces constant hypervigilance in the target, altering CA3 hippocampal pathways and triggering adrenal overload.`,
    legalDetail: `Crucial for establishing a conspiracy claim. Proves that while the responding officer acts in good faith, the private actors who weaponized the dispatcher are the proximate cause of the constitutional violation, keeping the causal chain intact.`,
    checklist: [
      "Subpoena police dispatch and 911 records to analyze complaint frequency and timestamps",
      "Collect neighbor SMS, WhatsApp, and Nextdoor chat group logs targeting the individual",
      "Demonstrate structured inconsistencies between reported tips and physical camera feeds"
    ],
    citationDetail: `Stark, E. (2007). "Coercive Control." Oxford University Press.\nAdickes v. S.H. Kress & Co. (1970).`
  },
  violations: {
    scientificDetail: `Automated location databases (including ALPR, scoot GPS, and facial templates) construct a real-time surveillance grid. Being tracked by this corporate-municipal apparatus disrupts autonomic nervous system balance, causing a decrease in Heart Rate Variability and forcing the target into protective hypervigilance.`,
    legalDetail: `Applies specific Ninth Circuit precedents (Yang, Patel, Sanchez) to demonstrate standing and protectiveness. While other circuits (such as the 7th Circuit in Tuggle) reject the mosaic theory for pole-cameras, the Ninth Circuit heavily scrutinizes warrantless biometric and GPS tracking databases.`,
    checklist: [
      "Apply the Ninth Circuit Patel standard to show that unauthorized tracking violates concrete privacy interests",
      "Assess Carpenter standing using Judge Bea's concurrence in United States v. Yang",
      "Use Sanchez v. LADOT to warn against police co-option of local municipal and corporate databases"
    ],
    citationDetail: `United States v. Yang, 978 F.3d 1184 (9th Cir. 2020).\nPatel v. Facebook, Inc., 936 F.3d 934 (9th Cir. 2019).\nSanchez v. LADOT, 39 F.4th 548 (9th Cir. 2022).`
  },
  courseofconduct: {
    scientificDetail: `Experiencing a coordinated, long-term harassment campaign impairs cognitive executive functions. Under California standards, proving 'subjective distress' requires clear documentation of anguish, which is supported by clinical autonomic profiles (e.g., HRV drops) and telomere damage tests.`,
    legalDetail: `Provides state-level injunctive relief. Under California CCP § 527.6, a course of conduct is defined as a series of acts over time evidencing a continuity of purpose. Proving this pattern by clear and convincing evidence triggers broad protective orders that enjoin harassment networks.`,
    checklist: [
      "Document a pattern of conduct composed of at least two distinct incidents of harassment",
      "Prepare diagnostic evidence of subjective anguish using HRV, cortisol logs, or medical records",
      "Structure California Superior Court petitions to clearly demonstrate a continuous, coordinated targeting campaign"
    ],
    citationDetail: `California Code of Civil Procedure CCP § 527.6.\nSchild v. Rubin, 232 Cal.App.3d 755 (1991).\nMcConkey v. Steel, 176 Cal.App.4th 233 (2009).`
  },
  jointaction: {
    scientificDetail: `Systemic joint action by public officers and private accusers deprives the target of psychological safety. This constant threat of state-backed intervention exhausts hormonal stores, causing cellular age inflation, immune system suppression, and cognitive planning deficits.`,
    legalDetail: `Addresses Section 1983's state-action requirement. Establishes liability for private actors under the Joint Action, Public Function, Compulsion, or Symbiotic Relationship tests. Highlights recent cases such as Rawson (where county partnerships transformed private clinics into state actors).`,
    checklist: [
      "Detail mutual understandings, explicit or tacit, between private accusers and police responders",
      "Incorporate Ninth Circuit Rawson precedents to prove state action during involuntary holds",
      "Plead specific, non-conclusory allegations of conspiracy to satisfy Ninth Circuit standards"
    ],
    citationDetail: `Dennis v. Sparks, 449 U.S. 24 (1980).\nRawson v. Recovery Innovations, Inc., 975 F.3d 742 (9th Cir. 2020).\nO'Handley v. Weber, 62 F.4th 1145 (9th Cir. 2023).`
  },
  biosocial: {
    scientificDetail: `The Allostatic Load equation models biological decay: A_L(T) = ∫0^T (∑ Vi(t) · Ii(t)) · (1 - Rp(t)) dt. When inescapability (I_i) is near 1 and recovery (R_p) approaches 0, the biological system deteriorates. Glucocorticoids suppress telomerase enzymes, causing telomere decay (dS/dt) and accelerating cellular aging by approximately ten additional years.`,
    legalDetail: `Incorporate medical and economic assessments of permanent lifespan reduction. Demonstrates that coordinated campaigns are not just reputational hurdles but constitute direct somatic injury, supporting substantial claims for general and compensatory damages in federal civil rights cases.`,
    checklist: [
      "Formulate mathematical allostatic load projections based on continuous bio-metric tracking data",
      "Document cellular aging acceleration using quantitative PCR telomere assays",
      "Incorporate clinical proof of sustained HPA axis activation and prefrontal cortex inhibition"
    ],
    citationDetail: `McEwen, B. S., & Stellar, E. (1993). "Stress and the individual." Archives of Internal Medicine, 153(18), 2093-2101.\nEpel, E. S., et al. (2004). "Accelerated telomere shortening." PNAS, 101(49), 17312-17315.`
  },
  ada_remedy: {
    scientificDetail: `Experiencing administrative pressure without accommodations causes cognitive overload. Providing narrative sequencing assistance, trauma-informed interview pacing, and written options reduces sympathetic dominance, lowering cortisol levels and allowing CA3 hippocampal pathways to recuperate.`,
    legalDetail: `Title II of the ADA imposes a strict mandate on public entities. Standard procedures must be adapted to accommodate memory, concentration, and executive function deficits. Refusing to accommodate triggers private federal actions and statutory damages.`,
    checklist: [
      "Submit a written ADA Title II accommodation request with supporting clinical documentation of executive deficits",
      "Request specific procedural adjustments: narrative scheduling, pacing aids, and third-party recording",
      "Document all administrative refusals to accommodate as independent basis for federal statutory claims"
    ],
    citationDetail: `Americans with Disabilities Act of 1990, 42 U.S.C. §§ 12131-12165.\nTennessee v. Lane, 541 U.S. 509 (2004).`
  },
  litigative: {
    scientificDetail: `Pleading must mirror the complex dynamics of the targeting campaign. Specifying chronological clustering and thematic unity of manufactured reports demonstrates a coordinated campaign. Grouping multiple claims (doxing, false light, IIED) in the complaint prevents the defense from isolating and dismissing individual incidents.`,
    legalDetail: `A procedural checklist designed to survive demurrers. Pleading must specify: 1) Coordinated intent across unverified tips, 2) Precise subjective and objective distress, and 3) Monell custom liability based on systemic failure of dispatch audits.`,
    checklist: [
      "Group unverified tips and neighbor alerts as coordinated 'tiles' to prove a unified campaign",
      "Include physiological data (HRV monitors, telomere length, cortisol curves) as objective proof of distress",
      "Construct Monell liability claims demonstrating deliberate indifference in municipal dispatch filters"
    ],
    citationDetail: `Monell v. Department of Social Services (1978).\nCalifornia CCP § 527.6.\nSalka v. Drake, 1995 WL 413349 (9th Cir. 1995).`
  }
};
