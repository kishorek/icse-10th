import questions from '../questions/chapter-1.json'

export const chapter = {
  id: 'chapter-1',
  href: './chapter-1.html',
  label: 'Chapter 1',
  title: 'Organic Chemistry',
  subtitle: 'Introduction to Organic Compounds',
  description:
    'Meet organic chemistry, carbon’s unique bonding, the organic–inorganic divide and the everyday importance of carbon compounds.',
  storageKey: 'icse10.organic1.state',
  syllabusReference: 'CISCE ICSE Chemistry 2027, Unit 9(i)',
  estimatedMinutes: [45, 60],
  assessmentLabel: '24-question assessment',
  lessons: [
    { id: 'lesson-1', number: 1, navLabel: 'What are organic compounds?', checkIds: ['l1-q1', 'l1-q2', 'l1-q3'] },
    { id: 'lesson-2', number: 2, navLabel: 'Why carbon is central', checkIds: ['l2-q1', 'l2-q2', 'l2-q3'] },
    { id: 'lesson-3', number: 3, navLabel: 'Organic vs inorganic', checkIds: ['l3-q1', 'l3-q2', 'l3-q3'] },
    { id: 'lesson-4', number: 4, navLabel: 'Everyday examples', checkIds: ['l4-q1', 'l4-q2', 'l4-q3'] },
    { id: 'lesson-5', number: 5, navLabel: 'Why it matters', checkIds: ['l5-q1', 'l5-q2', 'l5-q3'] }
  ],
  outcomes: {
    O1: 'Meaning and history',
    O2: "Carbon's central role",
    O3: 'Organic vs inorganic',
    O4: 'Everyday examples',
    O5: 'Importance and environment'
  },
  features: { memory: true, revision: true, assessment: true },
  questions,
  sources: {
    title: 'Sources and scope',
    paragraphs: [
      'This chapter follows the CISCE ICSE Chemistry syllabus for the examination year 2027, Unit 9.1 introduction to organic compounds. The 2026-27 syllabus retains the same introduction wording. The official syllabus is published by the Council for the Indian School Certificate Examinations.',
      'CISCE does not prescribe a Chemistry textbook, so no textbook page mapping is claimed. All examination-style questions in this chapter are original practice questions, not board past-paper questions. Enrichment content is labelled.',
      'Progress is stored only in this browser using localStorage. It is not synchronised across devices.'
    ],
    links: [
      {
        label: 'CISCE Regulations and Syllabuses',
        href: 'https://cisce.org/regulations-and-syllabuses'
      }
    ]
  }
}

export const lessons = chapter.lessons
export const outcomes = chapter.outcomes
export const storageKey = chapter.storageKey

export default chapter
