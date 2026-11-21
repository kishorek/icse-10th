import { expect, test } from '@playwright/test'

const pages = [
  { path: '/chapter-12a.html', lessons: 6 },
  { path: '/chapter-12b.html', lessons: 3 },
  { path: '/chapter-12c.html', lessons: 4 },
  { path: '/chapter-12d.html', lessons: 4 },
  { path: '/chapter-12e.html', lessons: 5 },
  { path: '/chapter-12f.html', lessons: 4 }
]

for (const chapter of pages) {
  test(`${chapter.path} gives every lesson a visual and a memory hook`, async ({ page }) => {
    const errors = []
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text())
    })
    page.on('pageerror', (error) => errors.push(error.message))
    page.on('requestfailed', (request) => errors.push(`Request failed: ${request.url()}`))

    await page.goto(chapter.path)

    for (let n = 1; n <= chapter.lessons; n += 1) {
      const lesson = page.locator(`#lesson-${n}`)
      await expect(lesson, `lesson ${n} exists`).toBeVisible()

      const visual = lesson.locator('figure.lesson-visual')
      await expect(visual.first(), `lesson ${n} has a visual`).toBeVisible()
      expect(await visual.count(), `lesson ${n} visual count`).toBeGreaterThan(0)
      const canvas = visual.first().locator('.lesson-visual__canvas')
      await expect(canvas, `lesson ${n} visual canvas`).toBeVisible()
      expect(await canvas.locator(':scope > *').count(), `lesson ${n} canvas content`).toBeGreaterThan(0)
      await expect(visual.first().locator('.lesson-visual__notice')).toContainText('What to notice')

      const hook = lesson.locator('aside.memory-hook')
      await expect(hook, `lesson ${n} has a memory hook`).toHaveCount(1)
      await expect(hook.locator('.memory-hook__mapping tbody tr')).not.toHaveCount(0)
      await expect(hook.locator('.memory-hook__recall')).toContainText('Recall')

      const mapping = hook.locator('.memory-hook__table-wrap')
      await expect(mapping, `lesson ${n} mapping starts visible`).toBeVisible()
      await hook.getByRole('button', { name: 'Cover the mapping' }).click()
      await expect(mapping, `lesson ${n} mapping hides`).toBeHidden()
      await expect(hook.getByRole('button', { name: 'Reveal the mapping' })).toBeVisible()
    }

    expect(errors, 'browser console and request errors').toEqual([])
  })
}
