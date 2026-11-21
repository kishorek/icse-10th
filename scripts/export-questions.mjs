import fs from 'node:fs'

const chapters = [
  {
    id: 'chapter-physics-1',
    subject: 'Physics',
    source: 'src/data/questions/chapter-physics-1.json',
    syllabus: 'CISCE ICSE Physics 2027, Unit 1, Force',
    outcomes: {
      P1: 'Moment of a force and the factors that change it',
      P2: 'Couples, equilibrium and the conditions for equilibrium',
      P3: 'Principle of moments, its verification and numerical problems',
      P4: 'Centre of gravity, regular bodies and the plumb-line method',
      P5: 'Uniform circular motion, centripetal force and centrifugal force'
    }
  },
  {
    id: 'chapter-physics-2',
    subject: 'Physics',
    source: 'src/data/questions/chapter-physics-2.json',
    syllabus: 'CISCE ICSE Physics 2027, Unit 1(iii), (iv) and (vi)',
    outcomes: {
      W1: 'Work, force, displacement and the angle between them',
      W2: 'Work done by gravity and units of work',
      W3: 'Power, its units and the relation P = Fv',
      W4: 'Energy, its units and the difference between energy and power',
      W5: 'Potential energy, kinetic energy and the work-energy theorem',
      W6: 'Forms of energy, transformations and dissipation',
      W7: 'Conservation of energy, free fall and the simple pendulum'
    }
  },
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
    id: 'chapter-12c',
    source: 'src/data/questions/chapter-12c.json',
    syllabus: 'CISCE ICSE Chemistry 2027, Unit 9(v), alkenes',
    outcomes: {
      C1: 'Alkene family, general formula and isomerism',
      C2: 'Ethene structure and preparation',
      C3: 'Addition reactions of ethene',
      C4: 'Combustion, uses and testing for unsaturation'
    }
  },
  {
    id: 'chapter-12d',
    source: 'src/data/questions/chapter-12d.json',
    syllabus: 'CISCE ICSE Chemistry 2027, Unit 9(v), alkynes',
    outcomes: {
      D1: 'Alkyne family, general formula and isomerism',
      D2: 'Ethyne structure and preparation',
      D3: 'Stepwise addition reactions of ethyne',
      D4: 'Combustion, uses and distinguishing tests'
    }
  },
  {
    id: 'chapter-12e',
    source: 'src/data/questions/chapter-12e.json',
    syllabus: 'CISCE ICSE Chemistry 2027, Unit 9(vi), alcohols',
    outcomes: {
      E1: 'Alcohol family, hydroxyl group and classification',
      E2: 'Ethanol occurrence and preparation',
      E3: 'Physical properties and combustion of ethanol',
      E4: 'Reactions of ethanol',
      E5: 'Denatured and spurious alcohol, and uses'
    }
  },
  {
    id: 'chapter-12f',
    source: 'src/data/questions/chapter-12f.json',
    syllabus: 'CISCE ICSE Chemistry 2027, Unit 9(vii), carboxylic acids',
    outcomes: {
      F1: 'Carboxylic acid family, carboxyl group and nomenclature',
      F2: 'Acetic acid structure, vinegar, glacial acid and physical properties',
      F3: 'Acidic reactions and esterification',
      F4: 'Preparation context, tests and uses'
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
    subject: chapter.subject || 'Chemistry',
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
    const optionIdFor = (text) => {
      const index = (question.options || []).findIndex((option) =>
        (typeof option === 'string' ? option : option.text) === text
      )
      return index >= 0 ? String.fromCharCode(65 + index) : text
    }
    base.answer = Object.fromEntries(
      question.pairs.map((pair) => [pair.left, optionIdFor(pair.answer)])
    )
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
