import { test, expect } from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage';
import { faker } from '@faker-js/faker';


let signupPage: SignupPage;
test.describe('Signup Page Tests', () => {
  

  // Faker variables
  let companyFirstName: string;
  let companyLastName: string;
  let companyEmail: string;
  let companyPhone: string;

  let plantFirstName: string;
  let plantLastName: string;
  let plantEmail: string;
  let plantPhone: string;

  test.beforeEach(async ({ page }) => {
   

    // Initialize faker variables fresh before each test
    companyFirstName = faker.person.firstName();
    companyLastName = faker.person.lastName();
    companyEmail = faker.internet.email();

    // ✅ Pakistan mobile number (valid 11-digit format: 03XXXXXXXXX)
    companyPhone = faker.helpers.replaceSymbols('03244566321');

    plantFirstName = faker.person.firstName();
    plantLastName = faker.person.lastName();
    plantEmail = faker.internet.email();

    // ✅ US mobile number (valid format: +1XXXXXXXXXX)
    plantPhone = faker.helpers.replaceSymbols('+966112345678');

    // Navigate and setup page object
    await page.goto('/signup');
    signupPage = new SignupPage(page);
  });

  test('User can sign up successfully', async ({ page }) => {
    

    // Fill Company Info
    await signupPage.fillCompanyInfo(
      companyFirstName,          // Company Name
      faker.string.numeric(6),   // CR Number
      companyFirstName,
      companyLastName,
      companyEmail,
      companyPhone
    );

    // Fill Plant Info
    await signupPage.fillPlantInfo(
      plantFirstName,                 // Plant Name
      faker.string.numeric(7),   // CR Number
      plantFirstName,
      plantLastName,
      plantEmail,
      plantPhone
    );


     // ✅ Verify successful signup
    await page.pause(); 



    // Submit form
    await signupPage.submitForm();
    await expect(page).toHaveURL(/.*signup-successfully/);

   
  });
});
