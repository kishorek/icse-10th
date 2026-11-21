import questions from '../questions/chapter-physics-1.json'
import { flashcards } from '../chapter-physics-1/content'

export const chapter = {
  id: 'chapter-physics-1',
  href: './chapter-physics-1.html',
  label: 'Physics 1',
  subject: 'Physics',
  subjectLabel: 'Physics',
  title: 'Force',
  subtitle: 'Turning effects, balance and circular motion',
  description:
    'Start with the moment of a force, then use couples, equilibrium, the principle of moments and the centre of gravity to explain why bodies balance. Finish with uniform circular motion and the two forces students most often confuse.',
  storageKey: 'icse10.physics1.state',
  syllabusReference: 'CISCE ICSE Physics 2027, Unit 1, Force',
  estimatedMinutes: [165, 180],
  assessmentLabel: '24-question assessment',
  lessons: [
    { id: 'lesson-1', number: 1, navLabel: 'Moment of a force', checkIds: ['p1-q1', 'p1-q2', 'p1-q3'] },
    { id: 'lesson-2', number: 2, navLabel: 'Couples and equilibrium', checkIds: ['p2-q1', 'p2-q2', 'p2-q3'] },
    { id: 'lesson-3', number: 3, navLabel: 'Principle of moments', checkIds: ['p3-q1', 'p3-q2', 'p3-q3'] },
    { id: 'lesson-4', number: 4, navLabel: 'Centre of gravity', checkIds: ['p4-q1', 'p4-q2', 'p4-q3'] },
    { id: 'lesson-5', number: 5, navLabel: 'Uniform circular motion', checkIds: ['p5-q1', 'p5-q2', 'p5-q3'] }
  ],
  outcomes: {
    P1: 'Moment of a force and the factors that change it',
    P2: 'Couples, equilibrium and the conditions for equilibrium',
    P3: 'Principle of moments, its verification and numerical problems',
    P4: 'Centre of gravity, regular bodies and the plumb-line method',
    P5: 'Uniform circular motion, centripetal force and centrifugal force'
  },
  features: { memory: true, revision: true, assessment: true },
  questions,
  flashcards,
  hero: {
    eyebrow: 'ICSE Class 10 · Physics · Unit 1',
    title: 'Force',
    subtitle: 'Chapter 1 · Turning effects, balance and circular motion',
    question: 'Why can a small force at the right place move something that a much larger force cannot?',
    chips: [
      '5 lessons',
      '5 interactive labs',
      '24-question assessment',
      'Estimated study time: 165–180 minutes'
    ],
    outcomes: [
      'Calculate the moment of a force and explain the two factors that change it.',
      'Recognise a couple and state the two conditions for equilibrium.',
      'Use the principle of moments to solve metre-rule and see-saw problems.',
      'Locate the centre of gravity of regular bodies and use the plumb-line method.',
      'Explain why uniform circular motion is accelerated and distinguish centripetal from centrifugal force.'
    ],
    prerequisites: [
      'Force as a push or a pull, and the newton as its SI unit.',
      'Weight as the force of gravity on a mass.',
      'Speed as distance divided by time, and the idea of a vector direction.'
    ],
    conceptMap: [
      { href: '#lesson-1', label: 'Moment of a force' },
      { href: '#lesson-2', label: 'Couples and equilibrium' },
      { href: '#lesson-3', label: 'Principle of moments' },
      { href: '#lesson-4', label: 'Centre of gravity' },
      { href: '#lesson-5', label: 'Uniform circular motion' }
    ],
    scopeNote:
      'This chapter follows the supplied Chapter 1 Force pages and CISCE ICSE Physics 2027 Unit 1. Work, energy, power and machines belong to later chapters of the same unit and are not covered here. Centre of gravity is treated qualitatively, with locations for regular bodies and the plumb-line method for an irregular lamina.'
  },
  sources: {
    title: 'Sources and scope',
    paragraphs: [
      'This chapter follows the supplied Selina ICSE Class 10 Physics Chapter 1 pages for sequence, terminology and worked-example style. The supplied file is a scanned copy, so it was read page by page from page images.',
      'CISCE ICSE Physics 2027, Unit 1 (Force, Work, Power and Energy) sets the examinable scope: turning forces, moment of force, equilibrium, principle of moments, centre of gravity and uniform circular motion with centripetal and centrifugal force.',
      'All quick checks and assessment questions in this chapter are original practice questions. They are not past-paper questions, and no textbook page mapping is claimed because the edition is not stated in the scan.'
    ],
    links: [
      { label: 'CISCE Regulations and Syllabuses', href: 'https://cisce.org/regulations-and-syllabuses' }
    ]
  }
}

export const lessons = chapter.lessons
export const outcomes = chapter.outcomes
export const storageKey = chapter.storageKey

export default chapter
