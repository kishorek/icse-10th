import fs from 'node:fs'

const source = JSON.parse(fs.readFileSync('src/data/questions/chapter-1.json', 'utf8'))

const outcomeLabels = {
  O1: 'Explain the meaning and history of organic chemistry.',
  O2: "Explain carbon's central role using tetravalency, catenation, multiple bonds and isomerism.",
  O3: 'Distinguish organic from inorganic compounds and recognise the standard exceptions.',
  O4: 'Identify everyday organic compounds and their uses.',
  O5: 'Explain the importance and environmental impact of organic compounds.'
}

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

const exported = source.map((question) => {
  const base = {
    id: question.id,
    subject: 'Chemistry',
    topic: question.topic,
    syllabus_reference: 'CISCE ICSE Chemistry 2027, Unit 9.1',
    learning_outcome: outcomeLabels[question.outcome],
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
    base.stimulus = question.pairs
      .map((pair, index) => `${index + 1}. ${pair.left}`)
      .join('\n')
    base.options = optionObjects(question)
    base.answer = Object.fromEntries(
      question.pairs.map((pair) => [pair.left, pair.answer])
    )
  }

  return base
})

fs.writeFileSync('chapter-questions.json', `${JSON.stringify(exported, null, 2)}\n`)
console.log(`Exported ${exported.length} questions to chapter-questions.json`)
