import { test } from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage';
import { faker } from '@faker-js/faker';

let signupPage: SignupPage;

test.describe('Signup Page Tests', () => {
  let companyFirstName: string;
  let companyLastName: string;
  let companyEmail: string;
  let companyPhone: string;

  let plantFirstName: string;
  let plantLastName: string;
  let plantEmail: string;
  let plantPhone: string;

  test.beforeEach(async ({ page }) => {
    companyFirstName = faker.person.firstName();
    companyLastName = faker.person.lastName();
    companyEmail = faker.internet.email({ provider: 'yopmail.com' });


    //  Valid Pakistan number
    companyPhone = '3214567890';

    plantFirstName = faker.person.firstName();
    plantLastName = faker.person.lastName();
    plantEmail = faker.internet.email({ provider: 'yopmail.com' });


    // ✅ Valid US number
    plantPhone = '2015550123';

    await page.goto('/signup');
    signupPage = new SignupPage(page);
  });

  test('User can sign up successfully', async () => {
    // Fill Company Info
    await signupPage.fillCompanyInfo(companyFirstName,faker.string.numeric(6),companyFirstName,companyLastName,companyEmail,companyPhone
    );

    // Fill Plant Info
    await signupPage.fillPlantInfo(plantFirstName,faker.string.numeric(7),plantFirstName,plantLastName,plantEmail,plantPhone
    );

    // Submit form
    await signupPage.submitForm();

    

    // Assert success popup
    await signupPage.assertSignupSuccess();

    
  });
});
