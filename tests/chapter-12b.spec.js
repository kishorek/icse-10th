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
  await expect(lab).toContainText('72')
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
