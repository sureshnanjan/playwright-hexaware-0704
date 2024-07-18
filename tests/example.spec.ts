import { test, expect } from '@playwright/test';
import { HomePage } from '../playwright_adapter/HomePage';
import { HomePageOperations } from '../heroku_operations/home_page_operations';

test.only('has title', async ({ page, browser, browserName }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);
  await expect("SURESH")
});

test('MY API Test', async ({ request }) => {
  
});

test('get started link', async ({ page }) => {
  await page.goto('/');
  // Arrange
  // ACT
  // Assert 
  // BDD Given When Then - Gherking
  // Click the get started link.
  //await page.getByRole('link', { name: 'abtest' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading')).toHaveText("Welcome to the-internet");
  await page.getByRole('button', {name:"Add Elemnet"}).click()
});

test('Check Title', async ({ page }) => {
  //const app = new HomePage()
  const app:HomePageOperations = new HomePage()
  const expected_title = "Welcome to the-internet"
  const actual_title = app.getTitle()
  //app.getAllAvailableExamples(1,)
  await expect(actual_title).toEqual(expected_title)
  
});

test('Check Sub Title', async ({ page }) => {
  //const app = new HomePage()
  const app:HomePageOperations = new HomePage()
  const expected_title = "Available Examples"
  const actual_title = app.getSubTitle()
  //app.getAllAvailableExamples(1,)
  await expect(actual_title).toEqual(expected_title)
  
});

test('Check Examples count', async ({ page }) => {
  //const app = new HomePage()
  const app:HomePageOperations = new HomePage()
  const expected_count = 44
  const actual_count = (await app.getAllExamples()).length
  //app.getAllAvailableExamples(1,)
  await expect(actual_count).toEqual(expected_count)
  
});

test('Accessing AB Test Page works', async ({ page }) => {
  //const app = new HomePage()
  const app:HomePageOperations = new HomePage()
  const expected_title = "A/B Test Variation 1"
   await app.gotoExample("AB Test")
   const actual_title = app.getTitle();
  //app.getAllAvailableExamples(1,)
  await expect(actual_title).toEqual(expected_title)
  
});
