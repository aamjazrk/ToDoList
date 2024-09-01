import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the base URL
  await page.goto('http://localhost:3000/');

  // Fill in the email and password
  await page.getByLabel('Email').fill('sirinya@gmail.com'); // Enter test email
  await page.getByLabel('Password').fill('zaq1@wsX'); // Enter test password

  // Click the login button, which will submit the form
  await page.getByRole('button', { name: 'Login' }).click(); // Using 'click'

  // Wait for the page to navigate after successful login
  await page.waitForNavigation({ url: 'http://localhost:3000/project', timeout: 10000 });

  // Verify that the page URL is as expected
  await expect(page).toHaveURL('http://localhost:3000/project');


});