import { test, expect } from '@playwright/test';

test('Open Amazon, search for Laptop, click first result, and verify product title', async ({ page }) => {
  await page.goto('https://www.amazon.com/');

  const acceptCookies = page.locator('input#sp-cc-accept, #sp-cc-accept');
  if (await acceptCookies.count() > 0) {
    await acceptCookies.click();
  }

  const searchInput = page.locator('input#twotabsearchtextbox');
  await expect(searchInput).toBeVisible();
  await searchInput.fill('Laptop');
  await searchInput.press('Enter');

  const firstResult = page.locator('[data-component-type="s-search-result"] h2 a').first();
  await expect(firstResult).toBeVisible({ timeout: 10000 });
  await firstResult.click();

  const productTitle = page.locator('#productTitle, #title');
  await expect(productTitle).toBeVisible({ timeout: 10000 });
  await expect(productTitle).not.toBeEmpty();
});
