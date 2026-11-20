# ICSE Class 10 Interactive Learning Skill

This skill guides an agent to create one complete ICSE Class 10 chapter at a time for Mathematics, Physics, Chemistry, and Biology.

## Package contents

1. `SKILL.md` contains the agent instructions, chapter workflow, subject playbooks, frontend standards, and definition of done.
2. `templates/chapter-brief.md` provides a repeatable planning template.
3. `templates/chapter-qa-checklist.md` provides the chapter quality gate.
4. `schemas/question.schema.json` defines the default structured question format.

## Use

Place the skill folder in the skills directory supported by your agent environment. The agent should load `SKILL.md` when creating or improving an ICSE Class 10 chapter. Keep the templates and schema alongside it so the agent can use them during chapter production.

The skill defaults to a Vue 3 + Vite application with npm. The deployable output is a static `dist/` folder configured for GitHub Pages or another static host. It requires official syllabus mapping, complete concept teaching, meaningful visuals, acrostic sentences rather than acronyms, worked examples, mixed-format assessment, source tracking, and quality assurance. Run `npm run build`, verify the built output through `npm run preview`, and run the Playwright suite where configured before claiming completion.
