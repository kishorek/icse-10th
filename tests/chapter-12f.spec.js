import { expect, test } from '@playwright/test'

const errors = []

test.beforeEach(async ({ page }) => {
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('requestfailed', (request) => errors.push(`Request failed: ${request.url()}`))
  await page.goto('/chapter-12f.html')
})

test.afterEach(() => {
  expect(errors, 'browser console and request errors').toEqual([])
  errors.length = 0
})

test('12F loads and the carboxylic acid family is complete', async ({ page }) => {
  await expect(page).toHaveTitle(/Chapter 12F/)
  await expect(page.getByRole('heading', { level: 1, name: 'Carboxylic Acids' })).toBeVisible()
  await expect(page.locator('#lesson-1')).toContainText('CₙH₂ₙ₊₁COOH')
  await expect(page.locator('#lesson-1')).toContainText('Ethanoic acid')
  await expect(page.locator('#f1-family-visual')).toContainText('Carboxylic acids')
})

test('12F acid sorter and ester builder work', async ({ page }) => {
  const sorter = page.locator('#acid-sorter')
  await sorter.getByRole('button', { name: 'Oxalic acid, HOOC–COOH' }).click()
  await sorter.getByRole('button', { name: 'Dicarboxylic' }).click()
  await expect(sorter).toContainText('Correct')

  const ester = page.locator('#ester-builder')
  await ester.locator('#ester-builder-acid').selectOption('ethanoic')
  await ester.locator('#ester-builder-alcohol').selectOption('ethanol')
  await expect(ester).toContainText('Ethyl ethanoate')
  await expect(ester).toContainText('CH₃COOC₂H₅')
})

test('12F reaction map and use sorter work', async ({ page }) => {
  const map = page.locator('#f3-reaction-visual')
  await map.getByRole('button', { name: 'Ethanol + conc. H₂SO₄' }).click()
  await expect(map).toContainText('Ethyl acetate')

  const sorter = page.locator('#acetic-use-sorter')
  await sorter.getByRole('button', { name: 'Vinegar preserves food.' }).click()
  await sorter.getByRole('button', { name: 'Acidic nature' }).click()
  await expect(sorter).toContainText('Correct')
})

test('12F assessment and persistence work', async ({ page }) => {
  page.on('dialog', (dialog) => dialog.accept())

  await expect(page.locator('#memory')).toContainText('Map the acid from group to use')
  await expect(page.locator('#revision')).toContainText('Common mistakes')

  await page.locator('#FQ7').fill('17')
  await page.locator('#FQ13').fill('ethyl acetate')
  await page.getByRole('button', { name: 'Submit assessment' }).click()
  await expect(page.locator('.score-big')).toContainText('2 / 36')

  await page.reload()
  await expect(page.locator('.score-big')).toContainText('2 / 36')
  await page.getByRole('button', { name: 'Reset answers' }).click()
  await expect(page.locator('.assessment-status')).toContainText('0 of 20 answered')
})
