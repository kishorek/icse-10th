import { expect, test } from '@playwright/test'

const errors = []

test.beforeEach(async ({ page }) => {
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('requestfailed', (request) => errors.push(`Request failed: ${request.url()}`))
  await page.goto('/chapter-physics-2.html')
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

test('physics 2 chapter loads with seven approved lessons and all visuals', async ({ page }) => {
  await expect(page).toHaveTitle(/Work, Energy and Power Chapter 2/)
  await expect(page.getByRole('heading', { level: 1, name: 'Work, Energy and Power' })).toBeVisible()
  await expect(page.locator('#lesson-1')).toContainText('W = F s cos θ')
  await expect(page.locator('#lesson-2')).toContainText('W = m g h')
  await expect(page.locator('#lesson-3')).toContainText('P = W / t')
  await expect(page.locator('#lesson-4')).toContainText('kilowatt-hour')
  await expect(page.locator('#lesson-5')).toContainText('K = ½ m v²')
  await expect(page.locator('#lesson-6')).toContainText('Dissipation')
  await expect(page.locator('#lesson-7')).toContainText('U + K = constant')

  const ids = [
    'wep-work-bench', 'wep-angle-resolve', 'wep-zero-work', 'wep-force-graph',
    'wep-gravity-paths', 'wep-unit-ladder', 'wep-power-race', 'wep-power-force-speed',
    'wep-work-vs-power', 'wep-energy-scale', 'wep-kwh-meter', 'wep-energy-vs-power',
    'wep-pe-ke-ramp', 'wep-ke-speed', 'wep-work-energy', 'wep-ke-forms',
    'wep-conversion-chain', 'wep-dissipation', 'wep-freefall', 'wep-pendulum',
    'wep-energy-graph', 'wep-friction-loss'
  ]
  for (const id of ids) {
    await expect(page.locator(`#${id}`), `visual ${id}`).toBeVisible()
  }
  await expect(page.locator('aside.memory-hook')).toHaveCount(7)
})

test('work bench calculates positive, zero and negative work', async ({ page }) => {
  const bench = page.locator('#wep-work-bench')
  await expect(bench).toContainText('Work = 100.0 J (positive)')

  await setRange(bench.locator('input[aria-label="Force in newtons"]'), 100)
  await setRange(bench.locator('input[aria-label="Displacement in metres"]'), 5)
  await setRange(bench.locator('input[aria-label="Angle between force and displacement in degrees"]'), 60)
  await expect(bench).toContainText('Work = 250.0 J (positive)')

  await setRange(bench.locator('input[aria-label="Angle between force and displacement in degrees"]'), 90)
  await expect(bench).toContainText('Work = 0.0 J (zero)')

  await setRange(bench.locator('input[aria-label="Angle between force and displacement in degrees"]'), 180)
  await expect(bench).toContainText('Work = -500.0 J (negative)')
})

test('angle visual resolves the component and supports playback controls', async ({ page }) => {
  const visual = page.locator('#wep-angle-resolve')
  await expect(visual).toContainText('At 90°')
  await visual.getByRole('button', { name: 'Play' }).click()
  await visual.getByRole('button', { name: 'Pause' }).click()
  await visual.getByRole('button', { name: 'Restart' }).click()
  await visual.getByRole('button', { name: 'Set 60°' }).click()
  await expect(visual).toContainText('the along-displacement component is 25.0 N')
})

test('zero work comparison gives reasons for all three cases', async ({ page }) => {
  const visual = page.locator('#wep-zero-work')
  await expect(visual).toContainText('wall does not move')
  await visual.getByRole('button', { name: 'Carrying a load level' }).click()
  await expect(visual).toContainText('force is vertical')
  await visual.getByRole('button', { name: 'Circular orbit' }).click()
  await expect(visual).toContainText('Gravity is perpendicular to the velocity')
  await visual.getByRole('radio', { name: 'Zero', exact: true }).check()
  await expect(visual).toContainText('Correct. In all three cases')
})

test('gravity paths stay equal for stairs, slope and lift', async ({ page }) => {
  const visual = page.locator('#wep-gravity-paths')
  await expect(visual).toContainText('W = mgh = 1500 J')
  await visual.getByRole('button', { name: 'Slope' }).click()
  await expect(visual).toContainText('Slope: the body rises through the same vertical height 3 m')
  await visual.getByRole('button', { name: 'Play' }).click()
  await visual.getByRole('button', { name: 'Pause' }).click()
  await visual.getByRole('button', { name: 'Restart' }).click()
  await visual.getByRole('button', { name: 'Lift' }).click()
  await expect(visual).toContainText('W = mgh = 1500 J')
})

test('unit ladder converts joules to ergs and kilojoules', async ({ page }) => {
  const visual = page.locator('#wep-unit-ladder')
  await expect(visual).toContainText('1 J = 10⁷ erg')
  await visual.getByLabel('Convert to unit').selectOption('kJ')
  await expect(visual).toContainText('1 joule (J) = 0.001 kilojoule (kJ)')
  await visual.getByRole('button', { name: 'Reset' }).click()
  await expect(visual).toContainText('1 joule (J) = 10000000 erg')
})

test('power race and force-speed labs calculate power', async ({ page }) => {
  const race = page.locator('#wep-power-race')
  await setRange(race.locator('input[aria-label="Time for crane B in seconds"]'), 5)
  await expect(race).toContainText('Crane B takes 5 s, so P = 1000 W')
  await race.getByRole('button', { name: 'Play' }).click()
  await race.getByRole('button', { name: 'Pause' }).click()
  await race.getByRole('button', { name: 'Reset' }).click()

  const fv = page.locator('#wep-power-force-speed')
  await setRange(fv.locator('input[aria-label="Force in newtons"]'), 400)
  await setRange(fv.locator('input[aria-label="Speed in metres per second"]'), 5)
  await expect(fv).toContainText('P = Fv = 2000 W')
})

test('work, energy and power comparisons toggle between cases', async ({ page }) => {
  const wp = page.locator('#wep-work-vs-power')
  await wp.getByRole('button', { name: 'Same power, different work' }).click()
  await expect(wp).toContainText('Both motors have the same power')

  const ep = page.locator('#wep-energy-vs-power')
  await ep.getByRole('button', { name: 'Same power, different energy' }).click()
  await expect(ep).toContainText('Running for twice as long transfers twice the energy')

  const friction = page.locator('#wep-friction-loss')
  await friction.getByRole('button', { name: 'Real: friction and air resistance' }).click()
  await expect(friction).toContainText('Mechanical energy falls from 100 to 70 units')
})

test('energy meter and energy-unit task work by keyboard and mouse', async ({ page }) => {
  const meter = page.locator('#wep-kwh-meter')
  await setRange(meter.locator('input[aria-label="Appliance power in watts"]'), 1000)
  await setRange(meter.locator('input[aria-label="Time in hours"]'), 1)
  await meter.getByRole('button', { name: 'Run meter' }).click()
  await meter.getByRole('button', { name: 'Pause' }).click()
  await expect(meter).toContainText('uses 1.00 kWh')

  const scale = page.locator('#wep-energy-scale')
  await scale.getByRole('button', { name: 'Check order' }).click()
  await expect(scale).toContainText('Not yet')
  await scale.getByRole('button', { name: 'Reset' }).click()
})

test('potential and kinetic energy labs update values', async ({ page }) => {
  const ramp = page.locator('#wep-pe-ke-ramp')
  await ramp.getByRole('button', { name: 'Step' }).click()
  await ramp.getByRole('button', { name: 'Step' }).click()
  await expect(ramp).toContainText('U = 50.0 J, K = 50.0 J, total = 100.0 J')

  const speed = page.locator('#wep-ke-speed')
  await setRange(speed.locator('input[aria-label="Speed in metres per second"]'), 20)
  await expect(speed).toContainText('K = 200,000 J')

  const work = page.locator('#wep-work-energy')
  await work.getByRole('button', { name: 'Play' }).click()
  await work.getByRole('button', { name: 'Pause' }).click()
  await work.getByRole('button', { name: 'Restart' }).click()
  await expect(work).toContainText('W = ΔK')

  const forms = page.locator('#wep-ke-forms')
  await expect(forms).toContainText('Translational')
  await expect(forms).toContainText('Rotational')
  await expect(forms).toContainText('Vibrational')
})

test('conversion chain and dissipation animations respond to controls', async ({ page }) => {
  const chain = page.locator('#wep-conversion-chain')
  await chain.getByRole('button', { name: 'Loudspeaker' }).click()
  await expect(chain).toContainText('Electrical → Sound')
  await chain.getByRole('button', { name: 'Play' }).click()
  await chain.getByRole('button', { name: 'Pause' }).click()

  const dissipation = page.locator('#wep-dissipation')
  await dissipation.getByRole('button', { name: 'Play' }).click()
  await dissipation.getByRole('button', { name: 'Pause' }).click()
  await dissipation.getByRole('button', { name: 'Restart' }).click()
  await expect(dissipation).toContainText('Mechanical energy falls')
})

test('free fall, pendulum and energy graph show conservation', async ({ page }) => {
  const freefall = page.locator('#wep-freefall')
  await freefall.getByRole('button', { name: 'Step' }).click()
  await freefall.getByRole('button', { name: 'Step' }).click()
  await expect(freefall).toContainText('U = 25.0 J, K = 25.0 J')
  await freefall.getByRole('button', { name: 'Reset' }).click()

  const pendulum = page.locator('#wep-pendulum')
  await pendulum.getByRole('button', { name: 'Play' }).click()
  await pendulum.getByRole('button', { name: 'Pause' }).click()
  await expect(pendulum).toContainText('Total = 100 units')

  const graph = page.locator('#wep-energy-graph')
  await expect(graph).toContainText('At h/2')
})

test('reduced motion renders final visual states', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload()
  await expect(page.locator('#wep-angle-resolve')).toContainText('Final state shown because reduced motion is on')
  await expect(page.locator('#wep-power-race')).toContainText('Final state shown because reduced motion is on')
})

test('memory, revision, assessment and progress persist', async ({ page }) => {
  page.on('dialog', (dialog) => dialog.accept())

  await expect(page.locator('#memory')).toContainText('Build the work–energy account')
  await expect(page.locator('#revision')).toContainText('Common mistakes')
  await page.locator('#flashcards .flashcard').first().click()
  await expect(page.locator('#flashcards')).toContainText('point of application')

  await page.locator('#WQ22').fill('20')
  await page.locator('#WQ2').fill('50')
  await page.getByRole('button', { name: 'Submit assessment' }).click()
  await expect(page.locator('#assessment-summary')).toBeVisible()
  await expect(page.locator('#progress-label')).toContainText('of 8 milestones')

  await page.reload()
  await expect(page.locator('#WQ22')).toHaveValue('20')
  await expect(page.locator('#assessment-summary')).toBeVisible()
})
