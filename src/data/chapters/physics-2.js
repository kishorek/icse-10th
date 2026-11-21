import questions from '../questions/chapter-physics-2.json'

export const chapter = {
  id: 'chapter-physics-2',
  href: './chapter-physics-2.html',
  label: 'Physics 2',
  subject: 'Physics',
  subjectLabel: 'Physics',
  title: 'Work, Energy and Power',
  subtitle: 'Doing work, storing energy and spending it at a rate',
  description:
    'Measure work when a force moves a body, connect work to energy, calculate power, and follow energy as it changes form. Finish with the conservation of energy in free fall and a simple pendulum.',
  storageKey: 'icse10.physics2.state',
  syllabusReference: 'CISCE ICSE Physics 2027, Unit 1(iii), (iv) and (vi)',
  estimatedMinutes: [165, 190],
  assessmentLabel: '24-question assessment',
  lessons: [
    { id: 'lesson-1', number: 1, navLabel: 'Work and its measurement', checkIds: ['w1-q1', 'w1-q2', 'w1-q3'] },
    { id: 'lesson-2', number: 2, navLabel: 'Gravity and work units', checkIds: ['w2-q1', 'w2-q2', 'w2-q3'] },
    { id: 'lesson-3', number: 3, navLabel: 'Power and its units', checkIds: ['w3-q1', 'w3-q2', 'w3-q3'] },
    { id: 'lesson-4', number: 4, navLabel: 'Energy and its units', checkIds: ['w4-q1', 'w4-q2', 'w4-q3'] },
    { id: 'lesson-5', number: 5, navLabel: 'Potential and kinetic energy', checkIds: ['w5-q1', 'w5-q2', 'w5-q3'] },
    { id: 'lesson-6', number: 6, navLabel: 'Forms and transformations', checkIds: ['w6-q1', 'w6-q2', 'w6-q3'] },
    { id: 'lesson-7', number: 7, navLabel: 'Conservation of energy', checkIds: ['w7-q1', 'w7-q2', 'w7-q3'] }
  ],
  outcomes: {
    W1: 'Work, force, displacement and the angle between them',
    W2: 'Work done by gravity and units of work',
    W3: 'Power, its units and the relation P = Fv',
    W4: 'Energy, its units and the difference between energy and power',
    W5: 'Potential energy, kinetic energy and the work-energy theorem',
    W6: 'Forms of energy, transformations and dissipation',
    W7: 'Conservation of energy, free fall and the simple pendulum'
  },
  features: { memory: true, revision: true, assessment: true },
  questions,
  sources: {
    title: 'Sources and scope',
    paragraphs: [
      'This chapter follows the CISCE ICSE Physics 2027 syllabus, Unit 1 Force, Work, Power and Energy, parts (iii), (iv) and (vi). It uses the supplied Selina ICSE Class 10 Physics Chapter 2 pages for sequence, terminology and worked-example style.',
      'The supplied PDF is a scanned copy with no usable text layer, so every page was read from a rendered page image. The scan states no edition or publication year, so no textbook page mapping is claimed.',
      'Official Unit 1(v), machines, is not covered by the supplied chapter and is treated as a separate later chapter. All examination-style questions here are original practice questions, not past-paper questions. Enrichment is labelled where used.',
      'Progress is stored only in this browser using localStorage. It is not synchronised across devices.'
    ],
    links: [
      { label: 'CISCE Regulations and Syllabuses', href: 'https://cisce.org/regulations-and-syllabuses' }
    ]
  },
  hero: {
    eyebrow: 'ICSE Class 10 · Physics · Unit 1',
    title: 'Work, Energy and Power',
    subtitle: 'Chapter 2 · Force, motion and the energy account',
    question: 'Why does carrying a heavy box along a level floor do no work against gravity, while lifting it does?',
    chips: [
      '7 lessons',
      '22 interactive visuals',
      '24-question assessment',
      'Estimated study time: 165–190 minutes'
    ],
    outcomes: [
      'Calculate work from force, displacement and the angle between them.',
      'Use W = mgh and convert between joules, ergs, kilowatt-hours, calories and electron volts.',
      'Distinguish work from power and calculate P = W/t and P = Fv.',
      'Derive and apply U = mgh, K = ½mv² and the work-energy theorem.',
      'Describe energy forms, trace conversions and explain dissipation.',
      'Verify that U + K is constant in free fall and apply conservation to a simple pendulum.'
    ],
    prerequisites: [
      'Force as a push or a pull, and weight as the force of gravity on a mass.',
      'Displacement, speed and the difference between scalars and vectors.',
      'Class IX equation v² = u² + 2as for uniform acceleration.',
      'Basic algebra, unit prefixes and reading a simple graph.'
    ],
    conceptMap: [
      { href: '#lesson-1', label: 'Work' },
      { href: '#lesson-2', label: 'Gravity and units' },
      { href: '#lesson-3', label: 'Power' },
      { href: '#lesson-4', label: 'Energy units' },
      { href: '#lesson-5', label: 'U and K' },
      { href: '#lesson-6', label: 'Energy forms' },
      { href: '#lesson-7', label: 'Conservation' }
    ],
    scopeNote:
      'CISCE Unit 1(v) Machines is not part of the supplied Chapter 2 and is not covered here. Numerical work is limited to translational motion. Centrifugal force and circular motion belong to Chapter 1 and are not repeated.'
  }
}

export const lessons = chapter.lessons
export const outcomes = chapter.outcomes
export const storageKey = chapter.storageKey

export default chapter
