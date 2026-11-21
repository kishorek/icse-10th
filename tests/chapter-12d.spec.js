import { expect, test } from '@playwright/test'

const errors = []

test.beforeEach(async ({ page }) => {
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('requestfailed', (request) => errors.push(`Request failed: ${request.url()}`))
  await page.goto('/chapter-12d.html')
})

test.afterEach(() => {
  expect(errors, 'browser console and request errors').toEqual([])
  errors.length = 0
})

test('12D loads and the alkyne family is complete', async ({ page }) => {
  await expect(page).toHaveTitle(/Chapter 12D/)
  await expect(page.getByRole('heading', { level: 1, name: 'Hydrocarbons: Alkynes' })).toBeVisible()
  await expect(page.locator('#lesson-1')).toContainText('CₙH₂ₙ₋₂')
  await expect(page.locator('#lesson-1')).toContainText('but-2-yne')
  await expect(page.locator('#d1-family-visual')).toContainText('Alkynes')
  await expect(page.locator('#d2-structure-visual')).toContainText('linear')
})

test('12D isomer and preparation labs work', async ({ page }) => {
  const isomers = page.locator('#alkyne-isomers')
  await isomers.getByRole('button', { name: 'But-2-yne' }).click()
  await expect(isomers).toContainText('Position isomerism')

  const prep = page.locator('#ethyne-prep')
  await prep.locator('#ethyne-prep-route').selectOption('carbide')
  await expect(prep).toContainText('CaC₂')
  await expect(prep).toContainText('C₂H₂')
  await prep.locator('#ethyne-prep-route').selectOption('dibromoethane')
  await expect(prep).toContainText('C₂H₄Br₂')
})

test('12D identification bench distinguishes ethyne', async ({ page }) => {
  const lab = page.locator('#hydrocarbon-tests')
  await lab.locator('#hydrocarbon-tests-sample').selectOption('ethyne')
  await lab.locator('#hydrocarbon-tests-test').selectOption('cuprous')
  await expect(lab).toContainText('Red precipitate')
  await expect(lab).toContainText('terminal alkyne')

  await lab.locator('#hydrocarbon-tests-sample').selectOption('ethene')
  await lab.locator('#hydrocarbon-tests-test').selectOption('cuprous')
  await expect(lab).toContainText('No change')
})

test('12D addition animation and sorter work', async ({ page }) => {
  const visual = page.locator('#d3-addition-visual')
  await visual.getByRole('button', { name: 'Play' }).click()
  await visual.getByRole('button', { name: 'Pause' }).click()

  const sorter = page.locator('#ethyne-addition-sorter')
  await sorter.getByRole('button', { name: 'C₂H₂Br₄ from ethyne + excess Br₂' }).click()
  await sorter.getByRole('button', { name: 'Two pairs added' }).click()
  await expect(sorter).toContainText('Correct')
})

test('12D assessment and persistence work', async ({ page }) => {
  page.on('dialog', (dialog) => dialog.accept())

  await expect(page.locator('#memory')).toContainText('Trace the alkyne reaction map')
  await expect(page.locator('#revision')).toContainText('Common mistakes')

  await page.locator('#DQ5').fill('linear')
  await page.locator('#DQ7').fill('C₂H₂')
  await page.getByRole('button', { name: 'Submit assessment' }).click()
  await expect(page.locator('.score-big')).toContainText('2 / 37')

  await page.reload()
  await expect(page.locator('.score-big')).toContainText('2 / 37')
  await page.getByRole('button', { name: 'Reset answers' }).click()
  await expect(page.locator('.assessment-status')).toContainText('0 of 20 answered')
})
