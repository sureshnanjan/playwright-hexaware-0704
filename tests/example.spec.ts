import { test, expect } from '@playwright/test';
import { HomePage } from '../heroku_operations/home_page';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);
});

test('get started link', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  //await page.getByRole('link', { name: 'abtest' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading')).toHaveText("Welcome to the-internet");
});

test('Check Title', async ({ page }) => {
  const app = new HomePage()
  const expected_title = "Welcome to the-internet"
  const actual_title = app.getTitle()
  //app.getAllAvailableExamples(1,)
  await expect(actual_title).toEqual(expected_title)
  
});
