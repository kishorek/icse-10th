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
