import fs from 'node:fs'
import Ajv2020 from 'ajv/dist/2020.js'

const schema = JSON.parse(
  fs.readFileSync(
    '.agents/icse-class10-interactive-learning-skill/schemas/question.schema.json',
    'utf8'
  )
)
const questions = JSON.parse(fs.readFileSync('chapter-questions.json', 'utf8'))
const ajv = new Ajv2020({ allErrors: true, strict: false })
const validate = ajv.compile(schema)

let failures = 0
for (const question of questions) {
  if (!validate(question)) {
    failures += 1
    console.error(`Invalid: ${question.id}`)
    console.error(validate.errors)
  }
}

if (failures > 0) {
  console.error(`${failures} question(s) failed schema validation.`)
  process.exit(1)
}

console.log(`Validated ${questions.length} questions against the chapter question schema.`)
