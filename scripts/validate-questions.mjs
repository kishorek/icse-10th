import fs from 'node:fs'
import Ajv2020 from 'ajv/dist/2020.js'

const schema = JSON.parse(
  fs.readFileSync(
    '.agents/icse-class10-interactive-learning-skill/schemas/question.schema.json',
    'utf8'
  )
)
const files = [
  'exports/chapter-1-questions.json',
  'exports/chapter-12a-questions.json',
  'exports/chapter-12b-questions.json'
]

const ajv = new Ajv2020({ allErrors: true, strict: false })
const validate = ajv.compile(schema)

let failures = 0

for (const file of files) {
  if (!fs.existsSync(file)) {
    failures += 1
    console.error(`Missing export: ${file}`)
    continue
  }

  let questions
  try {
    questions = JSON.parse(fs.readFileSync(file, 'utf8'))
  } catch (error) {
    failures += 1
    console.error(`Unreadable export: ${file} (${error.message})`)
    continue
  }

  let fileFailures = 0
  for (const question of questions) {
    if (!validate(question)) {
      fileFailures += 1
      console.error(`Invalid: ${file} → ${question.id}`)
      console.error(validate.errors)
    }
  }

  if (fileFailures > 0) {
    failures += fileFailures
    console.error(`${fileFailures} question(s) failed schema validation in ${file}.`)
  } else {
    console.log(`Validated ${questions.length} questions in ${file}.`)
  }
}

if (failures > 0) {
  console.error(`${failures} question(s) or file(s) failed schema validation.`)
  process.exit(1)
}

console.log(`Validated all ${files.length} chapter question exports.`)
