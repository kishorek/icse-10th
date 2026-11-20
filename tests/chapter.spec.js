import { expect, test } from '@playwright/test'

const errors = []

test.beforeEach(async ({ page }) => {
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('requestfailed', (request) => errors.push(`Request failed: ${request.url()}`))
  await page.goto('/')
})

test.afterEach(() => {
  expect(errors, 'browser console and request errors').toEqual([])
  errors.length = 0
})

test('loads, exposes landmarks, and supports skip navigation', async ({ page }) => {
  await expect(page).toHaveTitle(/Organic Chemistry Chapter 1/)
  await expect(page.getByRole('heading', { level: 1, name: 'Organic Chemistry' })).toBeVisible()
  await expect(page.locator('#progress-label')).toContainText('0 of 6 milestones')
  await expect(page.getByRole('navigation', { name: 'Chapter sections' })).toBeVisible()
  await expect(page.getByRole('main')).toBeVisible()

  await page.keyboard.press('Tab')
  await expect(page.locator('.skip-link')).toBeFocused()

  const internalLinks = await page.locator('a[href^="#"]').evaluateAll((links) =>
    links.map((link) => link.getAttribute('href'))
  )
  for (const href of internalLinks) {
    await expect(page.locator(href), `target for ${href}`).toHaveCount(1)
  }
})

test('quick checks complete lessons and update progress', async ({ page }) => {
  const answers = [
    ['l1-q1', 'B'],
    ['l1-q2', 'A'],
    ['l1-q3', 'C'],
    ['l2-q1', 'B'],
    ['l2-q2', 'B'],
    ['l2-q3', 'B'],
    ['l3-q1', 'B'],
    ['l3-q2', 'B'],
    ['l3-q3', 'B'],
    ['l4-q1', 'B'],
    ['l4-q2', 'A'],
    ['l4-q3', 'B'],
    ['l5-q1', 'A'],
    ['l5-q2', 'A'],
    ['l5-q3', 'A']
  ]

  for (const [id, value] of answers) {
    const input = page.locator(`input[name="${id}"][value="${value}"]`)
    await input.check()
    await expect(page.locator(`input[name="${id}"][value="${value}"]`)).toBeChecked()
  }

  await expect(page.locator('#progress-label')).toContainText('5 of 6 milestones')
  await expect(page.locator('#lesson-1 .lesson-status')).toHaveText('Complete')
  await expect(page.locator('#lesson-5 .lesson-status')).toHaveText('Complete')
})

test('carbon labs, sorter, explorer and flashcards work', async ({ page }) => {
  const bondLab = page.locator('#bond-lab')
  await bondLab.getByRole('button', { name: /Ethene/ }).click()
  await expect(bondLab).toContainText('C₂H₄')
  await bondLab.getByRole('button', { name: /Ethyne/ }).click()
  await expect(bondLab).toContainText('C≡C triple bond')

  const chainLab = page.locator('#chain-lab')
  await chainLab.locator('#chain-count').fill('6')
  await expect(chainLab).toContainText('6 carbon atoms in a straight chain')
  await chainLab.getByRole('button', { name: 'Ring' }).click()
  await expect(chainLab).toContainText('6 carbon atoms in a closed ring')

  const sorter = page.locator('#organic-sorter')
  await sorter.getByRole('button', { name: 'Carbon dioxide', exact: true }).click()
  await sorter.locator('[data-bin="organic"] .bin-target').click()
  await expect(sorter).toContainText('Not quite')
  await sorter.locator('[data-bin="inorganic"] .bin-target').click()
  await expect(sorter).toContainText('Correct. Carbon dioxide')
  await sorter.getByRole('button', { name: 'Glucose', exact: true }).click()
  await sorter.locator('[data-bin="organic"] .bin-target').click()
  await expect(sorter).toContainText('Correct. Glucose is a carbohydrate')

  const explorer = page.locator('#everyday-explorer')
  await explorer.getByRole('button', { name: /Cotton shirt/ }).click()
  await expect(explorer).toContainText('Cellulose')

  const flashcards = page.locator('#flashcards')
  await flashcards.locator('.flashcard').click()
  await expect(flashcards).toContainText('Organic chemistry is the study of carbon compounds')
  await flashcards.getByRole('button', { name: 'Next' }).click()
  await expect(flashcards).toContainText('What is tetravalency?')
})

test('assessment submits, self-marks, and resets', async ({ page }) => {
  page.on('dialog', (dialog) => dialog.accept())

  await page.locator('#Q11').fill('Carbon forms four C–H single covalent bonds; the shape is tetrahedral.')
  await page.getByRole('button', { name: 'Submit assessment' }).click()
  await expect(page.locator('#assessment-summary')).toBeVisible()
  await expect(page.getByText('Your result')).toBeVisible()
  await expect(page.locator('.score-big')).toContainText('/ 39')

  await expect(page.locator('#Q11-self')).toBeEnabled()
  await expect(page.locator('#Q12-self')).toBeDisabled()
  await page.locator('#Q11-self').selectOption('2')
  await expect(page.locator('.score-big')).toContainText('2 / 39')

  await expect(page.locator('.nav-link[href="#assessment"]')).toHaveAttribute(
    'aria-current',
    'true'
  )

  await page.reload()
  await expect(page.locator('#assessment-summary')).toBeVisible()
  await expect(page.locator('.score-big')).toContainText('2 / 39')

  await page.getByRole('button', { name: 'Reset answers' }).click()
  await expect(page.locator('.assessment-status')).toContainText('0 of 24 answered')
  await expect(page.locator('#assessment-summary')).toHaveCount(0)
})

test('desktop layout has no page-level horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 })
  await page.reload()
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth
  )
  expect(overflow).toBeLessThanOrEqual(1)
  await page.screenshot({ path: 'qa/desktop-top.png' })
})

test('mobile and tablet layouts reflow without page-level horizontal overflow', async ({ page }) => {
  for (const [width, height] of [
    [360, 800],
    [390, 844],
    [768, 1024]
  ]) {
    await page.setViewportSize({ width, height })
    await page.reload()
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    )
    expect(overflow, `horizontal overflow at ${width}px`).toBeLessThanOrEqual(1)
    await expect(page.getByRole('navigation', { name: 'Chapter sections' })).toBeVisible()
  }
  await page.setViewportSize({ width: 360, height: 800 })
  await page.reload()
  await page.screenshot({ path: 'qa/mobile-360-top.png' })
})

test('lesson progress persists across reload and reset', async ({ page }) => {
  page.on('dialog', (dialog) => dialog.accept())

  for (const [id, value] of [
    ['l1-q1', 'B'],
    ['l1-q2', 'A'],
    ['l1-q3', 'C']
  ]) {
    await page.locator(`input[name="${id}"][value="${value}"]`).check()
  }

  await expect(page.locator('#progress-label')).toContainText('1 of 6 milestones')
  await expect(page.locator('#lesson-1 .lesson-status')).toHaveText('Complete')

  const storageKey = await page.evaluate(() =>
    Object.keys(localStorage).find((key) => key.startsWith('icse10.organic1.'))
  )
  expect(storageKey).toBeTruthy()

  await page.reload()
  await expect(page.locator('#progress-label')).toContainText('1 of 6 milestones')
  await expect(page.locator('#lesson-1 .lesson-status')).toHaveText('Complete')

  await page.getByRole('button', { name: 'Reset progress' }).click()
  await page.waitForLoadState('domcontentloaded')
  await expect(page.locator('#progress-label')).toContainText('0 of 6 milestones')
})
