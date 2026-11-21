import { expect, test } from '@playwright/test'

test('landing links to all seven chapters', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('link', { name: /^Chapter 1\b/ })).toHaveAttribute(
    'href',
    './chapter-1.html'
  )
  await expect(page.getByRole('link', { name: /^Chapter 12A\b/ })).toHaveAttribute(
    'href',
    './chapter-12a.html'
  )
  await expect(page.getByRole('link', { name: /^Chapter 12B\b/ })).toHaveAttribute(
    'href',
    './chapter-12b.html'
  )
  for (const suffix of ['12c', '12d', '12e', '12f']) {
    await expect(page.getByRole('link', { name: new RegExp(`^Chapter ${suffix.toUpperCase()}\\b`) })).toHaveAttribute(
      'href',
      `./chapter-${suffix}.html`
    )
  }
})

test('chapter progress is isolated', async ({ page }) => {
  await page.goto('/chapter-12a.html')
  for (const [id, value] of [
    ['a1-q1', 'C'],
    ['a1-q2', 'B'],
    ['a1-q3', 'D']
  ]) {
    await page.locator(`input[name="${id}"][value="${value}"]`).check()
  }
  await expect(page.locator('#progress-label')).toContainText('1 of 7 milestones')

  await page.goto('/chapter-1.html')
  await expect(page.locator('#progress-label')).toContainText('0 of 6 milestones')

  await page.goto('/chapter-12b.html')
  await expect(page.locator('#progress-label')).toContainText('0 of 4 milestones')

  await page.goto('/chapter-12c.html')
  await expect(page.locator('#progress-label')).toContainText('0 of 5 milestones')

  await page.goto('/chapter-12d.html')
  await expect(page.locator('#progress-label')).toContainText('0 of 5 milestones')

  await page.goto('/chapter-12e.html')
  await expect(page.locator('#progress-label')).toContainText('0 of 6 milestones')

  await page.goto('/chapter-12f.html')
  await expect(page.locator('#progress-label')).toContainText('0 of 5 milestones')
})

test('chapter switcher and deep links work', async ({ page }) => {
  await page.goto('/chapter-12a.html#lesson-5')
  await expect(page.locator('#lesson-5')).toBeVisible()
  await page
    .getByRole('navigation', { name: 'Chapter switcher' })
    .getByRole('link', { name: /Chapter 12B/ })
    .click()
  await expect(page).toHaveURL(/chapter-12b\.html$/)
  await expect(page.locator('#chapter-title')).toHaveText('Hydrocarbons: Alkanes')
})

test('end-of-chapter navigation follows the next chapter link', async ({ page }) => {
  await page.goto('/chapter-12a.html')
  const endNav = page.getByRole('navigation', { name: 'Chapter navigation' })
  await expect(endNav).toBeVisible()
  await expect(endNav.getByRole('link', { name: 'All chapters' })).toBeVisible()
  await endNav.getByRole('link', { name: /Chapter 12B/ }).click()
  await expect(page).toHaveURL(/chapter-12b\.html$/)
  await expect(page.locator('#chapter-title')).toHaveText('Hydrocarbons: Alkanes')

  const lastChapterNav = page.getByRole('navigation', { name: 'Chapter navigation' })
  await expect(lastChapterNav.getByRole('link', { name: /Chapter 12A/ })).toBeVisible()
  await expect(lastChapterNav.getByRole('link', { name: /Chapter 12C/ })).toBeVisible()
})

test('required widths have no page-level horizontal overflow', async ({ page }) => {
  for (const path of ['/', '/chapter-1.html', '/chapter-12a.html', '/chapter-12b.html', '/chapter-12c.html', '/chapter-12d.html', '/chapter-12e.html', '/chapter-12f.html']) {
    for (const [width, height] of [
      [360, 800],
      [768, 1024],
      [1280, 900]
    ]) {
      await page.setViewportSize({ width, height })
      await page.goto(path)
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth
      )
      expect(overflow, `${path} at ${width}px`).toBeLessThanOrEqual(1)
    }
  }
})
