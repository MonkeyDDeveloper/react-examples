// @ts-check
import { test, expect } from '@playwright/test'

const TEST_URI = 'http://localhost:5173/'

test('FACT 001: HAS FACT', async ({ page }) => {
  await page.goto(TEST_URI)

  const factParagraph = page.getByRole('paragraph')
  const factImage = page.getByRole('img')
  const imgSrc = await factImage.getAttribute('src')
  const pContent = await factParagraph.textContent()
  const firstWord = pContent?.split(' ')[0]
  expect(pContent?.length).toBeGreaterThan(0)
  expect(imgSrc).toContain(firstWord)
})
