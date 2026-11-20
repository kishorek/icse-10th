import { expect, test } from '@playwright/test'

const errors = []

test.beforeEach(async ({ page }) => {
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('requestfailed', (request) => errors.push(`Request failed: ${request.url()}`))
  await page.goto('/chapter-12b.html')
})

test.afterEach(() => {
  expect(errors, 'browser console and request errors').toEqual([])
  errors.length = 0
})

test('12B lesson 1 loads and the alkane ladder works', async ({ page }) => {
  await expect(page).toHaveTitle(/Chapter 12B/)
  await expect(page.getByRole('heading', { level: 1, name: 'Hydrocarbons: Alkanes' })).toBeVisible()
  await expect(page.locator('#lesson-1')).toContainText('CₙH₂ₙ₊₂')
  await expect(page.locator('#lesson-1')).toContainText('2-methylpropane')

  const lab = page.locator('#alkane-ladder')
  await lab.locator('#alkane-n').fill('5')
  await expect(lab).toContainText('C5H12')
  await expect(lab).toContainText('72 g/mol')
  await expect(lab).toContainText('3')
})

test('gas preparation lab shows the methane route and Wurtz limitation', async ({ page }) => {
  const lab = page.locator('#gas-prep')
  await lab.locator('#gas-route').selectOption('methane-acetate')
  await expect(lab).toContainText('Sodium ethanoate')
  await expect(lab).toContainText('CaO')
  await expect(lab).toContainText('CH₄')
  await expect(lab).toContainText('Na₂CO₃')

  await lab.locator('#gas-route').selectOption('wurtz')
  await expect(lab).toContainText('dry ether')
  await expect(lab).toContainText('even number')
})

test('chlorination lab steps from methane to tetrachloromethane', async ({ page }) => {
  const lab = page.locator('#chlorination')
  await expect(lab).toContainText('CH3Cl')
  await lab.locator('#chlorination-next').click()
  await expect(lab).toContainText('CH2Cl2')
  await lab.locator('#chlorination-next').click()
  await expect(lab).toContainText('CHCl3')
  await lab.locator('#chlorination-next').click()
  await expect(lab).toContainText('CCl4')
  await expect(lab).toContainText('HCl')
})

test('combustion lab switches between complete and incomplete products', async ({ page }) => {
  const lab = page.locator('#combustion')
  await lab.locator('#combustion-mode').selectOption('complete')
  await expect(lab).toContainText('CO₂')
  await lab.locator('#combustion-mode').selectOption('incomplete')
  await expect(lab).toContainText('CO')
  await lab.locator('#combustion-mode').selectOption('limited')
  await expect(lab).toContainText('soot')
})

test('12B memory and revision sections work', async ({ page }) => {
  await expect(page.locator('#memory')).toContainText('reaction map')
  await expect(page.locator('#revision')).toContainText('Common mistakes')
  const flashcards = page.locator('#flashcards')
  await flashcards.locator('.flashcard').click()
  await expect(flashcards).toContainText('CₙH₂ₙ₊₂')
})

test('12B fill answers require the safe reaction conditions', async ({ page }) => {
  page.on('dialog', (dialog) => dialog.accept())

  await page.locator('#BQ11').fill('ether')
  await page.locator('#BQ12').fill('sunlight')
  await page.getByRole('button', { name: 'Submit assessment' }).click()

  const q11 = page.locator('#q-BQ11')
  await expect(q11.locator('.feedback-status')).toHaveText('Not correct.')
  await expect(q11).toContainText(
    'Correct answer: dry ether or dry diethyl ether or anhydrous ether'
  )

  const q12 = page.locator('#q-BQ12')
  await expect(q12.locator('.feedback-status')).toHaveText('Not correct.')
  await expect(q12).toContainText('Correct answer: diffused sunlight or ultraviolet light')
  await expect(q12).toContainText('ultraviolet radiation')
})

test('12B assessment submits, self-marks, persists and resets', async ({ page }) => {
  page.on('dialog', (dialog) => dialog.accept())

  await page.locator('#BQ18').fill('Methane is prepared by heating sodium ethanoate with soda lime.')
  await page.getByRole('button', { name: 'Submit assessment' }).click()
  await expect(page.locator('#assessment-summary')).toBeVisible()
  await expect(page.locator('.score-big')).toContainText('/ 34')

  await page.locator('#BQ18-self').selectOption('3')
  await expect(page.locator('.score-big')).toContainText('3 / 34')

  await page.reload()
  await expect(page.locator('.score-big')).toContainText('3 / 34')

  await page.getByRole('button', { name: 'Reset answers' }).click()
  await expect(page.locator('.assessment-status')).toContainText('0 of 20 answered')
  await expect(page.locator('#assessment-summary')).toHaveCount(0)
})
