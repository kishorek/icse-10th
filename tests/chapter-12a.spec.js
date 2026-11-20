import { expect, test } from '@playwright/test'

const errors = []

test.beforeEach(async ({ page }) => {
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('requestfailed', (request) => errors.push(`Request failed: ${request.url()}`))
  await page.goto('/chapter-12a.html')
})

test.afterEach(() => {
  expect(errors, 'browser console and request errors').toEqual([])
  errors.length = 0
})

test('12A lessons 1 and 2 load with scope and sources', async ({ page }) => {
  await expect(page).toHaveTitle(/Chapter 12A/)
  await expect(page.getByRole('heading', { level: 1, name: 'Organic Compounds' })).toBeVisible()
  await expect(page.locator('#lesson-1')).toContainText('vital-force')
  await expect(page.locator('#lesson-1')).toContainText('Wöhler')
  await expect(page.locator('#lesson-2')).toContainText('CₙH₂ₙ₊₂')
  await expect(page.locator('#sources')).toContainText('original practice questions')
})

test('12A lessons 1 and 2 quick checks mark the lessons complete', async ({ page }) => {
  for (const [id, value] of [
    ['a1-q1', 'C'],
    ['a1-q2', 'B'],
    ['a1-q3', 'D'],
    ['a2-q1', 'B'],
    ['a2-q2', 'C'],
    ['a2-q3', 'A']
  ]) {
    await page.locator(`input[name="${id}"][value="${value}"]`).check()
  }

  await expect(page.locator('#progress-label')).toContainText('2 of 2 milestones')
  await expect(page.locator('#lesson-1 .lesson-status')).toHaveText('Complete')
  await expect(page.locator('#lesson-2 .lesson-status')).toHaveText('Complete')
})
