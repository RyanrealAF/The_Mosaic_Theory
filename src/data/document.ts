export const paperTitle = "Physiological Damage and Constitutional Injury Under Coordinated Directed Social Aggression: A Medico-Legal Analysis of the Tip-Badge Loop and Distributed Targeting Campaigns";

export const paperMetadata = {
  author: "Ryan",
  contact: "purarecoveryryan@gmail.com",
  date: "2026-06-05",
  abstract: "Coordinated Directed Social Aggression (DSA) — defined as a sustained, multi-vector campaign of reputational destruction, social isolation, institutional weaponization, and digital suppression targeting a single civilian — produces measurable physiological harm at the neurological, endocrine, cardiovascular, and immunological levels. This paper argues that such campaigns constitute a dual-track assault: a biological assault producing complex trauma and allostatic collapse, and a constitutional assault producing actionable violations of the First, Fourth, and Fourteenth Amendments. Drawing on established research in neuroendocrinology, cardiovascular medicine, immunology, and telomere biology, Section I documents the specific physiological damage pathway produced by sustained DSA exposure. Section II constructs the constitutional injury framework, applying mosaic theory, the chilling effect doctrine, stigma-plus due process, and the joint action test under 42 U.S.C. § 1983 to the documented operational architecture. Section III synthesizes both tracks into a unified medico-legal argument: that DSA produces harms cognizable in both clinical and legal registers simultaneously, and that the courts' failure to recognize this convergence represents the primary accountability gap enabling the campaign architecture to persist. The paper concludes that clinical recognition of DSA-induced disability under the Americans with Disabilities Act (ADA), combined with aggressive application of the § 1983 joint action doctrine, constitutes the most viable pathway toward institutional remedy."
};

export const paperSections = [
  {
    id: "neuro",
    title: "1.1 Neurobiological Signature of Sustained Hypervigilance",
    tagline: "Neurological degradation under inescapable, unpredictable social stress.",
    content: `The physiological damage pathway in DSA begins with the nervous system's response to what the clinical literature identifies as inescapable, unpredictable threat. Unlike acute stressors — which activate and then resolve the threat-response architecture — chronic, distributed social aggression forces the target into a state of perpetual hypervigilance that bypasses normal habituation mechanisms. The body cannot habituate to a threat that does not resolve, that arrives from multiple vectors simultaneously, and that is deliberately designed to be deniable and therefore unresolvable through normal social mechanisms.

The primary neurobiological consequence is sustained activation of the Hypothalamic-Pituitary-Adrenal (HPA) axis. Under normal threat conditions, HPA activation produces cortisol release that mobilizes the organism for response, then resolves when the threat passes. Under DSA conditions, the threat does not pass. Community surveillance continues. Tip-based law enforcement contact recurs. Digital suppression continues. The HPA axis remains activated, and chronic cortisol elevation produces a cascade of neurobiological damage with well-documented structural consequences.

McEwen and Stellar's (1993) foundational research on allostatic load established the mechanism through which chronic HPA activation produces cumulative physiological cost. The allostatic load model distinguishes between the adaptive short-term stress response and the maladaptive long-term consequences of a system that cannot return to baseline. Repeated activation without recovery produces wear and tear across multiple regulatory systems — what McEwen termed the 'price of adaptation.' In the DSA context, that price is paid across five physiological domains that the clinical literature has documented with increasing precision.

At the structural neurological level, chronic cortisol elevation produces measurable damage to the hippocampus — the brain region most critical for memory consolidation, contextual sequencing, and the integration of disparate experiential data into coherent narrative. Sapolsky's (1996) research demonstrated that sustained glucocorticoid exposure causes dendritic atrophy in hippocampal CA3 pyramidal neurons, reducing the structural substrate available for memory formation and retrieval. The clinical consequence for DSA targets is specifically relevant: impaired capacity to sequence the events of their own victimization, reduced ability to construct coherent chronological accounts, and diminished working memory available for the complex organizational tasks required to build and maintain the documentation systems that constitute their primary defense. The campaign mechanism produces neurological damage that targets the exact cognitive capacities the subject needs to resist it.

Simultaneously, chronic cortisol inhibits prefrontal cortical function — the executive architecture responsible for complex planning, narrative organization, and the suppression of fear-based amygdala activation. Arnsten's (1998) research on stress and prefrontal function demonstrated that even acute cortisol elevation degrades prefrontal performance; under chronic DSA conditions, this inhibition becomes a persistent functional impairment. The subject attempting to organize legal documentation, construct counter-narratives, or manage the complex multi-front defense that DSA requires is doing so with degraded executive function produced by the very campaign they are attempting to document.`,
    metrics: [
      { label: "Cortisol Pathway", value: "HPA Axis Overdrive", desc: "Chronic cortisol release with zero baseline return." },
      { label: "Hippocampus", value: "CA3 Dendritic Atrophy", desc: "Impaired chronology synthesis & episodic memory sorting." },
      { label: "Prefrontal Cortex", value: "Executive Degradation", desc: "Forced executive function collapse during high-agency tasks." }
    ],
    citations: ["McEwen & Stellar (1993)", "Sapolsky (1996)", "Arnsten (1998)"]
  },
  {
    id: "cardio",
    title: "1.2 Cardiovascular Consequences: The Somatic Record",
    tagline: "Precise cardiac metrics proving autonomic nervous system lock.",
    content: `The cardiovascular system provides perhaps the most precisely measurable somatic record of sustained psychological stress. Heart Rate Variability (HRV) — the beat-to-beat variation in cardiac cycle length — serves as a direct physiological index of autonomic nervous system balance and, by extension, of the organism's capacity for flexible adaptive response. High HRV indicates a nervous system capable of shifting fluidly between activation and recovery. Low HRV indicates sympathetic dominance — a system locked in threat-response mode.

Thayer and Lane's (2000) neurovisceral integration model established the theoretical framework connecting HRV to psychological regulation and health outcomes. Subsequent research has consistently demonstrated that chronic psychosocial stress produces sustained HRV reduction, with the magnitude of reduction correlating with both the intensity and duration of the stressor. Kivimaki et al.'s (2012) landmark meta-analysis of work stress and cardiovascular disease — encompassing 197,473 participants across thirteen European cohort studies — established that chronic psychosocial stress confers a statistically significant increase in coronary heart disease incidence independent of traditional cardiovascular risk factors. The effect size was comparable to well-established cardiovascular risk factors including smoking and physical inactivity.

In the DSA context, the autonomic signature is consistent with sustained sympathetic dominance: the cardiovascular system of a target who cannot predict when the next law enforcement contact will occur, when the next manufactured tip will circulate, when the next social exclusion will be enacted, is a cardiovascular system that cannot return to parasympathetic recovery mode. The somatic record of DSA is written, measurably and progressively, in the target's cardiac physiology.`,
    metrics: [
      { label: "Heart Rate Variability", value: "Sustained HRV Drop", desc: "Clinical index of severe chronic sympathetic dominance." },
      { label: "Coronary Risk", value: "Significant Elevation", desc: "Equivalent risk impact to active nicotine consumption." },
      { label: "Autonomic Status", value: "Locked Sympathetic", desc: "Total inactivation of the restorative vagal brake." }
    ],
    citations: ["Thayer & Lane (2000)", "Kivimaki et al. (2012)"]
  },
  {
    id: "immuno",
    title: "1.3 Immunological Suppression & Inflammatory Signatures",
    tagline: "Social rejection treated by the body as a systemic physical wound.",
    content: `The immunological consequences of sustained social stress represent one of the most extensively documented physiological pathways in contemporary psychoneuroimmunology. Chronic HPA activation produces glucocorticoid-mediated immunosuppression through multiple mechanisms, including the downregulation of natural killer cell activity, the reduction of lymphocyte proliferation, and the dysregulation of cytokine signaling that coordinates inflammatory response.

Cacioppo and Hawkley's (2003) research on social isolation and health established a particularly relevant specific pathway: loneliness and perceived social disconnection — the precise destructive experience produced by DSA's isolation mechanism — produces measurable upregulation of inflammatory cytokines, including Interleukin-6 (IL-6) and Tumor Genesis Factor-alpha (TNF-alpha). This finding is counterintuitive but well-replicated: social isolation does not reduce inflammation through reduced exposure to pathogens; it increases inflammation through dysregulated immune signaling. The body treats social exclusion as a form of injury, mounting an inflammatory response to a wound that has no physical location.

The clinical significance of chronic IL-6 and TNF-alpha elevation extends beyond immunological function. Both cytokines cross the blood-brain barrier and directly affect neurotransmitter metabolism — specifically serotonin and dopamine — contributing to the motivational paralysis, anhedonia, and dysphoria that constitute what the clinical literature now recognizes as sickness behavior: the organism's adaptive reduction of goal-directed activity under conditions of systemic inflammatory load. In the DSA context, this mechanism produces what superficially resembles depression or motivational deficit but is more precisely understood as an accurate somatic response to a sustained physiological assault — a distinction with significant clinical and legal implications.`,
    metrics: [
      { label: "Upregulated Cytokines", value: "IL-6 & TNF-α Overdrive", desc: "Pro-inflammatory immune surge without physical pathogens." },
      { label: "Neurotransmitter Block", value: "Depletion Cascade", desc: "Direct inhibition of standard serotonin & dopamine pathways." },
      { label: "Clinical Outcome", value: "Sickness Behavior", desc: "Evolved physiological shutdown mislabeled as standard depression." }
    ],
    citations: ["Cacioppo & Hawkley (2003)"]
  },
  {
    id: "cellular",
    title: "1.4 Telomere Attrition & Biological Age Inflation",
    tagline: "The base-pair ledger of accelerated death at the cellular level.",
    content: `The most striking evidence of DSA's physiological impact appears at the cellular level, in the structure of telomeres — the protective nucleotide sequences that cap chromosomal ends and serve as a biological aging clock. Telomere length shortens with each cell division; critically, it also shortens in response to oxidative stress and chronic psychological stress through stress-induced oxidative damage to telomeric DNA. The enzyme telomerase, which maintains telomere length, is suppressed by chronic cortisol elevation.

Epel et al.'s (2004) landmark study in the Proceedings of the National Academy of Sciences established the direct link between perceived psychological stress and accelerated telomere attrition in a human sample. Women experiencing chronic caregiving stress showed significantly shorter telomeres and lower telomerase activity than controls — an effect equivalent to approximately ten additional years of cellular aging. Subsequent research has replicated and extended this finding across multiple populations and stress contexts, consistently demonstrating that the psychological experience of sustained inescapable stress accelerates the biological aging process at the molecular level.

In the DSA context, the implications are unambiguous: sustained campaign-induced stress does not merely produce psychological suffering. It accelerates the biological aging process at the cellular level, shortening the target's healthy lifespan in proportion to the duration and intensity of the campaign. This is not a metaphor for harm. It is the cellular ledger of harm, written in base pairs, readable in any properly equipped laboratory. The campaign against the documented subject has a measurable biological cost that will be paid in reduced healthy years of life — a cost as concrete as any physical injury, and one that the legal system has yet to develop adequate frameworks to address.`,
    metrics: [
      { label: "Cellular Aging Acceleration", value: "+10 Years Age Drift", desc: "Chromosomal wear matching an entire decade of chronological age." },
      { label: "Telomerase Enzyme", value: "Cortisol Suppression", desc: "Direct hormonal blockade of the cell's baseline self-repair enzyme." },
      { label: "Base-Pair Cost", value: "Irreversible Attrition", desc: "Concrete reduction of cumulative healthy biological reserves." }
    ],
    citations: ["Epel et al. (2004)"]
  },
  {
    id: "epistemic",
    title: "1.5 Weaponization of Perception & Pathologization Cycle",
    tagline: "Framing hypervigilance toward actual threats as mental instability.",
    content: `A specific and clinically significant feature of DSA-induced harm requires explicit treatment: the systematic weaponization of the target's accurate threat perception against them. In conventional trauma presentations, hypervigilance is a clinical symptom — the persistent activation of threat-detection in the absence of actual threat, indicating a nervous system that cannot distinguish past danger from present safety.

In the DSA context, this clinical framework inverts. The target's hypervigilance is not the activation of threat-detection in the absence of threat. It is the activation of threat-detection in the continuous presence of genuine, documented threat. The atmospheric shifts the target detects are real social phenomena. The surveillance they perceive is real coordinated monitoring. The manufactured tips they anticipate are actually filed. The hypervigilance is, in the DSA environment, a precisely calibrated and functionally accurate threat-detection system.

The campaign mechanism exploits this by systematically framing accurate threat perception as evidence of instability — pathologizing the target's correct responses to genuine provocation and using those pathologized responses as confirmation of the folk devil narrative the campaign constructed. Herman (1992) identified this mechanism — the systematic undermining of the target's epistemic self-trust — as one of the core features of complex trauma, distinguishing it from simple PTSD precisely by the absence of a safe recovery environment in which accurate and inaccurate perceptions can be re-calibrated. The clinical significance for treatment is that standard hypervigilance-reduction protocols are contraindicated where the threat is genuine. Adequate clinical treatment requires, as its precondition, the cessation of the campaign — which is, in turn, a legal problem requiring legal resolution.`,
    metrics: [
      { label: "Epistemic Intrusion", value: "Systemic Pathologization", desc: "Translating correct visual and social perception into psychiatric framing." },
      { label: "Vulnerability Loop", value: "Feedback Weapon", desc: "Using natural, defensive adaptation triggers to lock the exclusion trap." },
      { label: "Structural Difference", value: "Complex Trauma vs PTSD", desc: "Lack of baseline safe recovery zone makes habituation impossible." }
    ],
    citations: ["Herman (1992)", "Cohen (1972)"]
  },
  {
    id: "coercive",
    title: "2.1 - 2.4 Distributed Coercive Control & Infrastructure Attack",
    tagline: "Bridging domestic isolation logic to public/community geography.",
    content: `Evan Stark's (2007) foundational work on coercive control reframed the legal and clinical understanding of intimate partner violence by identifying control over the infrastructure of daily life — rather than discrete acts of physical violence — as the primary mechanism of harm. Stark's analysis demonstrated that abusers achieve dominance not principally through physical force but through systematic control of the victim's access to food, shelter, communication, financial resources, transportation, and social relationships. The domestic coercive control model, however, carries a structural limitation that DSA exposes. Stark's framework assumes a single controlling actor operating within a bounded physical space — the shared household.

Community-based DSA shatters this presupposition entirely. For an unhoused individual navigating a hostile community, the survival infrastructure is not concentrated in a single location. It is distributed across the community's commercial and institutional geography. The grocery store is the refrigerator. The restaurant is the kitchen. The coffee shop is the living room and the office simultaneously. The library is the communication hub, the workspace, and the shelter of last resort.

When a coordinated DSA campaign systematically approaches the staff of these locations, introduces the folk devil narrative, and achieves the effective exclusion of the target from each node in sequence, it has executed a distributed coercive control operation that is structurally identical to the domestic model in its functional consequences: the target's access to survival infrastructure has been comprehensively captured.

A campaign that requires the grocery store manager, the restaurant owner, the coffee shop barista, the library staff, and the public park security to all orient hostilely toward a single target has created a harm that is categorically more severe than any single actor's contribution. Harm is the product of the hostile interactions and the elimination of the recovery capacity that would otherwise bound their accumulation. A single hostile grocery store interaction, in the presence of a functional recovery environment, is a recoverable adversity. The same interaction, in a community where the restaurant, coffee shop, library, and public spaces have all been similarly converted, is a node in an inescapable pressure system whose cumulative physiological cost is categorically different in kind, not merely degree.`,
    metrics: [
      { label: "Infrastructure Attack", value: "Distributed Blockade", desc: "Treating commercial and public nodes as essential household extensions." },
      { label: "Functional Equivalency", value: "Total Access Denied", desc: "Removing grocery, coffee, and library nodes mimics house imprisonment." },
      { label: "The Multiplier Form", value: "Exclusion Squared", desc: "Harm is multiplied, not added, as nearby safe exit options drop to zero." }
    ],
    citations: ["Stark (2007)"]
  },
  {
    id: "const-first",
    title: "3.1 First Amendment: Accelerated Chilling Effect",
    tagline: "Weaponizing algorithm filters to enforce complete digital erasure.",
    content: `The First Amendment's protection of speech and press has long been understood to encompass not merely formal legal prohibition of expression but the broader chilling effect produced when individuals are deterred from expression by the fear of adverse consequence. The Supreme Court established this principle in Lamont v. Postmaster General (1965) and has applied it consistently across subsequent First Amendment jurisprudence: government action that substantially reduces the practical ability to exercise speech rights violates the First Amendment even where no formal prohibition exists.

Stage Five of the documented DSA operational architecture — digital erasure through coordinated platform reporting — produces precisely the conditions the chilling effect doctrine is designed to address. A digital content creator and independent journalist whose content is systematically reported to platform algorithms until suppression occurs cannot practically exercise First Amendment rights regardless of the formal absence of government censorship. The functional consequence is identical to a prior restraint: the capacity to document, report, and counter false narratives is severely compromised at precisely the moment when that capacity is most needed.

Where the coordinating actors in the digital suppression campaign have sufficient connection to governmental actors — as documented in the tip-badge loop mechanism that connects private narrative campaigns to formal law enforcement infrastructure — the state action requirement may be satisfied through the joint action doctrine rather than through the public function test.`,
    metrics: [
      { label: "Speech Obstruction", value: "Systemic Forced Restraint", desc: "Mass false flagging algorithms to lock counter-narratives." },
      { label: "Constitutional Core", value: "Indirect Censorship", desc: "Subverting public speech arenas through coordinated state-loop pipelines." },
      { label: "Action Source", value: "Joint Action Pipeline", desc: "Using public badge reliance to achieve private silencing objectives." }
    ],
    citations: ["Lamont v. Postmaster General (1965)", "Marsh v. Alabama (1946)"]
  },
  {
    id: "const-fourth",
    title: "3.2 Fourth Amendment: Mosaic Theory of Peer Surveillance",
    tagline: "The aggregation of harmless peer tips into warrantless tracking.",
    content: `The Fourth Amendment's protection against unreasonable searches and seizures has undergone significant doctrinal evolution in the digital era, culminating in the Supreme Court's recognition of the mosaic theory of surveillance in United States v. Jones (2012) and Carpenter v. United States (2018). The theoretical core of mosaic theory is the recognition that the aggregation of individually innocuous data points into a comprehensive behavioral profile constitutes a qualitatively different intrusion than any single observation — that the whole, in Fourth Amendment terms, is greater than the sum of its parts.

The DSA operational architecture documented here produces precisely the surveillance apparatus that mosaic theory is designed to address. Individual observations by business staff, neighbors, community members, and private security — each individually lawful — are systematically coordinated through the tip-badge loop mechanism into a comprehensive behavioral profile. The synchronized monitoring of entries and exits, the circulation of selectively edited footage, the maintenance of informal alert networks across businesses and neighborhoods, and the filing of clustered tip-based complaints with law enforcement collectively constitute a surveillance apparatus functionally equivalent to the persistent electronic monitoring the Court addressed in Carpenter. The Fourth Amendment harm is the systematic deprivation of these procedural protections — protections that attach automatically to formal law enforcement surveillance but are entirely absent from the distributed civilian surveillance the DSA architecture employs.`,
    metrics: [
      { label: "Surveillance Form", value: "Mosaic Crowdsourcing", desc: "Aggregation of standard civic behaviors into alert telemetry." },
      { label: "Carpenter Standard", value: "Functional Warrant Deficit", desc: "Relying on civilian networks to bypass Fourth Amendment protections." },
      { label: "Telemetry Ledger", value: "Informal Alert Webs", desc: "Undistinguishable real-time updates without procedural audits." }
    ],
    citations: ["United States v. Jones (2012)", "Carpenter v. United States (2018)"]
  },
  {
    id: "const-fourteenth",
    title: "3.3 Fourteenth Amendment: Stigma-Plus & State Loop Joint Action",
    tagline: "Connecting private crowd harassment to Section 1983 liability.",
    content: `The Fourteenth Amendment's due process guarantee protects against deprivation of liberty without notice and opportunity to respond. The Supreme Court's decision in Paul v. Davis (1976) established the stigma-plus standard: reputational damage alone is not a cognizable constitutional harm, but when reputational damage is combined with some additional tangible harm — denial of access, restriction of movement, loss of livelihood — a constitutionally cognizable liberty interest is implicated.

The DSA architecture documented here achieves the functional equivalent of stigma-plus deprivation through non-governmental actors operating in systematic coordination. The exhumation and circulation of historical offenses through informal gossip networks, combined with the systematic exclusion of the target from businesses, public spaces, and essential services, satisfies both prongs of the stigma-plus test.

The joint action doctrine established in Adickes v. S.H. Kress & Co. (1970) provides the mechanism for constitutional attribution. Under Adickes, a private actor who acts jointly with state officials to deprive a person of constitutional rights is liable under 42 U.S.C. § 1983 as if they were state actors. The 'willful participant in joint activity' standard does not require formal coordination or explicit agreement; it requires that the private actor and the state official reach a mutual understanding, explicit or tacit, to engage in the challenged conduct. In the DSA context, the tip-badge loop creates precisely this joint activity: private campaign actors file manufactured complaints; law enforcement responds, generating official contact that serves the campaign's narrative objectives; law enforcement officers who respond repeatedly to tip-based complaints from the same sources targeting the same individual without examining the pattern of manufactured instigation may satisfy the Adickes joint action test.

The Monell framework extends this analysis to municipal liability. Under Monell v. Department of Social Services (1978), municipal custom liability may attach when departments repeatedly execute dispatch-actions on manufactured allegations without verifying pattern-bias, forming a predictable custom that serves private harassment objectives.`,
    metrics: [
      { label: "Stigma-Plus", value: "Harm + Access Loss", desc: "Reputational assault coupled directly with systematic physical exclusion." },
      { label: "Joint Action Test", value: "Adickes Standard", desc: "Tacit understanding between private accusers and repeating police responders." },
      { label: "Municipal Fault", value: "Monell Custom Link", desc: "Systematic failure of municipal dispatch filters to catch pattern abuse." }
    ],
    citations: ["Paul v. Davis (1976)", "Adickes v. S.H. Kress & Co. (1970)", "Monell v. Department of Social Services (1978)"]
  },
  {
    id: "const-ada",
    title: "3.4 ADA: 'Regarded As' & Biological Disability Liability",
    tagline: "When campaign pathologization triggers statutory accommodation rights.",
    content: `The Americans with Disabilities Act provides a third legal framework with significant analytical traction in the DSA context. The ADA's 'regarded as' prong protects individuals who are treated as having a disability substantially limiting major life activities, regardless of whether they actually have one. In the DSA context, the campaign's systematic framing of the target's behavior as evidence of mental health instability may itself constitute regarding the target as disabled within the ADA's meaning, triggering accommodation obligations that, if violated, create independent ADA liability.

More significantly, the neurobiological damage produced by sustained DSA exposure — hippocampal atrophy impairing memory and narrative organization, prefrontal inhibition limiting executive function, immunological dysregulation contributing to cognitive decline — may constitute an actual disability under the ADA independent of the regarded-as theory. Where law enforcement, administrative institutions, or service providers encounter a DSA target whose cognitive functioning has been measurably impaired by campaign-induced neurobiological damage, those institutions have an obligation under Title II of the ADA to provide reasonable accommodations in administrative and legal contexts rather than mischaracterizing the resulting physiological symptoms as character pathology or evidence of instability. The practical implication is significant: the same neurobiological documentation that establishes clinical harm simultaneously establishes accommodation obligations that, if violated, create independent ADA liability.`,
    metrics: [
      { label: "Regarded-As Prong", value: "Pathology Framing", desc: "Campaign's framing triggers immediate legal protection constraints." },
      { label: "Actual Disability", value: "Neurobiological Damage", desc: "Clinically documented executive drop counts as statutory impairment." },
      { label: "Title II Mandate", value: "Accommodation Lock", desc: "Legal obligations force responders to adjust procedures, preventing default arrest/eviction." }
    ],
    citations: ["Americans with Disabilities Act (1990)"]
  },
  {
    id: "synthesis",
    title: "4.1 - 4.3 Medico-Legal Synthesis & Remedies",
    tagline: "Unifying biology, narrative, and civil liability into a theory of recovery.",
    content: `The analytical contribution of this paper is the identification of their convergence as a unified medico-legal theory: that the same operational mechanism produces measurable physiological damage and actionable constitutional violations simultaneously, and that the two tracks of harm are not merely coincident but causally linked through the same intermediate variable.

The mechanism is the tip-badge loop. It converts private narrative attack into official state response. That official response — law enforcement contact, administrative scrutiny, institutionally amplified surveillance — produces the inescapable, unpredictable, unresolvable threat environment that drives chronic HPA activation. The HPA activation produces the physiological damage cascade documented in Section I. The same official response also constitutes the state action that satisfies the constitutional requirements for § 1983 liability documented in Section II.

The Breadcrumb Web documentation architecture addresses this gap by converting the distributed campaign into a legible aggregate whose coordinated character becomes visible through the convergence of multiple independent evidentiary trails. The Dead Man's Switch protocol addresses a specific vulnerability in this strategy: converting potential victimization into asymmetric liability.

Clinical recognition of DSA as a distinct harm category — separate from ordinary social adversity, from conventional PTSD, and from the character pathology the campaign narrative attempts to impose — is not merely a matter of clinical completeness. It is a legal predicate. Clinical accuracy in the DSA context is, in this sense, a civil rights obligation.`,
    metrics: [
      { label: "The Unified Loop", value: "Tip-Badge Transduction", desc: "Private complaint -> police action -> neurobiological damage cascade." },
      { label: "Deterrence Model", value: "Dead Man's Switch", desc: "Automatic disclosure protocol neutralizing silencing incentives." },
      { label: "Clinical Mandate", value: "Aesthetic Diagnosis", desc: "Diagnosing the external targeting apparatus rather than pathologizing natural defenses." }
    ],
    citations: ["Herman (1992)", "Stark (2007)", "42 U.S.C. § 1983"]
  }
];

export const documentFullText = `PHYSIOLOGICAL AND CONSTITUTIONAL HARM

Physiological Damage and Constitutional Injury Under Coordinated Directed Social Aggression:
A Medico-Legal Analysis of the Tip-Badge Loop and Distributed Targeting Campaigns

Author Note
This paper synthesizes primary case documentation, established clinical literature, and federal constitutional doctrine to construct a unified medico-legal argument. The subject of the documented case is the author. That dual position — researcher and primary evidence source — is not a methodological weakness; it is the epistemological condition that makes this analysis possible. The precision of the harm profile presented here derives from the author's direct physiological and social experience of the phenomena under examination, cross-validated against peer-reviewed clinical research and binding federal precedent. Correspondence: purarecoveryryan@gmail.com

Abstract
Coordinated Directed Social Aggression (DSA) — defined as a sustained, multi-vector campaign of reputational destruction, social isolation, institutional weaponization, and digital suppression targeting a single civilian — produces measurable physiological harm at the neurological, endocrine, cardiovascular, and immunological levels. This paper argues that such campaigns constitute a dual-track assault: a biological assault producing complex trauma and allostatic collapse, and a constitutional assault producing actionable violations of the First, Fourth, and Fourteenth Amendments. Drawing on established research in neuroendocrinology, cardiovascular medicine, immunology, and telomere biology, Section I documents the specific physiological damage pathway produced by sustained DSA exposure. Section II constructs the constitutional injury framework, applying mosaic theory, the chilling effect doctrine, stigma-plus due process, and the joint action test under 42 U.S.C. § 1983 to the documented operational architecture. Section III synthesizes both tracks into a unified medico-legal argument: that DSA produces harms cognizable in both clinical and legal registers simultaneously, and that the courts' failure to recognize this convergence represents the primary accountability gap enabling the campaign architecture to persist. The paper concludes that clinical recognition of DSA-induced disability under the Americans with Disabilities Act (ADA), combined with aggressive application of the § 1983 joint action doctrine, constitutes the most viable pathway toward institutional remedy.

Keywords: directed social aggression, allostatic load, complex PTSD, HPA axis dysregulation, telomere attrition, mosaic theory, Fourth Amendment, chilling effect, stigma-plus, 42 U.S.C. § 1983, joint action doctrine, ADA, folk devil, tip-badge loop

INTRODUCTION
The literature on psychological warfare has historically concerned itself with state-versus-state operations: Cold War disinformation campaigns, military psychological operations doctrine, foreign interference in democratic processes. What has received comparatively little systematic attention is the application of these same operational architectures at the individual level — campaigns in which the full infrastructure of narrative manipulation, social network exploitation, institutional co-option, and digital suppression is brought to bear against a single civilian target operating without institutional recourse.

This paper addresses that gap at two levels simultaneously. The first is clinical: the physiological damage produced by sustained Directed Social Aggression (DSA) is not metaphorical, not merely psychological, and not limited to the subjective suffering of the target. It is measurable, multisystemic, and progressive. It produces neurological degradation, endocrine dysregulation, cardiovascular damage, immunological suppression, and cellular aging at rates that diverge significantly from population baselines. The second level is constitutional: the same operational architecture that produces this physiological harm also constitutes a systematic violation of First, Fourth, and Fourteenth Amendment protections, actionable under 42 U.S.C. § 1983 where the coordinating actors maintain sufficient connection to state authority.

The operational architecture under examination has been documented in primary source materials produced by the subject-author across multiple California jurisdictions. That architecture consists of five operational stages: atmospheric poisoning (preemptive reputation contamination), civilian weaponization (recruitment of unwitting community actors as surveillance proxies), institutional badge play (co-option of law enforcement through manufactured tip campaigns), the entrapment loop (engineered provocations designed to generate fabricated evidence of instability), and digital erasure (coordinated suppression of the target's counter-narrative capacity). Each stage contributes independently to the physiological harm profile. In aggregate, they constitute the systemic constitutional violation this paper documents.

The central argument is this: DSA is not a social conflict with unfortunate health side effects. It is a form of bio-social warfare in which a civilian target is subjected to sustained, coordinated, deniable attack that produces measurable damage at the cellular level and systematic deprivation of constitutional rights — simultaneously, through the same operational mechanism. Recognizing this convergence is the necessary precondition for developing adequate legal and clinical remedies.

SECTION I. THE PHYSIOLOGICAL DAMAGE PROFILE: FROM ATMOSPHERIC STRESS TO CELLULAR AGING

1.1 The Neurobiological Signature of Sustained Hypervigilance
The physiological damage pathway in DSA begins with the nervous system's response to what the clinical literature identifies as inescapable, unpredictable threat. Unlike acute stressors — which activate and then resolve the threat-response architecture — chronic, distributed social aggression forces the target into a state of perpetual hypervigilance that bypasses normal habituation mechanisms. The body cannot habituate to a threat that does not resolve, that arrives from multiple vectors simultaneously, and that is deliberately designed to be deniable and therefore unresolvable through normal social mechanisms.

The primary neurobiological consequence is sustained activation of the Hypothalamic-Pituitary-Adrenal (HPA) axis. Under normal threat conditions, HPA activation produces cortisol release that mobilizes the organism for response, then resolves when the threat passes. Under DSA conditions, the threat does not pass. Community surveillance continues. Tip-based law enforcement contact recurs. Digital suppression continues. The HPA axis remains activated, and chronic cortisol elevation produces a cascade of neurobiological damage with well-documented structural consequences.

McEwen and Stellar's (1993) foundational research on allostatic load established the mechanism through which chronic HPA activation produces cumulative physiological cost. The allostatic load model distinguishes between the adaptive short-term stress response and the maladaptive long-term consequences of a system that cannot return to baseline. Repeated activation without recovery produces wear and tear across multiple regulatory systems — what McEwen termed the 'price of adaptation.' In the DSA context, that price is paid across five physiological domains that the clinical literature has documented with increasing precision.

At the structural neurological level, chronic cortisol elevation produces measurable damage to the hippocampus — the brain region most critical for memory consolidation, contextual sequencing, and the integration of disparate experiential data into coherent narrative. Sapolsky's (1996) research demonstrated that sustained glucocorticoid exposure causes dendritic atrophy in hippocampal CA3 pyramidal neurons, reducing the structural substrate available for memory formation and retrieval. The clinical consequence for DSA targets is specifically relevant: impaired capacity to sequence the events of their own victimization, reduced ability to construct chronological accounts, and diminished working memory available for the complex organizational tasks required to build the documentation systems that constitute their defense. The campaign mechanism produces neurological damage that targets the exact cognitive capacities the subject needs to resist it.

Simultaneously, chronic cortisol inhibits prefrontal cortical function — the executive architecture responsible for complex planning, narrative organization, and the suppression of fear-based amygdala activation. Arnsten's (1998) research on stress and prefrontal function demonstrated that even acute cortisol elevation degrades prefrontal performance; under chronic DSA conditions, this inhibition becomes a persistent functional impairment. The subject attempting to organize legal documentation, construct counter-narratives, or manage the complex multi-front defense that DSA requires is doing so with degraded executive function produced by the very campaign they are attempting to document.

1.2 Cardiovascular Consequences: The Somatic Record of Sustained Threat
The cardiovascular system provides perhaps the most precisely measurable somatic record of sustained psychological stress. Heart Rate Variability (HRV) — the beat-to-beat variation in cardiac cycle length — serves as a direct physiological index of autonomic nervous system balance and, by extension, of the organism's capacity for flexible adaptive response. High HRV indicates a nervous system capable of shifting fluidly between activation and recovery. Low HRV indicates sympathetic dominance — a system locked in threat-response mode.

Thayer and Lane's (2000) neurovisceral integration model established the theoretical framework connecting HRV to psychological regulation and health outcomes. Subsequent research has consistently demonstrated that chronic psychosocial stress produces sustained HRV reduction, with the magnitude of reduction correlating with both the intensity and duration of the stressor. Kivimaki et al.'s (2012) landmark meta-analysis of work stress and cardiovascular disease — encompassing 197,473 participants across thirteen European cohort studies — established that chronic psychosocial stress confers a statistically significant increase in coronary heart disease incidence independent of traditional cardiovascular risk factors. The effect size was comparable to well-established cardiovascular risk factors including smoking and physical inactivity.

In the DSA context, the autonomic signature is consistent with sustained sympathetic dominance: the cardiovascular system of a target who cannot predict when the next law enforcement contact will occur, when the next manufactured tip will circulate, when the next social exclusion will be enacted, is a cardiovascular system that cannot return to parasympathetic recovery mode. The somatic record of DSA is written, measurably and progressively, in the target's cardiac physiology.

1.3 Immunological Suppression: The Inflammatory Signature of Social Exclusion
The immunological consequences of sustained social stress represent one of the most extensively documented physiological pathways in contemporary psychoneuroimmunology. Chronic HPA activation produces glucocorticoid-mediated immunosuppression through multiple mechanisms, including the downregulation of natural killer cell activity, the reduction of lymphocyte proliferation, and the dysregulation of cytokine signaling that coordinates inflammatory response.

Cacioppo and Hawkley's (2003) research on social isolation and health established a particularly relevant specific pathway: loneliness and perceived social disconnection — the precise subjective experience produced by DSA's isolation mechanism — produces measurable upregulation of inflammatory cytokines, including Interleukin-6 (IL-6) and Tumor Necrosis Factor-alpha (TNF-alpha). This finding is counterintuitive but well-replicated: social isolation does not reduce inflammation through reduced exposure to pathogens; it increases inflammation through dysregulated immune signaling. The body treats social exclusion as a form of injury, mounting an inflammatory response to a wound that has no physical location.

The clinical significance of chronic IL-6 and TNF-alpha elevation extends beyond immunological function. Both cytokines cross the blood-brain barrier and directly affect neurotransmitter metabolism — specifically serotonin and dopamine — contributing to the motivational paralysis, anhedonia, and dysphoria that constitute what the clinical literature now recognizes as sickness behavior: the organism's adaptive reduction of goal-directed activity under conditions of systemic inflammatory load. In the DSA context, this mechanism produces what superficially resembles depression or motivational deficit but is more precisely understood as an accurate somatic response to a sustained physiological assault — a distinction with significant clinical and legal implications.

1.4 Telomere Attrition: The Cellular Ledger of Accelerated Aging
The most striking evidence of DSA's physiological impact appears at the cellular level, in the structure of telomeres — the protective nucleotide sequences that cap chromosomal ends and serve as a biological aging clock. Telomere length shortens with each cell division; critically, it also shortens in response to oxidative stress and chronic psychological stress through stress-induced oxidative damage to telomeric DNA. The enzyme telomerase, which maintains telomere length, is suppressed by chronic cortisol elevation.

Epel et al.'s (2004) landmark study in the Proceedings of the National Academy of Sciences established the direct link between perceived psychological stress and accelerated telomere attrition in a human sample. Women experiencing chronic caregiving stress showed significantly shorter telomeres and lower telomerase activity than controls — an effect equivalent to approximately ten additional years of cellular aging. Subsequent research has replicated and extended this finding across multiple populations and stress contexts, consistently demonstrating that the psychological experience of sustained inescapable stress accelerates the biological aging process at the molecular level.

In the DSA context, the implications are unambiguous: sustained campaign-induced stress does not merely produce psychological suffering. It accelerates the biological aging process at the cellular level, shortening the target's healthy lifespan in proportion to the duration and intensity of the campaign. This is not a metaphor for harm. It is the cellular ledger of harm, written in base pairs, readable in any properly equipped laboratory. The campaign against the documented subject has a measurable biological cost that will be paid in reduced healthy years of life — a cost as concrete as any physical injury, and one that the legal system has yet to develop adequate frameworks to address.

1.5 The Weaponization of Accurate Perception: Hypervigilance as Diagnostic Evidence
A specific and clinically significant feature of DSA-induced harm requires explicit treatment: the systematic weaponization of the target's accurate threat perception against them. In conventional trauma presentations, hypervigilance is a clinical symptom — the persistent activation of threat-detection in the absence of actual threat, indicating a nervous system that cannot distinguish past danger from present safety.

In the DSA context, this clinical framework inverts. The target's hypervigilance is not the activation of threat-detection in the absence of threat. It is the activation of threat-detection in the continuous presence of genuine, documented threat. The atmospheric shifts the target detects are real social phenomena. The surveillance they perceive is real coordinated monitoring. The manufactured tips they anticipate are actually filed. The hypervigilance is, in the DSA environment, a precisely calibrated and functionally accurate threat-detection system.

The campaign mechanism exploits this by systematically framing accurate threat perception as evidence of instability — pathologizing the target's correct responses to genuine provocation and using those pathologized responses as confirmation of the folk devil narrative the campaign constructed. Herman (1992) identified this mechanism — the systematic undermining of the target's epistemic self-trust — as one of the core features of complex trauma, distinguishing it from simple PTSD precisely by the absence of a safe recovery environment in which accurate and inaccurate perceptions can be re-calibrated. The clinical significance for treatment is that standard hypervigilance-reduction protocols are contraindicated where the threat is genuine. Adequate clinical treatment requires, as its precondition, the cessation of the campaign — which is, in turn, a legal problem requiring legal resolution.

SECTION II. COERCIVE CONTROL AND DISTRIBUTED INFRASTRUCTURE TARGETING

2.1 The Coercive Control Framework and Its Domestic Limitation
Evan Stark's (2007) foundational work on coercive control reframed the legal and clinical understanding of intimate partner violence by identifying control over the infrastructure of daily life — rather than discrete acts of physical violence — as the primary mechanism of harm. Stark's analysis demonstrated that abusers achieve dominance not principally through physical force but through systematic control of the victim's access to food, shelter, communication, financial resources, transportation, and social relationships. The severity of coercive control, under Stark's framework, is not measured by the intensity of any single incident but by the comprehensiveness of the infrastructure capture: the degree to which the abuser has interposed themselves between the victim and every system the victim requires to meet basic survival needs and maintain autonomous function.

The domestic coercive control model, however, carries a structural limitation that DSA exposes. Stark's framework assumes a single controlling actor operating within a bounded physical space — the shared household. The abuser controls the refrigerator, phone, or front door. The remedial logic that flows from this domestic model presupposes that the infrastructure deprivation has a single identifiable source that can be targeted by a single legal intervention. Community-based DSA shatters this presupposition entirely.

2.2 The Distributed Infrastructure Attack: When the Neighborhood Becomes the Abuser
For an unhoused individual navigating a hostile community, the survival infrastructure is not concentrated in a single location. It is distributed across the community's commercial and institutional geography. The grocery store is the refrigerator. The restaurant is the kitchen. The coffee shop is the living room and the office simultaneously. The library is the communication hub, the workspace, and the shelter of last resort. Public electrical outlets are the power grid. These distributed nodes collectively constitute the functional equivalent of a household — the infrastructure system through which the individual meets the basic physiological and professional requirements of daily life.

When a coordinated DSA campaign systematically approaches the staff of these locations, introduces the folk devil narrative, and achieves the effective exclusion of the target from each node in sequence, it has executed a distributed coercive control operation that is structurally identical to the domestic model in its functional consequences: the target's access to survival infrastructure has been comprehensively captured.

The DSA context applies this logic: rather than one actor harming multiple victims, multiple actors coordinate to harm one target. The distribution runs in the opposite direction, but the aggravation logic is precisely analogous. A campaign that requires the grocery store manager, the restaurant owner, the coffee shop barista, the library staff, and the public park security to all orient hostilely toward a single target has created a harm that is categorically more severe than any single actor's contribution — not merely because the cumulative harm is greater, but because the distributed character of the campaign eliminates every avenue of self-help simultaneously, removes every potential recovery environment, and makes the identification of a single responsible party for legal purposes structurally impossible under existing frameworks.

2.3 The Multiplier Effect: Severity as a Function of Distribution
Community-based DSA achieves this comprehensive exit-option elimination by a different mechanism — not by a single actor extending control outward from a central location, but by a distributed network converting the community's infrastructure into a collectively hostile environment from which no exit is locally available. The target cannot leave the controlled household because there is no single controlled household to leave. The entire accessible community has been converted into the controlled environment. The distributed physical character of the campaign does not reduce its severity; it eliminates the remedial option that makes single-actor coercive control legally addressable.

This produces a severity multiplier with a precise functional form: harm is not simply the sum of each individual hostile interaction. Harm is the product of the hostile interactions and the elimination of the recovery capacity that would otherwise bound their accumulation. A single hostile grocery store interaction, in the presence of a functional recovery environment, is a recoverable adversity. The same interaction, in a community where the restaurant, coffee shop, library, and public spaces have all been similarly converted, is a node in an inescapable pressure system whose cumulative physiological cost is categorically different in kind, not merely degree.

SECTION III. CONSTITUTIONAL INJURY: THE LEGAL ARCHITECTURE OF DISTRIBUTED TARGETING

3.1 First Amendment: The Chilling Effect at Scale
The First Amendment's protection of speech and press has long been understood to encompass not merely formal legal prohibition of expression but the broader chilling effect produced when individuals are deterred from expression by the fear of adverse consequence. Lamont v. Postmaster General (1965) established this principle: government action that substantially reduces the practical ability to exercise speech rights violates the First Amendment even where no formal prohibition exists.

Stage Five of the documented DSA operational architecture — digital erasure through coordinated platform reporting — produces precisely the conditions the chilling effect doctrine is designed to address. A digital content creator and independent journalist whose content is systematically reported to platform algorithms until suppression occurs cannot practically exercise First Amendment rights. The functional consequence is identical to a prior restraint: the capacity to document, report, and counter false narratives is severely compromised. Where the coordinating actors in the digital suppression campaign have sufficient connection to governmental actors — as documented in the tip-badge loop mechanism — the state action requirement may be satisfied through the joint action doctrine.

3.2 Fourth Amendment: Mosaic Theory and the Coordinated Surveillance Apparatus
The Fourth Amendment's protection against unreasonable searches and seizures has recognized the mosaic theory of surveillance in United States v. Jones (2012) and Carpenter v. United States (2018). The theoretical core of mosaic theory is the recognition that the aggregation of individually innocuous data points into a comprehensive behavioral profile constitutes a qualitatively different intrusion than any single observation — that the whole is greater than the sum of its parts.

The DSA operational architecture produces precisely the surveillance apparatus that mosaic theory is designed to address. Individual observations by business staff, neighbors, community members, and private security — each individually lawful — are systematically coordinated through the tip-badge loop mechanism into a comprehensive behavioral profile. The synchronized monitoring of entries and exits, the circulation of selectively edited footage, the maintenance of informal alert networks, and the filing of clustered tip-based complaints with law enforcement collectively constitute a surveillance apparatus functionally equivalent to the persistent electronic monitoring in Carpenter. The Fourth Amendment harm is the systematic deprivation of these procedural protections — protections that attach automatically to formal law enforcement surveillance but are entirely absent from the distributed civilian surveillance the DSA architecture employs.

3.3 Fourteenth Amendment: Stigma-Plus, Substantive Due Process, and the Liberty Interest
The Fourteenth Amendment's due process guarantee protects against deprivation of liberty without notice and opportunity to respond. Paul v. Davis (1976) established the stigma-plus standard: reputational damage alone is not a cognizable constitutional harm, but when reputational damage is combined with some additional tangible harm — denial of access, restriction of movement, loss of livelihood — a constitutionally cognizable liberty interest is implicated.

The DSA architecture achieves this standard: exhumation and circulation of historical offenses through informal networks combined with the systematic exclusion of the target from businesses, public spaces, and essential services satisfies both prongs of the stigma-plus test.

The joint action doctrine established in Adickes v. S.H. Kress & Co. (1970) provides the mechanism for constitutional attribution. Under Adickes, a private actor who acts jointly with state officials to deprive a person of constitutional rights is liable under 42 U.S.C. § 1983 as if they were state actors. In the DSA context, the tip-badge loop creates joint activity: private campaign actors file manufactured complaints; law enforcement responds, generating official contact that serves the campaign's narrative objectives; law enforcement officers who respond repeatedly to tip-based complaints from the same sources targeting the same individual without examining the pattern of manufactured instigation may satisfy the Adickes joint action test.

Under Monell v. Department of Social Services (1978), municipal custom liability may attach when departments repeatedly execute dispatch-actions on manufactured allegations without verifying pattern-bias, forming a municipal custom that directly enables a private harassment loop.

3.4 ADA: Recognized-As Disability and the Clinical Record as Legal Instrument
The Americans with Disabilities Act protects individuals who are treated as having a disability ('regarded as' prong) or who experience actual neurobiological damage produced by sustained DSA exposure — hippocampal atrophy, prefrontal inhibition, and immunological dysregulation. Under Title II of the ADA, administrative institutions and law enforcement agencies have an obligation to provide reasonable accommodations rather than mischaracterizing the resulting physiological symptoms as character pathology or evidence of instability. The legal and clinical records are not parallel tracks leading to separate remedies; they are integrated documentation of a single harm producing liability across multiple legal frameworks simultaneously.

SECTION IV. THE MEDICO-LEGAL SYNTHESIS: CONVERGENCE AS THEORY OF HARM

4.1 The Integrated Harm Structure: One Machine, Two Outputs
The two tracks of harm are causally linked through the same intermediate variable: the tip-badge loop. It converts private narrative attack into official state response. That official response — law enforcement contact, administrative scrutiny, institutionally amplified surveillance — produces the inescapable, unpredictable, unresolvable threat environment that drives chronic HPA activation. The HPA activation produces the physiological damage cascade. The same official response also constitutes the state action that satisfies the constitutional requirements for § 1983 liability.

4.2 The Accountability Gap and the Documentation Imperative
The distributed, deniable character of DSA is the mechanism by which it evades accountability. The Breadcrumb Web documentation architecture addresses this gap by converting the distributed campaign into a legible aggregate whose coordinated character becomes visible through the convergence of multiple independent evidentiary trails. The Dead Man's Switch protocol addresses a specific vulnerability in this strategy: converting potential victimization into asymmetric liability, making incapacitation the trigger for automatic disclosure.

4.3 Clinical Recognition as Legal Predicate
The ADA accommodation argument requires clinical documentation of DSA-induced neurobiological impairment. The § 1983 damages argument requires clinical documentation of the physiological harm causally attributable to the joint action of campaign actors and state responders. Clinical accuracy in the DSA context is, in this sense, a civil rights obligation.

CONCLUSION
Coordinated Directed Social Aggression is a form of violence that is none the less severe for its invisibility. The physiological damage is real, measurable, and biological: hippocampal atrophy, prefrontal inhibition, cardiovascular decline, immunological inflammation, and telomere shortening equivalent to a decade of cellular aging. The constitutional violations are equally concrete: First Amendment chilling, Fourth Amendment mosaic surveillance, and Fourteenth Amendment stigma-plus liberty deprivation. The tip-badge loop is the unified mechanism linking these harms. Utilizing systematic evidentiary collection, clinical recognition of trauma as a legal predicate, and robust joint-action litigation offers the most direct path toward institutional accountability.

REFERENCES
Adickes v. S.H. Kress & Co., 398 U.S. 144 (1970).
Americans with Disabilities Act of 1990, Pub. L. No. 101-336, 104 Stat. 327 (codified as amended at 42 U.S.C. §§ 12101–12213).
Arnsten, A. F. T. (1998). Catecholamine modulation of prefrontal cortical cognitive function. Trends in Cognitive Sciences, 2(11), 436–447.
Cacioppo, J. T., & Hawkley, L. C. (2003). Social isolation and health, with an emphasis on underlying mechanisms. Perspectives in Biology and Medicine, 46(3), S39–S52.
Carpenter v. United States, 585 U.S. 296 (2018).
Cohen, S. (1972). Folk devils and moral panics: The creation of the Mods and Rockers. MacGibbon and Kee.
Epel, E. S., Blackburn, E. H., Lin, J., Dhabhar, F. S., Adler, N. E., Morrow, J. D., & Cawthon, R. M. (2004). Accelerated telomere shortening in response to life stress. Proceedings of the National Academy of Sciences, 101(49), 17312–17315.
Herman, J. L. (1992). Trauma and recovery: The aftermath of violence — from domestic abuse to political terror. Basic Books.
Kivimaki, M., Nyberg, S. T., Batty, G. D., Fransson, E. I., Heikkila, K., Alfredsson, L., & Theorell, T. (2012). Job strain as a risk factor for coronary heart disease: A collaborative meta-analysis of individual participant data. The Lancet, 380(9852), 1491–1497.
Lamont v. Postmaster General, 381 U.S. 301 (1965).
Marsh v. Alabama, 326 U.S. 501 (1946).
McEwen, B. S., & Stellar, E. (1993). Stress and the individual: Mechanisms leading to disease. Archives of Internal Medicine, 153(18), 2093–2101.
Monell v. Department of Social Services, 436 U.S. 658 (1978).
Paul v. Davis, 424 U.S. 693 (1976).
Sapolsky, R. M. (1996). Why stress is bad for your brain. Science, 273(5276), 749–750.
Seligman, M. E. P. (1975). Helplessness: On depression, development, and death. W. H. Freeman.
Thayer, J. F., & Lane, R. D. (2000). A model of neurovisceral integration in emotion regulation and dysregulation. Journal of Affective Disorders, 61(3), 201–216.
United States v. Jones, 565 U.S. 400 (2012).
Walker, P. (2013). Complex PTSD: From surviving to thriving. Azure Coyote Publishing.
42 U.S.C. § 1983 (Civil action for deprivation of rights).`;

// Imports and setup for the new modular multi-document architecture
import { 
  paper2Title, 
  paper2Metadata, 
  paper2Sections, 
  document2FullText 
} from "./document2Data";

export interface Paper {
  id: string;
  title: string;
  metadata: {
    author: string;
    contact: string;
    date: string;
    abstract: string;
  };
  sections: Array<{
    id: string;
    title: string;
    tagline: string;
    content: string;
    metrics: Array<{ label: string; value: string; desc: string }>;
    citations: string[];
  }>;
  fullText: string;
}

export const papers: Paper[] = [
  {
    id: "physiological-constitutional",
    title: "Physiological Damage and Constitutional Injury Under Coordinated Directed Social Aggression: A Medico-Legal Analysis of the Tip-Badge Loop and Distributed Targeting Campaigns",
    metadata: paperMetadata,
    sections: paperSections,
    fullText: documentFullText
  },
  {
    id: "mosaic-theory",
    title: paper2Title,
    metadata: paper2Metadata,
    sections: paper2Sections,
    fullText: document2FullText
  }
];

// Aggregated context string for server-side AI referencing both primary manuals
export const combinedDocumentFullText = papers.map(p => `=== DOCUMENT ID: ${p.id} ===\nTITLE: ${p.title}\n\nABSTRACT:\n${p.metadata.abstract}\n\nFULL TEXT CONTENT:\n${p.fullText}`).join("\n\n=======================================================\n\n");

