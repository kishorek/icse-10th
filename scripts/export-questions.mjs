import fs from 'node:fs'

const chapters = [
  {
    id: 'chapter-1',
    source: 'src/data/questions/chapter-1.json',
    syllabus: 'CISCE ICSE Chemistry 2027, Unit 9.1',
    outcomes: {
      O1: 'Meaning and history',
      O2: "Carbon's central role",
      O3: 'Organic vs inorganic',
      O4: 'Everyday examples',
      O5: 'Importance and environment'
    }
  },
  {
    id: 'chapter-12a',
    source: 'src/data/questions/chapter-12a.json',
    syllabus: 'CISCE ICSE Chemistry 2027, Unit 9(ii)-(iv)',
    outcomes: {
      A1: 'Organic compounds, sources, and organic vs inorganic trends',
      A2: "Carbon's unique nature, bonding and hydrocarbon classification",
      A3: 'Structural formulae, alkyl groups and functional groups',
      A4: 'Homologous series',
      A5: 'IUPAC nomenclature',
      A6: 'Structural isomerism'
    }
  },
  {
    id: 'chapter-12b',
    source: 'src/data/questions/chapter-12b.json',
    syllabus: 'CISCE ICSE Chemistry 2027, Unit 9(v), alkanes',
    outcomes: {
      B1: 'Alkane family, sources and chain isomerism',
      B2: 'Methane and ethane: occurrence, structure, preparation and physical properties',
      B3: 'Reactions and uses of methane and ethane'
    }
  }
]

const typeMap = {
  single: 'single_choice',
  multiple: 'multiple_select',
  truefalse: 'true_false_justify',
  fill: 'fill_blank',
  match: 'matching',
  short: 'short_answer',
  long: 'long_answer'
}

function splitMarks(total, count) {
  if (!count) return []
  const base = Number((total / count).toFixed(2))
  const marks = Array(count).fill(base)
  marks[count - 1] = Number((total - base * (count - 1)).toFixed(2))
  return marks
}

function markingPoints(question) {
  const points = question.markingPoints || []
  const marks = splitMarks(question.marks, points.length)
  return points.map((point, index) => ({
    point,
    marks: marks[index]
  }))
}

function optionObjects(question) {
  return (question.options || []).map((option, index) => {
    if (typeof option === 'string') {
      return { id: String.fromCharCode(65 + index), text: option }
    }
    return { id: option.value, text: option.text }
  })
}

function transform(question, chapter) {
  const base = {
    id: question.id,
    subject: 'Chemistry',
    topic: question.topic,
    syllabus_reference: chapter.syllabus,
    learning_outcome: chapter.outcomes[question.outcome],
    type: typeMap[question.type],
    difficulty:
      question.marks >= 3 ? 'challenging' : question.marks === 2 ? 'standard' : 'foundation',
    marks: question.marks,
    estimated_time_seconds: question.marks * 60,
    prompt: question.prompt,
    explanation: question.explanation,
    common_mistake: question.misconception,
    source_classification: 'original_practice',
    source_reference: null,
    tags: [question.outcome, question.topic]
  }

  if (question.type === 'single') {
    base.options = optionObjects(question)
    base.answer = question.answer
  }

  if (question.type === 'multiple') {
    base.options = optionObjects(question)
    base.answer = question.answer
  }

  if (question.type === 'fill') {
    base.answer = question.answer
    base.accepted_answers = question.answer
  }

  if (question.type === 'truefalse') {
    base.answer = question.answer
    base.marking_points = markingPoints(question)
  }

  if (question.type === 'short' || question.type === 'long') {
    base.answer = question.modelAnswer
    base.marking_points = markingPoints(question)
  }

  if (question.type === 'match') {
    base.stimulus = question.pairs.map((pair, index) => `${index + 1}. ${pair.left}`).join('\n')
    base.options = optionObjects(question)
    base.answer = Object.fromEntries(question.pairs.map((pair) => [pair.left, pair.answer]))
  }

  return base
}

fs.mkdirSync('exports', { recursive: true })

let total = 0
for (const chapter of chapters) {
  const source = JSON.parse(fs.readFileSync(chapter.source, 'utf8'))
  const exported = source.map((question) => transform(question, chapter))
  const output = `exports/${chapter.id}-questions.json`
  fs.writeFileSync(output, `${JSON.stringify(exported, null, 2)}\n`)
  total += exported.length
  console.log(`Exported ${exported.length} questions from ${chapter.source} to ${output}`)
}

console.log(`Exported ${total} questions across ${chapters.length} chapters.`)
