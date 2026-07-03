import { test, expect } from '@playwright/test';

test('Admin can create and verify a new OrangeHRM employee', async ({ page }) => {
  const firstName = 'Test';
  const lastName = 'Automation';
  const employeeName = `${firstName} ${lastName}`;

  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await expect(page).toHaveTitle(/OrangeHRM/);

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await expect(page.getByText('Dashboard')).toBeVisible();

  await page.getByRole('link', { name: 'PIM' }).click();
  await expect(page.locator('h6')).toContainText('PIM');

  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByText('Add Employee')).toBeVisible();

  await page.fill('input[name="firstName"]', firstName);
  await page.fill('input[name="lastName"]', lastName);
  await page.click('button[type="submit"]');

  await expect(page.getByText('Personal Details')).toBeVisible();
  await expect(page.locator('input[name="firstName"]')).toHaveValue(firstName);
  await expect(page.locator('input[name="lastName"]')).toHaveValue(lastName);

  await page.getByRole('link', { name: 'PIM' }).click();
  await expect(page.locator('h6')).toContainText('PIM');


});
