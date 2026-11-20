# ICSE Class 10 Chemistry — Organic Chemistry, Chapter 2: Design

**Status:** Superseded. The planned tetravalency Chapter 2 was not built separately; its material is absorbed into Chapter 12A. See `2026-11-20-organic-chemistry-12a-12b-design.md`. This file is retained for historical context only.

**Date:** 20 November 2026
**Delivery:** Vue 3 + Vite multi-page static application for GitHub Pages
**Syllabus:** CISCE ICSE Chemistry (Science Paper 2), examination year 2027
**Unit:** 9.1 Organic Chemistry: unique nature of carbon — tetravalency

---

## 1. Context and assumptions

1. The user asked for a second organic-chemistry chapter on **the unique nature of carbon: tetravalency**, covering:
   - atomic structure of carbon;
   - electronic configuration of carbon;
   - valence electrons;
   - the meaning of tetravalency;
   - why carbon forms four covalent bonds;
   - formation of bonds with other carbon atoms and with other elements;
   - a visual explanation using methane.
2. The user approved a **full, focused chapter**: hero, three lessons, interactive carbon and methane labs, quick checks, revision centre, assessment, performance report, and local progress.
3. The user chose a **chapter landing page** and delegated the URL decision. The chosen implementation is a Vue multi-page build:
   - `index.html` — chapter landing page;
   - `chapter-1.html` — existing Chapter 1, unchanged in content;
   - `chapter-2.html` — new Chapter 2.
4. Chapter 1 currently occupies the root URL. Moving it to `chapter-1.html` means old root bookmarks now open the chapter list. This is accepted as a consequence of the landing-page choice.
5. Chapter 2 deepens the tetravalency material previewed in Chapter 1 Lesson 2. It does not repeat catenation, multiple-bond families, benzene, or isomerism as taught topics.
6. The examination year is taken as **2027**. CISCE does not prescribe a Chemistry textbook, so no textbook page mapping is claimed.
7. All examination-style questions are **original practice questions**, not board past-paper questions.
8. The chapter remains an introduction. It must not teach full hydrocarbons, IUPAC nomenclature, homologous series, functional groups, or reaction mechanisms.

---

## 2. Scope

### In scope

- Carbon's atomic structure: atomic number 6, six protons, six electrons, six neutrons in the common carbon-12 atom.
- Electronic configuration 2,4 and the meaning of shells.
- Valence electrons and the octet idea.
- Why carbon needs four more electrons to complete its outer shell.
- Why transferring four electrons is energetically unfavourable and sharing is preferred.
- Covalent bonding as sharing a pair of electrons.
- Tetravalency: carbon forms four covalent bonds.
- Distinction between valence electrons, valency, and tetravalency.
- Carbon bonding to other carbon atoms and to H, O, N, S, and halogens, at preview level.
- Methane as the worked visual example: CH₄, four single C–H covalent bonds, tetrahedral arrangement.
- Molecular formula versus structural formula for methane.
- Quick checks, revision, and a chapter assessment.

### Out of scope

- Catenation as a separately assessed property (covered in Chapter 1).
- Systematic study of alkanes, alkenes, alkynes, and their reactions.
- IUPAC naming beyond recognising CH₄ and the formulae used as examples.
- Functional groups such as alcohols, aldehydes, ketones, and carboxylic acids.
- Hybridisation and molecular-orbital theory.
- Formal calculation of ionisation energies.
- Detailed three-dimensional geometry beyond the tetrahedral outline; 109.5° is enrichment only.

---

## 3. Learning outcomes

By the end of the chapter, the student can:

1. **T1 — Atomic structure and configuration:** state carbon's atomic number, electron count, and electronic configuration (2,4).
2. **T2 — Valence electrons and the octet:** identify the valence shell and valence electrons, and explain why an atom tends towards eight outer electrons.
3. **T3 — Tetravalency and covalent bonding:** define tetravalency and explain why carbon forms four covalent bonds by sharing four pairs of electrons rather than transferring electrons.
4. **T4 — Methane and bonding partners:** describe the formation of methane, identify its four single C–H bonds and tetrahedral shape, and recognise that carbon also bonds to other carbon atoms and to other elements.
5. Answer recall, explanation, diagram, comparison, and application questions on tetravalency.

---

## 4. Syllabus mapping

| Syllabus point | Lesson / concept | Teaching content | Visual or activity | Assessment IDs | Verification |
|---|---|---|---|---|---|
| Unique nature of carbon — tetravalency | Lesson 2 | Four valence electrons; four covalent bonds; definition | Bonding-choice lab | Q5, Q6, Q7, Q10 | Standard chemistry; syllabus scope line |
| Atomic structure and electronic configuration | Lesson 1 | Atomic number 6; 6 protons, 6 electrons; shells 2,4 | Carbon atom lab | Q1, Q2 | Standard chemistry; carbon-12 noted |
| Valence electrons and octet | Lesson 1 | Outer shell; four valence electrons; eight-electron tendency | Carbon atom lab | Q3, Q4 | Standard chemistry |
| Formation of bonds with carbon and other elements | Lesson 3 | C–C preview; C–H, C–O, C–N, C–S, C–halogen examples | Bonding-partners table | Q8, Q9 | Examples checked; families not taught |
| Methane as a visual example | Lesson 3 | CH₄; four shared pairs; four single bonds; tetrahedral shape | Methane builder | Q11, Q12 | Standard chemistry; 109.5° labelled enrichment |

**Coverage note:** the chapter covers only the tetravalency portion of the 9.1 introduction. Catenation remains in Chapter 1. Bonding to other elements is previewed, not developed into functional-group chemistry.

---

## 5. Chapter architecture

1. **Chapter orientation**
   - Chapter identity: “Unique Nature of Carbon: Tetravalency.”
   - Essential question: “Why does one carbon atom form exactly four bonds?”
   - “What you will learn” outcomes.
   - Prerequisites: atoms, electrons, shells, covalent bonding, valency.
   - Concept map linking atom → electrons → tetravalency → methane.
   - Scope note: tetravalency only; catenation and families come elsewhere.
   - Estimated study time: 30–40 minutes, labelled as an estimate.

2. **Lesson 1 — Carbon's atom and electrons**
   - Atomic number 6; six protons and six electrons.
   - Carbon-12: six neutrons, noted without requiring mass-number calculations.
   - Shell arrangement 2,4.
   - Valence shell and four valence electrons.
   - The octet idea: eight electrons in the outer shell.
   - `CarbonAtomLab`: neutral carbon versus carbon after sharing four pairs, with live electron counts.
   - Common misconception: “carbon has six valence electrons.”
   - Three quick checks.

3. **Lesson 2 — Tetravalency: why four bonds**
   - Carbon has four valence electrons and needs four more.
   - Attempting to lose four electrons would need too much energy.
   - Attempting to gain four electrons would also be energetically unfavourable.
   - Sharing four pairs gives carbon an octet and forms four covalent bonds.
   - Definition: tetravalency is the property of carbon by which it forms four covalent bonds.
   - Valence electrons (4) versus valency (4) versus tetravalency (four bonds).
   - `BondingChoiceLab`: compare lose 4, gain 4, and share 4 pairs; show charge and octet result.
   - Three quick checks.

4. **Lesson 3 — Methane: the four-bond picture**
   - One carbon atom and four hydrogen atoms.
   - Four shared pairs; four single C–H covalent bonds.
   - Molecular formula CH₄; structural formula showing four bonds.
   - Tetrahedral arrangement, with 109.5° marked as enrichment.
   - Carbon can also bond to other carbon atoms (C–C) and to O, N, S, and halogens.
   - Preview table of bonding partners; naming of families is deferred.
   - `MethaneBuilder`: add hydrogens one at a time, tracking bonds, shared electrons, and octet completion.
   - Three quick checks.

5. **Revision centre**
   - Rapid revision sheet.
   - Key definitions: atom, atomic number, electronic configuration, valence electrons, octet, covalent bond, valency, tetravalency, molecular formula, structural formula.
   - Formulae table: CH₄, CCl₄, C₂H₆ as pattern examples.
   - Common mistakes.
   - No memory acrostic; Chapter 2 uses direct explanation and the methane visual.

6. **Chapter assessment**
   - 12 original practice questions, 21 marks.
   - Formats: single choice, multiple select, true/false with justification, fill in the blank, matching, short answer, long answer.
   - Objective items auto-score; written items reveal marking points after submission and are self-assessed.
   - Performance report by outcome T1–T4, retry set, and spaced-revision suggestion.

7. **Sources and limitations**
   - CISCE syllabus reference for Unit 9.1.
   - Standard chemistry references.
   - Clear statement that textbook mapping is not claimed and all questions are original practice.

---

## 6. Page and navigation architecture

- **Landing page:** two chapter cards with number, title, description, lesson count, assessment size, and estimated time. A single “Organic Chemistry” heading and a note that progress is local to the browser.
- **Chapter pages:** shared shell with:
  - brand and chapter identity;
  - link to the chapter landing page;
  - link to the other chapter;
  - progress block and section navigation;
  - reset control for the active chapter only;
  - skip link, main landmark, and footer.
- **URLs:** `chapter-1.html` and `chapter-2.html`, with hash links to sections such as `chapter-2.html#lesson-2`.
- **No router:** each chapter is its own HTML entry, built by Vite multi-page configuration.
- **Chapter 1 content:** visual content and lesson structure unchanged. Only the shell and URL change, plus minimal data/context refactoring needed to support two chapters.

---

## 7. Interaction specifications

### 7.1 Carbon atom lab

- **Learning objective:** connect carbon's atomic number, shells, and valence electrons.
- **Student action:** switch between “Carbon atom” and “Carbon after sharing four pairs.”
- **Visible response:**
  - neutral atom: six electrons shown as 2 in the inner shell and 4 in the outer shell;
  - bonded view: the outer shell shows eight electrons, with four shared pairs highlighted;
  - readout updates for protons, electrons, configuration, and outer-shell count.
- **Explanation:** carbon's four outer electrons are the ones involved in bonding.
- **Accessibility:** native buttons with text labels; SVG has a text description; no drag or hover-only content.

### 7.2 Bonding-choice lab

- **Learning objective:** explain why carbon shares electrons rather than transferring them.
- **Student action:** choose “Lose 4 electrons,” “Gain 4 electrons,” or “Share 4 pairs.”
- **Visible response:**
  - lose 4: outer shell empty, charge 4+, verdict “not favourable”;
  - gain 4: ten electrons in total, outer shell full with eight, charge 4−, verdict “not favourable”;
  - share 4 pairs: outer shell eight electrons, no ion formed, verdict “favourable.”
- **Explanation:** sharing reaches an octet without the large energy cost of transferring four electrons.
- **Accessibility:** buttons with `aria-pressed`; verdict text, not colour alone.

### 7.3 Methane builder

- **Learning objective:** show how four hydrogen atoms complete carbon's tetravalency.
- **Student action:** “Add hydrogen” up to four; reset.
- **Visible response:**
  - one C–H bond appears per step;
  - counters show hydrogen atoms added, bonds formed, shared electrons, and octet status;
  - at four hydrogens, a success message states that carbon now has four single bonds and an octet.
- **Explanation:** each C–H bond is one shared pair; four bonds use all four valence electrons.
- **Accessibility:** buttons; live text status; reset restores the initial state; no animation required.

### 7.4 Quick checks

- Three per lesson, using the existing `QuickCheck` component.
- Immediate text feedback; correct and incorrect states use text plus styling.
- Completion of all three checks marks the lesson complete.

### 7.5 Assessment

- Reuses the existing assessment mechanics with Chapter 2 data and outcomes.
- Submit, self-mark written answers, reset, score report, and retry links.
- Written marking points appear only after submission.

---

## 8. Assessment blueprint

| ID | Outcome | Type | Marks | Difficulty |
|---|---|---|---|---|
| Q1 | T1 — atomic number and electron count | single choice | 1 | Easy |
| Q2 | T1 — electronic configuration | single choice | 1 | Easy |
| Q3 | T2 — valence electrons | single choice | 1 | Easy |
| Q4 | T2 — octet | fill in the blank | 1 | Easy |
| Q5 | T3 — tetravalency definition | fill in the blank | 1 | Easy |
| Q6 | T3 — sharing four pairs | true/false + justify | 2 | Medium |
| Q7 | T3 — why sharing rather than transfer | multiple select | 2 | Medium |
| Q8 | T4 — bonding partners | single choice | 1 | Easy |
| Q9 | T1–T4 — terminology matching | matching | 4 | Medium |
| Q10 | T3 — explain four covalent bonds | short answer | 2 | Medium |
| Q11 | T4 — formation and shape of methane | long answer | 3 | Hard |
| Q12 | T4 — methane bond type and shape | true/false + justify | 2 | Medium |

**Total:** 21 marks. Objective items auto-score; written items use marking-point self-assessment.

**Question notes**

- Q4 accepts “octet” or “octet rule.”
- Q7 correct options: losing four electrons needs too much energy; gaining four electrons is energetically unfavourable; sharing four pairs gives an octet without forming ions. The distractor “carbon has six valence electrons” is false.
- Q8 correct option: carbon bonds to other carbon atoms and to elements such as hydrogen, oxygen, nitrogen, sulfur, and halogens.

**Outcome labels**

- T1 — Atomic structure and electronic configuration
- T2 — Valence electrons and the octet
- T3 — Tetravalency and covalent bonding
- T4 — Methane and bonding partners

---

## 9. Revision centre content

### Rapid sheet

- Carbon has atomic number 6 and electronic configuration 2,4.
- Carbon has four valence electrons.
- An octet is a complete set of eight electrons in the outer shell.
- Carbon needs four more electrons to complete its octet.
- Carbon shares four pairs of electrons, forming four covalent bonds.
- Tetravalency is the property of carbon by which it forms four covalent bonds.
- Carbon can bond to other carbon atoms and to elements such as hydrogen, oxygen, nitrogen, sulfur, and chlorine.
- Methane, CH₄, has one carbon atom and four hydrogen atoms.
- Each C–H bond in methane is a single covalent bond formed by sharing one pair of electrons.
- The four bonds in methane are arranged tetrahedrally.

### Formulae table

| Compound | Formula | Bonding pattern | Note |
|---|---|---|---|
| Methane | CH₄ | Four C–H single bonds | Simplest example of carbon's tetravalency |
| Carbon tetrachloride | CCl₄ | Four C–Cl single bonds | Shows carbon bonding to a halogen |
| Ethane | C₂H₆ | One C–C bond and six C–H bonds | Preview of carbon–carbon bonding |

### Common mistakes

- Counting all six electrons as valence electrons instead of the four in the outer shell.
- Confusing valence electrons with valency.
- Saying tetravalency means “four valence electrons” rather than “four covalent bonds.”
- Claiming carbon becomes stable by losing four electrons.
- Describing the C–H bonds in methane as ionic.
- Drawing methane with only one shared pair for all four bonds.
- Saying methane is flat; its four bonds are arranged tetrahedrally.

---

## 10. Visual design

- **Palette:** reuse warm paper `#f7f3ea`, ink `#1c2b2b`, teal `#0f5c5c`, amber `#a05f0c`, muted red for errors, green for correct.
- **Typography:** Georgia/serif for headings; system sans for body; generous line height.
- **Layout:** desktop two-column with a sticky chapter rail; single column on mobile; reading width around 72ch.
- **Components:** lesson sections, definition callouts, exam-tip and misconception panels, comparison tables, inline SVG diagrams, lab panels, question cards.
- **Landing page:** editorial chapter list, not generic cards; numbered chapters, short descriptions, and clear actions.
- **Motion:** subtle only; respect `prefers-reduced-motion`.
- **No external dependencies:** all CSS, JavaScript, and SVG are local.

---

## 11. Technical architecture

### 11.1 Build and entry points

- Vue 3, Vite, npm. JavaScript, `<script setup>` single-file components.
- No router, store library, CSS framework, remote fonts, or remote images.
- Vite multi-page inputs:
  - `index.html` — landing;
  - `chapter-1.html` — Chapter 1;
  - `chapter-2.html` — Chapter 2.
- `base: './'` remains so the build works at a GitHub Pages project subpath.
- `src/main.js` reads a chapter identifier from the page (for example `data-chapter` on `<html>`) and mounts the matching root component. Chapter roots are loaded with dynamic imports so each page loads only its chapter code where practical.

### 11.2 Shared chapter infrastructure

- `src/data/chapters.js` — registry of chapter metadata, lessons, outcomes, storage keys, and links.
- `src/components/ChapterPage.vue` — shared shell: header, chapter switcher, progress, section nav, reset, footer, skip link.
- `src/composables/useSectionNav.js` — scroll-based active-section tracking, extracted from the current `App.vue`.
- `src/composables/useProgress.js` — refactored to create a progress store per chapter configuration, cached by storage key. Chapter 1 behaviour and key remain unchanged.
- `src/composables/useChapter.js` — provide/inject helpers for the active chapter configuration and progress store.
- `QuickCheck`, `LessonHeading`, `Assessment`, `QuestionCard`, and `PerformanceReport` read the active chapter context instead of importing Chapter 1 data directly.
- `src/lib/scoring.js` remains pure and unchanged.

### 11.3 Chapter roots and components

- `src/chapters/ChapterOneApp.vue` — current Chapter 1 composition, rendered inside `ChapterPage`.
- `src/chapters/ChapterTwoApp.vue` — new Chapter 2 composition.
- `src/components/two/` — Chapter 2 hero, labs, revision centre, and lesson components.
- `src/data/chapter-two.js` — Chapter 2 lessons, outcomes, and storage key.
- `src/data/questions-two.json` — Chapter 2 question bank.

### 11.4 Files and companion artefacts

- `chapter-2-content.md` — teaching content and mapping.
- `chapter-2-questions.json` — exported Chapter 2 question bank.
- `chapter-2-sources.md` — sources and verification notes.
- Update `README.md`, `AGENTS.md`, and `QA-REPORT.md` for the multi-chapter structure and `icse10.organic2.*` namespace.
- Extend `scripts/export-questions.mjs` and `scripts/validate-questions.mjs` to handle both chapter banks while keeping the Chapter 1 output.

### 11.5 Persistence

- Chapter 1: `icse10.organic1.state`, unchanged.
- Chapter 2: `icse10.organic2.state`.
- Progress is per chapter and per browser. No cross-device sync is claimed.
- The landing page does not merge or display aggregate progress unless it can do so without misleading the learner.

---

## 12. Quality assurance

1. `npm run build` succeeds and produces a deployable `dist/`.
2. `npm run test:e2e` passes for the landing page, Chapter 1, and Chapter 2.
3. `npm run validate:questions` validates both chapter banks.
4. Check 360 px, 768 px, and 1280 px layouts for horizontal overflow and usable navigation.
5. Test keyboard-only operation, visible focus, and skip links.
6. Check the browser console for errors.
7. Test every Chapter 2 lab, quick check, assessment, self-marking flow, progress persistence, and reset.
8. Verify all chemical formulae, electron counts, bond descriptions, and definitions.
9. Confirm written marking points appear only after submission.
10. Update `QA-REPORT.md` with what was tested and what remains unverified.

---

## 13. Sources and limitations

- CISCE ICSE Chemistry syllabus, examination year 2027, Unit 9.1.
- Standard chemistry references for atomic structure, electronic configuration, covalent bonding, tetravalency, and methane.
- No prescribed textbook mapping is claimed.
- No past-paper question is reproduced or claimed.
- The chapter is a focused treatment of tetravalency, not a complete treatment of organic chemistry.
