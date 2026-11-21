import { expect, test } from '@playwright/test'

const errors = []

test.beforeEach(async ({ page }) => {
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('requestfailed', (request) => errors.push(`Request failed: ${request.url()}`))
  await page.goto('/chapter-physics-1.html')
})

test.afterEach(() => {
  expect(errors, 'browser console and request errors').toEqual([])
  errors.length = 0
})

async function setRange(locator, value) {
  await locator.evaluate((element, next) => {
    element.value = String(next)
    element.dispatchEvent(new Event('input', { bubbles: true }))
    element.dispatchEvent(new Event('change', { bubbles: true }))
  }, value)
}

test('physics chapter loads with the five approved lessons', async ({ page }) => {
  await expect(page).toHaveTitle(/Force Chapter 1/)
  await expect(page.getByRole('heading', { level: 1, name: 'Force' })).toBeVisible()
  await expect(page.locator('#lesson-1')).toContainText('Moment = force × perpendicular distance')
  await expect(page.locator('#lesson-2')).toContainText('Two equal and opposite parallel forces')
  await expect(page.locator('#lesson-3')).toContainText('sum of the anticlockwise moments')
  await expect(page.locator('#lesson-4')).toContainText('centre of gravity')
  await expect(page.locator('#lesson-5')).toContainText('Centrifugal force')
  await expect(page.locator('#p1-arm-visual')).toContainText('perpendicular distance')
  await expect(page.locator('#p5-velocity-visual')).toContainText('speed stays the same')
})

test('moment bench recalculates the moment from force and distance', async ({ page }) => {
  const bench = page.locator('#p1-moment-visual')
  await expect(bench).toContainText('Moment = 12.0 N m anticlockwise')

  await setRange(bench.locator('input[aria-label="Force in newtons"]'), 40)
  await expect(bench).toContainText('Moment = 24.0 N m anticlockwise')

  await setRange(bench.locator('input[aria-label="Angle of push in degrees"]'), 30)
  await expect(bench).toContainText('Moment = 12.0 N m anticlockwise')

  await bench.getByRole('button', { name: 'Push up (anticlockwise)' }).click()
  await expect(bench).toContainText('clockwise')
})

test('couple and equilibrium simulations respond to controls', async ({ page }) => {
  const couple = page.locator('#p2-couple-visual')
  await couple.getByRole('button', { name: 'Play' }).click()
  await couple.getByRole('button', { name: 'Pause' }).click()
  await couple.getByRole('button', { name: 'Restart' }).click()
  await couple.getByRole('button', { name: 'Show bar' }).click()
  await expect(couple).toContainText('Bar pivoted at its centre')

  const equilibrium = page.locator('#p2-equilibrium-visual')
  await equilibrium.getByRole('button', { name: 'Couple', exact: true }).click()
  await expect(equilibrium).toContainText('spins about its centre')
  await equilibrium.getByRole('button', { name: 'Equal forces, same line', exact: true }).click()
  await expect(equilibrium).toContainText('stays at rest')
})

test('metre rule lab balances and unbalances as the weights move', async ({ page }) => {
  const rule = page.locator('#p3-rule-visual')
  await expect(rule).toContainText('Balanced: clockwise moment = anticlockwise moment.')

  await setRange(rule.locator('input[aria-label="Left mass in gram-force"]'), 80)
  await expect(rule).toContainText('Not balanced')

  await rule.getByRole('button', { name: 'Reset' }).click()
  await expect(rule).toContainText('Balanced: clockwise moment = anticlockwise moment.')

  const seesaw = page.locator('#p3-seesaw-visual')
  await seesaw.getByRole('button', { name: 'Next step' }).click()
  await expect(seesaw).toContainText('60 + 125 = 185')
  await seesaw.getByRole('button', { name: 'Next step' }).click()
  await seesaw.getByRole('button', { name: 'Next step' }).click()
  await expect(seesaw).toContainText('2.5 m')
})

test('centre of gravity and plumb-line visuals work', async ({ page }) => {
  const cg = page.locator('#p4-shapes-visual')
  await cg.getByRole('button', { name: 'Circular ring' }).click()
  await expect(cg).toContainText('outside the material')
  await cg.getByRole('button', { name: 'Triangular lamina' }).click()
  await expect(cg).toContainText('medians')

  const plumb = page.locator('#p4-plumb-visual')
  await plumb.getByRole('button', { name: 'Play' }).click()
  await plumb.getByRole('button', { name: 'Pause' }).click()
  await plumb.getByRole('button', { name: 'Restart' }).click()
  await expect(plumb).toContainText('three marked lines meet at G')
})

test('circular motion visuals show tangent velocity, removal of force and frames', async ({ page }) => {
  const velocity = page.locator('#p5-velocity-visual')
  await expect(velocity).toContainText('speed = 5.0 m/s (constant)')
  await velocity.getByRole('button', { name: 'Pause' }).click()
  await velocity.getByRole('button', { name: 'Play' }).click()

  const centripetal = page.locator('#p5-centripetal-visual')
  await centripetal.getByRole('button', { name: 'Cut the string' }).click()
  await expect(centripetal).toContainText('leaves along the tangent')
  await centripetal.getByRole('button', { name: 'Reset' }).click()
  await expect(centripetal).toContainText('points to the centre')

  const frames = page.locator('#p5-frames-visual')
  await frames.getByRole('button', { name: 'Observer on the platform' }).click()
  await expect(frames).toContainText('invents an outward centrifugal force')
  await frames.getByRole('button', { name: 'Observer on the ground' }).click()
  await expect(frames).toContainText('travels in a circle')
})

test('reduced motion renders the final animation state', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload()
  const arm = page.locator('#p1-arm-visual')
  await expect(arm).toContainText('reduced motion')
  await expect(arm).toContainText('Slanted push')
})

test('memory, revision, assessment and progress persist', async ({ page }) => {
  page.on('dialog', (dialog) => dialog.accept())

  await expect(page.locator('#memory')).toContainText('Build the turning-effect and balance map')
  await expect(page.locator('#revision')).toContainText('Common mistakes')
  await page.locator('#flashcards .flashcard').first().click()
  await expect(page.locator('#flashcards')).toContainText('perpendicular distance')

  await page.locator('#PQ11').fill('2')
  await page.locator('#PQ3').fill('3')
  await page.getByRole('button', { name: 'Submit assessment' }).click()
  await expect(page.locator('#assessment-summary')).toBeVisible()
  await expect(page.locator('#progress-label')).toContainText('of 6 milestones')

  await page.reload()
  await expect(page.locator('#PQ11')).toHaveValue('2')
  await expect(page.locator('#assessment-summary')).toBeVisible()
})
