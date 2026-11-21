import { expect, test } from '@playwright/test'

const errors = []

test.beforeEach(async ({ page }) => {
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('requestfailed', (request) => errors.push(`Request failed: ${request.url()}`))
  await page.goto('/chapter-12e.html')
})

test.afterEach(() => {
  expect(errors, 'browser console and request errors').toEqual([])
  errors.length = 0
})

test('12E loads and the alcohol family is complete', async ({ page }) => {
  await expect(page).toHaveTitle(/Chapter 12E/)
  await expect(page.getByRole('heading', { level: 1, name: 'Alcohols' })).toBeVisible()
  await expect(page.locator('#lesson-1')).toContainText('CₙH₂ₙ₊₁OH')
  await expect(page.locator('#lesson-1')).toContainText('Glycerol')
  await expect(page.locator('#e1-family-visual')).toContainText('Alcohols')
})

test('12E hydroxyl and preparation labs work', async ({ page }) => {
  const sorter = page.locator('#hydroxyl-sorter')
  await sorter.getByRole('button', { name: 'Glycerol, C₃H₅(OH)₃' }).click()
  await sorter.getByRole('button', { name: 'Trihydric' }).click()
  await expect(sorter).toContainText('Correct')

  const prep = page.locator('#ethanol-prep')
  await prep.locator('#ethanol-prep-route').selectOption('hydrolysis')
  await expect(prep).toContainText('C₂H₅Br')
  await expect(prep).toContainText('C₂H₅OH')
})

test('12E property trend and reaction sorter work', async ({ page }) => {
  const trend = page.locator('#e3-trend-visual')
  await trend.getByRole('button', { name: 'Ethanol', exact: true }).click()
  await expect(trend).toContainText('78.3')

  const reaction = page.locator('#ethanol-reaction-sorter')
  await reaction.getByRole('button', { name: 'Ethanol + conc. H₂SO₄ at 170°C' }).click()
  await reaction.getByRole('button', { name: 'Ethene', exact: true }).click()
  await expect(reaction).toContainText('Correct')
})

test('12E safety comparison and risk sorter work', async ({ page }) => {
  const comparison = page.locator('#e5-comparison-visual')
  await comparison.getByRole('button', { name: 'Spurious' }).click()
  await expect(comparison).toContainText('methanol')

  const sorter = page.locator('#alcohol-risk-sorter')
  await sorter.getByRole('button', { name: 'Drinking illegally distilled liquor of unknown composition.' }).click()
  await sorter.getByRole('button', { name: 'Serious risk' }).click()
  await expect(sorter).toContainText('Correct')
})

test('12E assessment and persistence work', async ({ page }) => {
  page.on('dialog', (dialog) => dialog.accept())

  await expect(page.locator('#memory')).toContainText('Map ethanol from source to use')
  await expect(page.locator('#revision')).toContainText('Common mistakes')

  await page.locator('#EQ9').fill('3H₂O')
  await page.locator('#EQ15').fill('ethoxide')
  await page.getByRole('button', { name: 'Submit assessment' }).click()
  await expect(page.locator('.score-big')).toContainText('2 / 33')

  await page.reload()
  await expect(page.locator('.score-big')).toContainText('2 / 33')
  await page.getByRole('button', { name: 'Reset answers' }).click()
  await expect(page.locator('.assessment-status')).toContainText('0 of 20 answered')
})
