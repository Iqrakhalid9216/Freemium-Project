import { chromium, expect } from "@playwright/test";

export default async function globalsetup() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await browser.newPage();
    

  await page.goto('https://mes-lite.o3ozone.ai/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('Yango@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('I');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Iqra@9216');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('h1')).toContainText('Welcome, Yango delivery!');
  await page.context().storageState({ path: 'auth.json'});

  

}
//export default globalsetup;