# ICSE Class 10 Chemistry — Chapters 12A and 12B: Design

**Date:** 20 November 2026
**Status:** Approved in chat
**Delivery:** Vue 3 + Vite multi-page static application for GitHub Pages
**Syllabus:** CISCE ICSE Chemistry (Science Paper 2), examination year 2027
**Units:** 9(ii)–(iv) for 12A; 9(v) alkanes for 12B
**Source material:** Supplied scanned pages of Chapter 12A (book pp. 194–209) and Chapter 12B (book pp. 210–216)

---

## 1. Context

The project currently contains one interactive chapter: **Organic Chemistry, Chapter 1: Introduction to Organic Compounds**. It is scoped to Unit 9(i), the introduction. The supplied PDF contains the next two chapters:

- **12A — Organic Compounds:** organic compounds and sources, organic vs inorganic comparison, carbon's tetravalency and catenation, bond and chain types, hydrocarbons, structural formulae, alkyl groups, functional groups, homologous series, IUPAC nomenclature and isomerism.
- **12B — Hydrocarbons: Alkanes:** the alkane family, sources, chain isomerism, methane and ethane occurrence and structure, laboratory preparation, other preparation methods, physical properties, combustion, substitution with chlorine and uses.

The user asked to leave the current chapter's content aside and create the two new chapters. The agreed arrangement is:

1. Keep the existing Chapter 1 content.
2. Add 12A and 12B as the next two chapters.
3. Move to a root chapter list.
4. Retire the unbuilt “tetravalency Chapter 2” design; 12A absorbs that material.

The user also chose:

- **Full standalone reteach in 12A**, including material that overlaps Chapter 1, so 12A works without prior use of Chapter 1.
- **Follow the supplied book's emphasis** and omit items the book marks “not in syllabus”.
- **Full parity with Chapter 1** for both new chapters: hero, lessons, quick checks, purpose-built labs, memory/revision centre, assessment, performance report and local progress.

---

## 2. Goals and non-goals

### Goals

1. Add two complete, syllabus-mapped, interactive chapters without removing or degrading Chapter 1.
2. Give each chapter independent local progress, assessment, reset and score reporting.
3. Use the supplied book's sequence, terminology, worked examples and IUPAC style.
4. Keep the existing warm-paper/teal/amber design language and accessibility standards.
5. Keep the build static, dependency-light and portable to a GitHub Pages project subpath.
6. Make the chapter architecture reusable for later chapters (12C, 12D, ethanol, acetic acid).

### Non-goals

- Teaching alkenes and alkynes in 12B. They belong to later chapters.
- Teaching ethanol or acetic acid as full topics.
- Teaching reaction mechanisms, hybridisation, molecular-orbital theory or advanced stereochemistry.
- Copying the book's exercise questions verbatim.
- Claiming that CISCE prescribes the supplied textbook.
- Cross-device progress sync, accounts or a backend.
- Adding a router, state library, CSS framework, remote fonts or remote images.

---

## 3. Decisions from the design conversation

| Decision | Choice |
|---|---|
| Existing chapter | Keep its content; move it behind the new chapter list |
| Old tetravalency Chapter 2 spec | Retire; absorb the material into 12A |
| 12A overlap with Chapter 1 | Full standalone reteach |
| Source emphasis | Follow the book's highlighted core content and exercises; omit explicitly non-syllabus items |
| Depth | Full parity with Chapter 1 for both chapters |
| Site structure | Root chapter list; separate chapter pages |
| Chapter order | Chapter 1 → 12A → 12B |

---

## 4. Chapter 12A — scope and lesson map

### 4.1 Scope

**In scope**

- Organic chemistry: origin of the name, vital-force theory, Wöhler's urea synthesis, Kolbe and Berthelot, modern definition.
- Sources of organic compounds: plants, animals, coal, petroleum, fermentation, wood, synthetic methods.
- Applications of organic chemistry.
- Comparison of organic and inorganic compounds: carbon presence, solubility, melting/boiling point, combustion, bonding, conductivity, isomerism, colour and smell, reaction rate.
- Carbon's tetravalency; catenation; single, double and triple bonds; straight, branched and cyclic chains; self-linking; isomerism as a consequence of carbon's bonding.
- Types of organic compounds: hydrocarbons and derivatives.
- Hydrocarbon classification: aliphatic vs cyclic; saturated vs unsaturated; alkanes, alkenes, alkynes; alicyclic and aromatic; benzene structure.
- Structural formulae, condensed formulae and carbon skeletons.
- Alkyl groups: methyl, ethyl, propyl, butyl; general formula CₙH₂ₙ₊₁.
- Primary, secondary, tertiary and quaternary carbon atoms.
- Functional groups: halide, double bond, triple bond, hydroxyl, aldehyde, carboxyl, ketone, ether and ester; general formulae, prefixes and suffixes.
- Homologous series: definition, general formulae, CH₂/14 u difference, gradation in physical properties, similar chemical properties, significance.
- Simple IUPAC nomenclature: trivial vs IUPAC; root word; primary and secondary suffixes; primary and secondary prefixes; longest-chain rule; numbering from the end giving the lowest locant; lowest-sum rule; alphabetical order; functional-group priority; worked names; writing structural formulae from names.
- Structural isomerism: chain and position as examinable; functional isomerism as a labelled extension.

**Out of scope / omitted**

- Metamerism (book marks it “not in syllabus”).
- Detailed reaction mechanisms of any family.
- Preparation and reactions of alkenes, alkynes, alcohols or carboxylic acids beyond their use as nomenclature examples.
- Benzene reactions and delocalisation beyond the structural preview.
- Polymers, isomer counting beyond simple examples, and stereoisomerism.

### 4.2 Lesson map

#### Lesson 1 — Organic compounds and why carbon is special

Covers 12.1–12.3.

- Opening observation linking candle wax, carbon compounds and living/mineral sources.
- Meaning of “organic”; vital-force theory; Wöhler's 1828 urea synthesis; Kolbe's 1845 acetic acid; Berthelot's 1856 synthesis.
- Modern definition and the standard carbon-containing inorganic exceptions.
- Sources of organic compounds and applications.
- Organic vs inorganic comparison table, taught as trends with exceptions.
- Carbon: atomic number 6, electronic configuration 2,4, tetravalency, catenation.
- Single, double and triple bonds; straight, branched and cyclic skeletons; self-linking.
- Why carbon gives rise to a very large number of compounds.
- Three quick checks.

Interactives:

- `CarbonSkeletonLab` or reused `ChainLab`: toggle straight, branched and cyclic skeletons; show the carbon skeleton and a formula.
- A compact comparison-table toggle is not a separate lab.

#### Lesson 2 — Hydrocarbons and organic families

Covers 12.4–12.5.

- Types of organic compounds: hydrocarbons and derivatives.
- Hydrocarbon definition.
- Aliphatic/open-chain vs cyclic/closed-chain.
- Saturated vs unsaturated; alkanes, alkenes and alkynes; general formulae.
- Alicyclic vs aromatic; benzene as a six-carbon ring with alternating double bonds.
- Properties preview: saturated compounds tend to substitution; unsaturated compounds tend to addition.
- Common misconception: “hydrocarbon” does not include oxygen-containing compounds.
- Three quick checks.

Interactives:

- A classification tree that expands the hydrocarbon families and reveals one example and general formula for each branch.
- A benzene structure viewer that distinguishes the simplified Kekulé-style drawing from the real delocalised structure at enrichment level.

#### Lesson 3 — Structures, alkyl groups and functional groups

Covers 12.6–12.8.

- Structural formula, condensed formula and carbon skeleton.
- Reading and drawing structural formulae for alkanes up to five carbons.
- Alkyl group as an alkane minus one hydrogen; general formula CₙH₂ₙ₊₁.
- Methyl, ethyl, propyl and butyl radicals.
- Primary, secondary, tertiary and quaternary carbon atoms.
- Functional group definition.
- Functional-group table: halide, double bond, triple bond, hydroxyl, aldehyde, carboxyl, ketone, ether and ester.
- General formula, prefix, suffix and one example for each family.
- Characteristic properties of a functional group; why compounds with the same group behave similarly.
- Three quick checks.

Interactives:

- `FunctionalGroupLab`: choose a molecule; highlight the functional group; reveal the family, general formula, prefix/suffix and a one-line property.
- `CarbonClassLab`: choose a carbon atom in a branched example and classify it as 1°, 2°, 3° or 4°.

#### Lesson 4 — Homologous series

Covers 12.9.

- Definition: same general formula, similar structure, similar chemical properties, successive members differ by CH₂.
- The CH₂ difference and the 14 u molecular-mass difference.
- General formulae: alkanes CₙH₂ₙ₊₂; alkenes CₙH₂ₙ; alkynes CₙH₂ₙ₋₂; alcohols CₙH₂ₙ₊₁OH.
- Tables for the first members of each series.
- Gradation in melting point, boiling point and density with increasing molecular mass.
- Similar chemical properties and similar methods of preparation.
- Significance of a homologous series for prediction and systematic study.
- Worked example: identify a series, its general formula and the next member.
- Three quick checks.

Interactives:

- `HomologousLadderLab`: select a family and move n from 1 to 8; show formula, molar mass, the CH₂ step and a qualitative property trend.
- A “next member” practice control that adds CH₂ and updates the formula.

#### Lesson 5 — Naming organic compounds

Covers 12.10–12.11.

- Trivial names vs IUPAC names; why IUPAC is needed.
- Three parts of a name: root word, suffix, prefix.
- Root words: meth, eth, prop, but, pent, hex, hept, oct, non, dec.
- Primary suffix for single, double and triple bonds: -ane, -ene, -yne.
- Secondary suffix for functional groups: -ol, -al, -oic acid, -one.
- Primary prefix for cyclic structures: cyclo-.
- Secondary prefix for substituents: alkyl and halogen prefixes.
- Longest-chain rule, including chains that bend.
- Numbering to give the lowest locant to the principal functional group, then to substituents.
- Lowest-sum rule and alphabetical order for multiple substituents.
- Multiplicative prefixes: di, tri, tetra.
- Worked examples from the book's style, including branched chains, halides, alcohols, aldehydes, ketones, carboxylic acids, ethers and esters.
- Writing a structural formula from a name.
- Three quick checks.

Interactives:

- `NameBuilderLab`: choose root length, a supported family (alkane, haloalkane, alcohol, aldehyde, ketone or carboxylic acid), one substituent and its locant; the panel assembles the name step by step and explains each decision. Alkenes, alkynes and esters use guided worked examples rather than the builder because their locant rules differ.
- `NameCheckLab`: show a structure and accept a typed IUPAC name with tolerant checking, or offer a guided reveal after an attempt.

#### Lesson 6 — Isomerism

Covers 12.12.

- Definition: same molecular formula, different structural formula.
- Chain isomerism: butane and 2-methylpropane; pentane, 2-methylbutane and 2,2-dimethylpropane.
- Position isomerism: but-1-ene and but-2-ene; propan-1-ol and propan-2-ol.
- Functional isomerism: ethanol and methoxymethane; propanal and propanone.
- Classification of a pair as chain, position or functional.
- Drawing all isomers for a small formula.
- Why the number of isomers rises with carbon count.
- Three quick checks.

Interactives:

- `IsomerExplorer`: select C₄H₁₀, C₅H₁₂, C₄H₈ or C₂H₆O; show each structural isomer and label the type of isomerism.
- A drawing prompt with a revealable checklist for a named formula.

### 4.3 12A outcomes

- **A1** — Organic compounds, sources, and organic vs inorganic trends.
- **A2** — Carbon's unique nature, bonding and hydrocarbon classification.
- **A3** — Structural formulae, alkyl groups and functional groups.
- **A4** — Homologous series.
- **A5** — IUPAC nomenclature.
- **A6** — Structural isomerism.

### 4.4 12A assessment blueprint

30 original practice questions, 50 marks.

| Group | Type | Count | Marks each | Total | Outcomes covered |
|---|---|---|---|---|---|
| AQ1–AQ12 | Single choice | 12 | 1 | 12 | A1–A6 |
| AQ13–AQ17 | Fill in the blank | 5 | 1 | 5 | A1–A5 |
| AQ18–AQ20 | Multiple select | 3 | 2 | 6 | A2, A3, A5 |
| AQ21–AQ23 | True/false with justification | 3 | 2 | 6 | A1, A4, A6 |
| AQ24 | Matching: functional group to suffix | 1 | 6 | 6 | A3 |
| AQ25–AQ28 | Short answer | 4 | 2 | 8 | A2, A4, A5, A6 |
| AQ29 | Short answer: name and structure | 1 | 3 | 3 | A5 |
| AQ30 | Long answer: multi-step naming and isomer reasoning | 1 | 4 | 4 | A5, A6 |

Question IDs are `AQ1`–`AQ30`; outcome keys are `A1`–`A6`. No hyphens are used because the question schema accepts only uppercase letters, digits and underscores.

Objective items auto-score. Written items reveal marking points only after submission and are self-assessed. The performance report groups by A1–A6.

---

## 5. Chapter 12B — scope and lesson map

### 5.1 Scope

**In scope**

- Alkanes: hydrocarbons with only single C–C bonds; saturated; paraffins; general formula CₙH₂ₙ₊₂.
- Sources: natural gas and petroleum; methane as the main component of natural gas.
- Chain isomerism in alkanes; butane and pentane examples.
- Occurrence of methane: marsh gas, exhaled air, intestinal gases, coal-mine fire-damp, dry distillation of wood/peat/coal.
- Occurrence of ethane: 10–20% of natural gas.
- Methane as a greenhouse gas, at context level.
- Structure of methane: tetrahedral, four C–H single bonds, 109.5° as enrichment.
- Laboratory preparation of methane from sodium ethanoate (sodium acetate) and soda lime.
- Laboratory preparation of ethane from sodium propanoate (sodium propionate) and soda lime.
- Other methods: reduction of iodomethane or bromoethane with zinc and dilute HCl or Zn/Cu couple; aluminium carbide with water; Wurtz reaction with iodomethane and sodium in dry ether, including the even-carbon limitation.
- Physical properties of methane and ethane.
- Complete and incomplete combustion of methane and ethane, including soot formation with limited air.
- Substitution reaction with chlorine in diffused sunlight or UV light; successive chlorination of methane to tetrachloromethane.
- Uses of methane and ethane; environmental and safety context.

**Out of scope / omitted**

- Catalytic oxidation of alkanes (book marks it “not in syllabus”).
- Slow combustion with acidified K₂Cr₂O₇/KMnO₄ (book marks it “not in syllabus”).
- Alkenes and alkynes.
- Detailed free-radical chain mechanism.
- Industrial manufacture processes beyond the supplied book.
- Calorific-value calculations.

### 5.2 Lesson map

#### Lesson 1 — The alkane family and chain isomers

Covers 12.13–12.13.2.

- Definition and general formula.
- Saturated and paraffin terminology.
- Natural gas and petroleum as sources.
- Completeness of combustion preview.
- Chain isomerism: butane and 2-methylpropane; pentane, 2-methylbutane and 2,2-dimethylpropane.
- Physical gradation with molecular mass.
- Three quick checks.

Interactives:

- `AlkaneLadderLab`: n = 1–10; show formula, molar mass, state at room temperature and qualitative boiling-point trend; show isomer counts for n = 1–6.
- `AlkaneIsomerLab`: show the butane and pentane isomers and label the parent chain.

#### Lesson 2 — Methane and ethane: structure and preparation

Covers 12.14–12.15.1.

- Occurrence and common names.
- Methane: greenhouse gas, marsh gas, fire-damp.
- Tetrahedral structure, bond angle as enrichment.
- Laboratory preparation from sodium ethanoate and soda lime; apparatus, equation, conditions, collection over water.
- Laboratory preparation from sodium propanoate and soda lime.
- Reduction of iodomethane and bromoethane.
- Aluminium carbide and water.
- Wurtz reaction and its limitation.
- Physical properties of methane and ethane.
- Three quick checks.

Interactives:

- `GasPrepLab`: choose a preparation route; show reactants, conditions, equation, gas produced and collection method.
- A labelled apparatus diagram with keyboard-accessible hotspots.

#### Lesson 3 — Reactions and uses

Covers 12.15.2–12.15.3.

- Complete combustion: equations, observations, non-sooty flame.
- Incomplete combustion: carbon monoxide and soot, safety and environmental consequences.
- Substitution with chlorine: conditions, stepwise products, HCl, separation by fractional distillation.
- Ethane chlorination as the same pattern.
- Uses of methane and ethane.
- Environmental and safety notes.
- Three quick checks.

Interactives:

- `ChlorinationLab`: step through CH₄ → CH₃Cl → CH₂Cl₂ → CHCl₃ → CCl₄, adding Cl₂ and UV light each time; show the product, HCl and remaining hydrogens.
- `CombustionLab`: toggle sufficient/insufficient/limited oxygen; show balanced equation, products and observation.

### 5.3 12B outcomes

- **B1** — Alkane family, sources and chain isomerism.
- **B2** — Methane and ethane: occurrence, structure, preparation and physical properties.
- **B3** — Reactions and uses of methane and ethane.

### 5.4 12B assessment blueprint

20 original practice questions, 34 marks.

| Group | Type | Count | Marks each | Total | Outcomes covered |
|---|---|---|---|---|---|
| BQ1–BQ8 | Single choice | 8 | 1 | 8 | B1–B3 |
| BQ9–BQ12 | Fill in the blank | 4 | 1 | 4 | B1–B3 |
| BQ13–BQ14 | Multiple select | 2 | 2 | 4 | B2, B3 |
| BQ15–BQ16 | True/false with justification | 2 | 2 | 4 | B1, B3 |
| BQ17 | Matching: preparation method to gas | 1 | 4 | 4 | B2 |
| BQ18–BQ19 | Short answer | 2 | 3 | 6 | B2, B3 |
| BQ20 | Long answer: preparation, combustion and substitution | 1 | 4 | 4 | B1–B3 |

Objective items auto-score. Written items reveal marking points only after submission and are self-assessed. The performance report groups by B1–B3.

---

## 6. Page and navigation architecture

### 6.1 Pages

| URL | Entry | Purpose |
|---|---|---|
| `index.html` | `src/entries/home.js` | Chapter list, suggested order, local-progress summary |
| `chapter-1.html` | `src/entries/chapter-1.js` | Existing introduction chapter |
| `chapter-12a.html` | `src/entries/chapter-12a.js` | Chapter 12A |
| `chapter-12b.html` | `src/entries/chapter-12b.js` | Chapter 12B |

Vite uses a multi-page build with all four HTML files as rollup inputs. `base: './'` is retained.

### 6.2 Landing page

- Title: “ICSE Class 10 Chemistry · Organic Chemistry”.
- Short orientation: “Three chapters. Start with the introduction, then take 12A and 12B in order.”
- Three chapter cards:
  - Chapter 1 — Introduction to Organic Compounds.
  - Chapter 12A — Organic Compounds.
  - Chapter 12B — Hydrocarbons: Alkanes.
- Each card shows: chapter label, title, one-sentence scope, lesson count, assessment size, estimated study time, and local progress (“Not started”, “3 of 7 milestones”, “Assessment complete”).
- A scope note: progress is stored in this browser only.
- No remote images; use CSS/SVG chapter motifs or typographic panels.

### 6.3 Chapter shell

Every chapter page uses the same shell:

- Skip link.
- Header: brand, chapter identity, link to “All chapters”, link to the previous/next chapter.
- Progress block and section navigation generated from the active chapter config.
- Reset control for the active chapter only.
- Main content.
- Sources and scope section.
- Footer with the original-practice-questions disclaimer.

### 6.4 Chapter switching

- Chapter 1 → 12A.
- 12A → Chapter 1 or 12B.
- 12B → 12A.
- The switcher appears in the header and at the end of the chapter.
- Switching chapters does not reset progress.

### 6.5 Deep links

Hash links such as `chapter-12a.html#lesson-5` and `chapter-12b.html#assessment` must work directly. The active-section observer must operate on the current page only.

---

## 7. Shared application architecture

### 7.1 Chapter configuration

Each chapter exports a configuration object. The exact module names are implementation details, but the shape is:

```js
export const chapter = {
  id: '12a',
  storageKey: 'icse10.organic12a.state',
  label: 'Chapter 12A',
  title: 'Organic Compounds',
  syllabusReference: 'CISCE ICSE Chemistry 2027, Unit 9(ii)–(iv)',
  estimatedMinutes: [90, 120],
  lessons: [
    { id: 'lesson-1', number: 1, navLabel: '...', checkIds: ['...'] }
  ],
  outcomes: {
    A1: 'Organic compounds, sources, and organic vs inorganic trends'
  },
  scopeNote: '...',
  features: { memory: true, revision: true, assessment: true },
  sources: []
}
```

The configuration is provided to the page through a `ChapterProvider` or equivalent provide/inject boundary.

### 7.2 Progress isolation

`useProgress` becomes chapter-aware. It must:

- Load and save the active chapter's `storageKey`.
- Keep the existing Chapter 1 key `icse10.organic1.state` unchanged.
- Use `icse10.organic12a.state` for 12A and `icse10.organic12b.state` for 12B.
- Compute completed lessons, milestones and percentage from the active chapter's lesson list.
- Reset only the active chapter.
- Remain safe when localStorage is unavailable.

The progress object is injected once per page. `QuickCheck`, `LessonHeading`, `Assessment`, `QuestionCard` and `PerformanceReport` use the injected progress and outcomes rather than importing one global chapter module.

### 7.3 Assessment and outcomes

- `Assessment` receives the active question bank and outcome map.
- `QuestionCard` receives the active outcome map.
- `PerformanceReport` receives the active outcome map.
- `scoring.js` remains framework-independent and unchanged except for any needed type additions.
- Written marking points remain hidden until submission.

### 7.4 Existing Chapter 1 preservation

- Chapter 1 lesson components, labs, sorter, explorer, flashcards, revision content and question bank are preserved.
- Only the shell, imports and progress wiring change.
- Chapter 1's visual content should not be rewritten as part of this work except where the shared-shell migration requires a wrapper.

### 7.5 New chapter component boundaries

Chapter-specific content lives in clearly separated components:

- `src/components/chapters/chapter-12a/` — lesson components and 12A labs.
- `src/components/chapters/chapter-12b/` — lesson components and 12B labs.
- `src/components/shared/` — `ChapterShell`, `ChapterProvider`, `QuickCheck`, `Assessment`, `QuestionCard`, `PerformanceReport`, `Flashcards`, `RevisionCentre` primitives.

Shared components must not contain 12A- or 12B-specific chemistry.

### 7.6 Data files

Suggested structure:

```text
src/data/
  chapters/
    chapter-1.js
    chapter-12a.js
    chapter-12b.js
  questions/
    chapter-1.json
    chapter-12a.json
    chapter-12b.json
  chapter-1/
    sorterItems.js
    everydayItems.js
    flashcards.js
  chapter-12a/
    flashcards.js
    functionalGroups.js
    homologousSeries.js
  chapter-12b/
    flashcards.js
    alkanes.js
```

Existing Chapter 1 data stays in its current files behind a chapter-specific re-export. The public imports become chapter-specific, but the underlying Chapter 1 data files are not rewritten during this work.

### 7.7 Question export and validation

- `scripts/export-questions.mjs` exports each chapter's internal bank to `exports/chapter-1-questions.json`, `exports/chapter-12a-questions.json` and `exports/chapter-12b-questions.json`.
- `scripts/validate-questions.mjs` validates every exported bank against the existing schema.
- The scripts must fail with a non-zero exit code if any chapter fails.
- `chapter-questions.json` at the repository root is retired. All three exports live under `exports/`, and `README.md`, `AGENTS.md` and `chapter-sources.md` are updated to point there.

### 7.8 Styling

- Reuse `src/styles/main.css` tokens and existing components.
- Add only chapter-specific motifs and lab styles.
- No gradients, glassmorphism, card soup or remote assets.
- Maintain `prefers-reduced-motion`, visible focus, non-colour status cues and 360/768/1280 layouts.

### 7.9 Memory, revision and flashcards

**12A memory workshop**

- No forced acrostic. The chapter uses a five-step name-building routine, a functional-group comparison table and spaced recall prompts.
- A "cover and rebuild" exercise asks the student to reconstruct the IUPAC name of a displayed structure step by step.
- If an acrostic is added later, it must be a real sentence with an explicit word-to-item mapping, not an acronym.

**12A revision centre**

- Rapid sheet: definitions of organic compound, hydrocarbon, functional group, homologous series, isomer, IUPAC name.
- Functional-group table with family, general formula, prefix and suffix.
- Homologous-series table with general formulae and the CH₂/14 u step.
- Nomenclature decision checklist.
- Isomerism comparison: chain, position and functional.
- Common mistakes: wrong root word, wrong locant, suffix used as prefix, forgetting the longest chain, confusing molecular and structural formulae.
- Flashcards: 15 active-recall prompts covering definitions, families, naming rules and isomerism.

**12B memory workshop**

- A reaction map rather than an acrostic: alkane → combustion products; alkane + chlorine → substituted products.
- A preparation map linking each method to the gas produced.
- Spaced recall prompts for equations and conditions.

**12B revision centre**

- Rapid sheet: alkane definition, CₙH₂ₙ₊₂, sources, methane/ethane occurrence, preparation routes, combustion and substitution.
- Equations table with conditions and observations.
- Preparation comparison table.
- Common mistakes: confusing complete and incomplete combustion; omitting HCl in substitution; writing methane for the Wurtz reaction; mixing up soda lime and sodium hydroxide; forgetting that alkenes are out of scope.
- Flashcards: 12 active-recall prompts covering formulae, preparation, reactions and uses.

---

## 8. Content rules and verification

1. Use the supplied book's order and terminology for 12A and 12B.
2. Use CISCE 2027 Unit 9 to decide what is examinable.
3. Omit metamerism, catalytic oxidation and slow combustion because the book marks them outside the syllabus.
4. Present functional isomerism as an extension because the 2027 syllabus names chain and position isomerism only.
5. Keep 12B to alkanes; do not drift into alkenes or alkynes.
6. Write every quick check and assessment item originally. Use the book's exercises only as a coverage checklist.
7. Label all authored exam-style questions as original practice questions.
8. Do not claim a CISCE-prescribed textbook or a verified page mapping in student-facing prose. The source panel may say the chapter follows supplied pages.
9. Preserve formulae, equations, conditions, state symbols and IUPAC style.
10. Distinguish observations from inferences, especially in combustion, gas tests and substitution.
11. Check every equation for balancing, including:
    - CH₃COONa + NaOH → Na₂CO₃ + CH₄
    - C₂H₅COONa + NaOH → Na₂CO₃ + C₂H₆
    - CH₄ + 2O₂ → CO₂ + 2H₂O
    - 2CH₄ + 3O₂ → 2CO + 4H₂O
    - CH₄ + Cl₂ → CH₃Cl + HCl, and successive steps to CCl₄
12. Verify IUPAC names against the book's style, including locants before suffixes and alphabetical substituent order.
13. Treat 109.5°, greenhouse-gas multipliers and industrial detail as enrichment where they exceed the book.

---

## 9. Accessibility and UX requirements

- Semantic sections, headings and native controls.
- Every interactive control has a visible, text-described outcome.
- Keyboard operation for labs, toggles, molecule selection and step-throughs.
- `aria-live` feedback for quick checks, lab status and assessment counters.
- Status is never conveyed by colour alone.
- Respect `prefers-reduced-motion`.
- No hover-only content.
- Tables have captions and scoped headers.
- Chemical formulae use correct subscripts and arrows; do not rely on images of equations.
- Focus moves sensibly after submit, reset and step-through actions.
- Layouts work at 360 px, 768 px and 1280 px.

---

## 10. Testing and QA

### Automated

- `npm run build` succeeds with four HTML entries.
- `npm run test:e2e` passes.
- `npm run validate:questions` validates all three exports.

Playwright coverage:

1. Landing page lists three chapters and links to each page.
2. Chapter 1 existing checks, labs, assessment and reset still pass at its new URL.
3. 12A quick checks complete lessons; functional-group, name-builder, homologous-series and isomer interactions work.
4. 12B quick checks, gas preparation, chlorination and combustion interactions work.
5. Each chapter's assessment submits, self-marks written answers, persists across reload and resets.
6. Progress is isolated: completing a 12A lesson does not change Chapter 1 or 12B progress.
7. Chapter switcher and deep hash links work.
8. No console errors, page errors or failed requests.
9. No page-level horizontal overflow at 360, 390, 768 and 1280 px.
10. Keyboard-only operation of navigation, quick checks and at least one lab per chapter.

### Manual

- Read both chapters for chemistry accuracy.
- Check equation balancing and conditions.
- Check IUPAC names.
- Check that no non-syllabus item is presented as required.
- Check mobile and desktop layouts.
- Update `QA-REPORT.md` with what was actually tested and what remains unverified.

---

## 11. Delivery sequence

1. **Platform refactor** — multi-page shell, chapter provider, progress isolation, landing page, Chapter 1 migration.
2. **12A content and data** — chapter config, six lessons, labs, quick checks, revision, flashcards, question bank.
3. **12A assessment** — scoring, marking points, performance report.
4. **12B content and data** — chapter config, three lessons, labs, quick checks, revision, flashcards, question bank.
5. **12B assessment** — scoring, marking points, performance report.
6. **Integration** — chapter switcher, landing progress, sources panels.
7. **Verification** — build, Playwright, question validation, manual QA, documentation.

12A precedes 12B because its nomenclature lesson supplies language used in 12B.

---

## 12. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Shared-shell refactor breaks Chapter 1 | Preserve Chapter 1 content; run its existing tests at the new URL before building 12A/12B |
| 12A becomes too long | Six focused lessons; use progressive disclosure for tables and worked examples; keep assessment separate |
| Nomenclature errors | Build a name-builder with a fixed, tested rule set; verify every example against the book; limit generated names to simple single-functional-group cases |
| Duplicate content between Chapter 1 and 12A | Accepted by the user for standalone use; keep Chapter 1 unchanged and make 12A's recap purposeful |
| Equation or condition errors in 12B | Centralise equations in one data file; test rendered equations; verify against the supplied pages |
| Progress leakage across chapters | Parameterise storage keys and test isolation explicitly |
| Old bookmarks to root | Accepted; root becomes the chapter list |
| Multi-page build misconfiguration on GitHub Pages | Keep `base: './'`, verify `dist/` preview, test direct chapter URLs |

---

## 13. Acceptance criteria

The work is complete when:

1. The root page lists Chapter 1, 12A and 12B and links correctly.
2. Chapter 1 still passes its content and assessment checks at `chapter-1.html`.
3. 12A has six lessons, at least two substantial labs, quick checks, revision, flashcards, a 30-question assessment and a performance report.
4. 12B has three lessons, at least two substantial labs, quick checks, revision, flashcards, a 20-question assessment and a performance report.
5. Each chapter stores progress under its own key and can be reset independently.
6. `npm run build`, `npm run test:e2e` and `npm run validate:questions` all pass.
7. No console errors, failed requests or page-level horizontal overflow at the required widths.
8. `README.md`, `AGENTS.md`, `chapter-sources.md` and `QA-REPORT.md` reflect the three-chapter structure and the actual verification performed.
