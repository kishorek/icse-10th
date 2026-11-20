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

test('12A lessons 1 to 6 quick checks mark the lessons complete', async ({ page }) => {
  for (const [id, value] of [
    ['a1-q1', 'C'],
    ['a1-q2', 'B'],
    ['a1-q3', 'D'],
    ['a2-q1', 'B'],
    ['a2-q2', 'C'],
    ['a2-q3', 'A'],
    ['a3-q1', 'B'],
    ['a3-q2', 'C'],
    ['a3-q3', 'A'],
    ['a4-q1', 'B'],
    ['a4-q2', 'C'],
    ['a4-q3', 'A'],
    ['a5-q1', 'C'],
    ['a5-q2', 'B'],
    ['a5-q3', 'D'],
    ['a6-q1', 'B'],
    ['a6-q2', 'C'],
    ['a6-q3', 'D']
  ]) {
    await page.locator(`input[name="${id}"][value="${value}"]`).check()
  }

  await expect(page.locator('#progress-label')).toContainText('6 of 6 milestones')
  await expect(page.locator('#lesson-1 .lesson-status')).toHaveText('Complete')
  await expect(page.locator('#lesson-2 .lesson-status')).toHaveText('Complete')
  await expect(page.locator('#lesson-3 .lesson-status')).toHaveText('Complete')
  await expect(page.locator('#lesson-4 .lesson-status')).toHaveText('Complete')
  await expect(page.locator('#lesson-5 .lesson-status')).toHaveText('Complete')
  await expect(page.locator('#lesson-6 .lesson-status')).toHaveText('Complete')
})

test('functional group lab identifies families and suffixes', async ({ page }) => {
  const lab = page.locator('#functional-group-lab')
  await lab.getByRole('button', { name: /Ethanol/ }).click()
  await expect(lab).toContainText('Alcohol')
  await expect(lab).toContainText('–OH')
  await expect(lab).toContainText('-ol')
})

test('homologous ladder updates formula and molar mass', async ({ page }) => {
  const lab = page.locator('#homologous-ladder')
  await lab.locator('#homologous-n').fill('4')
  await expect(lab).toContainText('C4H10')
  await expect(lab).toContainText('58')
  await lab.getByRole('button', { name: 'Alkenes' }).click()
  await lab.locator('#homologous-n').fill('3')
  await expect(lab).toContainText('C3H6')
  await expect(lab).toContainText('42')
})

test('name builder assembles a correct IUPAC name', async ({ page }) => {
  const lab = page.locator('#name-builder')
  await lab.locator('#builder-example').selectOption('propan-2-ol')
  await lab.locator('#builder-root').selectOption('prop')
  await lab.locator('#builder-suffix').selectOption('ol')
  await lab.locator('#builder-locant').selectOption('2')
  await lab.getByRole('button', { name: 'Check name' }).click()
  await expect(lab).toContainText('propan-2-ol')
  await expect(lab).toContainText('Correct')
})

test('isomer explorer shows chain and functional isomers', async ({ page }) => {
  const lab = page.locator('#isomer-explorer')
  await lab.locator('#isomer-formula').selectOption('c4h10')
  await expect(lab).toContainText('Butane')
  await expect(lab).toContainText('2-Methylpropane')
  await expect(lab).toContainText('Chain isomerism')
  await lab.locator('#isomer-formula').selectOption('c2h6o')
  await expect(lab).toContainText('Ethanol')
  await expect(lab).toContainText('Methoxymethane')
  await expect(lab).toContainText('Functional isomerism')
})

test('12A memory and revision sections work', async ({ page }) => {
  await expect(page.locator('#memory')).toContainText('name-building routine')
  await expect(page.locator('#revision')).toContainText('Common mistakes')
  const flashcards = page.locator('#flashcards')
  await flashcards.locator('.flashcard').click()
  await expect(flashcards).toContainText('carbon compound')
})

test('12A layouts reflow without page-level horizontal overflow', async ({ page }) => {
  for (const [width, height] of [
    [360, 800],
    [768, 1024],
    [1280, 900]
  ]) {
    await page.setViewportSize({ width, height })
    await page.reload()
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    )
    expect(overflow, `horizontal overflow at ${width}px`).toBeLessThanOrEqual(1)
  }
})
