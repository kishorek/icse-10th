import { expect, test } from '@playwright/test'

test('root lists the available chapters and links to them', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Interactive Science \| ICSE Class 10/)
  await expect(page.getByRole('heading', { level: 1, name: 'Interactive Science' })).toBeVisible()
  await expect(page.getByRole('link', { name: /^Physics 1\b/ })).toHaveAttribute(
    'href',
    './chapter-physics-1.html'
  )
  const link = page.getByRole('link', { name: /^Chapter 1\b/ })
  await expect(link).toHaveAttribute('href', './chapter-1.html')
  await expect(page.getByRole('link', { name: /^Chapter 12A\b/ })).toHaveAttribute(
    'href',
    './chapter-12a.html'
  )
  await expect(page.getByRole('link', { name: /^Chapter 12B\b/ })).toHaveAttribute(
    'href',
    './chapter-12b.html'
  )
  await expect(page.getByRole('link', { name: /^Chapter 12C\b/ })).toHaveAttribute(
    'href',
    './chapter-12c.html'
  )
  await expect(page.getByRole('link', { name: /^Chapter 12D\b/ })).toHaveAttribute(
    'href',
    './chapter-12d.html'
  )
  await expect(page.getByRole('link', { name: /^Chapter 12E\b/ })).toHaveAttribute(
    'href',
    './chapter-12e.html'
  )
  await expect(page.getByRole('link', { name: /^Chapter 12F\b/ })).toHaveAttribute(
    'href',
    './chapter-12f.html'
  )
  await link.click()
  await expect(page).toHaveURL(/chapter-1\.html$/)
  await expect(page.locator('#chapter-title')).toHaveText('Organic Chemistry')
})
