import { expect, test } from '@playwright/test'

test('root lists the available chapter and links to it', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Organic Chemistry \| ICSE Class 10/)
  await expect(page.getByRole('heading', { level: 1, name: 'Organic Chemistry' })).toBeVisible()
  const link = page.getByRole('link', { name: /^Chapter 1\b/ })
  await expect(link).toHaveAttribute('href', './chapter-1.html')
  await expect(page.getByRole('link', { name: /^Chapter 12A\b/ })).toHaveAttribute(
    'href',
    './chapter-12a.html'
  )
  await link.click()
  await expect(page).toHaveURL(/chapter-1\.html$/)
  await expect(page.locator('#chapter-title')).toHaveText('Organic Chemistry')
})
