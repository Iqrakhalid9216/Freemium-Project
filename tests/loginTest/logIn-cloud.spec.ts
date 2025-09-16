import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('login');
  // await page.getByRole('textbox', { name: 'Email' }).click();
  // await page.getByRole('textbox', { name: 'Email' }).fill('Yango@yopmail.com');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  // await page.getByRole('textbox', { name: 'Password' }).fill('I');
  // await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  // await page.getByRole('textbox', { name: 'Password' }).fill('Iqra@9216');
  // await page.getByRole('button', { name: 'Login' }).click();
  // await expect(page.locator('h1')).toContainText('Welcome, Yango delivery!');
});