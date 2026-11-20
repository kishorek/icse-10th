export function normalize(value) {
  return String(value ?? '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[.]+$/, '')
}

export function maxMarks(question) {
  return Number(question.marks) || 0
}

export function selfMax(question) {
  if (question.type === 'truefalse') {
    return Math.max(0, maxMarks(question) - (question.autoMarks ?? 1))
  }
  if (question.type === 'short' || question.type === 'long') {
    return maxMarks(question)
  }
  return 0
}

export function isAnswered(question, answers) {
  const value = answers[question.id]
  if (question.type === 'multiple') {
    const given = Array.isArray(value) ? value : value ? [value] : []
    return given.length > 0
  }
  if (question.type === 'match') {
    return question.pairs.every((pair, index) => Boolean(answers[`${question.id}-${index}`]))
  }
  return String(value ?? '').trim().length > 0
}

export function answerIsCorrect(question, answers) {
  const value = answers[question.id]

  if (question.type === 'single' || question.type === 'truefalse') {
    return value === question.answer
  }

  if (question.type === 'multiple') {
    const given = Array.isArray(value) ? value : value ? [value] : []
    return (
      given.length === question.answer.length &&
      question.answer.every((answer) => given.includes(answer))
    )
  }

  if (question.type === 'fill') {
    return (question.answer || []).some((answer) => normalize(answer) === normalize(value))
  }

  if (question.type === 'match') {
    return question.pairs.every(
      (pair, index) => answers[`${question.id}-${index}`] === pair.answer
    )
  }

  return null
}

export function matchScore(question, answers) {
  return question.pairs.reduce(
    (total, pair, index) =>
      total + (answers[`${question.id}-${index}`] === pair.answer ? 1 : 0),
    0
  )
}

export function earnedFor(question, answers, selfScores) {
  if (question.type === 'single') {
    return answers[question.id] === question.answer ? maxMarks(question) : 0
  }

  if (question.type === 'multiple') {
    return answerIsCorrect(question, answers) ? maxMarks(question) : 0
  }

  if (question.type === 'fill') {
    const value = answers[question.id]
    const accepted = question.answer || []
    return accepted.some((answer) => normalize(answer) === normalize(value))
      ? maxMarks(question)
      : 0
  }

  if (question.type === 'match') {
    return Math.min(maxMarks(question), matchScore(question, answers))
  }

  if (question.type === 'truefalse') {
    const auto = answers[question.id] === question.answer ? (question.autoMarks ?? 1) : 0
    const self = Math.max(0, Math.min(selfMax(question), Number(selfScores[question.id]) || 0))
    return auto + self
  }

  if (question.type === 'short' || question.type === 'long') {
    return Math.max(0, Math.min(selfMax(question), Number(selfScores[question.id]) || 0))
  }

  return 0
}

export function autoMarksFor(question) {
  if (question.type === 'truefalse') {
    return question.autoMarks ?? 1
  }
  if (['single', 'multiple', 'fill', 'match'].includes(question.type)) {
    return maxMarks(question)
  }
  return 0
}

export function formatCorrectAnswer(question) {
  if (question.type === 'single') {
    const option = question.options.find((item) => item.value === question.answer)
    return option ? `${option.value}. ${option.text}` : question.answer
  }

  if (question.type === 'multiple') {
    return question.options
      .filter((option) => question.answer.includes(option.value))
      .map((option) => `${option.value}. ${option.text}`)
      .join('; ')
  }

  if (question.type === 'fill') {
    return (question.answer || []).join(' or ')
  }

  if (question.type === 'truefalse') {
    return question.answer
  }

  if (question.type === 'match') {
    return question.pairs.map((pair) => `${pair.left}: ${pair.answer}`).join('; ')
  }

  return question.modelAnswer || ''
}

export function scoreAssessment(questions, answers, selfScores) {
  let autoEarned = 0
  let autoTotal = 0
  let selfEarned = 0
  let selfTotal = 0
  const byOutcome = {}
  const weakIds = []

  for (const question of questions) {
    const earned = earnedFor(question, answers, selfScores)
    const total = maxMarks(question)
    const auto = autoMarksFor(question)
    const self = selfMax(question)

    autoTotal += auto
    selfTotal += self

    if (question.type === 'truefalse') {
      const autoEarnedHere =
        answers[question.id] === question.answer ? (question.autoMarks ?? 1) : 0
      autoEarned += autoEarnedHere
      selfEarned += Math.max(0, earned - autoEarnedHere)
    } else if (self > 0) {
      selfEarned += earned
    } else {
      autoEarned += earned
    }

    if (!byOutcome[question.outcome]) {
      byOutcome[question.outcome] = { earned: 0, total: 0 }
    }
    byOutcome[question.outcome].earned += earned
    byOutcome[question.outcome].total += total

    if (earned < total) {
      weakIds.push(question.id)
    }
  }

  const totalEarned = autoEarned + selfEarned
  const totalMarks = autoTotal + selfTotal

  return {
    autoEarned,
    autoTotal,
    selfEarned,
    selfTotal,
    totalEarned,
    totalMarks,
    percent: totalMarks ? Math.round((totalEarned / totalMarks) * 100) : 0,
    byOutcome,
    weakIds
  }
}
