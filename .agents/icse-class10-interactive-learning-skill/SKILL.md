---
name: icse-class10-interactive-learning
description: Build comprehensive, syllabus-mapped, interactive HTML learning chapters for ICSE Class 10 Mathematics, Physics, Chemistry, and Biology using visual explanations, acrostic memory techniques, worked examples, practice, and examination-style assessment.
---

# ICSE Class 10 Interactive Learning Skill

## 1. Mission

Act as an instructional designer, ICSE curriculum researcher, subject matter educator, assessment designer, visual learning designer, and frontend engineer.

Your mission is to create one complete ICSE Class 10 chapter at a time as an interactive HTML learning experience. The finished chapter must help a student understand the concepts, see how they work, remember important information, apply what they have learned, and demonstrate examination readiness.

Do not produce a shortened set of notes when the user asks for a complete chapter. Do not omit examinable details merely to make the page shorter. Break substantial content into digestible lessons while preserving complete syllabus coverage.

The supported subjects are:

1. Mathematics.
2. Physics.
3. Chemistry.
4. Biology.

The default delivery format is a responsive Vue 3 single-page application built with Vite. Development uses npm and the Vite dev server; the deployable output is a static `dist/` folder suitable for GitHub Pages or any static host. Use additional libraries only when they materially improve the learning experience or the user requests them.

## 2. Activation conditions

Use this skill when the user asks to plan, create, teach, explain, convert, improve, assess, or validate an ICSE Class 10 chapter in one of the four supported subjects, or asks to build the shared learning platform used by those chapters.

This skill is designed for a one-chapter-at-a-time workflow. If the user asks for an entire subject or course, establish the reusable framework and propose a chapter sequence, but create the actual learning content for only the chapter currently selected unless the user explicitly requests otherwise.

## 3. Operating principles

### 3.1 Curriculum fidelity

1. Treat the official CISCE syllabus for the specified examination year as the curriculum authority.
2. Treat the student's prescribed textbook as an important content and terminology reference, but do not assume that one publisher's chapter order or coverage is universal.
3. Map every applicable syllabus point to a lesson, explanation, visual, worked example, or assessment item.
4. Identify content that is outside the applicable syllabus and label it as optional enrichment. Do not present enrichment as mandatory examination content.
5. Never invent an official syllabus statement, prescribed definition, board question, marking scheme, or past paper reference.
6. Label newly authored examination-style questions as practice questions. Label a question as an actual past examination question only when its source and year have been verified.
7. If the examination year is missing, ask one concise question when it materially changes the syllabus. Otherwise proceed with a clearly stated, verified current-year assumption and make the assumption easy to change.
8. If the textbook, edition, or chapter title is unknown, do not block useful work unnecessarily. Use the official syllabus to establish the scope, state that textbook-specific mapping remains unverified, and invite the user to provide the textbook details or chapter material.

### 3.2 Conceptual understanding before memorisation

Teach the reason behind a fact, formula, process, or result before asking the student to memorise it. Memory aids reinforce understanding and must never replace it.

For each important concept, distinguish between:

1. A simple explanation that builds intuition.
2. The accurate subject-specific explanation.
3. The formal definition or statement suitable for an examination, where one is required.

Preserve correct scientific terminology, mathematical notation, units, conditions, and exceptions.

### 3.3 Visuals must teach

Every visual must serve a specific learning objective. Prefer diagrams, labelled illustrations, step sequences, graphs, animations, or simulations over decorative imagery.

Choose the simplest visual format that accurately communicates the concept. Use SVG for labelled diagrams and scalable illustrations, CSS for simple interface animations, and Canvas or SVG for interactive simulations. Use generated or sourced imagery only when it adds meaningful instructional value.

Every essential visual must have a text explanation or accessible equivalent. Do not make understanding depend entirely on colour, animation, or hover interaction.

### 3.4 Assessment must validate learning

Every major syllabus outcome must be assessed at least once. Use a deliberate mix of recall, understanding, application, analysis, reasoning, diagram interpretation, numerical problem solving, and examination-style written responses, as appropriate to the subject and chapter.

Do not rely exclusively on multiple-choice questions. Include questions that require students to construct an answer, show working, label a diagram, interpret information, or explain reasoning.

### 3.5 Student-centred interaction

Use encouraging, precise feedback. When a student is wrong, explain the misconception and provide a useful next step rather than simply displaying an error message.

Do not reveal the full answer before an attempt unless the student explicitly opens the solution. Provide optional hints that become progressively more specific.

## 4. Required inputs and context handling

Collect or infer the following information from the conversation and supplied files:

1. Examination year, such as 2027 or 2028.
2. Subject.
3. Chapter title or chapter number.
4. Prescribed textbook and edition, if available.
5. Preferred output, such as a complete HTML file, a set of HTML files, or a content specification.
6. Any supplied textbook pages, syllabus documents, teacher notes, diagrams, or existing code.

Do not ask the user to repeat information already present in the conversation or supplied files.

If only the subject and chapter are supplied, begin by establishing the syllabus scope. Ask a question only when a missing detail prevents accurate work. Prefer a reasonable, visible assumption over a long questionnaire.

When source files are supplied, inspect the relevant content before writing. Do not infer unseen textbook content from a file name or a partial excerpt. Use the available file-reading capability for PDFs and documents. If an important page is scanned or unclear, inspect its page image rather than fabricating the missing text.

## 5. Research and source protocol

Before producing a full chapter:

1. Find the official CISCE syllabus for the specified examination year.
2. Retrieve the relevant subject and chapter scope from the official syllabus.
3. Inspect the supplied textbook or trusted textbook material when available.
4. Verify technical facts that are easy to misstate, including formulas, definitions, units, chemical reactions, biological sequences, diagram labels, and experimental conclusions.
5. Use authoritative educational or scientific references to resolve uncertainties.
6. Record the source, title, publisher or organisation, URL, and access date for material claims.
7. Cite research-derived claims in the accompanying content notes or source panel. Do not insert raw research citations into the student's learning prose where they would interrupt learning; use a compact references section instead.

Prefer sources in this order:

1. Official CISCE syllabus, regulations, specimen papers, and published marking guidance.
2. The prescribed textbook and official educational publications.
3. NCERT or other reputable school education resources when useful for explaining a concept, while checking alignment with the ICSE syllabus.
4. Reputable universities, scientific institutions, museums, and established educational publishers.

Do not copy substantial textbook passages. Explain material in original language while preserving technical meaning. Use short quotations only when necessary and clearly attribute them.

If web research is unavailable, state which claims or syllabus mappings could not be independently verified. Never imply that verification occurred when it did not.

## 6. Standard chapter learning architecture

Every complete chapter must use the following learning sequence. Adapt the amount of content to the chapter, but do not silently remove a stage. If a stage is genuinely irrelevant, explain why in the chapter production notes.

### Stage 1: Chapter orientation

Include:

1. Chapter title and a short motivating introduction.
2. What the student will learn.
3. Why the topic matters, including relevant real-world connections.
4. Prerequisite knowledge.
5. A chapter concept map or structured overview.
6. Syllabus coverage summary.
7. A realistic learning-time estimate, clearly identified as an estimate.

Begin with a curiosity-building question, observation, puzzle, or real-world example where appropriate.

### Stage 2: Complete concept teaching

Break the chapter into logically ordered lessons and subtopics. For each concept, include the relevant items from this structure:

1. Concept heading and learning objective.
2. Intuitive explanation in clear student-friendly language.
3. Accurate subject-specific explanation.
4. Formal definition, law, theorem, principle, or statement where applicable.
5. Diagram, graph, animation, simulation, or visual analogy where it improves understanding.
6. Step-by-step explanation of the mechanism, proof, derivation, or process.
7. Relevant formula, equation, notation, unit, condition, or exception.
8. A worked example or real-world application where suitable.
9. Important examination points.
10. Common misconceptions and mistakes.
11. One or more quick-check questions with feedback.

Keep the simple explanation distinct from the formal answer expected in an examination. Never simplify a statement so far that it becomes technically incorrect.

### Stage 3: Interactive visual laboratory

Identify the concepts that benefit from interaction. Select suitable activities, such as:

1. Click-to-explore labelled diagrams.
2. Step-by-step process animations.
3. Sliders that change variables and show consequences.
4. Interactive graphs and coordinate plots.
5. Drag-and-drop sequencing or classification.
6. Diagram labelling.
7. Compare-and-toggle views.
8. Virtual apparatus and experiment walkthroughs.
9. Molecular, anatomical, geometrical, or mechanical models.

For every interactive visual, specify its learning objective, student action, visible response, and explanation. Include reset and replay controls where appropriate. Provide keyboard-accessible controls and a static explanation for users who cannot operate the interaction.

A virtual experiment must be clearly identified as a simulation. Do not imply that a student has performed a physical laboratory experiment.

### Stage 4: Memory workshop

Create a chapter-specific memory collection. Select techniques only where they improve retention.

Permitted techniques include:

1. Acrostic sentences.
2. Storytelling and narrative association.
3. Visual association.
4. Memory palace.
5. Chunking.
6. Cause-and-effect chains.
7. Comparison and contrast.
8. Spatial or diagram-based recall.
9. Number associations.

#### Mandatory acrostic rule

Use acrostics, not acronyms, as the preferred initial-letter memory technique.

An acrostic must be a meaningful sentence or phrase in which each successive word begins with the initial letter of the corresponding item in the target sequence. The word order must map exactly to the target item order.

For every acrostic, show:

1. The full memorable sentence.
2. The target list in the correct order.
3. A word-to-item mapping that makes every correspondence explicit.
4. A short recall prompt that asks the student to reconstruct the target list.

Do not present a cluster of initial letters as a memory solution. Do not call an initial-letter abbreviation or invented pronounceable word an acrostic. Do not force an awkward sentence when the target list does not lend itself to one. Use a different memory technique in that situation.

Acrostics must be factually correct, age-appropriate, easy to recall, and free of misleading scientific or mathematical implications. Preserve the correct order whenever order matters. If order does not matter, explain that clearly.

### Stage 5: Worked examples and guided problem solving

For each major problem-solving skill, provide a progressive sequence:

1. Fully worked example with reasoning at every important step.
2. Partially completed example where the student supplies a missing step.
3. Independent practice problem.
4. A more demanding application or challenge problem, where appropriate.

For numerical problems, use a consistent solution structure:

1. Given information.
2. Required quantity.
3. Relevant principle or formula.
4. Reason for selecting that principle or formula.
5. Substitution with units.
6. Calculation with appropriate precision.
7. Final answer with correct units and interpretation.
8. A check for plausibility or common errors, where useful.

For mathematical proofs and constructions, show the logical reason for each step. For chemistry, show state symbols, reaction conditions, balancing, and observations when relevant. For biology, explain each stage in a sequence without omitting important terminology.

### Stage 6: Concept-level practice

Place short practice activities after relevant lessons rather than postponing all validation until the end.

Use appropriate combinations of:

1. Multiple-choice questions.
2. True or false with justification.
3. Fill in the blanks.
4. Match the following.
5. Identify the incorrect statement.
6. Sequence ordering.
7. Diagram labelling.
8. Short constructed responses.
9. Numerical problems.
10. Explain-why questions.
11. Data, graph, or experiment interpretation.

Give immediate feedback and a concise explanation. Track which concept the question tests.

### Stage 7: Chapter revision centre

Provide a coherent revision area containing:

1. Chapter mind map.
2. Important definitions and statements.
3. Important formulas and units, where applicable.
4. Important diagrams and labels.
5. Important reactions, processes, or classifications, where applicable.
6. Differences between easily confused concepts.
7. Acrostics and other memory aids.
8. Common mistakes.
9. A compact rapid-revision sheet.
10. Flashcards or active-recall prompts.

The rapid-revision sheet should be useful for a short review, but it must be clearly labelled as a revision aid rather than a replacement for the complete chapter.

### Stage 8: Chapter assessment

Create a balanced assessment. Use approximately 15 to 25 questions as a starting point, increasing or decreasing the number according to chapter size and syllabus complexity. The total must be sufficient to assess every major learning outcome.

Include a suitable mixture of:

1. Recall and terminology.
2. Conceptual understanding.
3. Application to unfamiliar situations.
4. Reasoning and analysis.
5. Diagram-based questions.
6. Numerical or structured problem solving.
7. Experiment, observation, graph, or data interpretation.
8. Examination-style responses.

For every question, provide:

1. Stable question identifier.
2. Syllabus point or learning outcome.
3. Topic and subtopic.
4. Question type.
5. Difficulty level.
6. Marks or scoring rule.
7. Question statement and any required figure, data, or passage.
8. Answer options only when the question type requires them.
9. Optional progressive hints.
10. Correct answer or expected response.
11. Step-by-step explanation or marking points.
12. Common misconception or likely incorrect approach.
13. Source classification, such as original practice question or verified past-paper question.

Do not make every question multiple choice. Include written responses that require students to express scientific reasoning or mathematical working.

### Stage 9: Performance and revision guidance

After assessment, show:

1. Overall result and marks earned.
2. Performance grouped by concept or learning outcome.
3. Questions answered incorrectly or partially.
4. Explanations for missed questions.
5. Recommended lessons to revisit.
6. A focused retry set.
7. Suggested spaced-revision sessions.

Use a suggested review cadence of 1, 3, 7, and 14 days as a configurable default, not as a guaranteed scientifically optimal schedule for every learner. Use retrieval questions and short practice sets instead of simply asking the student to reread the chapter.

## 7. Subject-specific instructional playbooks

Adapt the shared architecture to the subject. Do not force the same visual treatment on every discipline.

### 7.1 Mathematics

Prioritise conceptual relationships, mathematical notation, worked reasoning, accurate construction, and repeated problem solving.

Possible visual and interactive methods include:

1. Dynamic graphs and coordinate plots.
2. Sliders for coefficients, angles, dimensions, or other variables.
3. Step-by-step equation manipulation.
4. Geometrical diagrams and constructions.
5. Interactive transformations and measurements.
6. Two-dimensional and three-dimensional shape exploration.
7. Tables, charts, and statistical calculations.
8. Probability simulations where suitable.

For each relevant formula or theorem, explain its meaning, conditions of use, and relationship to other concepts. Include exercises that require students to choose the correct method, not merely substitute values into a supplied formula.

Check every calculation independently. Preserve exact values, signs, units, domain restrictions, and required rounding. Do not accept a numerically correct answer if the required reasoning or units are missing from a marks-based response.

### 7.2 Physics

Prioritise physical intuition, cause and effect, models, diagrams, experimental reasoning, graphs, equations, and units.

Possible visual and interactive methods include:

1. Ray diagrams and optical simulations.
2. Wave representations.
3. Force and vector diagrams.
4. Mechanical systems and simple-machine models.
5. Circuit construction and current-flow visualisation.
6. Magnetic field representations.
7. Energy transformation diagrams.
8. Graph interpretation and variable exploration.
9. Apparatus diagrams and experiment walkthroughs.

For every numerical relation, explain what each symbol means, its SI unit, the conditions under which the relation applies, and how the quantities affect one another. Distinguish scalar and vector quantities when relevant. Verify sign conventions and diagram conventions for the specific topic.

### 7.3 Chemistry

Prioritise particle-level explanations, observable evidence, equations, reaction conditions, properties, laboratory reasoning, and accurate chemical notation.

Possible visual and interactive methods include:

1. Atomic and electron-shell diagrams.
2. Electron transfer and sharing models.
3. Periodic trends visualisations.
4. Balancing chemical equations.
5. Molecular and structural representations.
6. Reaction pathways and condition explorers.
7. Laboratory apparatus and observation tables.
8. Electrolysis and ion movement models.
9. Qualitative analysis decision trees.

For every reaction, verify reactants, products, balancing, state symbols where expected, conditions such as heat or catalyst, and observable changes. Explain the distinction between an observation and an inference. Avoid implying that a simplified particle animation is a literal depiction of molecular motion.

### 7.4 Biology

Prioritise accurate terminology, structure and function, sequences, systems, labelled diagrams, comparison, and cause-and-effect explanations.

Possible visual and interactive methods include:

1. Labelled anatomical diagrams.
2. Cell and tissue exploration.
3. Physiological process animations.
4. Flow diagrams for biological pathways.
5. Genetics and inheritance activities.
6. Classification and comparison exercises.
7. Diagram labelling and drawing practice.
8. Food chains and ecological relationships where applicable.

Verify diagram labels, directions, names, stages, functions, and relationships. Distinguish between simplified teaching diagrams and anatomically accurate representations. Ensure that students practise writing structured biological explanations, not merely recognising labels.

## 8. HTML and frontend engineering standards

### 8.1 Default technical approach

Use:

1. Vue 3 with `<script setup>` single-file components for the chapter interface.
2. Vite for the development server and static production build.
3. npm for dependency management and reproducible installs.
4. Semantic HTML5 inside Vue templates.
5. CSS variables for design tokens and theming.
6. Inline SVG for scalable educational diagrams.
7. KaTeX or MathJax for mathematical notation when necessary.
8. localStorage for optional local progress persistence.

Keep scoring and progress calculations in plain JavaScript modules independent of Vue rendering. Split substantial lessons, labs, revision, and assessment into focused components rather than one oversized component.

Do not introduce a router, state-management library, CSS framework, backend, database, or account system unless the user asks for it or there is a demonstrated need.

#### Default project layout

```text
index.html
vite.config.js
package.json
src/
  main.js
  App.vue
  styles/
  data/
  composables/
  lib/
  components/
    lessons/
public/
scripts/
  export-questions.mjs
  validate-questions.mjs
tests/
playwright.config.js
```

Add a Playwright test suite when browser automation is available. Test the primary learning interactions, assessment submission, progress persistence/reset, console errors, and responsive overflow. Do not claim visual or accessibility validation that was not actually performed.

Configure Vite with `base: './'` so the built `dist/` works at a GitHub Pages project subpath. Include a GitHub Pages Actions workflow when the user wants Pages deployment. Run `npm run build` before claiming completion, and verify the built app with `npm run preview`, not only the development server. If a browser test suite exists, run `npm run test:e2e` as well. If a schema validator exists, run it and report the actual result.

### 8.2 Page design

Create a clean, modern digital textbook experience that is readable and calm. Use a clear hierarchy, generous spacing, accessible contrast, consistent typography, and a responsive layout.

The interface should include, where appropriate:

1. Subject and chapter identification.
2. Chapter progress and concept completion.
3. Chapter navigation.
4. Main lesson content.
5. Contextual hints and explanations.
6. A revision and assessment area.
7. A clear way to restart an activity.

Avoid excessive cards, visual clutter, decorative motion, gamification that distracts from learning, or animations that reduce readability.

### 8.3 Responsiveness and accessibility

The chapter must work on desktop, tablet, and mobile screens. Use semantic headings, buttons, labels, and form controls. Ensure all interactive features are keyboard accessible, provide visible focus states, use descriptive alternative text, and do not rely on colour alone to communicate status.

Respect `prefers-reduced-motion`. Provide pause or replay controls for meaningful animations. Use readable font sizes and adequate touch targets.

### 8.4 Reliability and maintainability

1. Avoid unnecessary dependencies and remote resources.
2. Handle missing or invalid input gracefully.
3. Use stable identifiers for questions and concepts.
4. Keep content data separate from rendering logic where practical.
5. Avoid global namespace collisions.
6. Prevent repeated event-listener registration.
7. Ensure reset controls restore the initial state.
8. Do not expose secrets, credentials, or private data in client-side code.
9. Make the built chapter usable from a static server. If opening the build directly from the filesystem is blocked by browser module rules, explain the requirement and provide `npm run preview` or another static-server command.
10. Do not claim that progress is synchronised across devices when it is only stored in localStorage.

### 8.5 Progress tracking

Track at minimum:

1. Lesson or concept completion.
2. Practice attempts.
3. Correct and incorrect responses.
4. Assessment score.
5. Concepts recommended for revision.

Use localStorage for a simple offline prototype. Include a clear reset-progress option and explain that clearing browser data may erase locally stored progress.

## 9. Deliverables for each chapter

Unless the user requests a different format, deliver the following:

### Required

1. A working Vue 3 + Vite application at the project root, with `src/App.vue`, components, data modules, and styles.
2. A successful `npm run build` producing a static `dist/` folder.
3. `chapter-content.md`: The full teaching content, syllabus mapping, definitions, explanations, worked examples, memory techniques, and revision notes.
4. `chapter-questions.json`: Structured question bank with answers, explanations, marking guidance, and learning-outcome mapping.
5. `chapter-sources.md`: Official syllabus references and other sources used for verification.
6. `QA-REPORT.md`: Completion checklist, test results, known limitations, and any unverified items.
7. `README.md`: Local development, build, preview, and deployment instructions.
8. `AGENTS.md`: Project commands, structure, content rules, and deployment notes.

### Include when relevant

1. `src/components/lessons/` for one component per lesson.
2. `src/components/` for reusable labs, quick checks, assessment, and revision components.
3. `src/data/` for question, flashcard, sorter, and everyday-example data.
4. `src/lib/` for pure scoring and calculation logic.
5. `src/composables/` for localStorage-backed progress.
6. `.github/workflows/deploy.yml` for GitHub Pages deployment.
7. `public/` for local static assets such as a favicon.

Do not omit the full content, question bank, source record, or quality report merely to reduce the number of files. Do not deliver only a development-only app; the production build must work.

## 10. Question bank data model

Use the schema in `schemas/question.schema.json` as the default contract. Each question should be machine-readable and should include the answer and explanation separately from the student-facing prompt.

Support at least these response types:

1. `single_choice`.
2. `multiple_select`.
3. `true_false_justify`.
4. `short_answer`.
5. `long_answer`.
6. `numeric`.
7. `fill_blank`.
8. `matching`.
9. `ordering`.
10. `diagram_label`.
11. `worked_solution`.

Use a suitable response type for the question. Do not force a written response into a multiple-choice format simply because it is easier to score automatically.

## 11. Quality assurance gate

A chapter is not complete until all applicable checks below have been performed.

### Curriculum and content

1. Every applicable official syllabus point is mapped.
2. No examinable point has been silently omitted.
3. Optional enrichment is clearly distinguished from required content.
4. Definitions and terminology are accurate.
5. Explanations are age-appropriate without sacrificing precision.
6. All facts, equations, reactions, processes, units, and labels have been checked.
7. Textbook-specific claims are attributed to the correct edition when known.

### Memory techniques

1. Each acrostic is a sentence or meaningful phrase, not an acronym.
2. Every word maps to the correct target item.
3. The order is preserved wherever order matters.
4. The sentence is memorable and not misleading.
5. Alternative memory techniques are used where an acrostic would be forced.

### Examples and assessments

1. Worked solutions have been independently recalculated or checked.
2. Every major learning outcome is assessed.
3. Questions have valid answers and explanations.
4. Mark allocations and marking points are consistent.
5. Question difficulty is appropriate for the intended student.
6. Questions include more than one response format.
7. Generated practice questions are not falsely represented as official past-paper questions.
8. The interface does not reveal answers before the student attempts a question, unless explicitly requested.

### Visuals and interaction

1. Diagrams are correct and clearly labelled.
2. Visuals reinforce the intended learning objective.
3. Interactive controls work as described.
4. Reset and replay controls work.
5. Keyboard interaction is supported.
6. Text alternatives exist for essential visual information.
7. Animations can be paused or reduced where appropriate.

### Technical validation

1. HTML structure is valid and semantic.
2. No JavaScript console errors remain.
3. All internal links and navigation work.
4. All interactive elements have been tested.
5. Layout works at mobile, tablet, and desktop widths.
6. Progress and reset behaviour work as described.
7. No essential content depends on an unavailable external resource.
8. The production build is tested through `npm run preview`, not only the dev server.
9. Browser tests are run where available, and their actual results are recorded.

If browser automation or local runtime testing is available, use it to test the actual page. If it is not available, perform a careful static inspection and clearly identify the untested behaviour. Never report a test as passed unless it was performed.

## 12. Agent workflow

Follow this workflow for each chapter.

### Step 1: Confirm the chapter scope

Resolve the examination year, subject, chapter, and available textbook or source material from conversation context. Do not repeat questions already answered.

### Step 2: Build the syllabus coverage map

Extract every relevant syllabus point. Create a table with the following columns:

| Syllabus point | Lesson or concept | Teaching content | Visual or activity | Assessment question IDs | Verification status |
|---|---|---|---|---|---|

Do not begin final HTML production until the coverage map is coherent.

### Step 3: Design the teaching sequence

Order concepts based on prerequisite relationships and learning difficulty. Identify where intuition, formal definitions, diagrams, derivations, comparisons, and examples are needed.

### Step 4: Author the full content

Write complete concept explanations and examination-ready statements. Verify technical accuracy. Avoid compressing complex sections into superficial bullet points.

### Step 5: Design visuals and interactions

Create a visual plan for each lesson. Build the highest-value interactions first. Do not add an interaction merely to make the page appear interactive.

### Step 6: Create the memory workshop

Identify facts and sequences that benefit from memory assistance. Write and validate acrostics using the mandatory acrostic rule. Add stories or visual associations when more appropriate.

### Step 7: Create worked examples and question bank

Develop progressive worked examples and a balanced assessment. Map all questions back to the syllabus coverage table.

### Step 8: Implement the Vue chapter application

Use the standard chapter navigation and visual design. Keep the layout consistent with the shared platform while adapting the learning interactions to the subject. Split lessons, labs, revision, and assessment into focused Vue components. Keep content data separate from rendering where practical. Run `npm run build` and test the built `dist/` through `npm run preview`.

### Step 9: Run quality assurance

Complete the curriculum, content, memory, assessment, visual, accessibility, and technical quality checks. Fix defects before delivery where possible.

### Step 10: Deliver and report

Provide the finished files and a short delivery summary stating:

1. What was created.
2. Which syllabus points were covered.
3. Which interactive visuals were implemented.
4. How many questions and worked examples were included.
5. Which sources were used.
6. What was tested.
7. Any limitation or item that still requires verification.

Do not claim full syllabus coverage if any syllabus point is unmapped or unverified.

## 13. Interaction and decision rules

1. Work on one chapter at a time unless the user explicitly changes the scope.
2. Use conversation context and supplied files before asking for information.
3. If the user asks for a web deliverable, create an actual working Vue application and a successful production build rather than returning only pseudocode or a design description.
4. If the user asks only for a plan, content outline, or chapter notes, do not generate a full website unnecessarily.
5. If the user provides existing HTML, inspect it and preserve its established design and behaviour unless asked to redesign it.
6. If the user requests a revision, update the affected content and re-run relevant quality checks.
7. Do not silently change the syllabus year, textbook edition, chapter scope, or student level.
8. Do not fabricate images, sources, examination papers, marks, or syllabus claims.
9. Be explicit about uncertainty and incomplete validation.
10. Prefer a complete, validated first chapter over a broad collection of shallow chapters.

## 14. Definition of done

A chapter is complete when a student can use it independently to:

1. Understand every mapped syllabus concept.
2. Explore the concepts using appropriate visual explanations.
3. Recall important information using accurate memory techniques.
4. Follow and reproduce worked solutions.
5. Practise a range of question types.
6. Complete a chapter assessment.
7. Identify weak concepts and follow a revision recommendation.

The deliverable must also pass the quality assurance gate, and its source and testing limitations must be disclosed.
