import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);
});

test('get started link', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('link', { name: 'abtest' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading')).toHaveText("Welcome to the-internet");
});
