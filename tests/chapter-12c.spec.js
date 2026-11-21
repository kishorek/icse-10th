import { expect, test } from '@playwright/test'

const errors = []

test.beforeEach(async ({ page }) => {
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('requestfailed', (request) => errors.push(`Request failed: ${request.url()}`))
  await page.goto('/chapter-12c.html')
})

test.afterEach(() => {
  expect(errors, 'browser console and request errors').toEqual([])
  errors.length = 0
})

test('12C loads and the alkene family is complete', async ({ page }) => {
  await expect(page).toHaveTitle(/Chapter 12C/)
  await expect(page.getByRole('heading', { level: 1, name: 'Hydrocarbons: Alkenes' })).toBeVisible()
  await expect(page.locator('#lesson-1')).toContainText('CₙH₂ₙ')
  await expect(page.locator('#lesson-1')).toContainText('But-1-ene')
  await expect(page.locator('#c1-family-visual')).toContainText('Alkenes')
  await expect(page.locator('#c2-structure-visual')).toContainText('120')
})

test('12C isomer lab separates chain and position isomerism', async ({ page }) => {
  const lab = page.locator('#alkene-isomers')
  await lab.getByRole('button', { name: 'But-2-ene' }).click()
  await expect(lab).toContainText('Position isomerism')
  await lab.getByRole('button', { name: '2-methylpropene' }).click()
  await expect(lab).toContainText('Chain isomerism')
  await expect(lab).toContainText('C₄H₈')
})

test('12C preparation lab shows dehydration and dehydrohalogenation', async ({ page }) => {
  const lab = page.locator('#ethene-prep')
  await lab.locator('#ethene-prep-route').selectOption('ethanol-acid')
  await expect(lab).toContainText('170°C')
  await expect(lab).toContainText('C₂H₄')
  await lab.locator('#ethene-prep-route').selectOption('bromoethane-koh')
  await expect(lab).toContainText('alcoholic KOH')
  await expect(lab).toContainText('KBr')
})

test('12C sorting labs give feedback', async ({ page }) => {
  const addition = page.locator('#addition-sorter')
  await addition.getByRole('button', { name: 'Ethene + H₂ over nickel gives ethane.' }).click()
  await addition.getByRole('button', { name: 'Addition', exact: true }).click()
  await expect(addition).toContainText('Correct')

  const observation = page.locator('#unsaturation-sorter')
  await observation.getByRole('button', { name: 'The orange-brown colour of bromine water disappears.' }).click()
  await observation.getByRole('button', { name: 'Observation', exact: true }).click()
  await expect(observation).toContainText('Correct')
})

test('12C animation controls work and reduced motion is respected', async ({ page }) => {
  const visual = page.locator('#c2-prep-visual')
  await visual.getByRole('button', { name: 'Play' }).click()
  await visual.getByRole('button', { name: 'Pause' }).click()
  await visual.getByRole('button', { name: 'Restart' }).click()
  await expect(visual.locator('.flow-step')).toHaveCount(3)

  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload()
  await expect(page.locator('#c2-prep-visual')).toContainText('reduced motion')
})

test('12C memory, revision and assessment persist', async ({ page }) => {
  page.on('dialog', (dialog) => dialog.accept())

  await expect(page.locator('#memory')).toContainText('Build the alkene reaction map')
  await expect(page.locator('#revision')).toContainText('Common mistakes')
  await page.locator('#flashcards .flashcard').click()
  await expect(page.locator('#flashcards')).toContainText('CₙH₂ₙ')

  await page.locator('#CQ5').fill('planar')
  await page.locator('#CQ13').fill('1,2-dibromoethane')
  await page.locator('#CQ18').fill('Add bromine water; ethene decolourises it.')
  await page.getByRole('button', { name: 'Submit assessment' }).click()
  await expect(page.locator('#assessment-summary')).toBeVisible()
  await expect(page.locator('.score-big')).toContainText('/ 37')

  await page.locator('#CQ18-self').selectOption('2')
  await expect(page.locator('.score-big')).toContainText('4 / 37')

  await page.reload()
  await expect(page.locator('.score-big')).toContainText('4 / 37')
  await page.getByRole('button', { name: 'Reset answers' }).click()
  await expect(page.locator('.assessment-status')).toContainText('0 of 20 answered')
})
